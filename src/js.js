function onload() {
	$('#start').on('click',function(){
		superslider.clear();
		superslider.start($('#photos').val(),$('#height').val());
	});
}

function cancelEvent(e) {
	var e = e || window.event;
	e.cancelBubble=true;
	if(e.stopPropagation) e.stopPropagation();
	if(e.preventDefault) e.preventDefault();
	return false;
}
function postAjax(url,parms,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() { if(xhr.readyState==4 && xhr.status=='200') callback(xhr.responseText); }
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.setRequestHeader("Content-length",parms.length);
	xhr.setRequestHeader("Connection","close");
	xhr.open('POST',url,true);
	xhr.send(parms);
}
function getAjax(url,callback,instance) {
	var xhr = new XMLHttpRequest();
	xhr.onerror = function(e) { alert("Error Status: " + e.target.status); console.log(e); }
	xhr.onreadystatechange = function() { if(xhr.readyState==4 && xhr.status=='200') callback.call(instance,xhr.responseText); } 
	xhr.open('GET',url,true);
	xhr.send();
}

function slide(i,offset) {
	$('.navbar-inner li.active').removeClass('active');
	$('.navbar-inner li').eq(i).addClass('active');
	$('.slider').css('right',offset+'px');
}

