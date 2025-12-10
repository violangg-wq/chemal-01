

document.addEventListener('DOMContentLoaded', () => {
  let currentState = 1;

  const startBtn = document.getElementById('start-button');
  const landing = document.getElementById('landing-page');
  const game = document.getElementById('game-container');
  const storyText = document.getElementById('story-text');
  const choicesContainer = document.getElementById('choices');
  const result = document.getElementById('result');

  const personalities = {
    "BKF Armchair":0, "Eames Lounge Chair":0, "Barcelona Chair":0, "Coconut Chair":0,
    "Egg Armchair":0, "LCW Chair":0, "Eames Plastic Armchair DAW":0, "Eames Plastic Side Chair DSW":0,
    "Panton Chair":0, "Wassily Chair":0, "Tulip Chair":0, "Wishbone Chair":0,
    "CH07 Shell Chair":0, "Cesca Chair":0, "Red and Blue Chair":0
  };

  // Hide quiz initially
  game.style.display = 'none';

  // Start button
  startBtn.addEventListener('click', () => {
    landing.style.display = 'none';
    game.style.display = 'block';
    renderState(currentState);
  });

  function renderState(state) {
    const q = gameData[state];
    storyText.textContent = q.text;
    choicesContainer.innerHTML = '';
    result.style.display = 'none';
    choicesContainer.style.display = 'block';

    Object.entries(q.choices).forEach(([choiceText, [nextState, chairs]]) => {
      const btn = document.createElement('button');
      btn.className = 'choice-button';
      btn.textContent = choiceText;
      btn.onclick = () => changeState(nextState, chairs);
      choicesContainer.appendChild(btn);
    });
  }

  function changeState(nextState, chairs) {
    chairs.forEach(chair => personalities[chair]++);
    currentState = nextState;

    if (currentState === 0) {
      showResult();
    } else {
      renderState(currentState);
    }
  }

  function showResult() {
    choicesContainer.style.display = 'none';
    storyText.textContent = '';
    result.style.display = 'block';

    let maxCount = 0;
    let maxChair = '';
    for (const [chair, count] of Object.entries(personalities)) {
      if (count > maxCount) { maxCount = count; maxChair = chair; }
    }

    result.textContent = `Your chair personality is: ${maxChair}!`;
  }
});
