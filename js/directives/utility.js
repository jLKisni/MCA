    
$(document).ready(function(){

  $('#UtilityForm').click(function(){
   queryRoomsVacant();
  var nowDate = new Date();
  var currentDate = "";
 if((nowDate.getMonth()+1)<=9){
  currentDate = nowDate.getFullYear() + "-" +"0"+(nowDate.getMonth()+1) + "-" +nowDate.getDate();
  }
 else
 {
  currentDate = nowDate.getFullYear()+ "-" +(nowDate.getMonth()+1) + "-"+ nowDate.getDate();
 }



  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(2)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').removeClass('active');
  $('#form-sidebar li:nth-child(5)').removeClass('active');
  $('#form-sidebar2 li:nth-child(1)').removeClass('active');
  $('#four').removeClass('active');
  $('#five').removeClass('active');
  $('#form-sidebar li:nth-child(4)').addClass('active');

  $('.table-responsive').empty();
  $('#RegistrationForm').empty(); 
  $('#UtilityFormPanel').empty();
  $('#roomstatuslayoutform').empty();
  $('#RegistrationForm').empty(); 
  $(".table-responsive").empty();
 $('#changepassword').empty();
  $('#showprofile').empty();
 $('#editprofile').empty();
   $('#CheckOutForm').empty();
  $('.table-responsive').empty();
  $('#RegistrationForm').empty();
  $("#room_status").empty();
  $('#UtilityFormPanel').empty();
  $('#roomEdit').empty();
  $('#transactionLogs').empty();
  $('#endOccupant').empty();
  $('#editableRoom').empty();
      $('#mca_tracker').empty();
       $('#PaymentUtility').empty();
  $('#UtilityFormPanel').append(
                    '<div class="panel" style="background-color:lightpink">'+
                    '<div class="panel-body" id="printUtilityForm">'+
                    '<h3 style="text-decoration:underline">Maria Cristina Arcade</h3>'+
                    '<br/>'+

                         '<form class="form-inline">'+

                          '<label>Date: </label>'+
                          '<input type="text" class="form-control" style="width:20%" placeholder="'+currentDate+'" disabled/>'+

                          '<label style="margin-left:3%;width:17%">Customer information: </label>'+
                          '<input text="type" class="form-control" style="width:15%;font-style:10px" id="utilityuserinfo" disabled/>'+

                          '<label style="margin-left:3%" >Room No.</label>'+
                         '<select class="form-control" id="utility_rno" oninput="queryutilityuser()" style="overflow-y:scroll;width:8.5%">'+
                         '<option></option>'+
                         '</select>'+
                         '<input type="hidden" id="utility_id" hidden>'+
                         '<input type="hidden" id="utility_ai_id" hidden>'+
                          '<br>'+
                          '<hr>'+
                          '<div class="table-responsive">'+

                              '<table class="table table-bordered">'+

                                '<thead>'+
                                  '<tr>'+
                                      '<th></th>'+
                                      '<th>Period From</th>'+
                                      '<th>Period To</th>'+
                                      '<th>Prev. Reading</th>'+
                                      '<th>Present Reading</th>'+
                                      '<th>Adjustment</th>'+
                                      '<th>Usage</th>'+
                                      '<th>Rate</th>'+
                                      '<th>Payable</th>'+
                                  '</tr>'+
                                '</thead>'+
                                '<tbody>'+
                                    '<tr>'+
                                        '<td>Rental</td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="rental_periodfrom" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="rental_periodto" value="'+currentDate+'" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="rental_prev_reading"  placeholder="---------------------------" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="rental_present_reading" disabled placeholder="--------------------"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="rental_adjustment" placeholder="--------------------" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="rental_usage" disabled placeholder="---------------------"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="rental_rate"  placeholder="---------------------" disabled></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="rental_payable" disabled placeholder="0.00"/></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>Light</td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="light_periodfrom" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="light_periodto" value="'+currentDate+'" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="light_prev_reading" onchange="lightprevreading()" placeholder="0.00"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="light_present_reading" onchange="lightpresentreading()" placeholder="0.00"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="light_adjustment" placeholder="0.00" onchange="light_calc_usage()"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="light_usage" disabled placeholder="0.00"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="light_rate" onchange="lightrate()" placeholder="0.00"></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="light_payable" placeholder="0.00" placeholder="0.00" disabled/></0td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>Water</td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="water_periodfrom" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="water_periodto" value="'+currentDate+'" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="water_prev_reading" onchange="waterprevreading()" placeholder="0.00"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="water_present_reading" onchange="waterpresentreading()" placeholder="0.00"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="water_adjustment" placeholder="0.00" onchange="water_calc_usage()"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="water_usage" disabled placeholder="0.00"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="water_rate" onchange="waterrate()" placeholder="0.00"></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="water_payable" disabled placeholder="0.00"/></td>'+
                                    '</tr>'+
                          
                                    '<tr>'+
                                        '<td>Other</td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="other_periodfrom" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="other_periodto" value="'+currentDate+'" disabled/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="other_prev_reading" onchange="otherprevreading()" placeholder="0.00"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="other_present_reading" onchange="otherpresentreading()" placeholder="0.00"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="other_adjustment" placeholder="0.00" onchange="other_calc_usage()"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="other_usage" disabled placeholder="0.00"/></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="other_rate" onchange="otherrate()" placeholder="0.00"></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="other_payable" disabled placeholder="0.00"/></0td>'+
                                    '</tr>'+
                                     '<tr>'+
                                        '<td></td>'+
                                        '<td></td>'+
                                        '<td></td>'+
                                        '<td></td>'+
                                        '<td></td>'+
                                        '<td></td>'+
                                        '<td></td>'+
                                        '<td><strong><a onclick="calculate_totalUtility()">Total Payments</a></strong></td>'+
                                        '<td><input type="text class="form-control style="width:100%" id="total_bill" disabled placeholder="0.00"/></td>'+

                                    '</tr>'+
                                '</tbody>'+
                              '</table>'+
                          '</div>'+

                          '<br>'+
                        
                          '<p>Please pay on or before <input type="date" class="form-control" id="utility_duedate" style="width:20%">&nbsp;&nbsp;to avoid penalties. A 5% surcharge shall be imposed for payments paid beyond this period.</p>'+

                          '<hr>'+

                          '<div class="btn-formsubmit" id="submitUtility">'+
                                '<button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-remove"> Cancel</button>'+
                                '<button type="button" class="btn btn-success" onclick="submit_utility()"><span class="glyphicon glyphicon-floppy-disk"> Submit</button>'+
                                '<button class="btn btn-warning" onclick="printMe(printUtilityForm,submitUtility)"><span class="glyphicon glyphicon-print">  Print</button>'+
                            '</div>'+
                      '</form>'+
                      '</div>'+
                    '</div><!--Utility form-->'
                  
    );


  });/*end of utility form*/



});/*Registration Form*/


$(document).ready(function(){
    
    $('#UtilityPayments').click(function(){
                  
  var url = "../php-db/ajax.php?action=queryUtilityPayments";
                $.getJSON(url,function(result){
                  
                for(var i=0;i<result.length;i++){
                  var c = result[i];
                        depositToTable(c);
                      
                   }
                });
        
                  function depositToTable(data){
                    if(data.status == 0){
                        
                     
                            $('#displaypaymentsUtility').append(
                              '<tr data-id="'+data.pay_id+'">'+
                              '<td class="utilityId">'+data.room_number+'</td>'+
                              '<td class="user">'+data.occu_ai_name+'</td>'+
                              '<td class="company">'+data.relocator_company+'</td>'+
                              '<td class="total_bill">'+data.total_bill+'</td>'+
                              '<td class="payAmount">'+data.pay_amount+'</td>'+
                              '<td class="balance">'+data.balance+'</td>'+
                              '<td class="duedata">'+data.due_date+'</td>'+
                              '<td class="payDate">'+data.pay_date+'</td>'+
                            '<td class="monthbill">'+data.monthbill+'</td>'+
                              '<td class="utility_status">Unpaid</td>'+
                              
                              '<td><button class="btn btn-primary edit"style="margin-left:10px;" onclick="utilityTransact('+data.pay_id+',this)"><i class="glyphicon glyphicon-pencil"></i></button>'+'<button class="btn btn-danger hidden cancel" style="margin-left:10px;" onclick="utilitycancelEdit('+data.pay_id+',this)"><i class="glyphicon glyphicon-remove"></i></button></td>'+
                              '</tr>');
                            $('tr[data-id=' + data.pay_id +']')[0].data = data;  
                          }
                    else if(data.status == 1){
                        
                            $('#displaypaymentsUtility').append(
                              '<tr data-id="'+data.pay_id+'">'+
                              '<td class="utilityId">'+data.room_number+'</td>'+
                              '<td class="user">'+data.occu_ai_name+'</td>'+
                              '<td class="company">'+data.relocator_company+'</td>'+
                              '<td class="total_bill">'+data.total_bill+'</td>'+
                              '<td class="payAmount">'+data.pay_amount+'</td>'+
                              '<td class="balance">'+data.balance+'</td>'+
                              '<td class="duedata">'+data.due_date+'</td>'+
                              '<td class="payDate">'+data.pay_date+'</td>'+
                            '<td class="monthbill">'+data.monthbill+'</td>'+
                              '<td class="utility_status">Paid</td>'+
                              
                              '<td><button class="btn btn-primary edit"style="margin-left:10px;" onclick="utilityTransact('+data.pay_id+',this)"><i class="glyphicon glyphicon-pencil"></i></button>'+'<button class="btn btn-danger hidden cancel" style="margin-left:10px;" onclick="utilitycancelEdit('+data.pay_id+',this)"><i class="glyphicon glyphicon-remove"></i></button></td>'+
                              '</tr>');
                            $('tr[data-id=' + data.pay_id +']')[0].data = data;  
                    }
                      
    }
                  


        
          $('#form-sidebar li:nth-child(1)').removeClass('active');
          $('#form-sidebar li:nth-child(2)').removeClass('active');
          $('#form-sidebar li:nth-child(3)').removeClass('active');
          $('#form-sidebar li:nth-child(4)').removeClass('active');
          $('#form-sidebar li:nth-child(5)').removeClass('active');
          $('#form-sidebar2 li:nth-child(1)').removeClass('active');

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
          $('#PaymentUtility').empty();
          $('#endOccupant').empty();
        
        $("#PaymentUtility").append(
          '<div class="panel">'+
            '<table class="table table-hover">'+
              '<thead style="font-size:12px">'+
                '<tr>'+
                  '<th>Room No/Bed No.</th>'+
                  '<th>Occupant</th>'+
                  '<th>Company</th>'+
                  '<th>Total Bill</th>'+
                  '<th>Amount Paid</th>'+
                  '<th>Balance</th>'+    
                  '<th>Due Date</th>'+
                  '<th>Date Paid </th>'+
                 '<th>Date Of Bill</th>'+
                  '<th>Status</th>'+
                  '<th>Payment Options</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody id="displaypaymentsUtility" style="font-size:11.5px">'+
    
              '</tbody>'+
            '</table>'+
            '</div>'
     );
        
    });//UtilityPayments
    
});/*UtilityPayments*/
