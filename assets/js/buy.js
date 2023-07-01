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
var oferta = document.querySelector('.oferta');
var blur = document.querySelector('#blur');

$('#rules-1').click(function() {
    blockHidden.classList.add('alert-on');
    setTimeout(() => blockHidden.classList.add('alert-off'), 5000);
});

$('#oferta-1').click(function() {
    $('.oferta').css({
        'visibility': 'visible'
    });
    blur.classList.add('blur');
});

$('#oferta-close').click(function() {
    $('.oferta').css({
        'visibility': 'hidden'
    });
    blur.classList.remove('blur');
});