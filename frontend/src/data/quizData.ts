export interface QuizQuestion {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  scripture: string;
  explanation: string;
  category: "Gospels" | "Early Church" | "Old Testament" | "Doctrine & Faith" | "Prophets & Wisdom";
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Early Church",
    question: "On the Day of Pentecost, what did the Apostle Peter tell the inquiring multitude to do for the remission of sins?",
    options: [
      "Say the sinner's prayer and accept Christ silently",
      "Repent and be baptized in the name of Jesus Christ",
      "Fast for three days and make an offering at the temple",
      "Wait for a sign from heaven before doing anything"
    ],
    correctIndex: 1,
    scripture: "Acts 2:38",
    explanation: "Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.'",
  },
  {
    id: 2,
    category: "Old Testament",
    question: "According to the Genesis genealogy, who lived the longest recorded human lifespan at 969 years?",
    options: ["Noah", "Methuselah", "Enoch", "Adam"],
    correctIndex: 1,
    scripture: "Genesis 5:27",
    explanation: "Genesis 5:27 records: 'Altogether, Methuselah lived a total of 969 years, and then he died.' He was the grandfather of Noah.",
  },
  {
    id: 3,
    category: "Doctrine & Faith",
    question: "In Paul's epistle to the Ephesians, how are believers declared to be saved?",
    options: [
      "By our own good deeds alone so that no one may boast",
      "By grace through faith, and this is the gift of God",
      "Through hereditary lineage of our parents",
      "By keeping the dietary laws of Moses"
    ],
    correctIndex: 1,
    scripture: "Ephesians 2:8-9",
    explanation: "Ephesians 2:8-9 teaches: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.'",
  },
  {
    id: 4,
    category: "Gospels",
    question: "Where did Jesus perform His first recorded miracle, turning water into wine?",
    options: [
      "Cana of Galilee",
      "Capernaum",
      "Bethlehem of Judea",
      "Nazareth"
    ],
    correctIndex: 0,
    scripture: "John 2:1-11",
    explanation: "At a wedding in Cana of Galilee, Jesus manifested His glory by turning six stone water jars of water into choice wine at the request of His mother Mary.",
  },
  {
    id: 5,
    category: "Early Church",
    question: "Which noble city's citizens were commended in Acts for searching the Scriptures daily to verify the teachings of Paul and Silas?",
    options: ["The Athenians", "The Bereans", "The Corinthians", "The Thessalonians"],
    correctIndex: 1,
    scripture: "Acts 17:11",
    explanation: "Acts 17:11 states: 'Now the Berean Jews were of more noble character than those in Thessalonica, for they received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true.'",
  },
  {
    id: 6,
    category: "Old Testament",
    question: "How many days and nights did rain fall upon the earth during the great flood in the days of Noah?",
    options: ["7 days and 7 nights", "40 days and 40 nights", "100 days and 100 nights", "150 days and 150 nights"],
    correctIndex: 1,
    scripture: "Genesis 7:12",
    explanation: "Genesis 7:12 records: 'And rain fell on the earth forty days and forty nights.'",
  },
  {
    id: 7,
    category: "Doctrine & Faith",
    question: "In Romans 16:16, how does the Apostle Paul conclude his greeting regarding the congregations?",
    options: [
      "The assemblies of the world greet you",
      "The churches of Christ salute you",
      "The holy councils send their blessings",
      "The saints of Rome bid you farewell"
    ],
    correctIndex: 1,
    scripture: "Romans 16:16",
    explanation: "Romans 16:16: 'Greet one another with a holy kiss. The churches of Christ salute you.'",
  },
  {
    id: 8,
    category: "Prophets & Wisdom",
    question: "According to Proverbs 1:7, what is the beginning of knowledge?",
    options: [
      "The pursuit of worldly wealth",
      "The fear of the LORD",
      "The reading of human philosophies",
      "The age of gray hairs"
    ],
    correctIndex: 1,
    scripture: "Proverbs 1:7",
    explanation: "Proverbs 1:7: 'The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction.'",
  },
  {
    id: 9,
    category: "Gospels",
    question: "What is the shortest verse in the English translation of the Bible?",
    options: [
      "Jesus wept.",
      "Pray without ceasing.",
      "Rejoice evermore.",
      "God is love."
    ],
    correctIndex: 0,
    scripture: "John 11:35",
    explanation: "John 11:35 consists of just two words: 'Jesus wept.' It reveals the deep empathy and compassion of our Lord at the tomb of His friend Lazarus.",
  },
  {
    id: 10,
    category: "Early Church",
    question: "What Ethiopian official was guided by Philip the evangelist through Isaiah 53 and baptized on the road to Gaza?",
    options: [
      "The Roman Centurion Cornelius",
      "The Queen of Sheba's treasurer",
      "A royal eunuch of Candace, Queen of the Ethiopians",
      "A merchant from Alexandria"
    ],
    correctIndex: 2,
    scripture: "Acts 8:26-39",
    explanation: "Philip met the Ethiopian eunuch, a court official in charge of the entire treasury of Candace. Philip preached Jesus to him from Isaiah, and he was baptized in water as they traveled.",
  },
  {
    id: 11,
    category: "Old Testament",
    question: "Which prophet was swallowed by a great fish after fleeing from God's command to preach in Nineveh?",
    options: ["Jeremiah", "Jonah", "Elijah", "Habakkuk"],
    correctIndex: 1,
    scripture: "Jonah 1:17",
    explanation: "Jonah 1:17: 'Now the LORD provided a huge fish to swallow Jonah, and Jonah was in the belly of the fish three days and three nights.'",
  },
  {
    id: 12,
    category: "Doctrine & Faith",
    question: "According to Hebrews 11:1, how is biblical faith defined?",
    options: [
      "A blind guess about things that might happen",
      "Confidence in what we hope for and assurance about what we do not see",
      "An emotional feeling that fluctuates with our circumstances",
      "Agreement with societal majority opinions"
    ],
    correctIndex: 1,
    scripture: "Hebrews 11:1",
    explanation: "Hebrews 11:1: 'Now faith is confidence in what we hope for and assurance about what we do not see.'",
  },
  {
    id: 13,
    category: "Gospels",
    question: "Which disciple famously declared: 'You are the Messiah, the Son of the living God' at Caesarea Philippi?",
    options: ["John", "Simon Peter", "Andrew", "Thomas"],
    correctIndex: 1,
    scripture: "Matthew 16:16",
    explanation: "Simon Peter answered, 'You are the Messiah, the Son of the living God.' Jesus replied that this was revealed to him not by flesh and blood, but by His Father in heaven.",
  },
  {
    id: 14,
    category: "Early Church",
    question: "Who was the first Christian martyr recorded in the New Testament book of Acts?",
    options: ["James the brother of John", "Stephen", "Barnabas", "Philip"],
    correctIndex: 1,
    scripture: "Acts 7:54-60",
    explanation: "Stephen, a man full of God's grace and power, was stoned while praying: 'Lord Jesus, receive my spirit' and 'Lord, do not hold this sin against them.'",
  },
  {
    id: 15,
    category: "Prophets & Wisdom",
    question: "In Psalm 23:1, what comforting truth does King David declare about the LORD?",
    options: [
      "The LORD is my fortress, I shall never weep",
      "The LORD is my shepherd; I lack nothing",
      "The LORD is my judge who condemns the nations",
      "The LORD is my shield against earthly kings"
    ],
    correctIndex: 1,
    scripture: "Psalm 23:1",
    explanation: "David writes in Psalm 23:1: 'The LORD is my shepherd; I lack nothing' (or 'I shall not want').",
  },
  {
    id: 16,
    category: "Old Testament",
    question: "What did Moses see on Mount Horeb that burned with fire yet was not consumed?",
    options: ["A golden altar", "A bush", "A cedar tree", "A stone pillar"],
    correctIndex: 1,
    scripture: "Exodus 3:2",
    explanation: "Exodus 3:2: 'There the angel of the LORD appeared to him in flames of fire from within a bush. Moses saw that though the bush was on fire it did not burn up.'",
  },
  {
    id: 17,
    category: "Doctrine & Faith",
    question: "In 1 Corinthians 13:13, what three virtues remain, and which of them is the greatest?",
    options: [
      "Hope, Zeal, and Wisdom — the greatest is Wisdom",
      "Faith, Hope, and Love — the greatest is Love",
      "Patience, Kindness, and Truth — the greatest is Truth",
      "Power, Righteousness, and Peace — the greatest is Peace"
    ],
    correctIndex: 1,
    scripture: "1 Corinthians 13:13",
    explanation: "1 Corinthians 13:13: 'And now these three remain: faith, hope and love. But the greatest of these is love.'",
  },
  {
    id: 18,
    category: "Gospels",
    question: "In the Sermon on the Mount, what two metaphors does Jesus use for His followers in Matthew 5:13-14?",
    options: [
      "The salt of the earth and the light of the world",
      "The lions of Judah and the eagles of the sky",
      "The gold of the temple and the incense of the altar",
      "The stones of the wall and the timber of the roof"
    ],
    correctIndex: 0,
    scripture: "Matthew 5:13-14",
    explanation: "Jesus told His disciples: 'You are the salt of the earth... You are the light of the world. A town built on a hill cannot be hidden.'",
  },
  {
    id: 19,
    category: "Early Church",
    question: "What Roman centurion in Caesarea, known for giving alms and praying continually, was told by an angel to send for Peter?",
    options: ["Julius", "Cornelius", "Gallio", "Felix"],
    correctIndex: 1,
    scripture: "Acts 10:1-4",
    explanation: "Cornelius was a devout centurion in the Italian Regiment. God heard his prayers and directed him to send for Simon Peter in Joppa, marking the opening of the gospel to the Gentiles.",
  },
  {
    id: 20,
    category: "Old Testament",
    question: "What young shepherd boy defeated the giant Philistine champion Goliath with a sling and a stone?",
    options: ["Jonathan", "David", "Solomon", "Samson"],
    correctIndex: 1,
    scripture: "1 Samuel 17:48-50",
    explanation: "David declared to Goliath: 'You come against me with sword and spear and javelin, but I come against you in the name of the LORD Almighty.' David then struck him down with a single stone.",
  },
  {
    id: 21,
    category: "Doctrine & Faith",
    question: "According to 2 Timothy 3:16-17, how much Scripture is inspired by God?",
    options: [
      "Only the four Gospels",
      "All Scripture is God-breathed and useful for teaching, rebuking, and training",
      "Only the parts that align with personal convenience",
      "Only the Ten Commandments written on stone"
    ],
    correctIndex: 1,
    scripture: "2 Timothy 3:16-17",
    explanation: "Paul wrote: 'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.'",
  },
  {
    id: 22,
    category: "Gospels",
    question: "Who was the tax collector who climbed a sycamore-fig tree in Jericho just to catch a glimpse of Jesus passing by?",
    options: ["Matthew", "Zacchaeus", "Nicodemus", "Bartimaeus"],
    correctIndex: 1,
    scripture: "Luke 19:1-10",
    explanation: "Luke 19:4: 'So he ran ahead and climbed a sycamore-fig tree to see him, since Jesus was coming that way.' Jesus stayed at his house and declared salvation had come to that home.",
  },
  {
    id: 23,
    category: "Early Church",
    question: "In Acts 16, what happened at midnight while Paul and Silas were praying and singing hymns in the Philippian jail?",
    options: [
      "A violent earthquake shook the foundations and all the prison doors flew open",
      "A secret army of disciples broke through the gates",
      "The magistrates felt guilty and came in person to release them",
      "The jail was flooded by a river"
    ],
    correctIndex: 0,
    scripture: "Acts 16:25-34",
    explanation: "A violent earthquake opened all doors and loosed everyone's chains. When the trembling jailer asked, 'What must I do to be saved?', Paul preached the Word, and the jailer and his household were baptized that same night.",
  },
  {
    id: 24,
    category: "Prophets & Wisdom",
    question: "In Isaiah 40:31, what is promised to those who hope in the LORD?",
    options: [
      "They will receive limitless earthly treasure",
      "They will renew their strength and soar on wings like eagles",
      "They will never face any worldly trials or sorrows",
      "They will rule over earthly empires"
    ],
    correctIndex: 1,
    scripture: "Isaiah 40:31",
    explanation: "'Those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.'",
  },
  {
    id: 25,
    category: "Old Testament",
    question: "Which queen courageously approached King Xerxes to save the Jewish people, stating: 'If I perish, I perish'?",
    options: ["Queen Vashti", "Queen Esther", "Queen of Sheba", "Deborah"],
    correctIndex: 1,
    scripture: "Esther 4:14-16",
    explanation: "Esther showed great courage and faith in God's providence, fasting for three days before approaching the king unsummoned for 'such a time as this'.",
  },
  {
    id: 26,
    category: "Doctrine & Faith",
    question: "According to Galatians 5:22-23, which of the following is part of the fruit of the Spirit?",
    options: [
      "Love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness, self-control",
      "Ambition, political triumph, sensory indulgence, and dominance",
      "Pride, suspicion, fast-talking, and worldly cleverness",
      "Isolation, fear of the future, and bitter complaints"
    ],
    correctIndex: 0,
    scripture: "Galatians 5:22-23",
    explanation: "Galatians 5:22-23 contrasts the works of the flesh with the fruit of the Spirit: 'love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.'",
  },
  {
    id: 27,
    category: "Gospels",
    question: "How many loaves of barley bread and small fish did Jesus multiply to feed the multitude of five thousand men?",
    options: [
      "Seven loaves and three large fish",
      "Five loaves and two small fish",
      "Twelve loaves and four fish",
      "Two loaves and five fish"
    ],
    correctIndex: 1,
    scripture: "John 6:9-13",
    explanation: "A boy had five barley loaves and two small fish. Jesus gave thanks, distributed them to the crowd, and twelve baskets of leftovers were gathered afterward.",
  },
  {
    id: 28,
    category: "Early Church",
    question: "What was the name of the couple in Corinth who were tentmakers and fellow workers with Paul in the gospel?",
    options: [
      "Ananias and Sapphira",
      "Aquila and Priscilla",
      "Zacharias and Elizabeth",
      "Elkanah and Hannah"
    ],
    correctIndex: 1,
    scripture: "Acts 18:1-3, 26",
    explanation: "Paul met Aquila and Priscilla in Corinth, staying and working with them because they were tentmakers. They later explained the way of God more accurately to Apollos.",
  },
  {
    id: 29,
    category: "Old Testament",
    question: "What did Solomon ask God for when the LORD appeared to him in a dream at Gibeon?",
    options: [
      "Long life and victory over all his enemies",
      "A discerning heart and wisdom to govern God's people",
      "Boundless silver, gold, and magnificent palaces",
      "Immunity from all illness and distress"
    ],
    correctIndex: 1,
    scripture: "1 Kings 3:5-12",
    explanation: "Solomon asked for a discerning heart to govern the people and distinguish between right and wrong. The LORD was pleased with this request and granted him unrivaled wisdom.",
  },
  {
    id: 30,
    category: "Doctrine & Faith",
    question: "In James 2:26, what bodily comparison is used to illustrate faith without works?",
    options: [
      "As a tree without branches",
      "As the body without the spirit is dead, so faith without deeds is dead",
      "As an eye without sight",
      "As a vessel without water"
    ],
    correctIndex: 1,
    scripture: "James 2:26",
    explanation: "James 2:26 concludes: 'As the body without the spirit is dead, so faith without deeds is dead.' True biblical faith is living and active through obedient love.",
  }
];

/**
 * Returns today's date formatted as YYYY-MM-DD in the user's local timezone.
 */
export function getTodayDateKey(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Calculates a deterministic quiz index for the day so all users see the exact same question.
 */
export function getTodayQuiz(): { question: QuizQuestion; index: number; dateString: string } {
  const now = new Date();
  // Epoch baseline (Jan 1, 2026)
  const epoch = new Date(2026, 0, 1).getTime();
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const dayNumber = Math.max(0, Math.floor((todayMidnight - epoch) / (1000 * 60 * 60 * 24)));

  const questionIndex = dayNumber % quizQuestions.length;
  const question = quizQuestions[questionIndex];

  // Friendly date string, e.g. "Tuesday, October 27, 2026"
  const dateString = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return { question, index: questionIndex, dateString };
}

/**
 * Calculates hours and minutes remaining until midnight when the new question unlocks.
 */
export function getTimeUntilTomorrow(): { hours: number; minutes: number } {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const diffMs = tomorrow.getTime() - now.getTime();
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  return { hours, minutes };
}

// Local storage key conventions
const QUIZ_STORAGE_KEY_PREFIX = "coc_lugbe_daily_quiz_";
const STREAK_STORAGE_KEY = "coc_lugbe_quiz_streak";
const LAST_PLAYED_DATE_KEY = "coc_lugbe_quiz_last_date";

export interface StoredQuizAnswer {
  dateKey: string;
  selectedOption: number;
  isCorrect: boolean;
  answeredAt: string;
}

export function getSavedQuizAnswer(dateKey: string): StoredQuizAnswer | null {
  try {
    const raw = localStorage.getItem(`${QUIZ_STORAGE_KEY_PREFIX}${dateKey}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveQuizAnswer(dateKey: string, selectedOption: number, isCorrect: boolean): void {
  try {
    const answer: StoredQuizAnswer = {
      dateKey,
      selectedOption,
      isCorrect,
      answeredAt: new Date().toISOString(),
    };
    localStorage.setItem(`${QUIZ_STORAGE_KEY_PREFIX}${dateKey}`, JSON.stringify(answer));

    // Handle Streak
    const lastDate = localStorage.getItem(LAST_PLAYED_DATE_KEY);
    let currentStreak = parseInt(localStorage.getItem(STREAK_STORAGE_KEY) || "0", 10);

    if (lastDate) {
      const last = new Date(lastDate);
      const current = new Date(dateKey);
      const dayDiff = Math.floor((current.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));

      if (dayDiff === 1) {
        currentStreak += 1;
      } else if (dayDiff > 1) {
        currentStreak = 1;
      }
    } else {
      currentStreak = 1;
    }

    localStorage.setItem(LAST_PLAYED_DATE_KEY, dateKey);
    localStorage.setItem(STREAK_STORAGE_KEY, String(currentStreak));
  } catch (e) {
    console.error("Failed to save quiz answer:", e);
  }
}

export function getCurrentStreak(): number {
  try {
    const streak = localStorage.getItem(STREAK_STORAGE_KEY);
    return streak ? parseInt(streak, 10) : 0;
  } catch {
    return 0;
  }
}
