function displayItem(){
	var ct=0;
	if(localStorage.length==0)
		document.getElementById("display").innerHTML = "No items in To Do list.";

	for (var i = 0; i < localStorage.length; i++){
		ct++;
		var x = (localStorage.getItem(localStorage.key(i)));
		console.log(x);
		document.getElementById("display").innerHTML += '<li>'+ct+". "+x+'</li>';
	}
}

function addFunction(){
	var x = document.getElementById("addItem");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("removeItem");
	if (y.style.display === "block") 
		y.style.display = "none";
}

function addElement() {
	var inputDate = document.getElementById("date").value;
	var inputTime = document.getElementById("time").value;
	var inputtime = document.getElementById("ampm").value;
	var inputValue = document.getElementById("titleInput").value;
	var item = inputDate+" "+ inputTime+" "+inputtime+" "+inputValue;
	console.log(inputTime+" "+inputtime+" "+inputValue);
	localStorage.setItem(localStorage.length, item);
	document.getElementById("display").innerHTML='';
	displayItem();
	addFunction();
}

function removeFunction(){
	var x = document.getElementById("removeItem");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("addItem");
	if(y.style.display === "block")
		y.style.display="none";
}

function removeElement(){
	if(localStorage.length==0)
		alert("No items present in To Do list.");
	var k = document.getElementById("taskNo").value;
	localStorage.removeItem(k-1);
	document.getElementById("display").innerHTML='';
	displayItem();
	removeFunction();
}
