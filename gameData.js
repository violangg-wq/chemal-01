// 15 chair personalities
const personalities = {
  "BKF Armchair":0, "Eames Lounge Chair":0, "Barcelona Chair":0, "Coconut Chair":0,
  "Egg Armchair":0, "LCW Chair":0, "Eames Plastic Armchair DAW":0, "Eames Plastic Side Chair DSW":0,
  "Panton Chair":0, "Wassily Chair":0, "Tulip Chair":0, "Wishbone Chair":0,
  "CH07 Shell Chair":0, "Cesca Chair":0, "Red and Blue Chair":0
};

// 15 questions
const gameData = {
  "1": {
    "text": "1. What describes your style?",
    "choices": {
      "Bold and artistic": [2, ["Red and Blue Chair","Panton Chair"]],
      "Minimalist and sleek": [2, ["Barcelona Chair","Tulip Chair"]],
      "Classic and cozy": [2, ["Eames Lounge Chair","Coconut Chair"]]
    }
  },
  "2": {
    "text": "2. How do you like to relax?",
    "choices": {
      "Lounging comfortably": [3, ["Eames Lounge Chair","BKF Armchair"]],
      "Casually sitting with friends": [3, ["Coconut Chair","Wishbone Chair"]],
      "Perched elegantly": [3, ["Tulip Chair","CH07 Shell Chair"]]
    }
  },
  "3": {
    "text": "3. Your dream workspace chair is:",
    "choices": {
      "Modern and functional": [4, ["LCW Chair","Eames Plastic Side Chair DSW"]],
      "Iconic and eye-catching": [4, ["Panton Chair","Red and Blue Chair"]],
      "Comfortable and classic": [4, ["Egg Armchair","Coconut Chair"]]
    }
  },
  "4": { "text": "4. Favorite design era?", "choices": {
      "Mid-century modern": [5, ["Eames Lounge Chair","LCW Chair","Barcelona Chair"]],
      "Contemporary": [5, ["Tulip Chair","Red and Blue Chair","Panton Chair"]],
      "Scandinavian": [5, ["CH07 Shell Chair","Wishbone Chair","Egg Armchair"]]
    }
  },
  "5": { "text": "5. How do you entertain guests?", "choices": {
      "Host a stylish dinner": [6, ["Tulip Chair","Barcelona Chair"]],
      "Casual lounging": [6, ["Coconut Chair","BKF Armchair"]],
      "Creative gathering": [6, ["Red and Blue Chair","Panton Chair"]]
    }
  },
  "6": { "text": "6. Pick a material you love:", "choices": {
      "Leather": [7, ["Eames Lounge Chair","Egg Armchair"]],
      "Plastic": [7, ["Panton Chair","Eames Plastic Armchair DAW"]],
      "Wood": [7, ["Wishbone Chair","CH07 Shell Chair"]]
    }
  },
  "7": { "text": "7. Favorite room in the house?", "choices": {
      "Living room": [8, ["Eames Lounge Chair","Coconut Chair"]],
      "Office": [8, ["LCW Chair","Eames Plastic Side Chair DSW"]],
      "Dining room": [8, ["Tulip Chair","Wishbone Chair"]]
    }
  },
  "8": { "text": "8. Preferred color scheme?", "choices": {
      "Bold primary colors": [9, ["Red and Blue Chair","Panton Chair"]],
      "Neutral and warm": [9, ["Eames Lounge Chair","Coconut Chair"]],
      "Natural wood tones": [9, ["CH07 Shell Chair","Wishbone Chair"]]
    }
  },
  "9": { "text": "9. Pick a statement piece:", "choices": {
      "Sculptural and iconic": [10, ["Panton Chair","Tulip Chair"]],
      "Classic and elegant": [10, ["Barcelona Chair","Eames Lounge Chair"]],
      "Casual and inviting": [10, ["BKF Armchair","Coconut Chair"]]
    }
  },
  "10": { "text": "10. Work style?", "choices": {
      "Creative and free": [11, ["Red and Blue Chair","Panton Chair"]],
      "Structured and precise": [11, ["LCW Chair","Barcelona Chair"]],
      "Relaxed and balanced": [11, ["Egg Armchair","Coconut Chair"]]
    }
  },
  "11": { "text": "11. Your dream party chair:", "choices": {
      "Conversation starter": [12, ["Red and Blue Chair","Panton Chair"]],
      "Elegant and comfortable": [12, ["Eames Lounge Chair","Barcelona Chair"]],
      "Simple and functional": [12, ["LCW Chair","CH07 Shell Chair"]]
    }
  },
  "12": { "text": "12. Ideal vacation seating?", "choices": {
      "Lounging in style": [13, ["Eames Lounge Chair","Egg Armchair"]],
      "Outdoor relaxation": [13, ["BKF Armchair","Coconut Chair"]],
      "Design exhibition": [13, ["Red and Blue Chair","Panton Chair"]]
    }
  },
  "13": { "text": "13. How do you handle work challenges?", "choices": {
      "Think creatively": [14, ["Red and Blue Chair","Panton Chair"]],
      "Analyze methodically": [14, ["LCW Chair","Barcelona Chair"]],
      "Seek collaboration": [14, ["Wishbone Chair","CH07 Shell Chair"]]
    }
  },
  "14": { "text": "14. Morning routine?", "choices": {
      "Quick and energetic": [15, ["Tulip Chair","Red and Blue Chair"]],
      "Slow and deliberate": [15, ["Eames Lounge Chair","LCW Chair"]],
      "Relaxed and social": [15, ["Coconut Chair","Wishbone Chair"]]
    }
  },
  "15": { "text": "15. Your design philosophy?", "choices": {
      "Bold and iconic": [0, ["Red and Blue Chair","Panton Chair"]],
      "Functional and timeless": [0, ["Eames Lounge Chair","Barcelona Chair"]],
      "Warm and natural": [0, ["Coconut Chair","Wishbone Chair"]]
    }
  },
  "0": {} // End state
};
