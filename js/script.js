// Menu movil: muestra u oculta los enlaces de navegacion al tocar el boton
document.addEventListener('DOMContentLoaded', function () {
  var boton = document.querySelector('.nav-toggle');
  var enlaces = document.querySelector('.navlinks');

  if (boton && enlaces) {
    boton.addEventListener('click', function () {
      // Alterna la clase que muestra u oculta el menu
      enlaces.classList.toggle('open');

      // Actualiza el atributo de accesibilidad segun el estado del menu
      var abierto = enlaces.classList.contains('open');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
  }

  // Animacion de aparicion al hacer scroll: revela cada tarjeta o titulo
  // cuando entra en la pantalla, en lugar de mostrar todo de golpe
  var elementosAnimados = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && elementosAnimados.length) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('in-view');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15 });

    elementosAnimados.forEach(function (el) {
      observador.observe(el);
    });
  } else {
    // Si el navegador no soporta IntersectionObserver, se muestra todo directamente
    elementosAnimados.forEach(function (el) {
      el.classList.add('in-view');
    });
  }
});
