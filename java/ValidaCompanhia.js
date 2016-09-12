function ValidaCompanhia() {
	d = document.Companhias;

	if (d.nomeCompanhia.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomeCompanhia.focus();
		d.nomeCompanhia.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if (d.nomeOrganizacaoMilitar.value == 0){
		alert("O campo OM deve ser preenchido!");
		d.nomeOrganizacaoMilitar.focus();
		d.nomeOrganizacaoMilitar.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}