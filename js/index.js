function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getObjectLocalStorage(key) {
    var value = localStorage.getItem(key);
    return JSON.parse(value);
}

$(document).ready(function() {
    $('#login').click(validate);
});

function validate(){
	var nombre= $('#nombre').val();
	var nick= $('#nick').val();
	var hombre= $('#hombre');
	var mujer= $('mujer');

	if(hombre.is(':checked'))
		alert('elegiste hombre');
	else 
		{
		alert('elegiste mujer');
		}
}