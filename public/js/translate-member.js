$('button#translate').click( function (e) {

        // document.getElementById('captcha').innerHTML="<br>Captcha completed <br>";
        $.ajax({
            url : "translate",
            type : "post",
            dataType:"text",
            beforeSend: function (xhr) {
                var token = $('meta[name="csrf_token"]').attr('content');
    
                if (token) {
                    return xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            },
            data : {
                text : $('textarea#input').val(),
                input : $('button#btn-input').val(),
                segmentor : $('input[type=checkbox]').prop('checked')

            },
            success : function (result){
                $('textarea#output').val(result);


            }
        });

    

});
