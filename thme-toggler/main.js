const lightButton = document.getElementById("light");
const darkButton = document.getElementById("dark");
const solarizedButton = document.getElementById("solar");
const body = document.body;

const theme = localStorage.getItem("theme")

if (theme) {
    body.classList = theme
}

lightButton.onclick = () => {
    body.classList = "light";
    localStorage.setItem("theme", "light");
};

darkButton.onclick = () => {
    body.classList = "dark";
    localStorage.setItem("theme", "dark");
};

solarizedButton.onclick = () => {
    body.classList = "solarized";
    localStorage.setItem("theme", "solarized");
};