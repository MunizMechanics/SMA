function ValidaMilitar() {
	d = document.Militares;

	if (d.nomeMilitar.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomeMilitar.focus();
		d.nomeMilitar.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if (d.nomePelotao.value == 0){
		alert("O campo pelot�o deve ser preenchido!");
		d.nomePelotao.focus();
		d.nomePelotao.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if (d.nomeGraduacao.value == 0){
		alert("O campo gradua��o deve ser preenchido!");
		d.nomeGraduacao.focus();
		d.nomeGraduacao.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}