function ValidaModelo() {
	d = document.Modelos;

	if (d.nomeModelo.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomeModelo.focus();
		d.nomeModelo.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if (d.nomeMarca.value == 0){
		alert("O campo Marca deve ser preenchido!");
		d.nomeMarca.focus();
		d.nomeMarca.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}