function likeOrDislike(buttons) {
  let out;
  if (buttons.length === 0) {
    return "Nothing";
  }
  if (buttons.length === 1) {
    return buttons[0];
  }
  for (let i = 0; i < buttons.length - 1; i++) {
    if (buttons[i] === buttons[i + 1] && out !== "Nothing") {
      out = "Nothing";
    } else {
      out = buttons[i + 1];
    }
  }
  return out;
}
console.log(likeOrDislike(["Like", "Like", "Like"]));
