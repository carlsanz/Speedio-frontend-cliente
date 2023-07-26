function landingPage() {
    document.getElementById("lading-page").style.display="none"
    document.getElementById("inicio-sesión").style.display="block"
   

}


function ingreso() {
    document.getElementById("lading-page").style.display="none"
    document.getElementById("inicio-sesión").style.display="none"
    document.getElementById("restaurantes").style.display="block"

    
}



    function validarFormulario() {
        const emailInput = document.getElementById('email');
        const contrasenaInput = document.getElementById('contrasena');
  
        const email = emailInput.value;
        const contrasena = contrasenaInput.value;
  
        // Expresión regular para validar el email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (regexEmail.test(email)) {
          
        } else {
          alert('Email inválido');
          return;
        }
  
        // Verificar que la contraseña tenga al menos 6 caracteres
        if (contrasena.length < 6) {
          alert('La contraseña debe tener al menos 6 caracteres');
        } else {
          ingreso()
        }

      }

    



  
