function modalStartUp(){
   
  $('#AddRoom').append(

    '<div class="modal-dialog" role="document">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
        '<h4 class="modal-title" id="myModalLabel">Add New Room</h4>'+
      '</div>'+
      '<div class="addrommerror">'+'</div>'+  
      '<div class="modal-body">'+
        
        '<form class="form-horizontal">'+
              '<div class="form-group">'+
                '<label for="inputAddRoom" class="col-sm-4 control-label">Add Room Number: </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" id="addroomNumber" class="form-control" placeholder=" ex. 1A">'+
                '</div>'+
              '</div>'+
              '<!---->'+
              '<div class="form-group">'+
                '<label for="inputRoomClass" class="col-sm-4 control-label">Room Class</label>'+
                '<div class="col-sm-6">'+
                    '<select class="form-control" id="addroomtypeA">'+
                        '<option>Pad</option>'+
                        '<option>Dorm</option>'+
                    '</select>'+
                '</div>'+
              '</div>'+
              '<!---->'+
                '<div class="form-group">'+
                '<label for="inputRoomClass" class="col-sm-4 control-label">Room Class</label>'+
                '<div class="col-sm-6">'+
                    '<select class="form-control" id="addroomtypeB">'+
                        '<option>Aircon</option>'+
                        '<option>Non-Aircon</option>'+
                    '</select>'+
                '</div>'+
              '</div>'+
              '<!---->'+
              '<div class="form-group">'+
                '<label for="inputCapacity" class="col-sm-4 control-label">Capacity: </label>'+
                '<div class="col-sm-6">'+
                  '<input type="number" class="form-control" id="addroomCapacity" placeholder=" ex. 6">'+
                '</div>'+
              '</div>'+
              '<!---->'+

              '<div class="form-group">'+
                '<label for="inputRateRoom" class="col-sm-4 control-label">Rate: </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" placeholder="&#8369; " id="addroomRate">'+
                '</div>'+
              '</div>'+
              '<!---->'+
           
        '</form>'+

      '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '<button type="button" class="btn btn-primary" onclick="addRoomModalFunction()">Save room</button>'+
      '</div>'+
    '</div>'+
  '</div>'
    );


}