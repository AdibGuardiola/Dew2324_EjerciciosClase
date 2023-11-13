document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  let rotationValue = 0;

  carousel.addEventListener('click', () => {
    rotationValue += 40;
    carousel.style.transition = 'transform 1s ease-out';
    carousel.style.transform = `rotateY(${rotationValue}deg)`;
  });
});
