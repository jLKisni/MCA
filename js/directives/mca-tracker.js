$(document).ready(function()
{
    
  $('#mcatracker').click(function(){
  
      
        var url = "../php-db/ajax.php?action=mcaTracker";
                
                $.getJSON(url,function(data){

               
                for(var i=0; i<data.length; i++){
                  var c = data[i];
                        addtoTracker(c);
                      
                   }
                });

                  function addtoTracker(data){
                 
                    
                        $('#mcaTrackerTable').append(
                          '<tr class="success">'+
                          '<td >'+data.relocator_company+'</td>'+
                          '<td >'+data.room_number+'</td>'+
                          '<td >'+data.check_out_room_type+'</td>'+
                          '<td >'+data.check_out_room_class+'</td>'+
                          '<td >'+data.check_out_name+'</td>'+
                          '<td >'+data.occu_ai_contact_no+'</td>'+
                          '<td >'+data.check_out_indate+'</td>'+
                          '<td >'+data.check_out_roomrate+'</td>'+
                          '<td >'+data.contract_start+'</td>'+
                          '<td>'+data.total_bill+'</td>'+
                          '<td>'+data.admin+'</td>'+
    
                          '</tr>');
                       
                    }
      
      
      
      
  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(2)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').removeClass('active');
  $('#form-sidebar li:nth-child(4)').removeClass('active');
  $('#form-sidebar li:nth-child(5)').removeClass('active');
  $('#form-sidebar2 li:nth-child(1)').removeClass('active');
  $('#five').removeClass('active');
  $('#four').removeClass('active');
  $('#six').addClass('active');


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

        $("#mca_tracker").append(
            '<div class="panel">'+
            '<div class="panel-body">'+
            '<h3>MCA Relocator Tracker</h3>'+
            '<table class="table table-hover" cellspacing="0" width="100%" style="font-size:12px">'+
              '<thead>'+
            
            
                '<tr>'+
                 
                  '<th>Company</th>'+
                  '<th>Room/Bed No.</th>'+
                  '<th>Room Type</th>'+
                  '<th>Room Class</th>'+
                  '<th>Tenant Name</th>'+
                  '<th>Contact No.</th>'+
                  '<th>Check-in Date</th>'+
                  '<th>Rate</th>'+
                  '<th>Check-out Date</th>'+
                  '<th>Total Bill</th>'+
                  '<th>Admin</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody id="mcaTrackerTable">'+

              '</tbody>'+
            '</table>'+
            '</div>'+
            '</div>'

    );/*MCA Tracker*/

    });


});/*Mca Tracker*/
