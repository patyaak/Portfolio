const projectsData = {
  "Heist Room": {
    description: "Heist Room is a feature-rich casino platform designed to deliver high-energy entertainment. As a key developer on this project, I spearheaded the creation of multiple mini-games from the ground up using Unity. My role extended to integrating robust backend services with Node.js, ensuring secure transaction handling and smooth real-time performance. This project highlights my ability to bridge the gap between engaging frontend mechanics and reliable backend architecture.",
    images: ["assets/images/HeistRoom.png"]
  },
  "Vroom Vroom": {
    description: "Developed as my Bachelor's final year project, Vroom Vroom is a 3D racing game that focuses on realistic vehicle physics and competitive AI behavior. Players select from a variety of cars to compete in fast-paced races across challenging tracks. I implemented custom vehicle controllers, checkpoint-based progression systems, and dynamic AI opponents to create a compelling racing experience, complemented by a polished in-game UI.",
    images: [
      "assets/images/v2.png",
      "assets/images/v3.png",
      "assets/images/v4.png",
      "assets/images/v5.png",
      "assets/images/v6.png"
    ],
    videos: ["assets/videos/vroomclip.mp4"]
  },
  "CasinoIgnite": {
    description: "Casino Ignite is a comprehensive gaming platform built with Cocos Creator. I joined the team to enhance the user experience by developing a responsive dashboard and a real-time leaderboard system. In addition to UI/UX improvements, I contributed to the development of several core casino games and implemented secure login authentication, ensuring a seamless and engaging player journey.",
    images: ["assets/images/cidashboard.jpg", "assets/images/ci.jpg"],
    videos: ["assets/videos/casinoIgnite.mp4"]
  },
  "Rolling Dice": {
    description: "Rolling Dice utilizes the Cocos engine to offer a suite of interactive casino games. My contributions focused on engineering a smooth dashboard interface and optimizing game performance. I played a significant role in coding the logic for multiple games within the platform, ensuring valid game states, reliable data handling, and an overall polished user experience.",
    images: ["assets/images/rd.jpg", "assets/images/rd-dash.jpg"],
    videos: ["assets/videos/rollingdicevideo.mp4"]
  },
  "Delivery Driver": {
    description: "Delivery Driver is a physics-based 2D game that marked my initial deep dive into Unity. The project focuses on mastering rigid body mechanics and collider interactions. Players navigate a delivery vehicle through a town, managing speed and momentum to pick up and deliver packages. This project solidified my understanding of C# scripting for movement logic, collision detection, and state management.",
    images: ["assets/images/delivery.png"],
    videos: ["assets/videos/delivery.mp4"]
  },
  "Quiz Master": {
    description: "Quiz Master is an interactive 2D educational game that challenges players across various knowledge categories. I implemented a robust question management system that dynamically retrieves content, paired with a timer-based scoring mechanic to add urgency. The project features a clean UI for feedback, high-score tracking, and efficient data handling to ensure a smooth flow between questions.",
    images: ["assets/images/q1.png","assets/images/cat.png","assets/images/q2.png"],
    videos: ["assets/videos/quiz.mp4"]
  },
  "Lazer Defender": {
    description: "Lazer Defender is a retro-inspired vertical space shooter where players battle waves of incoming enemies. I designed the enemy pathfinding system using waypoints to create diverse attack patterns. The game features a health point system for both player and enemies, a scoring mechanism, and immersive audio effects, delivering a classic fast-paced arcade experience.",
    images: ["assets/images/LD2.jpg","assets/images/LD3.jpg","assets/images/LD4.jpg","assets/images/LD5.jpg"],
    videos: ["assets/videos/Ld-video.mp4"]
  },
  "2048": {
    description: "An implementation of the classic number puzzle game on a 4x4 grid. The core challenge involved programming the complex tile-merging logic and grid management systems. I focused on efficient state management to track valid moves, score calculations, and win/loss conditions, resulting in a smooth and addictive puzzle experience.",
    images: ["assets/images/2048-2.jpg", "assets/images/2048-3.jpg"],
     videos: ["assets/videos/2048-v.mp4"]
  }
};

// Create modal HTML once
const modalHTML = `
  <div id="project-modal" class="modal-overlay" aria-hidden="true" style="display:none;">
    <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close" aria-label="Close Modal">&times;</button>
      <h2 id="modal-title"></h2>
      <p id="modal-description"></p>
      <div class="modal-images-grid"></div>
    </div>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', modalHTML);

// Create full image preview overlay (hidden initially)
const fullImagePreviewHTML = `
  <div id="full-image-preview" style="
    display:none;
    position:fixed;
    top:0; left:0; right:0; bottom:0;
    background: rgba(0,0,0,0.85);
    justify-content:center;
    align-items:center;
    z-index: 10000;
    cursor: pointer;
    overflow: auto;  /* scroll if image is bigger */
  ">
    <img id="full-image" src="" alt="Full Image" style="
      max-width: 90vw;
      max-height: 90vh;
      width: auto;
      height: auto;
      box-shadow: 0 0 15px #fff;
      display: block;
      margin: auto;
    "/>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', fullImagePreviewHTML);

const modal = document.getElementById('project-modal');
const modalTitle = modal.querySelector('#modal-title');
const modalDesc = modal.querySelector('#modal-description');
const modalImagesGrid = modal.querySelector('.modal-images-grid');
const modalCloseBtn = modal.querySelector('.modal-close');

const fullImagePreview = document.getElementById('full-image-preview');
const fullImage = document.getElementById('full-image');

// Show loading state while images load
document.querySelector('.isotope-wrapper').classList.add('loading');

document.querySelectorAll('.project-info-icon').forEach(icon => {
  icon.addEventListener('click', e => {
    e.stopPropagation();

    const projectItem = icon.closest('.isotope-item');
    if (!projectItem) return;

    const img = projectItem.querySelector('img');
    if (!img) return;

    const projectName = img.alt.trim();
    const project = projectsData[projectName];
    if (!project) return;

    // Populate modal content
    modalTitle.textContent = projectName;
    modalDesc.textContent = project.description;

    modalImagesGrid.innerHTML = '';

    // Add videos first
    if (project.videos) {
      project.videos.forEach(src => {
        const videoWrapper = document.createElement('div');
        videoWrapper.style.position = 'relative';
        videoWrapper.style.display = 'block';
        videoWrapper.style.width = '100%';
        videoWrapper.style.marginTop = '10px';

        const videoEl = document.createElement('video');
        videoEl.src = src;
        videoEl.style.width = '100%';
        videoEl.style.display = 'block';
        videoEl.preload = 'metadata';

        // Overlay play button
        const playBtn = document.createElement('div');
        playBtn.innerHTML = '&#9658;';
        playBtn.style.position = 'absolute';
        playBtn.style.top = '50%';
        playBtn.style.left = '50%';
        playBtn.style.transform = 'translate(-50%, -50%)';
        playBtn.style.fontSize = '64px';
        playBtn.style.color = 'silver';
        playBtn.style.opacity = '0.9';
        playBtn.style.cursor = 'pointer';
        playBtn.style.background = 'rgba(0, 0, 0, 0.5)';
        playBtn.style.borderRadius = '50%';
        playBtn.style.padding = '20px';

        videoWrapper.appendChild(videoEl);
        videoWrapper.appendChild(playBtn);
        modalImagesGrid.appendChild(videoWrapper);

        // Play when clicking the play button
        playBtn.addEventListener('click', (event) => {
          event.stopPropagation();
          if (videoEl.paused) {
            videoEl.play();
            videoEl.setAttribute('controls', true);
            playBtn.style.display = 'none';
          }
        });

        // Show play button when paused
        videoEl.addEventListener('pause', () => {
          playBtn.style.display = '';
        });

        // Hide play button when playing
        videoEl.addEventListener('play', () => {
          playBtn.style.display = 'none';
        });
      });
    }

    // Add images below videos
    if (project.images) {
      project.images.forEach(src => {
        const imgEl = document.createElement('img');
        imgEl.src = src;
        imgEl.alt = `${projectName} image`;
        imgEl.style.display = "block";
        imgEl.style.marginTop = "10px";
        imgEl.style.cursor = "pointer";

        if (projectName === "Lazer Defender" || projectName === "2048") {
          imgEl.style.width = "70%";
          imgEl.style.margin = "10px auto";
        }

        imgEl.addEventListener('click', () => {
          fullImage.src = src;
          fullImagePreview.style.display = 'flex';
        });

        modalImagesGrid.appendChild(imgEl);
      });
    }

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  });
});

// Close modal functions
const closeModal = () => {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) {
    closeModal();
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    closeModal();
  }
});

// Close full image preview when clicked anywhere on it
fullImagePreview.addEventListener('click', () => {
  fullImagePreview.style.display = 'none';
});

// Initialize Isotope after all images are loaded
document.addEventListener('DOMContentLoaded', function() {
  const isotopeWrapper = document.querySelector('.isotope-wrapper');
  const isotopeContainer = document.querySelector('.isotope-box');
  
  if (isotopeContainer) {
    imagesLoaded(isotopeContainer, function() {
      isotopeWrapper.classList.remove('loading');
      
      // Initialize Isotope
      const iso = new Isotope(isotopeContainer, {
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        stagger: 30,
        transitionDuration: '0.6s'
      });
      
      // Show all items after layout
      document.querySelectorAll('.isotope-item').forEach(item => {
        item.classList.add('visible');
      });
    });
  }
});