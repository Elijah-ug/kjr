# UI/UX

document.querySelectorAll("*").forEach(el => {
  if (el.scrollWidth > el.clientWidth) {
    el.style.outline = "3px solid red";
    console.log("OVERFLOWING ELEMENT:", el);
  }
});
