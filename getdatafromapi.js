fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data from the API:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });