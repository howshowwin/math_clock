$(function () {
    $(window).resize(objSizeReset);
    objSizeReset();
    function objSizeReset() {
        convertSizeALL('.outside-frame');

    }



    $(window).on('load', function () {
        objSizeReset();
    });


});


document.body.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });
var sRSS

var centerX = 1083
var centerY = 432


var dpsStart
var dpsEnd
var dpmStart
var dpmEnd
var dphStart
var dphEnd


function convertSizeALL(className) {


    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    sRSS = sRatio
    $('.background-img').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background1").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".time_box").css({ width: Math.round(554 * sRatio), height: Math.round(214 * sRatio), borderRadius: Math.round(15 * sRatio) });
    $(".time_box_frame").css({ width: Math.round(604 * sRatio), height: Math.round(350 * sRatio), borderRadius: Math.round(15 * sRatio) });
    $('.whitebox').css({ width: Math.round(20 * sRatio), height: Math.round(214 * sRatio), borderRadius:`0 ${Math.round(15 * sRatio)}px ${Math.round(15 * sRatio)}px 0 `});
    $('.timeboxsize').css({ width: Math.round(150 * sRatio), height: Math.round(169 * sRatio), borderRadius: Math.round(15 * sRatio), fontSize: Math.round(123 * sRatio), paddingLeft: Math.round(10 * sRatio) });
    $('.addL').css({ width: Math.round(60 * sRatio), height: Math.round(29 * sRatio), borderRadius: `${Math.round(15 * sRatio)}px 0 0 0`, fontSize: Math.round(30 * sRatio), paddingLeft: Math.round(10 * sRatio), lineHeight: `${Math.round(22 * sRatio)}px` });
    $('.addR').css({ width: Math.round(48 * sRatio), height: Math.round(29 * sRatio), borderRadius: `0 ${Math.round(15 * sRatio)}px 0 0`, fontSize: Math.round(30 * sRatio), paddingLeft: `${Math.round(22 * sRatio)}px`, lineHeight: `${Math.round(22 * sRatio)}px` });
    $('.reduceL').css({ width: Math.round(60 * sRatio), height: Math.round(29 * sRatio), borderRadius: ` 0 0 0 ${Math.round(15 * sRatio)}px`, fontSize: Math.round(30 * sRatio), paddingLeft: Math.round(10 * sRatio), lineHeight: `${Math.round(22 * sRatio)}px` });
    $('.reduceR').css({ width: Math.round(44 * sRatio), height: Math.round(29 * sRatio), borderRadius: `0 0 ${Math.round(15 * sRatio)}px 0`, fontSize: Math.round(30 * sRatio), paddingLeft: `${Math.round(26 * sRatio)}px`, lineHeight: `${Math.round(22 * sRatio)}px` });
    $('.num_clock_btn,.kiseki_btn').css({ width: Math.round(348 * sRatio), height: Math.round(145 * sRatio) })
    $('.hour_btn,.min_btn,.sec_btn').css({ width: Math.round(166 * sRatio), height: Math.round(166 * sRatio) });
    $('.backpage_btn,.close_btn,.howtouse').css({ width: Math.round(119 * sRatio), height: Math.round(119 * sRatio) });
    $('.clock,.line').css({ width: Math.round(716 * sRatio), height: Math.round(711 * sRatio) });
    $('.sechand').css({ width: Math.round(38 * sRatio), height: Math.round(409 * sRatio) });
    $('.minhand').css({ width: Math.round(44 * sRatio), height: Math.round(263 * sRatio) });
    $('.hourhand').css({ width: Math.round(95 * sRatio), height: Math.round(211 * sRatio) });
    $('.dot').css({ width: Math.round(46 * sRatio), height: Math.round(46 * sRatio) });
    $('.drawareasec,.drawareamin,.drawareahour').css({ width: Math.round(716 * sRatio), height: Math.round(711 * sRatio) });
    $('.shadow').css({ width: Math.round(752 * sRatio), height: Math.round(752 * sRatio) });
    $('.mask').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $('.info').css({ width: Math.round(673*1.6  * sRatio), height: Math.round(456 *1.6* sRatio) });
    $('.info-page').css({ width: Math.round(1039  * sRatio), height: Math.round(687.6* sRatio),borderRadius: Math.round(15 * sRatio) });
    $('.info-btn-left,.info-btn-right').css({ width: Math.round(35 * sRatio), height: Math.round(35 * sRatio) });

    $('.btn_close_inset').css({ width: Math.round(53 * sRatio), height: Math.round(53 * sRatio) });
    centerX = $('.dot').offset().left + $('.dot').width() / 2
    centerY = $('.dot').offset().top + $('.dot').height() / 2
    a = Math.round(716 * sRSS)
    b = Math.round(711 * sRSS)
    // var arc = d3.svg.arc()
    //     .innerRadius(260 * sRSS)
    //     .outerRadius(330 * sRSS)
    //     .startAngle(90 * (pi / 180)) //converting from degs to radians
    //     .endAngle(360 * (pi / 180)) //just radians
    // $('.drawarea svg').empty()
    // vis.append("path")
    //     .style("fill", '#84E071')
    //     .attr("d", arc)
    //     .attr("transform", `translate(${a / 2},${b / 2})`)
    $('svg').empty()

}
