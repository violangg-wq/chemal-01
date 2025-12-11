/* ---------------------------------------------------
    MBTI-BASED QUIZ ENGINE
--------------------------------------------------- */

let currentQuestion = 0;

// Score storage for MBTI letters
let mbtiScore = { I:0, E:0, N:0, S:0, F:0, T:0, P:0, J:0 };

// Start button → begin quiz
document.getElementById("start-button").addEventListener("click", () => {
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  loadQuestion();
});

/* ---------------------------------------------------
    LOAD QUESTION
--------------------------------------------------- */
function loadQuestion() {
  const q = gameData.questions[currentQuestion];

  if (!q) {
    console.error("ERROR: Question not found at index", currentQuestion);
    showResult();
    return;
  }

  // TEXT — never cut
  document.getElementById("story-text").innerHTML = q.text;

  // IMAGE
  document.getElementById("question-image").src = q.image;

  // CHOICES
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.classList.add("choice-button");
    btn.innerText = choice.text;

    btn.addEventListener("click", () => {
      applyMBTI(choice.mbti);
      nextStep();
    });

    choicesDiv.appendChild(btn);
  });
}

/* ---------------------------------------------------
    APPLY MBTI LETTERS FROM CHOICE
--------------------------------------------------- */
function applyMBTI(letterString) {
  if (!letterString) return;

  const letters = letterString.split("");

  letters.forEach(l => {
    if (mbtiScore[l] !== undefined) {
      mbtiScore[l]++;
    }
  });
}

/* ---------------------------------------------------
    NEXT QUESTION OR RESULT
--------------------------------------------------- */
function nextStep() {
  currentQuestion++;

  // no more questions → show results
  if (currentQuestion >= gameData.questions.length) {
    showResult();
    return;
  }

  loadQuestion();
}

/* ---------------------------------------------------
    CALCULATE MBTI TYPE
--------------------------------------------------- */
function getFinalMBTI() {
  const IorE = mbtiScore.I >= mbtiScore.E ? "I" : "E";
  const NorS = mbtiScore.N >= mbtiScore.S ? "N" : "S";
  const ForT = mbtiScore.F >= mbtiScore.T ? "F" : "T";
  const PorJ = mbtiScore.P >= mbtiScore.J ? "P" : "J";

  return IorE + NorS + ForT + PorJ;
}

/* ---------------------------------------------------
    MBTI → CHAIR MAP
--------------------------------------------------- */
const mbtiToChair = {
  INFP: "BKF Armchair",
  ISFJ: "Eames Lounge Chair",
  INTJ: "Barcelona Chair",
  ISFP: "Coconut Chair",
  INFJ: "Egg Armchair",
  ISTP: "LCW Chair",
  ENFP: "Eames Plastic Armchair DAW",
  ESFP: "Eames Plastic Side Chair DSW",
  ESTP: "Panton Chair",
  INTP: "Wassily Chair",
  ESFJ: "Tulip Chair",
  ENFJ: "Wishbone Chair",
  ISTJ: "CH07 Shell Chair",
  ESTJ: "Cesca Chair",
  ENTP: "Red and Blue Chair",
  ENTJ: "Jean Prouvé Standard Chair"
};

function showResult() {

  document.getElementById("story-text").style.display = "none";
  document.getElementById("choices").style.display = "none";
  document.querySelector(".question-image-wrapper").style.display = "none";

  document.getElementById("result").style.display = "block";

  const finalType = getFinalMBTI();
  const finalChair = mbtiToChair[finalType];

  // ⭐ INSERT THE CHAIR NAME
  document.getElementById("result-name").innerText = finalChair || "Unknown Bean";

  if (!finalChair) {
    console.error("ERROR: No matching chair for MBTI:", finalType);
    return;
  }

  const bean = gameData.results[finalChair];

  if (!bean) {
    console.error("ERROR: No bean data for chair", finalChair);
    return;
  }

  document.getElementById("result-image").src = bean.image;
  document.getElementById("result-tale").innerText = bean.tale;
  document.getElementById("result-strengths").innerText = bean.strengths;
  document.getElementById("result-ex").innerText = bean.ex;
  document.getElementById("result-brain").innerText = bean.brain;
  document.getElementById("result-social").innerText = bean.social;
  document.getElementById("result-materials").innerText = bean.materials;
}
