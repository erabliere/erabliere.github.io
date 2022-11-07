export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp


  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    const clientHeight = window.innerHeight || document.documentElement.clientHeight
/*     console.log('ch', clientHeight)
    console.log('t', rect.top)
    console.log('b', rect.bottom)
    console.log('l', rect.left)
    console.log('r', rect.right) */
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <= clientHeight / 2
      /*(window.innerHeight || document.documentElement.clientHeight)  &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) */
    );
  }

function callbackFunc() {
    const items = window.document.querySelectorAll(".timeline li.event");

    for (var i = 0; i < items.length; i++) {
     // console.log(i)
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})