window.addEventListener("DOMContentLoaded", function () {
    const checkb = document.getElementById("aceptotérminosycondiciones")
    var pwd1field = document.getElementById("pwd1")
    var pwd2field = document.getElementById("pwd2")
    console.log(pwd1field)

    checkb.addEventListener('change', function (everifypwd) {

        var pwd1 = document.forms[0].elements[4].value
        var pwd2 = document.forms[0].elements[5].value
        var sizepwd1 = pwd1.length
        var sizepwd2 = pwd2.length

        if (sizepwd1 != sizepwd2) {
            alert("Error: ambas contraseñas deben coincidir")
            pwd1field.value = ""
            pwd2field.value = ""
        }
        else {
            for (index = 0; index < sizepwd1; index++) {
                if (pwd1.charAt(index) != pwd2.charAt(index)) {
                    alert("Error: ambas contraseñas deben coincidir")
                    pwd1field.value = ""
                    pwd2field.value = ""
                    break
                }
            }
        }

    })

})

