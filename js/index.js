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