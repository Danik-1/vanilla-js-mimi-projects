const title = document.querySelector(".title");
const leaf1 = document.querySelector(".leaf1");
const leaf2 = document.querySelector(".leaf2");
const bush2 = document.querySelector(".bush2");
const mount1 = document.querySelector(".mount1");
const mount2 = document.querySelector(".mount2");

document.addEventListener("scroll", () => {
  console.log("scroll");
  let scrollY = window.scrollY;
  title.style.marginTop = scrollY * 1.2 + "px";
  leaf1.style.marginLeft = -scrollY + "px";
  leaf2.style.marginLeft = scrollY + "px";
  bush2.style.marginBottom = -scrollY * 0.5 + "px";
  mount1.style.marginBottom = -scrollY * 1.1 + "px";
  mount2.style.marginBottom = -scrollY * 0.8 + "px";
});
