//golobal app for adding styles (class) 
//this way we are using advantages of css3 transition which is not working when we add inline style to element
window.resizeApp = {
	//use this fn to add new and override all previous classes
	addStyle : function(selector, width, margin, is_effect){
		var style_swrapper = document.getElementById('style');
		if(is_effect){
			style_swrapper.innerHTML = selector + this.effects();
		}
		
		style_swrapper.innerHTML = selector +"{"
		+"margin-left:" + margin + "% !important;"
		+"width:"+ width + "% !important;}";
		
	},
	//use this fn if you want to add more classes to existing
	appendStyle : function(selector, width, margin, is_effect){
		var style_swrapper = document.getElementById('style');
		
		if(is_effect){
			style_swrapper.innerHTML = selector + this.effects();
		}
		
		style_swrapper.innerHTML += selector;
	},
	removeStyle : function(){
		var style_swrapper = document.getElementById('style');
	},
	effects:function(){
		return "{-webkit-perspective: 1000;" 
		+"-webkit-transform-style: preserve-3d;" 
		+"-webkit-backface-visibility: hidden;" 
		+"-webkit-transition:margin-left, width 1s;" 
		+"-webkit-transform: rotateZ(360deg);" 
		+"-moz-transition:margin-left, width 1s;" 
		+"-moz-transform: rotateZ(360deg);" 
		+"-ms-transition:margin-left, width 1s;" 
		+"-ms-transform: rotateZ(360deg);" 
		+"-o-transition:margin-left, width 1s;" 
		+"-o-transform: rotateZ(360deg);" 
		+"-transition:margin-left, width 1s;" 
		+"transform: rotateZ(360deg);" 
		+"-webkit-transform: translate3d(0,0,0) rotate(0) scale(1);" 
		+"-moz-transform: translate3d(0,0,0) rotate(0) scale(1);" 
		+"-ms-transform: translate3d(0,0,0) rotate(0) scale(1);" 
		+"-o-transform: translate3d(0,0,0) rotate(0) scale(1);" 
		+"-transform: translate3d(0,0,0) rotate(0) scale(1);}"
	}
};

//lazy loading
window.addScript = function(file)
{
    var headID = document.getElementsByTagName("head")[0];         
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = file;
    headID.appendChild(newScript);
};