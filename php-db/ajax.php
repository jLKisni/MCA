<?php

include 'db-system.php';
$action = $_GET['action'];

if($action == "login")
{
		$login_data['username']=trim($_POST['log_username']);
		$login_data['password']=trim($_POST['log_password']);
		$message = login_admin($login_data);
			echo $message;
		}

else if($action == "getAdmin"){
	$id = getId();
	$data = getAdmin($id);
	header('content-type: application/json');
	echo json_encode($data);
}
else if($action == "getAccount"){
	$id = getId();
	$data = getAdmin($id);
	header('content-type: application/json');
	echo json_encode($data);
}
else if($action == "updateAccount"){
	$id = getId();
	$data = array();
	$data['ed_id'] = $id;
	$data['ed_name'] = trim($_POST['ed_name']);
	$data['ed_lastname'] = trim($_POST['ed_lastname']);
	$data['ed_username'] = trim($_POST['ed_username']);
	$result = updateAdmin($data);
	echo $result;
}
else if($action == "changePassword"){
		$id = getId();
		$data = array();
		$data['ch_id'] = $id;

		$data['ch_currpass']=trim($_POST['ch_currpass']);
		$data['ch_newpass']=trim($_POST['ch_newpass']);
		$data['ch_confirm']=trim($_POST['ch_confirmnewpass']);
		$message = changePassword($data);
		echo $message;
}
//////////////////////////////////////////// END OF ADMIN FUNCTION //////////////////////////////////////////////////////
else if($action == "addroom"){
	$rate = array(); 
	$r = trim($_POST['addroomRate']);
	$rate = explode(",", $r);
	$rateme = implode("", $rate);
	$data = array();
	$data['addroomNumber']= strtoupper(trim($_POST['addroomNumber']));
	$data['addroomtypeA']= trim($_POST['addroomtypeA']);
	$data['addroomtypeB']= trim($_POST['addroomtypeB']);
	$data['addroomCapacity']= trim($_POST['addroomCapacity']);
	$data['addroomRate'] = $rateme;
	$result = addRoom($data);
	echo $result;
}
else if($action == "queryRoomsNumber"){
	
	$data = strtoupper($_GET['cfr_no']);
	$result = queryRoomsNumber($data);
	header('content-type: application/json');
	echo json_encode($result);
}
else if($action == "fillupform"){
	//$data = array();
	$data['cfr_no'] = strtoupper(trim($_POST['cfr_no']));
	$data['ffc_date'] = trim($_POST['ffc_date']);
	$data['ffc_udate'] = trim($_POST['ffc_udate']);
	$data['rd_a_Type'] = trim($_POST['rd_a_Type']);
	$data['rd_comp_relocator'] = trim($_POST['rd_comp_relocator']);
	$data['ffo_name'] = trim($_POST['ffo_name']);
	$data['ffo_bdate'] = trim($_POST['ffo_bdate']);
	$data['ffo_number'] = trim($_POST['ffo_number']);
	$data['ffo_address'] = trim($_POST['ffo_address']);
	$data['ffo_city'] = trim($_POST['ffo_city']);
	$data['ffo_province'] = trim($_POST['ffo_province']);
	$data['ffo_zipcode'] = trim($_POST['ffo_zipcode']);
	$data['ffo_ownrent'] = trim($_POST['ffo_ownrent']);
	$data['ffo_mp_rent'] = trim($_POST['ffo_mp_rent']);
	$data['ffo_howlong'] = trim($_POST['ffo_howlong']);
	$data['ffo_p_address'] = trim($_POST['ffo_p_address']);
	$data['ffo_p_ownrent'] = trim($_POST['ffo_p_ownrent']);
	$data['ffo_p_paymentrent'] = trim($_POST['ffo_p_paymentrent']);
	$data['ffo_p_howlong'] = trim($_POST['ffo_p_howlong']);
	$data['ffo_c_employee'] = trim($_POST['ffo_c_employee']);
	$data['ffo_c_address'] = trim($_POST['ffo_c_address']);
	$data['ffo_c_howlong'] = trim($_POST['ffo_c_howlong']);
	$data['ffo_c_phone'] = trim($_POST['ffo_c_phone']);
	$data['ffo_c_email'] = trim($_POST['ffo_c_email']);
	$data['ffo_c_timeofshift'] = trim($_POST['ffo_c_timeofshift']);
	$data['ffo_c_city'] = trim($_POST['ffo_c_city']);
	$data['ffo_c_province'] = trim($_POST['ffo_c_province']);
	$data['ffo_c_zipcode'] = trim($_POST['ffo_c_zipcode']);
	$data['ffo_c_position'] = trim($_POST['ffo_c_position']);
	$data['ffo_c_salary'] = trim($_POST['ffo_c_salary']);
	$data['ffo_c_dschedule'] = trim($_POST['ffo_c_dschedule']);
	////////////Emergency Contact//////////////////////
	$data['ffo_p_residing'] = trim($_POST['ffo_p_residing']);
	$data['ffo_p_residing_address'] = trim($_POST['ffo_p_residing_address']);
	$data['ffo_p_residing_city'] = trim($_POST['ffo_p_residing_city']);
	$data['ffo_p_residing_province'] = trim($_POST['ffo_p_residing_province']);
	$data['ffo_p_residing_zipcode'] = trim($_POST['ffo_p_residing_zipcode']);
	$data['ffo_p_residing_phone'] = trim($_POST['ffo_p_residing_phone']);
	$data['ffo_p_residing_relationship'] = trim($_POST['ffo_p_residing_relationship']);
	/////////////// CO-Tenant Information ////////////////////////
	$data['ffo_co_name'] = trim($_POST['ffo_co_name']);
	$data['ffo_co_bdate'] = trim($_POST['ffo_co_bdate']);
	$data['ffo_co_ssn'] = trim($_POST['ffo_co_ssn']);
	$data['ffo_co_phone'] = trim($_POST['ffo_co_phone']);
	$data['ffo_co_address'] = trim($_POST['ffo_co_address']);
	$data['ffo_co_city'] = trim($_POST['ffo_co_city']);
	$data['ffo_co_province'] = trim($_POST['ffo_co_province']);
	$data['ffo_co_zipcode'] = trim($_POST['ffo_co_zipcode']);
	$data['ffo_co_ownrenter'] = trim($_POST['ffo_co_ownrenter']);
	$data['ffo_co_monthlypaymentrent'] = trim($_POST['ffo_co_monthlypaymentrent']);
	$data['ffo_co_howlong'] = trim($_POST['ffo_co_howlong']);
	$data['ffo_co_paddress'] = trim($_POST['ffo_co_paddress']);
	$data['ffo_co_infocity'] = trim($_POST['ffo_co_infocity']);
	$data['ffo_co_infoprovince'] = trim($_POST['ffo_co_infoprovince']);
	$data['ffo_co_infonzipcode'] = trim($_POST['ffo_co_infonzipcode']);
	$data['ffo_co_infoownrent'] = trim($_POST['ffo_co_infoownrent']);
	$data['ffo_co_infomonthlypaymentrent'] = trim($_POST['ffo_co_infomonthlypaymentrent']);
	$data['ffo_co_infohowlong'] = trim($_POST['ffo_co_infohowlong']);
	///////////// Registry Of Occupants /////////////////////////////////
	$data['ffo_roo_name1'] = trim($_POST['ffo_roo_name1']);
	$data['ffo_roo_name2'] = trim($_POST['ffo_roo_name2']);
	$data['ffo_roo_name3'] = trim($_POST['ffo_roo_name3']);
	$data['ffo_roo_name4'] = trim($_POST['ffo_roo_name4']);
	$data['ffo_roo_address1'] = trim($_POST['ffo_roo_address1']);
	$data['ffo_roo_address2'] = trim($_POST['ffo_roo_address2']);
	$data['ffo_roo_address3'] = trim($_POST['ffo_roo_address3']);
	$data['ffo_roo_address4'] = trim($_POST['ffo_roo_address4']);
	$data['ffo_roo_age1'] = trim($_POST['ffo_roo_age1']);
	$data['ffo_roo_age2'] = trim($_POST['ffo_roo_age2']);
	$data['ffo_roo_age3'] = trim($_POST['ffo_roo_age3']);
	$data['ffo_roo_age4'] = trim($_POST['ffo_roo_age4']);
	$data['ffo_roo_phone1'] = trim($_POST['ffo_roo_phone1']);
	$data['ffo_roo_phone2'] = trim($_POST['ffo_roo_phone2']);
	$data['ffo_roo_phone3'] = trim($_POST['ffo_roo_phone3']);
	$data['ffo_roo_phone4'] = trim($_POST['ffo_roo_phone4']);
	
	
	$result = fillupformOccupant($data);
	echo $result;
}
else if ($action =="roomlist"){

	$result = getRoomList();
	header('content-type: application/json');
	echo json_encode($result);
}
else if ($action == "filterRoom"){
	$result = filterRoomVacant();
	header('content-type:application/json');
	echo json_encode($result);
}
else if ($action == "filterRoom1"){
	$result = filterRoomVacant1();
	header('content-type:application/json');
	echo json_encode($result);
}
else if ($action == "getAllRooms") 
{
	$result = getAllRooms();
	header('content-type:application/json');
	echo json_encode($result);

}
else if($action == "queryUtilityuser"){
	$room = trim($_GET['room']);
	$result = queryUtilityUser($room);
	header('content-type:application/json');
    echo json_encode($result);
}
else if($action =="deleteRoom"){
    $room = trim($_GET['roomid']);
    $result = roomDeleted($room);
    echo $result;
}
else if($action == 'updateRoomlist'){
    $data['id'] = trim($_POST['room_id']);
    $data['roomnumber'] = trim($_POST['roomnumber']);
    $data['typeA'] = trim($_POST['room_typea']);
    $data['typeB'] = trim($_POST['room_typeb']);
    $data['rate'] = trim($_POST['room_rate']);
    
    $result = updateRooms($data);
    echo $result;
}
elseif ($action == "roomCheckOut")
{
	$data = array();
	$data['admin'] = trim($_POST['admin']);
	$data['checkout_room_id']  = trim($_POST['checkout_room_id']);
	$data['checkout_occu_id'] = trim($_POST['checkout_occu_id']);
	$data['co_rno'] = strtoupper(trim($_POST['co_rno']));
	$data['co_name'] = trim($_POST['co_name']);
	
	$data['co_cidate'] = trim($_POST['co_cidate']);
	$data['co_rate'] = trim($_POST['co_rate']);
	$data['co_rclass'] = trim($_POST['co_rclass']);
	$data['co_rtype'] = trim($_POST['co_rtype']);
	$data['co_ratype'] = trim($_POST['co_ratype']);
	$data['co_exoutdate'] = trim($_POST['co_exoutdate']);
	/*$data['co_totalrent'] = trim($_POST['co_totalrent']);*/
	$data['co_totalutility'] = trim($_POST['co_totalutility']);
	$data['co_pinalty'] = trim($_POST['co_pinalty']);
	$data['co_discount'] = trim($_POST['co_discount']);
	$data['co_totalpayment'] = trim($_POST['co_totalpayment']);
	$data['co_amountpaid'] = trim($_POST['co_amountpaid']);
	$data['co_balance'] = trim($_POST['co_balance']);

	$result = roomCheckOut($data);
	echo $result;
}
else if($action == "queryPaymentCheckout"){
    $occu_id = $_GET['occuId'];
	$result = queryPaymentCheckout($occu_id);
	header('content-type:application/json');
	echo json_encode($result);
}
else if($action == "addDeposit")
{
	$data = array();
	$data['dep_roomNumber'] = strtoupper(trim($_POST['dep_roomNumber']));
	$data['dep_contract_id'] = trim($_POST['dep_contract_id']);
	$data['dep_ai_id'] = trim($_POST['dep_ai_id']);
	$data['dep_name'] = trim($_POST['dep_name']);
	$data['dep_amount'] = trim($_POST['dep_amount']);
	$result = addDeposit($data);
	echo $result;
}
else if($action =="depositlist")
{
	$result = depositlist();
	header('content-type:application/json');
	echo json_encode($result);
    
    $fp = fopen('results.json', 'w');//write into json file
    fwrite($fp, json_encode($result));
    fclose($fp);
}
else if($action == "queryUtilityPayments"){
    $result = queryUtility();
    header('content-type:application/json');
    echo json_encode($result);
}
elseif ($action == "queryDeposit") 
{	$room = $_GET['room'];
	$result = queryDeposit($room);
	echo $result;
}
else if($action == "queryEndOccupant"){
	$result = queryEndOccupant();
	header('content-type:application/json');
	echo json_encode($result);
}
else if($action == "extendEndOccupant"){
	$id = $_GET['id'];
	$result = extendEndOccupant($id);
	echo $result;
}
elseif ($action == "getActiveOccupant") 
{
	$result = getActiveOccupant();
	header('content-type:application/json');
	echo json_encode($result);
}
else if ($action == "querychechoutnumber") 
{	
	$room = trim($_GET['room']);	
	$result = querychechoutnumber($room);

	header('content-type:application/json');
	echo json_encode($result);
}
else if($action == "transferRoomList"){
	
	$data = $_GET['room'];
	$result = getTransferToRoom($data);
	header('content-type:application/json');
	echo json_encode($result);
}
else if($action == "roomtransferList"){
	$room = $_GET['room'];
	$result = transferToVacantRoom($room);

	header('content-type:application/json');
	echo json_encode($result);
}
else if($action == "submitTransfer"){
	$data['beforeRoom'] = trim($_POST['roomBefore']);
	$data['nowRoom'] = trim($_POST['roomAfter']);
	$data['occu_id'] = trim($_POST['occu_ai_id']);
	$data['contract_id'] = trim($_POST['contract_id']);

	$result = submitTransfer($data);

	echo $result;

}
else if ($action == "getcheckoutlastnumber") 
{
	$result = getcheckoutlastnumber();
	echo json_encode($result);
}
elseif ($action == "getContractNumber") 
{
	$data = trim($_GET['room']);
	$result = getContractNumber($data);
	header('content-type:application/json');
	echo json_encode($result); 
}

else if($action == "updateUtilityPayments")
{
   $data['payment_id'] = trim($_POST['payment_id']);
    $data['payed_amount'] = trim($_POST['payed_amount']);
    $result = updateUtilityPayment($data);
    
   echo $result;
}
else if($action == "filterOverViewRelocator"){
    
    $result = filterOverview_relocator();
	header('content-type:application/json');
	echo json_encode($result);
}
else if($action == "filterOverViewBed"){
    $result = filterOverview_Bed();
    header('content-type:application/json');
    echo json_encode($result);
}
else if($action == "filterOverViewAircon"){
    $result = filterOverview_Aircon();
    header('content-type:application/json');
    echo json_encode($result);
}
else if($action == "filterOverViewNonAircon"){
    $result = filterOverview_NonAircon();
    header('content-type:application/json');
    echo json_encode($result);
}
else if ($action =="utilitypaymentsubmit"){

	if($_POST['utility_rno']!=""){

				$utilitysubmit['utility_rno'] = trim($_POST['utility_rno']);
                $utilitysubmit['utility_id'] = trim($_POST['utility_id']);
                $utilitysubmit['utility_ai_id'] = trim($_POST['utility_ai_id']);
                $utilitysubmit['utility_duedate'] = trim($_POST['utility_duedate']);
                $utilitysubmit['utility_totalbill'] = trim($_POST['utility_totalbill']);
                $utilitysubmit['utility_monthbill'] = trim($_POST['utility_monthbill']);
            
				$utilitysubmit['rprev_read'] = trim($_POST['rprev_read']);
				$utilitysubmit['rpres_read'] = trim($_POST['rpres_read']);
                $utilitysubmit['r_adjustment'] = trim($_POST['r_adjustment']);
				$utilitysubmit['r_usage'] = trim($_POST['r_usage']);
				$utilitysubmit['r_payable'] = trim($_POST['r_payable']);
				$utilitysubmit['r_rate'] = trim($_POST['r_rate']);

		
				$utilitysubmit['lprev_read'] = trim($_POST['lprev_read']);
				$utilitysubmit['lpres_read'] = trim($_POST['lpres_read']);
                $utilitysubmit['l_adjustment'] = trim($_POST['l_adjustment']);
                $utilitysubmit['l_usage'] = trim($_POST['l_usage']);
				$utilitysubmit['l_payable'] = trim($_POST['l_payable']);
				$utilitysubmit['l_rate'] = trim($_POST['l_rate']);

						
				$utilitysubmit['wprev_read'] = trim($_POST['wprev_read']);
				$utilitysubmit['wpres_read'] = trim($_POST['wpres_read']);
                $utilitysubmit['w_adjustment'] = trim($_POST['w_adjustment']);
				$utilitysubmit['w_usage'] = trim($_POST['w_usage']);
				$utilitysubmit['w_payable'] = trim($_POST['w_payable']);
				$utilitysubmit['w_rate'] = trim($_POST['w_rate']);

			
				$utilitysubmit['oprev_read'] = trim($_POST['oprev_read']);
				$utilitysubmit['opres_read'] = trim($_POST['opres_read']);
				$utilitysubmit['o_usage'] = trim($_POST['o_usage']);
				$utilitysubmit['o_payable'] = trim($_POST['o_payable']);
				$utilitysubmit['o_rate'] = trim($_POST['o_rate']);

				$result = utilitypayments($utilitysubmit);
						
				echo $result;
		}
		else
		{
				echo "Input room number first before proceeding!";
		}


}
else if($action == "mcaTracker"){

    $data = mcaTracker();
    header('content-type:application/json');
    echo json_encode($data);
}

?>