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
    images: ["assets/images/rd.jpg", "assets/images/rd-dash.jpg"],
    videos: ["assets/videos/rollingdicevideo.mp4"]
  },
  "Delivery Driver": {
    description: "Delivery Driver is a fun and simple 2D game that was my first project to start learning the Unity Engine. Through this project, I explored the Unity environment and understood key physics concepts like colliders and rigid bodies. I learned to work with 2D shapes such as capsules, squares, and circles, and implemented basic car movement mechanics including driving forwards and backwards, turning left and right, and reacting to speed boosts and slow-down zones. The game also features package pickup and delivery systems, along with color changes to indicate the car’s status. Building Delivery Driver helped me gain a solid foundation in Unity and game development basics in an engaging way.",
    images: ["assets/images/delivery.png"],
    videos: ["assets/videos/delivery.mp4"]
  },
  "Quiz Master": {
    description: "Quiz Master is an educational and fun 2D game designed to test players' knowledge across different categories. In this game, players are presented with questions from various topics and must choose the correct answer from four options within a limited time, adding a sense of challenge and excitement. The game includes key features like a system to store and retrieve questions, interactive answer buttons, a timer to create pressure, and a progress bar to show how many questions remain. It also has a scoring system to track performance and an option to restart the game after finishing.",
    images: ["assets/images/q1.png","assets/images/cat.png","assets/images/q2.png"],
    videos: ["assets/videos/quiz.mp4"]
  },
  "Lazer Defender": {
    description: "Lazer Defender is a classic 2D shooter game with retro graphics.Laser Defender is an action-packed shooting game inspired by classic space shooters, where the player must survive waves of enemies for as long as possible while scoring points by shooting them down. The game features a player spaceship that moves forward and backward using touch input and fires bullets to attack enemies. Players must skillfully dodge enemy bullets to avoid losing health, as both the player and different enemy ships have their own health systems. Enemy spaceships follow predefined paths using waypoints, creating challenging attack patterns. The game also includes a high score system to track the best performances and incorporates audio effects to enhance the gameplay experience.",
    images: ["assets/images/LD2.jpg","assets/images/LD3.jpg","assets/images/LD4.jpg","assets/images/LD5.jpg"],
    videos: ["assets/videos/Ld-video.mp4"]
  },
  "2048": {
    description: "2048 is a simple yet addictive number puzzle game.The game’s objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048. However, one can continue to play the game after reaching the goal, creating tiles with larger numbers. The game is played on a 4x4 grid, and the player can move tiles in four directions: up, down, left, and right. With each move, a new tile (either 2 or 4) appears on the grid in a random empty spot. When two tiles with the same number collide while moving, they merge into one tile with the sum of their values. The game ends when the grid is full and there are no more moves possible, or when the player successfully creates a tile with the number 2048. The player's score is determined by the value of the tiles they combine during gameplay. 2048 is known for its simple yet addictive gameplay and strategic thinking required to reach the elusive 2048 tile.",
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
        imgEl.style.marginTop = "10px";
        imgEl.style.cursor = "pointer"; // Indicate clickable

        // For Lazer Defender and 2048, reduce overall size (but keep full image)
        if (projectName === "Lazer Defender" || projectName === "2048") {
          imgEl.style.width = "70%"; // or any smaller % you want
          imgEl.style.margin = "10px auto"; // center it
        }

        // Show full image preview on click
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
// Hover preview logic
modalImagesGrid.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'IMG') {
    previewPopup.src = e.target.src;
    previewPopup.style.display = 'block';
  }
});
modalImagesGrid.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'IMG') {
    previewPopup.style.display = 'none';
  }
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
