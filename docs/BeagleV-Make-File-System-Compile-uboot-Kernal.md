---
name: How to Make Fedora OS File System, Compile u-boot and Linux Kernel
category: BeagleV™ - StarLight
bzurl: 
wikiurl: 
sku: 
---

# How to Make Fedora OS File System, Compile u-boot and Linux Kernel

## Hardware Needed

- BeagleV™ - Starlight
- Micro-SD Card (16GB or more)
- PC with Linux OS or Mac
- USB to Serial Converter
- Ethernet Cable
- Power Adapter
- USB Type-C Cable

**Note:** In this guide, **Ubuntu 20.04 LTS** is installed on the **host PC**.

## Set Up Your Own Cross-Compile (riscv64-linux-gnu-gcc)
First we need to install the **riscv64-linux-gnu-gcc** compiler on the host PC

- **Step 1.** Install the **riscv64-linux-gnu-gcc** compiler from Ubuntu packages 

```sh
sudo apt update
sudo apt upgrade
sudo apt install gcc-riscv64-linux-gnu
```

- **Step 2.** Check the version of the riscv64-linux-gnu-gcc

```sh
riscv64-linux-gnu-gcc -v
```

The output will be as follows:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/compiler_version.png" alt="pir" width="800" height="auto"></p>

Now we need to add **elfutils** and **zlib** libraries into **cross-compile**

- **Step 3.** Visit [this link](https://zlib.net/) and download the latest **.tar.gz** of zlib

- **Step 4.** Extract the file and navigate to the extracted directory

```sh
tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
```

- **Step 5.** Install **vim text editor** if you have not installed before. You can skip this step if you have it already

```sh
sudo apt install vim
```

- **Step 6.** Create a script inside the directory and open using vim text editor

```sh
vim zlib-build.sh
```

- **Step 7.** Copy the following and paste inside the script

```sh
#!/bin/bash
mkdir build
CHOST=riscv CC=riscv64-linux-gnu-gcc \
AR=riscv64-linux-gnu-ar \
RANLIB=riscv64-linux-gnu-ranlib \
./configure
make && make install
```

- **Step 8.** Press **ESC** and type **:x** to save and exit from the file

- **Step 9.** Modify the permissions of all the files in **zlib-1.2.11** directory

```sh
chmod 777 -R *
```

- **Step 10.** Execute the following command to change the permissions of the **/usr/local/** directory

```sh
sudo chmod 777 -R /usr/local/*
```

- **Step 11.** Run the script 

```sh
./zlib-build.sh
```

The final lines of the output will be as follows:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/zlib_output.png" alt="pir" width="650" height="auto"></p>

- **Step 12.** Visit [this link](https://sourceware.org/elfutils/) and download the latest **.tar.bz2** of ulfutils

- **Step 13.** Extract the file and navigate to the extracted directory

```sh
tar -jxvf elfutils-latest.tar.bz2
cd elfutils-0.183
```

- **Step 14.** Create a script inside the directory and open using vim text editor

```sh
vim elfutil-build.sh
```

- **Step 15.** Copy the following, paste inside the script and save the file

```sh
#!/bin/bash

mkdir build
#export LDFLAGS=-L
#export CPPFLAGS=-I
#export LIBS=-lz
./configure --host=riscv64-linux-gnu --enable-libdebuginfod=dummy --disable-debuginfod --prefix=/usr --libdir=/lib
make && make install
```

- **Step 16.** Modify the permissions of all files in the **elfutils-0.183** directory

```sh
chmod 777 -R *
```

- **Step 17.** Run the script 

```sh
./elfutil.sh
```

The final lines of the output will be as follows:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/elfutil_output.png" alt="pir" width="750" height="auto"></p>

**Note:** Please ignore the error messages in this output.

## Make Fedora OS File System

Now we need to make the Fedora OS file system. Follow the steps below to proceed

- **Step 1.** Create the directory structure

```sh
mkdir rootfs
cd rootfs
mkdir dev usr bin sbin lib etc proc tmp sys var root mnt
```

- **Step 2.** Download the busybox source code by visiting [here](https://busybox.net/)

- **Step 3.** Extract the file to your desired location

- **Step 4.** Navigate to the extracted location and enter busybox configuration

```sh
cd busybox-1.32.1
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv menuconfig
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/busybox-config.png" alt="pir" width="750" height="auto"></p>

- **Step 5.** Navigate to `Settings > Build Options` and check **Build static binary (no shared libs)** by pressing **y**

- **Step 6.** Under `Build Options`, select `cross compiler prefix` and type the following to specify the compiler

```sh 
riscv64-unknown-linux-gnu-
```

- **Step 7.** Under `Installation Options > Destination path for 'make install'`, change the path to the path of the **rootfs file directory** (this is the installation location of the compiled busybox)

```sh
Example:
/home/user/rootfs
```

- **Step 8.** **Exit** from the busybox configuration window and **save the configuration**

- **Step 9.** Compile busybox

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv
```

- **Step 10.** Install busybox

```sh
make install CONFIG_PREFIX=/home/user/rootfs
``` 

**Note:** The path here is the same rootfs directory that we created before.

- **Step 11.** Navigate to the **rootfs/etc** directory created before, create a file called **inittab** and open it using vim text editor

```sh
cd rootfs/etc
vim inittab
```

- **Step 12.** Copy and paste the following content inside the **inittab file**

```sh
::sysinit:/etc/init.d/rcS
```

- **Step 13.** Create a file called **profile** inside `rootfs/etc` and open it using vim text editor

```sh
vim profile
```

- **Step 14.** Copy and paste the following content inside the **profile file**

```sh 
# /etc/profile: system-wide .profile file for the Bourne shells

echo
#echo -n "Processing /etc/profile... "
# no-op
# Set search library path
#echo "Set search library path in /etc/profile"
export LD_LIBRARY_PATH=/lib:/usr/lib 

# Set user path
#echo "Set user path in /etc/profile"
PATH=/bin:/sbin:/usr/bin:/usr/sbin
export PATH 

# Set PS1
#Note: In addition to the SHELL variable, ash supports \u, \h, \W, \$, \!, \n, \w, \nnn (octal numbers corresponding to ASCII characters)
#And \e[xx;xxm (color effects), etc.
#Also add an extra '\' in front of it!

#echo "Set PS1 in /etc/profile"

export PS1="\\e[00;32m[$USER@\\w\\a]\\$\\e[00;34m"

#echo "Done"
```

- **Step 15.** Create a file called **fstab** inside `rootfs/etc` and open it using vim text editor

```sh
vim fstab
```

- **Step 16.** Copy and paste the following content inside the **fstab file**

```sh
proc	/proc	proc	defaults	0	0
none 	/tmp 	tmpfs 	defaults 	0 	0
mdev 	/dev 	tmpfs 	defaults 	0 	0
sysfs 	/sys 	sysfs 	defaults 	0 	0
```

- **Step 17.** Create a file called **passwd** inside `rootfs/etc` and open it using vim text editor

```sh
vim passwd
```

- **Step 18.** Copy and paste the following content inside the **passwd file**

```sh
root:x:0:0:root:/root:/bin/sh
```

- **Step 19.** Create a file called **group** inside `rootfs/etc` and open it using vim text editor

```sh
vim group
```

- **Step 20.** Copy and paste the following content inside the **group file**

```sh
root:x:0:root
```

- **Step 21.** Create a file called **shadow** inside `rootfs/etc` and open it using vim text editor

```sh
vim shadow
```

- **Step 22.** Copy and paste the following content inside the **shadow file**

```sh
root:BAy5qvelNWKns:1:0:99999:7:::
```

- **Step 23.** Create a directory called **init.d** inside `rootfs/etc` and navigate inside it

```sh
mkdir init.d
cd init.d
```

- **Step 24.** Create a file called **rcS** inside `rootfs/etc/init.d` and open it using vim text editor

```sh
vim rcS
```

- **Step 25.** Copy and paste the following content inside the **rcS file**

```sh
#! /bin/sh
#echo "----------mount all"
/bin/mount -a

#echo "----------Starting mdev......"
#/bin/echo /sbin/mdev > /proc/sys/kernel/hotplug
mdev -s

echo "********************************************************"
echo " starfive mini RISC-V Rootfs"
echo "********************************************************"
```

- **Step 26.** Navigate to the **rootfs/dev** directory created before and execute the following 

```sh
cd rootfs/dev
sudo mknod -m 666 console c 5 1
sudo mknod -m 666 null c 1 3
```

- **Step 27.** Create a soft link in the root directory of **rootfs**

```sh
cd rootfs/
ln -s bin/busybox init
```

- **Step 28.** Modify the permissions of all files in the **rootfs** directory

```sh
sudo chmod 777 -R *
```

- **Step 29.** Execute the following command in the **rootfs** directory to generate rootfs.cpio.gz (cpio file system package) in a different directory

```sh
cd rootfs
find . | cpio -o -H newc | gzip > /home/user/Desktop/rootfs.cpio.gz
```

**Note:** After you sucessfully run the above command, you will see a file named `rootfs.cpio.gz` on your **Desktop**. This directory can be any directory of your choice.

## Compile u-boot

Now we need to compile the u-boot for BeagleV™ - Starlight. Follow the steps below

- **Step 1.** Move into your desired directory to store the uboot files

```sh
Example:
cd ~ # home directory
```

- **Step 2.** Download the source code for uboot compilation

```sh
git clone https://github.com/starfive-tech/beagle_uboot-opensbi
```

- **Step 3.** Navigate to the following file path and open the file using vim text editor

```sh
vim beagle_uboot-opensbi/configs/starfive_vic7100_beagle_v_smode_defconfig
```

- **Step 6.** Modify the configuration as follows and save the file

```sh
CONFIG_SYS_TEXT_BASE=0x80020000
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/uboot-edit.png" alt="pir" width="400" height="auto"></p>

**Note:** Press **i** to enter **editing mode**

- **Step 7.** Execute the following commands to install the necessary dependencies for compilation

```sh
sudo apt-get install autoconf automake autotools-dev bc bison build-essential curl flex gawk gdisk git gperf libgmp-dev libmpc-dev libmpfr-dev libncurses-dev libssl-dev libtool patchutils python screen texinfo unzip zlib1g-dev device-tree-compiler
```

- **Step 8.** Go back to the **root of beagle_uboot-opensbi directory** and type the following to **compile uboot**

```sh
cd beagle_uboot-opensbi
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv starfive_vic7100_beagle_v_smode_defconfig
```

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv u-boot.bin u-boot.dtb
```

There will be these 2 files generated after compilation inside the **beagle_uboot-opensbi** directory: **u-boot.bin** and **u-boot.dtb**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/uboot-compile2.png" alt="pir" width="800" height="auto"></p>

**Note:** The **u-boot.dtb** file will be used later in this guide when we try to move rootfs, uboot and kernel to BeagleV, whereas both **u-boot.dtb** and **u-boot.bin** will be used next for **OpenSBI compilation**

## Compile OpenSBI

Now we need to compile OpenSBI for BeagleV™ - Starlight. Follow the steps below

- **Step 1.** Move into your desired directory to store the OpenSBI files

```sh
Example:
cd ~ # home directory
```

- **Step 2.** Download the source code for OpenSBI compilation

```sh
git clone https://github.com/starfive-tech/beagle_opensbi 
```

- **Step 3.** Navigate to the following file path and open the file using vim text editor

```sh
vim beagle_opensbi/platform/starfive/vic7100/config.mk
```

- **Step 4.** Modify the configuration as follows and save the file

```sh
FW_JUMP_ADDR=0x8002000
FW_PAYLOAD_OFFSET=0x20000
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/opensbi-config.png" alt="pir" width="500" height="auto"></p>

- **Step 5.** Go to the **root of beagle_opensbi directory** and type the following to **compile openSBI**

```sh
cd beagle_opensbi
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv PLATFORM=starfive/vic7100 FW_PAYLOAD_PATH={U-BOOT_PATH}/u-boot.bin FW_PAYLOAD_FDT_PATH={U-BOOT_PATH}/u-boot.dtb 
```

**Note:** Modify the path to the path of **beagle_uboot-opensbi**

The file will be generated in the directory **beagle_opensbi/build/platform/starfive/vic7100/firmware** as **fw_payload.bin** after compilation and the size is about 700+K

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/opensbi-compile.png" alt="pir" width="850" height="auto"></p>

- **Step 6.** Navigate to the directory containing **fw_payload.bin**

```sh
cd beagle_opensbi/build/platform/starfive/vic7100/firmware
```

- **Step 7** Copy the file **fw_payload.bin** to a different location

```sh
cp fw_payload.bin /home/user/Desktop
```

- **Step 8.** Navigate to the copied location and execute the following to install an **image conversion tool**

```sh
sudo apt install subversion
svn export https://github.com/starfive-tech/freelight-u-sdk.git/branches/starfive/fsz.sh
```

**Note:** [Here](https://github.com/starfive-tech/freelight-u-sdk/blob/starfive/fsz.sh) is the source code

- **Step 9.** Change the user rights of the tool

```sh
chmod 777 fsz.sh
```

- **Step 10.** Convert the file from **fw_payload.bin** to **fw_payload.bin.out**

```sh
./fsz.sh fw_payload.bin fw_payload.bin.out
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/bin-conversion.png" alt="pir" width="750" height="auto"></p>

**Note:** You will see a new file named **fw_payload.bin.out** generated

## Flash uboot

Let's move on to flash the **fw_payload.bin.out** file generated before to BeagleV™ - StarLight. This fw_payload file is the result of OpenSBI and uboot both compiled together

- **Step 1.** Connect one end of the USB Type-C cable to the USB Type-C port on the BeagleV™ - StarLight and connect the other end of the cable to the power adapter

- **Step 2.** Connect the jumper wires from the USB to Serial Converter to the 40-Pin GPIO header of the BeagleV™ - StarLight as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/connection.jpg" alt="pir" width="1000" height="auto"></p>

- **Step 3.** Connect power adapter to wall power socket

- **Step 4.** Open a **terminal window** on host PC

- **Step 5.** Type the following to update the **packages list**

```sh
sudo apt-get update
```

- **Step 6.** Install **minicom**, which is a **serial communication software** that helps to establish a serial communcation between your host PC and BeagleV™ - StarLight

```sh
sudo apt-get install minicom
```

- **Step 7.** Connect the **USB To Serial Converter** to the **PC**

- **Step 8.** Type the following in the terminal to view the connected serial devices

```sh
dmesg | grep tty
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_1.png" alt="pir" width="800" height="auto"></p>

- **Step 9.** Connect to the serial device by typing the following

```sh 
minicom -D /dev/ttyACM0 -b 115200
```

**Note:** The baud rate is set to 115200

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_2.png" alt="pir" width="600" height="auto"></p>

- **Step 10.** After the hardware connections mentioned above, turn on the power from the wall power socket to power on the BeagleV™ - StarLight and you will see the startup information as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_3.png" alt="pir" width="600" height="auto"></p>

- **Step 11.** Press any key as soon as it starts up to enter the **upgrade menu**. In this menu, you can update uboot

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_4.png" alt="pir" width="1000" height="auto"></p>

- **Step 12.** Type "0" and press **Enter** to update uboot

- **Step 13.** Press **Ctrl+A** and then press **s** to enter **upload mode**

- **Step 14.** Select **xmodem** and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/minicom-xmodem-select.png" alt="pir" width="800" height="auto"></p>

- **Step 15.** Select **Goto** from the bottom tab menu and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/minicom-goto.png" alt="pir" width="750" height="auto"></p>

- **Step 16.** Enter the directory path and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/minicom-directory-path.png" alt="pir" width="750" height="auto"></p>

- **Step 17.** Select **fw_payload.bin.out** by navigating using **arrow keys** ,press **Space** and press **Enter**

If you see the following output, that means you have successfully transferred the **fw_payload.bin.out** file to BeagleV™ - Starlight.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/xmodem-complete.png" alt="pir" width="600" height="auto"></p>

- **Step 18.** Finally press **Enter**

## Compile Linux Kernel

Now we need to compile Linux Kernel for BeagleV™ - Starlight. Follow the steps below

- **Step 1.** Move into your desired directory to store the Linux Kernel files

```sh
Example:
cd ~ # home directory
```

- **Step 2.** Download the source code for Linux Kernel

```sh
git clone https://github.com/starfive-tech/beagle_kernel_5.10
```

- **Step 3.** Move into **starfive** branch

```sh
cd beagle_kernel_5.10
git checkout -b starfive origin/starfive
```

- **Step 4.** Type the following to **compile Linux Kernel** with default configuration settings

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv starfive_vic7100_evb_sd_net_fedora_defconfig
```

- **Step 5.** Type the following to **compile Linux Kernel** with an additional menu configuration with your desired settings. Step 4 above loads the default configuration.

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv menuconfig
```

- **Step 6.** Finally execute the following 

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv -j4
```

**Note:** Here you need to change the **-j4** value according to the **number of cores in your CPU**. If your **CPU has 8 cores**, change this to **-j8**. This process will take some time and therefore please wait patiently

You will see the following output after compilation

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/kernel-compile.png" alt="pir" width="450" height="auto"></p>

The kernel image will be generated as **Image.gz** inside the **beagle_kernel_5.10/arch/riscv/boot** directory

- **Step 7.** Generate vmlinuz file

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv INSTALL_PATH={ROOTFS_PATH}/boot/ zinstall
```

**Note:** {ROOTFS_PATH} can be any random location of your choice

- **Step 8.** Generate modules

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv INSTALL_MOD_PATH=${ROOTFS_PATH} modules_install
```

- **Step 9.** Insert a micro-sd card to the host PC with Fedora Image already flashed 

- **Step 10.** Replace the kernel vmlinuz by executing the following

```sh
sudo cp boot/vmlinuz-5.10.6+ /media/user/__boot/ && sync 
```

**Note:** In here, **/user/** should be replaced according to your PC username

- **Step 11.** Replace ko modules by executing the following

```sh
sudo cp -r lib/modules/5.10.6+/kernel/ /media/user/__/lib/modules/5.10.6+/ && sync
```

**Note:** In here, **/user/** should be replaced according to your PC username

## Move rootfs, kernel and uboot into BeagleV™ - Starlight

### Method 1: Using Ethernet Cable

- **Step 1.** Connect an Ethernet Cable from the RJ45 port of BeagleV™ - Starlight to a router, connect serial adapter cable and power on the board

**Note:** Make sure the host PC is also connected to the same router using Ethernet or Wi-Fi

- **Step 2.** Open **minicom** and wait until board enters **uboot mode**. You will see the following output when it is in uboot mode

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/uboot-mode.png" alt="pir" width="700" height="auto"></p>

- **Step 3.** Enter the following commands to set ubooot environment variables 

```sh
setenv serverip 192.168.1.5;setenv ipaddr 192.168.1.33;setenv hostname starfive;setenv netdev eth0;setenv kernel_comp_addr_r 0x90000000;setenv kernel_comp_size 0x10000000; setenv bootargs console=ttyS0,115200 earlycon=sbi root=/dev/ram0 stmmaceth=chain_mode:1 loglevel=8
```

**Note:** In general the default IP of a router is 192.168.1.1. In this case, use the server IP as the IP assigned by the DHCP server of the router and use the BeagleV IP as 192.168.1.xxx. However, if your router IP is different (ex: 192.168.2.1), the server and BeagleV should follow the IP format of 192.168.2.xxx. 

- **Step 4.** Check the connectivity by pinging the host PC from BeagleV™ - Starlight

```sh
Example:
ping 192.168.1.5
```

If you see the following output, the host PC and BeagleV™ - Starlight has established a communication on the same network

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/ping-test.png" alt="pir" width="300" height="auto"></p>

- **Step 5.** Install a tftp server on the Host PC

```sh
sudo apt-get update 
sudo apt install tftpd-hpa
```

- **Step 6.** Check the status of the server

```sh
sudo systemctl status tftpd-hpa
```

- **Step 7.** Move the previously compiled rootfs file system package, kernel and uboot images into a single directory

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/needed-files.png" alt="pir" width="300" height="auto"></p>

- **Step 8.** Execute the following to enter the tftp server configuration

```sh
sudo nano /etc/default/tftpd-hpa
```

- **Step 9.** Configure the tftp server as follows

```sh
# /etc/default/tftpd-hpa

TFTP_USERNAME="tftp"
TFTP_DIRECTORY="/home/user/Desktop/compiled"  
TFTP_ADDRESS=":69"
TFTP_OPTIONS="--secure"
```


**Note:** The **TFTP_DIRECTORY** is the directory that we created before with all the 3 images (Image.gz, u-boot.dtb, rootfs.cpio.gz)

- **Step 10.** Restart the tftp server

```sh 
sudo systemctl restart tftpd-hpa
```

- **Step 11.** Type the following inside the uboot mode of BeagleV™ - Starlight to download the files from the tftp server of the host PC and start the kernel 

```sh
tftpboot ${fdt_addr_r}  u-boot.dtb;tftpboot ${kernel_addr_r} Image.gz;tftpboot ${ramdisk_addr_r} rootfs.cpio.gz;booti ${kernel_addr_r} ${ramdisk_addr_r}:${filesize} ${fdt_addr_r}
```

- **Step 12.** Log in with the following credentials

```sh
Username：root
Password：starfive
```

### Method 2: Using Micro-SD Card

- **Step 1.** Insert a micro-sd card to the host PC

- **Step 2.** Type the following to see the location of the connected micro-SD card

```sh
lsblk
```
<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/sd-partition.png" alt="pir" width="700" height="auto"></p>

For example, it's /dev/sdc

- **Step 3.** Type the following to enter the partition configuration

```sh
sudo gdisk /dev/sdc
```

- **Step 4.** Delete the original partition and then create a new partition by entering the following respectively

```sh
d--->o--->n--->w--->y
```

- **Step 5.** Format the micro-sd card and create the file system

```sh
sudo mkfs.vfat /dev/sdc1
```

- **Step 6.** Remove the micro-sd card from PC and plug again to mount it

- **Step 7.** Enter the following to check whether it gets mounted

```sh
df -h
```

You will see an output as follows and take a note of the mount location:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/sd-mount.png" alt="pir" width="700" height="auto"></p>

- **Step 8.** Navigate to the directory containing the 3 images as mentioned before

```sh
Example:
cd Desktop/compiled
```

- **Step 9.** Copy the files to the micro-sd card by typing the following

```sh
sudo cp Image.gz /media/user/4714-3C2D/
sudo cp rootfs.cpio.gz /media/user/4714-3C2D/
sudo cp u-boot.dtb /media/user/4714-3C2D/
sync
```

**Note:** Here /media/user/4714-3C2D/ is the mount location as shown above

- **Step 10.** Remove the micro-sd card from PC, insert into BeagleV™ - Starlight and turn it on

- **Step 11.** Run the board in uboot, and enter the following commands

```sh
fatls mmc 0:1
fatload mmc 0:1 ${kernel_addr_r} Image.gz 
fatload mmc 0:1 ${fdt_addr_r} u-boot.dtb
fatload mmc 0:1 ${ramdisk_addr_r} rootfs.cpio.gz
booti ${kernel_addr_r} ${ramdisk_addr_r}:${filesize} ${fdt_addr_r}
```

- **Step 12.** If you have succussfully executed the above commands, you will see the following output:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/sdcard-success.png" alt="pir" width="600" height="auto"></p>

- **Step 13.** Log in by typing the following credentials 

```sh
Username：root
Password：starfive
```


