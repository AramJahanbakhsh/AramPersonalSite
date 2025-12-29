let loader = document.querySelector(".loader-site")
let body = document.body


    window.addEventListener("load", function(){

setTimeout(function(){
loader.classList.add("hide")
}, 1000);

body.classList.remove("hide")
body.classList.add("visible")
})


let curour = document.querySelector(".cursour")

document.addEventListener("mousemove" , function(event){
    curour.style.left= event.clientX+ "px"
    curour.style.top= event.clientY+ "px"
})

let btns=document.querySelectorAll("button")

btns.forEach(function(btn){
    btn.addEventListener("mouseenter" , function(){
    curour.classList.add("cursor-hovered")
    btn.addEventListener("mouseleave", function(){
   curour.classList.remove("cursor-hovered")
    })
})
})
console.log(getComputedStyle(document.body).backgroundColor
)

let icons= document.querySelectorAll(".icons")
let sections = document.querySelectorAll(".page-section")


icons.forEach(function(icon , index){
    icon.addEventListener("click", function(){
        if(sections[index]){
              sections[index].scrollIntoView({ behavior: "smooth" });
        }
    })
})

let items = document.querySelectorAll(".inf-tems")
let sideLine = document.querySelector(".side-line")

items.forEach(function(item , index){
    item.addEventListener("mouseenter", function(){
        let topside = index*75
        sideLine.style.top= topside+ "px"
    })
})

let bars = document.querySelectorAll(".bar")
let precents= document.querySelectorAll(".skill-precent")

bars.forEach(function(bar , index){
    let value = precents[index].innerHTML.replace("%" , "")
    bar.style.width=value+ "%"
})


let sendbtn = document.getElementById("send")
let inputs = document.querySelectorAll("#contact-form input, #contact-form textarea");
inputs.forEach(input => {
    sendbtn.addEventListener("click", function(){
        if(input.value ===""){  
            let inpvalue= input.value
        inpvalue.style.borderColor="red"
        }
        
    })
});




(function(){
    emailjs.init("nxikHnDVK_OI2Xd8p");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_ft29qre", "template_p0kfz4k", this)
    .then(() => {
        sendbtn.innerHTML="پیام شما ارسال شد"
        sendbtn.style.backgroundColor= "linear-gradient(90deg, #6effbbff, #4e63a0);"
        inputs.forEach(input=>{
            input.value=" "
        })
        setTimeout(() => {
    sendbtn.innerHTML = "ارسال پیام";
     }, 4000);

    }, (err) => {
        console.log(err);
        alert("خطا در ارسال");
    });
});