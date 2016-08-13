$(document).ready(function(){    
  $('#editRoom').click(function(){
    
      var url = "../php-db/ajax.php?action=roomlist";
                $.getJSON(url,function(result){
                for(var i=0;i<result.length;i++){
                  var c = result[i];
                        addRoomToTable(c);
                      
                   }
                });

                  function addRoomToTable(data){
                     
                        if(data.status1 == 0)
                        {
                        $('#editRoomDisplay').append(
                          '<tr data-id="'+data.room_id+'">'+
                          '<td >'+data.room_number+'</td>'+
                          '<td >'+data.room_typeA+'</td>'+
                          '<td >'+data.room_typeB+'</td>'+
                          '<td >Vacant</td>'+
                          '<td >&#8369; '+data.rate+'</td>'+
                          '<td><button class="btn btn-danger"><i  class="glyphicon glyphicon-trash" onclick="deleteRoom('+data.room_id+')"></i></button><button class="btn btn-primary" style="margin-left:10px;" onclick="editroom('+data.room_id+')"><i class="glyphicon glyphicon-pencil"></i></button></td>'+
                          '</tr>');
                        }
                      
                    }


  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(2)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').removeClass('active');
  $('#form-sidebar li:nth-child(4)').removeClass('active');
  $('#form-sidebar li:nth-child(5)').removeClass('active');
  $('#four').removeClass('active');
  $('#six').removeClass('active'); 

   $('#CheckOutForm').empty();
  $('.table-responsive').empty();
  $('#RegistrationForm').empty();
  $('.table-responsive').empty();
  $('#UtilityFormPanel').empty(); 
  $('#changepassword').empty();
  $('#showprofile').empty();
  $("#CheckOutForm").empty();
  $('#editprofile').empty();
  $('#roomstatuslayoutform').empty();
  $(".table-responsive").empty();
  $('.table-responsive').empty();
  $('#RegistrationForm').empty();
  $('#CheckOutForm').empty();
  $("#room_status").empty();
  $('#roomEdit').empty();
  $('#transactionLogs').empty();
  $('#endOccupant').empty();
  $('#editableRoom').empty();
  $('#mca_tracker').empty();
       $('#PaymentUtility').empty();
        $("#roomEdit").append(
            '<div class="panel">'+
            '<div class="panel-body" >'+
            '<h3>Edit / Delete Rooms</h3>'+
            '<table class="table table-hover">'+
              '<thead>'+
                '<tr>'+
                  '<th>Room No.</th>'+
                  '<th>Room Class</th>'+
                  '<th>Room Type</th>'+
                  '<th>Status</th>'+
                  '<th>Room Rate</th>'+
                  '<th>More Options</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody id="editRoomDisplay">'+
                
                
              '</tbody>'+
            '</table>'+
            '</div>'+
            '</div>'

    );/*Append overview Report*/

  });

});/*edit Room*/
