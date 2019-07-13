$(document).ready(function () {

    $("#search-form").submit(function (event) {

        //cancela la acción del evento para que se haga manualmente
        event.preventDefault();
        fire_ajax_submit();

    });

});

function fire_ajax_submit() {

    var producto = {

        numerotarjeta: $("#descripcion").val(),
        ccv: $("#ccv").val(),
        mes: $("#mes").val(),
        anio: $("#anio").val(),
        monto: $("#precio").val(),
        respuesta: "Ok"
    }
    console.log("Objeto JavaScript: ", producto.descripcion);

    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/enviarmov",
        data: JSON.stringify(producto),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Pago realizado con Tarjeta:</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

            console.log("SUCCESS : ", data);
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax Response Error</h4><pre>"
                + e.responseText + "</pre>";
            var d = JSON.parse(e.responseText);
            alert(d.message);
            $('#feedback').html(d.message);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}