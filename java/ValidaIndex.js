function ValidaIndex() {
	d = document.Index;

	if (d.usuario.value == ""){
		alert("O campo usuário deve ser preenchido!");
		d.usuario.focus();
		d.usuario.style.backgroundColor="#7FFFD4";
		return false;
	}

	if (d.senha.value == ""){
		alert("O campo senha deve ser preenchido!");
		d.senha.focus();
		d.senha.style.backgroundColor="#7FFFD4";
		return false;
	}
	
return true;
}