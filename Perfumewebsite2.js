// Function to generate a random number within a specific range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Function to create and animate a circle
  function animateCircle(circle) {
    anime({
      targets: circle,
      translateX: getRandom(0, window.innerWidth - 50),
      translateY: getRandom(0, window.innerHeight - 50),
      scale: getRandom(0.5, 2),
      duration: getRandom(1000, 3000),
      easing: 'easeInOutQuad',
      complete: function(anim) {
        animateCircle(circle); 
      },
    });
  }
  
  // Function to create multiple circles
  function createCircles(numCircles) {
    const container = document.getElementById('animationContainer');
    console.log(container);
    
    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      container.appendChild(circle);
      console.log(container);
      animateCircle(circle); // Start animating each circle
    }
  }
  
 
  createCircles(200);
  