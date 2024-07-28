const form = document.getElementById('feedbackForm');
const feedbackInput = document.getElementById('feedback');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const feedback = feedbackInput.value.trim();
  if (feedback) {
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
  }
});
