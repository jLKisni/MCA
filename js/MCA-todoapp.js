


document.write('<script type="text/javascript" js="../src/manager.js"></script>');

window.onload = function()
{
    //startupLoad();
    modalStartUp();
    depositmodal();
    transfermodal();
    queryRoomsVacant();
    

};

////////////////////////////////////////// QUERY ROOM NUMBER  ////////////////////////////////////////////////

function queryRoomsNumber(){


        var url = "../php-db/ajax.php?action=queryRoomsNumber";
        var data = 
        {
            "cfr_no":$('#cfr_no').val()
        };
    $.getJSON(url,data,function(result){


        if(result=="Room number not found."){
        $('#rd_rate').attr("value","");
        $('#rd_typeA').attr("value","");
        $('#rd_typeB').attr("value","");
            alert(result);

        }
        else{
          
        $('#rd_rate').attr("value",result.rate);
        $('#rd_typeA').attr("value",result.room_typeA);
        $('#rd_typeB').attr("value",result.room_typeB);
    }
    });     

}

function queryRoomsVacant(){

          var url = "../php-db/ajax.php?action=roomlist";

          $.getJSON(url,function(data){
              var option='';
              var option2 ='';
          for(var i = 0; i<data.length; i++){

              var data1  = data[i++]; 

          }


             for(var i=0;i<data.length;i++){
                  
                  var c = data[i];
                        if(c.status1 == 0)
                     {
                        option += '<option value="'+ c.room_number + '">' + c.room_number + '</option>';
                     }
                     else if(c.status1 == 1){
                        option2 += '<option value="'+ c.room_number + '">' + c.room_number + '</option>';
                     }
                  }
              $('#cfr_no').append(option);   
      
              $('#utility_rno').append(option2);
              $('#co_rno').append(option2);

              $('#dep_roomNumber').append(option2);
          });

}

function roomTransfer(){

          var url = "../php-db/ajax.php?action=roomlist";

          $.getJSON(url,function(data){
              var option='';
              var option2 ='';
          for(var i = 0; i<data.length; i++){

              var data1  = data[i++]; 

          }


             for(var i=0;i<data.length;i++){
                  
                  var c = data[i];
                        if(c.status1 == 0)
                     {
                        option += '<option value="'+ c.room_number + '">' + c.room_number + '</option>';
                     }
                     else if(c.status1 == 1){
                        option2 += '<option value="'+ c.room_number + '">' + c.room_number + '</option>';
                     }
                  }

              $('#transferRoom').append(option);
    
              $('#transfer_roomuser').append(option2);
            
          });

}





function selectCompany(){

      var selectedCompany = $('#companyName').val();

      if(selectedCompany == "Others")
       {
        $('#relocatorside_other').show();
       }
       else{
        $('#relocatorside_other').hide();
       }

}

function selectRelocator(){

  var selectedRelocator = $('#rd_a_Type').val();

     

  if(selectedRelocator == "Relocator"){
    $('#relocatorside').show();
      
  }
  else
  {
    $('#relocatorside').hide();
    $('#relocatorside_other').hide();
  }


}


function deleteRoom(c){
    
    
    if(confirm("Are you sure you want to delete this?")){
        var url ="../php-db/ajax.php?action=deleteRoom&roomid="+c;
          
        $.get(url,function(data){
            
            $('#editRoomDisplay').empty();
             var url1 = "../php-db/ajax.php?action=roomlist";
                $.getJSON(url1,function(result){
               
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
            alert(data);
        });
        
    }
    else{
        return false;
    }
}

function saveEditRoom(id){
 var data = {
    'room_id' : id,
    'roomnumber': $('#newEditRoom').val(),
    'room_typea': $('#newroomA').val(),
    'room_typeb': $('#newroomB').val(),
    'room_rate' :$('#newrate').val() 
 };  
var url = "../php-db/ajax.php?action=updateRoomlist";
    $.post(url,data,function(data){
         alert(data);
    });
}

function editroom(id){
        
   var url = "../php-db/ajax.php?action=roomlist";
                $.getJSON(url,function(result){
                for(var i=0;i<result.length;i++){
                  var c = result[i];
                        addEditRoom(c);
                      
                   }
                });

                  function addEditRoom(data){
                     
                        if(data.status1 == 0)
                     {
                             if(data.room_id == id){

                                $('#editRoomNew').append(
                                  '<tr data-id="'+data.room_id+'">'+
                                  '<td style="width:20%"><input class="form-control" id="newEditRoom" value="'+data.room_number+'" disabled/></td>'+
                                  '<td style="width:10%">'+
                                  '<select class="form-control" id="newroomA">'+
                                    '<option>Dorm</option>'+
                                    '<option>Pad</option>'+
                                    '</select>'+
                                 '</td>'+
                                  '<td style="width:20%">'+
                                    '<select class="form-control" id="newroomB">'+
                                    '<option>Aircon</option>'+
                                    '<option>Non-Aircon</option>'+
                                    '</select>'+
                                  '</td>'+
                                  '<td ><input class="form-control" id="newrate" placeholder="'+data.rate+'" style="width:40%"/></td>'+
                                  '<td><button class="btn btn-primary" value="Save"><i  class="glyphicon glyphicon-ok" onclick="saveEditRoom('+data.room_id+')"></i></button></td>'+
                                  '</tr>');
                                }
                         
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
    
        $('#editableRoom').append
        (
             '<div class="panel">'+
                '<div class="panel-body" >'+
                '<h3>Edit Room</h3>'+
                '<table class="table table-hover">'+
                  '<thead>'+
                    '<tr>'+
                      '<th>Room No.</th>'+
                      '<th>Room Class</th>'+
                      '<th>Room Type</th>'+
                      '<th>Room Rate</th>'+
                      '<th>Options</th>'+
                    '</tr>'+
                  '</thead>'+
                  '<tbody id="editRoomNew">'+


                  '</tbody>'+
                '</table>'+
                '</div>'+
                '</div>'
            );

}





$(document).ready(function(){
    $('#AddDeposit').click(function(){


              $('#form-sidebar li:nth-child(1)').removeClass('active');
              $('#form-sidebar li:nth-child(4)').removeClass('active');
              $('#form-sidebar li:nth-child(2)').removeClass('active');
              $('#form-sidebar li:nth-child(3)').removeClass('active');
              $('#form-sidebar2 li:nth-child(1)').removeClass('active');
              $('#room_m li:nth-child(1)').removeClass('active');
              $('#four').removeClass('active');
              $('#form-sidebar li:nth-child(5)').addClass("active");
              $('#five').removeClass('active');


    });
     
});/*addDeposit*/

$(document).ready(function(){

  $('#room_m').click(function(){
              $('#form-sidebar li:nth-child(1)').removeClass('active');
              $('#form-sidebar li:nth-child(4)').removeClass('active');
              $('#form-sidebar li:nth-child(2)').removeClass('active');
              $('#form-sidebar li:nth-child(3)').removeClass('active');
              $('#form-sidebar2 li:nth-child(1)').removeClass('active');
              $('#form-sidebar li:nth-child(5)').removeClass("active");
              $('#four').removeClass('active');
              $('#five').removeClass('active');
  });

});/*roomM*/




function depGetRoomNumber()
{
  var url = "../php-db/ajax.php?action=getContractNumber&room=" + $('#dep_roomNumber').val();
  var data = 
  {
    "dep_roomNumber":$('#dep_roomNumber').val()
  }; 
  $.getJSON(url,function(result){
    if(result == "Room number not available for deposit. ")
    {
        alert("Room number not available for deposit. ");
        $('#dep_name').attr("value","");
        $('#dep_amount').val("");
    }
    else
    {
      $('#dep_name').attr("value",result.occu_ai_name);
      $('#dep_ai_id').attr("value",result.occu_ai_id);
      $('#dep_contract_id').attr("value",result.contract_id);
    }
  });
}


function addDeposit()
{
  var url = "../php-db/ajax.php?action=addDeposit"; 
  var data = 
  {
    "dep_roomNumber":$('#dep_roomNumber').val(),
    "dep_contract_id":$('#dep_contract_id').val(),
    "dep_ai_id":$('#dep_ai_id').val(),
    "dep_name":$('#dep_name').val(),
    "dep_amount":$('#dep_amount').val()
  };
    
 if(data.dep_amount != "" && data.dep_roomNumber !=""){

    $.post(url,data,function(result){
    alert(result);
    $('#dep_amount').val("");
  });
 }
else{
    $('#dep_roomNumber').attr("value","");
    $('#dep_roomNumber').focus();
    alert('Room Number And Amount must be filled to proceed!');
}
}


function queryTransfer(){

  var Room_transfer = $('#transfer_roomuser').val();


  var room = {"transferRoom":Room_transfer};

   var url = "../php-db/ajax.php?action=querychechoutnumber&room="+$('#transfer_roomuser').val();
 
  $.getJSON(url,function(result){
    if(result=="Room number or bed number not found.")
    {
      $('#transfer_roomuser').attr("value","");
      $('#transfer_user').attr("value","");
      $('#transfer_roomRate').attr("value","");
      $('#transfer_rType').attr("value","");
      $('#transfer_rClass').attr("value","");

      alert(result);
    }
    else
    {
      $('#transferUser_id').attr("value",result.contract_id);
      $('#transferoccu_id').attr("value",result.occu_ai_id);
      $('#transfer_user').attr("value",result.occu_ai_name);
      $('#transfer_roomRate').attr("value",result.rate);
      $('#transfer_rType').attr("value",result.room_typeA);
      $('#transfer_rClass').attr("value",result.room_typeB);
    }

  });


}

function querytransferTo(){

   var url2 = "../php-db/ajax.php?action=roomtransferList&room="+$('#transferRoom').val();

           $.getJSON(url2,function(result){
              console.log(result);
              $('#transferTo_rate').attr("value",result.rate);
              $('#transferTo_roomType').attr("value",result.room_typeA);
              $('#transferTo_roomClass').attr("value",result.room_typeB);

             });

}




function transferToRoom(){

  var data = {
      'contract_id' : $('#transferUser_id').val(),
      'occu_ai_id' : $('#transferoccu_id').val(),
      'roomBefore' : $('#transfer_roomuser').val(),
      'roomAfter' : $('#transferRoom').val()
  };
  console.log(data);

   var url = "../php-db/ajax.php?action=submitTransfer";
  $.post(url,data,function(result){
      alert(result);
  });
}


function printMe(printingUtility,submitUtility){

        $('#submitUtility').hide();
        var storepage = document.body.innerHTML;
        //var printContent = document.getElementById(printingUtility);

        window.print();
        //document.body.innerHtml = printContent;

        $('#submitUtility').show();
}






 
//////////////////////////////////////////// ROOM STATUS ////////////////////////////////////

$(document).ready(function(){
   $("#roomStatus1").click(function(){
       var url = "../php-db/ajax.php?action=roomlist";
                $.getJSON(url,function(result){
                for(var i=0;i<result.length;i++){
                  var c = result[i];
                        addRoomToTable(c);
                   }
                });
                  function addRoomToTable(data){
  $('.r_status_room').append(
    '<tr>'+
    
    '<td >'+data.room_typeA+'</td>'+
    +'<td>'+data.room_typeA+'</td>'+
    +'<td>'+data.room_typeB+'</td>'+
    +'<td>'+data.status+'</td>'+
    +'<td>'+data.no_of_occupant+'</td>'+
    +'<td>'+data.rate+'</td>'+
    '</tr>'+      
    +'</table>');
   
}
   } );

  });/*end of overview function*/




 


  function fillupreset()
  {
    document.getElementById("fillupreset").reset();
  }



$(document).ready(function(){
            // Search Engine By Keyword :)
    
         $("#search").keyup(function(){
        _this = this;
        // ipakita ang matching TR, Itago Ang Uban
        $.each($(".table tbody tr"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
               $(this).hide();
            else
               $(this).show();                
        });
         });

        
}); 


function utilityTransact(id, button){
    var $button = $(button);
    
    var $tr = $(button.parentNode.parentNode);
    var data = $tr[0].data;
    
    if($button.attr('mode')!='edit'){
       $tr.find('button.cancel').removeClass('hidden');
       var paying = '<input type="text" id="payAmount" style="width:70%; font-size:12px" class="form-control" value="'+data.pay_amount+'"/>';
       $tr.find('td.payAmount').html(paying).find('input').focus();
    
       $button.attr('mode','edit').html('<i class="glyphicon glyphicon-floppy-disk"></i>')
    }
    else{
        $tr.find('button.cancel').addClass('hidden');
        $button.attr('mode','save').html('<i class="glyphicon glyphicon-pencil"></i>');
        
        var updatedPayment = {
            "payment_id" : id,
            "payed_amount" : $tr.find('input#payAmount').val()
        };
        console.log(updatedPayment);
        
        var url = "../php-db/ajax.php?action=updateUtilityPayments";
        $.post(url,updatedPayment,function(result){
            
         var queryUrl = "../php-db/ajax.php?action=queryUtilityPayments";
                $.getJSON(queryUrl,function(result){
                for(var i=0;i<result.length;i++){
                  var c = result[i];
                        
                    updateUtility(c);
                    
                    
                   }
                });
            $('#displaypaymentsUtility').empty();
        
                  function updateUtility(data){
                    if(data.status < 1){
                        
                     
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
                    else{
                        
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
                       
                  });
       
    }
    
}
     

function utilitycancelEdit(id, button)
{
	var $button = $(button);
	var $tr = $(button.parentNode.parentNode);
	var data = $tr[0].data;
	$tr.find('td.payAmount').text(data.pay_amount);
	
	//hide the cancel edit button
	$tr.find('button.cancel').addClass('hidden');	
	$tr.find('button.edit').attr('mode','save').html('<i class="glyphicon glyphicon-pencil"></i>');
}


function queryutilityuser(){
    
    var url = "../php-db/ajax.php?action=queryUtilityuser&room="+ $('#utility_rno').val();

          $.getJSON(url,function(result){
              $('#utility_id').attr("value",result.contract_id);
              $('#utility_ai_id').attr("value",result.occu_ai_id);
            
              if(result=="Room number or bed number not found.")
              {
                $('#utilityuserinfo').attr("value","");
                $('#utility_rno').focus();
                alert(result);
              }
              else
              {
                $('#rental_payable').attr("value",result.rate);
                $('#utilityuserinfo').attr("value",result.occu_ai_name);
                $("#rental_periodfrom").attr("value",result.contract_start);
                $("#light_periodfrom").attr("value",result.contract_start);
                $("#water_periodfrom").attr("value",result.contract_start);
                $("#other_periodfrom").attr("value",result.contract_start);
                $('#rental_prev_reading').focus();
              }
          });
    
   
}


function calculate_totalUtility(){

var totalpayable ={
  'calc_rental_payable' : $('#rental_payable').val(),
  'calc_light_payable'  : $('#light_payable').val(),
  'calc_water_payable'  : $('#water_payable').val(),
  'calc_other_payable'  : $('#other_payable').val()
};

var sum_total = 0.00;
var tempvalue = 0;
var value = 0;

$.each(totalpayable , function(key,tempvalue){

if(tempvalue == "" || tempvalue == null  || tempvalue == "NaN"){
  sum_total = parseFloat(sum_total + 0);
}
else
{
  sum_total = parseFloat(sum_total)+parseFloat(tempvalue);
}
    
      
});
 

$('#total_bill').attr("value",sum_total.toFixed(2));


}
function submit_utility(){

    if($('#utility_rno').val()!="" && $('#total_bill').val()!=""){
        
              var submitutility = {
                'utility_id': $('#utility_id').val(),/*userinfo*/
                'utility_rno' : $('#utility_rno').val(),
                'utility_ai_id': $('#utility_ai_id').val(),
                'utility_totalbill' : $('#total_bill').val(),
                'utility_duedate' : $('#utility_duedate').val(),
                'utility_monthbill':$('#rental_periodto').val(),

                'rprev_read': $('#rental_prev_reading').val(),
                'rpres_read': $('#rental_present_reading').val(),
                'r_adjustment': $('#rental_adjustment').val(),
                'r_usage':$('#rental_usage').val(),
                'r_rate':$('#rental_rate').val(),
                'r_payable':$('#rental_payable').val(),/*rental*/

                'lprev_read': $('#light_prev_reading').val(),
                'lpres_read': $('#light_present_reading').val(),
                'l_adjustment': $('#light_adjustment').val(),
                'l_usage':$('#light_usage').val(),
                'l_rate':$('#light_rate').val(),
                'l_payable':$('#light_payable').val(),/*light*/

                'wprev_read': $('#water_prev_reading').val(),
                'wpres_read': $('#water_present_reading').val(),
                'w_adjustment': $('#water_adjustment').val(),
                'w_usage':$('#water_usage').val(),
                'w_rate':$('#water_rate').val(),
                'w_payable':$('#water_payable').val(),/*water*/

                'oprev_read': $('#other_prev_reading').val(),
                'opres_read': $('#other_present_reading').val(),
                'o_adjustment': $('#other_adjustment').val(),
                'o_usage':$('#other_usage').val(),/*other*/
                'o_rate':$('#other_rate').val(),
                'o_payable':$('#other_payable').val()        
              };

              console.log(submitutility);
              var url ="../php-db/ajax.php?action=utilitypaymentsubmit";
              $.post(url,submitutility,function(data){ 
                       alert(data);
                });
      }
    else{
        alert('Please Input Some Room And Complete the Form to submit.');
        $('#utility_rno').focus();
    }
}

function sum(a,b,c,d,e){

    var cal = (parseFloat(a))+(parseFloat(b))+(parseFloat(c))+(parseFloat(d))+(parseFloat(e));
  
  return cal;
}




/*Utility Light Form*/



      function lightprevreading(){

        
        var light_previous_reading =  parseFloat($('#light_prev_reading').val());
        var light_present_reading =  parseFloat($('#light_present_reading').val());
        var calc_usage ="";

                calc_usage = parseFloat(light_previous_reading) - parseFloat(light_present_reading);
                $('#light_usage').attr("value",calc_usage.toFixed(2));
                $('#light_present_reading').focus();
       
      }
      function lightpresentreading(){

        var light_previous_reading = parseFloat($('#light_prev_reading').val());
        var light_present_reading =  parseFloat($('#light_present_reading').val());
        var calc_usage ="";
           
        if($('#light_prev_reading').val() == ""){

          alert('Required Input in previous reading !');
          $('#light_present_reading').val("");
          $('#light_prev_reading').focus();

        }
        else{
             if(light_present_reading >= light_previous_reading){
                   calc_usage = parseFloat(light_present_reading) - parseFloat(light_previous_reading);
                  $('#light_usage').attr("value",calc_usage.toFixed(2));
                  $('#light_adjustment').focus();        
                }
            else{
                  
                   alert("Invalid Input! Present reading must greater than previous reading");
                   $('#light_present_reading').val("");
                      $('#light_prev_reading').focus();
                }
            }

      }

function light_calc_usage(){
    var light_adjust = parseFloat($('#light_adjustment').val());
    var temp_usage = parseFloat($('#light_usage').val());
    var calc_adjust="";
    
    calc_adjust = parseFloat(temp_usage) - parseFloat(light_adjust);
    
    if(calc_adjust <= 0){
        $('#light_usage').attr("value","0.00");
        $('#light_rate').attr("disabled", true);
        $('#light_payable').attr("value","0.00");
        $('#water_prev_reading').focus();
    }
    else{
        $('#light_usage').attr("value",calc_adjust.toFixed(2));
        $('#light_rate').focus();
    }
    
}


      function lightrate(){
        var calc_usage = parseFloat($('#light_usage').val());
        var lightrate = parseFloat($('#light_rate').val());

        var calc_payable = calc_usage * lightrate;
        
        if($('#light_present_reading').val() == ""){

            alert('Input must required in present reading !');
            $('#light_rate').val("");
            $('#light_prev_reading').focus();
          }
          else
          {
            if($('#light_rate').val()!=""){
               $('#light_payable').attr("value",calc_payable.toFixed(2));

            }

          }


      }

      //////////////////////


      /*Utility Water Form*/

      function waterprevreading(){


        var water_previous_reading =  parseFloat($('#water_prev_reading').val());
        var water_present_reading =  parseFloat($('#water_present_reading').val());
        var calc_usage ="";

                calc_usage = parseFloat(water_previous_reading) - parseFloat(water_present_reading);
                $('#water_usage').attr("value",calc_usage.toFixed(2));
                $('#water_present_reading').focus();
       
      }
      function waterpresentreading(){

        var water_previous_reading = parseFloat($('#water_prev_reading').val());
        var water_present_reading =  parseFloat($('#water_present_reading').val());
        var calc_usage ="";
           
        if($('#water_prev_reading').val() == ""){

          alert('Required Input in previous reading !');
          $('#water_present_reading').val("");
          $('#water_prev_reading').focus();

        }
        else{
             if(water_present_reading > water_previous_reading){
                   calc_usage = parseFloat(water_present_reading) - parseFloat(water_previous_reading);
                  $('#water_usage').attr("value",calc_usage.toFixed(2));
                  $('#water_adjustment').focus();        
                }
            else{
                  
                   alert("Invalid Input! Present reading must greater than previous reading");
                      $('#water_present_reading').val("");
                      $('#water_prev_reading').focus();
                }
            }

      }

function water_calc_usage(){
    var water_adjust = parseFloat($('#water_adjustment').val());
    var temp_usage = parseFloat($('#water_usage').val());
    var calc_adjust="";
    
    calc_adjust = parseFloat(temp_usage) - parseFloat(water_adjust);
    
    if(calc_adjust <= 0){
        $('#water_usage').attr("value","0.00");
        $('#water_rate').attr("disabled", true);
        $('#water_payable').attr("value","0.00");
        $('#other_prev_reading').focus();
    }
    else{
        $('#water_usage').attr("value",calc_adjust.toFixed(2));
        $('#water_rate').focus();
    }
    
}

      function waterrate(){
        var calc_usage = parseFloat($('#water_usage').val());
        var waterrate = parseFloat($('#water_rate').val());

        var calc_payable = calc_usage * waterrate;
        
        if($('#water_present_reading').val() == ""){

            alert('Input must required in present reading !');
            $('#water_rate').val("");
            $('#water_prev_reading').focus();
          }
          else
          {
            if($('#water_rate').val()!=""){
               $('#water_payable').attr("value",calc_payable.toFixed(2));

          }

          }


      }


      /////////////////////


      /*Utility Electricity Form*/
        
        function otherprevreading(){


        var other_previous_reading =  parseFloat($('#other_prev_reading').val());
        var other_present_reading =  parseFloat($('#other_present_reading').val());
        var calc_usage ="";

                calc_usage = parseFloat(other_previous_reading) - parseFloat(other_present_reading);
                $('#other_usage').attr("value",calc_usage.toFixed(2));
                $('#other_present_reading').focus();
       
      }
      function otherpresentreading(){

        var other_previous_reading = parseFloat($('#other_prev_reading').val());
        var other_present_reading =  parseFloat($('#other_present_reading').val());
        var calc_usage ="";
           
        if($('#other_prev_reading').val() == ""){

          alert('Required Input in previous reading !');
          $('#other_present_reading').val("");
          $('#other_prev_reading').focus();

        }
        else{
             if(other_present_reading > other_previous_reading){
                   calc_usage = parseFloat(other_present_reading) - parseFloat(other_previous_reading);
                  $('#other_usage').attr("value",calc_usage.toFixed(2));
                  $('#other_adjustment').focus();        
                }
            else{
                  
                   alert("Invalid Input! Present reading must greater than previous reading");
                      $('#other_present_reading').val("");
                      $('#other_prev_reading').focus();
                }
            }

      }

function other_calc_usage(){
    var other_adjust = parseFloat($('#other_adjustment').val());
    var temp_usage = parseFloat($('#other_usage').val());
    var calc_adjust="";
    
    calc_adjust = parseFloat(temp_usage) - parseFloat(other_adjust);
    
    if(calc_adjust <= 0){
        $('#other_usage').attr("value","0.00");
        $('#other_rate').attr("disabled", true);
        $('#other_payable').attr("value","0.00");
        $('#rental_prev_reading').focus();
    }
    else{
        $('#other_usage').attr("value",calc_adjust.toFixed(2));
        $('#other_rate').focus();
    }
    
}



function otherrate(){
        var calc_usage = $('#other_usage').val();
        var otherrate = $('#other_rate').val();

        var calc_payable = parseFloat(calc_usage) * parseFloat(otherrate);
        
        if($('#other_present_reading').val() == ""){

            alert('Input must required in present reading !');
            $('#other_rate').val("");
            $('#other_prev_reading').focus();
          }
          else
          {
            if($('#other_rate').val()!=""){
               $('#other_payable').attr("value",calc_payable.toFixed(2));

          }

          }


      }



function clearChechout()
{
  $('#co_totalrent').attr("value","");
  $('#co_totalpayment').attr("value","");
  $('#co_exoutdate').attr("value","");
  $('#co_rtype').attr("value","");
  $('#co_ratype').attr("value","");
  $('#co_rclass').attr("value","");
  $('#co_rate').attr("value","");
  $('#co_cidate').attr("value","");
  $('#co_name').attr("value","");
  $('#co_balance').attr("value","");
}

/*function totalutility()
{
    if($('#co_totalutility').val()=="" && $('#co_pinalty').val()=="" || $('#co_totalutility').val()=="" && $('#co_discount').val()=="")
    {
         $('#co_totalpayment').attr("value","");
         $('#co_totalpayment').attr("value",$('#co_totalrent').val());
        return;
    }
    else if($('#co_totalutility').val()!="" && $('#co_pinalty').val()=="") 
    {
    
        var rent = 0;
        var utility = 0;
        var total = 0;
        rent = parseFloat($('#co_totalrent').val());
        utility = parseFloat($('#co_totalutility').val());
        total = (utility + rent);
        $('#co_totalpayment').attr("value",total.toFixed(2)); 
    }
  
}*/

function addPinalty()
{
    var utility = 0;
    var pinalty = 0;
    var balance = 0;
    var total = 0;
    var total2 = 0;
    var balanceAmount = 0;
    utility = parseFloat($('#co_totalutility').val());
    pinalty = parseFloat($('#co_pinalty').val());
        balanceAmount = parseFloat($('#co_balanceAmount').val());
        if(balanceAmount < 0)
        {
          balance = Math.abs(balanceAmount);
        }
        else if(balanceAmount >= 0)
        {
            balance = balanceAmount;
        }
    if($('#co_pinalty').val()!="" && $('#co_totalutility').val()!="")
    {

        total = utility + pinalty;
        total2 = total - balance;
        if(total2 >= 0)
        {
              $('#co_totalpayment').attr("value",total2.toFixed(2));
              $('#co_balance').val("");
        }
        else if(total2 < 0 )
        {   
             $('#co_totalpayment').attr("value",Math.abs(total2.toFixed(2)));
        }
    }
   /* else if($('#co_pinalty').val()!="" && $('#co_totalutility').val()=="")  
    {

        total2 = pinalty - balance;
        if(total2 >= 0)
        {
           $('#co_totalpayment').attr("value",total2.toFixed(2));
           $('#co_balance').val("");
        }
        else if(total2 < 0)
        {   
           $('#co_balance').attr("value",Math.abs(total2.toFixed(2)));
        }
    }
    else if($('#co_pinalty').val()=="" && $('#co_totalutility').val()!="")
    {
        if(balanceAmount < 0)
        {
          balance = Math.abs(balanceAmount);
        }
        else if(balanceAmount >= 0)
        {
            balance = balanceAmount;
        }
        total2 = utility - balance;
               if(total2 >= 0)
        {
           $('#co_totalpayment').attr("value",total2.toFixed(2));
           $('#co_balance').val("");
        }
        else if(total2 < 0)
        {   
           $('#co_balance').attr("value",Math.abs(total2.toFixed(2)));
        }
    }*/
}

function getDiscount()
{
    var balanceAmount = 0;
    var balance = 0;
    var utility = 0;
    var pinalty = 0;
    var discount = 0;
    var Total = 0,total2 = 0;
        utility = parseFloat($('#co_totalutility').val());
        pinalty = parseFloat($('#co_pinalty').val());
        discount = parseFloat($('#co_discount').val());
        balance = parseFloat($('#co_balanceAmount').val());
    if($('#co_discount').val()!="" && $('#co_pinalty').val()!="" || $('#co_discount').val()!="" && $('#co_totalutility').val()!="")
    {
        balanceAmount = parseFloat($('#co_balanceAmount').val());
        if(balanceAmount < 0)
        {
          balance = Math.abs(balanceAmount);
        }
        else if(balanceAmount >= 0)
        {
            balance = balanceAmount;
        }   
          total = ((utility + pinalty) - discount);
          total2 = total - balance;
        if(total2 >= 0)
        {
           $('#co_totalpayment').attr("value",total2.toFixed(2));
           $('#co_balance').val("");
        }
        else if(total2 < 0)
        {   
           $('#co_balance').attr("value",Math.abs(total2.toFixed(2)));
         }
    }
}

 function amountPaid()
 {
    if($('#co_amountpaid').val() == "")
    {
      $('#co_balance').attr("value","");
    }
    else if($('#co_amountpaid').val() != "")
    {
      var payable = 0;
      var amountPaid = 0;
      var total = 0;
      payable = $('#co_totalpayment').val();
      amountPaid = $('#co_amountpaid').val();
      total = payable - amountPaid;
      $('#co_balance').attr("value",total.toFixed(2));
    }
 }

 function totalCheckout()
 {
   
        var deposit = 0;
        var rent = 0;
        var total = 0;
        var balance = 0;
        var totalfinal = 0;
        total = parseFloat(rent - deposit);
        if($('#co_depositAmount').val()!=""){
        deposit = parseFloat($('#co_depositAmount').val());
        rent = parseFloat($('#co_totalutility').val());
        $('#co_balanceAmount').attr("value",total.toFixed(2));
        
        if(total > 0)
        {
            $('#co_totalpayment').attr("value",total.toFixed(2));
        }
        else
        {
            $('#co_totalpayment').attr("value","0.0");

        }
          if(total < 0)
          {
          $('#co_balance').attr("value",Math.abs(total.toFixed(2)));
           
          }
              
        }
    }

 
 function setTotalCheckOutPayment()
 {
    var utility = 0;
    var penalty = 0;
    var discount = 0;
    var total = 0;
    var payable = 0;
    var payment = 0;
    var balance = 0;
    var totalfinal = 0;
    balance = parseFloat($('#co_balanceAmount').val());
    utility = parseFloat($('#co_totalutility').val());
    penalty = parseFloat($('#co_pinalty').val());
    discount = parseFloat($('#co_discount').val());
    if(balance > 0)
    {
    total = (balance + penalty + utility) - discount;
    }
    else if(balance < 0)
    {
    total = balance - ((penalty + utility) - discount);
    }

    $('#co_totalpayment').attr("value",total);

 }
function roomCheckOut()
{
    if($('#co_name').val()=="" || $('#co_amountpaid').val()=="")
    {
      alert("Cannot submit no transaction found.");
    }
    else
    { 
      var url = "../php-db/ajax.php?action=getAccount";
        $.getJSON(url,function(data)
        {        


      var url = "../php-db/ajax.php?action=roomCheckOut";
      var data = 
      {
        "admin" : data.name,
        "checkout_room_id" : $('#checkout_room_id').val(),
        "checkout_occu_id" : $('#checkout_occu_id').val(),
        "co_rno":$('#co_rno').val(),
        "co_name":$('#co_name').val(),
        "co_ornumber":$('#co_ornumber').val(),
        "co_cidate":$('#co_cidate').val(),
        "co_rate":$('#co_rate').val(),
        "co_rclass":$('#co_rclass').val(),
        "co_rtype":$('#co_rtype').val(),
        "co_ratype":$('#co_ratype').val(),
        "co_exoutdate":$('#co_exoutdate').val(),
        /*"co_totalrent":$('#co_totalrent').val(),*/
        "co_totalutility":$('#co_totalutility').val(),
        "co_pinalty":$('#co_pinalty').val(),
        "co_discount":$('#co_discount').val(),
        "co_totalpayment":$('#co_totalpayment').val(),
        "co_amountpaid":$('#co_amountpaid').val(),
        "co_balance":$('#co_balance').val()

      };

      console.log(data);
    $.post(url,data,function(result){
        alert(result);
      });

    });
    }
}



//EndCheckoutForm
//////////////////////////////////////////////////////////////////////////////////////////////////////////


//End of Active Occupant
///////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////// QUERY FOR CHECK OUT ///////////////////////////////////////////
function queryChechOutNumber()
{

  var url = "../php-db/ajax.php?action=queryDeposit&room="+ $('#co_rno').val();
  $.get(url,function(result){
    if(result)
    {
        $('#co_depositAmount').attr("value",result);
    }
  });


  var url1 = "../php-db/ajax.php?action=querychechoutnumber&room="+ $('#co_rno').val();
 
  

  $.getJSON(url1,function(result){
    if(result=="Room number or bed number not found.")
    {
      $('#co_name').attr("value","");
      $('#co_cidate').attr("value","");
      $('#co_rate').attr("value","");
      $('#co_rclass').attr("value","");
      $('#co_rtype').attr("value","");
      $('#co_ratype').attr("value","");
      $('#co_exoutdate').attr("value","");
      $('#co_totalrent').attr("value","");
      alert(result);
    }
    else
    {
     $('#checkout_room_id').attr("value",result.room_id);
     $('#checkout_occu_id').attr("value",result.occu_ai_id);
     $('#co_name').attr("value",result.occu_ai_name);
     $('#co_cidate').attr("value",result.contract_start);
     $('#co_rate').attr("value",result.rate);
     $('#co_rclass').attr("value",result.room_typeA);
     $('#co_rtype').attr("value",result.room_typeB);
     $('#co_ratype').attr("value",result.application_type);
     $('#co_exoutdate').attr("value",result.duration_until);
     $('#co_totalrent').attr("value",result.rate);
     
     totalCheckout();

    }

    var queryPayment = "../php-db/ajax.php?action=queryPaymentCheckout&occuId="+$('#checkout_occu_id').val();
    $.getJSON(queryPayment,function(data){
      
        $('#co_totalutility').attr("value",data.balance);

       var totaldeposit = 0.00;
       var totalutility = 0.00;
       var totalBalance = 0.00;

       totaldeposit = parseFloat($('#co_depositAmount').val());
       totalutility = parseFloat($('#co_totalutility').val());

   
      totalBalance = totalutility - totaldeposit;
      $('#co_balanceAmount').attr("value",totalBalance.toFixed(2));
      $('#co_totalpayment').attr("value",totalBalance.toFixed(2));

    });
  

      setTotalCheckOutPayment();

  });

   

}



/////////////////////////////////////////// New OCCUPANT ADDED //////////////////////////////////////////////
function fillupformsubmit()
{
    var url ="../php-db/ajax.php?action=fillupform";
     if($('#rd_rate').val()=="")
     {
        alert("No room selected.");
        return;
     }
     else
     {
            var company_name;
            if($('#companyName').val() == "Others")
             {
                company_name = $('#othercompany').val();
             }
             else{
                company_name = $('#companyName').val();
             }
    var data = 
    {
        "cfr_no":$('#cfr_no').val(),
        "ffc_date":$('#ffc_date').val(),
        "ffc_udate":$('#ffc_udate').val(),
        "rd_rate":$('#rd_rate').val(),
        "rd_typeA":$('#rd_typeA').val(),
        "rd_typeB":$('#rd_typeB').val(),
        "rd_a_Type":$('#rd_a_Type').val(),
        "rd_comp_relocator": company_name,
        "ffo_name":$('#ffo_name').val(),
        "ffo_bdate":$('#ffo_bdate').val(),
        "ffo_number":$('#ffo_number').val(),
        "ffo_address":$('#ffo_address').val(),
        "ffo_city":$('#ffo_city').val(),
        "ffo_province":$('#ffo_province').val(),
        "ffo_zipcode":$('#ffo_zipcode').val(),
        "ffo_ownrent":$('#ffo_ownrent').val(),
        "ffo_mp_rent":$('#ffo_mp_rent').val(),
        "ffo_howlong":$('#ffo_howlong').val(),
        "ffo_p_address":$('#ffo_p_address').val(),
        "ffo_p_ownrent":$('#ffo_p_ownrent').val(),
        "ffo_p_paymentrent":$('#ffo_p_paymentrent').val(),
        "ffo_p_howlong":$('#ffo_p_howlong').val(),
        "ffo_c_employee":$('#ffo_c_employee').val(),
        "ffo_c_address":$('#ffo_c_address').val(),
        "ffo_c_howlong":$('#ffo_c_howlong').val(),
        "ffo_c_phone":$('#ffo_c_phone').val(),
        "ffo_c_email":$('#ffo_c_email').val(),
        "ffo_c_timeofshift":$('#ffo_c_timeofshift').val(),
        "ffo_c_city":$('#ffo_c_city').val(),
        "ffo_c_province":$('#ffo_c_province').val(),
        "ffo_c_zipcode":$('#ffo_c_zipcode').val(),
        "ffo_c_position":$('#ffo_c_position').val(),
        "ffo_c_salary":$('#ffo_c_salary').val(),
        "ffo_c_dschedule":$('#ffo_c_dschedule').val(),
        //////////////////  Emergency Contact /////////////
        "ffo_p_residing":$('#ffo_p_residing').val(),
        "ffo_p_residing_address":$('#ffo_p_residing_address').val(),
        "ffo_p_residing_city":$('#ffo_p_residing_city').val(),
        "ffo_p_residing_province":$('#ffo_p_residing_province').val(),
        "ffo_p_residing_zipcode":$('#ffo_p_residing_zipcode').val(),
        "ffo_p_residing_phone":$('#ffo_p_residing_phone').val(),
        "ffo_p_residing_relationship":$('#ffo_p_residing_relationship').val(),
        ///////////////////// Co-tenant Information ///////////////////
        "ffo_co_name":$('#ffo_co_name').val(),
        "ffo_co_bdate":$('#ffo_co_bdate').val(),
        "ffo_co_ssn":$('#ffo_co_ssn').val(),
        "ffo_co_phone":$('#ffo_co_phone').val(),
        "ffo_co_address":$('#ffo_co_address').val(),
        "ffo_co_city":$('#ffo_co_city').val(),
        "ffo_co_province":$('#ffo_co_province').val(),
        "ffo_co_zipcode":$('#ffo_co_zipcode').val(),
        "ffo_co_ownrenter":$('#ffo_co_ownrenter').val(),
        "ffo_co_monthlypaymentrent":$('#ffo_co_monthlypaymentrent').val(),
        "ffo_co_howlong":$('#ffo_co_howlong').val(),
        "ffo_co_paddress":$('#ffo_co_paddress').val(),
        "ffo_co_infocity":$('#ffo_co_infocity').val(),
        "ffo_co_infoprovince":$('#ffo_co_infoprovince').val(),
        "ffo_co_infonzipcode":$('#ffo_co_infonzipcode').val(),
        "ffo_co_infoownrent":$('#ffo_co_infoownrent').val(),
        "ffo_co_infomonthlypaymentrent":$('#ffo_co_infomonthlypaymentrent').val(),
        "ffo_co_infohowlong":$('#ffo_co_infohowlong').val(),
         ////////////////////// Registry of Occupant /////////////////////// 
         "ffo_roo_name1":$('#ffo_roo_name1').val(),
         "ffo_roo_name2":$('#ffo_roo_name2').val(),
         "ffo_roo_name3":$('#ffo_roo_name3').val(),
         "ffo_roo_name4":$('#ffo_roo_name4').val(),
         "ffo_roo_address1":$('#ffo_roo_address1').val(),
         "ffo_roo_address2":$('#ffo_roo_address2').val(),
         "ffo_roo_address3":$('#ffo_roo_address3').val(),
         "ffo_roo_address4":$('#ffo_roo_address4').val(),
         "ffo_roo_age1":$('#ffo_roo_age1').val(),
         "ffo_roo_age2":$('#ffo_roo_age2').val(),
         "ffo_roo_age3":$('#ffo_roo_age3').val(),
         "ffo_roo_age4":$('#ffo_roo_age4').val(),
         "ffo_roo_phone1":$('#ffo_roo_phone1').val(),
         "ffo_roo_phone2":$('#ffo_roo_phone2').val(),
         "ffo_roo_phone3":$('#ffo_roo_phone3').val(),
         "ffo_roo_phone4":$('#ffo_roo_phone4').val(),
         "cfr_no":$('#cfr_no').val(),
         "ffc_date":$('#ffc_date').val(),
         "ffc_udate":$('#ffc_udate').val(),
         "rd_a_Type":$('#rd_a_Type').val()
       };
       $.post(url,data,function(data){
        alert(data);
    });
  }
}

