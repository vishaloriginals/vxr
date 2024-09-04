const startScrollY = 0; // Start of the effect in pixels
const endScrollY = 600;   // End of the effect in pixels
const minHeroWidth = 80;    // Minimum width of the hero in vw
const maxHeroWidth = 100;   // Maximum width of the hero in vw
const minDividerWidth = 80; // Minimum width of the divider in vw
const maxDividerWidth = 100; // Maximum width of the divider in vw

const maxRotationAngle1 = -30; // Maximum rotation angle for drawing1 (left rotation)
const maxRotationAngle2 = 30;  // Maximum rotation angle for drawing2 (right rotation)
const minTopMargin1 = 230;    // Minimum top margin in px for drawing1
const maxTopMargin1 = 350;    // Maximum top margin in px for drawing1
const minTopMargin2 = 260;    // Minimum top margin in px for drawing2
const maxTopMargin2 = 400;    // Maximum top margin in px for drawing2
const maxLeftMargin = -200;     // Maximum left margin in px for drawing1
const maxRightMargin = -200;    // Maximum right margin in px for drawing2

const maxDtextLeftMargin = 10; // Maximum left margin for dtext-container in vw

const hero = document.querySelector('.hero');
const divider1 = document.querySelector('.divider1');
const drawing1 = document.querySelector('.drawing1');
const drawing2 = document.querySelector('.drawing2');
const dtextContainer = document.querySelector('.dtext-container');

const updateAnimation = () => {
    const scrollPosition = window.scrollY;

    // Check if scroll position is within the defined range
    if (scrollPosition >= startScrollY && scrollPosition <= endScrollY) {
        const percentage = (scrollPosition - startScrollY) / (endScrollY - startScrollY);

        // Calculate the hero width dynamically based on the defined range
        const heroWidthValue = minHeroWidth + percentage * (maxHeroWidth - minHeroWidth);
        hero.style.width = `${heroWidthValue}vw`;

        // Calculate the divider width dynamically based on the defined range
        const dividerWidthValue = minDividerWidth + percentage * (maxDividerWidth - minDividerWidth);
        divider1.style.width = `${dividerWidthValue}vw`;

        // Calculate the rotation angles dynamically based on the defined range
        const rotationAngle1 = percentage * maxRotationAngle1;
        const rotationAngle2 = percentage * maxRotationAngle2;

        drawing1.style.transform = `rotateY(${rotationAngle1}deg)`; // Rotate drawing1 on Y-axis
        drawing2.style.transform = `rotateY(${rotationAngle2}deg)`; // Rotate drawing2 on Y-axis

        // Calculate the top margin dynamically for each drawing based on the defined range
        const marginTopValue1 = maxTopMargin1 - percentage * (maxTopMargin1 - minTopMargin1);
        const marginTopValue2 = maxTopMargin2 - percentage * (maxTopMargin2 - minTopMargin2);

        drawing1.style.marginTop = `${marginTopValue1}px`;
        drawing2.style.marginTop = `${marginTopValue2}px`;

        // Calculate the left margin for drawing1 and right margin for drawing2 dynamically
        const leftMarginValue = percentage * maxLeftMargin;
        const rightMarginValue = percentage * maxRightMargin;

        drawing1.style.marginLeft = `${leftMarginValue}px`;
        drawing2.style.marginRight = `${rightMarginValue}px`;

        // Calculate the left margin for dtext-container dynamically
        const dtextLeftMarginValue = 10 + percentage * maxDtextLeftMargin;
        dtextContainer.style.marginLeft = `${dtextLeftMarginValue}vw`;

    } else if (scrollPosition > endScrollY) {
        // Set hero width, divider height, and width to max if scroll is beyond end position
        hero.style.width = `${maxHeroWidth}vw`;
        divider1.style.width = `${maxDividerWidth}vw`;
        drawing1.style.transform = `rotateY(${maxRotationAngle1}deg)`;
        drawing2.style.transform = `rotateY(${maxRotationAngle2}deg)`;
        drawing1.style.marginTop = `${minTopMargin1}px`;
        drawing2.style.marginTop = `${minTopMargin2}px`;
        drawing1.style.marginLeft = `${maxLeftMargin}px`;
        drawing2.style.marginRight = `${maxRightMargin}px`;

        // Set dtext-container left margin to maximum
        dtextContainer.style.marginLeft = `${10 + maxDtextLeftMargin}vw`;

    } else {
        // Set hero width, divider height, and width to initial if scroll is before start position
        hero.style.width = `${minHeroWidth}vw`;
        divider1.style.width = `${minDividerWidth}vw`; // Set to initial width
        drawing1.style.transform = 'rotateY(0deg)'; // Reset rotation for drawing1
        drawing2.style.transform = 'rotateY(0deg)'; // Reset rotation for drawing2
        drawing1.style.marginTop = `${maxTopMargin1}px`; // Reset margin for drawing1
        drawing2.style.marginTop = `${maxTopMargin2}px`; // Reset margin for drawing2
        drawing1.style.marginLeft = '0px'; // Reset left margin for drawing1
        drawing2.style.marginRight = '0px'; // Reset right margin for drawing2

        // Reset dtext-container left margin to initial value
        dtextContainer.style.marginLeft = '10vw';
    }
};

let isTicking = false;

document.addEventListener('scroll', function() {
    if (!isTicking) {
        window.requestAnimationFrame(function() {
            updateAnimation();
            isTicking = false;
        });
        isTicking = true;
    }
});

// Repeat similar changes for the other animation sections for .ps-art, .art-text, .code-container, .pc, .lr, and .lr-text



const startArtPercentage = 28; // Start of the effect for .ps-art and .art-text
const endArtPercentage = 40;   // End of the effect for .ps-art and .art-text
const maxPsArtMove = -200;     // Maximum left movement for .ps-art in px
const maxArtTextMove = 200;    // Maximum right movement for .art-text in px

const startCodePercentage = 42; // Start of the effect for .code-container and .pc
const endCodePercentage = 60;   // End of the effect for .code-container and .pc
const maxCodeContainerMove = -200; // Maximum left movement for .code-container in px
const maxPcMove = 200;          // Maximum right movement for .pc in px

const startLrPercentage = 58; // Start of the effect for .lr and .lr-text
const endLrPercentage = 70;   // End of the effect for .lr and .lr-text
const maxLrMove = -200;       // Maximum left movement for .lr in px
const maxLrTextMove = 200;    // Maximum right movement for .lr-text in px

document.addEventListener('scroll', function() {
    const psArt = document.querySelector('.ps-art');
    const artText = document.querySelector('.art-text');
    const codeContainer = document.querySelector('.pc-text');
    const pc = document.querySelector('.pc');
    const lr = document.querySelector('.lr');
    const lrText = document.querySelector('.lr-text');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Calculate the scroll percentage
    const scrollPercentage = (scrollPosition / (documentHeight - viewportHeight)) * 100;

    // Check if scroll percentage is within the defined range for ps-art and art-text
    if (scrollPercentage >= startArtPercentage && scrollPercentage <= endArtPercentage) {
        // Calculate the movement for .ps-art dynamically based on the defined range
        const psArtMoveValue = ((scrollPercentage - startArtPercentage) / (endArtPercentage - startArtPercentage)) * maxPsArtMove;
        psArt.style.transform = `translateX(${psArtMoveValue}px)`;

        // Calculate the movement for .art-text dynamically based on the defined range
        const artTextMoveValue = ((scrollPercentage - startArtPercentage) / (endArtPercentage - startArtPercentage)) * maxArtTextMove;
        artText.style.transform = `translateX(${artTextMoveValue}px)`;

        // Calculate the opacity for .art-text dynamically based on the defined range
        const opacityValue = (scrollPercentage - startArtPercentage) / (endArtPercentage - startArtPercentage);
        artText.style.opacity = opacityValue;

    } else if (scrollPercentage > endArtPercentage) {
        // Set ps-art and art-text positions and opacity to maximum if scroll is beyond end percentage
        psArt.style.transform = `translateX(${maxPsArtMove}px)`;
        artText.style.transform = `translateX(${maxArtTextMove}px)`;
        artText.style.opacity = 1; // Fully visible

    } else {
        // Reset ps-art and art-text positions and opacity if scroll is before start percentage
        psArt.style.transform = `translateX(0px)`;
        artText.style.transform = `translateX(0px)`;
        artText.style.opacity = 0; // Fully transparent
    }

    // Check if scroll percentage is within the defined range for code-container and pc
    if (scrollPercentage >= startCodePercentage && scrollPercentage <= endCodePercentage) {
        // Calculate the movement for .code-container dynamically based on the defined range
        const codeContainerMoveValue = ((scrollPercentage - startCodePercentage) / (endCodePercentage - startCodePercentage)) * maxCodeContainerMove;
        codeContainer.style.transform = `translateX(${codeContainerMoveValue}px)`;

        // Calculate the movement for .pc dynamically based on the defined range
        const pcMoveValue = ((scrollPercentage - startCodePercentage) / (endCodePercentage - startCodePercentage)) * maxPcMove;
        pc.style.transform = `translateX(${pcMoveValue}px)`;

        // Calculate the opacity for .pc dynamically based on the defined range
        const pcOpacityValue = (scrollPercentage - startCodePercentage) / (endCodePercentage - startCodePercentage);
        codeContainer.style.opacity = pcOpacityValue;

    } else if (scrollPercentage > endCodePercentage) {
        // Set code-container and pc positions and opacity to maximum if scroll is beyond end percentage
        codeContainer.style.transform = `translateX(${maxCodeContainerMove}px)`;
        pc.style.transform = `translateX(${maxPcMove}px)`;
        codeContainer.style.opacity = 1; // Fully visible

    } else {
        // Reset code-container and pc positions and opacity if scroll is before start percentage
        codeContainer.style.transform = `translateX(0px)`;
        pc.style.transform = `translateX(0px)`;
        codeContainer.style.opacity = 0; // Fully transparent
    }

    // Check if scroll percentage is within the defined range for lr and lr-text
    if (scrollPercentage >= startLrPercentage && scrollPercentage <= endLrPercentage) {
        // Calculate the movement for .lr dynamically based on the defined range
        const lrMoveValue = ((scrollPercentage - startLrPercentage) / (endLrPercentage - startLrPercentage)) * maxLrMove;
        lr.style.transform = `translateX(${lrMoveValue}px)`;

        // Calculate the movement for .lr-text dynamically based on the defined range
        const lrTextMoveValue = ((scrollPercentage - startLrPercentage) / (endLrPercentage - startLrPercentage)) * maxLrTextMove;
        lrText.style.transform = `translateX(${lrTextMoveValue}px)`;

        // Calculate the opacity for .lr-text dynamically based on the defined range
        const lrTextOpacityValue = (scrollPercentage - startLrPercentage) / (endLrPercentage - startLrPercentage);
        lrText.style.opacity = lrTextOpacityValue;

    } else if (scrollPercentage > endLrPercentage) {
        // Set lr and lr-text positions and opacity to maximum if scroll is beyond end percentage
        lr.style.transform = `translateX(${maxLrMove}px)`;
        lrText.style.transform = `translateX(${maxLrTextMove}px)`;
        lrText.style.opacity = 1; // Fully visible

    } else {
        // Reset lr and lr-text positions and opacity if scroll is before start percentage
        lr.style.transform = `translateX(0px)`;
        lrText.style.transform = `translateX(0px)`;
        lrText.style.opacity = 0; // Fully transparent
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Buttons
    const aboutButton = document.getElementById('aboutButton');
    const websiteButton = document.getElementById('websiteButton');
    const whatsNewButton = document.getElementById('whatsNewButton');
    const creatorButton = document.getElementById('creatorButton');

    // Overlays
    const aboutOverlay = document.getElementById('aboutOverlay');
    const websiteOverlay = document.getElementById('websiteOverlay');
    const whatsNewOverlay = document.getElementById('whatsNewOverlay');
    const creatorOverlay = document.getElementById('creatorOverlay');

    // Close buttons (common class used)
    const closeButtons = document.querySelectorAll('.close-button');

    // Function to open overlay
    function openOverlay(overlay) {
        overlay.style.display = 'flex';
        overlay.classList.add('open'); // Add open class to trigger animation
        document.body.style.overflow = 'hidden';
    }

    // Function to close overlay
    function closeOverlay(overlay) {
        overlay.classList.remove('open'); // Remove open class to trigger close animation
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300); // Delay to match the animation duration
    }

    // Event listeners for opening overlays
    aboutButton.addEventListener('click', () => openOverlay(aboutOverlay));
    websiteButton.addEventListener('click', () => openOverlay(websiteOverlay));
    whatsNewButton.addEventListener('click', () => openOverlay(whatsNewOverlay));
    creatorButton.addEventListener('click', () => openOverlay(creatorOverlay));

    // Event listeners for closing overlays
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            closeOverlay(event.target.closest('.overlay'));
        });
    });

    // Optional: Close overlays when clicking outside the overlay content
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeOverlay(overlay);
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Existing button
    const lrButton = document.getElementById('lrButton');

    // New overlay
    const lrPresetsOverlay = document.getElementById('lrPresetsOverlay');
    const presetImage = document.getElementById('presetImage');
    const downloadPreset = document.getElementById('downloadPreset');
    const prevPreset = document.getElementById('prevPreset');
    const nextPreset = document.getElementById('nextPreset');
    
    const presets = [
        'preset2.dng',
        'preset1.dng'
    ];
    let currentPresetIndex = 0;

    function updatePreset() {
        presetImage.src = presets[currentPresetIndex];
    }

    lrButton.addEventListener('click', () => {
        lrPresetsOverlay.style.display = 'flex';
        lrPresetsOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        updatePreset();
    });

    // Close button functionality
    const closeButton = lrPresetsOverlay.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        lrPresetsOverlay.classList.remove('open');
        setTimeout(() => {
            lrPresetsOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    });

    // Navigation functionality
    prevPreset.addEventListener('click', () => {
        currentPresetIndex = (currentPresetIndex - 1 + presets.length) % presets.length;
        updatePreset();
    });

    nextPreset.addEventListener('click', () => {
        currentPresetIndex = (currentPresetIndex + 1) % presets.length;
        updatePreset();
    });

    // Download functionality
    downloadPreset.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = presets[currentPresetIndex];
        link.download = presets[currentPresetIndex];
        link.click();
    });
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
            text: `Feedback: ${feedback}`,
          }),
        });

        if (response.ok) {
          feedbackInput.value = ''; //clear input after sending
          alert('Feedback sent successfully!');
        } else {
          alert('Failed to send feedback. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send feedback. Please try again.');
      }
    } else {
      alert('Please enter your feedback before submitting.');
    }
  });
});

// for service-worker (manifest.json)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch((error) => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}
