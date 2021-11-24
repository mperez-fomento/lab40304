const frame = new Frame("fit", 1024, 768, light, dark);
frame.on("ready", () => {
  const stage = frame.stage;
  let stageW = frame.width;
  let stageH = frame.height;

  function randomColor() {
    return `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
  }

  //----------------------------------------------------------
  // 1
  //----------------------------------------------------------
  // Crea un circulo de radio 100, y color rojo, llamado 'c'.
  // Coloca 'c' en la posición (200, 200).
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 2
  //----------------------------------------------------------
  // Define una función llamada 'manejadorIn', que
  // añada una animación a 'c' que aumente su radio hasta 200.
  // Recuerda escribir 'stage.update()' al final, para que se
  // vean los cambios.
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 3
  //----------------------------------------------------------
  // Define otra función llamada 'manejadorOut', que
  // añada una animación a 'c' que reduzca su radio hasta 100.
  // Recuerda escribir 'stage.update()' al final, para que se
  // vean los cambios.
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 4 EVENTO 'mouseover'
  //----------------------------------------------------------
  // El evento 'mouseover' es capturado por un objeto gráfico
  // cuando el cursor entra dentro del objeto.
  //----------------------------------------------------------
  // Añade a c como manejador para el evento 'mouseover'
  // la función 'manejadorIn'.
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 5 EVENTO 'mouseout'
  //----------------------------------------------------------
  // El evento 'mouseout' es capturado por un objeto gráfico
  // cuando el cursor sale de dicho objeto.
  //----------------------------------------------------------
  // Añade a c como manejador para el evento 'mouseout'
  // la función 'manejadorOut'.
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 6
  //----------------------------------------------------------
  // Crea un rectángulo de dimensiones 200 x 100, y color
  // azul, llamado 'r'.
  // Coloca 'r' en la posición (500, 150).
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 7
  //----------------------------------------------------------
  // Define una función llamada 'manejadorR'
  // que cambie el color del rectángulo a un color aleatorio.
  // Para poner un color aleatorio, puedes usar la función
  // 'randomColor()', objeto.color = randomColor();
  // Recuerda escribir 'stage.update()' al final, para que se
  // vean los cambios.
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 8 EVENTO 'dblclick'
  //----------------------------------------------------------
  // El evento 'dblclick' es capturado por un objeto gráfico
  // cuando se hace 'doble clic' sobre el objeto.
  //----------------------------------------------------------
  // Añade a 'r' como manejador para el evento 'dblclick'
  // la función 'manejadorR'.
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 9
  //----------------------------------------------------------
  // Crea un texto con tu nombre, tamaño de fuente 100,
  // color verde, color de fondo gris oscuro
  // ('backgroundColor: dark'), en negrita ('bold: true'),
  // esquinas redondeadas ('corner: 5').
  // Ponle de nombre 't'.
  // Pon el punto de registro de 't' en su centro mediante:
  // 't.centerReg();'
  // Coloca 't' en el centro, y luego desplázalo 200 píxeles
  // hacia abajo.
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 10
  //----------------------------------------------------------
  // Define una función llamada 'manejadorT'
  // que gire 3 grados el texto.
  // Recuerda escribir 'stage.update()' al final, para que se
  // vean los cambios.
  //----------------------------------------------------------

  //----------------------------------------------------------
  // 11 EVENTO 'pressmove'
  //----------------------------------------------------------
  // El evento 'pressmove' es capturado por un objeto gráfico
  // cuando, después de haber pulsado el botón izquierdo del
  // ratón sobre el objeto, y sin soltarlo, se mueve el ratón.
  //----------------------------------------------------------
  // Añade a 't' como manejador para el evento 'pressmove'
  // la función 'manejadorT'.
  //----------------------------------------------------------

  stage.update();
});
