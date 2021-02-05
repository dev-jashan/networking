


(function () {

    function appCtrl(value, html) {
	document.getElementById("main").innerHTML = "";
        switch (value) {
            case 1: displayOSI(value, html); break;
            case 2: displayIP(value, html); break;
            case 3: displayDNS(value, html); break;
            case 4: displayHARDWARE(value, html); break;
            case 5: displayPORTS(value, html); break;
            case 6: displaySOFTWARE(value, html); break;
            case 7: displayTCPUDP(value, html); break;
        }
    }
    // TCP/ UDP
    function displayTCPUDP(value, html){

        let content = document.getElementById("main");

        let tcpudpHead = tcpudp [0] ["tcpudpHead"];
        
        let tcpudpElement = document.createElement("P");
        tcpudpElement.appendChild(document.createTextNode(tcpudpHead));
        tcpudpElement.id= "headtcpudp";
        
        let nametcpudp = tcpudp [0] ["tcpudp"];
        console.log(nametcpudp);
        let tcpudpElement1 = document.createElement("P");
        tcpudpElement1.id="tcpudp";
        tcpudpElement1.appendChild(document.createTextNode(nametcpudp));
        
        
        
    
        /* All containers boxes */
        let border = document.createElement("div");
        border.id="mainborder";
        
        
    
        /* all containers put inside each others */
        content.appendChild(border).appendChild(tcpudpElement);
        content.appendChild(border).appendChild(tcpudpElement1)



    }

    //IP
    function displayIP(value, html) {
        let content = document.getElementById("main");
        
            //IP Heading
        
            let ipHead = IP [0] ["ipHead"];
            console.log(ipHead);
            let ipElement = document.createElement("P");
            ipElement.appendChild(document.createTextNode(ipHead));
            ipElement.id= "headns";
            
            let nameIp = IP [0] ["ip"];
            console.log(nameIp);
            let ipElement1 = document.createElement("P");
            ipElement1.id="DNS";
            ipElement1.appendChild(document.createTextNode(nameIp));
            
            
            let ipElement2 = document.createElement("P");
            ipElement2.id="DNS";
    
            let ipname2 =  IP [0] ["ip2"];	
            console.log(ipname2.forEach( ipFunction));
        function ipFunction(index){
            ipElement2.innerHTML += index+ "<br>"; 	
        }
            /* All containers boxes */
            let border = document.createElement("div");
            border.id="mainborder";
            
            
        
            /* all containers put inside each others */
            content.appendChild(border).appendChild(ipElement);
            content.appendChild(border).appendChild(ipElement1);
            content.appendChild(border).appendChild(ipElement2);

    }

    // DNS
    function displayDNS(value, html) {
        let content = document.getElementById("main");
            //DNS Heading
        
            let dnsHead = DNS [0] ["DNSHead"];
            console.log(dnsHead);
            let dnsElement = document.createElement("P");
            dnsElement.appendChild(document.createTextNode(dnsHead));
            dnsElement.id= "headns";
            
            let nameDns = DNS [0] ["DNS"];
            console.log(nameDns);
            let dnsElement1 = document.createElement("P");
            dnsElement1.id="DNS";
            dnsElement1.appendChild(document.createTextNode(nameDns));
            
            
            let dnsElement2 = document.createElement("P");
            dnsElement2.id="DNS";
    
            let dnsname2 =  DNS [0] ["DNS2"];	
            console.log(dnsname2.forEach( dnsFunction));
        function dnsFunction(index){
            dnsElement2.innerHTML += index+ "<br>"; 	
        }
            /* All containers boxes */
            let border = document.createElement("div");
            border.id="mainborder";
            
            
        
            /* all containers put inside each others */
            content.appendChild(border).appendChild(dnsElement);
            content.appendChild(border).appendChild(dnsElement1);
            content.appendChild(border).appendChild(dnsElement2);
        }

        // hardware

    function displayHARDWARE(value, html) {

        let content = document.getElementById("main");


       
        //hardware Heading
    
        let hardwareHead = hardware [0] ["hardwareHead"];
        console.log(hardwareHead);
        let hardwareElement = document.createElement("P");
        hardwareElement.appendChild(document.createTextNode(hardwareHead));
        hardwareElement.id= "headHardware";
        
        let nameHardware = hardware [0] ["hardware"];
        console.log(nameHardware);
        let hardwareElement1 = document.createElement("P");
        hardwareElement1.id="hardware";
        hardwareElement1.appendChild(document.createTextNode(nameHardware));
        
        

        /* All containers boxes */
        let border = document.createElement("div");
        border.id="mainborder";
        
        
    
        /* all containers put inside each others */
        content.appendChild(border).appendChild(hardwareElement);
        content.appendChild(border).appendChild(hardwareElement1);



    }

    //ports

    function displayPORTS(value, html) {
        let content = document.getElementById("main");

        let portHead = ports [0] ["portsHead"];
        
        let portElement = document.createElement("P");
        portElement.appendChild(document.createTextNode(portHead));
        portElement.id= "headport";
        
        let namePort = ports [0] ["port"];
        console.log(namePort);
        let portElement1 = document.createElement("P");
        portElement1.id="port";
        portElement1.appendChild(document.createTextNode(namePort));
        
        
        
    
        /* All containers boxes */
        let border = document.createElement("div");
        border.id="mainborder";
        
        
    
        /* all containers put inside each others */
        content.appendChild(border).appendChild(portElement);
        content.appendChild(border).appendChild(portElement1);




    }

    //software

    function displaySOFTWARE(value, html) {
        let content = document.getElementById("main");

        let softwareHead = software [0] ["softwareHead"];
        
        let softwareElement = document.createElement("P");
        softwareElement.appendChild(document.createTextNode(softwareHead));
        softwareElement.id= "headSoftware";
        
        let nameSoftware = software [0] ["software"];
        let softwareElement1 = document.createElement("P");
        softwareElement1.id="software";
        softwareElement1.appendChild(document.createTextNode(nameSoftware));
        
        
        
    
        /* All containers boxes */
        let border = document.createElement("div");
        border.id="mainborder";
        
        
    
        /* all containers put inside each others */
        content.appendChild(border).appendChild(softwareElement);
        content.appendChild(border).appendChild(softwareElement1);

    }

    // OSI MODEL 

    function displayOSI(value, html) {
        let content = document.getElementById("main");

        //OSI Heading
        
        let nameHead = OSI [0] ["modelHead"];
        console.log(nameHead);
        let nameElement = document.createElement("P");
        nameElement.appendChild(document.createTextNode(nameHead));
        nameElement.id= "headModel";
        
        let name = OSI [0] ["model"];
        console.log(name);
        let nameElement1 = document.createElement("P");
        nameElement1.id="OSI";
        nameElement1.appendChild(document.createTextNode(name));
        
        
		let nameElement2 = document.createElement("P");
        nameElement2.id="OSI";

        let name2 =  OSI [0] ["model2"];	
        console.log(name2.forEach( softSkillFunction));
    function softSkillFunction(index){
        nameElement2.innerHTML += index+ "<br>"; 	
    }
		/* All containers boxes */
		let border = document.createElement("div");
		border.id="mainborder";
		
	    
	
		/* all containers put inside each others */
		content.appendChild(border).appendChild(nameElement);
		content.appendChild(border).appendChild(nameElement1);
        content.appendChild(border).appendChild(nameElement2);
    }

    function setEventListeners() {
        var listItems = document.querySelectorAll(".navItem").forEach(function (item) {
            item.addEventListener("click", () => { appCtrl(item.value, item.innerHTML) });
        });
    }

    function init() {
        setEventListeners();
    }

    window.onload = function () {
        init();
    };

} ) ();