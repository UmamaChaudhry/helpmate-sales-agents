
/* =====================================
   HELPA​TE SALES AGENT - JAVASCRIPT
===================================== */

// 1. Mobile Navigation Menu
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Menu link click karne par menu close ho jayega
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// 2. Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}


// 3. Interactive Sales Agent Chat Demo
const chatBubble = document.querySelector(".chat-bubble");
const chatOptions = document.querySelectorAll(".chat-option");

chatOptions.forEach((button) => {
  button.addEventListener("click", () => {
    if (!chatBubble) return;

    // Button ke mutabiq demo response
    const reply = button.dataset.reply;

    if (reply) {
      chatBubble.textContent = reply;
    }

    // Response animation
    chatBubble.classList.remove("bubble-pop");

    void chatBubble.offsetWidth;

    chatBubble.classList.add("bubble-pop");
  });
});


// 4. Voice Button Animation
const voiceButton = document.querySelector(".voice-button");

if (voiceButton) {
  voiceButton.addEventListener("click", () => {
    voiceButton.classList.toggle("is-active");

    if (voiceButton.classList.contains("is-active")) {
      voiceButton.textContent = "•••";
    } else {
      voiceButton.textContent = "▥";
    }
  });
}


// 5. Current Year Automatically Update
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// 6. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// 7. Button Click Feedback
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("button-clicked");

    setTimeout(() => {
      button.classList.remove("button-clicked");
    }, 180);
  });
});

console.log("Helpate Sales Agent website loaded successfully!");
