const astrologySigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

  const astrologyMessages = {
    "Aries": [
        "Your dynamic energy will drive you towards success today.",
        "It's a good day to take initiative and start new projects.",
        "Be mindful of your impulsive tendencies today. \n"
    ],
    "Taurus": [
        "Focus on stability and practical matters today.",
        "Enjoy the comforts of home and indulge in some self-care.",
        "Your perseverance will lead to long-term success.\n"
    ],
    "Gemini": [
        "Communication will be key to your success today.",
        "Keep an open mind and explore new ideas and opportunities.",
        "Be cautious of spreading yourself too thin.\n"
    ],
    "Cancer": [
        "Embrace your nurturing side and take care of your loved ones.",
        "Trust your intuition when making decisions today.",
        "Create a harmonious environment for yourself and those around you.\n"
    ],
    "Leo": [
        "Let your natural leadership skills shine today.",
        "Be confident in your abilities and take charge when necessary.",
        "Don't forget to express gratitude for the support you receive.\n"
    ],
    "Virgo": [
        "Focus on the details and strive for perfection today.",
        "Organize your tasks and prioritize your responsibilities.",
        "Be mindful of overthinking and strive for balance.\n"
    ],
    "Libra": [
        "Seek harmony and balance in all areas of your life today.",
        "Focus on your relationships and strive for mutual understanding.",
        "Don't be afraid to assert yourself and set boundaries.\n"
    ],
    "Scorpio": [
        "Your intensity and passion will drive you towards your goals today.",
        "Trust your instincts, but also be open to new perspectives.",
        "Embrace transformation and let go of what no longer serves you.\n"
    ],
    "Sagittarius": [
        "Embrace adventure and explore new horizons today.",
        "Be optimistic and have faith in the future.",
        "Don't be afraid to take calculated risks.\n"
    ],
    "Capricorn": [
        "Focus on your long-term goals and work diligently towards them.",
        "Be disciplined and take responsibility for your actions.",
        "Don't forget to enjoy the journey, not just the destination.\n"
    ],
    "Aquarius": [
        "Embrace your individuality and think outside the box today.",
        "Engage in meaningful conversations and share your ideas.",
        "Be open to unconventional solutions and approaches.\n"
    ],
    "Pisces": [
        "Trust your intuition and tap into your creativity today.",
        "Take some time for introspection and spiritual reflection.",
        "Be compassionate towards yourself and others.\n"
    ]
};

const readings = [
    "Today is a good day for new beginnings.",
    "You may face some challenges, but trust your instincts.",
    "Be open to unexpected opportunities today.",
    "Your creativity will be at its peak today.",
    "Focus on maintaining balance in your life.",
    "Take some time for self-reflection today.",
    "Be patient with yourself and others today.",
    "Your hard work will pay off soon.",
    "Listen to your intuition in difficult situations.",
    "Express gratitude for the abundance in your life."
  ];

function generateAstrologyMessage(sign) {
    const messages = astrologyMessages[sign];
    if (!messages) {
        return "Invalid astrology sign.";
    }
    const astrologyMessage  = astrologyMessages[sign];
    
    const randomReadingIndex = functionRandomIndexGenerator(readings);
    const reading = readings[randomReadingIndex];
    
    return astrologyMessage + readings[randomReadingIndex];
    
}
function functionRandomIndexGenerator(randomArray){
return Math.floor(Math.random()*randomArray.length);
}

const sign = astrologySigns [functionRandomIndexGenerator(astrologySigns)];
const message = generateAstrologyMessage(sign);
console.log("For " + sign + ": \n" + message);


