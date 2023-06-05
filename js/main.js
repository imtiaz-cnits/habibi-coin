// paralaax effect
gsap.fromTo("#hero-left-bird", { opacity: 1 }, {
    y: -800,
    x: 2000,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "0% top",
        end: "30% 100%",
        scrub: 4,
        onEnter: function() { gsap.to("#hero-left-bird", { scaleX: 1, rotation: 0 }) },
        onLeave: function() { gsap.to("#hero-left-bird", { scaleX: -1, rotation: -15 }) },
    }
})

gsap.fromTo("#hero-right-bird", { opacity: 1 }, {
    y: 800,
    x: -2500,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "0% top",
        end: "30% 100%",
        scrub: 4,
        onEnter: function() { gsap.to("#hero-right-bird", { scaleX: 1, rotation: 0 }) },
        onLeave: function() { gsap.to("#hero-right-bird", { scaleX: -1, rotation: -15 }) },
    }
})

gsap.fromTo("#hero-desert-left", { opacity: 1 }, {
    x: 100,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "10% top",
        end: "50% 100%",
        scrub: 4,
    }
})

gsap.fromTo("#hero-desert-right", { opacity: 1 }, {
    x: -100,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "10% top",
        end: "50% 100%",
        scrub: 4,
    }
})

gsap.fromTo("#hero-moon", { opacity: 1 }, {
    y: -300,
    scale: 5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "10% top",
        end: "30% 100%",
        scrub: 4,
    }
})


gsap.fromTo("#hero-cloud-left", { opacity: 1 }, {
    x: 500,
    y: 200,
    scale: 5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "20% top",
        end: "30% 100%",
        scrub: 4,
    }
})

gsap.fromTo("#hero-cloud-right", { opacity: 1 }, {
    x: -500,
    y: 200,
    scale: 5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "20% top",
        end: "30% 100%",
        scrub: 4,
    }
})

// about parallax

gsap.fromTo("#about-left-bird", { opacity: 1 }, {
    y: -300,
    x: 1800,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "40% top",
        end: "50% 100%",
        scrub: 4,
        onEnter: function() { gsap.to("#about-left-bird", { scaleX: 1, rotation: 0 }) },
        onLeave: function() { gsap.to("#about-left-bird", { scaleX: -1, rotation: -15 }) },
    }
})

gsap.fromTo("#about-right-bird", { opacity: 1 }, {
    y: 500,
    x: -1800,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "40% top",
        end: "50% 100%",
        scrub: 4,
        onEnter: function() { gsap.to("#about-right-bird", { scaleX: 1, rotation: 0 }) },
        onLeave: function() { gsap.to("#about-right-bird", { scaleX: -1, rotation: -15 }) },
    }
})

gsap.fromTo("#about-cloud-left", { opacity: 1 }, {
    x: 1000,
    y: -200,
    scale: 3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "44% top",
        end: "50% 100%",
        scrub: 4,
    }
})

gsap.fromTo("#about-cloud-right", { opacity: 1 }, {
    x: -1000,
    y: 200,
    scale: 3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "44% top",
        end: "50% 100%",
        scrub: 4,
    }
})

// feature parallax

gsap.fromTo("#feature-camels", { opacity: 1 }, {
    x: 100,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "48% top",
        end: "60% 100%",
        scrub: 4,
    }
})

// roadmap parllax

gsap.fromTo("#roadmap-left-bird", { opacity: 1 }, {
    y: -800,
    x: 2000,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "63% top",
        end: "78% 100%",
        scrub: 4,
        onEnter: function() { gsap.to("#roadmap-left-bird", { scaleX: 1, rotation: 0 }) },
        onLeave: function() { gsap.to("#roadmap-left-bird", { scaleX: -1, rotation: -15 }) },
    }
})

gsap.fromTo("#roadmap-right-bird", { opacity: 1 }, {
    y: 800,
    x: -2000,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "55% top",
        end: "70% 100%",
        scrub: 4,
        onEnter: function() { gsap.to("#roadmap-right-bird", { scaleX: 1, rotation: 0 }) },
        onLeave: function() { gsap.to("#roadmap-right-bird", { scaleX: -1, rotation: -15 }) },
    }
})

gsap.fromTo("#roadmap-cloud-left", { opacity: 1 }, {
    x: 1000,
    y: -200,
    scale: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "65% top",
        end: "85% 100%",
        scrub: 4,
    }
})

gsap.fromTo("#roadmap-cloud-right", { opacity: 1 }, {
    x: -1000,
    y: 200,
    scale: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "57% top",
        end: "78% 100%",
        scrub: 4,
    }
})

// benefits parallax

gsap.fromTo("#benefits-camels", { opacity: 1 }, {
    x: -100,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "69% top",
        end: "90% 100%",
        scrub: 4,
    }
})




// navbar scroll to color change
var nav = document.querySelector('.navbar'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY >= 4450) { // Just an example
        nav.style.backgroundColor = '#bc603b'; // or default color
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});



// accordion

// const accordion = document.getElementsByClassName("contentBox");

// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function(){
//         this.classList.toggle("active")
//     });
// }


let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        } else {
            contentDiv[i].style.height = '0px';
            icons[i].classList.add('fa-plus');
            icons[i].classList.remove('fa-minus');
        }
        for (let j = 0; j < contentDiv.length; j++) {
            if(j!==i) {
                contentDiv[j].style.height = '0px';
                icons[j].classList.add('fa-plus');
                icons[j].classList.remove('fa-minus');
            }           
        }
    });
}


// chart

const chartData = {
    labels: ["Supply", "Liquidity", "Marketing", "Cex Listing", "Airdrop"],
    data: [35, 30, 20, 15, 05],
};

const myChart = document.querySelector("#my-chart");
const ul = document.querySelector(".chart-stats .details ul");

// new Chart(myChart, {
//     type: "doughnut",
//     data: {
//         lebels: chartData.labels,
//         datasets: [
//             {
//                 data: chartData.data,
//                 backgroundColor: [
//                     "#ffe600",
//                     "#B6DB71",
//                     "#2EB9DE",
//                     "#FF8E31",
//                     "#9F64D0",
//                 ],
//             },
//         ],
//     },
//     options: {
//         elements: {
//             arc: {
//                 borderWidth: 0,
//             },
//         },
//         cutoutPercentage: 60,
//         cutout: "70%",
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//             },
//         },
//     },
// });

const data = {
    labels: 
     chartData.labels,
    datasets: [{
      label: 'My Dataset',
      data: chartData.data,
      backgroundColor: [
        "#ffe600",
        "#B6DB71",
        "#2EB9DE",
        "#FF8E31",
        "#9F64D0",
      ],
      hoverOffset: 8
    }],
    borderWidth: 0
  };

  // hover chart to so parcentage

const hoverLabel = {
    id: 'hoverLabel',
    afterDraw(chart, arg, options) {
        const {ctx, chartArea: {left, right, top, bottom, width, height}} = chart;
        ctx.save();       

        if(chart._active.length > 0) {

            const textLabel = chart.config.data.labels[chart._active[0].index];
            console.log(chart.config.data.labels);
            const numberLabel = chart.config.data.datasets[chart._active[0].datasetIndex].data[chart._active[0].index];
            // const color = chart.config.data.datasets[chart._active[0].datasetIndex].backgroundColor[chart._active[0].index];
            
        ctx.font = 'bolder 20px Inknut Antiqua';
        ctx.fillStyle = "#ffffff";
        ctx.fillAlign = 'center';
        ctx.fillText(`${numberLabel}% ${textLabel}`, width / 4.2, height / 2 + top)
    }
    }
 };


  const config = {
    type: 'doughnut',
    data: data,
    options: {
        borderWidth: 0,
        cutout: "70%",
        plugins:{
            legend: {
                labels: {
                    usePointStyle: true,
                },
                display: false,
            },
            
        },
    },
    plugins: [hoverLabel]
  };

const ctx = document.getElementById("my-chart");
const mycharts = new Chart(
    ctx,
    config
); 

// const populateUl = () => {
//     chartData.labels.forEach((l, i) => {
//         let li = document.createElement("li");
//         li.innerHTML = `${l} - <span class='percentage'>${chartData.data[i]}%</span>`; 
//         ul.appendChild(li);
//     })
// }
// populateUl();


// random genarate images

let conclusionImage = document.getElementById('conclusionImages');
let images = ['./images/conclusion-img-1.svg', './images/conclusion-img-2.svg', './images/conclusion-img-3.svg', './images/conclusion-img-4.svg'];

setInterval(function() {
    let rnd = Math.floor(Math.random() * images.length);
    conclusionImage.src = images[rnd];
    conclusionImage.style.transform = "scale(1) rotate(0deg";

}, 2000);

