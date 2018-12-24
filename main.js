var marker = "";
var map = "";
function initMap() {
    var uluru = {lat: 48.856613, lng: 2.352222};
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru});
    marker = new google.maps.Marker({position: uluru, map: map});
}

function changeMarkerPosition() {
    var latlng = new google.maps.LatLng({lat: 48.856613, lng: 2.352222});
    map.setCenter(latlng);
    marker.setPosition(latlng);
}
function changeMarkerPosition2() {
    var latlng = new google.maps.LatLng({lat: 40.416775, lng: -3.703790});
    map.setCenter(latlng);
    marker.setPosition(latlng);
}
function changeMarkerPosition3() {
    var latlng = new google.maps.LatLng({lat: 52.520008, lng: 13.404954});
    map.setCenter(latlng);
    marker.setPosition(latlng);
}
function changeMarkerPosition4() {
    var latlng = new google.maps.LatLng({lat: 51.507351, lng: -0.127758});
    map.setCenter(latlng);
    marker.setPosition(latlng);
}
function changeMarkerPosition5() {
    var latlng = new google.maps.LatLng({lat: 41.385063, lng: 2.173404});
    map.setCenter(latlng);
    marker.setPosition(latlng);
}
function changeMarkerPosition6() {
    var latlng = new google.maps.LatLng({lat: 50.075539, lng: 14.437800});
    map.setCenter(latlng);
    marker.setPosition(latlng);
}


//Hotels isotope

var $grid = $('.grid').isotope({
    itemSelector: '.image',
    layoutMode: 'fitRows'
});


var filterFns = {
    ium: function() {
        var name = $(this).find('.Spain').text();
        return name.match( /1$/ );
    }
};


$('.filters-button-group').on( 'click', 'div', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'div', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});




////////////////////////////////////////////////////////



$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#arrow-up').fadeIn();
        } else {
            $('#arrow-up').fadeOut();
        }
    });
    $('#arrow-up').click(function() {
        $('body,html').animate({scrollTop:0},700);
    });
});

(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);


$(document).ready(function(){
    $("#menu__links").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$('.tourist-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots: false,
    // autoplay:true,
    // autoplaySpeed:2000
});

