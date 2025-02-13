$(document).ready(function () {
   
    const API_KEY = 'aY02pa1oQsZ8rXGl52nzJA==FBvpsRCZHTN8DIEG';
  
    // Handle form submission
    $('#calorie-form').on('submit', function (e) {
      e.preventDefault(); // Prevent page reload
      const query = $('#food-input').val();
  
      if (!query) {
        alert('Please enter some food items.');
        return;
      }
  
      // Make the API request
      $.ajax({
        method: 'GET',
        url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': API_KEY },
        contentType: 'application/json',
        success: function (result) {
          displayResults(result.items);
        },
        error: function (jqXHR) {
          console.error('Error: ', jqXHR.responseText);
          alert('An error occurred. Please try again.');
        },
      });
    });
  
    // Function to display the results
    function displayResults(items) {
      const resultsDiv = $('#calorie-results');
      resultsDiv.empty(); // Clear previous results
  
      if (items.length === 0) {
        resultsDiv.append('<p>No data found for the given input.</p>');
        return;
      }
  
      // Build and display results
      items.forEach((item) => {
        const itemHtml = `
          <div class="card" style="margin-bottom: 10px;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p><strong>Calories:</strong> ${item.calories}</p>
              <p><strong>Serving Size:</strong> ${item.serving_size_g} g</p>
              <p><strong>Protein:</strong> ${item.protein_g} g</p>
              <p><strong>Fat:</strong> ${item.fat_total_g} g</p>
              <p><strong>Carbohydrates:</strong> ${item.carbohydrates_total_g} g</p>
              <p><strong>Fiber:</strong> ${item.fiber_g} g</p>
              <p><strong>Sugar:</strong> ${item.sugar_g} g</p>
            </div>
          </div>`;
        resultsDiv.append(itemHtml);
      });
    }
  });
  