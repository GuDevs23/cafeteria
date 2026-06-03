let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function processaDados() {
  var nome = document.getElementById("nome");
  var email = document.getElementById("ctt");
  var validacao = 1;
  event.preventDefault();

  if (nome.value == "") {
    alert("O campo nome deve não pode ser nulo!");
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
    var formulario = document.getElementById("Dados-newlaster");
    var thanks = document.getElementById("agradecimentos");
    formulario.style.display = "none";
    thanks.style.display = "block";
  }
}
