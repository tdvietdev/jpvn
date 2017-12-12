$('button#translate').click( function (e) {

    var v = grecaptcha.getResponse();
    if(v.length == 0)
    {
        // document.getElementById('captcha').innerHTML="<br>You can't leave Captcha Code empty <br>";
        return false;
    }
    else
    {
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
                token : grecaptcha.getResponse(),
                segmentor : "false"
            },
            success : function (result){
                $('textarea#output').val(result);
                grecaptcha.reset();

            }
        });
    }
    

});
