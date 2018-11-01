function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function Kello() {
  var d = new Date();
  let h = addZero (d.getHours());
  let m = addZero (d.getMinutes());
  let s = addZero (d.getSeconds());

  let koko ='Klockan är: ' + h + ':' + m + ':' + s ;

  document.getElementById("kello").innerHTML = koko;
}

 setInterval(Kello, 1000);