// ####### Fetching HTML Elements ########

const timerEle = document.querySelector("#timer");
const secondEle = document.querySelector("#second");
const minuteEle = document.querySelector("#minute");
const startBtnEle = document.querySelector("#start-btn");
const stopBtnEle = document.querySelector("#stop-btn");
const resetBtnEle = document.querySelector("#reset-btn");
const timingListEle = document.querySelector("#timingList");

// ########## Global Variables #############
let timings = [];
let second = 1;
let minute = 0;
let timer;

// ############ Timer Controller Function to handle setInterval ########
function timerController(flag) {
  if (flag) {
    updateTimer();
  } else {
    clearInterval(timer);
  }
}

//############## Start Button Event Listener ##################
startBtnEle.addEventListener("click", () => {
  timerController(true);
  startBtnEle.disabled = true;
  startBtnEle.style.backgroundColor = "rgb(1, 164, 164)";
  stopBtnEle.style.backgroundColor = "rgb(228, 79, 109)";
  resetBtnEle.style.backgroundColor = "rgb(228, 79, 109)";
});

// ############# Stop Button Event Listener ###################
stopBtnEle.addEventListener("click", () => {
  timerController(false);
  startBtnEle.disabled = false;
  startBtnEle.style.backgroundColor = "rgb(228, 79, 109)";
  stopBtnEle.style.backgroundColor = "rgb(1, 164, 164)";
  resetBtnEle.style.backgroundColor = "rgb(228, 79, 109)";
  let time = timerEle.textContent.trim();
  updateTimingList(time);
});

// ##############  Reset Button Event Listener
resetBtnEle.addEventListener("click", () => {
  startBtnEle.style.backgroundColor = "rgb(228, 79, 109)";
  stopBtnEle.style.backgroundColor = "rgb(228, 79, 109)";
  resetBtnEle.style.backgroundColor = "rgb(1, 164, 164)";
  startBtnEle.disabled = false;
  timerController(false);
  second = 1;
  minute = 0;
  minuteEle.textContent = `00`;
  secondEle.textContent = `00`;
  timings = [];
  timingListEle.style.display = "none";
});

// ############### setInterval for starting clock ###########
function updateTimer() {
  timer = setInterval(() => {
    if (second === 60) {
      second = 0;
      secondEle.textContent = second.toString().padStart(2, "0");
      updateMinute();
    } else {
      secondEle.textContent = second.toString().padStart(2, "0");
    }
    second++;
  }, 1000);
}

//########### Update function for updating minute after each 60 seconds passes ###########
function updateMinute() {
  minute++;
  if (minute === 60) {
    minute = 0;
    minuteEle.textContent = minute.toString().padStart(2, "0");
  } else {
    minuteEle.textContent = minute.toString().padStart(2, "0");
  }
}

// ########### Update function for updating recorded time list when stop event occurs ###########
function updateTimingList(time) {
  timingListEle.style.display = "flex";
  if (timings.length == 5) {
    timings.shift();
  }
  if (timings[timings.length - 1] !== time) {
    timings.push(time);
    timingListEle.textContent = "";
    timings.forEach((timing) => {
      let recordedTime = document.createElement("li");
      recordedTime.textContent = timing;
      timingListEle.appendChild(recordedTime);
    });
    timingListEle.lastElementChild.style.backgroundColor = "orange";
  }
}
