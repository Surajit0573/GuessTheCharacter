//data
const characters=[
  {
    name: ["Naruto", "Naruto Uzumaki", "Uzumaki Naruto"],
    hints: [
      "One of the main characters",
      "Loves Ichiraku Ramen",
      "Believe it!",
      "Sexy Jutsu",
      "7th Hokage"
    ],
   image: "./Assate/naruto.jpg"
  },
  {
    name: ["Sasuke", "Sasuke Uchiha", "Uchiha Sasuke"],
    hints: [
      "Rival of Naruto",
      "Part of Team 7",
      "Sharingan user",
      "Seeking power and revenge",
      "Last of the Uchiha clan"
    ],
   image: "./Assate/sasuke.jpg"
  },
  {
    name: ["Sakura", "Sakura Haruno", "Haruno Sakura"],
    hints: [
      "Member of Team 7",
      "Skilled medical ninja",
      "Has a crush on Sasuke",
      "Ino's rival",
      "Has exceptional chakra control"
    ],
   image: "./Assate/sakura.jpg"
  },
  {
    name: ["Kakashi", "Kakashi Hatake", "Hatake Kakashi"],
    hints: [
      "Former ANBU captain",
      "Uses the Sharingan",
      "Has a book called 'Make-Out Paradise'",
      "Copy Ninja",
      "Taught Team 7"
    ],
   image: "./Assate/.jpg"
  },
  {
    name: ["Jiraiya"],
    hints: [
      "Legendary Sannin",
      "Master of Naruto",
      "Author of 'Make-Out Paradise'",
      "Toad Sage",
      "Has the Summoning Jutsu"
    ],
   image: "./Assate/jiraiya.jpg"
  },
  {
    name: ["Orochimaru"],
    hints: [
      "Former member of the Legendary Sannin",
      "Uses snake-related jutsu",
      "Seeks immortality",
      "Formerly of the Hidden Leaf Village",
      "Wants Sasuke's body"
    ],
   image: "./Assate/orochimaru.jpg"
  },
  {
    name: ["Hinata", "Hinata Hyuga", "Hyuga Hinata"],
    hints: [
      "Member of the Hyuga clan",
      "Has a gentle disposition",
      "Has a crush on Naruto",
      "Byakugan user",
      "Develops the Gentle Fist technique"
    ],
   image: "./Assate/hinata.jpg"
  },
  {
    name: ["Shikamaru", "Shikamaru Nara", "Nara Shikamaru"],
    hints: [
      "Lazy but highly intelligent",
      "Strategic thinker",
      "Part of Team 10",
      "Shadow Manipulation Jutsu user",
      "Becomes a Chunin during the Chunin Exams"
    ],
   image: "./Assate/shikamaru.jpg"
  },
  {
    name: ["Gaara"],
    hints: [
      "Former Jinchuriki of One-Tail",
      "Kazekage of the Hidden Sand Village",
      "Initially an antagonist",
      "Has control over sand",
      "Had a traumatic childhood"
    ],
   image: "./Assate/gaara.jpg"
  },
  {
    name: ["Rock Lee", "Lee", "Rock"],
    hints: [
      "Taijutsu specialist",
      "Cannot use ninjutsu or genjutsu",
      "Wears green jumpsuit",
      "Disciple of Might Guy",
      "Believes in hard work over natural talent"
    ],
   image: "./Assate/lee.jpg"
  },
  {
    name: ["Neji", "Neji Hyuga", "Hyuga Neji"],
    hints: [
      "Member of the Hyuga clan",
      "Byakugan user",
      "Initially holds a grudge against Hinata",
      "Fate determined by destiny",
      "Develops the Eight Trigrams Sixty-Four Palms technique"
    ],
   image: "./Assate/neji.jpg"
  },
  {
    name: ["Tenten"],
    hints: [
      "Weapon specialist",
      "Part of Team Guy",
      "Proficient in various ninja tools",
      "Uses summoning scrolls",
      "Aspires to be like legendary weaponsmiths"
    ],
   image: "./Assate/tenten.jpg"
  },
  {
    name: ["Kiba", "Kiba Inuzuka", "Inuzuka Kiba"],
    hints: [
      "Member of the Inuzuka clan",
      "Has a dog companion named Akamaru",
      "Uses beast-like taijutsu",
      "Has enhanced sense of smell",
      "Part of Team 8"
    ],
   image: "./Assate/kiba.jpg"
  },
  {
    name: ["Shino", "Shino Aburame", "Aburame Shino"],
    hints: [
      "Member of the Aburame clan",
      "Uses insects as weapons",
      "Has a stoic personality",
      "Part of Team 8",
      "Masters the Parasitic Giant Beetle Jutsu"
    ],
   image: "./Assate/shino.jpg"
  },
  {
    name: ["Ino", "Ino Yamanaka", "Yamanaka Ino"],
    hints: [
      "Part of Team 10",
      "Has mind-transfer jutsu",
      "Has a rivalry with Sakura",
      "Works at a flower shop",
      "Uses her family's clan techniques"
    ],
   image: "./Assate/ino.jpg"
  },
  {
    name: ["Choji", "Choji Akimichi", "Akimichi Choji"],
    hints: [
      "Part of Team 10",
      "Has a love for food",
      "Uses Human Bullet Tank jutsu",
      "Member of the Akimichi clan",
      "Struggles with self-confidence"
    ],
   image: "./Assate/choji.jpg"
  },
  {
    name: ["Tsunade"],
    hints: [
      "Legendary Sannin",
      "Fifth Hokage",
      "Master of medical ninjutsu",
      "Has incredible strength",
      "Has a fear of blood"
    ],
   image: "./Assate/tsunade.jpg"
  },
  {
    name: ["Jugo"],
    hints: [
      "Possesses Sage Transformation",
      "Has a volatile and unpredictable nature",
      "Part of Sasuke's team",
      "Has the ability to absorb natural energy",
      "Cursed with uncontrollable rage"
    ],
   image: "./Assate/jugo.jpg"
  },
  {
    name: ["Suigetsu"],
    hints: [
      "Swordsman",
      "Can turn his body into liquid",
      "Part of Sasuke's team",
      "Desires to reform the Seven Ninja Swordsmen",
      "Wants to collect all the swords"
    ],
   image: "./Assate/suigetsu.jpg"
  },
  {
    name: ["Karin"],
    hints: [
      "Has sensory abilities",
      "Part of Sasuke's team",
      "Fiercely loyal to Sasuke",
      "Has healing abilities",
      "Has a past with Orochimaru"
    ],
   image: "./Assate/karin.jpg"
  },
  {
    name: ["Itachi", "Itachi Uchiha", "Uchiha Itachi"],
    hints: [
      "Sasuke's older brother",
      "Former ANBU captain",
      "Massacred the Uchiha clan",
      "Has the Mangekyo Sharingan",
      "Sacrificed himself for the village"
    ],
   image: "./Assate/itachi.jpg"
  },
  {
    name: ["Kisame"],
    hints: [
      "Swordsman",
      "Partnered with Itachi",
      "Member of the Akatsuki",
      "Has shark-like features",
      "Uses Samehada as his weapon"
    ],
   image: "./Assate/kisame.jpg"
  },
  {
    name: ["Pain", "Nagato", "Yahiko"],
    hints: [
      "Leader of the Akatsuki",
      "Possesses the Rinnegan",
      "Former student of Jiraiya",
      "Believes in achieving peace through pain",
      "Uses the Six Paths of Pain technique"
    ],
   image: "./Assate/nagato.jpg"
  },
  {
    name: ["Konan"],
    hints: [
      "Member of the Akatsuki",
      "Uses paper-based jutsu",
      "Has an affinity for origami",
      "Devoted to Yahiko's ideals",
      "Childhood friend of Yahiko and Nagato"
    ],
   image: "./Assate/konan.jpg"
  },
  {
    name: ["Deidara"],
    hints: [
      "Uses explosive clay as a weapon",
      "Member of the Akatsuki",
      "Artistic approach to battles",
      "Has mouths on his palms",
      "Fights using long-range techniques"
    ],
   image: "./Assate/deidarao.jpg"
  },
  {
    name: ["Sai"],
    hints: [
      "Part of Team 7",
      "Uses ink-based jutsu",
      "Initially lacks emotions",
      "Skilled in espionage",
      "Joins Team 7 after Sasuke's departure"
    ],
   image: "./Assate/sai.jpg"
  },
  {
    name: ["Yamato"],
    hints: [
      "An ANBU captain",
      "Has Wood Style jutsu",
      "Trained to suppress Nine-Tails' chakra in Naruto",
      "Assigned to Team 7 as a replacement for Kakashi",
      "Uses Hashirama Senju's cells"
    ],
   image: "./Assate/yamato.jpg"
  },
  {
    name: ["Kurenai", "Kurenai Yuhi", "Yuhi Kurenai"],
    hints: [
      "Genjutsu specialist",
      "Part of Team 8",
      "Has a child with Asuma",
      "Trains Hinata in genjutsu",
      "Initially has a romantic interest in Asuma"
    ],
   image: "./Assate/kurenai.jpg"
  },
  {
    name: ["Asuma", "Asuma Sarutobi", "Sarutobi Asuma"],
    hints: [
      "Son of the Third Hokage",
      "Part of Team 10",
      "Wields trench knives",
      "Has a child with Kurenai",
      "Trains Shikamaru in shogi"
    ],
   image: "./Assate/asuma.jpg"
  },
  {
    name: ["Iruka", "Iruka Umino", "Umino Iruka"],
    hints: [
      "Academy instructor",
      "Cares for Naruto like a father figure",
      "Survivor of the Nine-Tails attack",
      "Kind-hearted and understanding",
      "Helps Naruto graduate from the Academy"
    ],
   image: "./Assate/iruka.jpg"
  },
  {
    name: ["Zabuza"],
    hints: [
      "Demon of the Hidden Mist",
      "Carries a massive sword",
      "Hired as a mercenary",
      "Has a strong bond with Haku",
      "Fights Kakashi during the Land of Waves arc"
    ],
   image: "./Assate/zabuza.jpg"
  },
  {
    name: ["Haku"],
    hints: [
      "Has ice-based kekkei genkai",
      "Assists Zabuza",
      "Seems delicate but is a skilled fighter",
      "Feels a strong loyalty to Zabuza",
      "Has tragic past"
    ],
   image: "./Assate/haku.jpg"
  }
];

//Game
let currentCharacter;
let score = 0;
let highestScore = 0;
let attemptCount = 0;

function startGame() {
  document.getElementById('score').innerText=`Score : ${score}`;
  document.getElementById('message').textContent = "";
  document.getElementById('imageContainer').innerHTML="<div></div>";
  attemptCount = 0;
  const randomIndex = Math.floor(Math.random() * characters.length);
  currentCharacter = characters[randomIndex];
  console.log(currentCharacter);
  document.getElementById('hint').textContent = `Hint 1: ${currentCharacter.hints[0]}`;
}

function checkAnswer() {
  const guess = document.getElementById('guessInput').value.toLowerCase();
  console.log(guess);
  if (currentCharacter.name.some((el)=>(el.toLowerCase()==guess))) {
    document.getElementById("start").innerText="Continue Playing";
    score += (25 - (attemptCount * 5));
    highestScore=Math.max(highestScore,score);
    document.getElementById('high-score').innerText=`Highest Score : ${highestScore}`;
    document.getElementById('score').innerText=`Score : ${score}`;
    document.getElementById('message').textContent = "Congratulations! You guessed it right!";
    const characterImage = document.createElement("img");
    characterImage.src = currentCharacter.image;
    document.getElementById('imageContainer').appendChild(characterImage);
    document.getElementById('hint').textContent='';
  } else {
    attemptCount++;
    if (attemptCount >= 5) {
      document.getElementById('message').textContent = `Sorry! You've run out of attempts. The correct answer is ${currentCharacter.name[0]}`;
      highestScore=Math.max(highestScore,score);
      score=0;
      document.getElementById('score').innerText=`Score : ${score}`;
      document.getElementById('high-score').innerText=`Highest Score : ${highestScore}`;
      document.getElementById("start").innerText="Start Game";
      document.getElementById('hint').textContent='';
    } else {
      const hintNumber = attemptCount + 1;
      document.getElementById('hint').textContent = `Hint ${hintNumber}: ${currentCharacter.hints[hintNumber - 1]}`;
      document.getElementById('message').textContent = "Wrong answer! Try again.";
    }
  }
  document.getElementById('guessInput').value = '';
}
