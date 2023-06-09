"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49591],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(i),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return i?n.createElement(h,s(s({ref:t},c),{},{components:i})):n.createElement(h,s({ref:t},c))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<r;d++)s[d]=i[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},73979:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const r={description:"reTerminal DM SenseCraft Edge OS Getting Started",title:"reTerminal DM SenseCraft Edge OS Getting Started",keywords:["Edge","reTerminal-DM","SenseCraft Edge"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reterminal-dm-sensecraft-edge-os-intro",last_update:{date:"04/23/2023",author:"Peter Pan"}},s="reTerminal DM SenseCraft Edge OS Getting Started",o={unversionedId:"Edge/reTerminal-DM/SenseCraft_Edge/reterminal-dm-sensecraft-edge-os-intro",id:"Edge/reTerminal-DM/SenseCraft_Edge/reterminal-dm-sensecraft-edge-os-intro",title:"reTerminal DM SenseCraft Edge OS Getting Started",description:"reTerminal DM SenseCraft Edge OS Getting Started",source:"@site/docs/Edge/reTerminal-DM/SenseCraft_Edge/reterminal-dm-sensecraft-edge-os-intro.md",sourceDirName:"Edge/reTerminal-DM/SenseCraft_Edge",slug:"/reterminal-dm-sensecraft-edge-os-intro",permalink:"/reterminal-dm-sensecraft-edge-os-intro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal-DM/SenseCraft_Edge/reterminal-dm-sensecraft-edge-os-intro.md",tags:[],version:"current",lastUpdatedBy:"Peter Pan",lastUpdatedAt:1682208e3,formattedLastUpdatedAt:"Apr 23, 2023",frontMatter:{description:"reTerminal DM SenseCraft Edge OS Getting Started",title:"reTerminal DM SenseCraft Edge OS Getting Started",keywords:["Edge","reTerminal-DM","SenseCraft Edge"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reterminal-dm-sensecraft-edge-os-intro",last_update:{date:"04/23/2023",author:"Peter Pan"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM CANBUS with Node-RED",permalink:"/reTerminal-DM-Node-Red-canbus"},next:{title:"reComputer for Jetson Series Introduction",permalink:"/reComputer_Jetson_Series_Introduction"}},l={},d=[{value:"Feature",id:"feature",level:2},{value:"Layout Overview",id:"layout-overview",level:2},{value:"Status Bar",id:"status-bar",level:3},{value:"Dashboard Tab",id:"dashboard-tab",level:3},{value:"Node-RED editor Tab",id:"node-red-editor-tab",level:3},{value:"System Settings Tab",id:"system-settings-tab",level:3},{value:"Network sub tab",id:"network-sub-tab",level:4},{value:"Ethernet sub tab",id:"ethernet-sub-tab",level:5},{value:"WiFi sub tab",id:"wifi-sub-tab",level:5},{value:"Bluetooth sub tab",id:"bluetooth-sub-tab",level:5},{value:"Dataset",id:"dataset",level:4},{value:"MySQL sub tab",id:"mysql-sub-tab",level:5},{value:"MQTT sub tab",id:"mqtt-sub-tab",level:5},{value:"Gerneral",id:"gerneral",level:4},{value:"About",id:"about",level:5},{value:"Updates",id:"updates",level:5},{value:"Check and Update",id:"check-and-update",level:5},{value:"Local Update",id:"local-update",level:5},{value:"Screen",id:"screen",level:5},{value:"Language and Time",id:"language-and-time",level:5},{value:"PIN",id:"pin",level:5},{value:"Setup PIN Code:",id:"setup-pin-code",level:5},{value:"Reset the PIN Code:",id:"reset-the-pin-code",level:5},{value:"Unlock",id:"unlock",level:5},{value:"Center",id:"center",level:4},{value:"Center",id:"center-1",level:5},{value:"ChirpStack",id:"chirpstack",level:5},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reterminal-dm-sensecraft-edge-os-getting-started"},"reTerminal DM SenseCraft Edge OS Getting Started"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/splash.png",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("p",null,"SenseCraft Edge OS is a cutting-edge operating system meticulously designed for reTerminal DM's 10.1\" Human Machine Interface (HMI) device, featuring an array of integrated functionalities that elevate user experience to new heights. This groundbreaking OS boasts an intuitive interface with built-in setting and control functions, empowering users to effortlessly configure and manage their devices. Furthermore, it seamlessly integrates with Node-RED editor and Node-RED Dashboard, enabling users to unlock unparalleled customization and automation capabilities. Harnessing the power of Node-RED's visual programming and automation tools, this operating system empowers users to create intricate workflows and deploy sophisticated control systems with ease. With its unmatched fusion of intuitive HMI controls and the versatility of Node-RED, SenseCraft Edge OS sets a new standard for enhanced functionality and unparalleled user-friendliness in the realm of HMI devices in all kinds of use case scenarios. The built-in OSTree versioned file system provides a robust framework for managing and deploying Linux-based operating systems in a scalable and reliable manner, with a focus on atomicity, immutability, and efficient storage usage."),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"2"}," Get reTerminal DM Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"reTerminal DM will be Shipped with SenseCraft Edge OS as default Operating System from next product release batch.")),(0,a.kt)("h2",{id:"feature"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Touch-friendly UI design")," specifically tailored for Human Machine Interface (HMI) devices, ensuring an intuitive and seamless user experience. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Seamlessly integrates")," with the widely popular ",(0,a.kt)("strong",{parentName:"li"},'"no code & low code" development environment Node-RED'),", along with its companion component ",(0,a.kt)("strong",{parentName:"li"},"Node-RED Dashboard"),". This integration provides users with powerful visual programming capabilities and a versatile dashboard framework for building customized applications without the need for extensive coding knowledge. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Built-in system setting and control")," functions, offering a comprehensive and intuitive interface to configure and manage various aspects of reTerminal DM."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Built-in App Center for future use case expansion"),", it serves as a hub for accessing and installing a diverse range of applications and extensions, allowing users to customize and extend the functionality of their operating system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Built-in Configurable service")," such as ",(0,a.kt)("strong",{parentName:"li"},"MQTT, MySQL and ChirpStack"),", providing users with enhanced functionality and flexibility in building data visualization dashboard applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OSTree versioned file system")," allows for ",(0,a.kt)("strong",{parentName:"li"},"atomic upgrades")," of the entire operating system, and allowing you to track and manage different versions of the operating system and its components. This makes it easier to roll back to a previous version if needed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Built-in System Health Check feature")," that allows users to monitor the overall health and performance of the reTerminal DM. This feature provides valuable insights into the system's status, ensuring optimal functionality and identifying potential issues.")),(0,a.kt)("h2",{id:"layout-overview"},"Layout Overview"),(0,a.kt)("h3",{id:"status-bar"},"Status Bar"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/status-bar.png"})),(0,a.kt)("p",null,"The click able items and functionality:"),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Icon"),(0,a.kt)("th",{parentName:"tr",align:null},"function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Power Control"),(0,a.kt)("td",{parentName:"tr",align:null},'Open a drop down list for with option of "Restart", "Shut Down", "Sleep"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bluetooth Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"Brings you to the Bluetooth setting view")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ethernet Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"Brings you to the Ethernet setting view")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WiFi Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"Brings you to the WiFi setting view"))))),(0,a.kt)("h3",{id:"dashboard-tab"},"Dashboard Tab"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png"})),(0,a.kt)("p",null,'Dashboard Tab is rendering the "node-red-dashboard" view locally on reTerminal DM, here are some design considerations for reference:'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-size.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maximum width without scrolling: 1075px"),(0,a.kt)("li",{parentName:"ul"},"Maximum height without scrolling: 752px")),(0,a.kt)("p",null,"You could also access the dashboard view on the external machine which is on the same network with the reTerminal DM, where you could just open your favorite web browser on that external machine and type in the ip address of your reTerminal DM followed by the default Node-RED port 1880 then followed by ",(0,a.kt)("strong",{parentName:"p"},"'/ui/'"),", which the url should looks like this: ",(0,a.kt)("strong",{parentName:"p"},'"ipaddress:1880/ui/"')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'For Example: In my case, the ip address of reTerminal DM is "192.168.49.163" then the url is: ',(0,a.kt)("strong",{parentName:"p"},'"192.168.49.163:1880/ui/"'))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-eg.png"})),(0,a.kt)("h3",{id:"node-red-editor-tab"},"Node-RED editor Tab"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red.png"})),(0,a.kt)("p",null,"Please note that you could open the Node-RED editor on the an external machine which is on the same network with the reTerminal DM, where you could just open your favorite web browser on that external machine and type in the ip address of your reTerminal DM followed by the default Node-RED port 1880. To find the IP address of your reTerminal DM you could locate the IP Address as shown in the image below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-ipaddress.png"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'For Example: In my case, the ip address of reTerminal DM is "192.168.49.163" then the url is: ',(0,a.kt)("strong",{parentName:"p"},'"192.168.49.163:1880/"'))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-editer-eg.png"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You could download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/default-flow.json"},"Default Flow")," for reference.")),(0,a.kt)("p",null,"For more information about how to use Node-RED with reTerminal DM please visit the Node-RED Wiki pages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-RS485"},"reTerminal DM RS485 Port with Node-RED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-mqtt"},"reTerminal DM MQTT with Node-RED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-canbus"},"reTerminal DM CAN BUS with Node-RED"))),(0,a.kt)("h3",{id:"system-settings-tab"},"System Settings Tab"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/settings.png"})),(0,a.kt)("h4",{id:"network-sub-tab"},"Network sub tab"),(0,a.kt)("p",null,"The Network section is used for viewing and setting up network functions for Ethernet, WiFi and Bluetooth."),(0,a.kt)("h5",{id:"ethernet-sub-tab"},"Ethernet sub tab"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/network.png"})),(0,a.kt)("h5",{id:"wifi-sub-tab"},"WiFi sub tab"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/wifi.png"})),(0,a.kt)("p",null,"To connect wifi please click on the WiFi SSID you want to connect to and then you will see the following pop up window, please enter the WiFi credential, and then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Confirm")," to proceed. "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/connect-wifi.png"})),(0,a.kt)("h5",{id:"bluetooth-sub-tab"},"Bluetooth sub tab"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/Bluetooth.png"})),(0,a.kt)("h4",{id:"dataset"},"Dataset"),(0,a.kt)("p",null,"The Dataset section is used for enable and disable the services related to dataset controls for now we have built-in MySQL server and MQTT server."),(0,a.kt)("h5",{id:"mysql-sub-tab"},"MySQL sub tab"),(0,a.kt)("p",null,"You can enable or disable the MySQL service in this tab, also view the MySQL service information such as MySQL server address and server access credentials."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mysql.png"})),(0,a.kt)("h5",{id:"mqtt-sub-tab"},"MQTT sub tab"),(0,a.kt)("p",null,"You can enable or disable the MQTT service in this tab, also view the MQTT service information such as MQTT server address and service access credentials."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mqtt.png"})),(0,a.kt)("h4",{id:"gerneral"},"Gerneral"),(0,a.kt)("p",null,"The Gerneral secstion is used for getting device information in the about tab, controlling device update in the update tab, adjust the screen setting in the screen tab, change the local setting in the Language and Time tab, setup screen lock pin from PIN tab for security reasons."),(0,a.kt)("h5",{id:"about"},"About"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/about.png"})),(0,a.kt)("h5",{id:"updates"},"Updates"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There are two thing you will need to update for SenseCraft Edge OS."),(0,a.kt)("p",{parentName:"admonition"},"System Update:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Taking care of the system Backend components")),(0,a.kt)("p",{parentName:"admonition"},"SenseCraft Edge Update:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Backend and Frontend Component and Ui related to the SenseCraft application UI interface.")),(0,a.kt)("p",{parentName:"admonition"},"There are two ways to update them."),(0,a.kt)("p",{parentName:"admonition"},"Local Update:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Using a USB storage device contains update files.")),(0,a.kt)("p",{parentName:"admonition"},"Network Update:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Update through network"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/updates.png"})),(0,a.kt)("h5",{id:"check-and-update"},"Check and Update"),(0,a.kt)("p",null,"You can click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Update Now")," button separately to update the System or SenseCraft Edge application."),(0,a.kt)("p",null,"If your system is up-to-date you will be greeting with ",(0,a.kt)("inlineCode",{parentName:"p"},"The System Version is latest version")," pop up notification."),(0,a.kt)("p",null,"For System Update:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/system-update-success.png"})),(0,a.kt)("p",null,"For SenseCraft Edge Update:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/app-upgrade-success.png"})),(0,a.kt)("p",null,"You can click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Check Update")," button to check the latest available update and confirm to Update."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/check-update.png"})),(0,a.kt)("h5",{id:"local-update"},"Local Update"),(0,a.kt)("p",null,"STEP 1: Please click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Local Update")," button"),(0,a.kt)("p",null,"You should see the following pop up window."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png"})),(0,a.kt)("p",null,"STEP 2: Please insert the USB storage device with the update files to reTerminal DM as indicated in the image above."),(0,a.kt)("p",null,"STEP 3: At the pop up window Click ",(0,a.kt)("inlineCode",{parentName:"p"},"next"),", please be patient when you clicked ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," this will take sometime to load."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/select-update-file.png"})),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"USB Error")),(0,a.kt)("p",{parentName:"admonition"},"If there are some error with the USB you will see the ",(0,a.kt)("inlineCode",{parentName:"p"},"No USB flash drive detected"),", "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png"})),(0,a.kt)("p",{parentName:"admonition"},"To make things much easier for update the system please make sure you have a good USB storage Device and formated to FAT32 or EXT4, and the USB storage size is less or equal to 64Gb, then ")),(0,a.kt)("p",null,"STEP 4: Click Next and wait for update process"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-updating.png"})),(0,a.kt)("h5",{id:"screen"},"Screen"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/screen.png"})),(0,a.kt)("h5",{id:"language-and-time"},"Language and Time"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/timezone.png"})),(0,a.kt)("h5",{id:"pin"},"PIN"),(0,a.kt)("p",null,"At default the PIN is unset, and this pin sets a passcode lock for ",(0,a.kt)("a",{parentName:"p",href:"#node-red-editor-tab"},"Node-RED editor Tab")," and ",(0,a.kt)("a",{parentName:"p",href:"#system-settings-tab"},"System Setting Tab")),(0,a.kt)("h5",{id:"setup-pin-code"},"Setup PIN Code:"),(0,a.kt)("p",null,"Steps for setting up the pins:"),(0,a.kt)("p",null,"STEP 1: Click and toggle the Set PIN button to enter the pin setup process"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/toggle-pin-setting.png"})),(0,a.kt)("p",null,"STEP 2: Please key in the 8 digit PIN code"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png"})),(0,a.kt)("p",null,"STEP 3: Please repeat the 8 digit PIN code to confirm"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png"})),(0,a.kt)("h5",{id:"reset-the-pin-code"},"Reset the PIN Code:"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This step is only validate when you have a PIN code setup already ")),(0,a.kt)("p",null,"STEP 1:  Click on the RESET button"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/reset-pins.png"})),(0,a.kt)("p",null,"STEP 2: Please enter current pin code to confirm reset process"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/enter-pin-to-reset.png"})),(0,a.kt)("p",null,"STEP 3: Please key in the new 8 digit PIN code"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png"})),(0,a.kt)("p",null,"STEP 4: Please repeat the new 8 digit PIN code to confirm"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png"})),(0,a.kt)("h5",{id:"unlock"},"Unlock"),(0,a.kt)("p",null,"Once you have setup the PIN Code when you tab into the ",(0,a.kt)("a",{parentName:"p",href:"#node-red-editor-tab"},"Node-RED editor Tab")," or ",(0,a.kt)("a",{parentName:"p",href:"#system-settings-tab"},"System Setting Tab"),", you will need to enter the PIN code to unlock"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/unlock.png"})),(0,a.kt)("h4",{id:"center"},"Center"),(0,a.kt)("p",null,"The Center section is used for controlling installed Applications, where the center tab is act as a app store where you could install, open, disable and as well as host your own applications which is served similar as Google play store or apple app store. currently the function of this app center is limited the new features will be updated please stay tuned and be patient, also we would like your contributions to the app center once the community contribution function is implemented. The ChirpStack tab is shown as it is the application configuration view, which the ChirpStack application is installed from the App Center."),(0,a.kt)("h5",{id:"center-1"},"Center"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/appcenter.png"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"currently the function of this app center is limited the new features will be updated please stay tuned and be patient, also we would like your contributions to the app center once the community contribution function is implemented.")),(0,a.kt)("h5",{id:"chirpstack"},"ChirpStack"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/chirpstack.png"})),(0,a.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf"},"reTerminal DM Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf"},"reTerminal DM User Manual"))),(0,a.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);