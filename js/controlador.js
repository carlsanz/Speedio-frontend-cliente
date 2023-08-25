
  let restaurant=[];
  let botonIngresar = document.getElementById("boton-inicio-sesion");

  let usertxt = document.getElementById("email");
  let passwordtxt = document.getElementById("contrasena");
  let divProducto = document.getElementById("contenedor-productos-individuales");
  let botonAgregarProducto = document.getElementById("boton-producto");



botonIngresar.addEventListener("click", () => {
  loginUser(usertxt.value, passwordtxt.value);
});


const loginUser = async (user, password) => {

  let respuesta = await fetch(`http://localhost:3000/usuarios/login`, {
      method: 'POST',
      headers: {
          
          "Content-Type": "application/json", //MIME Type
      },
      body: JSON.stringify(
          {
              "correo_electronico": `${user}`,
              "contrasena": `${password}`
          }
      )
      
  });
  
  let usuario = await respuesta.json();
  
  if(usuario.status==true){
    ingreso();
  }else {
    validarFormulario();
  }
}
// 


// 
//ingreso a registrarse
function landingPage() {
    document.getElementById("lading-page").style.display="none"
    document.getElementById("inicio-sesión").style.display="block"
    document.getElementById("restaurantes").style.display="none"
    document.getElementById("registrarte").style.display="none"
    document.getElementById("restaurante-individual").style.display="none";
    document.getElementById("credit-card").style.display="none";
    document.getElementById("direccion").style.display="none";
    document.getElementById("pedidos").style.display= "none"
   

}



//ingreso a restaurantes
const ingreso = async()=> {

  let respuesta = await fetch(`http://localhost:3000/restaurantes`, {
      method: 'GET',
      headers: {
          "Content-Type": "application/json", //MIME Type
      }
  });
  let restaurantes = await respuesta.json();
  console.log(restaurantes);
  restaurant=restaurantes;

  document.getElementById("contenedor-restaurantes").innerHTML =""; 
    document.getElementById("lading-page").style.display="none"
    document.getElementById("inicio-sesión").style.display="none"
    document.getElementById("restaurantes").style.display="block"
    document.getElementById("registrarte").style.display="none"
    document.getElementById("restaurante-individual").style.display="none";
    document.getElementById("carrito-compras").style.display="none";
    document.getElementById("credit-card").style.display="none";
    document.getElementById("direccion").style.display="none";
    document.getElementById("pedidos").style.display= "none"

   for (let i = 0; i < restaurantes.length; i++) {
    document.getElementById("contenedor-restaurantes").innerHTML += 
    `<div id="${restaurantes[i].nombre}" class="restaurante" onclick="restauranteIndividual(this)">
      <img src=${restaurantes[i].imagen} alt="" >
    </div>`
    
   }
   document.getElementById("inicio-cambio").style.color="#C6382C";
   
  
}



//funcion Generar Registro
const registro = async() => {
 
  document.getElementById("lading-page").style.display="none"
  document.getElementById("inicio-sesión").style.display="none"
  document.getElementById("restaurantes").style.display="none"
  document.getElementById("registrarte").style.display="block"
  document.getElementById("restaurante-individual").style.display="none";
  document.getElementById("carrito-compras").style.display="none";
  document.getElementById("credit-card").style.display="none";
  document.getElementById("direccion").style.display="none";
  document.getElementById("pedidos").style.display= "none"
}

const agregarNuevoUsuario= async ()=>{
  
  let respuesta = await fetch(`http://localhost:3000/usuarios/nuevo`, {
      method: 'POST',
      headers: {
          
          "Content-Type": "application/json", //MIME Type
      },
      body: JSON.stringify(
          {
            "nombre":`${document.getElementById("nombre-usuario").value}`,
            "apellido":`${document.getElementById("apellido-usuario").value}`,
            "telefono":`${document.getElementById("telefono-usuario").value}`,
            "correo_electronico":`${document.getElementById("email-usuario").value}`,
            "contrasena":`${document.getElementById("contrasena-usuario").value}`
          }
      )
      
      
  });
  
  let usuario = await respuesta.json();
  console.log(usuario);
  landingPage();

}


function restauranteIndividual(element) {

  console.log(element.id);
  const indice = restaurant.findIndex((restaurante) => restaurante.nombre === element.id);
  console.log(indice);
    document.getElementById("contenedor-menus").innerHTML =""; 
    document.getElementById("contenedor-banner").innerHTML = "";

    document.getElementById("lading-page").style.display="none";
    document.getElementById("inicio-sesión").style.display="none";
    document.getElementById("restaurantes").style.display="none";
    document.getElementById("registrarte").style.display="none";
    document.getElementById("restaurante-individual").style.display="block";
    document.getElementById("carrito-compras").style.display="none";
    document.getElementById("credit-card").style.display="none";
    document.getElementById("direccion").style.display="none";
    document.getElementById("pedidos").style.display= "none"


    document.getElementById("contenedor-banner").innerHTML = 
      `<img style="margin: 10px 10px 10px 10px; width: 100%;" src="${restaurant[indice].banner}" alt="">`;

  for (let i = 0; i< restaurant[indice].menu.length; i++) {
    document.getElementById("contenedor-menus").innerHTML += 
    ` <div id="menu-individual">
          <div id="contenedor-imagen-menu">
            <img src="${restaurant[indice].menu[i].img}" alt="">
          </div>
        <div id="contenedor-productos-individuales">
          <p id="nombre-producto">${restaurant[indice].menu[i].nombre_plato}</p>
          <p id="descripcion-producto">${restaurant[indice].menu[i].nombre_plato}</p>
          <p id="precio-producto">Precio: L.${restaurant[indice].menu[i].precio}</p>
          <button id="boton-producto">Añadir al carrito</button>
        </div> 
      </div>`;  

     
  }
  
}

// 
// botonIngresar.addEventListener("click", () => {
//   loginUser(usertxt.value, passwordtxt.value);
// });

// document.getElementById("contenedor-productos-individuales").addEventListener('click', () => {
//   // Obtén todos los elementos dentro del div
//   const elementos = divProducto.querySelectorAll('p');
//   const valores = [];

//   // Itera a través de los elementos y obtén su contenido
//   elementos.forEach(elemento => {
//       valores.push(elemento.textContent);
//   });

//   // Haz algo con los valores, por ejemplo, muestra en la consola
//   console.log(valores);
// });









// 

function carShopping(){
  

  document.getElementById("icon-shopping-car").style.color="#C6382C";

    document.getElementById("lading-page").style.display="none";
    document.getElementById("inicio-sesión").style.display="none";
    document.getElementById("restaurantes").style.display="none";
    document.getElementById("registrarte").style.display="none";
    document.getElementById("restaurante-individual").style.display="none";
    document.getElementById("carrito-compras").style.display="block";
    document.getElementById("credit-card").style.display="none";
    document.getElementById("direccion").style.display="none";
    document.getElementById("pedidos").style.display= "none"

}

function agregarTarjeta () {
   document.getElementById("lading-page").style.display="none";
    document.getElementById("inicio-sesión").style.display="none";
    document.getElementById("restaurantes").style.display="none";
    document.getElementById("registrarte").style.display="none";
    document.getElementById("restaurante-individual").style.display="none";
    document.getElementById("carrito-compras").style.display="none";
    document.getElementById("credit-card").style.display="block";
    document.getElementById("direccion").style.display="none";
    document.getElementById("pedidos").style.display= "none"
}

function agregarDireccion () {
  document.getElementById("lading-page").style.display="none";
   document.getElementById("inicio-sesión").style.display="none";
   document.getElementById("restaurantes").style.display="none";
   document.getElementById("registrarte").style.display="none";
   document.getElementById("restaurante-individual").style.display="none";
   document.getElementById("carrito-compras").style.display="none";
   document.getElementById("credit-card").style.display="none";
   document.getElementById("direccion").style.display="block";
   document.getElementById("pedidos").style.display= "none"
}

function estadoPedido() {
  document.getElementById("lading-page").style.display="none";
   document.getElementById("inicio-sesión").style.display="none";
   document.getElementById("restaurantes").style.display="none";
   document.getElementById("registrarte").style.display="none";
   document.getElementById("restaurante-individual").style.display="none";
   document.getElementById("carrito-compras").style.display="none";
   document.getElementById("credit-card").style.display="none";
   document.getElementById("direccion").style.display="none";
   document.getElementById("pedidos").style.display= "block"

}



    function validarFormulario() {
      return alert('Email invalido o contraseña incorrecta');
    }




  
