// Add JavaScript below


// Big Ben Image
ScrollReveal().reveal('.BigBen' , {distance: '50 px' , origin: 'top' , duration: 3000});

// Van Gogh Sunflowers Image
ScrollReveal().reveal('.VanGoghSunflowers' , {delay: 1500 , duration:1000 , rotate: {x: -20, y: 0, z: -20} , opacity: 0.2});

// Afternoon Tea Image
ScrollReveal().reveal('.AfternoonTea' , {delay: 1000 , distance: '1000 px' , origin: 'left' , duration: 3000});

// Eiffel Tower Image
ScrollReveal().reveal('.EiffelTower_Selfie' , {delay: 1500 , distance: '1000 px' , origin: 'right' , duration: 2000});

// Croissant Image
ScrollReveal().reveal('.Croissant' , {delay: 2500 , rotate: {x: 80, y:0, z:0} , duration: 3000});


/*
window.onload = function() {
    ScrollReveal().reveal('.BigBen' , {delay: 500} , {duration: 5000});
    ScrollReveal().reveal('.VanGoghSunflowers' , {delay: 1000} , {duration: 1000});
    ScrollReveal().reveal('.AfternoonTea' , {delay: 1100} , {duration: 11000});
    ScrollReveal().reveal('.EiffelTower_Selfie' , {delay: 900} , {duration: 90});
    ScrollReveal().reveal('.Croissant' , {delay: 700} , {duration: 7000});
    }


/*
function clickOMatic() {
    alert('Clicked!');
}

window.onload = function() {
    const click = document.getElementById('click');

click.addEventListener("click", (event) => {
    clickOMatic();
});
};

*/