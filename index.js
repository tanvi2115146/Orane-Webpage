// hamburger

function toggleMenu() {
    var menu = document.querySelector(".midbar");
    menu.classList.toggle("active");
}






document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {
        let target = parseInt(counter.getAttribute("data-target")); 
        let count = 0;
        let speed = target / 100; 

        const updateCount = () => {
            if (count < target) {
                count += speed;
                counter.innerText = Math.floor(count) + "+"; 
                setTimeout(updateCount, 20);
            } else {
                setTimeout(() => {
                    counter.innerText = "0+"; 
                    startCounter(counter); 
                },0); 
            }
        };

        updateCount();
    };

    counters.forEach((counter) => startCounter(counter)); // Start animation for all counters
});

