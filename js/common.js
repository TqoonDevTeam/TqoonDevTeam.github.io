$(function () {
    /* 좌측메뉴 자동 선택 */
    $.each($("#sidebar-nav").find("a[href='" + location.pathname + "']").parents("li"), function (i, v) {
        $v = $(v);
        $v.find(">a").addClass("active");
        $v.find(">div.collapse").addClass("in");
    });

    /* highlight 스타일 수정 */
    $(".highlighter-rouge").each(function (i, v) {
        var $v = $(v);
        var _class = $v.attr("class").split(' ')[0].split('-')[1];
        if (_class) {
            $v.find("code").addClass(_class);
        }
    });
    hljs.initHighlighting();

    /* table을 bootstrap table로 변경 */
    $("#content table").addClass("table table-bordered");

    /* 툴팁켜기 */
    $('#navbar-menu [data-toggle="tooltip"]').tooltip();
    $('#bookcontents[data-toggle="tooltip"]').tooltip();
});