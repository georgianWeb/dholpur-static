$(function () {

    $(window).on('load', function () {
        $(' input[type="text"]').val('');
    });

    $('.submit').click(function () {

        $('input.form-control').each(function () {
            var getVal = $(this).val();
            console.log("input", getVal);

            if (getVal == "") {
                $(this).parents('.field-group').addClass('blank-error');
                $(this).addClass('error-in');
                $(this).parents('.input-wrap').after('<ul class="input-error-message"></ul>');
            } else {
                $(this).closest('.field-droup').removeClass('blank-error');
                $(this).removeClass('error-in');
            }

        });

        $('.field-group').each(function () {
            if ($(this).hasClass('blank-error')) {
                $(this).find('.input-error-message').append('<li><label class="error-label">please fill this field is required</label></li>');
            }
            var errLength = $('.input-error-message').length;
            console.log("errmsg", errLength);
            if (errLength > 1) {
                $('ul.input-error-message').remove();

            }
        });
    });


    $('input.form-control').blur(function () {
        var getVal = $(this).val();
        if (getVal !== "") {
            $(this).closest('.field-droup').removeClass('blank-error');
            $(this).removeClass('error-in');
            $(this).parents('.field-group').children('ul.input-error-message').remove();
            console.log("not null");
        }

    });


});

