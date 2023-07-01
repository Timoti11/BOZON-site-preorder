/* Плашки */
$('#buy-1').click(function() {
    $('#layer-1').css({
        'visibility': 'hidden',
        'display': 'none'
    });
    $('#layer-2').css({
        'visibility': 'visible',
        'display': 'block'
    });
});
$('#buy-1-back').click(function() {
    $('#layer-1').css({
        'visibility': 'visible',
        'display': 'block'
    });
    $('#layer-2').css({
        'visibility': 'hidden',
        'display': 'none'
    });
});
$('#buy-2').click(function() {
    $('#layer-1_2').css({
        'visibility': 'hidden',
        'display': 'none'
    });
    $('#layer-2_2').css({
        'visibility': 'visible',
        'display': 'block'
    });
});
$('#buy-2-back').click(function() {
    $('#layer-1_2').css({
        'visibility': 'visible',
        'display': 'block'
    });
    $('#layer-2_2').css({
        'visibility': 'hidden',
        'display': 'none'
    });
});
/* скрипт говна */

/* Ошибка */

var blockHidden = document.querySelector('.alert');

$('#rules-1').click(function() {
    console.log('1')
    blockHidden.classList.add('alert-on');
    setTimeout(() => blockHidden.classList.add('alert-off'), 5000);
});