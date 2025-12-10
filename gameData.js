// 15 chair personalities
const personalities = {
  "BKF Armchair": 0, "Eames Lounge Chair": 0, "Barcelona Chair": 0, "Coconut Chair": 0,
  "Egg Armchair": 0, "LCW Chair": 0, "Eames Plastic Armchair DAW": 0, "Eames Plastic Side Chair DSW": 0,
  "Panton Chair": 0, "Wassily Chair": 0, "Tulip Chair": 0, "Wishbone Chair": 0,
  "CH07 Shell Chair": 0, "Cesca Chair": 0, "Red and Blue Chair": 0
};

// 15 Questions - Branching (some skip depending on choice)
const gameData = {
  "1": { "text": "1. What describes your style?", "choices": {
      "Bold and artistic": [2, ["Red and Blue Chair", "Panton Chair"]],
      "Minimalist and sleek": [2, ["Barcelona Chair", "Tulip Chair"]],
      "Classic and cozy": [2, ["Eames Lounge Chair", "Coconut Chair"]]
    }
  },

  "2": { "text": "2. How do you like to relax?", "choices": {
      "Lounging comfortably": [3, ["Eames Lounge Chair", "BKF Armchair"]],
      "Casually sitting with friends": [3, ["Coconut Chair", "Wishbone Chair"]],
      "Perched elegantly": [4, ["Tulip Chair", "CH07 Shell Chair"]]  // skip Q3
    }
  },

  "3": { "text": "3. Your dream workspace chair is:", "choices": {
      "Modern and functional": [5, ["LCW Chair", "Eames Plastic Side Chair DSW"]],
      "Iconic and eye-catching": [5, ["Panton Chair", "Red and Blue Chair"]],
      "Comfortable and classic": [5, ["Egg Armchair", "Coconut Chair"]]
    }
  },

  "4": { "text": "4. Favorite room in the house?", "choices": {
      "Living room": [5, ["Eames Lounge Chair", "Coconut Chair"]],
      "Office": [5, ["LCW Chair", "Eames Plastic Side Chair DSW"]],
      "Dining room": [5, ["Tulip Chair", "Wishbone Chair"]]
    }
  },

  "5": { "text": "5. Pick a material you love:", "choices": {
      "Leather": [6, ["Eames Lounge Chair", "Egg Armchair"]],
      "Plastic": [7, ["Panton Chair", "Eames Plastic Armchair DAW"]],  // skip Q6
      "Wood": [6, ["Wishbone Chair", "CH07 Shell Chair"]]
    }
  },

  "6": { "text": "6. Preferred color scheme?", "choices": {
      "Bold primary colors": [8, ["Red and Blue Chair", "Panton Chair"]],
      "Neutral and warm": [8, ["Eames Lounge Chair", "Coconut Chair"]],
      "Natural wood tones": [8, ["CH07 Shell Chair", "Wishbone Chair"]]
    }
  },

  "7": { "text": "7. Favorite design era?", "choices": {
      "Mid-century modern": [8, ["Eames Lounge Chair", "LCW Chair", "Barcelona Chair"]],
      "Contemporary": [8, ["Tulip Chair", "Red and Blue Chair", "Panton Chair"]],
      "Scandinavian": [8, ["CH07 Shell Chair", "Wishbone Chair", "Egg Armchair"]]
    }
  },

  "8": { "text": "8. How do you entertain guests?", "choices": {
      "Host a stylish dinner": [9, ["Tulip Chair", "Barcelona Chair"]],
      "Casual lounging": [9, ["Coconut Chair", "BKF Armchair"]],
      "Creative gathering": [10, ["Red and Blue Chair", "Panton Chair"]] // skip Q9
    }
  },

  "9": { "text": "9. Work style?", "choices": {
      "Creative and free": [11, ["Red and Blue Chair", "Panton Chair"]],
      "Structured and precise": [11, ["LCW Chair", "Barcelona Chair"]],
      "Relaxed and balanced": [11, ["Egg Armchair", "Coconut Chair"]]
    }
  },

  "10": { "text": "10. Your dream party chair:", "choices": {
      "Conversation starter": [11, ["Red and Blue Chair", "Panton Chair"]],
      "Elegant and comfortable": [11, ["Eames Lounge Chair", "Barcelona Chair"]],
      "Simple and functional": [11, ["LCW Chair", "CH07 Shell Chair"]]
    }
  },

  "11": { "text": "11. Ideal vacation seating?", "choices": {
      "Lounging in style": [12, ["Eames Lounge Chair", "Egg Armchair"]],
      "Outdoor relaxation": [12, ["BKF Armchair", "Coconut Chair"]],
      "Design exhibition": [13, ["Red and Blue Chair", "Panton Chair"]] // skip Q12
    }
  },

  "12": { "text": "12. Morning routine?", "choices": {
      "Quick and energetic": [13, ["Tulip Chair", "Red and Blue Chair"]],
      "Slow and deliberate": [13, ["Eames Lounge Chair", "LCW Chair"]],
      "Relaxed and social": [13, ["Coconut Chair", "Wishbone Chair"]]
    }
  },

  "13": { "text": "13. Your design philosophy?", "choices": {
      "Bold and iconic": [14, ["Red and Blue Chair", "Panton Chair"]],
      "Functional and timeless": [14, ["Eames Lounge Chair", "Barcelona Chair"]],
      "Warm and natural": [14, ["Coconut Chair", "Wishbone Chair"]]
    }
  },

  "14": { "text": "14. Favorite seating shape?", "choices": {
      "Round and soft": [15, ["Egg Armchair", "Coconut Chair"]],
      "Angular and minimal": [15, ["LCW Chair", "Barcelona Chair"]],
      "Iconic statement": [15, ["Red and Blue Chair", "Panton Chair"]]
    }
  },

  "15": { "text": "15. Final pick?", "choices": {
      "Bold & iconic": [0, ["Red and Blue Chair", "Panton Chair"]],
      "Classic & timeless": [0, ["Eames Lounge Chair", "Barcelona Chair"]],
      "Comfortable & natural": [0, ["Coconut Chair", "Wishbone Chair"]]
    }
  },

  "0": {} // End
};
