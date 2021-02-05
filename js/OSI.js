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

let OSI = [
    {
        "modelHead" : "The OSI Model (Open Systems Interconnection Model)",
        "model":"It is a theoretical stack of seven layers of reference, that helps to  understand the networks operates. The OSI was published in 1984 by the International Organization for Standardization (ISO). To establish successful communications between different architectures seven layer OSI model was created namely Application, Presentation, Session, Transport, Network, Datalink, Physical LayerThe model partitions the flow of data in a communication system into seven abstraction layers, from the physical implementation of transmitting bits across a communications medium to the highest-level representation of data of a distributed application. Each intermediate layer serves a class of functionality to the layer above it and is served by the layer below it. Classes of functionality are realized in software by standardized communication protocols.",
         "model2":[ 
             "The OSI model was developed starting in the late 1970s to support the emergence of the diverse computer networking methods that were competing for",
             "application in the large national networking efforts in France, the United Kingdom, and the United States. In the 1980s, the model became a working product of the",
             "Open Systems Interconnection group at the International Organization for Standardization (ISO). While attempting to provide a comprehensive description of",
             "networking, the model failed to garner reliance by the software architects in the design of the early Internet, which is reflected in the less prescriptive Internet",
             "Protocol Suite, principally sponsored under the auspices of the Internet Engineering Task Force (IETF).",
         ] 
		
    }
];

 

