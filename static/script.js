function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function launchConfetti() {
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = ["❤️", "💖", "✨", "💕"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7500);
  }
}

async function sendMessage() {
  const response = document.getElementById("response");
  response.textContent = "Sending love...";
  const result = await fetch("/api/message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "Happy Birthday, Anushka! ❤️" })
  });
  const data = await result.json();
  response.textContent = data.success ? "Love delivered from Pranjal ❤️" : "Try again!";
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  heart.style.animationDuration = (6 + Math.random() * 5) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 11000);
}, 900);

// OPEN GIFT FUNCTION

function openGift() {

    const gift = document.getElementById("giftBox");

    const message = document.getElementById("giftMessage");

    const hint = document.getElementById("giftHint");

    gift.style.transform = "scale(0.8)";

    setTimeout(() => {

        gift.style.display = "none";

        hint.style.display = "none";

        message.style.display = "block";

    }, 500);
    createHeartExplosion();

const music = document.getElementById("birthdayMusic");

if (music) {
    music.play().catch(() => {
        console.log("Music playback requires user interaction.");
    });
}

}

function createHeartExplosion() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        heart.animate(
            [
                { transform: "translateY(0)", opacity: 1 },
                { transform: "translateY(-110vh)", opacity: 0 }
            ],
            {
                duration: 3000 + Math.random() * 2000,
                easing: "ease-out"
            }
        ).onfinish = () => heart.remove();

    }

}

document.addEventListener("click", function startWebsiteMusic() {
    const music = document.getElementById("birthdayMusic");

    if (music) {
        music.currentTime = 0;

        music.play()
            .then(() => {
                console.log("Music started from beginning!");
            })
            .catch(error => {
                console.log("Music error:", error);
            });
    }

    document.removeEventListener("click", startWebsiteMusic);
}, { once: true });

// Birthday Countdown
// Change the date to Anushka's birthday.
const birthdayDate = new Date("2026-11-05T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = birthdayDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML =
            "Happy Birthday, Anushka! ❤️";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

function showSurprise() {
    document.getElementById("surprise-message").innerHTML =
        "Anushka ❤️ You are my favorite person. Happy Birthday in advance! 🎂💕";
}
