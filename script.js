function show(el) {
  document.querySelectorAll(".screen").forEach(s => s.style.display = "none");
  el.style.display = "flex";
}

function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "007@Mary") {
    show(document.getElementById("cover"));
  } else {
    document.getElementById("error").innerText = "Senha errada 😅";
  }
}

const cover = document.getElementById("cover");
const book = document.getElementById("book");
const music = document.getElementById("music");

cover.onclick = () => {
  show(book);
  music.play(); // funciona no iPhone porque é clique
};

let pages = document.querySelectorAll(".page");
let current = 0;

document.getElementById("next").onclick = () => {
  pages[current].classList.remove("active");
  current = (current + 1) % pages.length;
  pages[current].classList.add("active");
};

document.getElementById("back").onclick = () => {
  show(cover);
};

/* salvar texto */
document.querySelectorAll(".edit").forEach((el, i) => {
  el.innerHTML = localStorage.getItem("p" + i) || "";

  el.addEventListener("input", () => {
    localStorage.setItem("p" + i, el.innerHTML);
  });
});
