export function addEvent(elem, type, func) {
  if (typeof addEventListener !== 'undefined') {
    elem.addEventListener(type, func, false);
  } else if (typeof attachEvent !== 'undefined') {
    elem.attachEvent('on' + type, func);
  }
}

export function removeEvent(elem, type, func) {
  if (typeof removeEventListener !== 'undefined') {
    elem.removeEventListener(type, func, false);
  } else if (typeof detachEvent !== 'undefined') {
    elem.attachEvent('on' + type, func);
  }
}

export function addScrollEvent(elem, func) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    addEvent(elem, 'wheel', func);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    addEvent(elem, 'mousewheel', func);
  } else {
    // Firefox < 17
    addEvent(elem, 'MozMousePixelScroll', func);
  }
}

export function removeScrollEvent(elem, func) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    removeEvent(elem, 'wheel', func);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    removeEvent(elem, 'mousewheel', func);
  } else {
    // Firefox < 17
    removeEvent(elem, 'MozMousePixelScroll', func);
  }
}

export function getTarget(event) {
  if (typeof event.target !== 'undefined') {
    return event.target;
  }
  return event.srcElement;
}

export function preventDefault(event) {
  if (typeof event.preventDefault !== 'undefined') {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}
