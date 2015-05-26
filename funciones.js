
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
	
	/* fUNCION PARA EL plugin QUE ABRE enlaces externos EN PHONEGAP
	
	<gap:plugin name="org.apache.cordova.inappbrowser" /> */
	$("a[href^='http']").on("click", function(e){
		
		/*ANULAR EL COMPORTAMIENTO POR DEFECTO DEL EVENTO*/
		e.preventDefault();
		
		var mi_href = $(this).attr("href");
		/*ABRE OTRA VENTANA CON BARRA PARA CERRAR*/
		window.open(mi_href, '_blank', 'location=yes,toolbar=yes');
	
	});
	
}    
function onBackKeyDown()
{
	window.history.back();
}
function onMenuKeyDown()
{
	window.location.href='index.html';
}
