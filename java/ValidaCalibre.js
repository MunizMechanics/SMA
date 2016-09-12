function ValidaCalibre() {
	d = document.Calibres;
	
	var numero = new RegExp(/^[0-9]+$/);
	
	if (d.numeroCalibre.value == ""){
		alert("O campo número deve ser preenchido!");
		d.numeroCalibre.focus();
		d.numeroCalibre.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if(!numero.exec(d.numeroCalibre.value)){
	
		alert("Apenas números!");
		d.numeroCalibre.focus();
		d.numeroCalibre.style.backgroundColor="#7FFFD4";
		return false;
	
	}

return true;
}