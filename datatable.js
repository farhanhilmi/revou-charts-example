$(document).ready(function() {
	fetch('products.json')
		.then(response => response.json())
		.then(data => {

			let table = $('#productTable').DataTable({
				data: data,
				dom: 'lrftp',
				
				columns: [
					{ data: 'id' },
					{ data: 'name' },
					{ data: 'price' },
					{ data: 'qty' }
				]
			});

		})
		.catch(error => console.error('Error fetching data:', error));
});
