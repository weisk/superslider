var _height=900;
var _photos=20;
var _width=(_photos*48)-10;

function start() {
	var url='http://api.flickr.com/services/rest/?jsoncallback=jQuery183003378139589648099_1367789374182&format=json&method=flickr.interestingness.getList&api_key=b51d3a7c3988ba6052e25cb152aecba2&_=1367789374628';
	var url2 = url+'&per_page='+_photos;
	getAjax(url2,work);
	initStyles();
}

function work(s) {
	var x = eval("("+s.substring(s.indexOf('(')+1,s.length-1)+")");
	$('.slider').css({width:(_width*x.photos.photo.length)+'px'});
	for(var i=0;i<x.photos.photo.length;i++) {
		$('.nav').append('<li onclick="slide('+i+')" class="trans">'+(i+1)+'</li>');
		var obj = x.photos.photo[i];
		var src = 'http://farm9.static.flickr.com/'+obj.server+'/'+obj.id+'_'+obj.secret+'_b.jpg';
		$('.slider').append('<div class="panel"><img src="'+src+'"></img></div>');
	}
	$('.nav li:first-child').addClass('active');
}

function initStyles(){
	var styles = document.styleSheets[document.styleSheets.length-1];
	styles.insertRule('.panel{width:'+_width+'px;max-height:'+_height+'px;}',styles.cssRules.length);
	$('#header, #footer, #content>div').css('max-width',_width+'px');
}

function slide(i) {
	$('.navbar-inner li.active').removeClass('active');
	$('.navbar-inner li').eq(i).addClass('active');
	$('.slider').css('right',(i*_width)+'px');
}