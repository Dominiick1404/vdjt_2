function validation() {
    if (document.Formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Coloque o nome de Usuario*";
        return false;
    }
    else if (document.Formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Coloque o nome de Usuario*";
    }
    else if (document.Formfill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "Minimo de 6 letras*";
        return false;
    }
    else if (document.Formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Coloque seu Email*";
        return false;
    }
    else if (document.Formfill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "A senha precisa de no minimo 6 digitos*";
        return false;
    }
    else if (document.Formfill.Password.value == "") {
        document.getElementById("result").innerHTML = "Confirme sua senha*";
        return false;
    }
    else if (document.Formfill.Password.value !== document.Formfill.CPassword.value) {
        document.getElementById("result").innerHTML = "As senhas não batem*";
        return false;
    }

}