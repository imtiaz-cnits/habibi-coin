// parallax moon

gsap.from("#hero-moon", {
    scrollTrigger : {
        scrub: true
    },
    y: -700,
})

gsap.from("#hero-desert-left", {
    scrollTrigger : {
        scrub: true
    },
    x: -400,
})

gsap.from("#hero-desert-right", {
    scrollTrigger : {
        scrub: true
    },
    x: 400,
})

gsap.from("#feature-camels", {
    scrollTrigger : {
        scrub: true
    },
    x: -500,
})

gsap.from("#benefits-camels", {
    scrollTrigger : {
        scrub: true
    },
    x: 600,
})

gsap.from("#parallax-building", {
    scrollTrigger : {
        scrub: true
    },
    y: -800,
})

gsap.from("#parallax-tree", {
    scrollTrigger : {
        scrub: true
    },
    y: -800,
})

gsap.from("#feature-parallax-tree", {
    scrollTrigger : {
        scrub: true
    },
    y: -800,
})

gsap.from("#feature-parallax-building", {
    scrollTrigger : {
        scrub: true
    },
    y: -800,
})


// navbar scroll to color change
var nav = document.querySelector('.navbar'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY >= 150) { // Just an example
        nav.style.backgroundColor = '#bc603b'; // or default color
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});



// accordion

const accordion = document.getElementsByClassName("contentBox");

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle("active")
    });
}


// chart

const chartData = {
    labels: ["Supply", "Liquidity", "Marketing", "Cex Listing", "Airdrop"],
    data: [35, 30, 20, 15, 05],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".chart-stats .details ul");

new Chart(myChart, {
    type: "doughnut",
    data: {
        lebels: chartData.labels,
        datasets: [
            {
                data: chartData.data,
                backgroundColor: [
                    "#ffe600",
                    "#B6DB71",
                    "#2EB9DE",
                    "#FF8E31",
                    "#9F64D0",
                ],
            },
        ],
    },
    options: {
        borderRadius: 6,
        // elements: {
        //     arc: {
        //         borderWidth: 0
        //     }
        // },
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        cutoutPercentage: 60,
        responsive: true,
        spacing: 20,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

const populateUl = () => {
    chartData.labels.forEach((l, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${l} - <span class='percentage'>${chartData.data[i]}%</span>`; 
        ul.appendChild(li);
    })
}

populateUl();