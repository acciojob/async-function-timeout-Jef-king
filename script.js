
// Function to create a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the form submission
async function handleSubmit() {
  // Get the values from the input fields
  const text = document.getElementById('text').value;
  const delayTime = parseInt(document.getElementById('delay').value, 10);

  // Wait for the specified delay
  await delay(delayTime);

  // Display the text in the output div
  document.getElementById('output').innerText = text;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', handleSubmit);
