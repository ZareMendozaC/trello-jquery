	function tablero (_name){
	this.name=_name;
	this.listaTareas=[];
	
	this.getName = function(){
		return this.name;
	}
	this.setName = function(_newName){
		this.name=_newName;
		return this.name;
	}
	this.agregarTarea=function(_tarea)
	{
		this.listaTareas.push(_tarea);
	}
	this.getLista=function(_position){
		return this.listaTareas[_position];
	}
	this.printLista= function(){
		var tam= this.listaTareas.length;
		if(tam==0)
		{
			alert("no hay tareas");
		}
		for( var i=0 ; i<tam; i++)
		{
			console.log(this.listaTareas[i].name);
		}
	}
	function cerrar(evt){
		evt.target.parentNode.childNodes[2].className="none";
		evt.target.parentNode.childNodes[3].className="none";
		evt.target.parentNode.childNodes[4].className="none";
	}
	function appendTarjeta(evt)
	{
		var formTarjetas= evt.target.parentNode.childNodes;
		var ulTarjeta=evt.target.parentNode.childNodes[5];
		evt.target.parentNode.childNodes[2].style.visibility="visible";
		//console.log(ulTarjeta);
		var li= document.createElement("li");
		li.textContent= evt.target.parentNode.childNodes[2].value;
		ulTarjeta.appendChild(li);
		evt.target.parentNode.childNodes[2].value= ' ';
		evt.target.parentNode.childNodes[2].focus();
		evt.target.parentNode.childNodes[4].addEventListener('click',cerrar);
		//evt.target.parentNode.childNodes[1].textContent= "Añadir una tarjeta";
	}
	function addTarjeta(evt){
		//console.log(evt.target.parentNode);
		evt.target.style.display='collapse';
		var mibutton= document.createElement("button");
		var mibuttonce= document.createElement("button");
		mibutton.className= "btn btn-success x";
		mibutton.textContent= "añadir";
		mibuttonce.className= "btn y";
		mibuttonce.textContent= "x";
		var text= document.createElement("textarea");
		text.id= "inputText";
		var ulTarjeta= document.createElement("ul");
		ulTarjeta.id= "listadeTarjetas";
		evt.target.parentNode.appendChild(text);
		evt.target.parentNode.appendChild(mibutton);
		evt.target.parentNode.appendChild(mibuttonce);
		evt.target.parentNode.appendChild(ulTarjeta);
		mibutton.addEventListener('click',appendTarjeta);
		text.focus();
	}
	function añadirTarjetas(evt){
		var myInput= document.getElementById('inputTarjeta').value;
		if(myInput!='')
		{
			var newTarea= new tarea(myInput);
			var ulLista= document.getElementById("listaTarjetas");
			//console.log(ulLista);
			var li = document.createElement("LI"); 
			li.className="formTarjetas";
			var p= document.createElement("p");
			var nombre= document.createTextNode(newTarea.name);
			p.appendChild(nombre);
			p.className=("nombreLista");
			var input= document.createElement("INPUT");
			input.id= "inputTarjeta";
			input.placeholder= "Añadir una tarjeta...";
			var pe= document.createElement("p");
			pe.textContent="Añadir una tarjeta...";
			pe.addEventListener('click',addTarjeta);
			li.appendChild(p);
			li.appendChild(pe);
			ulLista.appendChild(li);
			var myInput= document.getElementById('inputTarjeta').value='';
			document.getElementById('inputTarjeta').focus();
		 }
		 else{
		 	var myInput= document.getElementById('inputTarjeta').value='';
			document.getElementById('inputTarjeta').focus();
		 }
	}
    function agregarTareas(evt){
		var miTablero= document.getElementById("mitablero");
		miTablero.innerHTML='<ul class="listaTarjetas" id="listaTarjetas"><li class="formTarjetas"><input id="inputTarjeta" placeholder="Añadir una lista..."></input><br><button class="btn btn-success">Añadir</button></li></ul>';
	    var mibutton= miTablero.childNodes[0].childNodes[0].lastChild;
	    mibutton.addEventListener('click',añadirTarjetas);
	}
	this.drawTablero=function(){
		var tablero= document.getElementById('tablero');
		var node = document.createElement("LI"); 
		node.className= 'elemenTablero';
		var p= document.createElement("P");
		var nombre= document.createTextNode(this.name);
		p.appendChild(nombre);
		node.appendChild(p);
		tablero.appendChild(node);
		node.addEventListener('click',agregarTareas);
	}
}
function tarea(_name){
	this.name=_name;
	this.listaTarjetas=[];
	this.getName = function(){
		return this.name;
	}
	this.setName = function(_newName){
		this.name=_newName;
		return this.name;
	}
	this.aregarTarjeta=function(_tarjeta)
	{
		this.listaTarjetas.push(_tarjeta);
	}
	this.getLista=function(_position){
		return this.listaTarjetas[_position];
	}
	this.printLista= function(){
		var tam= this.listaTarjetas.length;
		if(tam==0)
		{
			alert("no hay tarjetas");
		}
		for( var i=0 ; i<tam; i++)
		{
			console.log(this.listaTarjetas[i].name);
		}
	}
}
function tarjeta(_name){
	this.name=_name;
	this.comments=[];
		this.getName = function(){
		return this.name;
	}
	this.setName = function(_newName){
		this.name=_newName;
		return this.name;
	}
	this.agregarComentario = function(_coment){
		this.comments.push(_coment);
	}
	this.printComents=function()
	{
		var tam= this.comments.length;
		if(tam==0)
		{
			alert("no hay comentarios");
		}
		for( var i=0 ; i<tam; i++)
		{
			console.log(this.comments[i]);
		}
	}
}


function crearTablero()
{
	var listaDeTableros= document.getElementById('listaDeTableros');
	if( !createdDiv) {//
		var miDiv= '<h5 class="text-center">Crear Tablero</h5><hr>'+
						'<label>Titulo</label><br>'+
						'<input type="text" id="nombreTablero" name="" placeholder="¿Qué está organizando?"><br>'+
						'<button class="btn btn-success " id="crearTableroButton">Crear</button>';
		listaDeTableros.innerHTML= miDiv;
		createdDiv = true;//
		showingDiv = true;//
	} else {//

		if(showingDiv) {//
			listaDeTableros.style.display = 'none';//
			showingDiv = false;//
		} else {//
			listaDeTableros.style.display = 'block';//
			showingDiv = true;//
		}//
	}//
	var nombreTablero= document.getElementById("nombreTablero");
	nombreTablero.focus();
	var mibutton= document.getElementById("crearTableroButton");
	mibutton.addEventListener('click',agregarTableros);
}

function agregarTableros(evt){
	var nombreTablero= document.getElementById("nombreTablero").value;
	var miTablero= new tablero(nombreTablero);
	miTablero.drawTablero();
	var listaDeTableros= document.getElementById('listaDeTableros');
	listaDeTableros.style.display = 'none';//

}

var createdDiv = false;//
var showingDiv= false;//

//crearTablero();