$(document).ready(function(){

    $("#overview-report").click(function(){

       var url = "../php-db/ajax.php?action=getActiveOccupant";
       $.getJSON(url,function(result){
        if(result!="No data")
        {
            for (var i = 0; i < result.length; i++) {
              var d =  result[i];
            displayOvwrview(d);
            };
          }
          else
          {
            alert(result);
          }
   
       function displayOvwrview(d)
       {
           
        
                $('#addToOverviewReport').append(
               '<tr class="success">'+
                  '<td>'+d.room_number+'</td>'+
                  '<td>'+d.room_typeA+'</td>'+
                  '<td>'+d.room_typeB+'</td>'+
                  '<td>'+d.rate+'</td>'+
                  '<td>'+d.occu_ai_name+'</td>'+
                  '<td>'+d.application_type+'</td>'+
                  '<td>'+d.contract_start+'</td>'+
                  '<td>'+d.relocator_company+'</td>'+
                  '<td>'+d.duration_until+'</td>'+
                  '<td>'+d.amount+'</td>'+
                  '<td>'+d.datedeposit+'</td>'+
                  '<td>Active</td>'+
                  

                '</tr>'

            );
         
       }
      });
    
    $('#form-sidebar li:nth-child(4)').removeClass('active');
    $('#form-sidebar li:nth-child(2)').removeClass('active');
    $('#form-sidebar li:nth-child(3)').removeClass('active');
    $('#form-sidebar2 li:nth-child(1)').removeClass('active');
    $('#four').removeClass('active');
    $('#five').removeClass('active');
    $('#six').removeClass('active');
    $('#form-sidebar li:nth-child(1)').addClass("active");
    $(".table-responsive").empty();
    $('#RegistrationForm').empty();
    $('#UtilityFormPanel').empty();
 $('#changepassword').empty();
          $('#showprofile').empty();
           $("#CheckOutForm").empty();
           $('#displayLogoHere').empty();
          $('#editprofile').empty();
    $('#roomEdit').empty();
    $('#roomstatuslayoutform').empty();
    $('.table-responsive').empty();
    $("#CheckOutForm").empty();
    $("#room_status").empty();
    $('#transactionLogs').empty();
        $('#editableRoom').empty();
        $('#mca_tracker').empty();
         $('#PaymentUtility').empty();
         $('#endOccupant').empty();
    $(".table-responsive").append(
      '<div class="panel">'+
            '<table class="table table-hover">'+
              '<thead style="font-size:12px">'+
           /*   '<tr>'+
                '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th></th>'+
                  '<th>FilterBy:</th>'+
                  '<th style="width:10%">'+          
                  '<select class="form-control" id="filterOverview" oninput="filterOverview()">'+
                  '<option>View All</option>'+
                  '<option>Relocator</option>'+
                  '<option>Bed Spacer</option>'+
                  '<option>Aircon</option>'+
                  '<option>Non-Aircon</option>'+
                  '</select></th>'+
                '</tr>'+*/
                '<tr>'+
                  '<th>Room/Bed No.</th>'+
                  '<th>Room Type</th>'+
                  '<th>Room Class</th>'+
                  '<th>Rate</th>'+
                  '<th>User</th>'+
                  '<th>User Type</th>'+
                  '<th>Start-Date</th>'+
                  '<th>Company</th>'+
                  '<th>Expiration</th>'+
                  '<th>Deposit</th>'+
                  '<th>Date Deposit</th>'+
                  '<th>Status</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody id="addToOverviewReport">'+
               
                
                
              '</tbody>'+
            '</table>'+
            '</div>'
    );/*Append overview Report*/

  });/*end of overview function*/




function filterOverview(){

var filter_overview = $('#filterOverview').val();
if(filter_overview =="View All"){
    $('#addToOverviewReport').empty();
    var url = "../php-db/ajax.php?action=getActiveOccupant";
       $.getJSON(url,function(result){
        if(result!="No data")
        {
            for (var i = 0; i < result.length; i++) {
              var d =  result[i];
            displayOvwrview(d);
            };
          }
          else
          {
            alert(result);
          }
   
       function displayOvwrview(d)
       {
                $('#addToOverviewReport').append(
                   '<tr class="success">'+
                  '<td>'+d.room_number+'</td>'+
                  '<td>'+d.room_typeA+'</td>'+
                  '<td>'+d.room_typeB+'</td>'+
                  '<td>'+d.rate+'</td>'+
                  '<td>'+d.occu_ai_name+'</td>'+
                  '<td>'+d.application_type+'</td>'+
                  '<td>'+d.contract_start+'</td>'+
                  '<td>'+d.relocator_company+'</td>'+
                  '<td>'+d.duration_until+'</td>'+
                  '<td>'+d.amount+'</td>'+
                  '<td>'+d.datedeposit+'</td>'+
                  '<td>Active</td>'+
                  

                '</tr>'

            );
         
       }
      });
}
else if(filter_overview == "Relocator"){
   
    $('#addToOverviewReport').empty();
    var url = "../php-db/ajax.php?action=filterOverViewRelocator";
                    $.getJSON(url,function(result){
                    for(var i=0;i<result.length;i++){
                      var c = result[i]; 
                        filterRoom_relocator(c);
                       }
                    });
    
                    
                      function filterRoom_relocator(d){
                          
                        if(d.application_type == "Relocator"){
                        $('#addToOverviewReport').append(
                           '<tr class="success">'+
                  '<td>'+d.room_number+'</td>'+
                  '<td>'+d.room_typeA+'</td>'+
                  '<td>'+d.room_typeB+'</td>'+
                  '<td>'+d.rate+'</td>'+
                  '<td>'+d.occu_ai_name+'</td>'+
                  '<td>'+d.application_type+'</td>'+
                  '<td>'+d.contract_start+'</td>'+
                  '<td>'+d.relocator_company+'</td>'+
                  '<td>'+d.duration_until+'</td>'+
                  '<td>'+d.amount+'</td>'+
                  '<td>'+d.datedeposit+'</td>'+
                  '<td>Active</td>'+
                  

                '</tr>'
                        );
                    }
                      }
}
else if(filter_overview == "Bed Spacer"){
    $('#addToOverviewReport').empty();
    var url = "../php-db/ajax.php?action=filterOverViewBed";
                    $.getJSON(url,function(result){
                    for(var i=0;i<result.length;i++){
                      var c = result[i]; 
           
                        filterRoom_relocator_b(c);
                            
                       }
                    });
    
                    
                      function filterRoom_relocator_b(d){
                          
                        if(d.application_type == "Bed Spacer"){
                        $('#addToOverviewReport').append(
                            '<tr class="success">'+
                  '<td>'+d.room_number+'</td>'+
                  '<td>'+d.room_typeA+'</td>'+
                  '<td>'+d.room_typeB+'</td>'+
                  '<td>'+d.rate+'</td>'+
                  '<td>'+d.occu_ai_name+'</td>'+
                  '<td>'+d.application_type+'</td>'+
                  '<td>'+d.contract_start+'</td>'+
                  '<td>'+d.relocator_company+'</td>'+
                  '<td>'+d.duration_until+'</td>'+
                  '<td>'+d.amount+'</td>'+
                  '<td>'+d.datedeposit+'</td>'+
                  '<td>Active</td>'+
                  

                '</tr>'
                        );
                    }
                      }
    
}
else if(filter_overview == "Aircon"){
    $('#addToOverviewReport').empty();
    var url = "../php-db/ajax.php?action=filterOverViewAircon";
    
        $.getJSON(url,function(result){
            for(var i=0; i<result.length;i++){
                    var c = result[i];       
                    filterRoom_relocator_aircon(c);
            }
        });
        function filterRoom_relocator_aircon(d){
            if(d.room_typeB == "Aircon"){
                        $('#addToOverviewReport').append(
                            '<tr class="success">'+
                  '<td>'+d.room_number+'</td>'+
                  '<td>'+d.room_typeA+'</td>'+
                  '<td>'+d.room_typeB+'</td>'+
                  '<td>'+d.rate+'</td>'+
                  '<td>'+d.occu_ai_name+'</td>'+
                  '<td>'+d.application_type+'</td>'+
                  '<td>'+d.contract_start+'</td>'+
                  '<td>'+d.relocator_company+'</td>'+
                  '<td>'+d.duration_until+'</td>'+
                  '<td>'+d.amount+'</td>'+
                  '<td>'+d.datedeposit+'</td>'+
                  '<td>Active</td>'+
                  

                '</tr>'
                        );
                    }
        }
}
else if(filter_overview == "Non-Aircon"){
    $('#addToOverviewReport').empty();
    var url = "../php-db/ajax.php?action=filterOverViewNonAircon";
    
        $.getJSON(url,function(result){
            for(var i=0; i<result.length;i++){
                    var c = result[i];       
                    filterRoom_relocator_nonaircon(c);
            }
        });
        function filterRoom_relocator_nonaircon(d){
            if(d.room_typeB == "Non-Aircon"){
                        $('#addToOverviewReport').append(
                           '<tr class="success">'+
                  '<td>'+d.room_number+'</td>'+
                  '<td>'+d.room_typeA+'</td>'+
                  '<td>'+d.room_typeB+'</td>'+
                  '<td>'+d.rate+'</td>'+
                  '<td>'+d.occu_ai_name+'</td>'+
                  '<td>'+d.application_type+'</td>'+
                  '<td>'+d.contract_start+'</td>'+
                  '<td>'+d.relocator_company+'</td>'+
                  '<td>'+d.duration_until+'</td>'+
                  '<td>'+d.amount+'</td>'+
                  '<td>'+d.datedeposit+'</td>'+
                  '<td>Active</td>'+
                  

                '</tr>'
                        );
                    }
        }
}
else if(filter_overview == "New Applicant"){
    $('#addToOverviewReport').empty();
    var url = "../php-db/ajax.php?action=filterOverViewDate";
    
        $.getJSON(url,function(result){
            for(var i=0; i<result.length;i++){
                    var c = result[i];       
                    filterRoom_relocator_date(c);
            }
        });
        function filterRoom_relocator_date(d){
            if(d.room_typeB == "Date"){
                        $('#addToOverviewReport').append(
                        '<tr class="success">'+
                  '<td>'+d.room_number+'</td>'+
                  '<td>'+d.room_typeA+'</td>'+
                  '<td>'+d.room_typeB+'</td>'+
                  '<td>'+d.rate+'</td>'+
                  '<td>'+d.occu_ai_name+'</td>'+
                  '<td>'+d.application_type+'</td>'+
                  '<td>'+d.contract_start+'</td>'+
                  '<td>'+d.relocator_company+'</td>'+
                  '<td>'+d.duration_until+'</td>'+
                  '<td>'+d.amount+'</td>'+
                  '<td>'+d.datedeposit+'</td>'+
                  '<td>Active</td>'+
                  

                '</tr>'
                        );
                    }
        }
}

}
});