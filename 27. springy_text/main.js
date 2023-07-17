let allText=document.querySelectorAll('.threedd');
let delay=0;

//allText.forEach(function(el,idx){}); //el 각각의 아이템, idx는 아이템의 index번호

allText.forEach((el,idx)=>{
    el.style.animationDelay=`${delay}s`;
    el.style.zIndex=allText.length - idx;
    el.classList.add('base-anim');

    delay += 0.15;
});


document.getElementById('five').addEventListener('mousemove',(e)=>{
    let innerWidth=window.innerWidth;//viewport의 넓이값
    let innerHeight=window.innerHeight;//viewport의 높이값
    let clientX=e.clientX;
    let clientY=e.clientY;
    //console.log(clientX,clientY)

    let percentX=clientX/innerWidth;
    //console.log(percentX)
    let maxRangeX=innerWidth*0.15;
    let minX=innerWidth/2 - maxRangeX;
    let maxX=innerWidth/2 + maxRangeX;
    let difX=  maxX - minX;
    let pxOffset = difX * percentX;

    let left=minX + pxOffset;

    let percentY=clientY/innerHeight;
    //console.log(percentX)
    let maxRangeY=innerHeight*0.15;
    let minY=innerHeight/2 - maxRangeY;
    let maxY=innerHeight/2 + maxRangeY;
    let difY=  maxY - minY;
    let pxOffsetY = difY * percentY;

    let top=minY + pxOffsetY;

    allText.forEach((el,idx)=>{
        //el.animate([],{})

        el.animate([
            {top:`${top}px`,left:`${left}px`}
        ],{
            duration:1000,fill:'forwards',delay:idx * 50
        })
    })

})