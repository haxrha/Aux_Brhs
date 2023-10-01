const symbolMap = {
    "a": "files/a.png",
    "b": "files/b.png",
    "c": "files/c.png",
    "d": "files/d.png",
    "e": "files/e.png",
    "f": "files/f.png",
    "g": "files/g.png",
    "h": "files/h.png",
    "i": "files/i.png",
    "j": "files/j.png",
    "k": "files/k.png",
    "l": "files/l.png",
    "m": "files/m.png",
    "n": "files/n.png",
    "o": "files/o.png",
    "p": "files/p.png",
    "q": "files/q.png",
    "r": "files/r.png",
    "s": "files/s.png",
    "t": "files/t.png",
    "u": "files/u.png",
    "v": "files/v.png",
    "w": "files/w.png",
    "x": "files/x.png",
    "y": "files/y.png",
    "z": "files/z.png",
    " ": "files/_space.png"
  };
  
  // Get references to the input and output elements
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  
  // Handle input event
  input.addEventListener("input", function() {
    // Get the input text and split it into an array of letters
    const inputText = input.value.trim().toLowerCase();
    const letters = inputText.split("");
  
    // Create an array of ASL symbols for each letter
    const symbols = letters.map(function(letter) {
      const symbol = symbolMap[letter];
      if (symbol) {
        return `<img class="symbol" src="${symbol}" alt="${letter}">`;
      } else {
        return `<span class="symbol missing">${letter}</span>`;
      }
    });
  
    // Update the output element with the ASL symbols
    if (inputText === "") {
      output.innerHTML = "";
    } else {
      const symbolGrid = symbols.join("").replace(/<img class="symbol" src="files\/_space\.png" alt=" "><\/img>/g, " ");
      output.innerHTML = symbolGrid;
      if (symbolGrid.includes("<img")) {
        output.classList.add("grid");
      } else {
        output.classList.remove("grid");
      }
    }
  });
  
  