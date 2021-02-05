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

let tcpudp = [
    {
        "tcpudpHead" : " TCP / UDP",
        "tcpudp":"TCP stands for Transmission Control System. It enables end to end communication between devices connected to internet through World Wide Web communication system. It can also play as role receiver and sender. UDP stands for User Datagram Protocol. We use UDP in application where speed is much more important than assurance",
         
    }
];