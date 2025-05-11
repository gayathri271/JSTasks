let SearchInput = document.getElementById("search");
// let DisplayInput = document.getElementById("display");
let DebounceInput = document.getElementById("debouncing");
let ThrottleInput = document.getElementById("Throttling");

const updateddebounce = debounce(function (e) {
  DebounceInput.textContent = e.target.value;
}, 1000);
const updatedThrottle = throttle(function (e) {
  ThrottleInput.textContent = e.target.value;
}, 1000);

SearchInput.addEventListener("input", updateddebounce);
SearchInput.addEventListener("input", updatedThrottle);

function debounce(cb, delay = 1000) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
}

function throttle(cb, delay = 1000) {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) {
      return;
    }
    cb.apply(this, args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

function output(prefix){
    return function(...message){
        console.log(`${prefix}:${message.join(",")}`)
    }
}

const sentmessage=output("Results")

sentmessage("hello","Result1","Result2")


