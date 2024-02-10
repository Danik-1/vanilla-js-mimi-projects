setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  document.querySelector(".hour").style.transform =
    "rotate(" + hours * 30 + "deg)";
  document.querySelector(".minute").style.transform =
    "rotate(" + minutes * 6 + "deg)";
  document.querySelector(".second").style.transform =
    "rotate(" + seconds * 6 + "deg)";
}, 1000);
