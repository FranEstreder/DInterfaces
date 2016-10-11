function atras() {
    window.history.back();
}
function delante() {
	window.history.forward();
}
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