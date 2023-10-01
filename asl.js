const symbolMap = {
    "files/a.png": "a",
    "files/b.png": "b",
    "files/c.png": "c",
    "files/d.png": "d",
    "files/e.png": "e",
    "files/f.png": "f",
    "files/g.png": "g",
    "files/h.png": "h",
    "files/i.png": "i",
    "files/j.png": "j",
    "files/k.png": "k",
    "files/l.png": "l",
    "files/m.png": "m",
    "files/n.png": "n",
    "files/o.png": "o",
    "files/p.png": "p",
    "files/q.png": "q",
    "files/r.png": "r",
    "files/s.png": "s",
    "files/t.png": "t",
    "files/u.png": "u",
    "files/v.png": "v",
    "files/w.png": "w",
    "files/x.png": "x",
    "files/y.png": "y",
    "files/z.png": "z",
  };
  const input = document.getElementById(".btn");
  const output = document.getElementById("output");
  // Get references to the input and output elements
  input.addEventListener("click", function() {
    // Get the input text and split it into an array of letters
  
    // Create an array of ASL symbols for each letter
    const symbols = input.map(function(symbol) {
      const letter = symbolMap[symbol];
      return letter;
    });
  
    // Update the output element with the ASL symbols
    const symbolGrid = symbols
    output.innerHTML = symbolGrid;
  });
  
  