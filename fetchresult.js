async function fetchDataFromAPI() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
  
      console.log('Data fetched from API:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  fetchDataFromAPI(); 