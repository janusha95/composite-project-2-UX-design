window.addEventListener("scroll", function (e) {
  if ((document.body.scrollHeight - window.scrollY) < 1000) {
    var sec = document.createElement("section");
    var tit = document.createElement("h3");
    var para = document.createElement("p");

    sec.appendChild(tit);
    sec.appendChild(para);

    var heading = document.createTextNode("This is a title");

    tit.appendChild(heading);
    var content = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    para.appendChild(content);

    var a = document.getElementsByTagName('main');
    a[0].appendChild(sec);

  }
})

let value = {
  threshold: 0
}
let sectionCallback = (observations, sectionObserver) => {
  observations.forEach(observation => {
    var targetId = observation.target.id
    var fixHeader = observation.target.getElementsByTagName('h2')[0];
    var list = document.querySelector('.list1');
    var previousTarget = list.getElementsByTagName('a');
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
      for (currentHeader of Headers) {
        currentHeader.classList.remove('sticky');
      }
      for (currentTarget of previousTarget){
        currentTarget.classList.remove('marked-link');
      }
      var link = document.querySelector(linkId);
      console.log("Here you go..");
      link.classList.add('marked-link');
      fixHeader.classList.add('sticky');
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






  // // To make fixed sub-heading when the scroll position meets its specific section
  // let numb = {
  //   threshold: 0
  // }
  // // Function reads through every section
  // let navCallback = (navigations, navigationObserver) => {
  //   navigations.forEach(navigation => {
  //     var sectionId = navigation.target.id;
  //     var previouSection
  //     var currentSection

  //     var navId 
  //       switch (sectionId) {
  //         case 'javascript':
  //           navId = '#navjavascript';
  //           previouSection = ['#navwindow' , '#navdocument' , '#navelement']
  //           console.log("here");
  //           break;
  //         case 'window':
  //           navId = '#navwindow'; 
  //           previouSection = ['#navdocument' , '#navjavascript' , '#navelement']
  //          break;
  //         case 'document':
  //           navId = '#navdocument'
  //           previouSection = ['#navelement' , '#navwindow' ,'#navjavascript' ]
  //         break; 
  //         case 'element':
  //           navId = '#navelement'
  //           previouSection = ['#navdocument','#navwindow' , '#navjavascript']  
  //          break;
  //         default:
  //           break;
  //       }

  //     // Checks if the position is meeting its specific section
  //     if (navigation.isIntersecting) {
  //       for(currentSection of previouSection){
  //         var sec = document.querySelector(currentSection);
  //         // Remove fixed header from other sections that has not met the position
  //         sec.classList.remove("sticky");
  //         console.log("Removed sticky sub-heading");
  //       }
  //       var sec = document.querySelector(navId);
  //       // Add fixed header to the specific section that met through 'sticky'
  //       sec.classList.add('sticky');
  //       console.log("Added sticky sub-heading");

  //     }

  //   })
  // }
  // let numb1 = {
  //   threshold: 0
  // }
  // let navigationObserver = new IntersectionObserver(navCallback, numb);
  // let navigateSection1 = document.querySelector('#javascript');
  // let navigateSection2 = document.querySelector('#window');
  // let navigateSection3 = document.querySelector('#document');
  // let navigateSection4 = document.querySelector('#element');
  // navigationObserver.observe(navigateSection1);
  // navigationObserver.observe(navigateSection2);
  // navigationObserver.observe(navigateSection3);
  // navigationObserver.observe(navigateSection4);  