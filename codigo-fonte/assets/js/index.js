
window.onload = function () {
  const conteudos = [
    {
      'name': 'Front-end',
      'url': 'front-end.html'
    },
    {
      'name': 'Back-end',
      'url': 'back-end.html'
    },
    {
      'name': 'DevOps',
      'url': 'devops.html'
    },
    {
      'name': 'Mobile',
      'url': 'mobile.html'
    },
    {
      'name': 'Dados',
      'url': 'dados.html'
    },
    {
      'name': 'Iteligencia Artificial',
      'url': 'intelig-artificial.html'
    },
    {
      'name': 'Cybersegurança',
      'url': 'cybersec.html'
    }
  ]

  const input = document.getElementById("searchContent")
  autocomplete(input, conteudos);

  let logado;
  if (localStorage.getItem('logado')) {
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

}

function deslogar() {
  localStorage.removeItem('logado')
  location.reload()
}

function redirectOnClick() {
  window.location = this.getElementsByTagName("input")[0].getAttribute('url')
}

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    a.addEventListener("click", redirectOnClick)

    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].name.substr(val.length);
        b.innerHTML += "<input id='redirectInput' type='hidden' value='" + arr[i].name + "' url='" + arr[i].url + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      console.log('a')
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) {
          x[currentFocus].click();
          window.location.href = x[currentFocus].getElementsByTagName('input')[0].getAttribute('url')
        }



      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

