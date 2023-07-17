let clickImage=document.querySelector('#imgClick');
let imgElement=document.getElementById('myImage');
let main=document.getElementById('main');
let images=[
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
    "img/06.jpg",
    "img/07.jpg",
    "img/08.jpg",
    "img/09.jpg"
];
let mousePos={x:0, y:0};
let currentIndex=0;

imgElement.addEventListener('click',function(){
    let currentImage=images[currentIndex];
    imgElement.src=currentImage;
    currentIndex++;
    if(currentIndex>=images.length){
        currentIndex=0;
    }

})

window.addEventListener('mousemove',function(e){
    //e.clientX : 현재화면에서 마우스의 x값을 추출
    //e.clientY : 현재화면에서 마우스의 x값을 추출
    mousePos.x=-(e.clientX/window.innerWidth) * 15;
    mousePos.y=(e.clientY/window.innerHeight) * 15;
    console.log(e.clientX,e.clientY)
    clickImage.style.transform=`translateY(${mousePos.y}px) translateX(${mousePos.x}px)`;
})