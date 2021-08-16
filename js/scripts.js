function validar(){


    var nombre, apellido, email, direccion, validamail, validanombre;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    direccion = document.getElementById("direccion").value;
    
        
    validanombre = /[a-z]/;
    validamail = /\w+@\w+\.+[a-z]/;  // declaramos una expresion regular para validar el campo correo electrónico


    if (nombre === "" || apellido === "" || email === "" || direccion === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if ((nombre.length>30) || (!validanombre.test(nombre))){
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellido.length>40){
        alert("El apellido es muy largo");
        return false;
    }
    else if (email.length>30){
        alert("El correo es muy largo");
        return false;
    }
    else if (direccion.length>40){
        alert("El usuario y la contraseña sólo deben tener 40 caracteres como máximo");
        return false;
    }
     else if (!validamail.test(email)){
        alert("El correo no es válido");
        return false;
    }

    var saludo = "Bienvenido " + nombre + apellido + "!!!. Gracias por registrarte" ;
    
    alert(saludo);

    /* 
    else if (!validamail.test(email)){
        alert("El correo no es válido");
        return false;
    }
    
    
    var saludo = "Bienvenido " + nombre + apellido + "!!!. Gracias por registrarte" ;
    
    alert(saludo);*/
}