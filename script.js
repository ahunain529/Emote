document.getElementById('analyzeButton').addEventListener('click', function() {
    var text = document.getElementById('inputText').value;
    
    fetch('/analyze_sentiment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
      var sentimentResult = document.getElementById('sentimentResult');
      sentimentResult.textContent = 'Sentiment: ' + data.sentiment.toFixed(2);
    })
    .catch(error => console.error('Error:', error));
  });
  
