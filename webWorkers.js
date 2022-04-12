var time=0;

function timedCount() {
  time = time + 1;
  postMessage(time);
  setTimeout("timedCount()",500);
}

timedCount();