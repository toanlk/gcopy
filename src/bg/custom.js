(function() {
    moment.locale('ja');
    var today = moment().format('MMMM Do YYYY');
    console.log(today);

    var content = $("body > div.dw").find(".aoD").html();
    content = $("input[name='subjectbox']").val();
    content = content.replace("$date", today);
    $("input[name='subjectbox']").val(content);
    console.log(content);

    $("body *").replaceText("$date", today);
})();