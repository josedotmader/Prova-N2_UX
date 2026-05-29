let listaPosts = []

function mostrarPosts() {

    const elemento = document.getElementById("elemento")
    elemento.innerHTML = ""

    for (let index = 0; index < listaPosts.length; index++) {
        const post = listaPosts[index]
        elemento.innerHTML +=
            "<div class='card'>" +
            "<h2>" + post.title + "</h2>" +
            "<p>" + post.body + "</p>" +
            "<button onclick='editarPost(" + index + ")'>Editar</button>" +
            "<button onclick='removerPost(" + index + ")'>Remover</button>" +
            "</div>"
    }
}

function pegarDados(dados) {
    listaPosts = dados
    mostrarPosts()
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(resposta){
        return resposta.json()
    })
    .then(pegarDados)

function adicionarPost(){
    const titulo = document.getElementById("titulo").value
    const descricao = document.getElementById("descricao").value

    const novoPost = {
        title: titulo,
        body: descricao
    }

    listaPosts.push(novoPost)

    mostrarPosts()
}

function removerPost(posicao){
    listaPosts.splice(posicao, 1)

    mostrarPosts()
}

function editarPost(posicao){

    const novoTitulo = prompt("Novo título")
    const novaDescricao = prompt("Nova descrição")
    listaPosts[posicao].title = novoTitulo
    listaPosts[posicao].body = novaDescricao

    mostrarPosts()
}

let listaUsuarios = []

function mostrarUsuarios() {
    const elemento = document.getElementById("usuarios")
    elemento.innerHTML = ""

    for (let index = 0; index < listaUsuarios.length; index++) {
        const usuario = listaUsuarios[index]
        elemento.innerHTML +=
            "<div class='card'>" +
            "<h2>" + usuario.name + "</h2>" +
            "<p>Email: " + usuario.email + "</p>" +
            "<p>Telefone: " + usuario.phone + "</p>" +
            "<p>Endereço: " + usuario.address.city + "</p>" +
            "<button onclick='editarUsuario(" + index + ")'>Editar</button>" +
            "<button onclick='removerUsuario(" + index + ")'>Remover</button>" +
            "</div>"
    }
}

function pegarUsuarios(dados) {
    listaUsuarios = dados

    mostrarUsuarios()
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(resposta) {
        return resposta.json()
    })
    .then(pegarUsuarios)

function adicionarUsuario() {
    const nome = prompt("Nome")
    const email = prompt("Email")
    const telefone = prompt("Telefone")
    const endereco = prompt("Endereço")

    const novoUsuario = {
        name: nome,
        email: email,
        phone: telefone,
        address: endereco
    }
    listaUsuarios.push(novoUsuario)

    mostrarUsuarios()
}

function removerUsuario(posicao) {
    listaUsuarios.splice(posicao, 1)

    mostrarUsuarios()
}

function editarUsuario(posicao) {
    const novoNome = prompt("Novo nome")
    const novoEmail = prompt("Novo email")
    const novoTelefone = prompt("Novo telefone")
    const novoEndereco = prompt("Novo endereço")

    listaUsuarios[posicao].name = novoNome
    listaUsuarios[posicao].email = novoEmail
    listaUsuarios[posicao].phone = novoTelefone
    listaUsuarios[posicao].address = novoEndereco

    mostrarUsuarios()
}