document.getElementById("organizeBtn").addEventListener("click", async () => {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    // Get all tabs in current window
    const tabs = await chrome.tabs.query({ currentWindow: true });

    const categories = {
        Study: { label: "📚 Study", tabs: [] },
        Coding: { label: "💻 Coding", tabs: [] },
        Video: { label: "🎬 Video", tabs: [] },
        Music: { label: "🎵 Music", tabs: [] },
        Interests: { label: "🎨 Interests", tabs: [] },
        Social: { label: "💬 Social", tabs: [] },
        Others: { label: "✨ Others", tabs: [] }
    };

    tabs.forEach(tab => {
        const title = tab.title.toLowerCase();
        const url = tab.url?.toLowerCase() || "";

        // 📚 STUDY
        if (
            title.includes("exam") ||
            title.includes("study") ||
            title.includes("math") ||
            title.includes("notes") ||
            title.includes("course") ||
            title.includes("lecture")
        ) {
            categories.Study.tabs.push(tab);

            // 💻 CODING / DEV
        } else if (
            title.includes("code") ||
            title.includes("programming") ||
            title.includes("mongodb") ||
            title.includes("django") ||
            title.includes("github") ||
            title.includes("node") || // ✅ now node.js tabs go here
            title.includes("javascript") ||
            url.includes("stackoverflow") ||
            url.includes("github.com")
        ) {
            categories.Coding.tabs.push(tab);

            // 🎬 VIDEO / OTT
        } else if (
            title.includes("netflix") ||
            title.includes("youtube") ||
            title.includes("movie") ||
            title.includes("trailer") ||
            title.includes("zootopia") ||
            title.includes("prime video") ||
            title.includes("hotstar")
        ) {
            categories.Video.tabs.push(tab);

            // 🎵 MUSIC
        } else if (
            title.includes("spotify") ||
            title.includes("soundcloud") ||
            title.includes("gaana") ||
            title.includes("youtube music") ||
            title.includes("music") ||
            url.includes("spotify.com") ||
            url.includes("soundcloud.com")
        ) {
            categories.Music.tabs.push(tab);

            // 🎨 INTERESTS / ART / FUN
        } else if (
            title.includes("pixel") ||
            title.includes("art") ||
            title.includes("cat") ||
            title.includes("cute") ||
            title.includes("design") ||
            title.includes("fun") ||
            title.includes("meme")
        ) {
            categories.Interests.tabs.push(tab);

            // 💬 SOCIAL
        } else if (
            title.includes("instagram") ||
            title.includes("twitter") ||
            title.includes("linkedin") ||
            title.includes("facebook") ||
            title.includes("discord") ||
            url.includes("twitter.com") ||
            url.includes("instagram.com")
        ) {
            categories.Social.tabs.push(tab);

            // ✨ OTHERS
        } else {
            categories.Others.tabs.push(tab);
        }
    });

    // Sort tabs alphabetically in each category
    for (const key in categories) {
        categories[key].tabs.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Display categories and tabs
    for (const key in categories) {
        const category = categories[key];
        if (category.tabs.length === 0) continue;

        const card = document.createElement("div");
        card.className = "category";

        const title = document.createElement("h3");
        title.textContent = category.label;
        card.appendChild(title);

        category.tabs.forEach(tab => {
            const tabDiv = document.createElement("div");
            tabDiv.className = "tab";
            tabDiv.textContent = tab.title;

            tabDiv.onclick = () => {
                chrome.tabs.update(tab.id, { active: true });
            };

            card.appendChild(tabDiv);
        });

        resultsDiv.appendChild(card);
    }
});

// 🐱 pixel pet interaction
const pet = document.getElementById("pet");
const bubble = document.getElementById("petBubble");

const petLines = [
    "tabs make me happy 🌸",
    "click me again!",
    "you’re doing great 💕",
    "cozy vibes only ✨",
    "meow~"
];

pet.addEventListener("click", () => {
    bubble.textContent = petLines[Math.floor(Math.random() * petLines.length)];
    bubble.style.display = "block";

    pet.style.animation = "none";
    pet.offsetHeight; // reset animation
    pet.style.animation = "idleBounce 1s";

    setTimeout(() => {
        bubble.style.display = "none";
    }, 2000);
});
