function transfermodal(){

  roomTransfer(); 
  $('#roomTransfer').append(

    '<div class="modal-dialog" role="document">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
        '<h4 class="modal-title" id="myModalLabel">Transferring Of Rooms</h4>'+
      '</div>'+
      '<div class="addrommerror">'+'</div>'+  
      '<div class="modal-body">'+
          
        '<form class="form-horizontal">'+
              '<div class="form-group">'+
                 
                '<label for="inputAddRoom" class="col-sm-4 control-label">Current Room Number: </label>'+
                '<div class="col-sm-6">'+
                '<input type="text" id="transferUser_id" hidden/>'+
                '<input type="text" id="transferoccu_id" hidden/>'+
                   '<select class="form-control" id="transfer_roomuser" oninput="queryTransfer()" style="width:60%">'+
                  '<option></option>'+
                  '</select>'+
                '</div>'+
              '</div>'+
              '<!---->'+
              '<div class="form-group">'+
                '<label for="inputCapacity" class="col-sm-4 control-label">User Information : </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" id="transfer_user" disabled>'+
                '</div>'+
              '</div>'+
              '<!---->'+
              '<div class="form-group">'+
                '<label for="inputCapacity" class="col-sm-4 control-label">Room Rate : </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" id="transfer_roomRate" disabled>'+
                '</div>'+
              '</div>'+
              '<!---->'+
               '<div class="form-group">'+
                '<label for="inputCapacity" class="col-sm-4 control-label">Room Type : </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" id="transfer_rType" disabled>'+
                '</div>'+
              '</div>'+
              '<!---->'+
               '<div class="form-group">'+
                '<label for="inputCapacity" class="col-sm-4 control-label">Room Class : </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" id="transfer_rClass" disabled>'+
                '</div>'+
              '</div>'+
              '<!---->'+
              '<hr/>'+
              '<div class="form-group">'+
                '<label for="inputAddRoom" class="col-sm-4 control-label">Transfer to New Room: </label>'+
                '<div class="col-sm-6">'+
                  '<select class="form-control" id="transferRoom" oninput="querytransferTo()" style="width:60%">'+
                  '<option></option>'+
                  '</select>'+
                '</div>'+
              '</div>'+
              '<!---->'+
              '<div class="form-group">'+
                '<label for="inputCapacity" class="col-sm-4 control-label">Room Rate : </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" id="transferTo_rate" disabled>'+
                '</div>'+
              '</div>'+
              '<!---->'+
               '<div class="form-group">'+
                '<label for="inputCapacity" class="col-sm-4 control-label">Room Type : </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" id="transferTo_roomType" disabled>'+
                '</div>'+
              '</div>'+
              '<!---->'+
               '<div class="form-group">'+
                '<label for="inputCapacity" class="col-sm-4 control-label">Room Class : </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" id="transferTo_roomClass" disabled>'+
                '</div>'+
              '</div>'+
           
        '</form>'+

      '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '<button type="button" class="btn btn-primary" onclick="transferToRoom()">Confirm</button>'+
      '</div>'+
    '</div>'+
  '</div>'
    );


}
