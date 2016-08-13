
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
   
    <!-- Custom styles for this template -->
    
    
    <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="js/MCA-todoapp.js"></script>
    <script type="text/javascript" src="js/register.js"></script>
    <title>Signin Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <link href="css/sigin.css" rel="stylesheet">
 
  </head>

  <body>

    <div class="container" >
     
     
      <form class="form-signin " id="register" >
      
        <h2 class="form-signin-heading">Register</h2>
        <div id="alert-error"></div>
        <label for="name" >Name</label>
        <input type="text" id="reg_name" class="form-control" placeholder="name" required autofocus>
        <label for="reg_lastname" >Lastname</label>
        <input type="text" id="reg_lastname" class="form-control" placeholder="lastname" required>
         <label for="text" >Username</label>
        <input type="text" id="reg_username" class="form-control" placeholder="username" required>
         <label for="reg_password" >Password</label>
        <input type="password" id="reg_password" class="form-control" placeholder="password" required>
         <label for="reg_retype_password" >Retype-password</label>
        <input type="password" id="reg_retype_password" class="form-control" placeholder="retype-password" required>
        <a href="index.php" class="btn btn-lg btn-default">Cancel</a>
       <button class="btn btn-lg btn-primary pull-right " type="button" onclick="process_register()">Register</button>
      </form>    
    </div> <!-- /container -->


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
   
  </body>
</html>
