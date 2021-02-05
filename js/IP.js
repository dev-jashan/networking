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


let IP = [
    {
        "ipHead" : " Internet Protocol (IP) address",
        "ip":"IP address stands for internet protocol address. It helps to receive and send data over a computer network ( from your device to the destination site) It contains 4 octet from 0-255. It basically a  unique number that identifies every device on internet network.",
         "ip2":[ 
             "The IP address space is managed globally by the Internet Assigned Numbers Authority (IANA), and by five regional Internet registries (RIRs) responsible in their designated territories for assignment to localInternet registries, such as Internet service providers (ISPs), and other end users. IPv4 addresses were distributed by IANA to the RIRs in blocks of approximately 16.8 million addresses each, but have been exhausted at the IANA level since 2011",
             "An IP address serves two principal functions t identifies the host, or more specifically its network interface, and it provides the location of the host in the network",
             "A name indicates what we seek. An address indicates where it is The header of each IP packet contains the IP",
             "The original version of the Internet Protocol that was first deployed in 1983 in the ARPANET",
             "the predecessor of the Internet, is Internet Protocol version 4 (IPv4).",
         ] 
		
    }
];
