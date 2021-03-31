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
  let goodArray = [];
  let goodSentence = "blank";
  let notGood = 0;

  wordArray.forEach(function(word) {
    notGood = 0;
    badArray.forEach(function(badWord) {
      if (word === badWord) {
      notGood++;
    }
    console.log("for word "+word+" notGood is "+notGood);
  });
  if (notGood === 0) {
    goodArray.push(word);
  }
  });
  console.log("good array "+goodArray);
  return goodArray.join(" ");
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
  const wordArray = sentenceToArray(sentence);
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

  $("form#remove-bad-words").submit(function(event){
    event.preventDefault();
    const passage = $("#bad-word-text").val();
    const passage2 = $("#user-select-text").val();
    const badWords = $("#user-select-words").val();
    
    const noBadWords = removeBadWords(passage);
    console.log("bad word "+badWords);
    console.log("noBadWords "+noBadWords);
    const noUserWords = removeUserBadWords(passage2,badWords);
    console.log("No user words "+noUserWords)
    $("#no-bad").html(noBadWords);
    $("#no-user").html(noUserWords);
  });
});
