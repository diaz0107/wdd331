function toggleNav() {
       var updateElement = document.getElementById("menu-icon");
      var sidebar = document.getElementById("sidebar");
      var body = document.querySelector("body");
    //toggle adds a class if it's not there or removes it if it is.
    updateElement.classList.toggle("open");
    sidebar.classList.toggle("open");  
    body.classList.toggle("open");  
}