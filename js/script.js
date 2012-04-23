change_src = function() {
    var src = $('select#src option:selected').get(0).value;
    $('div.item.' + src).toggle(true);
    $('div.item:not(.' + src + ')').toggle(false);
};

$(document).ready(function() {
    $('select#src').change(change_src);
    change_src();
});
