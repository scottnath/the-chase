# How to Set Up a Raspberry Pi to live-stream video over a local network

These are the software installations instructions prepare a Raspberry Pi 2 Model B to stream video over wifi.

All you need to receive the video is a computer on the same network and a browser!

## Initial Raspi software setup
1. [Downlaod raspbian](https://www.raspberrypi.org/downloads/) (raspbian is a popular operating system for the raspi)
2. On OSX, use [pifiller](http://ivanx.com/raspberrypi/) to copy the raspbian image onto a blank mini sd card
3. Fire up the new raspi and go type in `sudo raspi-config`, which brings you to the OS configuration screens
	1. Expand the file system
	2. Overclock the raspi to `pi2`
	3. Advanced Link -> turn on ssh
	4. Advanced Link -> hostname
		* change this to desired hostname, I use `runnerpi[number]` as in `runnerpi3`
	5. **ENABLE THE RASPI CAMERA**
4. Reboot

## Setting up wifi

I use **wicd-curses** and [this page taught me how to set it up](http://www.raspyfi.com/wi-fi-on-raspberry-pi-a-simple-guide/). NOTE: you will need to be connected to the internet to set this up.

1. Connect the raspi to the internet with an ethernet cable
2. Update apt-get
	```sudo apt-get update```
3. Install wicd-curses
	```sudo apt-get install wicd-curses```
4. Run wicd-curses
	```sudo wicd-curses```
	
Fairly straightforward if you've ever set up wifi before, but again [this article helps immensely](http://www.raspyfi.com/wi-fi-on-raspberry-pi-a-simple-guide/)

## Setting up the video streaming software on the raspi

I tried a bunch of solutions, and finally settled on UV4L (Userspace Video4Linux). This option can stream h264 and mjpeg streams, but with a 2-3 second lag. BUT it excels when using WebRTC where there is basically **no video lag* at all!

The instructions are many, but except for one it's a long list of install commands. Prepare your copy n paste fingers!!

To see the commands, [follow these instructions to install UV4L on your raspberry pi](http://www.linux-projects.org/modules/sections/index.php?op=viewarticle&artid=14). I'm not going to paste them here because I'm sure they'll change over time I'm sure.

The one command that's not just copy and paste is the second one:

```
Add the following line to the file /etc/apt/sources.list :
	deb http://www.linux-projects.org/listing/uv4l_repo/raspbian/ wheezy main
```

To do this, you'll want to type:

```sudo nano /etc/apt/sources.list```

which will pull up an in-console editor to add the `deb` line to `sources.list`


## Turn off live preview

Once you've got everything installed, you're gonna wanna turn off live preview of the video stream

```sudo nano /etc/uv4l/uv4l-raspicam.con```

Find this line:

```# nopreview = yes```

and remove the hashtag to un-comment it. It will then look like this:

```nopreview = yes```

save the file
