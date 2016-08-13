


function printCheckout(){

        $('.btn-formsubmit').hide();
     
        $('#removeForm').hide();
        var storepage = document.body.innerHTML;
        //var printContent = document.getElementById(printingUtility);

        window.print();
        //document.body.innerHtml = printContent;
        $('#removeForm').show();
}

//Checkout FOrm, Utility and OverView Report
////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){

$("#CheckOut").click(function(){
    queryRoomsVacant();
 
  $('#form-sidebar li:nth-child(4)').removeClass('active');
  $('#form-sidebar li:nth-child(1)').removeClass('active');
  $('#form-sidebar li:nth-child(2)').removeClass('active');
  $('#form-sidebar li:nth-child(3)').addClass('active');
  $('#endOccupant').empty();
  $('#CheckOutForm').empty();
  $('.table-responsive').empty();
  $('#RegistrationForm').empty();
  $('.table-responsive').empty();
  $('#UtilityFormPanel').empty(); 
  $('#changepassword').empty();
  $('#displayLogoHere').empty();
  $('#showprofile').empty();
  $("#CheckOutForm").empty();
  $('#editprofile').empty();
  $('#roomstatuslayoutform').empty();
   $("#endoccupantdisplay").empty();
  $(".table-responsive").empty();
  $('.table-responsive').empty();
  $('#RegistrationForm').empty();
  $('#CheckOutForm').empty();
  $("#room_status").empty();
    $('#editableRoom').empty();
    $('#mca_tracker').empty();
    $('#endOccupant').empty();
    $('#displaypaymentsUtility').empty();
  $('#CheckOutForm').append(
    '<div class="panel" style="background-color:beige; font-size:13px">'+
        '<div class="panel-body" >'+
        '<h3 class=removeecheckout" id="removeForm">Check Out Form</h3>'+
                        '<br>'+
                        '<form class="form-inline">'+
                        
                            '<div class="RegFormLeft">'+
                                '<div class="RegFormLeft2" style="width:45%"> <span>Room/Bed Number : </span> </div>'+
                                 '<select class="form-control" id="co_rno" oninput="queryChechOutNumber()" style="overflow-y:scroll;width:40%">'+
                                '<option></option>'+
                                '</select>'+
                                '<div class="clearfix"></div>'+
                                '<input type="hidden" id="checkout_room_id" value hidden/>'+
                                '<input type="hidden" id="checkout_occu_id" value hidden/>'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2" style="width:45%"> <span>Guest Name :</span> </div>'+
                                '<input type="text" class="form-control" disabled placeholder="" id="co_name" style="width:40%;">'+
                                '<div class="clearfix"></div>'+
                            '</div>'+

                            //end of Checkout form left
                            '<div class="RegFormRight">'+
                            '<div class="clearfix"></div>'+
                            
                                '<div class="RegFormLeft2"> <span>Check In Date :</span> </div>'+
                                '<input type="text" class="form-control" placeholder="" disabled id="co_cidate">'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"> <span>Room rate :</span> </div>'+
                                '<input type="text" class="form-control" placeholder="&#8369; " disabled id="co_rate"/>'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"><span>Room Class :</span></div>'+
                                '<input type="text" class="form-control" placeholder="" disabled id="co_rclass"/>'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"> <span>Room Type :</span></div>'+
                                 '<input type="text" class="form-control" placeholder="" disabled id="co_rtype"/>'+
                                 '<div class="clearfix"></div>'+
                                 '<div class="RegFormLeft2"><span>Application Type:</span></div>'+
                                  '<input type="text" class="form-control" placeholder="" disabled id="co_ratype"/>'+
                            '</div>'+
                            //end of CheckOutform right
                            '<div class="clearfix"></div>'+
                            '<hr>'+
                            '<legend>Payment Details</legend>'+
                            //Payment Details Begin
                           '<br>'+
                        '<form class="form-inline">'+
                            '<div class="RegFormLeft">'+
                                '<div class="RegFormLeft2"> <span>Expected Check Out Date : </span> </div>'+
                                '<input type="text" class="form-control" id="co_exoutdate" disabled>'+
                                '<div class="clearfix"></div>'+
                                
                            '</div>'+

                            //end of Checkout form left
                            '<div class="RegFormRight">'+
                            '<div class="clearfix"></div>'+
                               /*  '<div class="RegFormLeft2"> <span>Room Rent :</span> </div>'+
                                '<input type="text" class="form-control" placeholder="&#8369;"  id="co_totalrent" disabled>'+*/
                                '<div class="RegFormLeft2"><span>Deposit Amount:</span></div>'+
                                '<input type="text" class="form-control" placeholder="&#8369; " id="co_depositAmount"  disabled>'+
                                '<div class="RegFormLeft2"><span>Balance Amount:</span></div>'+
                                '<input type="text" class="form-control" placeholder="&#8369; " id="co_balanceAmount"  disabled><hr>'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"> <span>Utility Payable :</span> </div>'+
                                '<input type="text" class="form-control" placeholder="&#8369;" id="co_totalutility" disabled>'+/*onblur="totalutility()"*/
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"><span>Penalties :</span></div>'+
                                '<input type="text" class="form-control" placeholder="&#8369;" id="co_pinalty" onblur="addPinalty()">'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2" hidden> <span>Discount :</span></div>'+
                                 '<input type="hidden" class="form-control" placeholder="&#8369;" id="co_discount" onblur="getDiscount()" hidden>'+
                                 '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"><span>Total Payable:</span></div>'+
                                '<input type="text" class="form-control" placeholder="&#8369; " id="co_totalpayment"  disabled>'+
            
                                '<div class="clearfix"></div>'+
                                 '<div class="RegFormLeft2"><span>Amount Paid:</span></div>'+
                                '<input type="text" class="form-control" placeholder="&#8369;" id="co_amountpaid" onblur="amountPaid()">'+
                                '<div class="clearfix"></div>'+
                                '<div class="RegFormLeft2"><span>Changed:</span></div>'+
                                '<input type="text" class="form-control" placeholder="&#8369; " disabled id="co_balance">'+
                                '<div class="clearfix"></div>'+
                            '</div>'+
                            '<br/>'+
                            '<hr>'+
                            '<div class="clearfix"></div>'+
                          '<legend/>'+
                          '<div class="btn-formsubmit">'+
                                '<button type="reset" class="btn btn-danger"><span class="glyphicon glyphicon-remove" onclick="clearChechout()"> Cancel</button>'+
                                '<button type="button" class="btn btn-success"><span class="glyphicon glyphicon-floppy-disk" onclick="roomCheckOut()"> Submit</button>'+
                                '<button class="btn btn-warning"><span class="glyphicon glyphicon-print" onclick="printCheckout()">  Print</button>'+
                                 /*'<button style="margin-right:80px" class="btn btn-primary pull-right" onclick="setTotalCheckOutPayment()"> Calculate</button>'+*/
                            '</div>'+
                        '</form>'+
                        '</div>'+
                        '</div>'//Payment Details
    );/*Append Checkoutform*/

  });/*Begin CheckoutForm*/


});/*CheckOut*/
