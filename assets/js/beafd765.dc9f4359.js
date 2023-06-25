"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(h,l(l({ref:t},m),{},{components:r})):n.createElement(h,l({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={description:"reTerminal-FAQ",title:"How to boot an OS from USB Flash Drive",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"6/21/2023",author:"Seraphina"}},l=void 0,i={unversionedId:"FAQ/reTerminal/Boot_OS_from_USB_flash_drive",id:"FAQ/reTerminal/Boot_OS_from_USB_flash_drive",title:"How to boot an OS from USB Flash Drive",description:"reTerminal-FAQ",source:"@site/docs/FAQ/reTerminal/Boot_OS_from_USB_flash_drive.md",sourceDirName:"FAQ/reTerminal",slug:"/FAQ/reTerminal/Boot_OS_from_USB_flash_drive",permalink:"/FAQ/reTerminal/Boot_OS_from_USB_flash_drive",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/reTerminal/Boot_OS_from_USB_flash_drive.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1687305600,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{description:"reTerminal-FAQ",title:"How to boot an OS from USB Flash Drive",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"6/21/2023",author:"Seraphina"}}},p={},s=[],m={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can boot an OS from USB Flash Drive by following the steps below. Here we change the boot order to ",(0,a.kt)("strong",{parentName:"p"},"USB Boot > eMMC Boot"),", which means, if the USB Boot fails, it will boot from eMMC."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You will have to use ",(0,a.kt)("strong",{parentName:"p"},"Ubuntu")," or ",(0,a.kt)("strong",{parentName:"p"},"MacOS")," as host PC for this method.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Remove the 4 rubber covers and open the reTerminal back shell unscrewing the 4 screws underneath")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png",alt:"pir",width:450,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Remove the 2 screws to disassemble the heatsink and also the remaining 4 screws to take apart the entire case")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg",alt:"pir",width:500,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Flip down the ",(0,a.kt)("strong",{parentName:"li"},"boot mode switch")," according to the below diagram")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg",alt:"pir",width:700,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Open a ",(0,a.kt)("strong",{parentName:"li"},"Terminal")," window inside the Host PC after connecting to reTerminal and type the following to update the ",(0,a.kt)("strong",{parentName:"li"},"packages list"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Install ",(0,a.kt)("strong",{parentName:"li"},"Git")," by the following command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install git\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Git might produce an error if the date is not set properly. Type the following to correct this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo date MMDDhhmm\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Where ",(0,a.kt)("strong",{parentName:"p"},"MM")," is the month, ",(0,a.kt)("strong",{parentName:"p"},"DD")," is the date, and ",(0,a.kt)("strong",{parentName:"p"},"hh")," and ",(0,a.kt)("strong",{parentName:"p"},"mm")," are hours and minutes respectively."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Clone and enter the ",(0,a.kt)("strong",{parentName:"li"},"usbboot")," tool repository")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8.")," Enter the following to install ",(0,a.kt)("strong",{parentName:"li"},"libusb"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install libusb-1.0-0-dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 9.")," Build and install the usbboot tool")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 10.")," Open the bootloader configuration file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano recovery/boot.conf\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 11.")," Change the ",(0,a.kt)("strong",{parentName:"li"},"BOOT_ORDER")," field to the following")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"BOOT_ORDER=0xf15\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Here if USB Boot fails, it switches to eMMC boot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 12.")," Run the following to update the EEPROM image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd recovery\n./update-pieeprom.sh\n")),(0,a.kt)("p",null,"The pieeprom.bin file is now ready to be flashed to the Compute Module 4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 13.")," Navigate back to the ",(0,a.kt)("strong",{parentName:"li"},"usbboot")," directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ..\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 14.")," Run the usbboot tool to flash the bootloader EEPROM")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpiboot -d recovery\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 15.")," Connect reTerminal to the PC via USB Type-C cable")),(0,a.kt)("p",null,"Now it will take a few seconds to transfer the necessary files to the reTerminal."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 16.")," Turn off reTerminal, flip the Boot Mode switch back to the original position and assemble the reTerminal shell")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 17.")," Connect a bootable USB Flash Drive with a suitable OS inside, connect to one of the USB Ports on the reTerminal and turn on reTerminal"))),(0,a.kt)("p",null,"Now you will see reTerminal booting from the connected USB Drive"))}u.isMDXComponent=!0}}]);