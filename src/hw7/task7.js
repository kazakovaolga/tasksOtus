export function createUITask7(el) {
  const inp = document.createElement("input");
  inp.className = "inpTask7";
  el.append(inp);

  const btn = document.createElement("button");
  btn.className = "btnTask7";
  btn.hidden = "true";
  el.append(btn);

  for (let i = 1; i <= 3; i += 1) {
    const p = document.createElement("p");
    p.className = "output";
    p.innerHTML = `Text${i}`;
    el.append(p);
  }

  btn.addEventListener("click", () => {
    const input = el.querySelector(".inpTask7");
    const text = document.createElement("p");
    text.className = "output";
    text.innerText = input.value;
    el.append(text);
    const p = el.querySelectorAll(".output");
    if (p.length > 5) {
      p[0].remove();
    }
    input.value = "";
  });

  inp.addEventListener("click", () => {
    btn.hidden = false;
    btn.innerHTML = "Click";
    btn.style.marginLeft = "80px";
    btn.style.width = "200px";
    btn.style.height = "30px";
    btn.style.background = "teal";
    btn.style.color = "white";
    btn.style.fontSize = "20px";
  });
}
