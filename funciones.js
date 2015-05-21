
function onBodyLoad()
{	/* cuando el telefono esta operativo */
    document.addEventListener("deviceready", onDeviceReady, false);  
    
    /*$("#ov_volver_01").click(function(e){
		onBackKeyDown();						
	});
	$("#ov_menu_01").click(function(e){
		onMenuKeyDown();		
	});	 

    $('.ov_contenedor_01').css("min-height",(viewport_height)+"px");*/
}

function onDeviceReady()
{
	//boton atras
	document.addEventListener("backbutton", onBackKeyDown, false);
	//boton menu
	document.addEventListener("menubutton", onMenuKeyDown, false);
}    
function onBackKeyDown()
{
	window.history.back();
}
function onMenuKeyDown()
{
	window.location.href='index.html';
}
