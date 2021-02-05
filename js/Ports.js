function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();


let ports = [
    {
        "portsHead" : " Ports",
        "port":" a port serves as an interface between the computer and other computers or peripheral devices.In computer terms, a port generally refers to the part of a computing device available for connection to peripherals such as input and output devices.Computer ports have many uses, to connect a monitor, webcam,speakers, or other peripheral devices.Computer ports in common use cover a wide variety of shapes such as round (PS/2, etc.) Physically identical connectors may be used for widely different standards, especially on older personal computer systems, ystems not generally designed according to the current Microsoft Windows compatibility guides.",
         
    }
];
