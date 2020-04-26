window.addEventListener("scroll", function (e) {
    if ((document.body.scrollHeight - window.scrollY) < 1000) {
      var sec = document.createElement("section");
      var tit = document.createElement("h3");
      var para = document.createElement("p");
  
      sec.appendChild(tit);
      sec.appendChild(para);
  
      // sec.classList.add('story');
  
      var heading = document.createTextNode("This is a title");
  
      tit.appendChild(heading);
      var content = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
      para.appendChild(content);
  
      var a = document.getElementsByTagName('main');
      a[0].appendChild(sec);
  
      // var para = document.createElement("p");
      // var node = document.createTextNode("This is a new paragraph.");
      // para.appendChild(node);
      // var a = document.getElementsByTagName('body');
      // a[0].appendChild(para);   
    }
  })

//Intersection observer options
let options = {
    threshold: 1.0
  }
  let callback = (enteries, observer) => {
    enteries.forEach(entry => {
      // console.log(entry.intersectionRatio);
      if (entry.isIntersecting) {
        //    console.log("hi");
      }
    });
  }
  let observer = new IntersectionObserver(callback, options);
  let target = document.querySelector('#img1');
  observer.observe(target);
  
  
  
  
  
  
  let value = {
    threshold: 0
  }
  let sectionCallback = (observations, sectionObserver) => {
    observations.forEach(observation => {
      var targetId = observation.target.id;
      var previousTarget
      var currentTarget
      
      var headingId 
        switch (targetId) {
          case 'javascript':
            headingId = '#browserjavascript';
            previousTarget = ['#browserwindow' , '#browserdocument' , '#browserelement']
            break;
          case 'window':
          headingId = '#browserwindow'; 
          previousTarget = ['#browserdocument' , '#browserjavascript' , '#browserelement']
           break;
          case 'document':
            headingId = '#browserdocument'
            previousTarget = ['#browserelement' , '#browserwindow' ,'#browserjavascript' ]
          break; 
          case 'element':
            headingId = '#browserelement'
            previousTarget = ['#browserdocument','#browserelement' , '#browserjavascript']  
           break;
          default:
            break;
        }
       
      
      if (observation.isIntersecting) {
        for(currentTarget of previousTarget){
          var link = document.querySelector(currentTarget);
          link.classList.remove('marked-link');
          console.log("Here YOu dnt go");
        }
        var link = document.querySelector(headingId);
        console.log("Here you go..");
        link.classList.add('marked-link');
      }
      
    })
  }
  let value1 = {
    threshold: 0
  }
  let sectionObserver = new IntersectionObserver(sectionCallback, value);
  let sectionTarget = document.querySelector('#javascript');
  let section1Target = document.querySelector('#window');
  let section2Target = document.querySelector('#document');
  let section3Target = document.querySelector('#element');
  sectionObserver.observe(sectionTarget);
  sectionObserver.observe(section1Target);
  sectionObserver.observe(section2Target);
  sectionObserver.observe(section3Target);
  
  // To make fixed sub-heading when the scroll position meets its specific section
  let numb = {
    threshold: 0
  }
  // Function reads through every section
  let navCallback = (navigations, navigationObserver) => {
    navigations.forEach(navigation => {
      var sectionId = navigation.target.id;
      var previouSection
      var currentSection
      
      var navId 
        switch (sectionId) {
          case 'javascript':
            navId = '#navjavascript';
            previouSection = ['#navwindow' , '#navdocument' , '#navelement']
            console.log("here");
            break;
          case 'window':
            navId = '#navwindow'; 
            previouSection = ['#navdocument' , '#navjavascript' , '#navelement']
           break;
          case 'document':
            navId = '#navdocument'
            previouSection = ['#navelement' , '#navwindow' ,'#navjavascript' ]
          break; 
          case 'element':
            navId = '#navelement'
            previouSection = ['#navdocument','#navwindow' , '#navjavascript']  
           break;
          default:
            break;
        }
       
      // Checks if the position is meeting its specific section
      if (navigation.isIntersecting) {
        for(currentSection of previouSection){
          var sec = document.querySelector(currentSection);
          // Remove fixed header from other sections that has not met the position
          sec.classList.remove("sticky");
          console.log("Removed sticky sub-heading");
        }
        var sec = document.querySelector(navId);
        // Add fixed header to the specific section that met through 'sticky'
        sec.classList.add('sticky');
        console.log("Added sticky sub-heading");
        
      }
      
    })
  }
  let numb1 = {
    threshold: 0
  }
  let navigationObserver = new IntersectionObserver(navCallback, numb);
  let navigateSection1 = document.querySelector('#javascript');
  let navigateSection2 = document.querySelector('#window');
  let navigateSection3 = document.querySelector('#document');
  let navigateSection4 = document.querySelector('#element');
  navigationObserver.observe(navigateSection1);
  navigationObserver.observe(navigateSection2);
  navigationObserver.observe(navigateSection3);
  navigationObserver.observe(navigateSection4);  