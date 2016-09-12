function ValidaTipoOrganizacaoMilitar() {
	d = document.TiposOrganizacoesMilitares;

	if (d.nomeTipoOrganizacaoMilitar.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomeTipoOrganizacaoMilitar.focus();
		d.nomeTipoOrganizacaoMilitar.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}