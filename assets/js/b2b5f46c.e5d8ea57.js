"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>S});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,S=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(S,i(i({ref:t},l),{},{components:r})):n.createElement(S,i({ref:t},l))}));function S(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},73467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={description:"SPI Communication on Seeed Studio XIAO SAMD21",title:"SPI Communication on Seeed Studio XIAO SAMD21",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-SPI-Communication-Interface",last_update:{date:"1/11/2023",author:"shuxu hu"}},i=void 0,s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SPI-Communication-Interface",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SPI-Communication-Interface",title:"SPI Communication on Seeed Studio XIAO SAMD21",description:"SPI Communication on Seeed Studio XIAO SAMD21",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SPI-Communication-Interface.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21",slug:"/XIAO-SPI-Communication-Interface",permalink:"/XIAO-SPI-Communication-Interface",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SPI-Communication-Interface.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"SPI Communication on Seeed Studio XIAO SAMD21",title:"SPI Communication on Seeed Studio XIAO SAMD21",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-SPI-Communication-Interface",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeed Studio XIAO SAMD21 with TinyUSB",permalink:"/Seeeduino-XIAO-TinyUSB"},next:{title:"TinyML on Seeed Studio XIAO SAMD21",permalink:"/Seeeduino-XIAO-TinyML"}},p={},u=[{value:"SPI Communication Interface",id:"spi-communication-interface",level:3},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3}],l={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"spi-communication-interface"},"SPI Communication Interface"),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Materials required")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO")," x 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html"},"Grove-High Precision pressure Sensor"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type-C cable x1"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Connection")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Grove-High Precision pressure Sensor's ",(0,a.kt)("strong",{parentName:"p"},"CSK")," is connected to Seeed Studio XIAO 's ",(0,a.kt)("strong",{parentName:"p"},"SCK"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Sensor's ",(0,a.kt)("strong",{parentName:"p"},"CS")," is connected to Seeed Studio XIAO 's ",(0,a.kt)("strong",{parentName:"p"},"D3"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Sensor's ",(0,a.kt)("strong",{parentName:"p"},"SDO")," is connected to Seeed Studio XIAO 's ",(0,a.kt)("strong",{parentName:"p"},"MISO"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Sensor's ",(0,a.kt)("strong",{parentName:"p"},"SDI")," is connected to Seeed Studio XIAO 's ",(0,a.kt)("strong",{parentName:"p"},"MOSI"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Sensor's ",(0,a.kt)("strong",{parentName:"p"},"GND")," is connected to Seeed Studio XIAO 's ",(0,a.kt)("strong",{parentName:"p"},"GND"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 6.")," Sensor's ",(0,a.kt)("strong",{parentName:"p"},"3V3")," is connected to Seeed Studio XIAO 's ",(0,a.kt)("strong",{parentName:"p"},"3.3V"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 7.")," Connect Seeed Studio XIAO to PC via a Type-C cable."))),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Infineon/DPS310-Pressure-Sensor.git"},"DPS310-Pressure-Sensor")," Library from Github.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Copy the code into Arduino IDE and upload."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <Dps310.h>\n\n// Dps310 Opject\nDps310 Dps310PressureSensor = Dps310();\n\nvoid setup()\n{\n  //pin number of your slave select line\n  //XMC2GO\n  int16_t pin_cs = 3;\n  //for XMC 1100 Bootkit  & XMC4700 Relax Kit uncomment the following line\n  //int16_t pin_cs = 10;\n\n  Serial.begin(9600);\n  while (!Serial);\n\n\n  //Call begin to initialize Dps310\n  //The parameter pin_nr is the number of the CS pin on your Microcontroller\n  Dps310PressureSensor.begin(SPI, pin_cs);\n\n  //temperature measure rate (value from 0 to 7)\n  //2^temp_mr temperature measurement results per second\n  int16_t temp_mr = 2;\n  //temperature oversampling rate (value from 0 to 7)\n  //2^temp_osr internal temperature measurements per result\n  //A higher value increases precision\n  int16_t temp_osr = 2;\n  //pressure measure rate (value from 0 to 7)\n  //2^prs_mr pressure measurement results per second\n  int16_t prs_mr = 2;\n  //pressure oversampling rate (value from 0 to 7)\n  //2^prs_osr internal pressure measurements per result\n  //A higher value increases precision\n  int16_t prs_osr = 2;\n  //startMeasureBothCont enables background mode\n  //temperature and pressure ar measured automatically\n  //High precision and hgh measure rates at the same time are not available.\n  //Consult Datasheet (or trial and error) for more information\n  int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);\n  //Use one of the commented lines below instead to measure only temperature or pressure\n  //int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);\n  //int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);\n\n\n  if (ret != 0)\n  {\n    Serial.print("Init FAILED! ret = ");\n    Serial.println(ret);\n  }\n  else\n  {\n    Serial.println("Init complete!");\n  }\n}\n\n\n\nvoid loop()\n{\n  uint8_t pressureCount = 20;\n  float pressure[pressureCount];\n  uint8_t temperatureCount = 20;\n  float temperature[temperatureCount];\n\n  //This function writes the results of continuous measurements to the arrays given as parameters\n  //The parameters temperatureCount and pressureCount should hold the sizes of the arrays temperature and pressure when the function is called\n  //After the end of the function, temperatureCount and pressureCount hold the numbers of values written to the arrays\n  //Note: The Dps310 cannot save more than 32 results. When its result buffer is full, it won\'t save any new measurement results\n  int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);\n\n  if (ret != 0)\n  {\n    Serial.println();\n    Serial.println();\n    Serial.print("FAIL! ret = ");\n    Serial.println(ret);\n  }\n  else\n  {\n    Serial.println();\n    Serial.println();\n    Serial.print(temperatureCount);\n    Serial.println(" temperature values found: ");\n    for (int16_t i = 0; i < temperatureCount; i++)\n    {\n      Serial.print(temperature[i]);\n      Serial.println(" degrees of Celsius");\n    }\n\n    Serial.println();\n    Serial.print(pressureCount);\n    Serial.println(" pressure values found: ");\n    for (int16_t i = 0; i < pressureCount; i++)\n    {\n      Serial.print(pressure[i]);\n      Serial.println(" Pascal");\n    }\n  }\n\n  //Wait some time, so that the Dps310 can refill its buffer\n  delay(10000);\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Click ",(0,a.kt)("strong",{parentName:"li"},"Tools")," > ",(0,a.kt)("strong",{parentName:"li"},"Serial Monitor")," , or press ",(0,a.kt)("strong",{parentName:"li"},"Ctrl+Shift+M")," together, open the serial monitor after uploading successfully, the output appears as follows:")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png",alt:"pir",width:600,height:"auto"})))}m.isMDXComponent=!0}}]);