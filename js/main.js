(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
    var terms = $('#terms');
    var referralCode = $('input[name="referralCode"]');
    var username = $('input[name="username"]');

    $('.validate-form').on('submit', function (event) {
        var check = true;

        if (!terms.is(':checked')) {
            showValidate(terms);
            check = false;
        } else {
            hideValidate(terms);
        }

        if (!referralCode.val().trim().match(/^[A-Za-z0-9]{6}$/)) {
            showValidate(referralCode);
            check = false;
        } else {
            hideValidate(referralCode);
        }

        if (!username.val().trim().match(/^[A-Za-z0-9]{5,}$/)) {
            showValidate(username);
            check = false;
        } else {
            hideValidate(username);
        }

        for (var i = 0; i < input.length; i++) {
            if (input[i] != username[0] && validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (!check) {
            event.preventDefault();
        }
    });

    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    $("#terms").on("change", function() {
        if (this.checked) {
            hideValidate(this);
        }
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);
