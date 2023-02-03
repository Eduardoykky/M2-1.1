let nome
let senha
function ReceberRegistro() {
    nome = prompt("Insira um nome para Registro.")
    senha = prompt("Insira uma senha para Registro.")
    console.log("Cadastro feito com sucesso.");
}
function Login(nome, senha) {
    let nome2 = prompt("Insira um nome para Login.")
    let senha2 = prompt("Insira uma senha para Login.")
    if (nome === nome2 && senha === senha2) {
        console.log("Login feito com sucesso.")
        return true
    }else{
        console.log("ERRO");
        return false
    }
}
ReceberRegistro()
Login(nome, senha)