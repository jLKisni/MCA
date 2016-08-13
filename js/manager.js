

///////////////////////////////////////// ADD ROOM NUMBER ////////////////////////////////////////
function addRoomModalFunction(){
		var url = "../php-db/ajax.php?action=addroom";
		var data = 
		{
			"addroomNumber":$('#addroomNumber').val(),
			"addroomtypeA":$('#addroomtypeA').val(),
			"addroomtypeB":$('#addroomtypeB').val(),
			"addroomCapacity":1,
			"addroomRate":$('#addroomRate').val()
		};
		if($('#addroomtypeA').val() == "Dorm")
		{
			var count,i = 0;
				count = $('#addroomCapacity').val();
				
				
		
			while(i < count)
			{
				var data = 
				{
				"addroomNumber":$('#addroomNumber').val()+"-"+(i+1),
				"addroomtypeA":$('#addroomtypeA').val(),
				"addroomtypeB":$('#addroomtypeB').val(),
				"addroomCapacity":$('#addroomCapacity').val(),
				"addroomRate":$('#addroomRate').val()
				};

				$.post(url,data,function(result){
				$('#addroomNumber').val("");
				$('#addroomtypeA').val("");
				$('#addroomtypeB').val("");
				$('#addroomCapacity').val("");
				$('#addroomRate').val("");
				});
				i++;
			}
		}
		else
		{
			$.post(url,data,function(result){
				
				$('#addroomNumber').val("");
				$('#addroomtypeA').val("");
				$('#addroomtypeB').val("");
				$('#addroomCapacity').val("");
				$('#addroomRate').val("");
			});
	}
	alert("New room added.");
}
/////////////////////////////////////// CHECK-IN-FORM ////////////////////////////////////////






















