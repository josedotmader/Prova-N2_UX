let listaPosts = [];

function mostrarPosts() {
    const elemento = document.getElementById("elemento");
    if (!elemento) return; 

    elemento.innerHTML = "";

    for (let index = 0; index < listaPosts.length; index++) {
        const post = listaPosts[index];
        elemento.innerHTML +=
            "<div class='card'>" +
            "<h2>" + post.title + "</h2>" +
            "<p>" + post.body + "</p>" +
            "<button class='btn-editar' onclick='editarPost(" + index + ")'>Editar</button>" +
            "<button class='btn-remover' onclick='removerPost(" + index + ")'>Remover</button>" +
            "</div>";
    }
}

function pegarDados(dados) {
    listaPosts = dados;
    const statusMsg = document.getElementById("status-posts");
    if (statusMsg) statusMsg.style.display = "none"; 
    mostrarPosts();
}


if (document.getElementById("elemento")) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(resposta) {
            return resposta.json();
        })
        .then(pegarDados)
        .catch(function(erro) {
            document.getElementById("status-posts").innerText = "Erro ao carregar os posts. Tente novamente mais tarde.";
            document.getElementById("status-posts").style.color = "red";
        });
}

function adicionarPost() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;

    if (titulo.trim() === "" || descricao.trim() === "") {
        alert("Por favor, preencha o título e a descrição.");
        return;
    }

    const novoPost = {
        title: titulo,
        body: descricao
    };

    listaPosts.unshift(novoPost); 

    // Limpa os campos após adicionar
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";

    mostrarPosts();
}

function removerPost(posicao) {
    const confirmacao = confirm("Tem certeza que deseja excluir este post?");
    if (confirmacao) {
        listaPosts.splice(posicao, 1);
        mostrarPosts();
    }
}

function editarPost(posicao) {
    const novoTitulo = prompt("Novo título", listaPosts[posicao].title);
    if (novoTitulo === null) return; 
    
    const novaDescricao = prompt("Nova descrição", listaPosts[posicao].body);
    if (novaDescricao === null) return;

    if (novoTitulo.trim() !== "") listaPosts[posicao].title = novoTitulo;
    if (novaDescricao.trim() !== "") listaPosts[posicao].body = novaDescricao;

    mostrarPosts();
}



let listaUsuarios = [];

function mostrarUsuarios() {
    const elemento = document.getElementById("usuarios");
    if (!elemento) return; 

    elemento.innerHTML = "";

    for (let index = 0; index < listaUsuarios.length; index++) {
        const usuario = listaUsuarios[index];
        const cidade = usuario.address ? usuario.address.city : "Não informada";

        elemento.innerHTML +=
            "<div class='card'>" +
            "<h2>" + usuario.name + "</h2>" +
            "<p><strong>Email:</strong> " + usuario.email + "</p>" +
            "<p><strong>Telefone:</strong> " + usuario.phone + "</p>" +
            "<p><strong>Cidade:</strong> " + cidade + "</p>" +
            "<button class='btn-editar' onclick='editarUsuario(" + index + ")'>Editar</button>" +
            "<button class='btn-remover' onclick='removerUsuario(" + index + ")'>Remover</button>" +
            "</div>";
    }
}

function pegarUsuarios(dados) {
    listaUsuarios = dados;
    const statusMsg = document.getElementById("status-usuarios");
    if (statusMsg) statusMsg.style.display = "none"; 
    mostrarUsuarios();
}

if (document.getElementById("usuarios")) {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(resposta) {
            return resposta.json();
        })
        .then(pegarUsuarios)
        .catch(function(erro) {
            document.getElementById("status-usuarios").innerText = "Erro ao carregar os usuários. Tente novamente mais tarde.";
            document.getElementById("status-usuarios").style.color = "red";
        });
}

function adicionarUsuario() {
    const nome = document.getElementById("nomeUser").value;
    const email = document.getElementById("emailUser").value;
    const telefone = document.getElementById("telefoneUser").value;
    const cidade = document.getElementById("cidadeUser").value;

    if (nome.trim() === "" || email.trim() === "") {
        alert("Por favor, preencha pelo menos o Nome e o E-mail.");
        return;
    }

    const novoUsuario = {
        name: nome,
        email: email,
        phone: telefone,
        address: { city: cidade }
    };
    
    listaUsuarios.unshift(novoUsuario);

    document.getElementById("nomeUser").value = "";
    document.getElementById("emailUser").value = "";
    document.getElementById("telefoneUser").value = "";
    document.getElementById("cidadeUser").value = "";

    mostrarUsuarios();
}

function removerUsuario(posicao) {
    const confirmacao = confirm("Tem certeza que deseja excluir este usuário?");
    if (confirmacao) {
        listaUsuarios.splice(posicao, 1);
        mostrarUsuarios();
    }
}

function editarUsuario(posicao) {
    const novoNome = prompt("Novo nome", listaUsuarios[posicao].name);
    if (novoNome === null) return;
    
    const novoEmail = prompt("Novo email", listaUsuarios[posicao].email);
    if (novoEmail === null) return;

    if (novoNome.trim() !== "") listaUsuarios[posicao].name = novoNome;
    if (novoEmail.trim() !== "") listaUsuarios[posicao].email = novoEmail;

    mostrarUsuarios();
}