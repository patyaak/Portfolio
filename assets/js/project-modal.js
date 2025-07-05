const projectsData = {
  "Heist Room": {
    description: "Heist Room is an exciting casino game platform packed with multiple thrilling casino games, offering players a fun and engaging experience. I was proud to be deeply involved in this office project, where I designed and developed various games from scratch. The entire platform was built using Unity, and I also contributed to the backend development with Node.js, ensuring smooth gameplay and robust performance. Working on Heist Room was an amazing journey that allowed me to showcase my creativity and technical skills in both game development and backend engineering.",
    images: ["assets/images/HeistRoom.png"]
  },
  "Vroom Vroom": {
    description: "Vroom Vroom is a 3D car racing game with realistic physics, designed as my semester project. In this game, players can choose from different cars and race against 4–5 opponent cars. It features exciting tracks with checkpoints, allowing players to restart if they crash. The game also includes a minimap to show the track and a speedometer to display your speed. Vroom Vroom is both challenging and fun, giving players a thrilling and immersive racing experience.",
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
    description: "Casino Ignite is an exciting casino game platform developed using Cocos, offering a variety of fun and engaging casino games. This was an office project I joined later, where I contributed by creating the dashboard and leaderboard systems to enhance player engagement. I also developed some of the games featured on the platform and created the login system to ensure a smooth and secure user experience. Being part of Casino Ignite allowed me to expand my skills and work on different aspects of game development in a collaborative and dynamic environment.",
    images: ["assets/images/cidashboard.jpg", "assets/images/ci.jpg"],
    videos: ["assets/videos/casinoIgnite.mp4"]
  },
  "Rolling Dice": {
    description: "Rolling Dice is an exciting casino game platform developed using Cocos, offering a variety of fun and engaging casino games. This was also an office project that I joined later, where I contributed by creating the dashboard system to provide a smooth and interactive experience for players. I also developed several of the games featured on the platform, helping to deliver an enjoyable and seamless gameplay experience. Being part of Rolling Dice allowed me to further enhance my skills and work on different aspects of game development in a collaborative and innovative environment.",
    images: ["assets/images/rd-dash.jpg", "assets/images/rd.jpg"]
  },
  "Delivery Driver": {
    description: "Delivery Driver is a casual 2D game about delivering packages on time.",
    images: ["assets/images/delivery.png", "assets/images/delivery_2.png"]
  },
  "Quiz": {
    description: "Quiz is an educational 2D game designed to test your knowledge.",
    images: ["assets/images/cat.png"]
  },
  "Lazer Defender": {
    description: "Lazer Defender is a classic 2D shooter game with retro graphics.",
    images: ["assets/images/LD1.png"]
  },
  "2048": {
    description: "2048 is a simple yet addictive number puzzle game.",
    images: ["assets/images/2048.png"]
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

const modal = document.getElementById('project-modal');
const modalTitle = modal.querySelector('#modal-title');
const modalDesc = modal.querySelector('#modal-description');
const modalImagesGrid = modal.querySelector('.modal-images-grid');
const modalCloseBtn = modal.querySelector('.modal-close');

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
        playBtn.innerHTML = '&#9658;'; // triangle symbol
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
          event.stopPropagation(); // prevent bubbling
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
        imgEl.style.width = "100%";
        imgEl.style.marginTop = "10px";
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
