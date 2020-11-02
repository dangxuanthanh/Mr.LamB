function DataBG() {
	$('[data-bg]').each(function () {
		$(this).addClass('data-bg lazyload')
	})
}

$(document).ready(function () {
	DataBG();
});
