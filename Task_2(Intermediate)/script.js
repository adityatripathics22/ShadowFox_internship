const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const filterButtons = document.querySelectorAll(".filter-button");
const playerCards = document.querySelectorAll(".player-card");
const pollForm = document.getElementById("poll-form");
const pollResult = document.getElementById("poll-result");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { filter } = button.dataset;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    playerCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.role === filter;
      card.classList.toggle("hidden", !matches);
    });
  });
});

if (pollForm && pollResult) {
  pollForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedOption = pollForm.querySelector('input[name="impact-player"]:checked');
    if (!selectedOption) {
      pollResult.textContent = "Pick a player before casting your vote.";
      return;
    }

    pollResult.textContent = `Vote recorded: ${selectedOption.value} is your impact player pick.`;
    pollForm.reset();
  });
}

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");

const nextMatch = new Date("2026-05-03T19:30:00+05:30");

function updateCountdown() {
  if (!daysElement || !hoursElement || !minutesElement) {
    return;
  }

  const now = new Date();
  const difference = nextMatch.getTime() - now.getTime();

  if (difference <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    return;
  }

  const totalMinutes = Math.floor(difference / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
}

updateCountdown();
window.setInterval(updateCountdown, 60 * 1000);
