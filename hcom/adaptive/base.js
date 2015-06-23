function hasTouchScreen() {
    return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
}

function isHTML5() {
	return ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window);
}