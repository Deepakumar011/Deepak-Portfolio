// 🌙 Dark Mode Toggle
const toggle = document.getElementById("dark-mode-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// 🍔 Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

// 🔍 Search Functionality
document.querySelector(".search-btn").addEventListener("click", () => {
  const input = document.getElementById("searchInput");
  if (input.value.trim()) {
    console.log("Searching for:", input.value);
    input.value = "";
  } else {
    console.log("Search input is empty");
  }
});

// 👨‍💻 Typing Animation for Hero Section
const text = [
  "Full Stack Web Developer",
  "React & Node.js Developer",
  "Tech Enthusiast with a Focus on Continuous Learning",
  "Frontend & Backend Expertise",
  "Always Exploring New Technologies and Frameworks",
];

let i = 0, j = 0, isDeleting = false;

function type() {
  const el = document.getElementById("typed-text");
  if (!el) return;

  const current = text[i];
  el.textContent = current.substring(0, j);
  j += isDeleting ? -1 : 1;

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
window.addEventListener("load", type);

// 📖 About Section - Read More Toggle
const btn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

btn?.addEventListener("click", () => {
  moreText.classList.toggle("show");
  btn.textContent = moreText.classList.contains("show") ? "Read Less" : "Read More";
});

// // 💡 Skills Section – Circular & Horizontal Bars
// document.querySelectorAll(".circle").forEach((circle) => {
//   const percent = parseInt(circle.getAttribute("data-percent"));
//   const deg = (percent / 100) * 360;
//   setTimeout(() => {
//     circle.style.background = `conic-gradient(#38bdf8 ${deg}deg, #334155 ${deg}deg)`;
//     const number = document.createElement("div");
//     number.textContent = `${percent}%`;
//     number.style.position = "absolute";
//     number.style.fontSize = "1.2rem";
//     circle.insertBefore(number, circle.firstChild);
//   }, 500);
// });

// document.querySelectorAll(".fill").forEach((fill) => {
//   const width = fill.getAttribute("data-width") || fill.style.width;
//   fill.style.width = "0";
//   setTimeout(() => {
//     fill.style.width = width;
//   }, 300);
// });

// 📩 Contact Form Submission Alert
function handleSubmit(event) {
  event.preventDefault();
  alert("✅ Message sent successfully!");
  event.target.reset();
}

// ⬆️ Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display =
    window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 📄 Resume Viewer & Downloader
function changeResume(event) {
  const file = event.target.files[0];
  if (file?.type === "application/pdf") {
    document.getElementById("resumeViewer").src = URL.createObjectURL(file);
  } else {
    alert("Please upload a PDF file.");
  }
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = document.getElementById("resumeViewer").src;
  link.download = "Deepak-Resume.pdf";
  link.click();
}

// ✨ Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});
// skills section// JavaScript for Clickable Skill Cards (Optional)

        document.querySelectorAll(".circle").forEach((circle) => {
            const percent = parseInt(circle.getAttribute("data-percent"));
            const deg = (percent / 100) * 360;
            setTimeout(() => {
                circle.style.setProperty(
                    "--gradient",
                    `conic-gradient(#38bdf8 ${deg}deg, #334155 ${deg}deg)`
                );
            }, 200);
        });
        window.addEventListener("load", () => {
            document.querySelectorAll(".fill").forEach((el) => {
                const finalWidth = el.style.width;
                el.style.width = "0";
                setTimeout(() => {
                    el.style.width = finalWidth;
                }, 100);
            });
        });
        document.querySelectorAll(".circle").forEach((circle) => {
            const percent = parseInt(circle.getAttribute("data-percent"));
            const deg = (percent / 100) * 360;
            setTimeout(() => {
                circle.style.background = `conic-gradient(#38bdf8 ${deg}deg, #334155 ${deg}deg)`;
            }, 300);
        });

        document.querySelectorAll(".fill").forEach((fill) => {
            const width = fill.style.width;
            fill.style.setProperty("--width", width);
            fill.style.width = "0";
            setTimeout(() => {
                fill.style.width = width;
            }, 100);
        });
