function checkforblank(){
	if (document.getElementById('customer').value == ""){
		alert('Please enter a name');
		return false;
	}
	else if (document.getElementById('country').value =="option"){
		alert('Please choose a country');
	}
	else if (document.getElementById('pending').value !="pending" !="process"!="shipped"){
			alert('Please choose a status');
	}
	else if (document.getElementById('process').value !="pending" !="process"!="shipped"){
			alert('Please choose a status');
	}
	else if (document.getElementById('shipped').value !="pending" !="process"!="shipped"){
			alert('Please choose a status');
	}
	else if (document.getElementById('order').value ==""){
			alert('Please choose a date');
			}
}