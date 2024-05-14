// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// call this to Disable
export function disableScroll() {
  if(typeof document !== 'undefined') {
    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch(e) {}

    const wheelOpt = supportsPassive ? { passive: false } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
}

// call this to Enable
export function enableScroll() {
  if(typeof document !== 'undefined') {
    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch(e) {}

    const wheelOpt = supportsPassive ? { passive: false } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
}


// Method 2 (Bad)
// export function disableScroll() {
//   // Get the current page scroll position
//   const scrollTop = window.scrollY || document.documentElement.scrollTop;
//   const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
//
//   // if any scroll is attempted,
//   // set this to the previous value
//   window.onscroll = function () {
//     window.scrollTo(scrollLeft, scrollTop);
//   };
// }
//
// export function enableScroll() {
//   window.onscroll = function () { };
// }

// Method 3 (Bad unstable on phone)
// export function disableScroll() {
//   document.body.classList.
//   add("stop-scrolling");
// }
//
// export function enableScroll() {
//   document.body.classList
//     .remove("stop-scrolling");
// }