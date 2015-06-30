# GameStation


## Boot Up

Should boot directly into an html page
* this means it boots to gui
* then it full-screen loads a browser
	* https://www.danpurdy.co.uk/web-development/raspberry-pi-kiosk-screen-tutorial/
* boots to HTML PAGE


## HARD BUTTONS

1. Choose Different Game
2. Reboot Device
3. "HARD REBOOT" = green-red button power strip

## HTML PAGE: Choose Game

Should be an html page, which pulls in a data file and images about each game.

### MVP

* has image/title/number-of-players for each game
* games may be selected by keyboard shortcuts
	* this allows use of x-arcades	

### commands needed

* up/down the screen
	* tab/alt-tab
	* select whole DIV
		* whole DIV is trigger for js to trigger game
		* off til "selected"
* left/right select/deselect
	* when selected, all grayed-out except game "hit any button to start, joystick left to deselect"
	* clicking sends launch details to command line
* exit to command line
* refresh
	
## HTML to Command Line

I have had success sending commands from a web page to an express.js server, which sent commands to node