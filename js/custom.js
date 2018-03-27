function searchReplace(today) {
    if($("body > div.dw").find(".aoD").length > 0) {
        var content = $("body > div.dw").find(".aoD").html();
        content = $("input[name='subjectbox']").val();
        content = content.replace("$date", today);
        $("input[name='subjectbox']").val(content);
        console.log(content);

        $("body *").replaceText("$date", today);
    }
}

(function() {
    moment.locale('ja');
    var today = moment().format('MMMM Do YYYY');
    console.log(today);

    searchReplace(today);
})();