function ValidaOrganizacaoMilitar() {
	d = document.OrganizacoesMilitares;

	if (d.nomeOrganizacaoMilitar.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomeOrganizacaoMilitar.focus();
		d.nomeOrganizacaoMilitar.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if (d.nomeTipoOrganizacaoMilitar.value == 0){
		alert("O campo OM deve ser preenchido!");
		d.nomeTipoOrganizacaoMilitar.focus();
		d.nomeTipoOrganizacaoMilitar.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}