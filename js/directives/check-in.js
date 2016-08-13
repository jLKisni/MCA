//////////////////////////////////////////// FILL - UP FORm ////////////////////////////////////

$(document).ready(function(){



  $("#FillUpForm").click(function(){
  
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
  
             
          });

  $('#form-sidebar li:nth-child(4)').removeClass('active');
  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').removeClass('active');
  $('#form-sidebar li:nth-child(5)').removeClass('active');
  $('#form-sidebar2 li:nth-child(1)').removeClass('active');
  $('#four').removeClass('active');
  $('#five').removeClass('active');
  $('#six').removeClass('active');
  $('#form-sidebar li:nth-child(2)').addClass('active');
  $('.table-responsive').empty();
  $('#RegistrationForm').empty();
  $('#UtilityFormPanel').empty();
  $("#CheckOutForm").empty();
  $('#changepassword').empty();
  $('#showprofile').empty();
  $("#CheckOutForm").empty();
  $('#editprofile').empty();
  $(".table-responsive").empty();
  $('.table-responsive').empty();
  $('#RegistrationForm').empty();
  $(".table-responsive").empty();
  $('#roomstatuslayoutform').empty();
  $('#showprofile').empty();
  $('#changepassword').empty();
  $('#RegistrationForm').empty();
  $('#UtilityFormPanel').empty();
  $('#editprofile').empty();
  $("#room_status").empty();
  $('#roomEdit').empty();
  $('#endOccupant').empty();
  $('#transactionLogs').empty();
  $('#editableRoom').empty();
  $('#mca_tracker').empty();
  $('#PaymentUtility').empty();
  $('#RegistrationForm').append(
        '<div class="panel" style="background-color:lightskyblue">'+
        '<div class="panel-body" >'+
        '<h3>Registration Details</h3>'+
                        '<br>'+
                        '<div id="fillupformerror"></div>'+
                        '<br>'+
                        
                        '<form class="form-inline" >'+
                        '<form id="fillupreset">'+
                            '<div class="RegFormLeft">'+
                                '<div class="RegFormLeft2"> <span>Room/Bed Number : </span> </div>'+
                                '<select class="form-control" id="cfr_no" oninput="queryRoomsNumber()" style="width:25%">'+
                                '<option></option>'+
                                '</select>'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"> <span>Check in Date :</span> </div>'+
                                '<input type="date" class="form-control" id="ffc_date" style="width:40%" />'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"> <span>Duration Until:</span> </div>'+
                                '<input type="date" class="form-control" id="ffc_udate" style="width:40%">'+
                            '</div>'+

                            '<!--end of registration form left-->'+
                            '<div class="RegFormRight">'+
                            '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"> <span>Room rate :</span> </div>'+
                                '<input type="text" class="form-control" id="rd_rate" placeholder="&#8369;" disabled>'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"><span>Room Class:</span></div>'+
                                '<input type="text" class="form-control" id="rd_typeA" placeholder="" disabled>'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"> <span>Room Type :</span></div>'+
                                '<input type="text" class="form-control" id="rd_typeB" placeholder="" disabled>'+
                                 '<div class="clearfix"></div>'+
                                 '<div class="RegFormLeft2"><span>Application Type:</span></div>'+
                                  '<select class="form-control" onclick="selectRelocator()" id="rd_a_Type">'+
                                  '<option>Bed Spacer</option>'+
                                  '<option>Room Tenant</option>'+
                                  '<option>Pad Tenant</option>'+
                                  '<option>Relocator</option>'+
                                 '</select>'+
                                 '<div class="clearfix"></div>'+
                                 '<div id="relocatorside" hidden>'+
                                 '<div class="RegFormLeft2"><span>Relocators Company:</span></div>'+
                                  '<select class="form-control" id="companyName" onclick="selectCompany()">'+
                                  '<option></option>'+
                                  '<option>Convergys</option>'+
                                  '<option>JPMorgan</option>'+
                                  '<option>WiPro</option>'+
                                  '<option>Others</option>'+
                                 '</select>'+
                                 '</div>'+
                                 '<div class="clearfix"></div>'+
                                 '<div id="relocatorside_other" hidden>'+
                                '<div class="RegFormLeft2"> <span>Others:</span></div>'+
                                '<input type="text" class="form-control"" id="othercompany" placeholder="">'+
                                '</div>'+
                            '</div>'+
                            '<!--end of Registration form right-->'+
                            '<div class="clearfix"></div>'+
                            
                            '<legend>Applicant Information</legend>'+
                            '<!--Application Information Begin-->'+
                            '<label>Name: </label>'+
                            '<input type="text" class="form-control" id="ffo_name">'+
                            '<br> <span class="dob">Date Of Birth: </span>'+
                            '<input type="date" class="form-control" style="width:17%;" id="ffo_bdate">'+
                            '<label style="margin-left:25%; margin-top:1%">Contact No.</label>'+
                            '<input type="text" class="form-control" id="ffo_number">'+
                            '<label>Current Address: </label>'+
                            '<input type="text" class="form-control" id="ffo_address">'+
                            '<br>'+
                            '<label style="margin-top:1%">City: </label>'+
                            '<input type="text" class="form-control" style="width:17%" id="ffo_city">'+
                            '<label style="margin-left:7%">Province: </label>'+
                            '<input type="text" class="form-control" style="width:13%" id="ffo_province">'+
                            '<label style="margin-left:7%">Zip Code: </label>'+
                            '<input type="text" class="form-control" style="width:15%" id="ffo_zipcode">'+
                            '<br>'+
                            '<label style="margin-top:1%">Own Rent:</label>'+
                            '<input type="text" class="form-control" style="width:15%"  placeholder="(optional)" id="ffo_ownrent">'+
                            '<label style="margin:0 7%;width:20%;">Monthly Payment or Rent: </label>'+
                            '<input type="text" class="form-control" style="width:15%"  placeholder="(optional)" id="ffo_mp_rent">'+
                            '<label style="margin-left:2%">How long ?</label>'+
                            '<input type="text" class="form-control" style="width:7%"  placeholder="(optional)" id="ffo_howlong">'+
                            '<br>'+
                            '<label style="width:13%;margin-top:1%">Previous Address: </label>'+
                            '<input type="text" class="form-control"  placeholder="(optional)" id="ffo_p_address">'+
                            '<br>'+
                            '<label style="margin-top:1%">Own Rent:</label>'+
                            '<input type="text" class="form-control" style="width:15%"  placeholder="(optional)" id="ffo_p_ownrent">'+
                            '<label style="margin:0 7%;width:20%;">Monthly Payment or Rent: </label>'+
                            '<input type="text" class="form-control" style="width:15%"  placeholder="(optional)" id="ffo_p_paymentrent">'+
                            '<label style="margin-left:2%">How long ?</label>'+
                            '<input type="text" class="form-control" style="width:7%"  placeholder="(optional)" id="ffo_p_howlong">'+
                            '<hr>'+
                            '<legend>Employment Information</legend>'+
                            '<!--Employement Information Begin-->'+
                            '<label style="margin-top:1px;width:15%">Current Employee:</label>'+
                            '<input type="text" class="form-control"  id="ffo_c_employee">'+
                            '<br>'+
                            '<label style="margin-top:1%;width:15%">Employer address: </label>'+
                            '<input type="text" class="form-control"  id="ffo_c_address">'+
                            '<label style="margin-left:7%">How Long ? :</label>'+
                            '<input type="text" class="form-control" style="width:10%" id="ffo_c_howlong">'+
                            '<br>'+
                            '<label style="width:15%">Phone: </label>'+
                            '<input type="text" class="form-control" style="width:17%" id="ffo_c_phone">'+
                            '<label style="margin-left:3%;margin-top:1%">Email: </label>'+
                            '<input type="email" class="form-control" style="width:13%" id="ffo_c_email">'+
                            '<label style="margin-left:7%; width:10%;margin-top:1%">Time of Shift: </label>'+
                            '<input type="text" class="form-control" style="width:15%" id="ffo_c_timeofshift">'+
                            '<br>'+
                            '<label style="margin-top:1%;width:15%">City: </label>'+
                            '<input type="text" class="form-control" style="width:17%" id="ffo_c_city">'+
                            '<label style="margin-left:3%;margin-top:1%">Province: </label>'+
                            '<input type="text" class="form-control" style="width:13%" id="ffo_c_province">'+
                            '<label style="margin-left:7%;width:10%;margin-top:1%">Zip Code: </label>'+
                            '<input type="text" class="form-control" style="width:15%" id="ffo_c_zipcode">'+
                            '<br>'+
                            '<label style="margin-top:1%;width:15%">Position:</label>'+
                            '<input type="text" class="form-control" style="width:15%"  id="ffo_c_position">'+
                            '<label style="margin-left:5%;margin-top:1%">Hourly Salary: </label>'+
                            '<input type="text" class="form-control" style="width:15%"  id="ffo_c_salary">'+
                            '<label style="margin-left:5%;width:15%">Day Off Schedule: ?</label>'+
                            '<input type="text" class="form-control" style="width:10%" id="ffo_c_dschedule">'+
                            '<hr>'+
                            '<legend>Emergency Contact</legend>'+
                            '<!--Employement Information Begin-->'+
                            '<label style="width:30%">Name of a person not residing wih you:</label>'+
                            '<input type="text" class="form-control" style="width:20%" placeholder="(optional)" id="ffo_p_residing">'+
                            '<label style="margin-left:2%">Address: </label>'+
                            '<input type="text" class="form-control" placeholder="(optional)" id="ffo_p_residing_address">'+
                            '<br>'+
                            '<label style="margin-top:1%">City: </label>'+
                            '<input type="text" class="form-control" style="width:17%" placeholder="(optional)" id="ffo_p_residing_city">'+
                            '<label style="margin-left:2%;margin-top:1%">Province: </label>'+
                            '<input type="text" class="form-control" style="width:13%" placeholder="(optional)" id="ffo_p_residing_province">'+
                            '<label style="margin-left:2%;width:7%;margin-top:1%">Zip Code: </label>'+
                            '<input type="text" class="form-control" style="width:15%" placeholder="(optional)" id="ffo_p_residing_zipcode">'+
                            '<label>Phone:</label>'+
                            '<input type="text" class="form-control" style="width:10%" placeholder="(optional)" id="ffo_p_residing_phone">'+
                            '<label>Relationship:</label>'+
                            '<input type="text" class="form-control" style="margin-top:1%;width:17%" placeholder="(optional)" id="ffo_p_residing_relationship"></input>'+
                            '<hr>'+
                            '<legend>Co-tenant Information</legend>'+
                            '<label>Name:</label>'+
                            '<input type="text" class="form-control" id="ffo_co_name">'+
                            '<br>'+
                            '<label>Date of birth</label>'+
                            '<input type="date" class="form-control" style="margin-top:1%;width:16%" id="ffo_co_bdate">'+
                            '<label style="margin-left:4%;width:7%;margin-top:1%">SSN: </label>'+
                            '<input type="text" class="form-control" style="margin-top:1%;width:16%" id="ffo_co_ssn">'+
                            '<label style="margin-left:4%;width:7%;margin-top:1%">Phone: </label>'+
                            '<input type="text" class="form-control" style="margin-top:1%;width:16%" id="ffo_co_phone">'+
                            '<br>'+
                            '<label style="width:13%;margin-top:1%">Current Address: </label>'+
                            '<input type="text" class="form-control" id="ffo_co_address">'+
                            '<br>'+
                            '<label style="margin-top:1%">City: </label>'+
                            '<input type="text" class="form-control" style="width:17%" id="ffo_co_city">'+
                            '<label style="margin-left:7%">Province: </label>'+
                            '<input type="text" class="form-control" style="width:13%" id="ffo_co_province">'+
                            '<label style="margin-left:7%">Zip Code: </label>'+
                            '<input type="text" class="form-control" style="width:15%" id="ffo_co_zipcode">'+
                            '<br>'+
                            '<label style="margin-top:1%">Own Rent:</label>'+
                            '<input type="text" class="form-control" style="width:15%" id="ffo_co_ownrenter">'+
                            '<label style="margin-left:7%;width:18%;">Monthly Payment or Rent: </label>'+
                            '<input type="text" class="form-control" style="width:15%" id="ffo_co_monthlypaymentrent">'+
                            '<label style="margin-left:9%">How long ?</label>'+
                            '<input type="text" class="form-control" style="width:7%" id="ffo_co_howlong">'+
                            '<label style="width:13%;margin-top:1%">Previous Address: </label>'+
                            '<input type="text" class="form-control" id="ffo_co_paddress">'+
                            '<br>'+
                            '<label style="margin-top:1%;width:10%">City: </label>'+
                            '<input type="text" class="form-control" style="width:17%" id="ffo_co_infocity">'+
                            '<label style="margin-left:3%;margin-top:1%">Province: </label>'+
                            '<input type="text" class="form-control" style="width:13%" id="ffo_co_infoprovince">'+
                            '<label style="margin-left:7%;width:10%;margin-top:1%">Zip Code: </label>'+
                            '<input type="text" class="form-control" style="width:15%" id="ffo_co_infonzipcode">'+
                            '<br>'+
                            '<label style="margin-top:1%">Own Rented:</label>'+
                            '<input type="text" class="form-control" style="width:15%" id="ffo_co_infoownrent">'+
                            '<label style="margin-left:5%;width:20%;">Monthly Payment or Rent: </label>'+
                            '<input type="text" class="form-control" style="width:15%" id="ffo_co_infomonthlypaymentrent">'+
                            '<label style="margin-left:2%">How long ?</label>'+
                            '<input type="text" class="form-control" style="width:7%" id="ffo_co_infohowlong">'+
                            '<hr>'+
                            '<legend>Registry Of Occupants</legend>'+
                            '<div class="table-responsive">'+
                                '<table class="table table-hover">'+
                                    '<thead>'+
                                        '<tr>'+
                                            '<th>Name</th>'+
                                            '<th>Address</th>'+
                                            '<th>Age</th>'+
                                            '<th>Phone</th>'+
                                        '</tr>'+
                                    '</thead>'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_name1">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_name2">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_name3">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_name4">'+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_address1">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_address2">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_address3">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_address4">'+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_age1">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_age2">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_age3">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_age4">'+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_phone1">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_phone2">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_phone3">'+
                                            '</td>'+
                                            '<td>'+
                                                '<input type="text" class="form-control" style="width:100%" id="ffo_roo_phone4">'+
                                            '</td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</div>'+
                            
                            '<div class="btn-formsubmit">'+
                                '<button type="reset" class="btn btn-danger">Reset</button>'+
                                '<button type="button" class="btn btn-success" onclick="fillupformsubmit()">Submit</button>'+
                                
                            '</div>'+
                        '</form>'+
                        '</form>'+
                        '</div>'+
                        '</div>'               
                   );/*Append fillUpform*/
      
  });/*Begin FillUpForm*/

});