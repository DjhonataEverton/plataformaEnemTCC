import { login } from '../script'

const Client = require('pg').Client
const cliente = new Client({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: "5432",
    database: "postgres"
})

email = login.email
senha = login.senha
nome = login.nome

console.log(email, senha, nome)

async function cadastrar_dados(email, senha, nome){
    try{
        console.log("started.")
        await cliente.connect()
        console.log("conected")
        await cliente.query(`insert into users values ('${email}', '${nome}','${senha}')`)
    }catch{
        console.log(`Erro dectado em cadastrar. Erro: ${ex}`)
    }finally{
        await cliente.end()
        console.log("finished")
    }
}
