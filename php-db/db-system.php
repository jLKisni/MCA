<?php
session_start();


function system_db(){
		return new PDO("mysql:host=localhost;dbname=maria_db",'root','');
}

function add_Admin($admin_data){
		
	$db = system_db();
	$sql = "INSERT INTO admin(name,lastname,username,password)values(?,?,?,?)";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($admin_data['name'],$admin_data['lastname'],$admin_data['username'],md5($admin_data['password'])));
	$db=null;
	return "register";

}
function updateAdmin($data){
	$db = system_db();
	$sql = "UPDATE admin SET name=?, lastname=?, username=? WHERE admin_id=? ";
	$cmd = $db -> prepare($sql);
	$cmd->execute(array($data['ed_name'],$data['ed_lastname'],$data['ed_username'],$data['ed_id']));
	$db =null;
	return "Update successful.";
}

function changePassword($data){
	$db = system_db();
	$sql2 = "SELECT * FROM admin WHERE password=? AND admin_id=?";
	$cmd2 = $db->prepare($sql2);
	$cmd2->execute(array(md5($data['ch_currpass']),$data['ch_id']));
	$result = $cmd2->fetch();
	if($result){
		$sql = "UPDATE admin SET password=? WHERE password=? AND admin_id=?";
		$cmd = $db -> prepare($sql);
		$cmd->execute(array(md5($data['ch_confirm']),$result['password'],$result['admin_id']));
		$db =null;

    	return "Password changed.";
	}
	else
	{
		$db =null;
		return "Current password not match!";
	}

	
	
}

function login_admin($admin){
	$db = system_db();
	$sql = "SELECT * FROM admin WHERE username=? AND password=?";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($admin['username'],md5($admin['password'])));
	$data = $cmd->fetch();
	$db = null;
	if($data)
	{
		$_SESSION['admin_id'] = $data['admin_id'];	
		return $_SESSION['islogin'] = true;
		
	}
	else{
		return $_SESSION['islogin'] = false;
        }
}

function getAdmin($id){
	$db = system_db();
	$sql = "SELECT * FROM admin where admin_id = ?";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($id));
	$admin_data = $cmd->fetch();
	$db = null;
	return $admin_data;
}

function iglogin(){
	if(isset($_SESSION['islogin']))
	{
		return true;
	}
	else{
		return false;
	}
	


}

function getId(){
	return $_SESSION['admin_id'];
}

function logout(){
	session_start();
	unset($_SESSION['islogin']);
	unset($_SESSION['admin_id']);
	header('Location: ../index.php ');
	session_destroy();
}

////////////////////////////////////////// End of admin details//////////////////////////////////////////////////////////
function addRoom($data){
	$db = system_db();
	$sql = "INSERT INTO rooms(room_typeA,rate,no_of_occupant,status1,room_typeB,room_number)VALUES(?,?,?,?,?,?)";
	$cmd = $db -> prepare($sql);
	$cmd->execute(array($data['addroomtypeA'],$data['addroomRate'],1,0,$data['addroomtypeB'],$data['addroomNumber']));
	$db=null;
	return "New room added.";
}

function queryRoomsNumber($data){
	$db = system_db();
	$sql = "SELECT * FROM rooms WHERE room_number=? AND status1 = 0";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($data));
	$result = $cmd->fetch();
	$db = null;
	if($result){
		return $result;
	}else{
		return "Room number not found.";
	}
	}

function fillupformOccupant($data){
	$db = system_db();
	$sql = "INSERT INTO occupant_app_info(occu_ai_name,occu_ai_birthdate,occu_ai_contact_no,occu_ai_curr_address,occu_ai_city,occu_ai_province,occu_ai_zip_code,occu_ai_ownrent,occu_ai_monthlypaymentorrent,occu_ai_howlong,occu_ai_previousAddress,occu_ai_previous_ownrent,occu_ai_previousmonthlypayment,occu_ai_previoushowlong)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($data['ffo_name'],$data['ffo_bdate'],$data['ffo_number'],$data['ffo_address'],$data['ffo_city'],$data['ffo_province'],$data['ffo_zipcode'],$data['ffo_ownrent'],$data['ffo_mp_rent'],$data['ffo_howlong'],$data['ffo_p_address'],$data['ffo_p_ownrent'],$data['ffo_p_paymentrent'],$data['ffo_p_howlong']));
	$id = $db->lastInsertId();
	$sql2 ="INSERT INTO occupant_emp_info(occu_ei_curr_employer,occu_ei_emp_address,occu_ei_howlong,occu_ei_phone,occu_ei_email,occu_ei_timeofshift,occu_ei_city,occu_ei_province,occu_ei_zipcode,occu_ei_position,occu_ei_hourlysalary,occu_ei_dayofsched,occu_ai_id)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
	$cmd2 = $db->prepare($sql2);
	$cmd2->execute(array($data['ffo_c_employee'],$data['ffo_c_address'],$data['ffo_c_howlong'],$data['ffo_c_phone'],$data['ffo_c_email'],$data['ffo_c_timeofshift'],$data['ffo_c_city'],$data['ffo_c_province'],$data['ffo_c_zipcode'],$data['ffo_c_position'],$data['ffo_c_salary'],$data['ffo_c_dschedule'],$id));
	$sql3 = "INSERT INTO occupant_emerg_contact(occu_ec_nameofperson,occu_ec_address,occu_ec_city,occu_ec_province,occu_ec_zipcode,occu_ec_phone,occu_ec_relationship,occu_ai_id)VALUES(?,?,?,?,?,?,?,?)";
	$cmd3 = $db->prepare($sql3);
	$cmd3->execute(array($data['ffo_p_residing'],$data['ffo_p_residing_address'],$data['ffo_p_residing_city'],$data['ffo_p_residing_province'],$data['ffo_p_residing_zipcode'],$data['ffo_p_residing_phone'],$data['ffo_p_residing_relationship'],$id));
	$sql4 = "INSERT INTO occupant_co_info2(occu_coi_name,occu_coi_birthdate,occu_coi_ssn,occu_coi_phone,occu_coi_curr_address,occu_coi_add_city,occu_coi_add_province,occu_coi_zipcode,occu_coi_ownrent,occu_coi_monthlypaymentorrent,occu_coi_howlong,occu_coi_prev_address,occu_coi_city,occu_coi_province,occu_coi_address_zipcode,occu_coi_ownedrented,occu_coi_address_monthlypayment,occu_coi_address_howlong,occu_ai_id)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	$cmd4 = $db->prepare($sql4);
	$cmd4->execute(array($data['ffo_co_name'],$data['ffo_co_bdate'],$data['ffo_co_ssn'],$data['ffo_co_phone'],$data['ffo_co_address'],$data['ffo_co_city'],$data['ffo_co_province'],$data['ffo_co_zipcode'],$data['ffo_co_ownrenter'],$data['ffo_co_monthlypaymentrent'],$data['ffo_co_howlong'],$data['ffo_co_paddress'],$data['ffo_co_infocity'],$data['ffo_co_infoprovince'],$data['ffo_co_infonzipcode'],$data['ffo_co_infoownrent'],$data['ffo_co_infomonthlypaymentrent'],$data['ffo_co_infohowlong'],$id));
	$sql5 = "INSERT INTO occupant_regis_occupant(occu_reg_name1,occu_reg_name2,occu_reg_name3,occu_reg_name4,occu_reg_address1,occu_reg_address2,occu_reg_address3,occu_reg_address4,occu_reg_age1,occu_reg_age2,occu_reg_age3,occu_reg_age4,occu_reg_phone1,occu_reg_phone2,occu_reg_phone3,occu_reg_phone4,occu_ai_id)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	$cmd5 = $db->prepare($sql5);
	$cmd5->execute(array($data['ffo_roo_name1'],$data['ffo_roo_name2'],$data['ffo_roo_name3'],$data['ffo_roo_name4'],$data['ffo_roo_address1'],$data['ffo_roo_address2'],$data['ffo_roo_address3'],$data['ffo_roo_address4'],$data['ffo_roo_age1'],$data['ffo_roo_age2'],$data['ffo_roo_age3'],$data['ffo_roo_age4'],$data['ffo_roo_phone1'],$data['ffo_roo_phone2'],$data['ffo_roo_phone3'],$data['ffo_roo_phone4'],$id)); 
	$sql6 = "INSERT INTO contract(contract_start,duration_until,application_type,relocator_company,room_number,occu_ai_id,status)VALUES(?,?,?,?,?,?,?)";
	$cmd6 = $db->prepare($sql6);
	$cmd6->execute(array($data['ffc_date'],$data['ffc_udate'],$data['rd_a_Type'],$data['rd_comp_relocator'],$data['cfr_no'],$id,1));
	$sql7 = "SELECT * FROM rooms WHERE room_number = ? AND status1 = ?";
	$cmd = $db->prepare($sql7);
	$cmd->execute(array($data['cfr_no'],0));
	$data1 = $cmd->fetch();
	if($data1)
	{
	
		$sql8 = "UPDATE rooms SET no_of_occupant = ?, status1 = ? WHERE room_number = ?";
		$cmd8 = $db->prepare($sql8);
		$cmd8->execute(array(1,1,$data['cfr_no']));			

	}
	$db = null;
	return "New occupant added";	
}



function utilitypayments($data){
				$db = system_db();
				$sql = "INSERT INTO rental_bill(last_reading,current_reading,utility_usage,rate_per_kilowatts,payable,occu_ai_id,room_number,contract_id)values(?,?,?,?,?,?,?,?)";
				$cmd = $db->prepare($sql);
				$cmd->execute(array($data['rprev_read'],$data['rpres_read'],$data['r_usage'],$data['r_rate'],$data['r_payable'],$data['utility_ai_id'],$data['utility_rno'],$data['utility_id']));
				$rental_id = $db->lastInsertId();
    
				$sql1 = "INSERT INTO light_bill(last_reading,current_reading,utility_usage,rate_per_kilowatts,payable,occu_ai_id,room_number,contract_id)values(?,?,?,?,?,?,?,?)";
				$cmd1= $db->prepare($sql1);
				$cmd1->execute(array($data['lprev_read'],$data['lpres_read'],$data['l_usage'],$data['l_rate'],$data['l_payable'],$data['utility_ai_id'],$data['utility_rno'],$data['utility_id']));
			     
                $light_id = $db->lastInsertId();
    
				
				$sql2 = "INSERT INTO water_bill(last_reading,current_reading,utility_usage,rate_per_kilowatts,payable,occu_ai_id,room_number,contract_id)values(?,?,?,?,?,?,?,?)";
				$cmd2 = $db->prepare($sql2);
				$cmd2->execute(array($data['wprev_read'],$data['wpres_read'],$data['w_usage'],$data['w_rate'],$data['w_payable'],$data['utility_ai_id'],$data['utility_rno'],$data['utility_id']));
				
                $water_id = $db->lastInsertId();
		
				
				$sql3 = "INSERT INTO other_bill(last_reading,current_reading,utility_usage,rate_per_kilowatts,payable,occu_ai_id,room_number,contract_id)values(?,?,?,?,?,?,?,?)";
				$cmd3 = $db->prepare($sql3);
				$cmd3->execute(array($data['wprev_read'],$data['wpres_read'],$data['w_usage'],$data['w_rate'],$data['w_payable'],$data['utility_ai_id'],$data['utility_rno'],$data['utility_id']));
				
                $other_id = $db->lastInsertId();
                
                $sql5 = "SELECT balance FROM payment WHERE contract_id = ? AND occu_ai_id = ? ";
                $cmd5 = $db->prepare($sql5);
                $cmd5->execute(array($data['utility_id'],$data['utility_ai_id']));
                $row = $cmd5->fetchColumn();
            	 
            	 if ($row ) {
               		$balance = $row + $data['utility_totalbill'];
                	$sql4 = "UPDATE payment SET total_bill = ?,pay_amount=0, balance = 0, monthbill = ? WHERE contract_id = ? AND occu_ai_id = ?";
                	$cmd4=$db->prepare($sql4);
                	$cmd4->execute(array($balance,$data['utility_monthbill'],$data['utility_id'],$data['utility_ai_id']));
 					$db = null;
            	}
                else{
                $sql4 ="INSERT INTO payment(due_date,monthbill,total_bill,status,occu_ai_id,contract_id,rental_id,water_id,light_id,other_id)values(?,?,?,?,?,?,?,?,?,?)";
                $cmd4=$db->prepare($sql4);
                $cmd4->execute(array($data['utility_duedate'],$data['utility_monthbill'],$data['utility_totalbill'],0,$data['utility_ai_id'],$data['utility_id'],$rental_id,$water_id,$light_id,$other_id));
    			$db = null;
                }

               
			
	
    return 'Utility Form Submission successful.';
	
}


function getRoomList(){
	$db = system_db();
	$sql = "SELECT * FROM rooms ORDER BY room_number";
	$cmd = $db->prepare($sql);
	$cmd->execute();
	$result = $cmd->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $result;
}

function transferToVacantRoom($room){
	$db = system_db();
	$sql = "SELECT * FROM rooms WHERE room_number = ? AND status1 = ?";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($room,0));
	$data =$cmd->fetch();
	$db = null;
	return $data;

}	

function submitTransfer($data){
	$db = system_db();
	$sql = "UPDATE rooms SET status1 = ? WHERE room_number = ? ";
	$cmd = $db->prepare($sql);
	$cmd->execute(array(0,$data['beforeRoom']));


	$sql2 = "UPDATE rooms SET status1 = ? WHERE room_number = ?";
	$cmd2 = $db->prepare($sql2);
	$cmd2 ->execute(array(1,$data['nowRoom']));


	$sql3 = "UPDATE contract set room_number = ? WHERE contract_id =? AND occu_ai_id = ?";
	$cmd3 = $db->prepare($sql3);
	$cmd3 ->execute(array($data['nowRoom'],$data['contract_id'],$data['occu_id']));

	$sql4 = "UPDATE deposit set room_number = ? WHERE contract_id =? AND occu_ai_id = ?";
	$cmd4 = $db->prepare($sql4);
	$cmd4 ->execute(array($data['nowRoom'],$data['contract_id'],$data['occu_id']));

	$sql5 = "UPDATE rental_bill SET room_number = ? WHERE occu_ai_id = ? AND contract_id = ? ";
	$cmd5 = $db->prepare($sql5);
	$cmd5 ->execute(array($data['nowRoom'],$data['occu_id'],$data['contract_id']));

	$sql6 = "UPDATE light_bill SET room_number = ? WHERE occu_ai_id = ? AND contract_id = ? ";
	$cmd6 = $db->prepare($sql6);
	$cmd6 ->execute(array($data['nowRoom'],$data['occu_id'],$data['contract_id']));

	$sql7 = "UPDATE water SET room_number = ? WHERE occu_ai_id = ? AND contract_id = ? ";
	$cmd7 = $db->prepare($sql7);
	$cmd7 ->execute(array($data['nowRoom'],$data['occu_id'],$data['contract_id']));

	$sql8 = "UPDATE other_bill SET room_number = ? WHERE occu_ai_id = ? AND contract_id = ? ";
	$cmd8 = $db->prepare($sql8);
	$cmd8 ->execute(array($data['nowRoom'],$data['occu_id'],$data['contract_id']));
	$db = null;
	return "Room Successfully Transferred!";


}	

function queryUtilityUser($room){

	$db = system_db();
	$sql = "SELECT r.room_typeA,r.room_typeB,r.rate,c.application_type,c.contract_start,c.contract_id,c.duration_until, c.occu_ai_id, c.status, o.occu_ai_name FROM contract AS c INNER JOIN rooms AS r ON c.room_number  = r.room_number INNER JOIN occupant_app_info AS o ON c.occu_ai_id = o.occu_ai_id WHERE r.room_number = ?  AND c.status = ?";
	$cmd = $db->prepare($sql);
	$cmd ->execute(array($room,1));
	$result=$cmd->fetch();

	if($result){
			$db=null;
			return $result;
	}
	else{
		return "Room number or bed number not found.";
	}
}

function querychechoutnumber($room)
{
	$db = system_db();
	$sql = "SELECT r.room_id,r.room_typeA,r.room_typeB,r.rate,c.application_type,c.contract_start,c.duration_until,c.contract_id,c.occu_ai_id, c.status, o.occu_ai_name FROM contract AS c INNER JOIN rooms AS r ON c.room_number  = r.room_number INNER JOIN occupant_app_info AS o ON c.occu_ai_id = o.occu_ai_id WHERE r.room_number = ? AND c.status = ? AND r.status1 = ? ";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($room,1,1));
	$result = $cmd->fetch();
	if($result)
	{
		$db = null;
		return $result;
	}	
	else
	{
		$db = null;
		return "Room number or bed number not found.";
	}
	
}
function queryPaymentCheckout($id){
	$db = system_db();
	$sql = "SELECT balance FROM payment WHERE occu_ai_id = ?";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($id));
	$result = $cmd->fetch();
	return $result;
}
function getAllRooms()
{
	$db = system_db();
	$sql = "SELECT * FROM rooms ORDER BY room_number";
	$cmd = $db->prepare($sql);
	$cmd->execute();
	$result = $cmd->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $result;
	
}
function  roomCheckOut($data)
{
	$db = system_db();
	$sql = "INSERT INTO checkout(room_number,check_out_name,check_out_indate,check_out_roomrate,check_out_room_class,check_out_room_type,check_out_applicant_type,check_out_exp_date,check_out_totalutility,check_out_penalty,check_out_discount,check_out_totalpayment,check_out_amountpaid,room_id,occu_ai_id,admin)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($data['co_rno'],$data['co_name'],$data['co_cidate'],$data['co_rate'],$data['co_rclass'],$data['co_rtype'],$data['co_ratype'],$data['co_exoutdate'],$data['co_totalutility'],$data['co_pinalty'],$data['co_discount'],$data['co_totalpayment'],$data['co_amountpaid'],$data['checkout_room_id'],$data['checkout_occu_id'],$data['admin']));
	$sql2 = "UPDATE rooms SET no_of_occupant = ?, status1 = ? WHERE room_number = ?";
	$cmd2 = $db->prepare($sql2);
	$cmd2->execute(array(1,0,$data['co_rno']));
	$sql3 = "UPDATE contract SET status = ?,contract_end = ? WHERE room_number = ?";
	$cmd3 = $db->prepare($sql3);
	$cmd3->execute(array(0,date('Y-m-d'),$data['co_rno']));
	$sql4 = "UPDATE deposit SET status = ?,datepaid = ?  WHERE room_number = ? and status = ?";
	$cmd4 = $db->prepare($sql4);
	$cmd4->execute(array(0,date('Y-m-d'),$data['co_rno'],1));
	$db=null;
	return "Check out successful.";
}
function filterRoomVacant(){

	$db = system_db();
	$sql = "SELECT * FROM rooms Where status1 = 0";
	$cmd = $db->prepare($sql);
	$cmd->execute();
	$result = $cmd->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $result;
}
function filterRoomVacant1(){

	$db = system_db();
	$sql = "SELECT * FROM rooms Where status1 = 1";
	$cmd = $db->prepare($sql);
	$cmd->execute();
	$result = $cmd->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $result;
}

function filterOverview_relocator(){
    
    $db = system_db();
    $sql = "SELECT r.room_number,r.room_typeA,r.room_typeB,r.rate,c.contract_start,c.relocator_company,c.duration_until,c.application_type,c.status,o.occu_ai_name,d.amount,d.datedeposit FROM rooms AS r INNER JOIN contract AS c ON r.room_number = c.room_number INNER JOIN occupant_app_info AS o ON c.occu_ai_id = o.occu_ai_id INNER JOIN deposit AS d ON d.occu_ai_id = c.occu_ai_id WHERE c.status = 1 ORDER BY C.application_type LIKE '%r'";
    $cmd = $db->prepare($sql);
   	$cmd->execute();
	$result = $cmd->fetchAll(PDO::FETCH_ASSOC);
    $db = null;
	return $result;
    
}
function filterOverview_Bed(){
    $db = system_db();
    $sql = "SELECT r.room_number,r.room_typeA,r.room_typeB,r.rate,c.contract_start,c.relocator_company,c.duration_until,c.application_type,c.status,o.occu_ai_name,d.amount,d.datedeposit FROM rooms AS r INNER JOIN contract AS c ON r.room_number = c.room_number INNER JOIN occupant_app_info AS o ON c.occu_ai_id = o.occu_ai_id INNER JOIN deposit AS d ON d.occu_ai_id = c.occu_ai_id WHERE c.status = 1 ORDER BY C.application_type LIKE '%b'";
    $cmd = $db->prepare($sql);
   	$cmd->execute();
	$result = $cmd->fetchAll(PDO::FETCH_ASSOC);
    $db = null;
	return $result;
}

function filterOverview_Aircon(){
    $db = system_db();
    $sql = "SELECT r.room_number,r.room_typeA,r.room_typeB,r.rate,c.contract_start,c.relocator_company,c.duration_until,c.application_type,c.status,o.occu_ai_name,d.amount,d.datedeposit FROM rooms AS r INNER JOIN contract AS c ON r.room_number = c.room_number INNER JOIN occupant_app_info AS o ON c.occu_ai_id = o.occu_ai_id INNER JOIN deposit AS d ON d.occu_ai_id = c.occu_ai_id WHERE c.status = 1 ORDER BY r.room_typeB = 'Aircon'";
    $cmd = $db->prepare($sql);
   	$cmd->execute();
	$result = $cmd->fetchAll(PDO::FETCH_ASSOC);
    $db = null;
	return $result;
}

function roomDeleted($id){
    
$db = system_db();
$sql = "DELETE FROM rooms WHERE room_id=?";
$cmd = $db->prepare($sql);
$cmd->execute(array($id));

$sql1 = "SELECT * FROM rooms Where room_id = ?";
$cmd1 = $db->prepare($sql1);
$cmd1->execute(array($id)); 
$row = $cmd1->fetch();
$db = null;
return 'Room '.$row['room_number'].' Succesfully Deleted';

}


function getTransferToRoom($room){
   
   $db = system_db();
   $sql = "SELECT * rooms WHERE room_number = ?";
   $cmd = $db->prepare($sql);
   $cmd->execute(array($room));
   $row = $cmd->fetchAll(PDO::FETCH_ASSOC);
   return $row;

}

function updateRooms($data){
    $db = system_db();
    
    $sql = "UPDATE rooms SET room_typeA = ? Where room_id = ?";
    $cmd = $db->prepare($sql);
    $cmd->execute(array($data['typeA'],$data['id']));
    
   
    $sql1 = "UPDATE rooms SET room_typeB = ? Where room_id = ?";
    $cmd1 = $db->prepare($sql1);
    $cmd1->execute(array($data['typeB'],$data['id']));
    
    if($data['rate']!=""){
    $sql2 = "UPDATE rooms SET rate = ? Where room_id = ?";
    $cmd2 = $db->prepare($sql2);
    $cmd2->execute(array($data['rate'],$data['id']));
    }
    
    $db = null;
    return 'Successfully Updated';
}

function filterOverview_NonAircon(){
    $db = system_db();
    $sql = "SELECT r.room_number,r.room_typeA,r.room_typeB,r.rate,c.contract_start,c.relocator_company,c.duration_until,c.application_type,c.status,o.occu_ai_name,d.amount,d.datedeposit FROM rooms AS r INNER JOIN contract AS c ON r.room_number = c.room_number INNER JOIN occupant_app_info AS o ON c.occu_ai_id = o.occu_ai_id INNER JOIN deposit AS d ON d.occu_ai_id = c.occu_ai_id WHERE c.status = 1 AND r.room_typeB = 'Non-Aircon'";
    $cmd = $db->prepare($sql);
   	$cmd->execute();
	$result = $cmd->fetchAll(PDO::FETCH_ASSOC);
    $db = null;
	return $result;
}

function getcheckoutlastnumber()
{
	$db = system_db();
	$sql = "SELECT check_out_id FROM checkout_data";
	$cmd = $db->prepare($sql);
	$cmd->execute();
	$result = $cmd->fetchAll();
	$db = null;
	return $result;	
}
function addDeposit($data)
{
	$db = system_db();
	$sql = "INSERT INTO deposit(dep_name,amount,room_number,occu_ai_id,contract_id,datedeposit,status)VALUES(?,?,?,?,?,?,?)";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($data['dep_name'],$data['dep_amount'],$data['dep_roomNumber'],$data['dep_ai_id'],$data['dep_contract_id'],date('Y-m-d'),1));
	$db = null;
	return "Transaction successful.";
}
function depositlist()
{
	$db = system_db();
	$sql = "SELECT * FROM deposit ORDER BY room_number";
	$cmd = $db->prepare($sql);
	$cmd->execute();
	$result = $cmd->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $result;
}
function queryDeposit($room)
{
	$db = system_db();
	$sql = "SELECT amount FROM deposit WHERE status = ? AND room_number = ?";
	$cmd = $db->prepare($sql);
	$cmd->execute(array(1,$room));
	$row = $cmd->fetch();
	if($row)
	{
		return $row['amount'];
	}
	
}
function getContractNumber($data)
{
	$db = system_db();
	$sql = "SELECT o.occu_ai_name, c.contract_id,c.occu_ai_id,  c.room_number FROM contract AS c INNER JOIN occupant_app_info AS o ON o.occu_ai_id = c.occu_ai_id WHERE c.status = ? AND c.room_number = ?";
	$cmd = $db->prepare($sql);
	$cmd->execute(array(1,$data));
	$row = $cmd->fetch();
	$db = null;
	if($row)
	{
		return $row;
	} 
	else
	{
		return "Room number not available for deposit. ";
	}
}

function queryEndOccupant(){

	$db = system_db();
	$sql = "SELECT contract.contract_id,contract.room_number,rooms.room_typeA,rooms.room_typeB,rooms.rate,contract.relocator_company,payment.balance,occupant_app_info.occu_ai_name,contract.duration_until  
			FROM contract,rooms,occupant_app_info ,payment
			WHERE duration_until>= DATE(now()) 
			AND duration_until <= DATE_ADD(DATE(now()), INTERVAL 1 WEEK) 
			AND contract.room_number = rooms.room_number
			AND contract.status = 1 
			AND occupant_app_info.occu_ai_id = contract.occu_ai_id
			AND payment.contract_id = contract.contract_id";
	$cmd = $db->prepare($sql);
	$cmd->execute();
	$row = $cmd->fetchAll(PDO::FETCH_ASSOC);
	if($row){
		return $row;
	}
	else{
		return "No End Occupant Right Now";
	}

 $db = null;
}
function extendEndOccupant($id){
	$db = system_db();
	$sql = "SELECT DATE_ADD(duration_until, INTERVAL 1 MONTH) FROM contract Where contract_id = ?";
	$cmd = $db->prepare($sql);
	$cmd->execute(array($id));
	$row = $cmd->fetchColumn();
	
	if($row){
	$sql2 = "UPDATE contract SET duration_until = ? Where contract_id = ?";
	$cmd2 = $db->prepare($sql2);
	$cmd2->execute(array($row,$id));
	
	return "Occupant Successfully Extend";
	}
	$db = null;
}
function getActiveOccupant()
{
	$db = system_db();
	$sql = "SELECT r.room_number,r.room_typeA,r.room_typeB,r.rate,c.contract_start,c.relocator_company,c.duration_until,c.application_type,c.status,o.occu_ai_name,d.amount,d.datedeposit FROM rooms AS r INNER JOIN contract AS c ON r.room_number = c.room_number INNER JOIN occupant_app_info AS o ON c.occu_ai_id = o.occu_ai_id INNER JOIN deposit AS d ON d.occu_ai_id = c.occu_ai_id WHERE c.status = ?";
	$cmd = $db->prepare($sql);
	$cmd->execute(array(1));
	$row = $cmd->fetchAll();
    $db = null;
	if($row)
	{
		return $row;
	}
	else
	{
		return "No data";
	}
}


function queryUtility(){
    $db = system_db();
	$sql = "SELECT payment.pay_id,payment.due_date,payment.total_bill,payment.monthbill,payment.pay_amount,rental_bill.room_number,payment.pay_date,payment.balance,payment.status,occupant_app_info.occu_ai_name,contract.relocator_company FROM payment, rental_bill,occupant_app_info, contract WHERE payment.rental_id = rental_bill.rental_id AND occupant_app_info.occu_ai_id = rental_bill.occu_ai_id AND payment.contract_id = contract.contract_id and contract.status = 1";
	$cmd = $db->prepare($sql);
	$cmd->execute();   
	$row = $cmd->fetchAll();
	$db = null;
	if($row)
	{  
        
		return $row;
       
	}
	else
	{
		return "No data";
		
	}
    
}

function updateUtilityPayment($data){
 
    $db = system_db();
    $sql ="SELECT total_bill FROM payment where pay_id = ?";
    $command = $db->prepare($sql);
    $command ->execute(array($data['payment_id']));
    $result = $command->fetchColumn();
    
    $nowDate = date('Y-m-d');
    $payingAmount = floatval($data['payed_amount']);
    $balanced =  $result - $payingAmount;
    $twoDecimalBalance = sprintf('%0.2f', $balanced);      
    if($balanced>0){

     $sql2 = "UPDATE payment SET pay_amount = ?,balance = ?, status = ?, pay_date = ? Where pay_id = ?";
     $cmd2 = $db->prepare($sql2);
     $cmd2->execute(array($data['payed_amount'],$twoDecimalBalance,0,date('Y-m-d'),$data['payment_id']));
    $db = null;

    }
    else{
    $sql2 = "UPDATE payment SET pay_amount = ?, balance = ? ,status = ?, pay_date = ? Where pay_id = ?";
    $cmd2 = $db->prepare($sql2);
    $cmd2->execute(array($data['payed_amount'],$twoDecimalBalance,1,date('Y-m-d'),$data['payment_id']));
    $db = null;
    }
}

function mcaTracker(){
    $db = system_db();
    $cmd = $db -> prepare("SELECT contract.relocator_company,checkout.room_number,checkout.check_out_room_type,checkout.check_out_room_class,checkout.check_out_name,occupant_app_info.occu_ai_contact_no,checkout.check_out_indate,checkout.check_out_roomrate,checkout.admin,contract.contract_start,payment.total_bill 
    					   FROM checkout, occupant_app_info, contract, payment 
    					   WHERE checkout.occu_ai_id = contract.occu_ai_id 
    					   AND occupant_app_info.occu_ai_id = checkout.occu_ai_id 
    					   AND checkout.occu_ai_id = payment.occu_ai_id 
    					   ORDER BY checkout.check_out_indate");
    $cmd ->execute();
    $row = $cmd->fetchAll();
    $db = null;

    return $row;
}



?>