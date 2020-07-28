setInterval( function(){
  //hour defined
  const date = new Date();
  let hour = date.getHours();
  if( hour > 12) {hour -= 12}

  const hourStick = document.querySelector("span.hour");
  hourStick.style.transform = `rotate(${hour * 30}deg)`;
  hourStick.style.transformOrigin = "bottom";

  //Minute defined
  const minute = date.getMinutes();

  const minuteStick = document.querySelector("span.minute");
  minuteStick.style.transform = `rotate(${minute * 6}deg)`;
  minuteStick.style.transformOrigin = "bottom";


  //Second defined
  const second = date.getSeconds();

  const secondStick = document.querySelector("span.second");
  secondStick.style.transform = `rotate(${second * 6}deg)`;
  secondStick.style.transformOrigin = "bottom";

}, 1000);
