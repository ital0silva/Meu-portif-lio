let currentSlide = 0;

function mostrarInfo(id) {
  // Oculta todos os elementos de informações
  const infos = document.querySelectorAll('.info-projeto');
  infos.forEach(info => info.style.display = 'none');
  
  // Exibe o elemento específico
  document.getElementById(id).style.display = 'block';
}

function fecharInfo(id) {
  document.getElementById(id).style.display = 'none';
}

function mudarSlide(n, className) {
  const slides = document.getElementsByClassName(className);
  
  // Oculta o slide atual
  slides[currentSlide].style.display = 'none';
  
  // Atualiza o slide atual
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  
  // Exibe o novo slide
  slides[currentSlide].style.display = 'block';
}
