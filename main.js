'use strict';

{
  
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  
  let startTime;
  let setTimeoutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const h = d.getUTCHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = String(d.getMilliseconds()).padStart(1, '0');  //一桁で表示させるには？

    timer.textContent = `${h}:${m}:${s}:${ms}`;
    
    setTimeoutId = setTimeout(countUp, 10);
  }
  
  function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }

  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }
  
  function setButtonStatestopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }
  
  setButtonStateInitial();
  
  start.addEventListener('click', function() {
    startTime = Date.now();
    countUp();
    setButtonStateRunning();
  })
  
  stop.addEventListener('click', function() {
    clearTimeout(setTimeoutId);
    elapsedTime +=  Date.now() - startTime;
    setButtonStatestopped();
  })
  
  reset.addEventListener('click', function() {
    timer.textContent = '0:0:0:0'
    elapsedTime = 0;
    setButtonStateInitial();
  })
  
}