let currentState = 1;

function renderState(state) {
  const storyText = document.getElementById('story-text');
  const choicesContainer = document.getElementById('choices');
  const result = document.getElementById('result');

  result.style.display = 'none';
  choicesContainer.style.display = 'block';
  storyText.textContent = gameData[state].text;
  choicesContainer.innerHTML = '';

  for (const [choice, info] of Object.entries(gameData[state].choices)) {
    const button = document.createElement('button');
    button.textContent = choice;
    button.className = 'choice-button';
    button.onclick = () => changeState(info[0], info[1]);
    choicesContainer.appendChild(button);
  }
}

function changeState(newState, selectedChairs) {
  selectedChairs.forEach(chair => { personalities[chair]++; });
  currentState = newState;
  if (currentState === 0) {
    revealMostSelectedChair();
  } else {
    renderState(currentState);
  }
}

function revealMostSelectedChair() {
  const storyText = document.getElementById('story-text');
  const choicesContainer = document.getElementById('choices');
  const result = document.getElementById('result');

  let maxCount = 0;
  let maxChair = '';
  for (const [chair, count] of Object.entries(personalities)) {
    if (count > maxCount) {
      maxCount = count;
      maxChair = chair;
    }
  }

  storyText.textContent = '';
  choicesContainer.style.display = 'none';
  result.style.display = 'block';
  result.textContent = `Your chair personality is: ${maxChair}!`;
}

window.onload = () => {
  document.getElementById('game-container').style.display = 'block';
  renderState(currentState);
};

