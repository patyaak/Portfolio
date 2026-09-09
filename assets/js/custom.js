const projectData = [
  {
    title: "Heist Room",
    category: "game",
    label: "Slot Game",
    image: "assets/images/HeistRoom.png",
    summary: "A casino game built in Unity, featuring engaging gameplay, polished visuals, and smooth user interactions.",
    description: "Heist Room is a feature rich gameplay concept designed to balance strong player energy with polished experience design. I focused on usability, dynamic pacing, and making the interaction feel exciting and clear.",
    media: [
      "assets/images/HeistRoom.png"
    ]
  },
  {
    title: "Vroom Vroom",
    category: "game",
    label: "3D Car Racing",
    image: "assets/images/vr1.png",
    summary: "A 3D driving concept focused on momentum, control, and competitive feel.",
    description: "As part of my Bachelor’s final year project, I created a 3D car racing game in Unity, where players can select from different cars and compete in fast paced races.I worked on vehicle controls, race logic, AI behavior, checkpoint based progression, and in-game UI, along with sound effects, to deliver a smooth and enjoyable racing experience.",
media: [
  "assets/videos/vroomclip.mp4",
  "assets/images/vr1.png",
  "assets/images/v2.png",
  "assets/images/v3.png",
  "assets/images/v4.png",
  "assets/images/v5.png",
  "assets/images/v6.png"

]
  },
{
  title: "CasinoIgnite",
    category: "game",
      label: "Slot Game",
        image: "assets/images/cidashboard.jpg",
          summary: "A casino game project that emphasizes clean design and smooth transitions built in Cocos Creator.",
            description: "Casino Ignite is a comprehensive gaming platform built with Cocos Creator. I joined the team to enhance the user experience by developing a responsive dashboard and a real-time leaderboard system. In addition to UI/UX improvements, I contributed to the development of several core casino games and implemented secure login authentication, ensuring a seamless and engaging player journey.",
            media: [
                "assets/videos/casinoIgnite.mp4",
                "assets/images/cidashboard.jpg",
                "assets/images/ci.jpg"
              ]
},
{
  title: "Rolling Dice",
    category: "game",
      label: "Slot Game",
        image: "assets/images/rd-dash.jpg",
          summary: "Upgraded Version of casino Ignite with additional of multiple games  built in Cocos Creator",
            description: "Rolling Dice utilizes the Cocos engine to offer a suite of interactive casino games. My contributions focused on engineering a smooth dashboard interface and optimizing game performance. I played a significant role in coding the logic for multiple games within the platform, ensuring valid game states, reliable data handling, and an overall polished user experience.",
              media: [
                "assets/videos/rollingdicevideo.mp4",
                "assets/images/rd.jpg",
                "assets/images/rd-dash.jpg"
              ]
},
{
  title: "Delivery Driver",
    category: "game",
      label: "2D / Physics",
        image: "assets/images/delivery.png",
          summary: "A physics-driven delivery game focused on movement, collisions, and player control.",
            description: "Delivery Driver is a physics-based 2D game that marked my initial deep dive into Unity. The project focuses on mastering rigid body mechanics and collider interactions. Players navigate a delivery vehicle through a town, managing speed and momentum to pick up and deliver packages. This project solidified my understanding of C# scripting for movement logic, collision detection, and state management.",
              media: [
                "assets/videos/delivery.mp4",
                "assets/images/delivery.png"
              ]
},
{
  title: "Quiz Master",
    category: "game",
      label: "Educational / 2D",
        image: "assets/images/cat.png",
          summary: "A trivia game with a timer, score system, and replayable question flow.",
            description: "Quiz Master is an interactive 2D educational game that challenges players across various knowledge categories. I implemented a robust question management system that dynamically retrieves content, paired with a timer-based scoring mechanic to add urgency. The project features a clean UI for feedback, high-score tracking, and efficient data handling to ensure a smooth flow between questions." ,
              media: [
                "assets/videos/quiz.mp4",
                "assets/images/cat.png",
                "assets/images/q1.png",
                "assets/images/q2.png"
              ]
},
{
  title: "2048",
    category: "game",
      label: "Puzzle / Logic",
        image: "assets/images/2048-1.jpg",
          summary: "A classic sliding puzzle game built around merge logic and scoring flow.",
            description: "An implementation of the classic number puzzle game on a 4x4 grid. The core challenge involved programming the complex tile-merging logic and grid management systems. I focused on efficient state management to track valid moves, score calculations, and win/loss conditions, resulting in a smooth and addictive puzzle experience.",
              media: [
                "assets/videos/2048-v.mp4",
                "assets/images/2048-1.jpg",
                "assets/images/2048-2.jpg",
                "assets/images/2048-3.jpg"
              ]
},
{
  title: "Laser Defender",
    category: "game",
      label: "Retro Space Shooting",
        image: "assets/images/LD2.jpg",
          summary: "A retro-style space shooter built in Unity, inspired by classic arcade games with fast paced laser combat and enemy waves.",
            description: "Lazer Defender is a retro-inspired vertical space shooter where players battle waves of incoming enemies. I designed the enemy pathfinding system using waypoints to create diverse attack patterns. The game features a health point system for both player and enemies, a scoring mechanism, and immersive audio effects, delivering a classic fast-paced arcade experience.",
              media: [
                "assets/videos/Ld-video.mp4",
                "assets/images/LD1.jpg",
                "assets/images/LD2.jpg",
                "assets/images/LD3.jpg",
                "assets/images/LD4.jpg",
                "assets/images/LD5.jpg",
                
              ]
},

{
  title: "Makes You",
    category: "content",
      label: "Creator / Modeling",
        image: "assets/images/makesyou.jpg",
          summary: "Content for the Makes You series.",
            description: "",
              media: [
                "assets/videos/makesYou1.mp4",
                 "assets/videos/makesYou2.mp4",
              ]
},
{
  title: "A&A Elegance",
    category: "content",
      label: "Creator",
        image: "assets/images/A&A.png",
          summary: "Promotional content for A&A Elegance, a fashion brand.",
            description: "",
              media: [
                "assets/videos/AAElegance.mp4",
              ]
},
{
  title: "Ritual Eats",
    category: "content",
      label: "Creator",
        image: "assets/images/ritual.jpg",
          summary: "Promotional content",
            description: "",
              media: [
                "assets/videos/ritualEats.mp4",
              ]
},
{
  title: "Lhotse Clothing Store",
    category: "content",
      label: "Creator / Modeling",
        image: "assets/images/lhotse.jpg",
          summary: "Promotional content",
            description: "",
              media: [
                "assets/videos/Lhotse.mp4",
              ]
},
{
  title: "N+ Professional",
    category: "content",
      label: "Creator",
        image: "assets/images/nplus.png",
          summary: "Promotional content",
            description: "",
              media: [
                "assets/videos/Nplus.mp4",
              ]
},
];

const projectGrid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalMedia = document.getElementById("modalMedia");
const modalClose = document.querySelector(".modal-close");
const mediaPreview = document.getElementById("mediaPreview");
const mediaPreviewContent = mediaPreview.querySelector(".media-preview-content");
const mediaPreviewClose = mediaPreview.querySelector(".media-preview-close");

function renderProjects(filter = "game") {
  const visibleProjects = projectData.filter((project) => project.category === filter);

  projectGrid.innerHTML = visibleProjects
    .map((project) => `
      <article class="project-card" data-category="${project.category}">
        <img src="${project.image}" alt="${project.title}" />
        <div class="project-body">
          <span class="project-tag">${project.label}</span>
          <h4>${project.title}</h4>
          <p>${project.summary}</p>
          <div class="project-meta">
            <small>${project.category === "content" ? "creator work" : "game project"}</small>
            <button type="button" data-project="${project.title}">View</button>
          </div>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.project));
  });
}

function openModal(projectTitle) {
  const project = projectData.find((item) => item.title === projectTitle);
  if (!project) return;

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.label;
  modalDescription.textContent = project.description;
  modalMedia.innerHTML = project.media
    .map((src) => {
      const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
      return isVideo
        ? `<video controls preload="metadata" data-preview-src="${src}" src="${src}"></video>`
        : `<img data-preview-src="${src}" src="${src}" alt="${project.title} preview" />`;
    })
    .join("");

  modalMedia.querySelectorAll("[data-preview-src]").forEach((media) => {
    media.addEventListener("click", () => openMediaPreview(media));
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function openMediaPreview(media) {
  const preview = media.tagName === "VIDEO"
    ? document.createElement("video")
    : document.createElement("img");

  preview.src = media.dataset.previewSrc;
  preview.alt = media.alt || "Media preview";
  if (preview.tagName === "VIDEO") {
    preview.controls = true;
    preview.muted = false;
    preview.volume = 1;
  }

  mediaPreviewContent.replaceChildren(preview);
  mediaPreview.classList.add("open");
  mediaPreview.setAttribute("aria-hidden", "false");

  if (preview.tagName === "VIDEO") {
    preview.play().catch(() => undefined);
  }
}

function stopAllVideos() {
  document.querySelectorAll("video").forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}

function closeMediaPreview() {
  stopAllVideos();
  mediaPreview.classList.remove("open");
  mediaPreview.setAttribute("aria-hidden", "true");
  mediaPreviewContent.replaceChildren();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  closeMediaPreview();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects("game");

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
mediaPreviewClose.addEventListener("click", closeMediaPreview);
mediaPreview.addEventListener("click", (event) => {
  if (event.target === mediaPreview) closeMediaPreview();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mediaPreview.classList.contains("open")) {
    closeMediaPreview();
  } else if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});


