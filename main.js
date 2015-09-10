

$.ajax({
	url: 'http://www.mindicador.cl/api',
		dataType:'json',
})
.done(function(data, textStatus){
	console.log(data.uf);
	console.log(textStatus);
})
.fail(function(err) {
	console.log(errorThrown, textStatus);
})




