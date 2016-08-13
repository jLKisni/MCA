
$(document).ready(function(){
  
  $('#roomStatus').click(function(){

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
                        $('#roomsstatusdisplay').append(
                          '<tr class="success">'+
                          '<td >'+data.room_number+'</td>'+
                          '<td >'+data.room_typeA+'</td>'+
                          '<td >'+data.room_typeB+'</td>'+
                          '<td >Vacant</td>'+
                          '<td >&#8369; '+data.rate+'</td>'+
                          '</tr>');
                        }
                        else if(data.status1 == 1)
                        {
                             
                          $('#roomsstatusdisplay').append(
                              '<tr class="danger">'+
                              '<td >'+data.room_number+'</td>'+
                              '<td >'+data.room_typeA+'</td>'+
                              '<td >'+data.room_typeB+'</td>'+
                              '<td >Occupied</td>'+
                              '<td >&#8369; '+data.rate+'</td>'+
                              '</tr>'
                        );}
                    }


  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(2)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').removeClass('active');
  $('#form-sidebar li:nth-child(4)').removeClass('active');
  $('#form-sidebar li:nth-child(5)').removeClass('active');
  $('#five').removeClass('active');
  $('#six').removeClass('active'); 
  $('#four').removeClass('active');
  $('#form-sidebar2 li:nth-child(1)').addClass('active');

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
      
        $("#room_status").append(
            '<div class="panel">'+
            '<div class="panel-body" >'+
            '<h3>Room Status</h3>'+
            '<table class="table table-hover">'+
              '<thead>'+
               '<tr>'+
          
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th style="width:15%">'+
                  '<select class="form-control" id="filterRoomStatus" oninput="filter_rStatus()">'+
                  '<option>View All</option>'+
                  '<option>Vacant</option>'+
                  '<option>Occupied</option>'+
                  '</select></th>'+
                '</tr>'+
                '<tr>'+
                  '<th>Room No.</th>'+
                  '<th>Room Class</th>'+
                  '<th>Room Type</th>'+
                  '<th>Status</th>'+
                  '<th>Room Rate</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody id="roomsstatusdisplay">'+
                
                
              '</tbody>'+
            '</table>'+
            '</div>'+
            '</div>'

    );

  });

});/*Append overview Report*/


function filter_rStatus(){

var filter = $('#filterRoomStatus').val();
  
if(filter == "Vacant"){
    $('#roomsstatusdisplay').empty();
    var url = "../php-db/ajax.php?action=filterRoom";
                    $.getJSON(url,function(result){
                    for(var i=0;i<result.length;i++){
                      var c = result[i];
                            filterRoom(c);
                          
                       }
                    });

                      function filterRoom(data){
                         if(data.status1 == 0)
                         {
                            
                            $('#roomsstatusdisplay').append(
                              '<tr class="success">'+
                              '<td >'+data.room_number+'</td>'+
                              '<td >'+data.room_typeA+'</td>'+
                              '<td >'+data.room_typeB+'</td>'+
                              '<td >Vacant</td>'+
                              '<td >&#8369; '+data.rate+'</td>'+
                              '</tr>');
                            }
                            else if(data.status1 == 1)
                            {
                               
                              $('#roomsstatusdisplay').append(
                                  '<tr class="danger">'+
                                  '<td >'+data.room_number+'</td>'+
                                  '<td >'+data.room_typeA+'</td>'+
                                  '<td >'+data.room_typeB+'</td>'+
                                  '<td >Occupied</td>'+
                                  '<td >&#8369; '+data.rate+'</td>'+
                                  '</tr>'
                                );
                            }
                        }


}
else if(filter == "Occupied"){
  $('#roomsstatusdisplay').empty();
   var url = "../php-db/ajax.php?action=filterRoom1";
                    $.getJSON(url,function(result){
                    for(var i=0;i<result.length;i++){
                      var c = result[i];
                            filterRoom1(c);
                          
                       }
                    });

                      function filterRoom1(data){
                         if(data.status1 == 0)
                         {
                            
                            $('#roomsstatusdisplay').append(
                              '<tr class="success">'+
                              '<td >'+data.room_number+'</td>'+
                              '<td >'+data.room_typeA+'</td>'+
                              '<td >'+data.room_typeB+'</td>'+
                              '<td >Vacant</td>'+
                              '<td >&#8369; '+data.rate+'</td>'+
                              '</tr>');
                            }
                            else if(data.status1 == 1)
                            {
                               
                              $('#roomsstatusdisplay').append(
                                  '<tr class="danger">'+
                                  '<td >'+data.room_number+'</td>'+
                                  '<td >'+data.room_typeA+'</td>'+
                                  '<td >'+data.room_typeB+'</td>'+
                                  '<td >Occupied</td>'+
                                  '<td >&#8369; '+data.rate+'</td>'+
                                  '</tr>'
                                );
                            }
                        }


  }
else if(filter == "View All"){
  $('#roomsstatusdisplay').empty();
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
                        $('#roomsstatusdisplay').append(
                          '<tr class="success">'+
                          '<td >'+data.room_number+'</td>'+
                          '<td >'+data.room_typeA+'</td>'+
                          '<td >'+data.room_typeB+'</td>'+
                          '<td >Vacant</td>'+
                          '<td >&#8369; '+data.rate+'</td>'+
                          '</tr>');
                        }
                        else if(data.status1 == 1)
                        {
                             
                          $('#roomsstatusdisplay').append(
                              '<tr class="danger">'+
                              '<td >'+data.room_number+'</td>'+
                              '<td >'+data.room_typeA+'</td>'+
                              '<td >'+data.room_typeB+'</td>'+
                              '<td >Occupied</td>'+
                              '<td >&#8369; '+data.rate+'</td>'+
                              '</tr>'
                        );}
                    }



  }
}