var i = 0; //iterating variable

var images = [];

//time btw slides
var time = 3000;

//image list
images[0]="image1.png";
images[1]="image2.jpg";
images[2]="image3.jpg";
images[3]="image4.jpg";
images[4]="image5.jpg";
images[5]="image6.jpg";
images[6]="image7.jpg";
images[7]="image8.jpg";



//logic for slideshow
function slide(){
  document.getElementById("gall").style.backgroundImage = "url"+"("+images[i]+")";
  i++;
    
  if (i==images.length){

        i=0;
    }

}


console.log("It Works :D");


setInterval("slide()",time); //repeats function slide() at 'time' milli-seconds 

