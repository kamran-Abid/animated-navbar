function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue =  window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}
window.addEventListener("scroll", changeBg)

// same link : https://raysoflightli.com/
// username:     genacad882@maazios.com
// password:     Hereismypassword222!
// https://www.loom.com/share/835e25294804469cabc85e9edc89ca76