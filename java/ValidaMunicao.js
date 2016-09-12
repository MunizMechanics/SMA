function ValidaMunicao() {
	d = document.Municoes;

	if (d.numeroSerieMunicao.value == ""){
		alert("O campo número deve ser preenchido!");
		d.numeroSerieMunicao.focus();
		d.numeroSerieMunicao.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if (d.numeroCalibre.value == 0){
		alert("O campo calibre deve ser preenchido!");
		d.numeroCalibre.focus();
		d.numeroCalibre.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}