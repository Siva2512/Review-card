document.addEventListener("DOMContentLoaded", () => {

  const reviews = [
    {
      name: "Sarah Jenkins",
      project: "VICTORIAN RENOVATION",
      text: "They completely transformed our flat. Quality and timelines were perfect. The team understood our vision thoroughly and executed it with a level of precision we never thought was possible.",
      time: "2 weeks ago",
      likes: 12
    },
    {
      name: "Alex Rivera",
      project: "MODERN LOFT",
      text: "A truly luxury experience. The warm beige tones and gold accents they suggested made our living room feel like a boutique hotel.",
      time: "1 month ago",
      likes: 6
    },
    {
      name: "James Thorne",
      project: "PENTHOUSE DESIGN",
      text: "Professional, artistic, and precise. Highly recommended for anyone wanting a high-end feel without the usual stress of construction.",
      time: "3 months ago",
      likes: 24
    },
    {
      name: "Elena Rodriguez",
      project: "STUDIO REMODEL",
      text: "The attention to detail is unmatched. Every corner of our studio now serves a purpose while looking absolutely stunning.",
      time: "4 months ago",
      likes: 15
    },
    {
      name: "Marcus Chen",
      project: "WELLNESS RETREAT",
      text: "From the initial consultation to the final reveal, Studio Luxe exceeded expectations. They turned our ideas into a warm and elegant reality.",
      time: "5 months ago",
      likes: 8
    },
    {
      name: "Isabella Ross",
      project: "KITCHEN REDESIGN",
      text: "The best investment we made. Functional, stylish, and built to last. The materials and craftsmanship are top-notch.",
      time: "6 months ago",
      likes: 19
    }
  ];


  const reviewGrid = document.getElementById("reviewGrid");

  if (reviewGrid) {
    reviewGrid.innerHTML = reviews.map(r => `
      <div class="review-card">
        <div class="review-in">

          <div class="review-head">
           <img src="https://i.pravatar.cc/40?img=12" alt="${r.name}">

            <div class="reviewer-info">
              <h4>${r.name}</h4>
              <span class="project">${r.project}</span>
            </div>
            <span class="quote">”</span>
          </div>

          <p class="stars">★★★★★</p>
          <p class="review-text">${r.text}</p>

          <div class="review-footer">
            <span>${r.time}</span>
            <span>👍 ${r.likes}</span>
          </div>

        </div>
      </div>
    `).join("");
  }

  const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-item").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
});
