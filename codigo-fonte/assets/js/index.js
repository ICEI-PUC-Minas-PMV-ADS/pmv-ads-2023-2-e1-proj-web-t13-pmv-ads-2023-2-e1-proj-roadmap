let logado;
if(localStorage.getItem('logado')) {
    logado = JSON.parse(localStorage.getItem('logado'))
    let btnLogin = document.getElementById('login-btn')

    let newBtnLogin = `
    <div class="dropdown">
        <button class="btn btn-secondary btn-lg dropdown-toggle estilobotao" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  