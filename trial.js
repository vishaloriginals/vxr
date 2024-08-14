const form = document.getElementById('feedbackForm');
const feedbackInput = document.getElementById('feedback');
const fc = document.querySelector('.fc');
const fc2 = document.querySelector('.fc2');

const modal = document.getElementById('passwordModal');
const closeBtn = document.querySelector('.modal .close');
const submitPasswordBtn = document.getElementById('submitPassword');
const passwordInput = document.getElementById('passwordInput');
const specialLink = document.getElementById('specialLink');
const modalTitle = document.getElementById('modalTitle');
const errorMessage = document.getElementById('errorMessage');

const feedbackModal = document.getElementById('feedbackModal');
const closeFeedbackModalBtn = document.getElementById('closeFeedbackModal');
const closeFeedbackButton = document.getElementById('closeFeedbackButton');

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
        feedbackInput.value = '';
        feedbackModal.style.display = 'block';
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
    modalTitle.textContent = 'Incorrect password';
    errorMessage.textContent = '';
    modalTitle.style.color = 'red';
    modalTitle.style.fontWeight = '300';
    setTimeout(() => {
      modalTitle.textContent = 'Password Required';
      errorMessage.textContent = '';
      modalTitle.style.color = 'white';
      errorMessage.style.color = 'white';
    }, 3000);
  }
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const dcont = document.querySelector('.dcont');
  const dmImage = document.getElementById('dM');
  const banner = document.querySelector('.banner');
  const border = document.querySelector('.dcont');
  const nexp = document.querySelector('.nexp');
  const linkImage = document.getElementById('linkedin');
  const tgImage = document.getElementById('telegram');
  const igImage = document.getElementById('instagram');
  const imgborder1 = document.querySelector('.banner .slider .item #qwerty1');
  const imgborder2 = document.querySelector('.banner .slider .item #qwerty2');
  const imgborder3 = document.querySelector('.banner .slider .item #qwerty3');
  const imgborder4 = document.querySelector('.banner .slider .item #qwerty4');
  const imgborder5 = document.querySelector('.banner .slider .item #qwerty5');
  const imgborder6 = document.querySelector('.banner .slider .item #qwerty6');
  const imgborder7 = document.querySelector('.banner .slider .item #qwerty7');
  const imgborder8 = document.querySelector('.banner .slider .item #qwerty8');
  const imgborder9 = document.querySelector('.banner .slider .item #qwerty9');
  const imgborder10 = document.querySelector('.banner .slider .item #qwerty10');
  const divider = document.querySelector('.divider');
  const special = document.querySelector('.special');
  
  if (!dcont || !dmImage || !banner || !tgImage) {
    console.error('One or more elements are missing from the document.');
    return;
  }

  let isClicked = false;

  dcont.addEventListener('click', () => {
    if (isClicked) {
      // Revert changes
      dmImage.classList.remove('moved');
      dmImage.src = 'dm.png';
      document.body.style.backgroundColor = '#c8c8c8';
      document.querySelector('.in1').style.color = '#252838';
      document.querySelector('.in2').style.color = '#252838';
      document.querySelector('.in3').style.color = '#252838';
      document.querySelector('.cssonly').style.color = '#252838';
      document.querySelector('.c2').style.color = '#252838';
      linkImage.src = 'emb.png';
      tgImage.src = 'tgb.png';
      igImage.src = 'igb.png';
      banner.style.background = 'linear-gradient(to bottom, #c8c8c8, rgba(200, 200, 200, 0)), url("bg.png") no-repeat center center';
      border.style.borderColor = '#252838';
      imgborder1.classList.remove('after');
      imgborder2.classList.remove('after');
      imgborder3.classList.remove('after');
      imgborder4.classList.remove('after');
      imgborder5.classList.remove('after');
      imgborder6.classList.remove('after');
      imgborder7.classList.remove('after');
      imgborder8.classList.remove('after');
      imgborder9.classList.remove('after');
      imgborder10.classList.remove('after');
      divider.style.backgroundColor = '#252838';
      nexp.style.backgroundColor = '#c8c8c8';
      document.querySelector('.about').style.color = '#252838';
      special.style.color = '#252838';
      special.style.borderColor = '#252838';
      document.querySelector('.formcont').style.backgroundColor = '#252838';
      document.querySelector('.feedback').style.border = '3px solid #252838';
      document.querySelector('.blocker').style.backgroundColor = '#c8c8c8';
      document.getElementById('qwerty1').style.borderColor = "#222222";
      document.querySelector('#threeLinesIcon .sp1').style.backgroundColor = '#252838';
      document.querySelector('#threeLinesIcon .sp2').style.backgroundColor = '#252838';
      document.querySelector('#threeLinesIcon .sp3').style.backgroundColor = '#252838';
    } else {
      // Apply changes
      dmImage.classList.add('moved');
      dmImage.src = 'dm2.png';
      document.body.style.backgroundColor = '#1d1f2a';
      document.querySelector('.in1').style.color = '#c8c8c8';
      document.querySelector('.in2').style.color = '#c8c8c8';
      document.querySelector('.in3').style.color = '#c8c8c8';
      document.querySelector('.cssonly').style.color = '#c8c8c8';
      document.querySelector('.c2').style.color = '#c8c8c8';
      linkImage.src = 'emw.png';
      tgImage.src = 'tgw.png';
      igImage.src = 'igw.png';
      banner.style.background = 'linear-gradient(to bottom, #1d1f2a, rgba(200, 200, 200, 0)), url("bg.png") no-repeat center center';
      border.style.borderColor = '#c8c8c8';
      document.getElementById('qwerty1').style.borderColor = "#c8c8c8";
      imgborder1.classList.add('after');
      imgborder2.classList.add('after');
      imgborder3.classList.add('after');
      imgborder4.classList.add('after');
      imgborder5.classList.add('after');
      imgborder6.classList.add('after');
      imgborder7.classList.add('after');
      imgborder8.classList.add('after');
      imgborder9.classList.add('after');
      imgborder10.classList.add('after');
      divider.style.backgroundColor = '#c8c8c8';
      nexp.style.backgroundColor = '#1d1f2a';
      document.querySelector('.about').style.color = '#c8c8c8';
      special.style.color = '#c8c8c8';
      special.style.borderColor = '#c8c8c8';
      document.querySelector('.formcont').style.backgroundColor = '#252838';
      document.querySelector('.feedback').style.border = '1px solid #c8c8c8';
      document.querySelector('.blocker').style.backgroundColor = '#1d1f2a';
      document.querySelector('#threeLinesIcon .sp1').style.backgroundColor = '#c8c8c8';
      document.querySelector('#threeLinesIcon .sp2').style.backgroundColor = '#c8c8c8';
      document.querySelector('#threeLinesIcon .sp3').style.backgroundColor = '#c8c8c8';
    }

    isClicked = !isClicked;
  });
});

// Close feedback modal
closeFeedbackModalBtn.addEventListener('click', () => {
  feedbackModal.style.display = 'none';
});

closeFeedbackButton.addEventListener('click', () => {
  feedbackModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === feedbackModal) {
    feedbackModal.style.display = 'none';
  }
});

const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) return "Mobile";
    if (/tablet/i.test(ua)) return "Tablet";
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return "iOS Device";
    if (/android/i.test(ua)) return "Android Device";
    return "Desktop";
};

document.addEventListener('DOMContentLoaded', async () => {
  const userInfo = {
    userAgent: navigator.userAgent,
    deviceType: getDeviceType(),
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

  try {
    const response = await fetch('https://api.telegram.org/bot7291640443:AAFoUHNAP0ooQ2d0DEE5-gptz4nb9NktrJo/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: '5719914218',
        text: `New visitor information:\n
        User Agent: ${userInfo.userAgent}\n
        Device Type: ${userInfo.deviceType}\n
        Screen Width: ${userInfo.screenWidth}\n
        Screen Height: ${userInfo.screenHeight}\n
        Language: ${userInfo.language}\n
        Platform: ${userInfo.platform}\n
        Cookies Enabled: ${userInfo.cookiesEnabled}\n
        Referrer: ${userInfo.referrer}\n
        Current Page: ${userInfo.location}\n
        Time Zone: ${userInfo.timeZone}\n
        Date & Time: ${userInfo.date}`,
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
  const threeLinesIcon = document.getElementById('threeLinesIcon');
  const sidebar = document.getElementById('sidebar');
  const aboutWebsiteBtn = document.getElementById('aboutWebsiteBtn');
  const aboutCreatorBtn = document.getElementById('aboutCreatorBtn');
  const websiteInfo = document.getElementById('websiteInfo');
  const creatorInfo = document.getElementById('creatorInfo');
  const closeWebsiteInfo = document.getElementById('closeWebsiteInfo');
  const closeCreatorInfo = document.getElementById('closeCreatorInfo');

  threeLinesIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the window listener
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'block' : 'none';
  });

  aboutWebsiteBtn.addEventListener('click', () => {
    websiteInfo.style.display = 'block';
    creatorInfo.style.display = 'none';
    sidebar.style.display = 'none'; // Hide sidebar when "About Website" is clicked
  });

  aboutCreatorBtn.addEventListener('click', () => {
    creatorInfo.style.display = 'block';
    websiteInfo.style.display = 'none';
    sidebar.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (sidebar.style.display === 'block' && !sidebar.contains(event.target) && event.target !== threeLinesIcon) {
      sidebar.style.display = 'none';
    }
    
  if (creatorInfo.style.display === 'block' && !creatorInfo.contains(event.target) && event.target !== aboutCreatorBtn) {
      creatorInfo.style.display = 'none';
    }
    
  if (websiteInfo.style.display === 'block' && !websiteInfo.contains(event.target) && event.target !== aboutWebsiteBtn) {
      websiteInfo.style.display = 'none';
    }
  });
});

// Function to calculate age
const getAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

// Date of birth
const birthDate = new Date(2005, 2, 9); // 9th March 2005

// Display the age
document.getElementById('age').textContent = getAge(birthDate);
