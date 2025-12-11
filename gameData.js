// ------------------------------------------------------------
// MBTI TRAITS FOR EACH CHAIR (used for score calculation)
// ------------------------------------------------------------
const beanMBTItraits = {
  "BKF Armchair": "INFP",
  "Eames Lounge Chair": "ISFJ",
  "Barcelona Chair": "INTJ",
  "Coconut Chair": "ISFP",
  "Egg Armchair": "INFJ",
  "LCW Chair": "ISTP",
  "Eames Plastic Armchair DAW": "ENFP",
  "Eames Plastic Side Chair DSW": "ESFP",
  "Panton Chair": "ESTP",
  "Wassily Chair": "INTP",
  "Tulip Chair": "ESFJ",
  "Wishbone Chair": "ENFJ",
  "CH07 Shell Chair": "ISTJ",
  "Cesca Chair": "ESTJ",
  "Red and Blue Chair": "ENTP",
  "Jean Prouvé Standard Chair": "ENTJ"
};


// ------------------------------------------------------------
// RESULTS DETAILS FOR EACH CHAIR
// ------------------------------------------------------------
const chairDescriptions = {

  "BKF Armchair": {
    beanTale: "A wandering dream-bean who drifts through soft breezes, seeing poetry in dust motes.",
    coreStrengths: "Imaginative, gentle, values meaning",
    badDateOnceSaid: "Got lost in feelings for 4 hours.",
    littleBeanBrain: "Believes every leaf has a secret destiny.",
    behaveWithOthers: "Warm but shy, expresses care quietly.",
    beanApprovedMaterials: "Soft leather, airy fabrics"
  },

  "Coconut Chair": {
    beanTale: "A relaxed little blossom-bean lounging in patches of sun, oozing aesthetic calm.",
    coreStrengths: "Artistic, authentic, sensory-aware",
    badDateOnceSaid: "Drifted off to admire a cloud mid-conversation.",
    littleBeanBrain: "Operates on vibes, textures, and color palettes.",
    behaveWithOthers: "Gentle, expressive, soothing presence.",
    beanApprovedMaterials: "Rattan, natural fibers"
  },

  "Egg Armchair": {
    beanTale: "A cozy nest-bean who watches the world with quiet, soulful insight.",
    coreStrengths: "Empathic, intuitive, protective",
    badDateOnceSaid: "Looked into my soul without asking.",
    littleBeanBrain: "Thinks in metaphors and emotional maps.",
    behaveWithOthers: "Supportive sage-bean, sees deeper truths.",
    beanApprovedMaterials: "Wool, soft upholstery"
  },

  "Tulip Chair": {
    beanTale: "A harmony-seeking blossom-bean arranging everyone into peaceful circles.",
    coreStrengths: "Caring, orderly, community-minded",
    badDateOnceSaid: "Knows everyone’s drama AND keeps it organized.",
    littleBeanBrain: "Runs on kindness, routines, and social pollen.",
    behaveWithOthers: "Friendly host-bean, always making others comfy.",
    beanApprovedMaterials: "Smooth plastics, soft pastels"
  },

  "Wassily Chair": {
    beanTale: "A philosophical wander-bean lost in brilliant spirals of thought.",
    coreStrengths: "Analytical, curious, inventive",
    badDateOnceSaid: "Forgot the date while thinking about bean-gravity.",
    littleBeanBrain: "Lives in theoretical realms and curly question marks.",
    behaveWithOthers: "Detached but kind, loves odd conversations.",
    beanApprovedMaterials: "Metal frames, clean lines"
  },

  "LCW Chair": {
    beanTale: "A practical lil’ tinker-bean who disassembles problems for fun.",
    coreStrengths: "Hands-on, observant, adaptable",
    badDateOnceSaid: "Fixed the table mid-date instead of flirting.",
    littleBeanBrain: "Works through logic, experiments, and quiet clarity.",
    behaveWithOthers: "Calm, steady, surprisingly funny.",
    beanApprovedMaterials: "Plywood, metal, minimalist shapes"
  },

  "Barcelona Chair": {
    beanTale: "A mastermind bean plotting quiet empires of elegance.",
    coreStrengths: "Strategic, visionary, determined",
    badDateOnceSaid: "Over-analyzed my entire personality.",
    littleBeanBrain: "Operates with long-term plans and sharpened insight.",
    behaveWithOthers: "Direct, competent, sometimes intimidating.",
    beanApprovedMaterials: "Steel, structured leather"
  },

  "CH07 Shell Chair": {
    beanTale: "A responsible order-bean keeping the garden’s chaos at 0%.",
    coreStrengths: "Reliable, structured, consistent",
    badDateOnceSaid: "Color-coded our entire conversation.",
    littleBeanBrain: "Runs on duty, lists, and internal rulebooks.",
    behaveWithOthers: "Grounding presence, keeps everything working.",
    beanApprovedMaterials: "Clean wood, precise curves"
  },

  "Eames Plastic Armchair DAW": {
    beanTale: "A spark-bean overflowing with imagination and mini adventures.",
    coreStrengths: "Enthusiastic, inventive, expressive",
    badDateOnceSaid: "Started eight conversations at once.",
    littleBeanBrain: "A glowing pinball of creative inspiration.",
    behaveWithOthers: "Friendly, bubbly, contagious optimism.",
    beanApprovedMaterials: "Colorful plastics, funky patterns"
  },

  "Eames Plastic Side Chair DSW": {
    beanTale: "A party-bean who believes every leaf is a dance floor.",
    coreStrengths: "Lively, charismatic, fun-driven",
    badDateOnceSaid: "Sparkled too brightly for indoor spaces.",
    littleBeanBrain: "Thinks in movement, sound, and excitement.",
    behaveWithOthers: "Social butterfly-bean, pure sunshine.",
    beanApprovedMaterials: "Bright colors, playful fabrics"
  },

  "Wishbone Chair": {
    beanTale: "A guiding vine-bean who uplifts every sprout around them.",
    coreStrengths: "Encouraging, warm, inspiring",
    badDateOnceSaid: "Turned the date into a motivational speech.",
    littleBeanBrain: "Thinks about potential, cooperation, and growth.",
    behaveWithOthers: "Supportive leader-bean, unity-oriented.",
    beanApprovedMaterials: "Curved wood, soft woven fibers"
  },

  "Cesca Chair": {
    beanTale: "A structured caretaker-bean keeping every social root connected.",
    coreStrengths: "Organized, sociable, dependable",
    badDateOnceSaid: "Made a schedule for future arguments.",
    littleBeanBrain: "Runs on tradition, fairness, community.",
    behaveWithOthers: "Polished, attentive, good with groups.",
    beanApprovedMaterials: "Cane weave, steel tubing"
  },

  "Red and Blue Chair": {
    beanTale: "A chaos-star bean bouncing between ideas like fireworks.",
    coreStrengths: "Curious, inventive, lively",
    badDateOnceSaid: "Argued with a cloud for fun.",
    littleBeanBrain: "Lives for novelty, theories, and bold experiments.",
    behaveWithOthers: "Charming troublemaker-bean.",
    beanApprovedMaterials: "Primary colors, bold geometry"
  },

  "Panton Chair": {
    beanTale: "A thrill-bean surfing the waves of spontaneous choices.",
    coreStrengths: "Bold, adaptable, fearless",
    badDateOnceSaid: "Jumped off a log ‘for the plot’.",
    littleBeanBrain: "Acts first, thinks while mid-air.",
    behaveWithOthers: "Daring, magnetic, unpredictable.",
    beanApprovedMaterials: "Smooth curves, glossy finishes"
  },

  "Eames Lounge Chair": {
    beanTale: "A commanding executive-bean who organizes the garden with calm authority.",
    coreStrengths: "Efficient, decisive, leadership-minded",
    badDateOnceSaid: "Tried to optimize my personality.",
    littleBeanBrain: "Thinks in systems, outcomes, and improvements.",
    behaveWithOthers: "Confident, structured, takes charge.",
    beanApprovedMaterials: "Walnut, leather, classic finishes"
  },

  "Jean Prouvé Standard Chair": {
    beanTale: "A powerhouse builder-bean who turns vision into reality.",
    coreStrengths: "Ambitious, strategic, driven",
    badDateOnceSaid: "Scheduled a five-year plan for us.",
    littleBeanBrain: "Thinks in blueprints, efficiency, and hard truths.",
    behaveWithOthers: "Commanding but fair, results-focused.",
    beanApprovedMaterials: "Steel, oak, industrial strength"
  }

};


const gameData = {

  questions: [

  // 1 -------------------------
  {
    id: 1,
    text: "Doom whispers through the garden, the wind carries rumors of strange events beyond. As a tiny bean, what do you do?",
    choices: [
      { text: "Sneak off and hoard beans + toilet paper. Just in case.", mbti: "ISTJ" },
      { text: "Shrug it off — today feels normal enough.", mbti: "STP" },
      { text: "Waddle around & be a nosy lil' bean to find out more!", mbti: "ENP" }
    ]
  },

  // 2 -------------------------
  {
    id: 2,
    text: "A panicked outsider bean tumbles in, claiming its homeland has fallen to the Refried Rumble. What do you do?",
    choices: [
      { text: "Welcome the lil’ bean warmly, maybe share a snack.", mbti: "EFP" },
      { text: "Guide them gently to safety but stay cautious.", mbti: "IFJ" },
      { text: "Ignore them — strangers bring unknown trouble.", mbti: "ITJ" }
    ]
  },

  // 3 -------------------------
  {
    id: 3,
    text: "The outsider reveals a sparkly magic scroll predicting future bean-chaos. What do you do?",
    choices: [
      { text: "Demand to read it — maybe you can steer things toward safety.", mbti: "ENTP" },
      { text: "Keep it secret & observe — curiosity before action.", mbti: "INTJ" },
      { text: "Bury it or burn it! Too spicy for any bean to hold!", mbti: "STJ" }
    ]
  },

  // 4 -------------------------
  {
    id: 4,
    text: "They ask to wander through your tiny bean garden. How do you react?",
    choices: [
      { text: "Show them EVERYTHING — it’s all new to them!", mbti: "ENP" },
      { text: "Guide them gently; some spots are fragile.", mbti: "FJ" },
      { text: "Keep your distance — you’re unsure what they might do.", mbti: "IST" }
    ]
  },

  // 5 -------------------------
  {
    id: 5,
    text: "You notice small injustices between neighboring sprouts. Do you intervene?",
    choices: [
      { text: "Act carefully, helping where you can.", mbti: "FJ" },
      { text: "Let things unfold — interference can backfire.", mbti: "SP" },
      { text: "Focus on your own patch — growth starts at home.", mbti: "TP" }
    ]
  },

  // 6 -------------------------
  {
    id: 6,
    text: "The outsider bean grows sick in your unfamiliar soil. What now?",
    choices: [
      { text: "Care for them even if it puts you at risk.", mbti: "FJI" },
      { text: "Hesitate — weigh the consequences carefully.", mbti: "TJI" },
      { text: "Hold back — the garden already has enough to handle.", mbti: "TPE" }
    ]
  },

  // 7 -------------------------
  {
    id: 7,
    text: "Rumors spread: some sprouts might get hurt by meddling. What’s your stance?",
    choices: [
      { text: "Find subtle, gentle ways to help.", mbti: "FJI" },
      { text: "Step aside — you can’t control everything.", mbti: "STJ" },
      { text: "Take one bold action and hope for the best.", mbti: "ENP" }
    ]
  },

  // 8 -------------------------
  {
    id: 8,
    text: "You must decide: use the scroll to change events, or let life unfold?",
    choices: [
      { text: "Use it — power exists to be used!", mbti: "ENTJ" },
      { text: "Release it — accept uncertainty and trust the soil.", mbti: "FP" },
      { text: "Hide it — let future beans decide.", mbti: "IJ" }
    ]
  },

  // 9 -------------------------
  {
    id: 9,
    text: "Night falls. What matters most in your tiny bean existence?",
    choices: [
      { text: "Moments shared with fellow sprouts.", mbti: "FE" },
      { text: "Lessons about courage, curiosity, and growth.", mbti: "NJ" },
      { text: "Quiet stability — the rhythm of daily soil life.", mbti: "SP" }
    ]
  },

  // 10 -------------------------
  {
    id: 10,
    text: "A storm passes, leaving your patch in disarray. What do you do?",
    choices: [
      { text: "Rebuild it — stronger than before!", mbti: "JS" },
      { text: "Fix it carefully, honoring what survived.", mbti: "ISF" },
      { text: "Observe & learn — nature always teaches.", mbti: "NP" }
    ]
  },

  // 11 -------------------------
  {
    id: 11,
    text: "You encounter a wise wandering bean from distant lands. Do you…",
    choices: [
      { text: "Share your insights; form a bond.", mbti: "EF" },
      { text: "Listen respectfully but act independently.", mbti: "ITJ" },
      { text: "Avoid entanglement — every path has risks.", mbti: "TP" }
    ]
  },

  // 12 -------------------------
  {
    id: 12,
    text: "A soft breeze brings scents of unknown lands.",
    choices: [
      { text: "Venture outward — adventure calls!", mbti: "ENP" },
      { text: "Stay in familiar soil, appreciating what you know.", mbti: "ISJ" },
      { text: "Watch silently — observation is its own wisdom.", mbti: "ITP" }
    ]
  },

  // 13 -------------------------
  {
    id: 13,
    text: "You realize even small actions ripple outward.",
    choices: [
      { text: "Act mindfully — each bean-choice matters.", mbti: "FJ" },
      { text: "Avoid meddling — unseen consequences abound.", mbti: "ISP" },
      { text: "Experiment gently — tiny trials shape growth.", mbti: "NP" }
    ]
  },

  // 14 -------------------------
  {
    id: 14,
    text: "Your outsider friend finally asks: what's your bean philosophy?",
    choices: [
      { text: "Life is tiny bold actions!", mbti: "ENP" },
      { text: "Life is patience, balance, softness.", mbti: "FSJ" },
      { text: "Life is observing, learning, and choosing wisely.", mbti: "ITJ" }
    ]
  },

  // 15 -------------------------
  {
    id: 15,
    text: "Dawn breaks. You awaken as the same tiny bean. How do you live today?",
    choices: [
      { text: "Bold & adventurous — reaching toward the sun.", mbti: "ENP" },
      { text: "Steady & gentle — nurturing sprouts around you.", mbti: "FSJ" },
      { text: "Thoughtful & watchful — accepting the garden as it comes.", mbti: "ITJ" }
    ]
  }

],


  results: {}
};


// ------------------------------------------------------------
// Auto-build RESULTS from description + MBTI
// ------------------------------------------------------------
Object.keys(chairDescriptions).forEach(chair => {
  gameData.results[chair] = {
    name: chair,
    mbti: beanMBTItraits[chair],
    image: "images/" + chair + ".png",
    tale: chairDescriptions[chair].beanTale,
    strengths: chairDescriptions[chair].coreStrengths,
    ex: chairDescriptions[chair].badDateOnceSaid,
    brain: chairDescriptions[chair].littleBeanBrain,
    social: chairDescriptions[chair].behaveWithOthers,
    materials: chairDescriptions[chair].beanApprovedMaterials
  };
});