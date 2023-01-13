function fontAuto(width) {
  var winW = document.documentElement.clientWidth; //屏幕宽度
  if (winW >= width) {
    document.documentElement.style.fontSize = "625%";
  } else {
    document.documentElement.style.fontSize = (winW / width) * 625 + "%";
  }
}
fontAuto(640);

window.onresize = function () {
  //窗口发生变化的时候触发函数
  fontAuto(640);
};
