var canvas = document.querySelector('canvas');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

c.fillStyle = 'green';
c.fillRect(100, 100, 100, 100);

c.fillStyle = 'yellow';
c.fillRect(400, 100, 100, 100);


c.fillStyle = 'blue';
c.fillRect(300, 300, 100, 100);


c.beginPath();
c.moveTo(50, 400);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.stroke();


for (var i = 0; i < 2090; i++) {
	  var a = ['green', 'blue', 'yellow', 'pink']
     var x= Math.random() * window.innerWidth;
     var y= Math.random() * window.innerHeight;
     c.beginPath();
     c.arc(x, y, 30, 0, Math.PI * 2, false)

     c.strokeStyle = 'green';

     c.stroke();
}





