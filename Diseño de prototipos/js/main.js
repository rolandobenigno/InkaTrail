$(document).ready(function () {

    $("#search-form").submit(function (event) {

        //cancela la acción del evento para que se haga manualmente
        event.preventDefault();
        fire_ajax_submit();

    });

});

function fire_ajax_submit() {

     var producto = {
                 descripcion: $("#descripcion").val(),
                 precio: $("#precio").val()
     }
     console.log("Objeto JavaScript: ", producto.descripcion);

    $("#btn-search").prop("disabled", true);

     $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/producto",
        data: JSON.stringify(producto),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Ajax Response</h4><pre>"
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