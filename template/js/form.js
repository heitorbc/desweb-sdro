function confirmacao(id) {
    //apresenta mensagem de confirmação para o usuário
    var resposta = confirm("Deseja remover esse registro?");
    
    //verifica a resposta
     if (resposta == true) {
          //realiza exclusão do registro
          window.location.href = "#";
     }
}

function validaCPF()
  {
  	document.getElementById("cpf").value;
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
          return false;
    for (i = 0; i < cpf.length - 1; i++)
          if (cpf.charAt(i) != cpf.charAt(i + 1))
                {
                digitos_iguais = 0;
                break;
                }
    if (!digitos_iguais)
          {
          numeros = cpf.substring(0,9);
          digitos = cpf.substring(9);
          soma = 0;
          for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0))
                return false;
          numeros = cpf.substring(0,10);
          soma = 0;
          for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1))
                return false;
          return true;
          }
    else
        return false;
  }

function usuario(){
  usuario = document.getElementsByName('usuario-login')[0].value;
  localStorage.setItem('usuario', usuario);
}

function exibirUsuario(){
  var usuario = localStorage.getItem('usuario');
  var domUsr = document.getElementById('usuario');
  if(domUsr)
    domUsr.innerHTML = usuario;
}

window.addEventListener('load', exibirUsuario)


var form = document.getElementById("cadastro");
if (form.addEventListener) {                   
    form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validaCadastro);
}

function validaCadastro(evt){
  var senha = document.getElementById('senha');
  var senha2 = document.getElementById('senha2');
  var contErro = 0;

  caixa_senha = document.querySelector('.msg-senha');
  if(senha.value.length < 6){
    caixa_senha.innerHTML = "Favor preencher a Senha com o mínimo de 6 caracteres";
    caixa_senha.style.display = 'block';
    contErro+=1;
  }else{
    caixa_senha.style.display = 'none';
  }

  caixa_senha2 = document.querySelector('.msg-senha2');
  if(senha2.value.length < 6){
    caixa_senha2.innerHTML = "Favor preencher a Senha com o mínimo de 6 caracteres";
    caixa_senha2.style.display = 'block';
    contErro+=1;
  }else{
    caixa_senha2.style.display = 'none';
  }

  caixa_senha2 = document.querySelector('.msg-senha2');
  if(senha2.value.length < 6){
    caixa_senha2.innerHTML = "Favor preencher a Senha com o mínimo de 6 caracteres";
    caixa_senha2.style.display = 'block';
    contErro+=1;
  }else{
    caixa_senha2.style.display = 'none';
  }

  if(senha.value != senha2.value){
    caixa_senha2.innerHTML = "Senha diferente";
    caixa_senha2.style.display = 'block';
    contErro += 1;
  }


  
  if(contErro > 0){
    evt.preventDefault();
  }
}
