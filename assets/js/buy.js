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