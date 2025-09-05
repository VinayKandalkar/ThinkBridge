// DOM manipulation sample script
document.addEventListener("DOMContentLoaded", () => {
  // Toggle Status
  const statusEl = document.querySelector("#status");
  const toggleBtn = document.querySelector("#toggle");
  if (toggleBtn && statusEl) {
    toggleBtn.addEventListener("click", () => {
      statusEl.classList.toggle("active");
      statusEl.textContent = statusEl.classList.contains("active") ? "Active" : "Inactive";
    });
  }

  // Counter with Increment and Decrement
  const counterEl = document.querySelector("#counter");
  const incrementBtn = document.querySelector("#increment");
  const decrementBtn = document.querySelector("#decrement");
  let count = 0;

  if (incrementBtn && counterEl) {
    incrementBtn.addEventListener("click", () => {
      count += 1;
      counterEl.textContent = String(count);
    });
  }
  if (decrementBtn && counterEl) {
    decrementBtn.addEventListener("click", () => {
      count -= 1;
      counterEl.textContent = String(count);
    });
  }

  // Live Greeting
  const nameInput = document.querySelector("#nameInput");
  const greetEl = document.querySelector("#greet");
  if (nameInput && greetEl) {
    nameInput.addEventListener("input", (e) => {
      const value = e.target.value;
      greetEl.textContent = value ? `Hello, ${value}!` : "";
    });
  }

  // Click Me Button interactions
  const button = document.getElementById('myBtn');
  const message = document.getElementById('myPara');
  if (button && message) {
    button.addEventListener('click', function() {
      message.textContent = 'You clicked the button!';
      message.classList.add('active');
    });

    button.addEventListener('mouseover', function() {
      message.textContent = 'Mouse is over the button!';
      message.classList.toggle('highlight');
    });

    button.addEventListener('mouseout', function() {
      message.textContent = 'Mouse left the button!';
      message.classList.remove('highlight');
    });
  }
});