function inicanvas() {
	var c = document.getElementById("idCanvas");
	var ctx = c.getContext("2d");

	

	var img = new Image();
	img.src = 'mapa-art.png';
	img.onload = function(){
		ctx.drawImage(img, 10, 10);
	}


	ctx.font = "italic 16pt arial";
	ctx.fillText("Efetivo", 15,350);	
	ctx.font = "12pt arial";
	ctx.fillText("Empenhado: 453", 15,370);	
	ctx.fillText("Disponível: 82", 15,390);	



	ctx.font = "italic 16pt arial";
	ctx.fillText("Viaturas", 15,450);	
	ctx.font = "12pt arial";
	ctx.fillText("Empenhado: 453", 15,470);	
	ctx.fillText("Disponível: 82", 15,490);	
}