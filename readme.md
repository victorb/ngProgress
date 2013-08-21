## ngProgress.js

ngProgress is a provider for angular for showing a loading status of something.
Use cases can be fetching external resources, showing a action taking more-than-normal length
or simple loading between the page views. Prefereble, only for resource heavy sites.

## Usage

Include ngProgress.js in your website.

<script src="app/components/ngProgress/ngProgress.js"></script>

Inject ngProgress provider in controller

var MainCtrl = function($scope, $timeout, progressbar) {
}

Use with the API down below

progressbar.start();
$timeout(progressbar.complete(), 1000);

## API

// Starts the animation and adds between 0 - 5 percent to loading
// each 400 milliseconds. Should always be finished with progressbar.complete()
// to hide it

progressbar.start();

// Sets the height of the progressbar. Use any valid CSS value
// Eg '10px', '1em' or '1%'

progressbar.height();

// Sets the color of the progressbar and it's shadow. Use any valid HTML
// color

progressbar.color();

// Returns on how many percent the progressbar is at. Should'nt be needed

progressbar.status();

// Stops the progressbar at it's current location

progressbar.stop();

// Set's the progressbar percentage. Use a number between 0 - 100. 
// If 100 is provided, complete will be called.

progressbar.set();

// Resets the progressbar to percetage 0 and therefore will be hided after
// it's rollbacked

progressbar.reset();

// Jumps to 100% progress and fades away progressbar.

progressbar.complete();