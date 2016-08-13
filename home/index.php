<?php session_start(); ?>
<?php 
  if(!isset($_SESSION['islogin']))
  {
    header('Location: ../index.php ');
    exit();
  }

 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Maria Cristina Arcade</title>
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="../css/font-awesome.css">
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/sigin.css" rel="stylesheet">
 
    <!-- Custom styles for this template -->
    <link href="../css/dashboard.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/mainstyle.css">
    <script type="text/javascript" src="../js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="../js/register.js"></script>
    <script type="text/javascript" src="../controller/controller.js"></script>
    <script type="text/javascript" src="../js/manager.js"></script>
     <script type="text/javascript" src="../js/bootstrap.min.js"></script>
 

</head>

<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                     <span class="sr-only">Toggle navigation</span>
                     <span class="icon-bar"></span> 
                     <span class="icon-bar"></span> 
                     <span class="icon-bar"></span>
                </button> 
                    <a class="navbar-brand" href="#" style=" color:#2BF145; font-size:24px; font-weight:bold;">Maria Cristina Arcade</a>
            </div>
         
<div id="navbar" class="navbar-collapse collapse pull-right">

          <ul class="nav navbar-nav">
           
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Manage profile <span class="caret"></span></a>
              <ul class="dropdown-menu">
                                <li><a data-toggle="modal" id="show_profile">My profile</a></li>
                                <li><a data-toggle="modal" data-target="#signin" href="#" id="edit_profile" >Edit profile</a></li>
                                <li><a data-toggle="modal" id="changepass">Change password</a></li>
                                <li><a href="../logout.php">Logout</a></li>
             </ul>
                            
            </li>
          </ul>
        </div><!--/.nav-collapse -->
         <form class="navbar-form navbar-right">
                    <input type="text" class="form-control" id="search" placeholder="Search..."> </form>
</div>

</div>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
               <ul class="nav nav-sidebar" id="form-sidebar">

                    <li><a href="#" id="overview-report"><span class="glyphicon glyphicon-list-alt">  </span>    Overview Report<span class="sr-only">(current)</span></a></li>
                    <li><a href="#" id="FillUpForm"><span class="glyphicon glyphicon-ok" >   </span>    Check-In Form</a></li>
                    <li><a href="#" id ="CheckOut"><span class="glyphicon glyphicon-remove">  </span>  Check-out</a></li>
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="glyphicon glyphicon-tasks"></span> Utilities<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                                    <li><a href="#" id="UtilityForm"><span class="glyphicon glyphicon-wrench"></span>  Utility Form</a></li>
                                    <li><a href="#" id="UtilityPayments"><span class="glyphicon glyphicon-shopping-cart"></span>  Utility Payments</a></li>
                        </ul>
                                
                    </li>
                    <li class="dropdown"  id="room_m">
                     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="glyphicon glyphicon-bed"></span> Deposit Mngmt.<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                                <li><a data-toggle="modal" data-target="#AddDeposit"><span class="glyphicon glyphicon-plus" onclick="depositmodal()"></span> Add Deposit Amount</a></li>
                                <li><a href="#"  id="depositStatus"><span class="glyphicon glyphicon-home"></span>   Deposit list</a></li>
                    </ul>
                            
                    </li>
                </ul>
                <ul class="nav nav-sidebar" id='form-sidebar2'>
                    <li>
                        <a href="#" id="roomStatus"> <span class="glyphicon glyphicon-home"></span>   Room Status</a>
                    </li>
                    <li class="dropdown"  id="room_m">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="glyphicon glyphicon-bed"></span> Room Management <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                                    <li><a data-toggle="modal" data-target="#AddRoom" ><span class="glyphicon glyphicon-plus" onclick=" modalStartUp()"></span> Add New Rooms</a></li>
                                    <li><a href="#" id="editRoom" ><span class="glyphicon glyphicon-pencil"></span> Edit/Delete Rooms</a></li>
                                    <li><a data-toggle="modal" data-target="#roomTransfer"><span class="glyphicon glyphicon-transfer" onclick="transfermodal()"></span> Transfer Rooms</a></li>
                        </ul>
                                
                    </li>
                    <li id="four">
                        <a href="#" id="occupantEnd"><span class="glyphicon glyphicon-plane">  </span>   End Occupant <span class="badge" id="badge_count"></span></a>
                    </li>
                    <!-- <li id="five">
                        <a href="#" id="logsTransaction"><span class="glyphicon glyphicon-file"></span>   Transaction Logs</a>
                    </li> -->
                     <li id="six">
                        <a href="#" id="mcatracker"><span class="glyphicon glyphicon-briefcase"></span>   Relocator Tracker</a>
                    </li>
                </ul>
                
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
               
                <div class="table-responsive"></div> 
               
                <div id="editprofile"></div>
                <div id="changepassword"></div>
                <div id="showprofile"></div>
                <div id="CheckOutForm"></div>
                <div id="PaymentUtility"></div>
               
                <!--End of tableresponsive-->
                <div id='RegistrationForm'></div><!--Registration Form-->
                <div id='UtilityFormPanel'></div><!--UtilityForm-->
                <div id='room_status'></div><!-- RoomStatus -->
                <div id="roomEdit"></div><!-- edit Room -->
                <div id="editableRoom"></div><!--editable Room-->
                <div id="dateOccupied"></div><!--date Occupied-->
                <div id="endOccupant"></div><!-- end of occupant -->
                <div id="transactionLogs"></div><!-- Transaction Logs -->
                <div id="mca_tracker"></div><!-- mca_tracker -->


            </div>
        </div>
    </div>


    <div class="modal fade" id="AddRoom" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div><!--end of modal-->  
    <div class="modal fade" id="AddDeposit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div><!--end of modal-->
    <div class="modal fade" id="roomTransfer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div><!--end of modal-->



</body>

</html>