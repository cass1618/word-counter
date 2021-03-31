// Utility Logic
function sentenceToArray(sentence) {
  if (sentence.trim().length === 0) {
    return [];
  }
  else {
  return (sentence.split(" "));
  }
}

// Business Logic
function wordCounter(sentence) {
  const wordArray = sentenceToArray(sentence)
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function removeUserBadWords(sentenceString, badString) {
  const wordArray = sentenceToArray(sentenceString)
  const badArray = sentenceToArray(badString)
  const goodArray = ["one"];

  //outer loop: iterates through all of the  sentence words
  wordArray.forEach(function(word) {
    //inner loop: iterates through each bad word and compares to the word from the outer loop
    badArray.forEach(function(badWord) {
      
        if (word != badWord) {
          goodArray.push(word);
          console.log("pushed "+word+" to goodArray");
        }
  });
  // Joins the good word array into a sentence
  let goodSentence = goodArray.join(" ");
  console.log(goodSentence);
  return goodSentence;
});
}

function removeBadWords(sentence) {
  const wordArray = sentenceToArray(sentence)
  const goodArray = [];
  // Places all the !bad words in goodArray
  wordArray.forEach(function(word) {
    if ((word != "muppeteer")&&(word != "lame")&&(word != "dummy")&&(word != "whatever")) {
      goodArray.push(word); 
    }      
  });
  // Joins the good words into a sentence
  let goodSentance = goodArray.join(" ");
  return goodSentance;
}

function numberOfOccurrencesInText(word, sentence) {
  const wordArray = sentenceToArray(sentence));
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

//UI Logic
$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});
