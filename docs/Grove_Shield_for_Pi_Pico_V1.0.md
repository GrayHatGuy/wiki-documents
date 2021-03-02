---
name: Grove Shield for Pi Pico v1.0
category: Shield
bzurl: https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html
oldwikiname:
prodimagename: Pico_hardware.png
surveyurl: https://www.surveymonkey.com/r/base_shield_v2
sku: 103100142
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Pico_hardware.png)

The Raspberry Pi Pico is a new popular low-cost, high-performance microcontroller board, so how to integrate Grove sensor to it?  The grove shield perfectly solved this problem.   


The Grove Shield for Pi Pico v1.0 is a plug-and-play shield for Raspberry Pi Pico which integrates with various kinds of Grove connectors, including 2*I2C, 3*Analog, 2*UART, 3*Digital ports, SWD debug interface and SPI pin, 3.3v/5v selectable power switch. It enables the build prototype and project in an easy and quick way without jumper wire and breadboard, you could explore infinite possibilities of Pico. The shield board is a stackable add-on board which acts as a bridge for Pi Pico and Seeed's Grove system. 
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)  


## Specification

| Parameter             | Value/Range  |
|-----------------------|--------------|
| Operating voltage     | 3.3/5V       |
| Operation Temperature | -25℃ to +85℃ |
| Analog Ports          | 3            |
| Digital Ports         | 3            |
| UART Ports            | 2            |
| I2C Ports             | 2            |
| Size                  | 56mm x56mm   |

## Compatible Boards

The Base Shield is tested and fully compatible with [Pi Pico](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html).


## Hardware Overview

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareoverview.png)

- **1-Analog Ports**: include 3 anlog ports, A0, A1, A2.
- **2-Digital Ports**: include 3 digital ports, D16, D18, D20.
- **3-UART Port**: 2 UART port.
- **4-I2C Ports**: 2 I2C ports.
- **5-Power Switch**: 5V/3.3V selectable power switch.
- **6-SPI port**: 1 spi0 port.

- **Dimension**: 56mm * 56mm  

## Getting Started 
### Project 1 
#### Materials Required

- Step 1. Prepare the below stuffs:

| Pi Pico | Grove Shield for Pi Pico|  Grove - Buzzer |Grove-Rotary-Angle-Sensor|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

- Step 2. Connect Grove Buzzer to port A1 of Base Shield.
- Step 3. Connect Grove Rotary Angle Sensor to port A0 of Base Shield.
- Step 4. Plug Grove Shield for Pi Pico into Pi Pico.
- Step 5. Connect Pi Pico to PC through a USB cable.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareconnection.jpg)

#### Software
- Step 1. Download Thonny([Windows](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.exe), [Mac](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.pkg))Integrated Development Environment(IDE) according to your computer system. 

**For linux develop environment**: 

Binary bundle for PC (Thonny+Python):
```
bash <(wget -O - https://thonny.org/installer-for-linux)
```
With pip:
```
pip3 install thonny
```
Debian, Rasbian, Ubuntu, Mint and others:
```
sudo apt install thonny
```
Fedora:
```
sudo dnf install thonny
```



- Step 2. Download the Pico backend wheel, [thonny_rpi_pico-0.2-py3-none-any.whl](https://github.com/raspberrypi/thonny-pico/releases/download/v0.2/thonny_rpi_pico-0.2-py3-none-any.whl), this wheel file is a firmware for pico which can be installed into an existing Thonny installation(version 3.3.0b6 or later).


- Step 3. Start Thonny and navigate to "Tools -> Manage plug-ins" and click on the link to "Install from local file" in the right hand panel, and select the Pico backend wheel. Hit the "close" button to finish.

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Thonny.png)

- Step 4. **Quit and restart Thonny**.
- Step 5. Connect your computer and the Raspberry Pi Pico together, then open up the **Run** menu and select **Run**->"**Select Interpreter**", picking "**MicoPython(Raspberry Pi Pico)**" from the drop down, and select the com port of your Pi Pico.

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/interpreter.png)
![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/comport.png)

Hit "ok" if your Raspberry Pi Pico is plugged in and running MicroPython Thonny should automatically connect to the Repl.

- Step 6. Copy below code to the Thonny IDE, and click the green run button. 
```
from machine import Pin,PWM,ADC
from time import sleep
adc = ADC(0) #ADC input (knob potentiometer) connected to A2
pwm = PWM(Pin(27))#DAC output (buzzer) connected to A1
pwm.freq(10000)
while True:
    
    '''Analog port test'''
    val = adc.read_u16()#Read A2 port adc value (65535~0)
    #Drive the buzzer, turn off the buzzer when the adc value is less than 300
    if val > 300:
        pwm.freq(int(val/10))
        pwm.duty_u16(10000)
    else:
        pwm.duty_u16(0)
    print(val)
    sleep(0.05)
```
Rotate Grove-Rotary-Angle-Sensor, you will hear different sounds from the buzzer.

### project 2

#### Materials Required

- Step 1. Prepare the below stuffs:

| Pi Pico | Grove Shield for Pi Pico|  Grove-OLED-Display-0.96-SSD1315 |Grove-Temperature-Humidity-Sensor-DHT11|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

- Step 2. Connect Grove OLED Display 0.96" to port I2C1 of Base Shield.
- Step 3. Connect Grove Temperature Humidity Sensor DHT11 to port D18 of Base Shield.
- Step 4. Plug Grove Shield for Pi Pico into Pi Pico.
- Step 5. Connect Pi Pico to PC through a USB cable.



#### Software
Please refer to the demo1 software part.

Copy below code to the Thonny IDE at first.
```
from ssd1306 import SSD1306_I2C
from dht11 import *
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)#oled connect to I2C1
oled = SSD1306_I2C(128, 64, i2c)
dht2 = DHT(18) #temperature and humidity sensor connect to D18 port


while True:  

    temp,humid = dht2.readTempHumid()#temp:  humid:
    '''I2C port test'''    
    ''' oled display test'''
    oled.fill(0)#Clear screen
    oled.text("Temp:  " + str(temp),0,0)#display tempearture on line 1
    oled.text("Humid: " + str(humid),0,8)
    oled.show()
    sleep(0.5)
    
```
Then please download the [ssd1306.py](https://github.com/micropython/micropython/blob/master/drivers/display/ssd1306.py) and [dht11.py](http://47.106.166.129/Embeded/pico-micropython-grove/blob/master/Digital/dht11.py) to your local. Use Thonny open dht11.py, click file->save as->MicroPython device.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/saveas.png)

Input **dht11.py** in File name column, click "ok", then the file is saved at File->Open->MicroPython device, the same with the **ssd1306.py** file.


![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/open.png)

After you have save both of the files to your MicroPython device, now please click the green button to run the demo code.

Then you can get the temperature and humidity displayed on the OLED as below.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/oled1.jpg)

## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[PDF]** [Pico python SDK](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/pico_python_sdk.pdf)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Grove_shield_for_PI_PICOv1.0SCH.pdf)
- **[Eagle]** [PCB&SCH](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip)


## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>