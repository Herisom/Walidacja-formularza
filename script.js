$(document).ready(function() {
    $("#myForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name: {
                required: "Proszę podać swoje imię",
                minlength: "Imię musi składać się z co najmniej 2 znaków"
            },
            email: {
                required: "Proszę podać adres e-mail",
                email: "Proszę podać poprawny adres e-mail"
            },
            password: {
                required: "Proszę podać hasło",
                minlength: "Hasło musi mieć co najmniej 6 znaków"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
