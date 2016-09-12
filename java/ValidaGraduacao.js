function ValidaGraduacao() {
	d = document.Graduacoes;

	if (d.nomeGraduacao.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomeGraduacao.focus();
		d.nomeGraduacao.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if (d.siglaGraduacao.value == ""){
		alert("O campo sigla deve ser preenchido!");
		d.siglaGraduacao.focus();
		d.siglaGraduacao.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}