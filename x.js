function showOverlap(event,ui) {
	$("#collisions").children().remove();
        var collisions = $("#enemy").collision( "#imgtux", { relative: "collider", obstacleData: "odata", colliderData: "cdata", directionData: "ddata", as: "<div/>" } );				
				for( var i=0; i<collisions.length; i++ ){
				  var o = $(collisions[i]).data("odata");
				  var c = $(collisions[i]).data("cdata");
				  var d = $(collisions[i]).data("ddata");
				  var cwith = $(o).get(0).id;
				  var cside = d;
              if(cside=="N"){
						$("#enemy").hide();}}}
function motionMethod(){
		src = "mriceblock-left-"+i;		
		$("#enemy").animate({left:"-=3"},100,showOverlap);
		$("#enemy").attr("src","images/enemies/"+src+".png");
	i++;
	if(i==4) i=0;}
function test() {
	return "<img src='"+icon+"' id='enemy'>";}	
function Enemies(left_position,right_position,top_position,bottom_position,type) {
	switch (type) {
		case 1:
			icon = "images/enemies/mriceblock-right-0.png";}
	left=left_position;
	right=right_position;
	top=top_position;
	bottom=bottom_position;
	this.show = test;
	this.motion = motionMethod;}
