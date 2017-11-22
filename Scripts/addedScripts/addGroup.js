var room = 1;
function contact_fields() {
 
    room++;
    var objTo = document.getElementById('contact_fields')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;
    //divtest.innerHTML = ; 

    objTo.appendChild(divtest)
}
   function remove_contact(rid) {
	   $('.removeclass'+rid).remove();
   }

   function closeModal(){
    
    $('#assign').modal('hide');
    
    }
    