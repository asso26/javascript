let acc =document.getElementsByClassName('accordion');

console.log(acc[1])
//console.log(acc.length)

for(let i=0; i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle("active")
        let panel=this.nextElementSibling;//나의 다음요소(동생)
        // 0 --> false
        // 0를제외한 숫자 --> true
        //scrollHeight :화면바깥으로 삐져나간 부분까지 포함해서 전체의 글의 높이
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }else{
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
    })
}


