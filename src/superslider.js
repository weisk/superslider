window.superslider = (function() {

	var height,width,photos;
	
	function Superslider(photos,height) {
		this.height = 600;
		this.photos = 20;
		if(typeof photos=="string" && parseInt(photos)>0) this.photos = parseInt(photos);
		if(typeof height=="string" && parseInt(height)>0) this.height = parseInt(height);
		this.width=(this.photos*48)-10;
		var url = "src/api.php?action=getpics&npics="+this.photos;
		getAjax(url,this.work,this);
		this.initStyles();
	}

	Superslider.prototype.work = function(s) {
		var x = eval("("+s.substring(s.indexOf('(')+1,s.length-1)+")");
		$('.slider').css({width:(this.width*this.photos)+'px'});
		for(var i=0;i<x.photos.photo.length;i++) {
			$('.nav').append('<li onclick="slide('+i+','+(i*this.width)+')" class="trans">'+(i+1)+'</li>');
			var obj = x.photos.photo[i];
			var src = 'http://farm9.static.flickr.com/'+obj.server+'/'+obj.id+'_'+obj.secret+'_b.jpg';
			$('.slider').append('<div class="panel"><img src="'+src+'"></img></div>');
		}
		$('.nav li:first-child').addClass('active');
	}

	Superslider.prototype.initStyles = function() {
		$('.slider').css({width:(this.width*this.photos)+'px'});
		var styles = document.styleSheets[document.styleSheets.length-1];
		styles.insertRule('.panel{width:'+this.width+'px;max-height:'+this.height+'px;}',styles.cssRules.length);
		$('#header, #footer, #content>div').css('max-width',this.width+'px');
	}

	var superslider = {
		start: function(photos,height){
			return new Superslider(photos,height);
		},
		clear: function(){
			$('.nav').html('');
			$('.slider').html('');
			$('.slider').attr('style','');
		}
	}
	
	return superslider;

}());