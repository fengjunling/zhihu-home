/*global $, document, Chart, LINECHART, data, options, window*/
function loadCharts() {

	'use strict';

	// ------------------------------------------------------- //
	// Line Chart
	// ------------------------------------------------------ //
	var legendState = true;
	if($(window).outerWidth() < 576) {
		legendState = false;
	}

	var opts = {
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					display: false
				}
			}],
			yAxes: [{
				display: true,
				gridLines: {
					display: false
				}
			}]
		},
		legend: {
			display: legendState
		}
	}

	var ctx1 = document.getElementById("followersTop20").getContext('2d');
	new Chart(ctx1, {
		type: 'bar',
		options: opts,
		data: {
			labels: vueObj.followersTop20.labels,
			datasets: [{
				label: "话题关注Top20",
				fill: true,
				lineTension: 0,
				backgroundColor: "transparent",
				borderColor: '#f15765',
				pointBorderColor: '#da4c59',
				pointHoverBackgroundColor: '#da4c59',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				borderWidth: 1,
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBorderColor: "#fff",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 0,
				data: vueObj.followersTop20.datas,
				spanGaps: false
			}]
		}
	});

	// ------------------------------------------------------- //
	// Line Chart 1
	// ------------------------------------------------------ //
	var ctx2 = document.getElementById("userTop20").getContext('2d');
	var myLineChart = new Chart(ctx2, {
		type: 'horizontalBar',
		options: opts,
		data: {
			labels: vueObj.userTop20.labels,
			datasets: [{
				label: "粉丝数Top20",
				fill: true,
				lineTension: 0,
				backgroundColor: "transparent",
				borderColor: '#6ccef0',
				pointBorderColor: '#59c2e6',
				pointHoverBackgroundColor: '#59c2e6',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				borderWidth: 3,
				pointBackgroundColor: "#59c2e6",
				pointBorderWidth: 0,
				pointHoverRadius: 4,
				pointHoverBorderColor: "#fff",
				pointHoverBorderWidth: 0,
				pointRadius: 4,
				pointHitRadius: 0,
				data: vueObj.userTop20.datas,
				spanGaps: false
			}]
		}
	});
	var ctx3 = document.getElementById("articleTop20").getContext('2d');
	new Chart(ctx3, {
		type: 'bar',
		options: opts,
		data: {
			labels: vueObj.articlesTop20.labels,
			datasets: [{
				label: "知乎写手人数分布",
				fill: false,
				lineTension: 0,
				backgroundColor: "transparent",
				borderColor: '#20c997',
				pointBorderColor: '#20c997',
				pointHoverBackgroundColor: '#20c997',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				borderWidth: 3,
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBorderColor: "#fff",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 0,
				data: vueObj.articlesTop20.datas,
				spanGaps: false
			}]
		}
	});
	// ------------------------------------------------------- //
	// Pie Chart
	// ------------------------------------------------------ //
	var PIECHART = document.getElementById("gender").getContext('2d');
	var myPieChart = new Chart(PIECHART, {
		type: 'doughnut',
		options: {
			cutoutPercentage: 50,
			legend: {
				display: true
			}
		},
		data: {
			datasets: [{
				data: vueObj.genderData,
				borderWidth: [0, 0, 0],
				backgroundColor: [
					'#44b2d7',
					"#59c2e6",
					"#71d1f2"
				],
				hoverBackgroundColor: [
					'#44b2d7',
					"#59c2e6",
					"#71d1f2"
				]
			}],
			labels: [
				"未知",
				"女",
				"男"
			]
		}
	});
};