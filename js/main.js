
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


  const config = {
    type: 'doughnut',
    data: data,
    options: {
        borderWidth: 0,
        cutout: "70%",
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                },
            },
        },
    },
  };

const ctx = document.getElementById("my-chart");
const mycharts = new Chart(
    ctx,
    config
); 

const populateUl = () => {
    chartData.labels.forEach((l, i) => {
        let li = document.createElement("li");
        li.innerHTML = `<span id='lagendColor'></span>${l} - <span class='percentage'>${chartData.data[i]}%</span>`; 
        ul.appendChild(li);
    })
}


populateUl();