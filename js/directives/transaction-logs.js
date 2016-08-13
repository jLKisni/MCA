$(document).ready(function(){

  $('#logsTransaction').click(function(){

  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(2)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').removeClass('active');
  $('#form-sidebar li:nth-child(4)').removeClass('active');
  $('#form-sidebar li:nth-child(5)').removeClass('active');
  $('#form-sidebar2 li:nth-child(1)').removeClass('active');
  $('#four').removeClass('active');
  $('#six').removeClass('active'); 
  $('#five').addClass('active');


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
 $('#editableRoom').empty();
  $('#endOccupant').empty();
  $('#mca_tracker').empty();
       $('#PaymentUtility').empty();

        $("#transactionLogs").append(
            '<div class="panel">'+
            '<div class="panel-body">'+
            '<h3>Transaction Logs</h3>'+
            '<table class="table table-hover">'+
              '<thead>'+

                '<tr>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th><select class="form-control">'+
                  '<option>Room</option>'+
                  '<option>Date</option>'+
                  '<option>Year</option>'+
                
                  '</select></th>'+
                '</tr>'+
                '<tr>'+
                  '<th>Transaction Id</th>'+
                  '<th>Room No.</th>'+
                  '<th>Room Class</th>'+
                  '<th>Room Type</th>'+
                  '<th>Room Rate</th>'+
                  '<th>User Info.</th>'+
                  '<th>Date Modified</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody>'+
                '<tr>'+
                  '<td>000121441</td>'+
                  '<td>1A</td>'+
                  '<td>Pad</td>'+
                  '<td>Aircon</td>'+       
                  '<td>&#8369; 6,000</td>'+
                  '<td>Rene Macalisang</td>'+
                  '<td>12/05/2015</td>'+
                  
                '</tr>'+

                 '<tr>'+
                  '<td>000121443</td>'+
                  '<td>3A</td>'+
                  '<td>Pad</td>'+
                  '<td>Aircon</td>'+
                  '<td>&#8369; 6,000</td>'+
                  '<td>John Berdida</td>'+
                  '<td>12/05/2015</td>'+
                  
                '</tr>'+
                
              '</tbody>'+
            '</table>'+
            '</div>'+
            '</div>'

    );

    });


});/*Transaction Logs*/
