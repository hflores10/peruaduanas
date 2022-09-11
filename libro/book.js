var name1= document.getElementById('nombre');
var surname=document.getElementById('apellido');
var home=document.getElementById('domicilio');
var exhibit=document.getElementById('documento');
var email1=document.getElementById('correo');

var button= document.getElementById('boton');
button.addEventListener('click',prueba);
var data1=[1,2,3];

  function prueba() {
  var data=[];
  data.push(name1.value);
  data.push(surname.value);
  data.push(home.value);
  data.push(exhibit.value);
  /*data.push(email.value);
  document.write(data); */
  if(data[0]!=='' && data[1]!=='' && data!=='' && data[3]!==''){
    console.log(data);
    return document.write('Estimado '+data[0]+' '+data[1]+ 'su reclamo ha sido registrado.'+'<br/>'+
    'En breve un representante lo contactará para ayudarlo');

  }
  else
      { console.log(data);
        
        /* return document.write("Por favor rellenar todos los campos")
        */
      }
}