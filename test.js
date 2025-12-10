// This file is the engine that makes the quiz run.
// Loads the first question
// Updates the screen with story-text and choices
// Detects which choice you click
// Moves to the next question
// Tracks chosen chairs
// Shows a final result

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

  const chairDescriptions = {
    "BKF Armchair": "You are adventurous yet relaxed. You find comfort in unconventional paths and enjoy taking life lightly while exploring boldly.",
    "Eames Lounge Chair": "Classic and sophisticated, you value elegance and thoughtful choices. You bring calm and reassurance to your garden.",
    "Barcelona Chair": "Timeless and iconic, you stand as a pillar of balance and wisdom. Your presence inspires respect in all tiny bean affairs.",
    "Coconut Chair": "Comfortable and natural, you embrace warmth and simplicity. You nurture those around you, finding joy in small moments.",
    "Egg Armchair": "Protective and introspective, you like cozy corners and reflective thinking. You observe before acting.",
    "LCW Chair": "Practical and thoughtful, you balance curiosity with caution. You learn from your surroundings and act deliberately.",
    "Eames Plastic Armchair DAW": "Playful and versatile, you adapt easily to change. You enjoy connecting with different beans.",
    "Eames Plastic Side Chair DSW": "Friendly and approachable, you bring lighthearted energy wherever you go.",
    "Panton Chair": "Bold and iconic, you embrace daring choices and vivid experiences. Life is an adventure for you.",
    "Wassily Chair": "Modern and analytical, you value design and innovation. You carefully assess situations.",
    "Tulip Chair": "Elegant and serene, you create harmony around you. You inspire calm in fellow beans.",
    "Wishbone Chair": "Gentle and supportive, you cultivate connections and stability. You cherish friendships deeply.",
    "CH07 Shell Chair": "Minimalist and observant, you prefer simplicity and clarity. You act only when it truly matters.",
    "Cesca Chair": "Balanced and practical, you combine tradition with creativity. You adapt wisely.",
    "Red and Blue Chair": "Fearless and expressive, you embrace bold choices and unforgettable adventures. You inspire others with confidence."
  };

  const gameData = {
    "1": { "text": "Doom whispers through the garden — the wind carries rumors of strange events in the world beyond. As a tiny bean, what do you do?",
      "choices": {
        "Quietly prepare your little patch “just in case.”": [2, ["Coconut Chair", "BKF Armchair"]],
        "Shrug it off — today is just another day in the soil.": [2, ["LCW Chair", "Wishbone Chair"]],
        "Observe and ask questions — learn what the whispers might mean.": [2, ["Red and Blue Chair", "Panton Chair"]]
      }
    },
    "2": { "text": "A lost outsider bean arrives, trembling, claiming it’s from a far-off land. How do you respond?",
      "choices": {
        "Welcome them, show them your patch, and try to help.": [3, ["Coconut Chair", "Wishbone Chair"]],
        "Guide them gently to a safe corner but stay cautious.": [3, ["Eames Lounge Chair", "Egg Armchair"]],
        "Ignore them — strangers bring unknown trouble.": [3, ["Tulip Chair", "CH07 Shell Chair"]]
      }
    },
    "3": { "text": "They reveal a magical scroll showing possible futures. What do you do?",
      "choices": {
        "Demand to read it — maybe you can steer things toward safety.": [4, ["Red and Blue Chair", "Panton Chair"]],
        "Keep it secret and observe — curiosity first, action later.": [4, ["Eames Lounge Chair", "Barcelona Chair"]],
        "Hide or destroy it — some things are too powerful to touch.": [4, ["LCW Chair", "CH07 Shell Chair"]]
      }
    },
    "4": { "text": "They want to explore your tiny garden. How do you act?",
      "choices": {
        "Share everything with delight — the world is new for them.": [5, ["Red and Blue Chair", "Panton Chair"]],
        "Keep it calm — some paths are tricky or fragile.": [5, ["Tulip Chair", "Barcelona Chair"]],
        "Watch from a distance — maybe exposure is risky.": [5, ["Coconut Chair", "BKF Armchair"]]
      }
    },
    "5": { "text": "You notice small injustices among your neighboring sprouts. Do you intervene?",
      "choices": {
        "Act carefully, using insight to help where you can.": [6, ["Eames Lounge Chair", "Egg Armchair"]],
        "Let things unfold — sometimes interference causes harm.": [6, ["LCW Chair", "Wishbone Chair"]],
        "Focus on your own patch — growth is your priority.": [6, ["Red and Blue Chair", "Panton Chair"]]
      }
    },
    "6": { "text": "The outsider becomes ill, unfamiliar with your soil. What is your choice?",
      "choices": {
        "Help tend to them, even if it’s risky.": [7, ["Coconut Chair", "CH07 Shell Chair"]],
        "Hesitate, weighing the consequences of action.": [7, ["LCW Chair", "Barcelona Chair"]],
        "Step back — the soil has its natural order.": [7, ["Red and Blue Chair", "Panton Chair"]]
      }
    },
    "7": { "text": "Rumors of danger reach your corner: some sprouts may be hurt by meddling. What’s your stance?",
      "choices": {
        "Find subtle ways to help without using the scroll.": [8, ["Eames Lounge Chair", "Egg Armchair"]],
        "Step aside — you don’t control everything.": [8, ["Tulip Chair", "CH07 Shell Chair"]],
        "Take one bold action — hope it leads to better outcomes.": [8, ["Red and Blue Chair", "Panton Chair"]]
      }
    },
    "8": { "text": "You must choose: trust the scroll to alter events, or let life unfold?",
      "choices": {
        "Hold it, trying to make a difference.": [0, ["Red and Blue Chair", "Panton Chair"]],
        "Release it — accept uncertainty and stay present.": [0, ["Coconut Chair", "Wishbone Chair"]],
        "Hide it — let the world decide later.": [0, ["LCW Chair", "Barcelona Chair"]]
      }
    },
    "0": {} // End
  };

  // Hide quiz initially
  game.style.display = 'none';

  startBtn.addEventListener('click', () => {
    landing.style.display = 'none';
    game.style.display = 'block';
    renderState(currentState);
  });

  function renderState(state) {
    const q = gameData[state];
    if (!q) return;

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

    const maxCount = Math.max(...Object.values(personalities));
    const topChairs = Object.entries(personalities)
      .filter(([chair, count]) => count === maxCount)
      .map(([chair]) => chair);

    const maxChair = topChairs[Math.floor(Math.random() * topChairs.length)];
    const description = chairDescriptions[maxChair];

    // Show bean sitting on chair with personality
    result.innerHTML = `
      You, the little bean, are now sitting on a <strong>${maxChair}</strong>!<br><br>
      ${description}
    `;
  }
});
