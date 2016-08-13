      
///////////////////////////////////////////// LOGIN  ////////////////////////////////////////////////////////
    function signin_process(){
       var url = "./php-db/ajax.php?action=login";
       var login_data = {
          "log_username":$('#log_username').val(),
          "log_password":$('#log_password').val()
        };

        $.post(url,login_data,function(result){
          
          var host ="./home";


          if(result){
              window.location.href=host;   
          }
          else{
            $('#login-error').empty();
               $('#login-error').append(
                 '<div class="alert alert-danger err" role="alert">Login failed! Please try again.</div>'
                 );
               $('#log_username').focus();
          }

          
          
        });

    }
////////////////////////////////////// RETREIVE ADMIN DATA ///////////////////////////////////////////////////////
    $(document).ready(function()
    {
      $('#show_profile').click(function()
      {
        var url = "../php-db/ajax.php?action=getAccount";
        $.getJSON(url,function(result)
        {                     
                        $(".table-responsive").empty();
                         $("#CheckOutForm").empty();
                        $('#transactionLogs').empty();
                         $('#showprofile').empty();
                         $('#changepassword').empty();
                         $('#RegistrationForm').empty();
                         $('#UtilityFormPanel').empty();
                         $('#editprofile').empty();
                        $("#room_status").empty();
                         $('#showprofile').append(
                          '<div class="form-signin">'+
                             '<h2 class="form-signin-heading">'+
                                  'My profile'+
                              '</h2>'+
                           '<div id="alert-updaterror">'+
                           '</div>'+
                        
                        '<label for="name" >'+
                            'Name'+
                         '</label>'+
                          '<input type="text" id="ed_name" class="form-control" value="'+result.name+'"  disabled>'+
                        '<label for="ed_lastname">'+
                            'Lastname'+
                         '</label>'+
                          '<input type="text" id="ed_lastname" value="'+result.lastname+'"  class="form-control" disabled>'+
                        '<label for="text" >'+
                            'Username'+
                         '</label>'+
                          '<input type="text" id="ed_username" value="'+result.username+'" class="form-control" disabled>'+
                       '</div>'
                       );
          });
       });
    });
/////////////////////////////////////   EDIT PROFILE  ///////////////////////////////////////////////////////////////
    $(document).ready(function()
    {
      $('#edit_profile').click(function()
      {
        var url = "../php-db/ajax.php?action=getAccount";
        $.getJSON(url,function(result)
        {
                        $(".table-responsive").empty();
                         $('#showprofile').empty();
                         $("#CheckOutForm").empty();
                         $('#changepassword').empty();
                         $('#RegistrationForm').empty();
                         $('#UtilityFormPanel').empty();
                         $('#transactionLogs').empty();
                         $('#editprofile').empty();
                        $("#room_status").empty();
                         $('#editprofile').append(
                        '<div class="form-signin">'+
                        '<h2 class="form-signin-heading">'+
                          'Edit profile'+
                        '</h2>'+
                        '<div id="alert-updaterror"></div>'+
                        
                        '<label for="name" >'+
                          'Name'+
                        '</label>'+
                          '<input type="text" id="ed_name" class="form-control" value="'+result.name+'" placeholder=" name" required autofocus>'+
                        '<label for="ed_lastname" >'+
                          'Lastname'+
                        '</label>'+
                          '<input type="text" id="ed_lastname" value="'+result.lastname+'"  class="form-control" placeholder=" lastname" required>'+
                        '<label for="text" >'+
                          'Username'+
                        '</label>'+
                          '<input type="text" id="ed_username" value="'+result.username+'" class="form-control" placeholder=" username" required>'+
                        '<a href="index.php" class="btn btn-lg btn-default">'+
                          'Cancel</a>'+
                       '<button class="btn btn-lg btn-danger pull-right " onclick="updateAccount()">'+
                          'Save</button>'+
                       '</div>'
                       );
          });
       });
    });
////////////////////////////////////////////////// CHANGE PASSWORD //////////////////////////////////////////////////////////////////////////////
      $(document).ready(function(){
        $('#changepass').click(function(){
          $(".table-responsive").empty();
          $('#changepassword').empty();
          $('#showprofile').empty();
           $("#CheckOutForm").empty();
          $('#editprofile').empty();
          $('#transactionLogs').empty();
          $('#RegistrationForm').empty();
          $("#room_status").empty();
          $('#UtilityFormPanel').empty();
          $('#changepassword').append(
          '<form class="form-signin" id="">'+
            '<h2 class="form-signin-heading">'+
              'Change password'+
            '</h2>'+
              '<div id="changepass-error"></div>'+
            '<label for="ch_currpass" class="sr-only">'+
               'Current password'+
            '</label>'+
               '<input type="text" id="ch_currpass" class="form-control" placeholder=" current password" required autofocus>'+
            '<label for="ch_newpass" >'+
               'New password'+
            '</label>'+
               '<input type="password" id="ch_newpass" class="form-control" placeholder="new password" required>'+
            '<label for="ch_confirmnewpass" >'+
               'Confirm new password'+
            '</label>'+
               '<input type="password" id="ch_confirmnewpass" class="form-control" placeholder="confirm new password" required>'+
                '<a href="index.php" class="btn btn-lg btn-default">Cancel</a>'+
            '<button class="btn btn-lg btn-danger pull-right " type="button" onclick="changePassword()">'+
                'Save'+
            '</button>'+
          '</form>'
      );
        });
      });
///////////////////////////////////////////// UPDATE ADMIN ACCOUNT /////////////////////////////////////////////////////////////
    function updateAccount(){
      var url = "../php-db/ajax.php?action=updateAccount";
      var data = {
          "ed_name":$('#ed_name').val(),
          "ed_lastname":$('#ed_lastname').val(),
          "ed_username":$('#ed_username').val()
      };
      if($('#ed_name').val()==""){
        $('#alert-updaterror').empty();
               $('#alert-updaterror').append(
                 '<div class="alert alert-danger err" role="alert">Name is empty please fill up!</div>'
                 );
               $('#ed_name').focus();
      }
      else  if($('#ed_lastname').val()==""){
        $('#alert-updaterror').empty();
               $('#alert-updaterror').append(
                 '<div class="alert alert-danger err" role="alert">Lastname is empty please fill up!</div>'
                 );
               $('#ed_lastname').focus();
      }
      else  if($('#ed_username').val()==""){
        $('#alert-updaterror').empty();
               $('#alert-updaterror').append(
                 '<div class="alert alert-danger err" role="alert">Username is empty please fill up!</div>'
                 );
               $('#ed_username').focus();
      }
      else
      {
          $.post(url,data,function(result){
            $('#alert-updaterror').empty();
               $('#alert-updaterror').append(
                 '<div class="alert alert-success err" role="alert">Update successful.</div>'
                 );
          });
      }
    }
///////////////////////////////////////////////// CHANGE PASSWORD //////////////////////////////////////////////////////////////////
    function changePassword(){
          var url = "../php-db/ajax.php?action=changePassword";
          var data = {
          "ch_currpass":$('#ch_currpass').val(),
          "ch_newpass":$('#ch_newpass').val(),
          "ch_confirmnewpass":$('#ch_confirmnewpass').val()
      };
      if($('#ch_currpass').val()==""){
        $('#changepass-error').empty();
               $('#changepass-error').append(
                 '<div class="alert alert-danger err" role="alert">Current password is empty please fill up!</div>'
                 );
               $('#ch_currpass').focus();
      }
      else  if($('#ch_newpass').val()==""){
        $('#changepass-error').empty();
               $('#changepass-error').append(
                 '<div class="alert alert-danger err" role="alert">New password is empty please fill up!</div>'
                 );
               $('#ch_newpass').focus();
      }
      else  if($('#ch_confirmnewpass').val()==""){
        $('#changepass-error').empty();
               $('#changepass-error').append(
                 '<div class="alert alert-danger err" role="alert">Username is empty please fill up!</div>'
                 );
               $('#ch_confirmnewpass').focus();
      }
       else  if($('#ch_confirmnewpass').val()!=$('#ch_newpass').val()){
        $('#changepass-error').empty();
               $('#changepass-error').append(
                 '<div class="alert alert-danger err" role="alert">Password mismatch!</div>'
                 );
               $('#ch_confirmnewpass').focus();
      }
      else
      {
          $.post(url,data,function(result){
             var host = "../index.php";           
            if(result=="Password changed."){
              alert(result);
              window.location.href=host; 
           }
             else
             {
               $('#changepass-error').empty();
               $('#changepass-error').append(
                 '<div class="alert alert-danger err" role="alert">"'+result+'"</div>'
                 );
             }
             
          });
      }
    }




