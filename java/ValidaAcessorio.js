function ValidaAcessorio() {
	d = document.Acessorios;

	if (d.nomeAcessorio.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomeAcessorio.focus();
		d.nomeAcessorio.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}