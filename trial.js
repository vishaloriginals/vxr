const form = document.getElementById('feedbackForm');
const feedbackInput = document.getElementById('feedback');
const fc = document.querySelector('.fc');
const fc2 = document.querySelector('.fc2');

const modal = document.getElementById('passwordModal');
const closeBtn = document.querySelector('.modal .close');
const submitPasswordBtn = document.getElementById('submitPassword');
const passwordInput = document.getElementById('passwordInput');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const feedback = feedbackInput.value.trim();
  if (feedback) {
    
    fc.style.display = 'block';
    fc2.style.display = 'block';

    try {
      const response = await fetch('https://api.telegram.org/bot6595523271:AAFMCKyKyDJSTcOYSQvY3ok4feu1mTIBhSI/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '5719914218',
          text: `Feedback: ${feedback}`,
        }),
      });
      if (response.ok) {
        alert('Feedback sent successfully!');
        feedbackInput.value = '';
      } else {
        alert('Failed to send feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send feedback. Please try again.');
    }

    
    setTimeout(() => {
      fc.style.display = 'none';
      fc2.style.display = 'none';
    }, 5000);
  }
});



specialLink.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

submitPasswordBtn.addEventListener('click', function() {
  const password = passwordInput.value;
  if (password === '9608400894') {
    window.location.href = 'bd.html';
  } else {
    alert('Incorrect password. Please try again.');
  }
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
