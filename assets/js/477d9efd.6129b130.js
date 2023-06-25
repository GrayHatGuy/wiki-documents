"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={description:"People counting with Ultrasonic sensor",title:"People counting with Ultrasonic sensor",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-4",last_update:{date:"1/30/2023",author:"jianjing Huang"}},r="Wio Terminal Edge Impulse People counting with Ultrasonic sensor",s={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-4",id:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-4",title:"People counting with Ultrasonic sensor",description:"People counting with Ultrasonic sensor",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-4.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse",slug:"/Wio-Terminal-TinyML-EI-4",permalink:"/Wio-Terminal-TinyML-EI-4",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-4.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"People counting with Ultrasonic sensor",title:"People counting with Ultrasonic sensor",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-4",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Audio scene recognition",permalink:"/Wio-Terminal-TinyML-EI-3"},next:{title:"Distinguishing Beverage",permalink:"/Wio-Terminal-TinyML-EI-5"}},l={},c=[{value:"Understanding the data",id:"understanding-the-data",level:2},{value:"Training data acquisition",id:"training-data-acquisition",level:2},{value:"Building a machine learning model",id:"building-a-machine-learning-model",level:2},{value:"Deploying to Wio Terminal",id:"deploying-to-wio-terminal",level:2},{value:"Azure IoT Central Integration",id:"azure-iot-central-integration",level:2},{value:"Reference",id:"reference",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wio-terminal-edge-impulse-people-counting-with-ultrasonic-sensor"},"Wio Terminal Edge Impulse People counting with Ultrasonic sensor"),(0,a.kt)("p",null,"In this project we will create a people counting system by using Wio Terminal, an ordinary Ultrasonic ranger and special Deep Learning sauce to top it off and actually make it work."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/image_zM8pM16fk9.jpeg"})),(0,a.kt)("p",null,"We will also utilize Microsoft Azure IoT Central service to store the room occupancy data in the cloud and visualize it on PC."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/iotedge.png"})),(0,a.kt)("p",null,"For more details and video tutorial, watch the corresponding video!"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pt1maDNXznI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"understanding-the-data"},"Understanding the data"),(0,a.kt)("p",null,"First, let\u2019s understand the data we  can get from Ultrasonic sensor  and how we can utilize it for  determining the direction of objects."),(0,a.kt)("p",null,"Grove - Ultrasonic ranger is a non-contact distance measurement module which works at 40KHz. When we provide a pulse trigger signal with more than 10uS through signal pin, the Grove_Ultrasonic_Ranger will issue 8 cycles of 40kHz cycle level and detect the echo. The pulse width  of the echo signal is proportional to the measured distance. Here is the formula: Distance = echo signal high time * Sound speed (340M/S)/2."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Ultrasonic_Working_Principle.png"})),(0,a.kt)("admonition",{title:"Warning",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Do not hot plug Grove-Ultrasonic-Ranger, otherwise it will damage the  sensor. The measured area must be no less than 0.5 square meters and smooth.")),(0,a.kt)("p",null,"After installing Grove - Ultrasonic Ranger library for Arduino IDE and connecting Ultrasonic Ranger to Wio Terminal D1/D2 port, we  can upload this simple script to Wio Terminal connected to Grove Ultrasonic Ranger and then walk in and walk out of the room."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include \"Ultrasonic.h\"\n#define INTERVAL_MS 50\nUltrasonic ultrasonic(0);\nvoid setup() {\n    Serial.begin(115200);\n    }\nvoid loop() {\n    static unsigned long last_interval_ms = 0;\n    float distance;\n    if (millis() > last_interval_ms + INTERVAL_MS) {\n        last_interval_ms = millis();\n        distance = ultrasonic.MeasureInCentimeters();\n        if (distance < 200.0) {\n        Serial.println(distance);\n        }\n        else\n        Serial.println(-1);\n        //Serial.print('\\t');\n    }\n}\n")),(0,a.kt)("p",null,"We  can immediately see that for walking it, we get relatively high values(corresponding to distance from the object) first, which then   decrease. And for walking out, we get completely opposite signal."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/full (Time 0_02_01;29).png"})),(0,a.kt)("p",null,"Theoretically we could write an algorithm ourselves by hand, that can determine the direction.  Unfortunately, real life situations are complicated \u2013 we have people, that walk fast (shorter curve length) and  slow (longer curve length),  we have thinner people and people who are... not so thin and so on. So our hand-written algorithm needs to take all of these into account, which will inevitably make it complicated and convoluted. We have a task involving inference signal processing and lots of noisy data with significant variations\u2026 And the solution is \u2014  Deep Learning."),(0,a.kt)("h2",{id:"training-data-acquisition"},"Training data acquisition"),(0,a.kt)("p",null,"Attach Wio terminal and Ultrasonic sensor with screws to wooden or 3D printed frame, example below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/device.png"})),(0,a.kt)("p",null,"To put the frame on the wall, 3M velcro strips were used."),(0,a.kt)("img",{width:"{200}",align:"left",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/3m.png"}),(0,a.kt)("p",null,"Additional options include using foam tape, screws or nails."),(0,a.kt)("p",null,"Let\u2019s create a new project in Edge Impulse Dashboard and prepare to get the data. For gathering the data, since we  don\u2019t  need very high sampling frequency, we can use data forwarder tool from edge-impulse-cli. Upload the ei_people_counter_data_collection.ino script (exactly the same script as pasted above) to Wio Terminal \u2013 the following steps assume that you have already installed Edge Impulse CLI as described in Getting started with Edge Impulse\n.\nIn this particular script we filter out all the values above 200 cm, setting them to -1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"if (distance < 200.0) {\n Serial.println(distance);\n}\nelse {\n    Serial.println(-1);\n}\n")),(0,a.kt)("p",null,"For your application you might need to set this value lower or higher, depending on the set up. Then start walking."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/walkinout.gif"})),(0,a.kt)("p",null,"For this project we recorded 1 minute 30 seconds of data for every class, each time recording 5000 ms samples and then cropping them to get 1500 ms samples \u2013  remember that variety is very important in the dataset, so make sure you have samples where you (or other people) walk fast, slow, run, etc."),(0,a.kt)("div",null,(0,a.kt)("img",{width:"{180}",align:"center",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/in.png"}),(0,a.kt)("img",{width:570,align:"center",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/out.png"}),(0,a.kt)("img",{width:"{175}",align:"center",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/none.png"})),(0,a.kt)("p",null,"For none category apart from samples that have nobody in front of the device, it is a good idea to include samples that have a person just standing close to the device and walking beside it, to avoid any movement being falsely classified as in or out."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"building-a-machine-learning-model"},"Building a machine learning model"),(0,a.kt)("p",null,"When you are done with data collection, create your impulse \u2013 set window length to 1500 ms and windows size increase to 500 ms."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture.PNG"})),(0,a.kt)("p",null,"1500 ms is more than enough to cover time duration person takes, when walking in the door or walking out, except if moving extremely slow. For processing blocks, we only have two blocks this time to experiment with  \u2013 Raw data or Spectral analysis.  Flatten block will erase all the time-domain information from the data,  making it completely useless in determining direction, so we  won\u2019t use  it.\nSpectral analysis block applies Fast Fourier transform to  data samples, converting signal from time domain to frequency domain.  While  FFT can work for other types of signals, such as sounds or accelerometer  data, in our case the frequency of signal actually also  doesn\u2019t matter  that much, since we cannot judge if person is coming in or going out of  the room based on frequency. If you look at the data visualization after Spectral analysis block, it is clear that it\u2019s hard to separate in and out data samples."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture1.PNG"})),(0,a.kt)("p",null,"Changing processing block to Spectrogram doesn\u2019t really alleviate the problem and resulting accuracy still stays fairly low \u2013 the highest we could get was 79.6 %, with a lot of confusion between in and out classes. And the winner, once again is Raw data (with scaling) + 1D Convolutional network. The best results were achieved by  tweaking network architecture a bit to obtain 92% accuracy, for that you will need to switch to \u201cexpert\u201d mode and change MaxPool1D strides to 1 and pool size to 4."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture2.PNG"})),(0,a.kt)("p",null,"How good is 92% accuracy and what can be done to improve it?\n92% is fairly good as proof of concept or prototype, but horrible as a production model. For production, mileage may vary \u2013 if your application is critical and somehow used in automated control and decision making, you don\u2019t really want to have anything below 98 \u2013 99 percent and even that might be low, think about something like a face recognition system for payment or authentication. Are there ways to improve the accuracy of this system?\n\u2022 Ultrasonic  sensor is cheap and ubiquitous sensor, but it is  relatively slow and not very precise."),(0,a.kt)("img",{width:"{200}",align:"left",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Grove-TF-Mini-LiDAR.JPG"}),(0,a.kt)("p",null," We can get better data by using Grove TF Mini LiDAR Module."),(0,a.kt)("p",null,"\u2022 Get more data and possibly place the sensor lower, at normal human waist   level to make sure it can detect shorter than normal height people and children.\n\u2022 Two are better than one \u2013 having two sensors taking measurements at slightly different places will not add too much data (we only have 31 data point in each sample), but might increase the accuracy. To explore   more interesting ideas, a built-in light sensor can be used if Wio Terminal is appropriately located."),(0,a.kt)("h2",{id:"deploying-to-wio-terminal"},"Deploying to Wio Terminal"),(0,a.kt)("p",null,"Once the model is trained we can  perform live classification with  data from device \u2013 here we found that  window size increase of 500 ms  actually doesn\u2019t work that well and produces more false positives, so at the next step, when deploying to the device, it is better to increase the value to 750 ms. To deploy the model to Wio Terminal go to deployment tab, choose Arduino library, download it,  extract the archive and put it inside of  your Arduino libraries folder."),(0,a.kt)("p",null,"This time we will be using continuous inference example to make sure we are not missing any important data.\nIf you remember, in the first project, for the inference,  we  would collect all the data points in the sample, perform the inference and then go back to sampling \u2013 that means that when feeding the data to neural network we would pause the data collection and lose some of the data."),(0,a.kt)("img",{width:"{200}",align:"right",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/10df57c-RunImpulse.png"}),(0,a.kt)("p",null,"That is not optimal and we can use either DMA (Direct Memory Access), threading or multiprocessing to fix this issue."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/DMA.gif"})),(0,a.kt)("p",null,"Wio Terminal MCU (Cortex M4F core) only has one core, so multiprocessing is not an option \u2013 so in this case we will use FreeRTOS and threads. What is going to happen is that during the inference process, FreeRTOS will pause inference for a brief moment, collect the data sample and then go back to inference."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/TaskExecution.png"})),(0,a.kt)("p",null,"This way the actual inference will take a little longer, but the difference is negligible for this particular use case. We perform inference every 500 ms, so every 500 ms slice of the time window will be performed inference on for 3 times. Then we take the result that has the highest confidence across 3 inferences \u2013 for example we have highest   confidence for \u201cout\u201d label 2 times and for \u201cnone\u201d label one time, thus the result should be classified as \u201cout\u201d. To simplify the testing we will add the lines that turn on Wio Terminal screen when person is entering the room and turns it off when a person exits."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test1.gif"})),(0,a.kt)("p",null,"Open Examples -> name of your project - > nano_ble33_sense_accelerometer_continuous sketch and replace everything (including run_inference_background function declaration) above setup function with the following code block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/* Includes ---------------------------------------------------------------- */\n#include <people_counter_raw_inference.h>\n#include <Seeed_Arduino_FreeRTOS.h>\n#include "Ultrasonic.h"\n#include "TFT_eSPI.h"\n\n#define ERROR_LED_LIGHTUP_STATE HIGH\n\n/* Private variables ------------------------------------------------------- */\nstatic bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal\nstatic uint32_t run_inference_every_ms = 500;\n\nstatic float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = {0};\nstatic float inference_buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE];\nfloat distance;\nuint8_t axis_num = 1;\n\nTaskHandle_t Handle_aTask;\nTaskHandle_t Handle_bTask;\nUltrasonic ultrasonic(0);\nTFT_eSPI tft;\n')),(0,a.kt)("p",null,"In setup function, initialize LCD screen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"    tft.begin();\n    tft.setRotation(3);\n")),(0,a.kt)("p",null,"and delete all the lines that are related to accelerometer. Then in place of ",(0,a.kt)("inlineCode",{parentName:"p"},"inference_thread.start(mbed::callback(&run_inference_background));")," paste the following code block - the reason we need to replace this line is because Thread initialization is done differently in Arduino BLE33 Sense and Wio Terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'    vSetErrorLed(LED_BUILTIN, ERROR_LED_LIGHTUP_STATE);\n    \n    // Create the threads that will be managed by the rtos\n    // Sets the stack size and priority of each task\n    // Also initializes a handler pointer to each task, which are important to communicate with and retrieve info from tasks\n\n    xTaskCreate(run_inference_background,"Inference", 512, NULL, tskIDLE_PRIORITY + 1, &Handle_aTask);\n    xTaskCreate(read_data, "Data collection", 256, NULL, tskIDLE_PRIORITY + 2, &Handle_bTask);\n\n    // Start the RTOS, this function will never return and will schedule the tasks.\n\n    vTaskStartScheduler();\n')),(0,a.kt)("p",null,"run_inference_continuous function is largely unchanged, the only two things that need to be changed here are\n\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"void run_inference_background()")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"static void run_inference_background(void*pvParameters)"),"\n\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"ei_classifier_smooth_init(&smooth, 10 /* no. of readings */, 7 /* min. readings the same */, 0.8 /* min. confidence */, 0.3 /* max anomaly */);")," to\n",(0,a.kt)("inlineCode",{parentName:"p"},"ei_classifier_smooth_init(&smooth, 3 /* no. of readings */, 2 /* min. readings the same */, 0.6 /* min. confidence */, 0.3 /* max anomaly */);"),"\nThe line above controls averaging (or smoothing) parameters, that we apply to output of the model. You can experiment with the values to see what values allow for best performance in terms of true positives/false positives rate.\nWhile in the original code, data collection happens in loop function, for Wio Terminal FreeRTOS port, it is better to implement data collection in a thread and leave the loop function empty. Delete the loop function in original code and replace it with the following code block"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n* @brief      Get data and run inferencing\n*\n* @param[in]  debug  Get debug info if true\n*/\nstatic void read_data(void* pvParameters)\n{\n    while (1) {\n        // Determine the next tick (and then sleep later)\n        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);\n\n        // roll the buffer -axis_num points so we can overwrite the last one\n        numpy::roll(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, -axis_num);\n        \n        distance = ultrasonic.MeasureInCentimeters();\n        if (distance > 200.0) { distance = -1;}\n        \n        buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE - 1] = distance;\n\n        // and wait for next tick\n        uint64_t time_to_wait = next_tick - micros();\n        delay((int)floor((float)time_to_wait / 1000.0f));\n        delayMicroseconds(time_to_wait % 1000);\n    }\n}\n\nvoid loop()\n{\n  //nothing, all the work is done in two threads\n}\n")),(0,a.kt)("p",null,'Here we wait until it is time to get the data, then take distance measurement with ultrasonic sensor and copy it to inference buffer. Remember that since it is a thread, having delay here doesn\'t affect the whole system and just temporarily "stops" the thread - until it is time to take next reading. FreeRTOS can perform tasks in other threads while data collection thread is inactive.'),(0,a.kt)("h2",{id:"azure-iot-central-integration"},"Azure IoT Central Integration"),(0,a.kt)("p",null,"Okay, the model works, but again all in by itself it is not suitable for actually applying it in  the real world. Let\u2019s add two elements to  make it into a full-fledged  application \u2013 a simple GUI and data upload to cloud with pretty graphs. We will use ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LVGL/"},"LVGL library")," for creating graphical user interface and Microsoft Azure IoT Central service for sending data to and visualization. The resulting sketch is 693 lines long and has 3 concurrent threads running in RTOS. Here is a quick  recap of steps you need to make it work with IoT central.\nFind the project in Github repository for this project, under name WioTerminal_Azure_Central.ino and open it in Arduino IDE. After the sketch is uploaded, enter configuration mode by pressing three buttons on top of Wio Terminal and resetting the device."),(0,a.kt)("p",null,"\u201cIn   configuration mode\u201d will be displayed on device screen. Connect to  device with Serial monitor (baud rate 115200, carriage return) and set  WiFi SSID, password and Azure IoT Central credentials (in the following   format ",(0,a.kt)("inlineCode",{parentName:"p"},"set_az_iotc your_ID_scope your_primary_key your_device_ID"),"), which you can get by following these steps:\n\u2022 Go to ",(0,a.kt)("a",{parentName:"p",href:"https://apps.azureiotcentral.com/"},"https://apps.azureiotcentral.com/"),"\n\u2022 If you don\u2019t have a Microsoft account yet, register one.\n\u2022 Go to Build -> Custom app. Enter the app name and unique URL (can be similar to app name). Choose Free plan.\n\u2022 After an app is created, go to Device Templates. Make a new template of IoT device type. Choose custom model, add three capabilities as in the  below  screenshot and two interfaces (press on Views -> Visualizing  the  device). After finishing that and making sure everything is  correct,  publish the template.\n\u2022 Create a new device from  template by  going to Devices and pressing on New, remember to choose  the Template  you just created and published!\n\u2022 Get the ID scope  from  Administration -> Device connection, Primary key from  Administration  -> Device connection -> SAS-IoT-Devices and device  ID from Devices  tab, where you created your device on Step 5."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure1.jpeg"})),(0,a.kt)("p",null,"After configuration is successful, restart Wio Terminal and it will start connecting to Azure IoT Central, you can watch the detailed progress feedback on the Serial Terminal. You will then be able to see   a) Device status on dashboard has changed to Provisioned b) Telemetry data from Accelerometer sensor in Device -> Raw data."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure2.jpeg"})),(0,a.kt)("p",null,"We then add the parts responsible for Edge Impulse model inference,  threading and modify send telemetry function to send values for number of people entered, people left and total number of people in the room.  We also add simple GUI consisting of three buttons and a text field,  which displays  information updates \u2013 you can see the resulting sketch by opening WioTerminal_EI_People_Counting_Azure_Central_LVGL.ino from the project Github repository."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test2.gif"})),(0,a.kt)("p",null,"The hardest part was really making sure everything works normally in each separate thread and does not  influence other threads. Sacrifices were made in order to accommodate that without over-complicating the  code too much, for example placing LVGL task update function right after interface updates and not letting it run periodically."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/18808/latest"},"Edge Impulse Public project"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_3_People_Counting"},"Project Github")))))}p.isMDXComponent=!0}}]);