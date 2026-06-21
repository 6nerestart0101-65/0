document.addEventListener("DOMContentLoaded", function () {

    // 1️⃣ 歡迎訊息（進網站會跳一次）
    alert("歡迎來到呂靖媞的個人網站 🌸");

    // 2️⃣ 滑到區塊時淡入效果（簡單動畫）
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    sections.forEach(sec => {
        sec.style.opacity = 0;
        sec.style.transform = "translateY(30px)";
        sec.style.transition = "0.8s ease";
        observer.observe(sec);
    });

    // 3️⃣ 點標題變粉紅（互動效果）
    const title = document.querySelector("h1");

    if (title) {
        title.style.cursor = "pointer";

        title.addEventListener("click", function () {
            title.style.color = "#ff4d88";
            alert("你點了標題 🌸");
        });
    }

});
