function ValidaPelotao() {
	d = document.Pelotoes;

	if (d.nomePelotao.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomePelotao.focus();
		d.nomePelotao.style.backgroundColor="#7FFFD4";
		return false;
	}
	
	if (d.nomeCompanhia.value == 0){
		alert("O campo Companhia deve ser preenchido!");
		d.nomeCompanhia.focus();
		d.nomeCompanhia.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}