var apiUrl = "https://api.weather.gov/points/34.0522,-118.2437";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.data.stations.slice(0, 10).forEach(station => {
      var barContainer = document.createElement('div');
      barContainer.className = 'station-bar-container';

      var forecast = document.createElement('span');
      label.className = 'station-label';
      label.innerText = `${station.name} (Capacity: ${station.capacity})`;

      var bar = document.createElement('div');
      bar.className = 'station-bar';
      bar.style.width = `${station.capacity}px`;

      barContainer.appendChild(label);
      barContainer.appendChild(bar);
      
      container.appendChild(barContainer);
    });
  })
  .catch(error => console.error('Error:', error));
