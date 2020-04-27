//Loading infintie contents when we reach the end.

// Used counter so that it loads certain number of times instead of inifinte.
var counter = 0;
window.addEventListener("scroll", function (e) {
  
  if ((document.body.scrollHeight - window.scrollY) < 1000  && counter < 15) {
    
    // Creating a elements which are to be added.
    var sec = document.createElement("section");
    var tit = document.createElement("h3");
    var para = document.createElement("p");

    sec.appendChild(tit);
    sec.appendChild(para);

    // Adding the content to the elements
    var heading = document.createTextNode("This is a title");

    tit.appendChild(heading);
    var content = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    para.appendChild(content);

    var a = document.getElementsByTagName('main');
    a[0].appendChild(sec);
    counter++;
  
  }
})



// Scrollspy and fixed header. 

let value = {
  // threhold zero indicates the visiblity of particular section.
  threshold: 0
}
let sectionCallback = (observations, sectionObserver) => {
  observations.forEach(observation => {
    var targetId = observation.target.id
    // getting the current header.
    var fixHeader = observation.target.getElementsByTagName('h2')[0];
    
    //Selecting the navgiation bar and storing in list.
    var list = document.querySelector('.list1');

    //Selcting the anchor tags from list . 
    var previousTarget = list.getElementsByTagName('a');

    //Collecting all the  headings with class sticky so that we can replace with current in future.
    var Headers = document.getElementsByClassName('sticky');
    var linkId


    switch (targetId) {
      case 'javascript':
        linkId = '#browserjavascript';
        break;
      case 'window':
        linkId = '#browserwindow';
        break;
      case 'document':
        linkId = '#browserdocument'
        break;
      case 'element':
        linkId = '#browserelement'
        break;
      default:
        break;
    }
    if (observation.isIntersecting) {

      // removing the fixed as well marked property from all.
      for (currentHeader of Headers) {
        currentHeader.classList.remove('sticky');
      }
      for (currentTarget of previousTarget){
        currentTarget.classList.remove('marked-link');
      }

      //Now adding new properties to the current selected area.
      var link = document.querySelector(linkId);
      link.classList.add('marked-link');
      fixHeader.classList.add('sticky');
    }
  })
}

let sectionObserver = new IntersectionObserver(sectionCallback, value);
// Selecting all the sections.
let sectionTarget = document.querySelector('#javascript');
let section1Target = document.querySelector('#window');
let section2Target = document.querySelector('#document');
let section3Target = document.querySelector('#element');
//Observing each section.
sectionObserver.observe(sectionTarget);
sectionObserver.observe(section1Target);
sectionObserver.observe(section2Target);
sectionObserver.observe(section3Target);






// Slide image in time interval of 3000
var i = 0; 			
var images = [];	
// Time Between Switch
var time = 3000;	
// Image List
images[0] = "image/cookies-1.jpg";
images[1] = "image/cookies-2.jpeg";
images[2] = "image/cookies-3.jpg";
images[3] = "image/cookies-4.jpeg";
// Change Image
function SlideImg(){
  document.getElementById('slide').src = images[i];
  if(i < images.length - 1){
    i++; 
  } else { 
    // Reset Back To O
    i = 0;
  }

  setTimeout("SlideImg()", time);
}

// Run function when page loads
window.onload=SlideImg;  

