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

  module.exports = { calculateTotal, displayWelcome };
  EOF

  git add app.js
  git commit -m "Add initial app.js"

  # Create config.js
  cat > config.js << 'EOF'
  // Configuration
  const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
  };

  module.exports = config;
