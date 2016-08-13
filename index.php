<!--
    Title :     Maria Cristina Arcade Offline Web Application
    Author :    John Louise Berdida
    Developer : John Louise Berdida
    Version :   1.0
    Date Created: February 2, 2016

-->
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
    <script type="text/javascript" src="js/register.js"></script>
    <title>Maria Cristina Arcade</title>

    <!-- Bootstrap core CSS -->
    <link href="ccs/font-awesome.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/sigin.css" rel="stylesheet">
 
  </head>

  <body>

    <div class="container" >


    
      <form class="form-signin" id="signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <div id="login-error"></div>
        <label for="log_username" class="sr-only">Email address</label>
        <input type="text" id="log_username" class="form-control" placeholder="username" required autofocus>
        <label for="log_password" class="sr-only">Password</label>
        <input type="password" id="log_password" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="button" onclick="signin_process()">Sign in</button>
     
      </form>

     
    </div> <!-- /container -->


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
   
  </body>
</html>
