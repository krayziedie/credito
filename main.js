//$(document).ready(function($){
$('#btn').click(function(e){
	e.preventDefault();
	var monto = $('#monto').val();	
	var cuotas = $('#cuotas').val();
	var $conv = $('.conversion');
$.ajax({
	url: 'http://www.mindicador.cl/api',
	dataType:'json',
	})
.done(function(data){
	var html='<div class="conversion">';
	html += '<p>valor de la cuota '+(monto / cuotas) / data.uf.valor+'</p>';
	//html += '<p>UF: '+monto / data.uf.valor+'</p>';
	//html += '<p>US$: '+monto / data.dolar.valor+'</p>';
	html += '</div>';
	//console.log(data);
	//console.log(textStatus);
	$conv.append(html);
	})
.fail(function(err) {
	console.log(errorThrown, textStatus);
	})
});


