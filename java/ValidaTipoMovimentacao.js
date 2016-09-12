function ValidaTipoMovimentacao() {
	d = document.TiposMovimentacoes;

	if (d.nomeTipoMovimentacao.value == ""){
		alert("O campo nome deve ser preenchido!");
		d.nomeTipoMovimentacao.focus();
		d.nomeTipoMovimentacao.style.backgroundColor="#7FFFD4";
		return false;
	}

return true;
}