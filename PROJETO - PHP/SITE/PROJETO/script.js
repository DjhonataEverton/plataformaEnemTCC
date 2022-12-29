/*----------Aba Simulado----------*/
function simulado(){
    window.location.href = "config.html"
}

/*----------Aba Cadastro----------*/
function login_cad(){
    window.location.href = "cadastro.html"
}
function login(){
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    if (email.value.length == 0 || senha.value.length == 0){
        window.alert("show de bola")
    }else{
        window.alert("Logado")
    }
}
function cadastrar(){
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    if (email.value.length == 0 || senha.value.length == 0){
        window.alert("show de bola")
    }else{
        window.alert("Cadastrado")
    }
}
/*----------Aba Informações----------*/
function informacoes(){
    window.location.href = "informacoes.html"
}
