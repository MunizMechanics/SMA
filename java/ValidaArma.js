function ValidaArma() {
	d = document.Armas;

	if (d.numeroSerieArma.value == ""){
		alert("O campo número de série deve ser preenchido!");
		d.numeroSerieArma.focus();
		d.numeroSerieArma.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if (d.numeroCalibre.value == 0){
		alert("O campo calibre deve ser preenchido!");
		d.numeroCalibre.focus();
		d.numeroCalibre.style.backgroundColor="#7FFFD4";
		return false;
	}

	if (d.nomeModelo.value == 0){
		alert("O campo modelo deve ser preenchido!");
		d.nomeModelo.focus();
		d.nomeModelo.style.backgroundColor="#7FFFD4";
		return false;
	}
	
return true;
}