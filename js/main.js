document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('buyButton').addEventListener('click', function() {
        var logoContainer = document.getElementById('logoContainer');

        if (logoContainer.style.opacity == 0) {
            // alert ('asdfas');
            logoContainer.style.opacity = 1;
            logoContainer.style.visibility = "visible";
            logoContainer.style.transform = "translateY(0)";

        }

        
    });
    

});