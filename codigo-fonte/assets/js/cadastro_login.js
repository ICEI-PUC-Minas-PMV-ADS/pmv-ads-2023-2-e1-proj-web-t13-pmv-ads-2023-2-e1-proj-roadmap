(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
        event.preventDefault()
        
        if(form.id == 'register-form') {
            register()
        }else {
            login()
        }
        
      }, false)
    })
  })()


function register() {
    let email = document.getElementById('register-email').value

    if(localStorage.getItem(email)) {
        alert('Usuário já cadastrado');
        return;
    }else {
        let nome = document.getElementById('register-nome').value
        let senha = document.getElementById('register-senha').value
    
        localStorage.setItem(email, JSON.stringify(
            {
                "nome": nome,
                "email": email,
                "senha": senha
            }
        ));
    }
} 

function login() {
    let email = document.getElementById('login-email').value
    let usuario = JSON.parse(localStorage.getItem(email));
    if(!usuario) {
        alert('Usuário não cadastrado');
        return;
    }

    let senha = document.getElementById('login-senha').value

    if(usuario.senha != senha) {
        alert('Senha incorreta!');
        return;
    }

    localStorage.setItem('logado', JSON.stringify(usuario))

    alert('Login realizado com sucesso');
    window.location.href = '/codigo-fonte/home.html';

}