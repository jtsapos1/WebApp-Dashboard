//create the HTML for the Alert banner
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
    to complete</p>
<p class="alert-banner-close">x</p>
</div>
`;

//Add a “click” event listener to the alert banner.
alertBanner.addEventListener('click', (e) => {
	const element = e.target;
	if (element.classList.contains("alert-banner-close")) {
			alertBanner.style.display = "none"
	}
});

//Traffic Chart - Line Graph - Store the canvas element with the id of “traffic-chart” in a variable named
//trafficCanvas.

//Create an Object literal representing the data for the traffic chart - Labels key and data key
const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
	"4-10", "11-17", "18-24", "25-31"],
	datasets: [{
	data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
	2500],
	backgroundColor: 'rgba(96, 111, 73, .3)',
	borderWidth: 1,
	}]
};

//Create an Object literal to set the options you want to change for the chart
let trafficOptions = {
	backgroundColor: 'rgba(112, 104, 201, .5)',
	fill: true,
	aspectRatio: 2.5,
	animation: {
	duration: 0
	},
	scales: {
	y: {
	beginAtZero: true
	}
	},
	plugins: {
	legend: {
	display: false
	}
 }
};

		/*Create the chart itself-pass the trafficCanvas variable so that the graph
knows which canvas element to use to display the graph*/
let trafficChart = new Chart(trafficCanvas, {
	type: 'line', //Create a type key and set the value to “line”
	data: trafficData, //Create a data key and set it equal to trafficData
	options: trafficOptions //Create an options key and set it equal to trafficOptions
});


//Daily Chart (Bar Graph) - data for daily traffic bar chart
const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
	labels: ["S", "M", "T", "W", "T", "F", "S"],
	datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1
	}]
};
const dailyOptions = {
scales: {
	y: {
		beginAtZero: true
	}
},
plugins: {
	legend: {
			display: false
	}
 }
};

//Create the chart itself
let dailyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions
	});

//Mobile Chart (Donut Chart)
//create an object literal for the data
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
	labels: ["Desktop", "Tablet", "Phones"],
	datasets: [{
	label: '# of Users',
	data: [2000, 550, 500],
	borderWidth: 0,
	backgroundColor: [
	'#7477BF',
	'#78CF82',
	'#51B6C8'
	]
 }]
};

	//Create an object literal for the options
const mobileOptions = {
		aspectRatio: 1.9,
		plugins: {
		legend: {
		position: 'right',
		labels: {
		boxWidth: 20,
		fontStyle: 'bold'
	 }
	}
}
};
//Create the chart itself
let mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});

//Messaging Section
//ensure user and message fields are filled out
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
	e.preventDefault();
//ensure user and message fields are filled out
if (user.value === "" && message.value === "") {
	alert("Please fill out user and message fields before sending");
} else if (user.value === "" ) {
	alert("Please fill out user field before sending");
} else if (message.value === "" ) {
	alert("Please fill out message field before sending");
} else {
	alert(`Message successfully sent to: ${user.value}`);
}
});