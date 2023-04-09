const nome = window.document.getElementById("nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

function lerNome() {

    let txtNome = document.querySelector("#txtNome")

    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
        nomeOk = false
    }

    else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function lerEmail() {

    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail Inválido!"
        txtEmail.style.color = "red"
        emailOk = false
    }

    else {
        txtEmail.innerHTML = "E-mail Válido!"
        txtEmail.style.color = "green"
        emailOk = true
    }

}

function lerAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length > 100) {
        txtAssunto.innerHTML = "Assunto Inválid0!"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        nomeOk = false
    }
    else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!!!")
    }

    else {
        alert("Preencha os campos corretamente antes de enviar o formulário!")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
    document.querySelector(".banner-contato").style.width = "100%"
}

function mapaNormal() {
    mapa.style.width = "480px"
    mapa.style.height = "300px"
    document.querySelector(".banner-contato").style.width = "75%"
}

