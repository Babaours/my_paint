/*$('body').on('#', "mousemove", function)*/

var paint;
var currcolor = "#000";
var currtool = "crayon";

var currentsize = 5;
var width = 780;
var height = 780;

var x1;
var y1;

var drag = false;
var point_2 = false



function prepareCanvas()
{
    var canvasDiv = document.getElementById('canvasDiv');
    canvas = document.createElement('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    canvas.setAttribute('id', 'canvas');

    canvasDiv.appendChild(canvas);

    context = canvas.getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    $('#color').change(function(event)
    	{
    		//console.log(currcolor);
    		currcolor = event.target.value;
    	});

    $('#canvas').mousemove(function(e) 
    {
    	var mouseX = e.pageX - this.offsetLeft;
    	var mouseY = e.pageY - this.offsetTop;
    
    	if (paint)
    	{
    		
 			if (!drag)
 			{
 				drag = true;
 				context.beginPath();
 				context.moveTo(mouseX, mouseY);
 			}
 			else
 			{

 				context.lineTo(mouseX + 0.1, mouseY);	
 			}
    		
    		context.strokeStyle = currcolor;
    		context.lineWidth=currentsize;
    		context.stroke();
		}
    })

    $('#canvas').css('cursor', 'cell');

    $('#canvas').mousedown(function()
    {
    	//console.log('jesuisunconsolelog');

    	paint = true;

    })


    $('#canvas').mouseup(function()
    {
    	paint = false;
    	drag = false;
    })


    $('#clear').click(function()
    {
    	//console.log('clear');
    	context.clearRect(0, 0, width, height);
    	context.fillStyle = 'white';
    	context.fillRect(0, 0, width, height);
    })


    $('#crayon').click(function()
    {
    	currtool = "crayon";
    	currcolor = "#000";
    	currentsize = 5;
    	//console.log(currtool);
    })

    $('#line').click(function()
    {
    	currtool = "line";
    	//console.log(currtool);
    })

    $('#small').click(function()
    {
    	currentsize = 1;
    	//console.log('small');
    })

    $('#normal').click(function()
    {
    	currentsize = 5;
    	//console.log('normal');
    })
	
    $('#large').click(function()
    {
    	currentsize = 12;
    	//console.log('large');
    })

    $('#huge').click(function()
    {
    	currentsize = 22;
    	//console.log('huge');
    })

    $('#export').click(function()
    {
    	
    	//console.log('jesuisunconsolelog ! nanana');
    	window.location = canvas.toDataURL("image/png");
    	canvas.href = dataURL;
    	//console.log(window.location);*/
    })

    /*var button = document.getElementById('export');
    button.addEventListener('click', function(e)
    {
    	var dataURL = canvas.toDataURL('image/png');
    	button.href = dataURL;
    })*/

    
    $('#eraser').click(function()
    {
  		gomme = true;
  		console.log(gomme);

  		//currtool = "crayon";
  		currtool = "gomme";
  		currcolor = "white";
  		currentsize = 5;

  		if(currtool !== "gomme")
  		{	
  			gomme = false;
  			currcolor = "#000";

  		}
    })
}