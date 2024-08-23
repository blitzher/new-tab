
const $ = (i) => document.getElementById(i);
const q = $("q");

const links = {
    "Gmail": "https://www.gmail.com",
    "reddit": "https://www.reddit.com",
    "YouTube": "https://www.youtube.com",
    "GitHub": "https://www.github.com",
}

const populate_top_bar = () =>{
    const t = $("top-bar");
    for (let link in links) {
        const a = document.createElement("a");
        a.href = links[link];
        a.innerHTML = link;
        a.tabIndex = -1;
        t.appendChild(a);
    }
}

q.addEventListener("keydown", function(e) {
    if (e.key !== "Enter") {
        return;
    }
    
    const url = `https://www.google.com/search?q=${q.value}`;
    window.location = url;
});

populate_top_bar();