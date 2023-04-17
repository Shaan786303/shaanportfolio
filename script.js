// For Parallax Scrolling

let text=document.getElementById("text");
let moon=document.getElementById("moon");
let island1=document.getElementById("island1");
let island2=document.getElementById("island2");

window.addEventListener("scroll",() => {
    let value=window.scrollY;
    text.style.marginTop=value * 1.5 + 'px';
    moon.style.top=value*1.5+'px';
    island1.style.left=value*-1.5+'px';
    island2.style.left=value*1.5+'px';
});


//  Toggle Icon Navigation

let menuIcon=document.querySelector('#menu-icon');
let nav =document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

// For Activating Navigation Bar

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// For Sticky Navigation Bar

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// For Hiding Navigation Bar

menuIcon.classList.remove('bx-x');
nav.classList.remove('active');

};

// For Scroll Reveal

ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-content, .project-box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Multiple Text Using Typed JS
const type = new Typed('.multiple-text', {
    strings:['Frontend Developer', 'Android Developer','Content Writer', 'Video Editor', 'Graphic Designer', ],
    typeSpeed:60,
    backSpeed:30,
    backDelay:1000,
    loop:true
});


const types = new Typed('.multiple-texts', {
    strings:['Frontend Developer', 'Android Developer','Content Writer', 'Video Editor', 'Graphic Designer', ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const typ = new Typed('.text', {
    strings:['Hello Everyone'],
    typeSpeed:200,
    loop:false
});

function myFunction()
{
    var dots=document.getElementById("dots");
    var more=document.getElementById("more");
    var btn=document.getElementById("btn");

    if(dots.style.display == "none"){
        dots.style.display = "block";
        btn.innerHTML = "More About Me";
        more.style.display = "none";
    }
    else{
        dots.style.display = "none";
        btn.innerHTML = "Read Less";
        more.style.display = "block";
    }
    }

function myFunction_1()
{
    var dots=document.getElementById("dot-1");
    var more=document.getElementById("more-1");
    var btn=document.getElementById("btn-1");

    if(dots.style.display == "none"){
        dots.style.display = "block";
        btn.innerHTML = "Read More";
        more.style.display = "none";
    }
    else{
        dots.style.display = "none";
        btn.innerHTML = "Read Less";
        more.style.display = "block";
    }
    }

    function myFunction_2()
{
    var dots=document.getElementById("dot-2");
    var more=document.getElementById("more-2");
    var btn=document.getElementById("btn-2");

    if(dots.style.display == "none"){
        dots.style.display = "block";
        btn.innerHTML = "Read More";
        more.style.display = "none";
    }
    else{
        dots.style.display = "none";
        btn.innerHTML = "Read Less";
        more.style.display = "block";
    }
    }

    function myFunction_3()
    {
        var dots=document.getElementById("dot-3");
        var more=document.getElementById("more-3");
        var btn=document.getElementById("btn-3");
        if(dots.style.display == "none"){
            dots.style.display = "block";
            btn.innerHTML = "Read More";
            more.style.display = "none";
        }
        else{
            dots.style.display = "none";
            btn.innerHTML = "Read Less";
            more.style.display = "block";
        }
        }


        function myFunction_4()
        {
            var dots=document.getElementById("dot-4");
            var more=document.getElementById("more-4");
            var btn=document.getElementById("btn-4");
            if(dots.style.display == "none"){
                dots.style.display = "block";
                btn.innerHTML = "Read More";
                more.style.display = "none";
            }
            else{
                dots.style.display = "none";
                btn.innerHTML = "Read Less";
                more.style.display = "block";
            }
            }

            function myFunction_5()
            {
                var dots=document.getElementById("dot-5");
                var more=document.getElementById("more-5");
                var btn=document.getElementById("btn-5");
                if(dots.style.display == "none"){
                    dots.style.display = "block";
                    btn.innerHTML = "Read More";
                    more.style.display = "none";
                }
                else{
                    dots.style.display = "none";
                    btn.innerHTML = "Read Less";
                    more.style.display = "block";
                }
                }

// Vanilla Tilt

    VanillaTilt.init(document.querySelectorAll(".services-box"),{
        max: 20,
        speed: 2500,
        glare: true,
        "max-glare": .4,
    });

    VanillaTilt.init(document.querySelectorAll(".about-img"),{
        max: 20,
        speed: 2500,
        glare: true,
        "max-glare": .2,
    });

// For Form Submission

function sendEmail(){

Email.send({

    SecureToken: "4972c7ca-28b8-411e-9eda-ae4bfe98b6ac",
    To : 'mdshaan786303@gmail.com',
    From : "mdshaan786303@gmail.com",
    Subject : "For Query",
    Body : "Name: "+ document.getElementById("name").value
        + "<br> Mob No: " + document.getElementById("phone").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Subject: " + document.getElementById("subject").value
        + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert(message)
);

}

// Loader or Webpage

var preloader= document.getElementById('loading');
function myFunc(){
    preloader.style.display = 'none';
}

