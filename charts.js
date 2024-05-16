document.addEventListener('DOMContentLoaded', function() {
	fetch('data.json', { mode: 'cors' })
		.then((response) => response.json())
		.then((data) => {
			var ctx = document.getElementById('myChart').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: data.labels,
					datasets: [
						{
							label: 'My First Dataset',
							data: data.data,
							borderColor: 'rgb(75, 192, 192)',
							tension: 0.1,
						},
					],
				},
				options: {},
			});
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
		});
});
