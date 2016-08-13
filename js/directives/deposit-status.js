$(document).ready(function(){
  
  $('#depositStatus').click(function(){

      var url = "../php-db/ajax.php?action=depositlist";
                $.getJSON(url,function(result){
                for(var i=0;i<result.length;i++){
                  var c = result[i];
                        depositToTable(c);
                      
                   }
                });

                  function depositToTable(data){
                     if(data.status == 0)
                     {
                        $('#depositstatusdisplay').append(
                          '<tr class="success">'+
                          '<td >'+data.room_number+'</td>'+
                          '<td >'+data.dep_name+'</td>'+
                          '<td >'+data.amount+'</td>'+
                          '<td >'+data.datedeposit+'</td>'+
                          '<td >Paid</td>'+
                          '<td >'+data.datepaid+'</td>'+
                          
                          '</tr>');
                        }
                        else if(data.status == 1)
                        {
                        $('#depositstatusdisplay').append(
                          '<tr class="danger">'+
                          '<td >'+data.room_number+'</td>'+
                          '<td >'+data.dep_name+'</td>'+
                          '<td >'+data.amount+'</td>'+
                          '<td >'+data.datedeposit+'</td>'+
                          '<td >Unpaid</td>'+
                          '<td >'+data.datepaid+'</td>'+
                          
                          '</tr>');
                        }
                    }

     

  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(2)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').removeClass('active');
  $('#form-sidebar li:nth-child(4)').removeClass('active');
  $('#form-sidebar li:nth-child(5)').removeClass('active');
  $('#form-sidebar2 li:nth-child(1)').addClass('active');

   $('#CheckOutForm').empty();
  $('.table-responsive').empty();
  $('#RegistrationForm').empty();
  $('.table-responsive').empty();
  $('#UtilityFormPanel').empty(); 
   $("#endoccupantdisplay").empty();
   $('#displayLogoHere').empty();
  $('#changepassword').empty();
  $('#showprofile').empty();
  $("#CheckOutForm").empty();
  $('#editprofile').empty();
  $('#roomEdit').empty();
  $('#roomstatuslayoutform').empty();
  $(".table-responsive").empty();
  $('.table-responsive').empty();
  $('#RegistrationForm').empty();
  $('#CheckOutForm').empty();
  $("#room_status").empty();
  $('#mca_tracker').empty();
  $('#endOccupant').empty();
       $('#PaymentUtility').empty();

      $('#editableRoom').empty();
        $("#room_status").append(
          '<div class="panel">'+
            '<table class="table table-hover">'+
              '<thead>'+
             
                '<tr>'+
                  '<th>Room No/Bed No.</th>'+
                  '<th>Occupant Name</th>'+
                  '<th>Amount Deposit</th>'+
                  '<th>Date Deposit</th>'+
                  '<th>Status</th>'+
                  '<th>Date Paid </th>'+
            
                '</tr>'+
              '</thead>'+
              '<tbody id="depositstatusdisplay">'+
    
              '</tbody>'+
            '</table>'+
            '</div>'

    );/*Append overview Report*/

  });

});/*roomStatus*/