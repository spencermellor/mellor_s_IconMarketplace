const allSVG = document.querySelectorAll('.svg');

allSVG.forEach(svg => svg.addEventListener('click', toggleClass));

function toggleClass() {

  console.log('hey')

  this.classList.toggle('selected')

}
