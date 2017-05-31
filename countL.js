function countLetters(word) {
  var out ={};
  var noSpace = word.split(" ").join("");
  for(var i=0; i < noSpace.length; i++) {
    var char = noSpace[i];
    if (char in out) {
      out[char] +=1
    }
    else {
      out[char] = 1
    }

  }
  return out;
  }

console.log(countLetters("lighthouse in the house"));