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
	var prestamo_clp = data.uf.valor * monto;
	var interes = cuotas * 0.015;
	var valor_total = prestamo_clp+prestamo_clp*interes;
	var html='<div class="conversion">';
	html += '<h3>valor total del prestamo $ '+ parseInt(prestamo_clp)+'</h3>';
	html += '<h3>valor total a pagar $ '+ parseInt(valor_total)+'</h3>';
	html += '<h3>valor cuota $ '+ parseInt(valor_total / cuotas)+'</h3>';
	//html += '<p>UF: '+monto / data.uf.valor+'</p>';
	//html += '<p>US$: '+monto / data.dolar.valor+'</p>';
	html += '</div>';
	//console.log(data);
	//console.log(textStatus);
	$conv.html(html);

	})
.fail(function(err) {
	console.log(errorThrown, textStatus);
	})
});


