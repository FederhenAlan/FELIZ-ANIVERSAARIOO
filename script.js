let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");

  setTimeout(showSlides, 3000);
}

showSlides();

const inicioRelacionamento = new Date("2024-07-27T00:00:00");

function atualizarContador() {
  const agora = new Date();
  let anos = agora.getFullYear() - inicioRelacionamento.getFullYear();
  let meses = agora.getMonth() - inicioRelacionamento.getMonth();
  let dias = agora.getDate() - inicioRelacionamento.getDate();
  let horas = agora.getHours() - inicioRelacionamento.getHours();
  let minutos = agora.getMinutes() - inicioRelacionamento.getMinutes();
  let segundos = agora.getSeconds() - inicioRelacionamento.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoMes;
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  document.getElementById("contador").innerHTML =
    `${anos} anos, ${meses} meses, ${dias} dias, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
