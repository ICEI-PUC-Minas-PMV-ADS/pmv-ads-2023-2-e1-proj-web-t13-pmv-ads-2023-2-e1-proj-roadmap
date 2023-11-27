let logado;
if(localStorage.getItem('logado')) {
    logado = JSON.parse(localStorage.getItem('logado'))
    let btnLogin = document.getElementById('login-btn')

    let newBtnLogin = `
    <div class="dropdown">
        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${logado.nome}
        </button>
        <ul class="dropdown-menu login">
        <li><a class="dropdown-item login" onclick="deslogar()" href="#">Sair</a></li>
        </ul>
    </div>
    `

    let htmlElement = new DOMParser().parseFromString(newBtnLogin, 'text/html')
    btnLogin.replaceWith(htmlElement.body.firstChild)
}

   

function deslogar() {
    localStorage.removeItem('logado')
    location.reload()
}