const texts = document.querySelectorAll(".text");
texts.forEach((text) => {
  const spans = Array.from(text.textContent.trim())
    .map((char) => `<span>${char === "" ? "&nbsp;" : char}</span>`)
    .join("");
  text.innerHTML = spans;
});

/*== span Animation ==*/
const spans = document.querySelectorAll("span");
spans.forEach((span, index) => {
  span.addEventListener("mouseover", () => {
    spans.forEach((s, i) => {
      const distance = Math.abs(index - i);
      const delay = (distance * 0.1).toFixed(1);
      s.style.transitionDelay = `${delay}s`;
    });
  });
});
