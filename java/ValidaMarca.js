function ValidaMarca() {
	d = document.Marcas;

	if (d.nomeMarca.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomeMarca.focus();
		d.nomeMarca.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}