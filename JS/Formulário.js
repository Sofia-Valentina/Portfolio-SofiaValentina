// Validação dos dados do formulário

function $(id) {
    return document.getElementById(id);
}

function Email(id) {
    if ($(id).value.indexOf("@") < 1 || $(id).value.indexOf(".") == -1) {
        return false;
    }
    else {
        return true;
    }
}

function Telefone(id) {

    if (isNaN($(id).value.substring(1, 3)) || isNaN($(id).value.substring(4, 8)) || isNaN($(id).value.substring(9, 13))) {
        return false;

    } else if ($(id).value.charAt(8) != "-") {
        return false;
    }
    else {
        return true;
    }
}

function Preenchimento(id) {
    if ($(id).value == "") {
        return false;
    }
    else {
        return true;
    }
}


function validandoDados() {
    var mensagem = "";

    if (!Preenchimento("email")) {
        mensagem += "Este campo é obrigatório\n ";
    }
    else {
        if (!Email("email")) {
            mensagem += "O e-mail que você inseriu não é valido \n ";
        }
    }

    if (!Preenchimento("nome")) {
        mensagem = "Este campo é obrigatório\n ";

    }

    if (!Preenchimento("telefone")) {
        mensagem += "Este campo é obrigatório\n ";
    }
    else {
        if (!Telefone("telefone")) {
            mensagem += "O número de contato que você inseriu não é valido \n ";
        }
    }

    if (mensagem != "") {
        window.alert(mensagem);
    }
    else {
        $("form").submit();
    }
}

window.onload = function () {
    $("submit").onclick = function () { validandoDados(); }
}

