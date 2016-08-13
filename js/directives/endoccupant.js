
(function($){

  $.extend({
    playSound: function(){
      return $(
        '<audio autoplay="autoplay" style="display:none;">'
          + '<source src="' + arguments[0] + '.mp3" />'
          + '<source src="' + arguments[0] + '.ogg" />'
          + '<embed src="' + arguments[0] + '.mp3" hidden="true" autostart="true" loop="false" class="playSound" />'
        + '</audio>'
      ).appendTo('body');
    }
  });

})(jQuery);

$(function(){
  pushNotify();
 $.playSound("../sounds/notification");
});


function extendOccupant(id){

var url = "../php-db/ajax.php?action=extendEndOccupant&id="+id;
  $.post(url,function(data){
    alert(data);

    pushNotify();
    $("#endOccupant").empty();
      var url = "../php-db/ajax.php?action=queryEndOccupant";
                
                $.getJSON(url,function(data){
                if(data != "No End Occupant Right Now"){
                    for(var i=0; i<data.length; i++){
                      var c = data[i];
                            addEndOccupant(c);
                           
                       }
                  }
                });

               function addEndOccupant(data){
                 
                    
                        $('#tableEndOccupant').append(
                          '<tr class="success">'+
                          '<td >'+data.room_number+'</td>'+
                          '<td >'+data.room_typeA+'</td>'+
                          '<td >'+data.room_typeB+'</td>'+
                          '<td >'+data.rate+'</td>'+
                          '<td >'+data.occu_ai_name+'</td>'+
                          '<td >'+data.relocator_company+'</td>'+
                          '<td >'+data.duration_until+'</td>'+
                          '<td><button="button" class="btn btn-warning" style="width:70%" onclick="extendOccupant('+data.contract_id+')"><i class="fa fa-plus-square"></i> Extend</button><td/>'+
                          '</tr>');
                       
                    }

  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(2)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').removeClass('active');
  $('#form-sidebar li:nth-child(4)').removeClass('active');
  $('#form-sidebar li:nth-child(5)').removeClass('active');
  $('#form-sidebar2 li:nth-child(1)').removeClass('active');
  $('#five').removeClass('active');
  $('#six').removeClass('active');      
  $('#four').addClass('active');
      


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
  

        $("#endOccupant").append(
            '<div class="panel">'+
            '<div class="panel-body">'+
            '<h3>List of End Contract</h3>'+
            '<table class="table table-hover" cellspacing="0" width="100%" style="font-size:14px">'+
              '<thead>'+

               
                '<tr>'+
                 
                  '<th>Room No.</th>'+
                  '<th>Room Class</th>'+
                  '<th>Room Type</th>'+
                  '<th>Room Rate</th>'+
                  '<th>User Info.</th>'+
                  '<th>Relocator Company</th>'+
                  '<th>End Contract</th>'+
                  '<th>Extension Button</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody id="tableEndOccupant">'+
              '</tbody>'+
            '</table>'+
            '</div>'+
            '</div>'

    );

  });


}
function pushNotify(){
  
       setTimeout(pushNotify,1000)  
       
       var url = "../php-db/ajax.php?action=queryEndOccupant";
                $.getJSON(url,function(data){
                
                if(data!="No End Occupant Right Now"){
                var count = data.length;
               
                  $('#badge_count').text(count);
                  
                }
                 });
}


$(document).ready(function(){
  $('#occupantEnd').click(function(){

       var url = "../php-db/ajax.php?action=queryEndOccupant";
                
                $.getJSON(url,function(data){
                if(data != "No End Occupant Right Now"){
                    for(var i=0; i<data.length; i++){
                      var c = data[i];
                            addEndOccupant(c);
                           
                       }
                  }
                });

               function addEndOccupant(data){
                 
                    
                        $('#tableEndOccupant').append(
                          '<tr class="success">'+
                          '<td >'+data.room_number+'</td>'+
                          '<td >'+data.room_typeA+'</td>'+
                          '<td >'+data.room_typeB+'</td>'+
                          '<td >'+data.rate+'</td>'+
                          '<td >'+data.occu_ai_name+'</td>'+
                          '<td >'+data.relocator_company+'</td>'+
                          '<td >'+data.duration_until+'</td>'+
                          '<td><button="button" class="btn btn-warning" style="width:70%" onclick="extendOccupant('+data.contract_id+')"><i class="fa fa-plus-square"></i> Extend</button><td/>'+
                          '</tr>');
                       
                    }

  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(2)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').removeClass('active');
  $('#form-sidebar li:nth-child(4)').removeClass('active');
  $('#form-sidebar li:nth-child(5)').removeClass('active');
  $('#form-sidebar2 li:nth-child(1)').removeClass('active');
  $('#five').removeClass('active');
  $('#six').removeClass('active');      
  $('#four').addClass('active');
      


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
  

        $("#endOccupant").append(
            '<div class="panel">'+
            '<div class="panel-body">'+
            '<h3>List of End Contract</h3>'+
            '<table class="table table-hover" cellspacing="0" width="100%" style="font-size:14px">'+
              '<thead>'+

               
                '<tr>'+
                 
                  '<th>Room No.</th>'+
                  '<th>Room Class</th>'+
                  '<th>Room Type</th>'+
                  '<th>Room Rate</th>'+
                  '<th>User Info.</th>'+
                  '<th>Relocator Company</th>'+
                  '<th>End Contract</th>'+
                  '<th>Extension Button</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody id="tableEndOccupant">'+
              '</tbody>'+
            '</table>'+
            '</div>'+
            '</div>'

    );

    });


});/*End of Occupant*/

