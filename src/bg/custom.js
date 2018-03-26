(function() {
    moment.locale('ja');
    var today = moment().format('MMMM Do YYYY');
    console.log(today);

    // $("body").html().replace("$date", today);
    var foundin = $('*:contains("I am a simple string")').length > 0;
    console.log(foundin);

    // $("body > div.dw").html().replace("$date", today);
    var content = $("body > div.dw").find(".aoD").html();
    // $("body > div.dw").html($("body > div.dw").html().replace("$date", today));
    content = $("input[name='subjectbox']").val();
    content = content.replace("$date", today);
    $("input[name='subjectbox']").val(content);
    console.log(content);

	// just place a div at top right
	// var div = document.createElement('div');
	// div.style.position = 'fixed';
	// div.style.top = 0;
	// div.style.right = 0;
	// div.textContent = 'Injected!';
	// document.body.appendChild(div);

	//alert('inserted self... giggity');
})();