$(document).ready(function() {
    // Al presionar el cuadro de color...
    $(".cuadro").click(function() {
        // ... se le pone el atributo src al iframe para que cargue la página
        $("#php").attr("src","https://sitiofandom.000webhostapp.com/php/retorna5.php?msg=si");
    });
});

window.addEventListener('message', event => {
    // Comprobamos si el mensaje viene de el sitio que queremos
    if (event.origin.startsWith("https://sitiofandom.000webhostapp.com")) {
        alert(event.data)
    }
})
