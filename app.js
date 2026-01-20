  // Main Application
  function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
      total += item.price;
    }
    return total;
  }

  function displayWelcome() {
    console.log("Welcome to the Store!");
  }

