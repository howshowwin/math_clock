const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


var hours = 0;
var minutes = 0;
var seconds = 0;

$(".hour_ten_add").click(function () {

    if (hours < 14) {
        hours += 10
    }
    else {
        hours = Math.abs(hours + 10) - 24

    }
    clock();
})
$(".hour_add").click(function () {

    if (hours <= 22) {
        hours += 1

    } else {
        hours = 0

    }
    clock();
})

$(".min_ten_add").click(function () {

    if (minutes <= 49) {
        minutes += 10

    } else {
        if (hours == 23) {
            hours = 0
        } else {
            hours = hours + 1
        }
        minutes = Math.abs(10 - Math.abs(60 - minutes))
    }
    clock();
})


$(".min_add").click(function () {

    if (minutes <= 58) {
        minutes += 1
    } else {
        if (hours == 23) {
            hours = 0
        } else {
            hours = hours + 1

        }
        minutes = 0
    }
    clock();
})

$(".second_add").click(function () {

    if (seconds <= 58) {
        seconds += 1
    } else {
        if (minutes == 59) {
            minutes = 0
            if (hours == 23) {
                hours = 0
                minutes = minutes - 1

            } else {
                hours = hours + 1
                minutes = minutes - 1
            }
        }
        minutes = minutes + 1
        seconds = 0
    }
    clock();
})

$(".second_ten_add").click(function () {

    if (seconds <= 49) {
        seconds += 10
    } else {
        if (minutes == 59) {
            minutes = 0
            if (hours == 23) {
                hours = 0
                minutes = minutes - 1

            } else {
                hours = hours + 1
                minutes = minutes - 1

            }
        }
        minutes = minutes + 1

        seconds = Math.abs(-10 + Math.abs(60 - seconds))
    }
    clock();
})

$(".hour_ten_cut").click(function () {

    if (hours < 24) {
        if (hours == 0 || hours < 10) {
            hours = 24 - Math.abs(hours - 10)
        }
        else {
            hours = Math.abs(hours -= 10)
        }


    }


    else {
        hours = 0
    }
    clock();
})
$(".hour_cut").click(function () {

    if (hours <= 24) {
        if (hours == 0) {
            hours = 23
        }
        else {
            hours = Math.abs(hours -= 1)
        }

    } else {
        hours = 0
    }
    clock();
})

$(".min_ten_cut").click(function () {

    if (minutes <= 59) {
        if (0 == minutes || minutes < 10) {
            if (hours == 0) {
                hours = 23
            } else {
                hours = hours - 1

            }
            minutes = 60 - Math.abs(minutes - 10)
        }
        else {
            minutes -= 10
        }

    } else {
    }
    clock();
})


$(".min_cut").click(function () {

    if (minutes <= 59) {

        if (0 == minutes) {
            minutes = 59

            if (hours == 0) {
                hours = 23
            } else {
                hours = hours - 1

            }
        }
        else {
            minutes -= 1
        }


    } else {
        minutes = 0
    }
    clock();
})

$(".second_cut").click(function () {

    if (seconds <= 59) {
        if (seconds == 0) {
            if (minutes == 0) {
                minutes = 59
                if (hours == 0) {
                    hours = 23
                } else {
                    hours = hours - 1

                }
            } else {
                minutes = minutes - 1
            }
            seconds = 59
        }
        else {
            seconds -= 1
        }

    } else {
        seconds = 0
    }
    clock();
})

$(".second_ten_cut").click(function () {

    if (seconds <= 59) {
        if (seconds == 0 || seconds < 10) {

            if (minutes == 0) {
                minutes = 59
                if (hours == 0) {
                    hours = 23
                } else {
                    hours = hours - 1

                }
            } else {
                minutes = minutes - 1
            }
            seconds = 60 - Math.abs(seconds - 10)
        }
        else {
            seconds -= 10
        }
    } else {
        seconds -= 10
    }
    clock();
})









clock();

function clock() {


    if ($('.h').text() != ((hours < 10 ? "0" : "") + hours)) {
        $('.h').text((hours < 10 ? "0" : "") + hours);
        shake($('.h'));
    }

    if ($('.m').text() != ((minutes < 10 ? "0" : "") + minutes)) {
        $('.m').text((minutes < 10 ? "0" : "") + minutes);
        shake($('.m'));
    }

    if ($('.s').text() != ((seconds < 10 ? "0" : "") + seconds)) {
        $('.s').text((seconds < 10 ? "0" : "") + seconds);
        shake($('.s'));
    }


    $(".hour-hand").css("transform", `rotate(${(90 + (hours * 30)) + (minutes * 0.5)}deg)`);
    $(".min-hand").css("transform", `rotate(${(90 + (minutes * 6))}deg)`);
    $(".second-hand").css("transform", `rotate(${(90 + (seconds * 6))}deg)`);



}

clock();
var first_X = 0
var first_Y = 0
var move_X = 0
var move_Y = 0

const el_hour = document.querySelector('.hour-hand');
const el_min = document.querySelector('.min-hand');
const el_second = document.querySelector('.second-hand');


// Centers
let centerX = 0;
let centerY = 0;

// Events
window.addEventListener('load', resize);
window.addEventListener('resize', resize);

function rotate_hour(e) {
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    // Calculate angle based on mouse position
    const a = Math.atan2(y, x) * 180 / Math.PI;

    // Rotate
    el_hour.style.transform = `rotate(${Math.floor(a) + 180}deg)`;
}
function rotate_min(e) {
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    // Calculate angle based on mouse position
    const a = Math.atan2(y, x) * 180 / Math.PI;

    // Rotate
    el_min.style.transform = `rotate(${Math.floor(a) + 180}deg)`;
}
function rotate_second(e) {
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    // Calculate angle based on mouse position
    const a = Math.atan2(y, x) * 180 / Math.PI;

    // Rotate
    el_second.style.transform = `rotate(${Math.floor(a) + 180}deg)`;

}
// Rotation on move

var sector_first = 0
var min_sector_first = 0
var hour_sector_first = 0

$(".hour-hand").mousedown(function () {

    document.addEventListener('mousemove', rotate_hour);

    hour_sector_first = hourHand.style.transform

    hour_sector_first = hour_sector_first.replace("rotate(", "")
    hour_sector_first = parseInt(hour_sector_first) - 90

})
$(".min-hand").mousedown(function () {

    document.addEventListener('mousemove', rotate_min);

    min_sector_first = minsHand.style.transform
    min_sector_first = min_sector_first.replace(/[^0-9]/ig, "")
    min_sector_first = min_sector_first - 90



})
$(".second-hand").mousedown(function () {

    document.addEventListener('mousemove', rotate_second);
    sector_first = secondHand.style.transform
    sector_first = sector_first.replace(/[^0-9]/ig, "")
    sector_first = sector_first - 90
})

$(".outer-clock-face").mouseup(function () {

    document.removeEventListener('mousemove', rotate_hour);
    document.removeEventListener('mousemove', rotate_min);
    document.removeEventListener('mousemove', rotate_second);
    renewClock_sec()
    renewClock_min()
    renewClock_hour()
    clock()

    var sector_hour = hourHand.style.transform
    sector_hour = sector_hour.replace("rotate(", "")
    sector_hour = parseInt(sector_hour) - 90




    var sector_min = minsHand.style.transform
    sector_min = sector_min.replace(/[^0-9]/ig, "")
    sector_min = sector_min - 90



    var sector_second = secondHand.style.transform

    sector_second = sector_second.replace(/[^0-9]/ig, "")
    sector_second = sector_second - 90

    console.log(hour_sector_first)
    console.log(sector_hour)




    var cvs = document.getElementById('cvs');
    var ctx = cvs.getContext('2d');



    // 把角度轉換為弧度
    function angleToRadian(angle) {
        return Math.PI / 180 * angle;
    }


    /*
    * 畫扇形：
    * 1、先設定路徑起點為圓心
    * 2、畫弧
    * 3、閉合路徑
    * */
    ctx.fillRect(0, 0, 400, 400);


    ctx.clearRect(0, 0, cvs.width, cvs.height);  //清除畫布
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 90, angleToRadian(sector_first - 90), angleToRadian(sector_second - 90));
    ctx.fillStyle = "#FBB917";
    ctx.fill();
    ctx.closePath();









    var cvs_2 = document.getElementById('cvs_2');
    var ctx_2 = cvs_2.getContext('2d');



    // 把角度轉換為弧度
    function angleToRadian(angle) {
        return Math.PI / 180 * angle;
    }


    /*
    * 畫扇形：
    * 1、先設定路徑起點為圓心
    * 2、畫弧
    * 3、閉合路徑
    * */
    // ctx.fillRect(0, 0, 400, 400);


    // ctx.clearRect(0, 0, cvs.width, cvs.height);  //清除畫布
    // ctx.beginPath();
    // ctx.moveTo(200, 200);
    // ctx.arc(200, 200, 70, angleToRadian(min_sector_first - 90), angleToRadian(sector_min - 90));
    // ctx.fillStyle = "rgba(225, 155, 200)";
    // ctx.fill();
    // ctx.closePath();

    ctx_2.fillRect(0, 0, 400, 400);


    ctx_2.clearRect(0, 0, cvs_2.width, cvs_2.height);  //清除畫布
    ctx_2.beginPath();
    ctx_2.moveTo(200, 200);
    ctx_2.arc(200, 200, 70, angleToRadian(min_sector_first - 90), angleToRadian(sector_min - 90));
    ctx_2.fillStyle = "rgba(225, 155, 200)";
    ctx_2.fill();
    ctx_2.closePath();






    var cvs_3 = document.getElementById('cvs_3');
    var ctx_3 = cvs_3.getContext('2d');



    // 把角度轉換為弧度
    function angleToRadian(angle) {
        return Math.PI / 180 * angle;
    }


    /*
    * 畫扇形：
    * 1、先設定路徑起點為圓心
    * 2、畫弧
    * 3、閉合路徑
    * */
    ctx_3.fillRect(0, 0, 400, 400);


    ctx_3.clearRect(0, 0, cvs_3.width, cvs_3.height);  //清除畫布
    ctx_3.beginPath();
    ctx_3.moveTo(200, 200);
    ctx_3.arc(200, 200, 50, angleToRadian(hour_sector_first - 90), angleToRadian(sector_hour - 90));
    ctx_3.fillStyle = "#4552ee";
    ctx_3.fill();
    ctx_3.closePath();




















})




$(".hour_close").click(function () {
    if ($(this).text() == "關閉時針") {
        $(this).text("開啟時針");
        $('.hour-hand').addClass("display_none")
    } else {
        $(this).text("關閉時針");
        $('.hour-hand').removeClass("display_none")

    }
})


$(".mins_close").click(function () {
    if ($(this).text() == "關閉分針") {
        $(this).text("開啟分針");
        $('.min-hand').addClass("display_none")
    } else {
        $(this).text("關閉分針");
        $('.min-hand').removeClass("display_none")

    }
})

$(".second_close").click(function () {
    if ($(this).text() == "關閉秒針") {
        $(this).text("開啟秒針");
        $('.second-hand').addClass("display_none")
    } else {
        $(this).text("關閉秒針");
        $('.second-hand').removeClass("display_none")

    }
})

$(".track_close").click(function () {
    if ($(this).text() == "開啟軌跡") {
        $(this).text("關閉軌跡");
        $("canvas").removeClass("display_none")
    } else {
        $(this).text("開啟軌跡");
        $("canvas").addClass("display_none")

    }
})
$(".eleClock_close").click(function () {
    if ($(this).text() == "開啟電子時鐘") {
        $(this).text("關閉電子時鐘");
        $(".eleClock").removeClass("display_none")
    } else {
        $(this).text("開啟電子時鐘");
        $(".eleClock").addClass("display_none")

    }
})

$('.reset').click(function () {
    window.location.reload()
})
function renewClock_sec() {
    var val_second = secondHand.style.transform

    val_second = val_second.replace(/[^0-9]/ig, "")
    seconds_val = val_second / 360
    if (seconds_val < 0.25 && seconds_val >= 0) {

        seconds = Math.floor(seconds_val * 60 + 45);
        console.log(typeof (seconds))

    } else {

        seconds = Math.floor(seconds_val * 60 - 15)
        console.log(typeof (seconds))
    }

}
function renewClock_min() {
    var val_min = minsHand.style.transform

    val_min = val_min.replace(/[^0-9]/ig, "")
    mins_val = val_min / 360
    if (mins_val < 0.25 && mins_val >= 0) {
        minutes = Math.floor(mins_val * 60 + 45)
    } else {
        minutes = Math.floor(mins_val * 60 - 15)
    }

}
function renewClock_hour() {
    var val_hour = hourHand.style.transform
    val_hour = val_hour.replace("rotate(", "")
    val_hour = parseInt(val_hour)
    hour_val = val_hour / 360
    if (hour_val < 0.25 && hour_val >= 0) {
        console.log(hour_val)
        hours = Math.floor(hour_val * 12 + 9)
    } else if (hour_val > 1) {

    } else {
        console.log(hour_val)

        hours = Math.floor(hour_val * 12 - 3)
    }

}
// Resize
function resize() {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
}













function shake(t) {
    t.addClass('shake-constant');
    setTimeout(function () {
        t.removeClass('shake-constant');
    }, 470)
}





