
$(document).ready(function() {

    var contadorTareas = 0;

    $('body').keyup(function(tecla) {
        // cuando presionas enter
        if (tecla.keyCode == 13) {
            // Recibe el valor ingresado en el input
            var chatInput = $('#chatInput').val();
            console.log(chatInput);
            // si no ingresan tareas
            if (chatInput === '') {
                alert('Debes ingresar un mensaje');
            } else {
            	//array par guardar las tareas 
                var tareas = [];
                var mensajechat = $('#mensajenuevo').append('<div class="col-md-12 text-right div-mensajes"><span id="mensajenuevo" class="mensaje-right">'+ chatInput + '</span></div>');
                // Deja vacio el input luego de escribir en el
                $('#chatInput').val('');
                tareas.push(mensajechat);

                // completar las tareas por id
                $('#newtareainicial-' + contadorTareas).click(function() {
                    var completado = $('#comentarioslistos').append($(this).parent());
                });

                contadorTareas++;
            }
        }
    });

});

