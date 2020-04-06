var eleclockopen = 0
var kisakiopen = 0
var houropen = 1
var minopen = 1
var secopen = 0
$('.num_clock_btn').click(function () {
  if (eleclockopen == 0) {
    $('.time_box').removeClass('display_none')
    $('.num_clock_btn').css({
      background: "url(img/bt1-1.svg)",
      backgroundSize: 'cover'
    })
    eleclockopen = 1

  }
  else if (eleclockopen == 1) {
    $('.time_box').addClass('display_none')
    $('.num_clock_btn').css({
      background: "url(img/bt1.svg)",
      backgroundSize: 'cover'
    })
    eleclockopen = 0
  }
})

$('.kiseki_btn').click(function () {
  if (kisakiopen == 0) {
    $('.bnn').removeClass('display_none')
    $('svg').empty()

    $('.kiseki_btn').css({
      background: "url(img/bt2-1.svg)",
      backgroundSize: 'cover'
    })
    kisakiopen = 1

  }
  else if (kisakiopen == 1) {
    $('.bnn').addClass('display_none')

    $('.kiseki_btn').css({
      background: "url(img/bt2.svg)",
      backgroundSize: 'cover'
    })
    kisakiopen = 0
  }
})



$('.hour_btn').click(function () {
  if (houropen == 1) {
    $('.hourhand').addClass('display_none')
    $('.drawareahour svg').empty()

    $('.hour_btn').css({
      background: "url(img/bt3.svg)",
      backgroundSize: 'cover'
    })
    houropen = 0

  }
  else if (houropen == 0) {
    $('.hourhand').removeClass('display_none')

    $('.hour_btn').css({
      background: "url(img/bt3-1.svg)",
      backgroundSize: 'cover'
    })
    houropen = 1
  }
})

$('.min_btn').click(function () {
  if (minopen == 1) {
    $('.minhand').addClass('display_none')
    $('.drawareamin svg').empty()
    $('.min_btn').css({
      background: "url(img/bt4.svg)",
      backgroundSize: 'cover'
    })
    minopen = 0

  }
  else if (minopen == 0) {
    $('.minhand').removeClass('display_none')

    $('.min_btn').css({
      background: "url(img/bt4-1.svg)",
      backgroundSize: 'cover'
    })
    minopen = 1
  }
})

$('.sec_btn').click(function () {
  if (secopen == 0) {

    $('.sechand').removeClass('display_none')

    $('.sec_btn').css({
      background: "url(img/bt5-1.svg)",
      backgroundSize: 'cover'
    })
    secopen = 1
  }
  else if (secopen == 1) {
    $('.sechand').addClass('display_none')
    $('.drawareasec svg').empty()
    $('.sec_btn').css({
      background: "url(img/bt5.svg)",
      backgroundSize: 'cover'
    })
    secopen = 0


  }
})
$('.close_btn').click(function () {
  window.location.href = 'about:blank ';
  window.opener = null;
  window.open('', '_self');
  window.close();
})
$('.backpage_btn').click(function () {
  history.back()
})




var houraddreducenow = 0
var minaddreducenow = 0
var secaddreducenow = 0

$('.ten_add').click(function () {
  // let now = addtime($(this))
  if ($(this).closest('.timeboxsize').data("hour")) {
    houraddreducenow = 1
  }
  if ($(this).closest('.timeboxsize').data("min")) {
    minaddreducenow = 1
  }
  if ($(this).closest('.timeboxsize').data("sec")) {
    secaddreducenow = 1
  }

  $(this).closest('.timeboxsize').data("value", addtime($(this), 10))
  settime()
})
$('.one_add').click(function () {
  if ($(this).closest('.timeboxsize').data("hour")) {
    houraddreducenow = 1
    console.log("thit")
  }
  if ($(this).closest('.timeboxsize').data("min")) {
    minaddreducenow = 1
  }
  if ($(this).closest('.timeboxsize').data("sec")) {
    secaddreducenow = 1
  }


  $(this).closest('.timeboxsize').data("value", addtime($(this), 1))
  settime()

})
$('.ten_reduce').click(function () {
  // let now = addtime($(this))
  if ($(this).closest('.timeboxsize').data("hour")) {
    houraddreducenow = 1
  }
  if ($(this).closest('.timeboxsize').data("min")) {
    minaddreducenow = 1
  }
  if ($(this).closest('.timeboxsize').data("sec")) {
    secaddreducenow = 1
  }

  $(this).closest('.timeboxsize').data("value", addtime($(this), -10))
  settime()
})
$('.one_reduce').click(function () {
  if ($(this).closest('.timeboxsize').data("hour")) {
    houraddreducenow = 1
  }
  if ($(this).closest('.timeboxsize').data("min")) {
    minaddreducenow = 1
  }
  if ($(this).closest('.timeboxsize').data("sec")) {
    secaddreducenow = 1
  }
  $(this).closest('.timeboxsize').data("value", addtime($(this), -1))

  settime()

})


function addtime(thisadd, num) {
  let input = thisadd.closest('.timeboxsize').data("value")
  input = parseInt(input)
  input = input + num
  console.log(input)
  if (input > 23 && houraddreducenow == 1) {
    input = input - 24
  }

  if (input > 59 && houraddreducenow == 0 && minaddreducenow == 1) {
    let hourvalue = $(".hour_box").data("value")
    hourvalue = parseInt(hourvalue) + 1
    if (hourvalue > 23) {
      hourvalue = hourvalue - 24
    }
    if (hourvalue < 10 && hourvalue >= 0) {
      hourvalue = "0" + hourvalue
    }
    $(".hour_box").data("value", hourvalue)
    input = input - 60
  }

  if (input > 59 && houraddreducenow == 0 && secaddreducenow == 1) {
    let minvalue = $(".min_box").data("value")
    minvalue = parseInt(minvalue) + 1
    if (minvalue > 59) {
      minvalue = minvalue - 60
    }
    if (minvalue < 10 && minvalue >= 0) {
      minvalue = "0" + minvalue
    }
    $(".min_box").data("value", minvalue)
    input = input - 60
  }

  if (input < 10 && input >= 0) {
    input = "0" + input
  }
  if (input < 0 && houraddreducenow == 0 && minaddreducenow == 1) {
    let hourvalue = $(".hour_box").data("value")
    hourvalue = parseInt(hourvalue) - 1
    if (hourvalue < 0) {
      hourvalue = hourvalue + 24
    }
    if (hourvalue < 10 && hourvalue >= 0) {
      hourvalue = "0" + hourvalue
    }
    $(".hour_box").data("value", hourvalue)
    input = 60 + input

  }
  if (input < 0 && houraddreducenow == 0 && secaddreducenow == 1) {
    let minvalue = $(".min_box").data("value")
    minvalue = parseInt(minvalue) - 1
    if (minvalue < 0) {
      minvalue = minvalue + 60
    }
    if (minvalue < 10 && minvalue >= 0) {
      minvalue = "0" + minvalue
    }
    $(".min_box").data("value", minvalue)
    input = 60 + input

  }
  if (input < 0 && houraddreducenow == 1) {
    input = 24 + input
  }
  houraddreducenow = 0
  minaddreducenow = 0
  secaddreducenow = 0

  return input
}



setInterval(function () {
  let hourvalue = $('.numberhour').closest('.timeboxsize').data("value")
  let minvalue = $('.numbermin').closest('.timeboxsize').data("value")
  let secvalue = $('.numbersec').closest('.timeboxsize').data("value")
  $('.numberhour').text(hourvalue)
  $('.numbermin').text(minvalue)
  $('.numbersec').text(secvalue)

}, 50)



function settime() {
  let hourvalue = $('.numberhour').closest('.timeboxsize').data("value")
  let minvalue = $('.numbermin').closest('.timeboxsize').data("value")
  let secvalue = $('.numbersec').closest('.timeboxsize').data("value")
  if (hourvalue > 12) {
    hourvalue = hourvalue - 12
  }
  var hourdeg = 360 / 12 * (hourvalue)
  var mindeg = 360 / 60 * minvalue
  var secdeg = 360 / 60 * secvalue

  var littlehourmove = 0.5 * minvalue

  console.log(hourdeg)
  $('.hourhand').css({
    transform: `rotate(${hourdeg + littlehourmove}deg)`
  })
  $('.minhand').css({
    transform: `rotate(${mindeg}deg)`
  })
  $('.sechand').css({
    transform: `rotate(${secdeg}deg)`
  })

}



const el_min = document.querySelector('.minhand');
const el_hour = document.querySelector('.hourhand');
const el_sec = document.querySelector('.sechand');

function rotate_hour(e) {

  let minvalue = $(".min_box").data("value")

  minvalue = parseInt(minvalue)

  const x = e.clientX - centerX;
  const y = e.clientY - centerY;

 
  var a = Math.atan2(y, x) * 180 / Math.PI;

  if (a >= -180 && a < 0) {
    var e = a % 30
    a = a - e
    a = a - 30
  }
  else {
    var e = a % 30
    a = a - e
  }

  // Rotate
  console.log(a)
  el_hour.style.transform = `rotate(${a + minvalue * 0.5 + 90}deg)`;

}
function rotate_min(e) {
  const x = e.clientX - centerX;
  const y = e.clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k
  console.log(a)
  // Rotate
  el_min.style.transform = `rotate(${a + 90}deg)`;
}





function rotate_second(e) {
  const x = e.clientX - centerX;
  const y = e.clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;

  // Rotate
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k
  console.log(a)
  el_sec.style.transform = `rotate(${a + 90}deg)`;
  let now = Math.floor(a) + 90


}

var orisec = 0
var orimin = 0
var orihour = 0

var newone = 0
checksec = setInterval(() => {
  let aa = el_sec.style.transform.slice(7, 25)
  let bb = el_min.style.transform.slice(7, 25)
  let cc = el_hour.style.transform.slice(7, 25)


  aa = parseInt(aa)
  bb = parseInt(bb)
  cc = parseInt(cc)

  if (aa < 0) {
    aa = 360 + aa
  }
  if (aa != orisec) {
    $('.drawareasec svg').empty()
  }
  if (orisec > aa) {
    let aa1 = aa + 360

    drawpathsec(orisec, aa1)
  } else {

    drawpathsec(orisec, aa)
  }


  if (bb < 0) {
    bb = 360 + bb
  }
  if (bb != orimin) {
    $('.drawareamin svg').empty()
  }
  if (orimin > bb) {
    let bb1 = bb + 360
    drawpathmin(orimin, bb1)
  } else {
    drawpathmin(orimin, bb)
  }



  if (cc < 0) {
    cc = 360 + cc
  }
  if (cc != orihour) {
    $('.drawareahour svg').empty()
  }
  if (orihour > cc) {
    let cc1 = cc + 360
    drawpathhour(orihour, cc1)
  } else {
    drawpathhour(orihour, cc)
  }

}, 20);
$(".minhand").mousedown(function () {

  document.addEventListener('mousemove', rotate_min);

})
$(".hourhand").mousedown(function () {

  document.addEventListener('mousemove', rotate_hour);


})
$(".sechand").mousedown(function () {
  document.addEventListener('mousemove', rotate_second);

})

$('html').mouseup(function () {
  document.removeEventListener('mousemove', rotate_hour);
  document.removeEventListener('mousemove', rotate_min);
  document.removeEventListener('mousemove', rotate_second);
  let aa = el_sec.style.transform.slice(7, 25)
  if (aa) {
    aa = parseInt(aa)
    if (aa < 0) {
      aa = 360 + aa
    }
    orisec = aa
    aa = Math.round(aa / 6)
    if (aa < 10) {
      aa = "0" + aa
    }
    $(".sec_box").data("value", aa)
  }



  let bb = el_min.style.transform.slice(7, 25)
  if (bb) {
    bb = parseInt(bb)
    if (bb < 0) {
      bb = 360 + bb
    }
    orimin = bb
    bb = Math.round(bb / 6)
    if (bb < 10) {
      bb = "0" + bb
    }
    $(".min_box").data("value", bb)
  }



  let cc = el_hour.style.transform.slice(7, 25)
  if (cc) {
    cc = parseInt(cc)
    if (cc < 0) {
      cc = 360 + cc
    }
    orihour = cc
    if (cc > 360) {
      cc = cc - 360
    }
    cc = Math.floor(cc / 30)
    if (cc < 10) {
      cc = "0" + cc
    }
    $(".hour_box").data("value", cc)
  }


})




// mobtargetTouches[""0""].clientX
function rotate_hour_moblie(e) {

  let minvalue = $(".min_box").data("value")

  minvalue = parseInt(minvalue)
  console.log(e)

  var x = e.touches[0].clientX - centerX;
  var y = e.touches[0].clientY - centerY;

 
  var a = Math.atan2(y, x) * 180 / Math.PI;

  if (a >= -180 && a < 0) {
    var e = a % 30
    a = a - e
    a = a - 30
  }
  else {
    var e = a % 30
    a = a - e
  }

  // Rotate
  console.log(a)
  el_hour.style.transform = `rotate(${a + minvalue * 0.5 + 90}deg)`;

}
function rotate_min_moblie(e) {
  const x = e.touches[0].clientX - centerX;
  const y = e.touches[0].clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k
  console.log(a)
  // Rotate
  el_min.style.transform = `rotate(${a + 90}deg)`;
}





function rotate_second_moblie(e) {
  const x = e.touches[0].clientX - centerX;
  const y = e.touches[0].clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;

  // Rotate
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k
  console.log(a)
  el_sec.style.transform = `rotate(${a + 90}deg)`;
  let now = Math.floor(a) + 90


}

$('.hourhand').on('touchstart', function () {
  document.addEventListener('touchmove', rotate_hour_moblie);


});
$('.minhand').on('touchstart', function () {
  document.addEventListener('touchmove', rotate_min_moblie);


});
$('.sechand').on('touchstart', function () {
  document.addEventListener('touchmove', rotate_second_moblie);


});



$('html').on('touchend',function(){
  document.removeEventListener('touchmove', rotate_hour_moblie);
  document.removeEventListener('touchmove', rotate_min_moblie);
  document.removeEventListener('touchmove',rotate_second_moblie);
  let aa = el_sec.style.transform.slice(7, 25)
  if (aa) {
    aa = parseInt(aa)
    if (aa < 0) {
      aa = 360 + aa
    }
    orisec = aa
    aa = Math.round(aa / 6)
    if (aa < 10) {
      aa = "0" + aa
    }
    $(".sec_box").data("value", aa)
  }



  let bb = el_min.style.transform.slice(7, 25)
  if (bb) {
    bb = parseInt(bb)
    if (bb < 0) {
      bb = 360 + bb
    }
    orimin = bb
    bb = Math.round(bb / 6)
    if (bb < 10) {
      bb = "0" + bb
    }
    $(".min_box").data("value", bb)
  }



  let cc = el_hour.style.transform.slice(7, 25)
  if (cc) {
    cc = parseInt(cc)
    if (cc < 0) {
      cc = 360 + cc
    }
    orihour = cc
    if (cc > 360) {
      cc = cc - 360
    }
    cc = Math.floor(cc / 30)
    if (cc < 10) {
      cc = "0" + cc
    }
    $(".hour_box").data("value", cc)
  }

})



















var sRSS

var w = 1920, h = 900;
var iw = $(window).innerWidth(), ih = $(window).innerHeight();
var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
sRatio = Math.min(xRatio, yRatio);
sRSS = sRatio
var a = Math.round(716 * sRSS)
var b = Math.round(711 * sRSS)


var vis = d3.select('.drawareasec').append('svg')
  .attr("width", a)
  .attr("height", b);
var pi = Math.PI;

var vim = d3.select('.drawareamin').append('svg')
  .attr("width", a)
  .attr("height", b);

var vih = d3.select('.drawareahour').append('svg')
  .attr("width", a)
  .attr("height", b);


function drawpathsec(start, end) {

  var arc = d3.svg.arc()
    .innerRadius(260 * sRSS)
    .outerRadius(330 * sRSS)
    .startAngle(start * (pi / 180)) //converting from degs to radians
    .endAngle(end * (pi / 180)) //just radians

  vis.append("path")
    .style("fill", '#84E071')
    .attr("d", arc)
    .attr("transform", `translate(${a / 2},${b / 2})`)
}




function drawpathmin(start, end) {

  var arc = d3.svg.arc()
    .innerRadius(200 * sRSS)
    .outerRadius(260 * sRSS)
    .startAngle(start * (pi / 180)) //converting from degs to radians
    .endAngle(end * (pi / 180)) //just radians

  vim.append("path")
    .style("fill", '#58D0F3')
    .attr("d", arc)
    .attr("transform", `translate(${a / 2},${b / 2})`)
}


function drawpathhour(start, end) {

  var arc = d3.svg.arc()
    .innerRadius(140 * sRSS)
    .outerRadius(200 * sRSS)
    .startAngle(start * (pi / 180)) //converting from degs to radians
    .endAngle(end * (pi / 180)) //just radians

  vih.append("path")
    .style("fill", '#FD9699')
    .attr("d", arc)
    .attr("transform", `translate(${a / 2},${b / 2})`)
}














