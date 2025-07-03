const projectsData = {
  "Heist Room": {
    description: "Heist Room is an exciting casino game platform focused on strategy and luck...",
    images: [
      "assets/images/HeistRoom.png",
    ]
  },
  "Vroom Vroom": {
    description: "Vroom Vroom is 3D car racing game with realistic physics. In this game, players can choose different cars and race against 4–5 opponent cars. It has exciting tracks with checkpoints so players can restart if they crash. The game also has a minimap to show the track and a speedometer to see how fast you are going. Vroom Vroom is challenging and fun, giving players a thrilling racing experience.",
    images: [
      "assets/images/v2.png",
      "assets/images/v3.png",
      "assets/images/v4.png",
      "assets/images/v5.png",
      "assets/images/v6.png",
    ]
  },
  "CasinoIgnite": {
    description: "CasinoIgnite offers a modern take on classic casino games...",
    images: [
      "assets/images/cidashboard.jpg",
      "assets/images/ci_2.jpg"
    ]
  },
  "Rolling Dice": {
    description: "Rolling Dice is a fun dice game with multiplayer support...",
    images: [
      "assets/images/rd-dash.jpg"
    ]
  },
  "Delivery Driver": {
    description: "Delivery Driver is a casual 2D game about delivering packages on time.",
    images: [
      "assets/images/delivery.png",
      "assets/images/delivery_2.png"
    ]
  },
  "Quiz": {
    description: "Quiz is an educational 2D game designed to test your knowledge.",
    images: [
      "assets/images/cat.png"
    ]
  },
  "Lazer Defender": {
    description: "Lazer Defender is a classic 2D shooter game with retro graphics.",
    images: [
      "assets/images/LD1.png"
    ]
  },
  "2048": {
    description: "2048 is a simple yet addictive number puzzle game.",
    images: [
      "assets/images/2048.png"
    ]
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

// Add event listener for each info icon
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
    project.images.forEach(src => {
      const imgEl = document.createElement('img');
      imgEl.src = src;
      imgEl.alt = `${projectName} image`;
      modalImagesGrid.appendChild(imgEl);
    });

    // Show modal
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
