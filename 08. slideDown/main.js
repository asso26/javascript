let preScrollPos=window.pageYOffset;
console.log("이전값",preScrollPos)
//window.addEventListener('scroll',function(){})
window.onscroll=function(){
let currentScrollpos=window.pageYOffset;
console.log("현재값",currentScrollpos)
if(preScrollPos>currentScrollpos){
    document.getElementById('navbar').style.top="0"
}else{
    document.getElementById('navbar').style.top="-54px"
}
preScrollPos=currentScrollpos;
}
