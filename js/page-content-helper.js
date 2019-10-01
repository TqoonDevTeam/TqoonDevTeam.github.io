$(function () {
    var $c = $("#page-content");

    // 본문에 class 강제할당
    // 테이블에 bootstrap css 처리
    $c.find("table").addClass("table table-bordered dataTable table-white");

    // css에 의해 제어되면 나중에 제거
    // $c.find("h1").addClass("h2 mb-5 text-gray-800");
    // $c.find("h2").addClass("h3 mb-2 text-gray-800");
    // $c.find("h3").addClass("h4 mb-1 text-gray-800");
    // $c.find("h4").addClass("h5 mb-1 text-gray-800");
    // $c.find("h5").addClass("h6 mb-1 text-gray-800");
    // $c.find("h6").addClass("h6 mb-1 text-gray-800");


    // use highlight.js
    // 규칙에 맞게 강제 언어 설정
    $(".highlighter-rouge").each(function (i, v) {
        var $v = $(v);
        var _class = $v.attr("class").split(' ')[0].split('-')[1];
        if (_class) {
            $v.find("code").addClass(_class);
        }
    });
    hljs.initHighlighting();

    // 본문구조 분석
    (function () {
        var titleGroup = window['page-content-titlegroup'] = { childs: [], ele: null };
        var contents = [];
        $c.find("h1, h2, h3, h4, h5, h6").each(function (i, v) {
            var degree = parseInt(v.tagName.replace("H", ""));
            var item = {
                ele: v,
                childs: [],
                degree: degree
            }
            var parent = findParent(item.degree);
            parent.childs.push(item);
            contents.push(item);
        });
        function findParent(degree) {
            if (contents.length == 0) return titleGroup;
            var find;
            for (var i = contents.length - 1; i > -1; i--) {
                find = contents[i];
                if (find.degree < degree) {
                    break;
                }
            }
            return find || titleGroup;
        }

        var $bookContents = $("<ul/>");
        $.each(titleGroup.childs, function (i, v) {
            makeContents(v, $bookContents);
        });
        function makeContents(v, $ul) {
            var $li = $("<li/>");
            $li.append($("<a href='#" + v.ele.id + "' data-tagname='" + v.ele.tagName + "'>" + v.ele.innerText + "</a>"));
            $ul.append($li);
            if (v.childs.length > 0) {
                var $inUl = $("<ul/>");
                $.each(v.childs, function (i, inv) {
                    makeContents(inv, $inUl);
                });
                $ul.append($inUl);
            }
        }
        $("#book-contents").append($bookContents);
    })();

    // 버벅임 제거를 위해 강제 선언한 d-none 제거
    $c.removeClass('d-none');
});