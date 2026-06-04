function processaDados() {
  var senha = document.getElementById("pass");
  var email = document.getElementById("ctt");
  var validacao = 1;
  event.preventDefault();

  if (senha.value == "") {
    alert("O campo senha deve não pode ser nulo!");
    nome.style.backgroundColor = "red";
    e.preventDefault();
    validacao = 0;
  } else if (email.value == "") {
    alert("O campo e-mail deve não pode ser nulo!");
    email.style.backgroundColor = "red";
    e.preventDefault();
    validacao = 0;
  } else {
    validaDado();
    validacao = 1;
    alert("Enviado com sucesso!");
  }

  function validaDado(e) {
    var formulario = document.getElementById("Dados-login");
    var thanks = document.getElementById("agradecimentos");
    formulario.style.display = "none";
    thanks.style.display = "block";
thanks.style.marginBottom = "250px";
   
  }
}

 var btnLogin = document.getElementById("login-acesso");
 var listAcesso = document.getElementById("list-acess");

function opcoesAcesso(){
  btnLogin.style.marginTop = "0px"
  listAcesso.style.display = "block";
}

function fechaAcesso(){
  btnLogin.style.marginTop = "0px";
  listAcesso.style.display = "none";
}

function fechaAbas(){
  listAcesso.style.display = "none";
}
