//Esta función obliga a la página a retroceder a la página que estaba anteriormente
function atras() {
    window.history.back();
}
//Esta función obliga a la página a avanzar a la página de la que haya retrocedido
function delante() {
	window.history.forward();
}
//Esta función obliga a la página a ir a aquella página cuyo número hayamos introducido
function ir(){
	var x = prompt("Introduce la página a la que quieres ir (Máximo " + window.history.length + " paginas):");
	if (!isNaN(x) && isFinite(x))
	{
		window.history.go(x);
	}
	else{
		alert("Sólo puedes introducir números finitos");
	}
}