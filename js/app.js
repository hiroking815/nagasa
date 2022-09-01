const yoko_nagasa = $('.yoko_nagasa');
const tate_nagasa = $('.tate_nagasa');
const browser_text = $('.browser');
const os_text = $('.os');

$(window).on('load resize', function(){
    let device_yoko_nagasa = $('.wrapper').outerWidth();
    let device_tate_nagasa = $('.wrapper').outerHeight();
    yoko_nagasa.html(device_yoko_nagasa);
    tate_nagasa.html(device_tate_nagasa);
});

browser_text.html(platform.browser.name);
os_text.html(platform.os.name);

console.log(platform);