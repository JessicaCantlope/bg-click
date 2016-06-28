# bg-click.js #

Sets the source URL, an image, as a full-coverage background image when clicked.

Live example [at my blog](http://jessicacantlope.com) - which also has parallax scrolling added to the set background (not added here as it's a little laggy/janky on certain devices).


## Usage ##

### Step 1: Get bg-click.js ###

To use bg-click, make sure that both the jQuery and bg-click.js scripts are included.

####Download bg-click.js####
- [Download the latest release](https://github.com/JessicaCantlope/bg-click/archive/master.zip).
- Clone the repo: `git clone https://github.com/JessicaCantlope/bg-click.git`.


####Include jQuery and bg-click.js scripts####
```html
<script type="text/javascript" src="//code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="bg-click.js"></script>
```

### Step 2: Prepare Your Images/Thumbnails ###

The html is laid out like this:

```html
<div class="items">
	<a class="thumb" href="images/long_hidden.jpg"><img src="images/01.jpg"></a>
	<a class="thumb" href="images/surface.jpg"><img src="images/02.jpg"></a>
	<a class="thumb" href="images/life_in_motion.jpg"><img src="images/03.jpg"></a>
</div>
```

### Step 3: Call bg-click.js ###

You actually don't need to call it -- with the JS included, it automatically works on all links with a certain class, in this case "thumb".

```css
a.thumb
```

You can change it to anything you want on line 3.

### Step 4: Notes ###

The most important styles are on HTML, BODY, and OVERLAY. They are styled so that the background is properly full-width and dimmed.

For best results, use Chrome.

## Issues ##

- I include Louis-Rémi's [backgroundsize.htc] (https://github.com/louisremi/background-size-polyfill) for background coverage in old versions of IE.
-- It's supposed to make background-size: cover work in IE8. It WAS working at one point but currently isn't; I'm trying to figure out why. IE8 is no longer officially supported, but I may figure this out yet.
- There's an issue where the default background doesn't tile in IE8 and IE9.