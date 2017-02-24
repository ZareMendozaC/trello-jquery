function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getObjectLocalStorage(key) {
    var value = localStorage.getItem(key);
    return JSON.parse(value);
}

function isAlphabetic(cadena)
{
      if (cadena.match(/^[a-zA-Z]+$/))
      {
        return true;
      }
      else
      {
        return false;
      }
}
function isEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
    {
        return false;
    }
    return true;
}

function borrarEspacios(frase){
  var contador=0;
  for(var i=0; i<=frase.length; i++){
     frase = frase.replace(" ",'');
    contador++;
    }
  if(contador>0){
    return frase;
  }else{
    return frase;
  }
}
$(document).ready(function() {
    $('#login').click(validate);
});

function validate(){
	var nombre= $('#nombre').val();
	var nick= $('#nick').val();
	var mail= $('#mail').val();
	var radio= $('#hombre');
	
	var nombre= borrarEspacios(nombre);
	var isvalid= true;
  	 if(isAlphabetic(nombre))
  	 {
  	 	var nombreApe= $("#nombre").val();
    	var misDatos=nombreApe.split(" "); // SACAR LOS DATOS
    	var datos="";
    		for(var i=0; i<misDatos.length; i++)
    		{
      			if(misDatos[i]!=" ")
      			{
        			datos= datos+misDatos[i];
        			datos= datos+" ";
      			}
    }
    setObjectLocalStorage('nombre',datos);
  	 }else
  	 {
  	 	isvalid= false;
  	 }


  	 /*
	if(hombre.is(':checked'))
		alert('elegiste hombre');
	else 
		{
		alert('elegiste mujer');
		}
		*/
}