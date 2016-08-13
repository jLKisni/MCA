function depositmodal(){

  
  $('#AddDeposit').append(

    '<div class="modal-dialog" role="document">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
        '<h4 class="modal-title" id="myModalLabel">Partial Deposit Payment</h4>'+
      '</div>'+
      '<div class="addrommerror">'+'</div>'+  
      '<div class="modal-body">'+
        
        '<form class="form-horizontal">'+
              '<div class="form-group">'+
                '<label for="inputAddRoom" class="col-sm-4 control-label">Room No/Bed No: </label>'+
                '<div class="col-sm-6">'+ 
                   '<select class="form-control" id="dep_roomNumber" oninput="depGetRoomNumber()">'+
                    '<option></option>'+
                  '</select>'+
                '</div>'+
                
              '</div>'+
              '<!---->'+
              '<div class="form-group">'+
                '<label for="inputCapacity" class="col-sm-4 control-label">Occupant Name : </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" id="dep_name" disabled>'+
                '</div>'+
              '</div>'+
              '<!---->'+

              '<div class="form-group">'+
                '<label for="inputRateRoom" class="col-sm-4 control-label">Deposit Amount : </label>'+
                '<div class="col-sm-6">'+
                  '<input type="text" class="form-control" placeholder="&#8369; " id="dep_amount">'+
                '</div>'+
              '</div>'+
              '<!---->'+
              '<input type="text" id="dep_ai_id" hidden>'+
              '<input type="text" id="dep_contract_id" hidden>'+
        '</form>'+

      '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '<button type="button" class="btn btn-primary" onclick="addDeposit()">Submit</button>'+
      '</div>'+
    '</div>'+
  '</div>'
    );


}/*DepositModal*/