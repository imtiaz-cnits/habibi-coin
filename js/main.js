// parallax moon

gsap.from("#img-1", {
    scrollTrigger : {
        scrub: true
    },
    y: -400,
})


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
        elements: {
            arc: {
                borderWidth: 0
            }
        },
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