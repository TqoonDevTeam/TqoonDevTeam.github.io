$(function () {
    // 본문구조 분석
    var titleGroup = window['page-content-titlegroup'] = { childs: [], ele: null };
    var contents = [];

    $("#content").find("h1, h2, h3, h4, h5, h6").each(function (i, v) {
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
    $("#bookcontentsbody").append($bookContents);
});