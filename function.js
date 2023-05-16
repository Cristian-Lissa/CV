
  function mostrarSeccion(idSeccion) {
    var seccion = document.getElementById(idSeccion);
    var tituloSeccion = document.querySelector('#' + idSeccion + ' + .titulo-seccion');
  
    if (seccion.style.display === 'none') {
      seccion.style.display = 'block';
      tituloSeccion.classList.add ('activa');
    } else {
      seccion.style.display = 'none';
      tituloSeccion.classList.remove ('activa');
    }
  }