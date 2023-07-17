
function openCity(evt,cityName){
let tabcontent=document.getElementsByClassName("tabcontent");
console.log(tabcontent)//배열
for(let i=0;i<tabcontent.length;i++){
    tabcontent[i].style.display="none"
}
let tablinks=document.getElementsByClassName('tablinks');
for(let i=0; i<tablinks.length;i++){
    tablinks[i].classList.remove('active')
}
console.log(evt.currentTarget);
evt.currentTarget.classList.add("active");
document.getElementById(cityName).style.display="block";
}


document.getElementById('defaultOpen').click();

//classList 메서드
//.classList.add("active")    --> active라는 클래스추가
//.classList.remove("active")  --> active라는 클래스제거
//.classList.toggle("active")  --> active클래스가 존재하면 active 클래스를 제거하고
                                //active클래스가 존재하지 않으며 active 클래스를 추가
//classList.contains("active")  --> active클래스가 존재하는가? true/false로 반환
// classList.replace("A","B")  --> A 클래스를 B클래스로 변경                         
