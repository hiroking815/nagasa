const yoko_nagasa = $('.yoko_nagasa');
const tate_nagasa = $('.tate_nagasa');

$(window).on('load resize', function(){
    let device_yoko_nagasa = $('.wrapper').outerWidth();
    let device_tate_nagasa = $('.wrapper').outerHeight();
    yoko_nagasa.html(device_yoko_nagasa);
    tate_nagasa.html(device_tate_nagasa);
});

console.log(platform);