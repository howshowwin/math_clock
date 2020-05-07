var eleclockopen = 0
var kisakiopen = 0
var houropen = 1
var minopen = 1
var secopen = 0
$('.num_clock_btn').click(function () {
  if (eleclockopen == 0) {
    $('.time_box').removeClass('display_none')
    $('.whitebox').removeClass('display_none')
    $('.whitebox').removeClass('display_none_another')
    $(".time_box_frame").css({ width: Math.round(364 * sRSS) })

    if (secopen == 1) {
      $(".time_box_frame").css({ width: Math.round(604 * sRSS) })
      $('.whitebox').addClass('display_none')
      $('.sec_box').removeClass('display_none')

    }

    $('.num_clock_btn').css({
      background: "url(img/bt1-1.png)",
      backgroundSize: 'cover'
    })
    eleclockopen = 1

  }
  else if (eleclockopen == 1) {
    $('.time_box').addClass('display_none')

    $(".time_box_frame").css({ width: Math.round(364 * sRSS) })
    $('.whitebox').addClass('display_none')

    $('.whitebox').addClass('display_none_another')


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
      background: "url(img/bt2-1.png)",
      backgroundSize: 'cover',

    })
    kisakiopen = 1

    $('.sec_btn').css({
      background: "url(img/bt5-2.png)",
      backgroundSize: 'cover',
      pointerEvents: "none"


    })
    $('.drawareasec svg').addClass('display_none')
    $('.sechand').addClass('display_none')
    $('.sec_box').addClass('display_none')
    $('.whitebox').removeClass('display_none')
    $(".time_box_frame").css({ width: Math.round(364 * sRSS) })
    secopen = 0

  }
  else if (kisakiopen == 1) {
    $('.bnn').addClass('display_none')

    $('.kiseki_btn').css({
      background: "url(img/bt2.svg)",
      backgroundSize: 'cover',
    })
    kisakiopen = 0


    $('.sec_btn').css({
      background: "url(img/bt5.png)",
      backgroundSize: 'cover',
      pointerEvents: "all"
    })

  }
})



$('.hour_btn').click(function () {
  if (houropen == 1) {
    $('.hourhand').addClass('display_none')
    $('.drawareahour svg').addClass('display_none')

    $('.hour_btn').css({
      background: "url(img/bt3.svg)",
      backgroundSize: 'cover'
    })
    houropen = 0

  }
  else if (houropen == 0) {
    $('.hourhand').removeClass('display_none')
    $('.drawareahour svg').removeClass('display_none')
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
    $('.drawareamin svg').addClass('display_none')
    $('.min_btn').css({
      background: "url(img/bt4.svg)",
      backgroundSize: 'cover'
    })
    minopen = 0

  }
  else if (minopen == 0) {
    $('.minhand').removeClass('display_none')
    $('.drawareamin svg').removeClass('display_none')
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
    $('.drawareasec svg').removeClass('display_none')
    $('.sec_box').removeClass('display_none')
    $('.whitebox').addClass('display_none')
    $(".time_box_frame").css({ width: Math.round(604 * sRSS) })

    $('.sec_btn').css({
      background: "url(img/bt5-1.svg)",
      backgroundSize: 'cover'
    })
    secopen = 1
  }
  else if (secopen == 1) {
    $('.drawareasec svg').addClass('display_none')
    $('.sechand').addClass('display_none')
    $('.sec_box').addClass('display_none')
    $('.whitebox').removeClass('display_none')
    $(".time_box_frame").css({ width: Math.round(364 * sRSS) })
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
  location.reload()
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
  settimegogo()
})
$('.one_add').click(function () {
  if ($(this).closest('.timeboxsize').data("hour")) {
    houraddreducenow = 1
  }
  if ($(this).closest('.timeboxsize').data("min")) {
    minaddreducenow = 1
  }
  if ($(this).closest('.timeboxsize').data("sec")) {
    secaddreducenow = 1
  }


  $(this).closest('.timeboxsize').data("value", addtime($(this), 1))
  settime()
  settimegogo()

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
  settimegogo()

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
  settimegogo()

})


function addtime(thisadd, num) {
  let input = thisadd.closest('.timeboxsize').data("value")
  input = parseInt(input)
  input = input + num
  if (input > 12 && houraddreducenow == 1) {
    input = input - 12
  }

  if (input > 59 && houraddreducenow == 0 && minaddreducenow == 1) {
    let hourvalue = $(".hour_box").data("value")
    hourvalue = parseInt(hourvalue) + 1
    if (hourvalue > 12) {
      hourvalue = hourvalue - 12

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
      let hourvalue = $(".hour_box").data("value")
      hourvalue = parseInt(hourvalue) + 1
      if (hourvalue > 12) {
        hourvalue = hourvalue - 12
      }
      if (hourvalue < 10 && hourvalue >= 0) {
        hourvalue = "0" + hourvalue
      }
      $(".hour_box").data("value", hourvalue)
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
      hourvalue = hourvalue + 12
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
      let hourvalue = $(".hour_box").data("value")
      hourvalue = parseInt(hourvalue) - 1
      if (hourvalue < 0) {
        hourvalue = hourvalue + 12
      }
      if (hourvalue < 10 && hourvalue >= 0) {
        hourvalue = "0" + hourvalue
      }
      $(".hour_box").data("value", hourvalue)

    }
    if (minvalue < 10 && minvalue >= 0) {
      minvalue = "0" + minvalue
    }

    $(".min_box").data("value", minvalue)
    input = 60 + input

  }
  if (input < 0 && houraddreducenow == 1 ) {
    input = 12 + input

    input = "0" + input

  }
  if (input == '00' && houraddreducenow == 1 ) {
    input = '12'

  }
  if (input == '011' && houraddreducenow == 1 ) {
    input = '11'

  }
  if (input == '010' && houraddreducenow == 1 ) {
    input = '10'

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



  el_hour.style.transform = `rotate(${Math.floor(a + 90)}deg)`;

  el_min.style.transform = `rotate(${Math.floor((a) * 12)}deg)`;





  let cc = el_hour.style.transform.slice(7, 25)


  cc = parseInt(cc)


  let bb = el_min.style.transform.slice(7, 25)


  bb = parseInt(bb)
  bb = bb % 360


  if (cc < 0) {
    cc = 360 + cc
  }
  if (cc != orihour) {
    $('.drawareahour svg').empty()
  }
  if (orihour >= cc) {
    let cc1 = cc + 360
    drawpathhour(orihour, cc1)
  } else {
    drawpathhour(orihour, cc)
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











}

var setmin = 0
var readold = 0
var circleall = 0
function rotate_min(e) {
  const x = e.clientX - centerX;
  const y = e.clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k + 180
  // console.log(last_set,readold,a)


  // Rotate
  el_min.style.transform = `rotate(${a - 90}deg)`;



  let bb = el_min.style.transform.slice(7, 25)





  bb = parseInt(bb)
  if (bb < 0) {
    bb = bb + 360
  }

  if (bb != orimin) {
    $('.drawareamin svg').empty()
  }

  if (orimin > bb) {
    console.log(orimin)
    bb = bb + 360
  }
  if (last_set == a && readold != a && (a - readold) > 0) {
    m_cc = m_cc + 30
    drawpathmin(0, 360)
    circleall = 1
  }

  el_hour.style.transform = `rotate(${m_cc + (bb) / 12}deg)`;
  if (circleall == 1) {
    drawpathmin(0, 360)

  } else {
    drawpathmin(orimin, bb)

  }

  




  let cc = el_hour.style.transform.slice(7, 25)
  cc = parseInt(cc)

  if (cc <= 0) {
    cc = cc
  }
  if (orihour >= 360) {
    orihour = orihour - 360
  }
  if (cc != orihour) {
    $('.drawareahour svg').empty()
  }
  if (orihour >= cc) {
    // let cc1 = cc + 360
    drawpathhour(orihour, cc)
  } else {
    drawpathhour(orihour, cc)
  }
  readold = a
}







function rotate_second(e) {
  const x = e.clientX - centerX;
  const y = e.clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;

  // Rotate
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k
  el_sec.style.transform = `rotate(${a + 90}deg)`;
  let now = Math.floor(a) + 90
  let aa = el_sec.style.transform.slice(7, 25)



  aa = parseInt(aa)


  if (aa < 0) {
    aa = 360 + aa
  }
  if (aa != orisec) {
    $('.drawareasec svg').empty()
  }
  if (orisec >= aa) {
    let aa1 = aa + 360
    drawpathsec(orisec, aa1)
  } else {

    drawpathsec(orisec, aa)
  }




}

var orisec = 0
var orimin = 0
var orihour = 0

var newone = 0
function settimegogo() {
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
}
var m_cc
var h_cc

var last_set = ''
$(".minhand").mousedown(function (e) {
  m_cc = $(".hour_box").data("value")
  if (m_cc == 12) {
    m_cc = 0
  }
  m_cc = 30 * m_cc
  if (m_cc == '') {
    m_cc = 0
  }
  m_cc = parseInt(m_cc)



  const x = e.clientX - centerX;
  const y = e.clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k + 180

  last_set = a
  readold = a
  circleall = 0
  document.addEventListener('mousemove', rotate_min);

})
$(".hourhand").mousedown(function () {
  h_cc = $(".min_box").data("value")

  h_cc = 6 * h_cc
  if (h_cc == '') {
    h_cc = 0
  }
  h_cc = parseInt(h_cc)

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
    bb = bb % 360

    if (bb < 0) {
      bb = 360 + bb
    }
    orimin = bb
    bb = Math.round(bb / 6)
    if (bb == 60) {
      bb = 0
    }
    if (bb < 10) {
      bb = "0" + bb
    }

    $(".min_box").data("value", bb)

  }



  let cc = el_hour.style.transform.slice(7, 25)
  if (cc) {
    cc = parseInt(cc)
    cc = cc%360
    if (cc < 0) {
      cc = 360 + cc
    }
    orihour = cc
    if (cc > 360) {
      cc = cc - 360
    }
    cc = Math.floor(cc / 30)
    if (cc == 0) {
      cc = 12
    }
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

  var x = e.touches[0].clientX - centerX;
  var y = e.touches[0].clientY - centerY;


  var a = Math.atan2(y, x) * 180 / Math.PI;



  el_hour.style.transform = `rotate(${Math.floor(a + 90)}deg)`;

  el_min.style.transform = `rotate(${Math.floor((a) * 12)}deg)`;





  let cc = el_hour.style.transform.slice(7, 25)


  cc = parseInt(cc)


  let bb = el_min.style.transform.slice(7, 25)


  bb = parseInt(bb)
  bb = bb % 360


  if (cc < 0) {
    cc = 360 + cc
  }
  if (cc != orihour) {
    $('.drawareahour svg').empty()
  }
  if (orihour >= cc) {
    let cc1 = cc + 360
    drawpathhour(orihour, cc1)
  } else {
    drawpathhour(orihour, cc)
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


}

var readold_M = 0
var circleall_M = 0



function rotate_min_moblie(e) {
  const x = e.touches[0].clientX - centerX;
  const y = e.touches[0].clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k+ 180
  // Rotate

  el_min.style.transform = `rotate(${a - 90}deg)`;



  let bb = el_min.style.transform.slice(7, 25)






  bb = parseInt(bb)
  if (bb < 0) {
    bb = bb + 360
  }

  if (bb != orimin) {
    $('.drawareamin svg').empty()
  }


  if (orimin > bb) {
    console.log(orimin)
    bb = bb + 360
  }
  if (last_set_M == a && readold_M != a && (a - readold_M) > 0) {
    m_cc = m_cc + 30
    drawpathmin(0, 360)
    circleall_M = 1
  }
  // if (last_set == a && readold != a && (a - readold) < 0) {
  //   m_cc = m_cc - 30

  //   console.log(m_cc)
  // }
  el_hour.style.transform = `rotate(${m_cc + (bb) / 12}deg)`;
  if (circleall_M == 1) {
    drawpathmin(0, 360)

  } else {
    drawpathmin(orimin, bb)

  }




  let cc = el_hour.style.transform.slice(7, 25)
  cc = parseInt(cc)

  if (cc <= 0) {
    cc = cc
  }
  if (orihour >= 360) {
    orihour = orihour - 360
  }
  if (cc != orihour) {
    $('.drawareahour svg').empty()
  }
  if (orihour >= cc) {
    // let cc1 = cc + 360
    drawpathhour(orihour, cc)
  } else {
    drawpathhour(orihour, cc)
  }
  readold_M = a
}





function rotate_second_moblie(e) {
  const x = e.touches[0].clientX - centerX;
  const y = e.touches[0].clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;

  // Rotate
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k
  el_sec.style.transform = `rotate(${a + 90}deg)`;
  let now = Math.floor(a) + 90



  let aa = el_sec.style.transform.slice(7, 25)



  aa = parseInt(aa)


  if (aa < 0) {
    aa = 360 + aa
  }
  if (aa != orisec) {
    $('.drawareasec svg').empty()
  }
  if (orisec >= aa) {
    let aa1 = aa + 360
    drawpathsec(orisec, aa1)
  } else {

    drawpathsec(orisec, aa)
  }


}
var last_set_M = ''
$('.hourhand').on('touchstart', function () {
  h_cc = $(".min_box").data("value")

  h_cc = 6 * h_cc
  if (h_cc == '') {
    h_cc = 0
  }
  h_cc = parseInt(h_cc)

  document.addEventListener('touchmove', rotate_hour_moblie);


});
$('.minhand').on('touchstart', function (e) {
  m_cc = $(".hour_box").data("value")
  if (m_cc == 12) {
    m_cc = 0
  }
  m_cc = 30 * m_cc
  if (m_cc == '') {
    m_cc = 0
  }
  m_cc = parseInt(m_cc)
  

  const x = e.touches[0].clientX - centerX;
  const y = e.touches[0].clientY - centerY;

  // Calculate angle based on mouse position
  var a = Math.atan2(y, x) * 180 / Math.PI;
  var k = Math.floor(a) % 6
  a = Math.floor(a) - k + 180
  last_set_M = a
  readold_M = a
  circleall_M = 0
  document.addEventListener('touchmove', rotate_min_moblie);


});
$('.sechand').on('touchstart', function () {
  document.addEventListener('touchmove', rotate_second_moblie);


});



$('html').on('touchend', function () {
  document.removeEventListener('touchmove', rotate_hour_moblie);
  document.removeEventListener('touchmove', rotate_min_moblie);
  document.removeEventListener('touchmove', rotate_second_moblie);
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
    bb = bb % 360

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
    if (cc == 0) {
      cc = 12
    }
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








$('.howtouse').click(function () {
  $('.mask').removeClass("display_none")
  $('.info-page').css({
    background: `url(setpic/${set_pic_info[picnowdisplay]})`,
    backgroundSize: "cover"
  })


})


$('.btn_close_inset').click(function () {
  $('.mask').addClass("display_none")

})


$('.info-page').css({
  background: `url(setpic/${set_pic_info[0]})`,
  backgroundSize: "cover"
})
console.log(set_pic_info.length)
// if (set_pic_info.length == 1) {
//   $('.info-btn-right').addClass('display_none')
// }
if (set_pic_info.length > 1) {
  $('.info-btn-right').removeClass('display_none')
}
var picnowdisplay = 0
var picenddisplay = set_pic_info.length - 1
$('.info-btn-right').click(function () {
  picnowdisplay++
  $('.info-page').css({
    background: `url(setpic/${set_pic_info[picnowdisplay]})`,
    backgroundSize: "cover"
  })
  if (picnowdisplay == picenddisplay) {
    $('.info-btn-right').addClass('display_none')
  }
  if (picnowdisplay != 0) {
    $('.info-btn-left').removeClass('display_none')
  }
})
$('.info-btn-left').click(function () {
  picnowdisplay--
  $('.info-page').css({
    background: `url(setpic/${set_pic_info[picnowdisplay]})`,
    backgroundSize: "cover"
  })
  if (picnowdisplay == 0) {
    $('.info-btn-left').addClass('display_none')
  }
  if (picnowdisplay != picenddisplay) {
    $('.info-btn-right').removeClass('display_none')
  }

})


