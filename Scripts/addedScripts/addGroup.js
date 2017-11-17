var room = 1;
function contact_fields() {
 
    room++;
    var objTo = document.getElementById('contact_fields')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;
    divtest.innerHTML = '<div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Name" name="Name[]" value="" placeholder="Name"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Last Name" name="Last Name[]" value="" placeholder="Last Name"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Email" name="Phone Number[]" value="" placeholder="Phone Number"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><div class="input-group"><input type="text" class="form-control" id="Email" name="Email[]" value="" placeholder="Email"><div class="input-group-btn"><button class="btn btn-dark" type="button" onclick="remove_contact('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div><div class="clear"></div>';
    
    objTo.appendChild(divtest)
}
   function remove_contact(rid) {
	   $('.removeclass'+rid).remove();
   }

   function closeModal(){
    
    $('#assign').modal('hide');
    
    }
    