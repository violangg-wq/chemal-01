// Story Tree - Questions, Answers, What scene number it goes to next, Which chairs are associated with that choice


// 15 Chair Personalities (hidden)
const personalities = {
  "BKF Armchair": 0, "Eames Lounge Chair": 0, "Barcelona Chair": 0, "Coconut Chair": 0,
  "Egg Armchair": 0, "LCW Chair": 0, "Eames Plastic Armchair DAW": 0, "Eames Plastic Side Chair DSW": 0,
  "Panton Chair": 0, "Wassily Chair": 0, "Tulip Chair": 0, "Wishbone Chair": 0,
  "CH07 Shell Chair": 0, "Cesca Chair": 0, "Red and Blue Chair": 0
};

// Chair personality descriptions
const chairDescriptions = {
  "BKF Armchair": "You are adventurous yet relaxed. You find comfort in unconventional paths and enjoy the art of taking life lightly while still exploring boldly.",
  "Eames Lounge Chair": "Classic and sophisticated, you value elegance and thoughtful choices. You bring calm and reassurance to your garden, guiding others with grace.",
  "Barcelona Chair": "Timeless and iconic, you stand as a pillar of balance and wisdom. Your presence inspires respect and careful consideration in all tiny bean affairs.",
  "Coconut Chair": "Comfortable and natural, you embrace warmth and simplicity. You nurture those around you, finding joy in small, meaningful moments.",
  "Egg Armchair": "Protective and introspective, you like cozy corners and reflective thinking. You observe before acting, ensuring every choice aligns with your values.",
  "LCW Chair": "Practical and thoughtful, you balance curiosity with caution. You learn from your surroundings and make steady, deliberate decisions.",
  "Eames Plastic Armchair DAW": "Playful and versatile, you adapt easily to change. You enjoy connecting with different beans and exploring new corners of life.",
  "Eames Plastic Side Chair DSW": "Friendly and approachable, you bring lighthearted energy wherever you go. You encourage growth in small, joyful ways.",
  "Panton Chair": "Bold and iconic, you embrace daring choices and vivid experiences. Life is an adventure for you, and you dive in with fearless enthusiasm.",
  "Wassily Chair": "Modern and analytical, you value design and innovation. You carefully assess situations, offering clarity and structure to the garden.",
  "Tulip Chair": "Elegant and serene, you create harmony around you. You move gracefully through challenges, inspiring calm in fellow beans.",
  "Wishbone Chair": "Gentle and supportive, you cultivate connections and stability. You find beauty in everyday moments and cherish friendships deeply.",
  "CH07 Shell Chair": "Minimalist and observant, you prefer simplicity and clarity. You watch closely, acting only when it truly matters.",
  "Cesca Chair": "Balanced and practical, you combine tradition with a touch of creativity. You adapt wisely, knowing when to guide and when to step back.",
  "Red and Blue Chair": "Fearless and expressive, you embrace bold choices and unforgettable adventures. You inspire others with your confidence and playful spirit."
};

// Story Bean Questions - branching
const gameData = {
  "1": { "text": "Doom whispers through the garden, the wind carries rumors of strange events in the world beyond. As a tiny bean, what do you do?",
    "choices": {
      "Sneak off and hoard beans and toilet paper. Just in case. ": [2, ["Coconut Chair", "BKF Armchair"]],
      "Shrug it off, today is just another day in the soil.": [2, ["LCW Chair", "Wishbone Chair"]],
      "Waddle around & be a nosy lil’ bean to see what the whispers are all about!": [2, ["Red and Blue Chair", "Panton Chair"]]
    }
  },
  "2": { "text": "A panicked outsider bean tumbles in, saying its homeland has fallen to the Refried Rumble. How do you respond?",
    "choices": {
      "Welcome the lil’ bean, show off your patch, maybe share a snack": [3, ["Coconut Chair", "Wishbone Chair"]],
      "Guide them gently to a safe corner but stay cautious.": [3, ["Eames Lounge Chair", "Egg Armchair"]],
      "Ignore them — strangers bring unknown trouble.": [3, ["Tulip Chair", "CH07 Shell Chair"]]
    }
  },
  "3": { "text": "They pull out a sparkly magic scroll that shows future bean-chaos. What do you do?",
    "choices": {
      "Demand to read it. Maybe you can steer things toward safety.": [4, ["Red and Blue Chair", "Panton Chair"]],
      "Keep it secret and observe. Curiosity first, action later.": [4, ["Eames Lounge Chair", "Barcelona Chair"]],
      "Bury it, burn it! This is too spicy for any bean to hold!": [4, ["LCW Chair", "CH07 Shell Chair"]]
    }
  },
  "4": { "text": "They beg to wander through your teeny-tiny bean garden. How do you react?",
    "choices": {
      "Show them everything. After all it’s all new to this lil’ bean.": [5, ["Red and Blue Chair", "Panton Chair"]],
      "Guide them gently; some spots are wobbly and fragile ": [5, ["Tulip Chair", "Barcelona Chair"]],
      "Keep your distance; you’re unsure what they might do.": [5, ["Coconut Chair", "BKF Armchair"]]
    }
  },
  "5": { "text": "You notice small injustices among your neighboring sprouts. Do you intervene?",
    "choices": {
      "Act carefully, using insight to help where you can.": [6, ["Eames Lounge Chair", "Egg Armchair"]],
      "Let things unfold — sometimes interference causes harm.": [6, ["LCW Chair", "Wishbone Chair"]],
      "Focus on your own patch — growth is your priority.": [6, ["Red and Blue Chair", "Panton Chair"]]
    }
  },
  "6": { "text": "The outsider bean grows sick in this unfamiliar soil. What do you do now?",
    "choices": {
      "Care for the outsider bean, even if it puts you at risk.": [7, ["Coconut Chair", "CH07 Shell Chair"]],
      "Hesitate, weighing the consequences of action.": [7, ["LCW Chair", "Barcelona Chair"]],
      "Hold back, assuming the garden already has all it can handle.": [7, ["Red and Blue Chair", "Panton Chair"]]
    }
  },
  "7": { "text": "Rumors of danger reach your corner: some sprouts may be hurt by meddling. What’s your stance?",
    "choices": {
      "Find subtle ways to help without using the scroll.": [8, ["Eames Lounge Chair", "Egg Armchair"]],
      "Step aside — you can't control everything!": [8, ["Tulip Chair", "CH07 Shell Chair"]],
      "Take one bold action — hope it leads to better outcomes.": [8, ["Red and Blue Chair", "Panton Chair"]]
    }
  },
  "8": { "text": "You must choose: trust the scroll to alter events, or let life unfold?",
    "choices": {
      "Hold it, trying to make a difference.": [9, ["Red and Blue Chair", "Panton Chair"]],
      "Release it — accept uncertainty and stay present.": [9, ["Coconut Chair", "Wishbone Chair"]],
      "Hide it — let the world decide later.": [9, ["LCW Chair", "Barcelona Chair"]]
    }
  },
  "9": { "text": "Night falls, and reflections come: what matters most in your tiny existence?",
    "choices": {
      "Moments shared with fellow sprouts.": [10, ["Eames Lounge Chair", "Egg Armchair"]],
      "Lessons about courage, curiosity, and growth.": [10, ["Tulip Chair", "CH07 Shell Chair"]],
      "Quiet stability, the rhythm of daily life.": [10, ["Red and Blue Chair", "Panton Chair"]]
    }
  },
  "10": { "text": "A storm passes, leaving your patch in disarray. How do you act?",
    "choices": {
      "Rebuild it — make it stronger than before!": [11, ["Coconut Chair", "BKF Armchair"]],
      "Fix carefully, honoring what survived.": [11, ["LCW Chair", "Wishbone Chair"]],
      "Observe and learn from nature — some things are beyond control.": [11, ["Red and Blue Chair", "Panton Chair"]]
    }
  },
  "11": { "text": "You encounter a wise wandering bean who has seen distant lands. Do you:",
    "choices": {
      "Share your insights, forming a bond of understanding.": [12, ["Eames Lounge Chair", "Egg Armchair"]],
      "Listen but act independently.": [12, ["LCW Chair", "Barcelona Chair"]],
      "Avoid entanglement — every path carries risks.": [12, ["Red and Blue Chair", "Panton Chair"]]
    }
  },
  "12": { "text": "A gentle breeze brings the scent of unknown lands. How do you respond?",
    "choices": {
      "Venture outward, curious and bold.": [13, ["Coconut Chair", "Wishbone Chair"]],
      "Stay in familiar soil, appreciating what you know.": [13, ["Eames Lounge Chair", "Barcelona Chair"]],
      "Watch silently, taking lessons from observation.": [13, ["LCW Chair", "CH07 Shell Chair"]]
    }
  },
  "13": { "text": "You notice that even small actions ripple across your patch. What do you do?",
    "choices": {
      "Act mindfully — each choice has weight.": [14, ["Red and Blue Chair", "Panton Chair"]],
      "Avoid meddling — not all consequences can be seen.": [14, ["Coconut Chair", "Egg Armchair"]],
      "Experiment cautiously — growth comes from small trials.": [14, ["LCW Chair", "Barcelona Chair"]]
    }
  },
  "14": { "text": "Your outsider friend asks about your philosophy of being. How do you answer?",
    "choices": {
      "Life is about small, bold actions.": [15, ["Red and Blue Chair", "Panton Chair"]],
      "Life is about patience, balance, and harmony.": [15, ["Coconut Chair", "Wishbone Chair"]],
      "Life is about observing, learning, and choosing wisely.": [15, ["LCW Chair", "CH07 Shell Chair"]]
    }
  },
  "15": { "text": "Dawn breaks: you awaken as the same tiny bean. How do you live today?",
    "choices": {
      "Brave and adventurous, reaching toward the sun.": [0, ["Red and Blue Chair", "Panton Chair"]],
      "Steady and gentle, nurturing sprouts around you.": [0, ["Coconut Chair", "Wishbone Chair"]],
      "Thoughtful and watchful, accepting the garden as it comes.": [0, ["Eames Lounge Chair", "Barcelona Chair"]]
    }
  },
  "0": {} // End
};

// Function to calculate winner
function getWinningChair(scores) {
  let maxScore = -Infinity;
  let winner = '';
  for (let chair in scores) {
    if (scores[chair] > maxScore) {
      maxScore = scores[chair];
      winner = chair;
    }
  }
  return winner;
}

// Example usage at the end of quiz
function showResult() {
  const winner = getWinningChair(personalities);
  const description = chairDescriptions[winner];
  alert(`Your chair personality is: ${winner}\n\n${description}`);
}
