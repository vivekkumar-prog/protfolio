const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

const roles = [

    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = roles[roleIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();




const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#0F172A";

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(15,23,42,.75)";

        header.style.boxShadow = "none";

    }

});




const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});



const revealItems = document.querySelectorAll(

".card,.skill-card,.project-card,.certificate-card,.about-container,.timeline-item"

);

function reveal() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".7s ease";

});

window.addEventListener("scroll", reveal);

reveal();



const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#3B82F6";
progress.style.zIndex = "99999";
progress.style.width = "0%";

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight -

                   document.documentElement.clientHeight;

    progress.style.width =

    (scroll / height) * 100 + "%";

});




const heroImage = document.querySelector(".image-box");

window.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2 - e.pageX)/40;

    let y = (window.innerHeight/2 - e.pageY)/40;

    heroImage.style.transform =

    `rotateY(${x}deg) rotateX(${-y}deg)`;

});



const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

let circle = document.createElement("span");

const d = Math.max(this.clientWidth,this.clientHeight);

circle.style.width = d+"px";

circle.style.height = d+"px";

circle.style.left =

e.clientX-this.offsetLeft-d/2+"px";

circle.style.top =

e.clientY-this.offsetTop-d/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});



window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});





const footer = document.querySelector("footer p");

footer.innerHTML =

`© ${new Date().getFullYear()} Vivek Kumar | Designed & Developed by Vivek Kumar`;