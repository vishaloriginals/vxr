document.addEventListener('DOMContentLoaded', async () => {
  const userInfo = {
    userAgent: navigator.userAgent,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    language: navigator.language,
    platform: navigator.platform,
    cookiesEnabled: navigator.cookieEnabled,
    referrer: document.referrer,
    location: window.location.href,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    date: new Date().toString(),
  };

  let name = 'Unknown'; // Default name

  if (userInfo.userAgent === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/127.0.6533.64 Mobile Safari/537.36') {
    name = 'Vishal';
  }

  try {
    const response = await fetch('https://api.telegram.org/bot7291640443:AAFoUHNAP0ooQ2d0DEE5-gptz4nb9NktrJo/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: '5719914218',
        text: `Birthday page visitor:\n
        User Agent: ${userInfo.userAgent}\n
        Screen Width: ${userInfo.screenWidth}\n
        Screen Height: ${userInfo.screenHeight}\n
        Language: ${userInfo.language}\n
        Platform: ${userInfo.platform}\n
        Cookies Enabled: ${userInfo.cookiesEnabled}\n
        Referrer: ${userInfo.referrer}\n
        Current Page: ${userInfo.location}\n
        Time Zone: ${userInfo.timeZone}\n
        Date & Time: ${userInfo.date}\n
        Name: ${name}`,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send visitor info to Telegram.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});


document.addEventListener('DOMContentLoaded', () => {
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
            text: `Sindhu: ${feedback}`,
          }),
        });

        if (response.ok) {
          alert('Thanks for the reply !!!');
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
});
