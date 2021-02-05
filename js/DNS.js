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


let DNS = [
    {
        "DNSHead" : "DNS (Domain name System)",
        "DNS":"DNS stands for Domain Name System. It translates human readable domain names into IP address.The process of DNS resolution involves converting a hostname (such as www.example.com) into acomputer-friendly IP address (such as 192.168.1.1).The Domain Name System delegates the responsibility of assigning domain names and mapping those names to Internet resources by designating authoritativename servers for each domain",
         "DNS2":[ 
             "The Domain Name System also specifies the technical functionality of the database service that is at its core",
             "The Domain Name System maintains the domain name hierarchy and provides translation services between it and the address spaces. Internet name servers and a communication protocol implement the Domain Name System.",
             "An important and ubiquitous function of the DNS is its central role in distributed Internet services such as cloud services and content delivery networks.",
             "The key functionality of the DNS exploited here is that different users can simultaneously receive different translations for the same domain name, a key point of divergence from a traditional phone-book view of the DNS.",
             "This process of using the DNS to assign proximal servers to users is key to providing faster and more reliable responses on the Internet and is widely used by most major Internet services.",
         ] 
		
    }
];

 