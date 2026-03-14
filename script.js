'use strict';

/* ════════════════════════════════════════════════════════════════
   INDUSTRIES
════════════════════════════════════════════════════════════════ */
const INDUSTRIES = [
  "Finance & Banking",
  "Consulting & Strategy",
  "Technology & Product",
  "Marketing & Advertising",
  "Media & Content",
  "Sales & Business Development",
  "Healthcare & Wellness",
  "Education & Edtech",
  "Law & Policy",
  "Design & Creative Arts",
  "Entrepreneurship & Startups",
  "Real Estate & Infrastructure",
  "Government & Civil Services",
  "HR & People Operations",
  "Social Impact & NGOs"
];

/* ════════════════════════════════════════════════════════════════
   INDUSTRY FIT PER COMBO
════════════════════════════════════════════════════════════════ */
const INDUSTRY_FIT = {
  "analyst+builder":     ["Technology & Product","Finance & Banking","Consulting & Strategy","Entrepreneurship & Startups","Real Estate & Infrastructure"],
  "analyst+connector":   ["HR & People Operations","Education & Edtech","Healthcare & Wellness","Social Impact & NGOs","Consulting & Strategy"],
  "analyst+creator":     ["Marketing & Advertising","Media & Content","Consulting & Strategy","Education & Edtech","Technology & Product"],
  "analyst+strategist":  ["Finance & Banking","Consulting & Strategy","Technology & Product","Law & Policy","Government & Civil Services"],
  "builder+connector":   ["Entrepreneurship & Startups","Sales & Business Development","Education & Edtech","HR & People Operations","Social Impact & NGOs"],
  "builder+creator":     ["Technology & Product","Media & Content","Design & Creative Arts","Entrepreneurship & Startups","Marketing & Advertising"],
  "builder+strategist":  ["Entrepreneurship & Startups","Technology & Product","Consulting & Strategy","Finance & Banking","Real Estate & Infrastructure"],
  "connector+creator":   ["Marketing & Advertising","Media & Content","Social Impact & NGOs","Education & Edtech","Design & Creative Arts"],
  "connector+strategist":["HR & People Operations","Consulting & Strategy","Government & Civil Services","Sales & Business Development","Finance & Banking"],
  "creator+strategist":  ["Marketing & Advertising","Consulting & Strategy","Media & Content","Design & Creative Arts","Entrepreneurship & Startups"]
};

/* ════════════════════════════════════════════════════════════════
   ARCHETYPES
════════════════════════════════════════════════════════════════ */
const ARCHETYPES = {
  strategist: { label: "Strategist" },
  builder:    { label: "Builder"    },
  analyst:    { label: "Analyst"    },
  creator:    { label: "Creator"    },
  connector:  { label: "Connector"  }
};

/* ════════════════════════════════════════════════════════════════
   COMBO PROFILES
════════════════════════════════════════════════════════════════ */
const COMBOS = {
  "analyst+builder": {
    tagline: "You build with intention. You move fast — but you stay grounded in data.",
    description: "You have a rare internal calibration between urgency and accuracy. Most builders ship and fix later. Most analysts wait until everything is certain. You somehow do both — you move quickly, but you track what's working. You're drawn to problems where the answer is buried in the numbers but the solution has to be built in the real world. You get restless in pure research roles. You get frustrated by builders who never look at their metrics.",
    primaryNote: "You need to make things. Ideas that stay theoretical feel unfinished to you. You're happiest when you're in the middle of building something real.",
    secondaryNote: "You don't build blindly. You track, measure, question, adjust. Your instincts are good — but you always check them.",
    watchOut: "You can get so deep in the data that you delay action longer than you should. Sometimes you need to ship the imperfect thing and learn from reality instead of projections.",
    careers: [
      { title: "Growth Manager",        why: "Data-driven building is exactly what this role demands",              dayInLife: "Most days you're running experiments, reading the numbers, and deciding what to double down on or kill." },
      { title: "Product Analytics",     why: "You understand both the product and the numbers behind it",           dayInLife: "You spend your time buried in dashboards and user behaviour data, translating it into decisions the product team can actually act on." },
      { title: "Startup Operations",    why: "Building systems that actually scale",                                dayInLife: "You're the person making sure the chaos runs smoothly — building processes, tracking what matters, fixing what's breaking." },
      { title: "Strategy Consultant",   why: "You bring analytical rigour and a bias for action",                  dayInLife: "You fly into a problem, spend weeks understanding it deeply, build a recommendation, present it to leadership, and move on to the next one." },
      { title: "VC / Investment Analyst", why: "You evaluate businesses deeply and spot what can be built",        dayInLife: "You read pitch decks, build models, talk to founders, and try to figure out which businesses are real before anyone else does." },
      { title: "Entrepreneur",          why: "Especially where you can test and measure your way forward",         dayInLife: "No two days look the same — you're building, selling, fixing, and questioning everything simultaneously." }
    ]
  },
  "analyst+connector": {
    tagline: "You understand people — quantitatively and qualitatively.",
    description: "You have a gift that most people don't know exists: you can read data and read people, and you know they're usually saying the same thing in different languages. You bring warmth to analytical spaces and rigour to people-focused ones. You're the person who does the research but also notices the human stuff nobody else bothered to look at. People feel heard around you, even when you're bringing data to the table.",
    primaryNote: "You're thorough. You don't form opinions lightly, and you always back them up with something real.",
    secondaryNote: "You genuinely care about the person behind the data. The human element is never just a variable to you.",
    watchOut: "You can get caught between head and heart. When data says one thing and a person needs another, you can freeze. You need to get comfortable making calls that won't please everyone.",
    careers: [
      { title: "People Analytics / HR Strategy", why: "Where data meets human behaviour at scale",                 dayInLife: "You sit between the data team and the people team, turning workforce numbers into decisions about hiring, culture and retention." },
      { title: "Career Counselling / Coaching",  why: "Understanding people deeply is the whole job",             dayInLife: "You spend your days in one-on-one conversations helping people understand themselves better and figure out what to do next." },
      { title: "Customer Research",              why: "You understand users both as data points and as people",    dayInLife: "You run surveys, conduct interviews, analyse responses, and turn what customers say into something the business can actually use." },
      { title: "UX Research",                    why: "Empathy and evidence — your exact combination",            dayInLife: "You watch real people use products, figure out where they get confused or frustrated, and tell the design team what actually needs to change." },
      { title: "Behavioural Economist",          why: "You're fascinated by why people do what they do",          dayInLife: "You study why people make the decisions they make — and design systems, policies or products that account for how humans actually behave." },
      { title: "Education / Edtech",             why: "You can design learning that actually works for people",   dayInLife: "You design learning experiences, figure out what makes content stick, and obsess over whether students are actually getting it." }
    ]
  },
  "analyst+creator": {
    tagline: "You find meaning in data — and then help others see it.",
    description: "You have an unusual mind. You're comfortable in the world of numbers and logic, but you never lose sight of the human story underneath the data. You're the person who can do the research and write the presentation that makes it land. You don't just analyse — you translate. You care deeply about whether people actually understand what you've found. That combination of rigour and communication is genuinely rare.",
    primaryNote: "You go deep. You're patient with complexity, careful with your conclusions, and allergic to bad reasoning.",
    secondaryNote: "You think about how ideas are communicated, not just whether they're correct. You have a natural instinct for narrative.",
    watchOut: "You can get stuck in the research phase because it feels safer than putting your interpretation out there. At some point you have to commit to a point of view.",
    careers: [
      { title: "Data Storytelling / Journalist", why: "Finding and telling true stories with numbers",            dayInLife: "You find a number that nobody's paying attention to, figure out why it matters, and write the piece that makes people care." },
      { title: "Research & Strategy",            why: "Insight work that actually influences decisions",          dayInLife: "You spend weeks going deep on a question, then distill it into a clear point of view that actually influences what the organisation does." },
      { title: "Product Marketing",              why: "Understanding the data and making it compelling",          dayInLife: "You understand the product deeply, understand the customer deeply, and figure out how to connect those two things in a way that drives growth." },
      { title: "Brand Strategist",               why: "You build narratives grounded in real insight",           dayInLife: "You help companies figure out what they stand for and how to say it — grounded in real insight, not just creative intuition." },
      { title: "Insights Lead",                  why: "Turning what you know into what the business should do",  dayInLife: "You run the research function, own the findings, and make sure the organisation is making decisions based on what's actually true." },
      { title: "Content Strategist",             why: "You create with purpose and back it up with evidence",    dayInLife: "You decide what to say, to whom, when, and why — making sure every piece of content is doing a specific job rather than just filling space." }
    ]
  },
  "analyst+strategist": {
    tagline: "You don't guess. You know.",
    description: "You are one of the most rigorous thinkers in any room you walk into. Where others see a complex situation, you see a system — and you're not satisfied until you understand it completely. You have high standards for reasoning and even higher standards for evidence. People come to you when they need to think something through properly. You don't deal well with decisions made on gut feel alone.",
    primaryNote: "You love the big picture — patterns, structures, long-term consequences. You naturally ask why things work the way they do and how they could work better.",
    secondaryNote: "You don't stop at the question. You go find the answer — in the data, the numbers, the research. Your opinions are always backed by something real.",
    watchOut: "Analysis paralysis is your shadow. You can keep digging for certainty when the moment actually calls for a decision. At some point, good enough data is good enough.",
    careers: [
      { title: "Management Consulting",              why: "Strategy plus evidence is literally the job",          dayInLife: "You parachute into complex business problems, spend weeks building a rigorous point of view, and present recommendations to senior leaders." },
      { title: "Equity Research / Investment Analysis", why: "Deep thinking about how businesses really work",   dayInLife: "You cover a set of companies deeply — reading every filing, building models, forming views on what the market is missing." },
      { title: "Corporate Strategy",                 why: "You set direction and you can prove why it's right",  dayInLife: "You work directly with the leadership team on the biggest questions the company faces — where to play, how to win, what to stop doing." },
      { title: "Business Analytics",                 why: "Turning messy data into clear decisions",             dayInLife: "You own the data that the business runs on — building dashboards, running analyses, and making sure decisions are grounded in reality." },
      { title: "Policy / Research Roles",            why: "Where rigour actually changes things",                dayInLife: "You study complex systems — economic, social, political — and produce work that informs how governments or institutions should act." },
      { title: "VC / Private Equity",                why: "You evaluate companies better than most",             dayInLife: "You evaluate businesses for a living — understanding their models, their markets, their risks, and deciding whether they're worth betting on." }
    ]
  },
  "builder+connector": {
    tagline: "You build for people — and with them.",
    description: "You're energised by making things, but what really drives you is the impact on people — the user who finally gets it, the team that comes together, the community that forms around something you built. You're not a solo founder type. You think best with others around, and you build things that bring people in rather than keep them out. You're probably a natural collaborator and an even more natural motivator.",
    primaryNote: "You have restless energy. You need to be working on something real, something that's moving forward.",
    secondaryNote: "You're unusually good at getting people to care about what you're building. You sell ideas without it feeling like selling.",
    watchOut: "You can spend so much energy on people — recruiting them, supporting them, keeping them happy — that the actual building slows down. Protect your maker time.",
    careers: [
      { title: "Community Builder / Platform Product", why: "You understand people and systems at the same time", dayInLife: "You spend your days thinking about how to get people to show up, engage, and keep coming back — and then building the things that make that happen." },
      { title: "Sales / BD at a Startup",             why: "Where relationships become real revenue",            dayInLife: "You're on calls, in meetings, writing proposals, and figuring out how to turn conversations into revenue for something that's still being built." },
      { title: "Founder (people-first)",               why: "Edtech, HR tech, social impact — you're built for this", dayInLife: "You're hiring, managing, selling, and building culture simultaneously — the product is almost secondary to the team you're assembling around it." },
      { title: "Program / Operations Manager",         why: "Building things that run on people",               dayInLife: "You run the systems that keep everything moving — coordinating across teams, removing blockers, making sure things actually get done." },
      { title: "Customer Success Lead",                why: "You keep users and understand how to grow them",    dayInLife: "You own the relationship after the sale — making sure customers get value, solving their problems, and turning them into people who stay and refer others." },
      { title: "HR Tech / Future of Work",             why: "A growing space that needs exactly your instincts", dayInLife: "You build products or programs that change how people work — better hiring, better management, better culture at scale." }
    ]
  },
  "builder+creator": {
    tagline: "You don't just make things. You make things people love.",
    description: "There's a certain magic in what you do — you can take something from nothing and make it feel like it was always meant to exist. You're not interested in building things that are merely functional. You want them to feel right, look right, mean something. You probably have taste. You care about how things feel as much as how they work. The best version of your career is one where you get to make things that are both useful and beautiful.",
    primaryNote: "You're a maker. The blank page doesn't scare you — it invites you. You have a strong bias toward starting.",
    secondaryNote: "You have a strong aesthetic sensibility and an instinct for what will resonate. Your work has a voice.",
    watchOut: "Perfectionism dressed up as creativity. At some point the thing needs to ship — even if it's not exactly what you imagined.",
    careers: [
      { title: "Product Design / UX",           why: "Building things that work and feel good",                  dayInLife: "You spend your days going between user research, wireframes, and finished designs — obsessing over whether the thing you're making actually works and feels right." },
      { title: "Creative Entrepreneur",          why: "Your own brand, your own rules",                          dayInLife: "You run the whole thing — the creative vision, the business model, the distribution — and every day looks different because you built it that way." },
      { title: "Content Creator / Media",        why: "Making things for an audience that actually cares",       dayInLife: "You make things for an audience — writing, filming, editing, publishing — and you track what lands and what doesn't obsessively." },
      { title: "Startup in Creative Industries", why: "Fashion, design, media, edtech — all fit",               dayInLife: "You're building a business in fashion, design, media or education — which means the product has to work and look good at the same time." },
      { title: "Brand Builder",                  why: "You understand what makes something feel real",           dayInLife: "You shape how a company is perceived — the visual identity, the tone of voice, the feeling someone gets when they encounter it for the first time." },
      { title: "Art Director / Creative Lead",   why: "Where taste meets execution",                             dayInLife: "You set the creative direction for a team or project — making sure every output meets a standard that most people couldn't articulate but everyone can feel." }
    ]
  },
  "builder+strategist": {
    tagline: "You see the whole board — and you're not afraid to flip it.",
    description: "You have a rare combination of clarity and courage. Most people can either think clearly or move fast — you do both, which makes you genuinely effective. You're the person in the room who already knows what needs to happen while everyone else is still debating. You get frustrated by slow decisions and even slower execution. You don't just want to understand systems — you want to redesign them.",
    primaryNote: "You think in structures. When a problem lands on your plate, your brain automatically starts mapping it — causes, consequences, options. You're rarely reactive.",
    secondaryNote: "The Builder in you refuses to let good thinking stay on paper. You have an itch to make things real. Ideas that don't become prototypes feel like unfinished sentences.",
    watchOut: "You can fall in love with your own plan. When you've already seen the answer, other people's input can feel like noise — and that's when you miss things that matter.",
    careers: [
      { title: "Product Manager",        why: "You think strategically and ship things — that's the whole job",  dayInLife: "You sit between engineering, design and business — deciding what gets built, why, and in what order, and living with the consequences of those calls." },
      { title: "Startup Founder",        why: "You're built for the chaos of zero-to-one",                      dayInLife: "You make hundreds of decisions a week with incomplete information, build the team, find the customers, and figure out the business model as you go." },
      { title: "Strategy & Operations",  why: "Where big thinking meets real execution",                         dayInLife: "You work on the most important problems the company faces — part strategic thinking, part rolling up your sleeves and making things actually happen." },
      { title: "Chief of Staff",         why: "You operate closest to the decisions that matter",               dayInLife: "You operate as an extension of the CEO — sitting in every important room, owning the things that fall between functions, and making the organisation run better." },
      { title: "Management Consultant",  why: "You solve hard problems and move on to the next one",            dayInLife: "You work on a new problem every few months — different industry, different challenge, same rigour — and you get very good at thinking fast under pressure." },
      { title: "VC-backed Founder",      why: "Your profile is exactly what investors back",                    dayInLife: "You raise money, spend it carefully, build something people want, and report back to investors while trying not to run out of runway." }
    ]
  },
  "connector+creator": {
    tagline: "You tell stories that make people feel less alone.",
    description: "You create for people, not just at them. There's an emotional intelligence in everything you make — you think about how someone will feel when they encounter your work, and that empathy shapes every creative decision. You're probably a natural communicator, storyteller, and community-builder. People are drawn to your work because it feels like it understands them. That's not a small thing — it's the hardest thing to teach.",
    primaryNote: "You have a distinct voice and a compulsion to express things. Making something is how you process the world.",
    secondaryNote: "You never lose sight of your audience. Your creativity is always in service of connection, not just expression.",
    watchOut: "You can be so focused on how people receive your work that you hold back your actual perspective. The work that connects most is usually the most honest, not the most palatable.",
    careers: [
      { title: "Content Creator / Writer",        why: "Making things that genuinely move people",               dayInLife: "You make things that are meant to move people — and you spend a lot of time thinking about why something landed or didn't and what to do differently next time." },
      { title: "Brand & Community Building",      why: "Creating culture, not just content",                     dayInLife: "You build the culture around a product or idea — the tone, the rituals, the feeling of belonging that makes people stay and bring others in." },
      { title: "Counselling / Coaching",          why: "Human work with a creative, empathetic edge",            dayInLife: "You sit with people in hard moments, help them see themselves more clearly, and watch them make decisions they couldn't have made before talking to you." },
      { title: "Social Impact Communications",    why: "Stories that actually change minds",                     dayInLife: "You tell the stories that make people care about causes they might otherwise scroll past — using creativity in service of something that actually matters." },
      { title: "Marketing Lead",                  why: "You understand people and you can speak to them",        dayInLife: "You own how the brand speaks to the world — campaigns, content, channels — and you're always thinking about how the message lands on the other end." },
      { title: "Education / Edtech",              why: "Learning works best when it's human and creative",       dayInLife: "You design the experience of learning — making complex things feel accessible, human and worth showing up for." }
    ]
  },
  "connector+strategist": {
    tagline: "You know where you're going — and you bring everyone with you.",
    description: "Leadership comes naturally to you, not because you demanded it but because people tend to follow someone who's clear, credible, and genuinely invested in them. You think in systems but you never forget that systems are made of people. You're the one who can hold a difficult conversation without it becoming a difficult relationship. You build trust quickly and spend it wisely.",
    primaryNote: "You have direction. You're not just likeable — you know where you want to go and you can make a compelling case for why it matters.",
    secondaryNote: "You understand people intuitively. You read rooms, navigate relationships, and bring out the best in whoever you're working with.",
    watchOut: "You can prioritise keeping everyone happy over making the hard call. Sometimes the right strategy disappoints people — and you need to be okay with that.",
    careers: [
      { title: "General Management / Leadership",  why: "This combo is literally what good leadership looks like", dayInLife: "You run a team or a business unit — setting direction, making calls, developing people, and being accountable for outcomes you can't control entirely." },
      { title: "HR & Organisational Development",  why: "Building culture with real strategic intent",           dayInLife: "You shape the culture, structure and capability of an organisation — the work nobody sees until something goes wrong or spectacularly right." },
      { title: "Sales Leadership",                 why: "Strategy plus relationships equals consistent results",  dayInLife: "You build and run a sales team — hiring, coaching, setting strategy, and making sure the number gets hit quarter after quarter." },
      { title: "Chief Operating Officer",          why: "You align people around a vision and execute it",       dayInLife: "You're the person who makes the CEO's vision actually happen — translating strategy into execution across every function of the business." },
      { title: "Founder",                          why: "Especially if your product involves people at the core", dayInLife: "You build the vision, hire the people, keep the culture, and make every hard call — it's the most human job in business and also the loneliest." },
      { title: "Management Consultant",            why: "You understand both the problem and the people involved", dayInLife: "You bring an outside perspective to inside problems — and your value is that you can see what the people living it can't." }
    ]
  },
  "creator+strategist": {
    tagline: "You think big. Then you make it beautiful.",
    description: "You're the kind of person who can walk into a situation, see what's broken, imagine what it could be — and then find a way to communicate that vision so compellingly that other people actually believe it too. You live at the intersection of ideas and expression. You're not just strategic — you're persuasive. Not just creative — you're purposeful. The combination makes you unusually effective at building things that matter and making people care about them.",
    primaryNote: "You have a strong sense of direction. You don't create randomly — there's always a reason behind your choices, a goal the work is serving.",
    secondaryNote: "You bring warmth, originality, and a sense of craft to everything you do. Work that doesn't feel meaningful or beautiful doesn't hold your attention.",
    watchOut: "You can overthink the vision and underinvest in the grind. Big ideas need boring execution too — and that part often feels beneath you.",
    careers: [
      { title: "Brand Strategy",                    why: "You build narratives that make businesses mean something", dayInLife: "You help organisations figure out who they are and how to say it — sitting at the intersection of research, insight and creative expression." },
      { title: "Creative Director",                  why: "Where strategy shapes the creative, not the other way around", dayInLife: "You set the creative vision for a body of work — managing the tension between what's bold and what actually serves the brief." },
      { title: "Content & Marketing Leadership",     why: "Making ideas travel at scale",                         dayInLife: "You own the editorial and marketing output of an organisation — deciding what to say, how to say it, and whether it's working." },
      { title: "Innovation Lead",                    why: "You're drawn to what doesn't exist yet",               dayInLife: "You run the part of the organisation that's supposed to figure out what comes next — which means a lot of ambiguity, a lot of pitching, and occasionally being right." },
      { title: "Founder / Creative Entrepreneur",    why: "Your own canvas, your own rules",                     dayInLife: "You build something that reflects your taste and your point of view — which is terrifying and the only way you'd have it." },
      { title: "Advertising / Campaign Strategy",    why: "The rare person who gets both the idea and the brief", dayInLife: "You work on briefs, develop campaign concepts, and fight for the ideas that are actually interesting rather than just safe." }
    ]
  }
};
function getCombo(a, b) {
  const key = [a, b].sort().join('+');
  return COMBOS[key] || {
    tagline: `You blend the strengths of a ${ARCHETYPES[a].label} and a ${ARCHETYPES[b].label}.`,
    description: "Your profile is a distinctive blend that opens up a wide range of paths. You bring both analytical and creative energy to everything you do.",
    primaryNote: `Your ${ARCHETYPES[a].label} side drives your thinking.`,
    secondaryNote: `Your ${ARCHETYPES[b].label} side shapes how you apply it.`,
    watchOut: "Your dual strengths can sometimes pull in different directions. Lean into what the moment needs.",
    careers: [
      { title: "Strategy Roles", why: "Your thinking is structured and purposeful" },
      { title: "Creative Leadership", why: "You have both vision and execution ability" },
      { title: "Entrepreneurship", why: "You have the instincts to build something real" },
      { title: "Consulting", why: "You solve hard problems across different contexts" }
    ]
  };
}

/* ════════════════════════════════════════════════════════════════
   QUESTIONS (15)
════════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    text: "Your manager drops a completely new project on you with no brief. First thing you do after the meeting ends?",
    opts: [
      { key:"A", text:"Open a doc and start mapping out what you actually know vs what you need to find out", arc:"strategist" },
      { key:"B", text:"Message someone to grab a coffee and think through it out loud",                       arc:"connector"  },
      { key:"C", text:"Spend the afternoon reading everything you can find about the problem space",          arc:"analyst"    },
      { key:"D", text:"Sketch out three completely different directions just to see what sticks",             arc:"creator"    },
      { key:"E", text:"Reach out to whoever the end user is to understand what they actually need",          arc:"builder"    }
    ]
  },
  {
    text: "Which of these sounds like the most satisfying way to spend a workday?",
    opts: [
      { key:"A", text:"Solving a complex business problem no one's cracked yet",         arc:"strategist" },
      { key:"B", text:"Shipping something new that people can actually use",             arc:"builder"    },
      { key:"C", text:"Digging into data and finding an insight that changes everything",arc:"analyst"    },
      { key:"D", text:"Creating a campaign or piece of work that feels original",        arc:"creator"    },
      { key:"E", text:"Having a conversation that genuinely helps someone",             arc:"connector"  }
    ]
  },
  {
    text: "The project is behind and the team is stressed. Without being asked, you end up being the person who…",
    opts: [
      { key:"A", text:"Figures out why it's behind and restructures the plan going forward",           arc:"strategist" },
      { key:"B", text:"Just starts doing the thing nobody else has started yet",                       arc:"builder"    },
      { key:"C", text:"Goes back through everything to find where it actually went wrong",             arc:"analyst"    },
      { key:"D", text:"Reframes the brief — maybe the original direction was the problem",             arc:"creator"    },
      { key:"E", text:"Checks in with everyone individually to understand what's blocking them",       arc:"connector"  }
    ]
  },
  {
    text: "Two job offers, same salary, same title. You pick based on…",
    opts: [
      { key:"A", text:"Which one is solving a harder, more complex problem",                          arc:"strategist" },
      { key:"B", text:"Which one has more autonomy to actually make and ship things",                 arc:"builder"    },
      { key:"C", text:"Which one has better data and clearer metrics to work with",                  arc:"analyst"    },
      { key:"D", text:"Which one gives you more creative freedom and fewer constraints",              arc:"creator"    },
      { key:"E", text:"Which team felt more human and collaborative in the interview",                arc:"connector"  }
    ]
  },
  {
    text: "What truly motivates you at work — not what should, but what actually does?",
    opts: [
      { key:"A", text:"Cracking a hard problem that matters",                 arc:"strategist" },
      { key:"B", text:"Building something from nothing",                      arc:"builder"    },
      { key:"C", text:"Finding the truth hidden in the numbers",              arc:"analyst"    },
      { key:"D", text:"Making something that feels original and alive",       arc:"creator"    },
      { key:"E", text:"Watching someone you helped actually succeed",         arc:"connector"  }
    ]
  },
  {
    text: "You've just watched a documentary about a company that failed. What do you find yourself thinking about after?",
    opts: [
      { key:"A", text:"The decisions that were made wrong and what should have been done instead",    arc:"strategist" },
      { key:"B", text:"Whether you could have built something better with the same resources",        arc:"builder"    },
      { key:"C", text:"The actual numbers — what the data would have shown if they'd looked properly",arc:"analyst"   },
      { key:"D", text:"The story — how they communicated, the brand, what they stood for",           arc:"creator"    },
      { key:"E", text:"The people — what it must have felt like to work there as it fell apart",     arc:"connector"  }
    ]
  },
  {
    text: "People who know you well would probably describe you as…",
    opts: [
      { key:"A", text:"Always thinking three steps ahead",                        arc:"strategist" },
      { key:"B", text:"Someone who just makes things happen",                     arc:"builder"    },
      { key:"C", text:"The most analytical person in the room",                   arc:"analyst"    },
      { key:"D", text:"Genuinely creative — in a way that's hard to fake",       arc:"creator"    },
      { key:"E", text:"The person everyone opens up to",                          arc:"connector"  }
    ]
  },
  {
    text: "A friend is starting a new business and asks for your help. Without thinking, you immediately…",
    opts: [
      { key:"A", text:"Start mapping out a strategy for how it could grow",       arc:"strategist" },
      { key:"B", text:"Suggest building a quick prototype to test the idea",      arc:"builder"    },
      { key:"C", text:"Pull up data to see if the market actually supports it",   arc:"analyst"    },
      { key:"D", text:"Think about how to name it, brand it, and tell its story", arc:"creator"    },
      { key:"E", text:"Start connecting them with everyone who could help",       arc:"connector"  }
    ]
  },
  {
    text: "You're at a dinner and someone starts talking about their work. You're most engaged when they're explaining…",
    opts: [
      { key:"A", text:"How their industry actually works — the competitive dynamics, the strategy behind decisions", arc:"strategist" },
      { key:"B", text:"What they're building or trying to launch right now",                                        arc:"builder"    },
      { key:"C", text:"The numbers behind it — revenue, growth, how they measure success",                         arc:"analyst"    },
      { key:"D", text:"The creative side — how they communicate, what they make, what it looks like",              arc:"creator"    },
      { key:"E", text:"The team, the culture, the relationships — who the people actually are",                    arc:"connector"  }
    ]
  },
  {
    text: "Which kind of problem do you find yourself most drawn to?",
    opts: [
      { key:"A", text:"Complex problems that need a clear framework to crack",   arc:"strategist" },
      { key:"B", text:"Problems where the best way forward is to build and test",arc:"builder"    },
      { key:"C", text:"Problems that need deep analysis before you can act",     arc:"analyst"    },
      { key:"D", text:"Problems that need a creative, non-obvious solution",     arc:"creator"    },
      { key:"E", text:"Problems that only resolve through real conversations",   arc:"connector"  }
    ]
  },
  {
    text: "What gives you genuine satisfaction — not just relief, but real pride?",
    opts: [
      { key:"A", text:"Solving something difficult that others couldn't",        arc:"strategist" },
      { key:"B", text:"Shipping something people actually use and value",        arc:"builder"    },
      { key:"C", text:"Turning raw messy data into one clean, clear insight",    arc:"analyst"    },
      { key:"D", text:"Creating something original that resonates with people",  arc:"creator"    },
      { key:"E", text:"Seeing someone genuinely grow because of your help",      arc:"connector"  }
    ]
  },
  {
    text: "Your laptop dies and you can't work for 3 hours. You end up spending it…",
    opts: [
      { key:"A", text:"Thinking through a problem you've been stuck on — finally have space to think",  arc:"strategist" },
      { key:"B", text:"Tinkering with something — fixing, making, experimenting with whatever's nearby",arc:"builder"    },
      { key:"C", text:"Reading — articles, research, anything that helps you understand something better",arc:"analyst"   },
      { key:"D", text:"Making something — writing, sketching, photographing, just creating",            arc:"creator"    },
      { key:"E", text:"Talking — calling someone, catching up, ending up in a long conversation",       arc:"connector"  }
    ]
  },
  {
    text: "When something goes wrong on a project, your first move is…",
    opts: [
      { key:"A", text:"Step back and assess what went wrong at a systems level",             arc:"strategist" },
      { key:"B", text:"Jump in and start fixing — iterate your way out of it",               arc:"builder"    },
      { key:"C", text:"Go back to the data to understand what actually happened",            arc:"analyst"    },
      { key:"D", text:"Reframe the problem — maybe the direction was wrong",                 arc:"creator"    },
      { key:"E", text:"Check in with the team — was this a people or process failure?",     arc:"connector"  }
    ]
  },
  {
    text: "In five years, which version of yourself feels most real?",
    opts: [
      { key:"A", text:"Running strategy for an organisation or building your own",          arc:"strategist" },
      { key:"B", text:"Having built something — a product, a company, a platform",         arc:"builder"    },
      { key:"C", text:"Known for your depth of knowledge and analytical judgement",         arc:"analyst"    },
      { key:"D", text:"Having created a body of work that you're genuinely proud of",      arc:"creator"    },
      { key:"E", text:"Leading a team or community that trusts you completely",             arc:"connector"  }
    ]
  },
  {
    text: "Last one. If you could only be known for one thing professionally, it would be…",
    opts: [
      { key:"A", text:"Your thinking — clear, sharp, always ahead of the curve",           arc:"strategist" },
      { key:"B", text:"Your execution — you made things happen when others talked",        arc:"builder"    },
      { key:"C", text:"Your rigour — nobody questioned your analysis",                     arc:"analyst"    },
      { key:"D", text:"Your originality — you made things nobody else would have",         arc:"creator"    },
      { key:"E", text:"Your impact on people — you changed how they saw themselves",       arc:"connector"  }
    ]
  },
  {
    text: "You've just been told your approach to a project was wrong. How do you actually feel in that moment?",
    opts: [
      { key:"A", text:"Frustrated but already thinking about what the right approach should have been", arc:"strategist" },
      { key:"B", text:"Fine — you'd rather know now than waste more time going the wrong way",          arc:"builder"    },
      { key:"C", text:"Curious — you want to understand specifically where the logic broke down",        arc:"analyst"    },
      { key:"D", text:"Unsettled — you need to sit with it before you can respond properly",            arc:"creator"    },
      { key:"E", text:"You mostly want to understand how the feedback landed with the rest of the team", arc:"connector" }
    ]
  },
  {
    text: "A project you worked hard on didn't land the way you hoped. What stings most?",
    opts: [
      { key:"A", text:"That it didn't resonate — you wanted people to feel something and they didn't",  arc:"creator"    },
      { key:"B", text:"That it didn't work — the outcome wasn't what it was supposed to be",            arc:"builder"    },
      { key:"C", text:"That you missed something in the analysis you should have caught",               arc:"analyst"    },
      { key:"D", text:"That you didn't have enough time to make it what it could have been",            arc:"strategist" },
      { key:"E", text:"That the team put in so much effort and didn't get the recognition they deserved",arc:"connector" }
    ]
  }
];

/* ════════════════════════════════════════════════════════════════
   MILESTONES
════════════════════════════════════════════════════════════════ */
const MILESTONES = {
  5:  "Your profile is starting to take shape ✦",
  10: "Halfway there — the picture is getting clearer ✦",
  16: "Last one. Let's see who you are ✦"
};

/* ════════════════════════════════════════════════════════════════
   INTAKE
════════════════════════════════════════════════════════════════ */
let intakeData = {
  userType: null, studyField: null,
  currentIndustry: null, targetIndustry: null, wantsToStay: null
};
let intakeSteps = [];
let intakeIndex = 0;

const STEP_WHO = {
  id: 'userType', type: 'cards',
  text: "Before we start — which of these describes you right now?",
  hint: "This helps us personalise your results.",
  opts: [
    { key:'student',      label:'Still studying',       sub:"School, college or university" },
    { key:'professional', label:'Working professional', sub:"Currently employed" },
    { key:'figuring',     label:'Between things',       sub:"Figuring out what's next" }
  ]
};

const STEP_STUDY_FIELD = {
  id: 'studyField', type: 'opts',
  text: "What are you currently studying?",
  opts: [
    { key:'commerce',    label:'Commerce / BFM / BAF / BMS' },
    { key:'engineering', label:'Engineering / Computer Science' },
    { key:'arts',        label:'Arts / Humanities / Social Sciences' },
    { key:'science',     label:'Science / Life Sciences' },
    { key:'law',         label:'Law' },
    { key:'design',      label:'Design / Architecture / Media' },
    { key:'other',       label:'Something else' }
  ]
};

const STEP_TARGET_INDUSTRY  = { id:'targetIndustry',  type:'select', text:"What industry are you hoping to work in?",           hint:"Pick the one that excites you most right now." };
const STEP_CURRENT_INDUSTRY = { id:'currentIndustry', type:'select', text:"What industry are you currently working in?" };
const STEP_STAY_OR_SWITCH   = {
  id:'wantsToStay', type:'opts',
  text:"Do you want to grow in this field — or are you thinking of switching?",
  opts: [
    { key:'stay',   label:'Stay and grow here', sub:"I want to build a career in this field" },
    { key:'switch', label:'I want to switch',   sub:"This field isn't right for me" },
    { key:'unsure', label:'Not sure yet',       sub:"Still figuring that out" }
  ]
};
const STEP_SWITCH_TARGET    = { id:'targetIndustry', type:'select', text:"What industry are you hoping to move into?",          hint:"Even a rough sense is helpful." };
const STEP_FIGURING_BG      = {
  id:'studyField', type:'opts',
  text:"What's your background?",
  opts: [
    { key:'commerce',    label:'Commerce / Finance / Business' },
    { key:'engineering', label:'Engineering / Tech' },
    { key:'arts',        label:'Arts / Humanities' },
    { key:'science',     label:'Science / Research' },
    { key:'creative',    label:'Design / Media / Creative' },
    { key:'other',       label:'Something else' }
  ]
};
const STEP_FIGURING_TARGET  = { id:'targetIndustry', type:'select', text:"Is there any industry you're drawn to — even vaguely?", hint:"Go with your gut. There's no wrong answer.", allowSkip: true };

function buildIntakeFlow(type) {
  if (type === 'student')      return [STEP_STUDY_FIELD, STEP_TARGET_INDUSTRY];
  if (type === 'professional') return [STEP_CURRENT_INDUSTRY, STEP_STAY_OR_SWITCH];
  return [STEP_FIGURING_BG, STEP_FIGURING_TARGET];
}

/* ════════════════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════════════════ */
let scores  = {};
let current = 0;
let locked  = false;
let answerHistory = [];
let intakeHistory = []; // tracks intake steps for back navigation

/* ════════════════════════════════════════════════════════════════
   UTILS
════════════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('show'));
  document.getElementById(id).classList.add('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ════════════════════════════════════════════════════════════════
   INTAKE RENDERING
════════════════════════════════════════════════════════════════ */
function startIntake() {
  intakeData  = { userType:null, studyField:null, currentIndustry:null, targetIndustry:null, wantsToStay:null };
  intakeSteps = [];
  intakeIndex = 0;
  intakeHistory = [];
  showScreen('s-intake');
  renderIntakeStep(STEP_WHO);
}

function animateCard(el) {
  el.style.animation = 'none';
  void el.offsetHeight;
  el.style.animation = 'cardIn .35s cubic-bezier(.4,0,.2,1)';
}

function renderIntakeStep(step) {
  const card = document.getElementById('intake-card');
  animateCard(card);
  document.getElementById('intake-headline').textContent = step.text;
  const hint = document.getElementById('intake-hint');
  hint.textContent = step.hint || '';
  const container = document.getElementById('intake-options');
  container.innerHTML = '';

  // Show/hide intake back button
  const intakeBackBtn = document.getElementById('btn-intake-back');
  if (intakeBackBtn) intakeBackBtn.classList.toggle('hidden', intakeHistory.length === 0);

  if (step.type === 'cards') {
    container.className = 'intake-cards';
    step.opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'intake-card-opt';
      btn.innerHTML = `<span class="ic-label">${opt.label}</span><span class="ic-sub">${opt.sub}</span>`;
      btn.addEventListener('click', () => handleIntakeAnswer(step, opt.key));
      container.appendChild(btn);
    });

  } else if (step.type === 'opts') {
    container.className = 'opt-list';
    const keys = 'ABCDEFG';
    step.opts.forEach((opt, i) => {
      const li  = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'opt-item';
      btn.innerHTML = `<span class="opt-key">${keys[i]}</span><span class="opt-text">${opt.label}${opt.sub ? '<span class="opt-sub"> — '+opt.sub+'</span>' : ''}</span>`;
      btn.addEventListener('click', () => handleIntakeAnswer(step, opt.key));
      li.appendChild(btn);
      container.appendChild(li);
    });

  } else if (step.type === 'select') {
    container.className = 'intake-select-container';
    const opts = INDUSTRIES.map(ind => `<option value="${ind}">${ind}</option>`).join('');
    container.innerHTML = `
      <select class="f-in intake-sel" id="intake-sel">
        <option value="" disabled selected>Choose an industry</option>
        ${opts}
      </select>
      <button class="intake-continue btn-cta" id="intake-continue" style="margin-bottom:0">Continue →</button>
      ${step.allowSkip ? `<button class="btn-skip" id="intake-skip">Skip this one →</button>` : ''}
    `;
    document.getElementById('intake-continue').addEventListener('click', () => {
      const sel = document.getElementById('intake-sel');
      if (!sel.value) { sel.style.borderColor = '#c44a24'; return; }
      handleIntakeAnswer(step, sel.value);
    });
    if (step.allowSkip) {
      document.getElementById('intake-skip').addEventListener('click', () => handleIntakeAnswer(step, null));
    }
  }
}

function handleIntakeAnswer(step, value) {
  // Save state before moving forward so we can go back
  intakeHistory.push({
    step,
    intakeDataSnapshot: { ...intakeData },
    intakeStepsSnapshot: [...intakeSteps],
    intakeIndexSnapshot: intakeIndex
  });

  if (step.id === 'userType') {
    intakeData.userType = value;
    intakeSteps = buildIntakeFlow(value);
    intakeIndex = 0;
  } else if (step.id === 'studyField')      { intakeData.studyField      = value; intakeIndex++; }
  else if (step.id === 'currentIndustry')   { intakeData.currentIndustry = value; intakeIndex++; }
  else if (step.id === 'targetIndustry')    { intakeData.targetIndustry  = value; intakeIndex++; }
  else if (step.id === 'wantsToStay') {
    intakeData.wantsToStay = value;
    if (value === 'stay') {
      intakeData.targetIndustry = intakeData.currentIndustry;
    } else if (value === 'switch') {
      intakeSteps.splice(intakeIndex + 1, 0, STEP_SWITCH_TARGET);
    }
    intakeIndex++;
  }
  nextIntakeStep();
}

function nextIntakeStep() {
  if (intakeIndex < intakeSteps.length) {
    renderIntakeStep(intakeSteps[intakeIndex]);
  } else {
    startQuiz();
  }
}

function goIntakeBack() {
  if (intakeHistory.length === 0) return;
  const prev = intakeHistory.pop();
  Object.assign(intakeData, prev.intakeDataSnapshot);
  intakeSteps = prev.intakeStepsSnapshot;
  intakeIndex = prev.intakeIndexSnapshot;
  renderIntakeStep(prev.step);
}

/* ════════════════════════════════════════════════════════════════
   QUIZ
════════════════════════════════════════════════════════════════ */
function startQuiz() {
  scores  = { strategist:0, builder:0, analyst:0, creator:0, connector:0 };
  current = 0;
  locked  = false;
  answerHistory = [];
  showScreen('s-question');
  renderQuestion();
}

function renderQuestion() {
  locked = false;
  const total = QUESTIONS.length;
  const q     = QUESTIONS[current];
  const pct   = Math.round((current / total) * 100);

  document.getElementById('q-counter').textContent  = `${current + 1} / ${total}`;
  document.getElementById('q-pct').textContent      = `${pct}%`;
  document.getElementById('pbar').style.width       = `${pct}%`;
  document.getElementById('q-badge').textContent    = String(current + 1).padStart(2,'0');
  document.getElementById('q-headline').textContent = q.text;

  // Milestone
  const banner = document.getElementById('milestone-banner');
  if (MILESTONES[current]) {
    banner.textContent = MILESTONES[current];
    banner.classList.add('show');
    setTimeout(() => banner.classList.remove('show'), 3200);
  } else {
    banner.classList.remove('show');
  }

  const list = document.getElementById('opt-list');
  list.innerHTML = '';

  // Shuffle options so same archetype doesn't always appear on same letter
  const shuffled = [...q.opts].sort(() => Math.random() - 0.5);
  const keys = 'ABCDE';
  shuffled.forEach((opt, i) => {
    const li  = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'opt-item';
    btn.innerHTML = `<span class="opt-key">${keys[i]}</span><span class="opt-text">${opt.text}</span>`;
    btn.addEventListener('click', () => pick(btn, opt.arc));
    li.appendChild(btn);
    list.appendChild(li);
  });

  animateCard(document.getElementById('q-card'));

  const backBtn = document.getElementById('btn-back');
  if (backBtn) backBtn.classList.toggle('hidden', current === 0);
}

function pick(btn, arc) {
  if (locked) return;
  locked = true;
  document.querySelectorAll('.opt-item').forEach(b => b.classList.remove('chosen'));
  btn.classList.add('chosen');
  scores[arc]++;
  answerHistory.push(arc);

  const isLast = (current === QUESTIONS.length - 1);
  setTimeout(() => {
    current++;
    if (current < QUESTIONS.length) {
      renderQuestion();
    } else {
      if (isLast) launchConfetti('big');
      setTimeout(() => showResult(), 700);
    }
  }, isLast ? 650 : 420);
}

function goBack() {
  if (current === 0 || answerHistory.length === 0) return;
  const prevArc = answerHistory.pop();
  scores[prevArc]--;
  current--;
  renderQuestion();
}

/* ════════════════════════════════════════════════════════════════
   CONFETTI
════════════════════════════════════════════════════════════════ */
function launchConfetti(intensity) {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const count  = intensity === 'big' ? 120 : 50;
  const colors = ['#b8862a','#d4a94e','#2d6e5e','#2a4f8a','#c44a24','#7a3a72','#5a6e2a'];
  const pieces = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width, y: -10,
    w: Math.random() * 10 + 4, h: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * 360, rotSpeed: (Math.random() - 0.5) * 8,
    vx: (Math.random() - 0.5) * 4, vy: Math.random() * 4 + 2,
    opacity: 1
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
      p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; p.vy += 0.08;
      if (p.y > canvas.height * 0.7) p.opacity -= 0.02;
    });
    frame++;
    if (frame < 140 && pieces.some(p => p.opacity > 0)) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }
  draw();
}

/* ════════════════════════════════════════════════════════════════
   VERDICT LOGIC
════════════════════════════════════════════════════════════════ */
function getVerdict(comboKey) {
  const fit = INDUSTRY_FIT[comboKey] || [];
  const { userType, currentIndustry, targetIndustry, wantsToStay } = intakeData;
  if (!userType) return null;

  if (userType === 'professional') {
    const ref = (wantsToStay === 'switch' && targetIndustry) ? targetIndustry : currentIndustry;
    const isMatch = fit.includes(ref);

    if (wantsToStay === 'switch' && targetIndustry) {
      if (isMatch) return {
        type: 'match', label: '✦ Your instinct is right — this move makes sense',
        text: `Your profile is a strong fit for ${targetIndustry}. Your instinct to move there is well-founded. Similar fields where your profile also thrives:`,
        paths: fit.filter(f => f !== targetIndustry).slice(0,3)
      };
      const alsoMismatch = !fit.includes(currentIndustry);
      if (alsoMismatch) return {
        type: 'explore', label: '→ This one needs a real conversation',
        text: `${targetIndustry} may not be the strongest natural fit for your profile — and neither is where you currently are. The right path might be somewhere you haven't fully considered yet. Fields that suit your profile well:`,
        paths: fit.slice(0,4)
      };
      return {
        type: 'explore', label: '→ Worth considering before you make the move',
        text: `Your profile is a stronger fit for where you currently are than for ${targetIndustry}. That doesn't mean the switch is wrong — but here are fields that suit you even better:`,
        paths: fit.slice(0,4)
      };
    }

    if (isMatch) return {
      type: 'match', label: '✦ You\'re in the right place',
      text: `Your profile is a strong fit for ${currentIndustry}. You're drawing on your natural strengths here. The goal now is to find the specific roles that let those strengths shine.`,
      paths: fit.filter(f => f !== currentIndustry).slice(0,3)
    };
    return {
      type: 'mismatch', label: '↗ Worth reconsidering — there may be a better fit',
      text: `Your profile suggests ${currentIndustry} may not be drawing on your strongest traits. That gap between what you're naturally good at and what the job demands is often where the frustration lives. Fields where your profile is a stronger natural fit:`,
      paths: fit.slice(0,4)
    };
  }

  if (userType === 'student' && targetIndustry) {
    const isMatch = fit.includes(targetIndustry);
    if (isMatch) return {
      type: 'match', label: '✦ You\'re heading in the right direction',
      text: `Your profile is a strong fit for ${targetIndustry}. The direction you're pointing toward matches how you naturally think and work. Other fields worth exploring too:`,
      paths: fit.filter(f => f !== targetIndustry).slice(0,3)
    };
    return {
      type: 'explore', label: '→ Something to think about before you commit',
      text: `Your profile suggests ${targetIndustry} may not play to your strongest natural traits. That's worth knowing now rather than later. Fields where your profile is a stronger fit:`,
      paths: fit.slice(0,4)
    };
  }

  return {
    type: 'explore', label: '→ Industries built for how you think',
    text: `Based on your profile, here are the fields where people with your mindset tend to find the most traction:`,
    paths: fit.slice(0,4)
  };
}

/* ════════════════════════════════════════════════════════════════
   RESULT
════════════════════════════════════════════════════════════════ */
function showResult() {
  const sorted = Object.entries(scores).sort((a,b) => b[1]-a[1]);
  const top1   = sorted[0][0];
  const top2   = sorted[1][0];
  const combo  = getCombo(top1, top2);
  const key    = [top1, top2].sort().join('+');
  const total  = QUESTIONS.length;

  document.getElementById('r-combo').textContent          = `${ARCHETYPES[top1].label} + ${ARCHETYPES[top2].label}`;
  document.getElementById('r-tagline').textContent        = combo.tagline;
  document.getElementById('r-desc').textContent           = combo.description;
  document.getElementById('r-primary-note').textContent   = combo.primaryNote;
  document.getElementById('r-secondary-note').textContent = combo.secondaryNote;
  document.getElementById('r-watch-out').textContent      = combo.watchOut;

  // Verdict
  const verdict        = getVerdict(key);
  const verdictSection = document.getElementById('r-verdict');
  if (verdict) {
    verdictSection.style.display = 'block';
    const card = document.getElementById('r-verdict-card');
    card.className = `r-card r-card--verdict r-card--verdict-${verdict.type}`;
    document.getElementById('r-verdict-label').textContent = verdict.label;
    document.getElementById('r-verdict-text').textContent  = verdict.text;
    document.getElementById('r-verdict-paths').innerHTML   = (verdict.paths || []).map(p =>
      `<span class="verdict-chip">${p}</span>`
    ).join('');
  } else {
    verdictSection.style.display = 'none';
  }

  // Career cards
  document.getElementById('r-careers-grid').innerHTML = combo.careers.map((c, i) => `
    <div class="r-career-item" style="animation-delay:${i * 0.07}s">
      <div class="rci-title">${c.title}</div>
      <div class="rci-why">${c.why}</div>
      <div class="rci-day">${c.dayInLife}</div>
    </div>
  `).join('');

  // Score bars
  document.getElementById('score-rows').innerHTML = sorted.map(([arc, val]) => `
    <div class="s-row">
      <div class="s-info">
        <span class="s-name">${ARCHETYPES[arc].label}</span>
        <span class="s-val">${val} / ${total}</span>
      </div>
      <div class="s-track">
        <div class="s-fill ${arc}" data-w="${Math.round((val/total)*100)}%" style="width:0%"></div>
      </div>
    </div>
  `).join('');

  // Reset form
  document.getElementById('form-fields').style.display = 'block';
  document.getElementById('form-thanks').style.display = 'none';
  ['f-name','f-email','f-phone'].forEach(id => document.getElementById(id).value = '');

  showScreen('s-result');

  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll('.s-fill').forEach(el => { el.style.width = el.dataset.w; });
    }, 300);
  });
}

/* ════════════════════════════════════════════════════════════════
   FORM
════════════════════════════════════════════════════════════════ */
function submitForm() {
  const name  = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const phone = document.getElementById('f-phone').value.trim();

  ['f-name','f-email','f-phone'].forEach(id => {
    document.getElementById(id).style.borderColor =
      document.getElementById(id).value.trim() ? '' : '#c44a24';
  });
  if (!name || !email || !phone) return;

  const sorted = Object.entries(scores).sort((a,b) => b[1]-a[1]);
  const top1   = sorted[0][0];
  const top2   = sorted[1][0];
  const combo  = getCombo(top1, top2);
  const key    = [top1, top2].sort().join('+');
  const total  = QUESTIONS.length;

  const scoreBreakdown = sorted.map(([arc, val]) =>
    `${ARCHETYPES[arc].label}: ${val}/${total}`
  ).join(' | ');

  const careerList = combo.careers.map(c => c.title).join(', ');

  const verdict = getVerdict(key);
  const verdictSummary = verdict
    ? `${verdict.label} — ${verdict.text}`
    : 'No verdict';

  const otherFields = verdict && verdict.paths && verdict.paths.length
    ? verdict.paths.join(', ')
    : '—';

  const streamMap = {
    commerce:    'Commerce / Finance / Business',
    engineering: 'Engineering / Computer Science',
    arts:        'Arts / Humanities / Social Sciences',
    science:     'Science / Life Sciences',
    law:         'Law',
    design:      'Design / Architecture / Media',
    creative:    'Design / Media / Creative',
    other:       'Other'
  };
  const streamLabel = intakeData.studyField
    ? (streamMap[intakeData.studyField] || intakeData.studyField)
    : '—';

  const params = new URLSearchParams({
    name, email, phone,
    status:            intakeData.userType || '—',
    result:            `${ARCHETYPES[top1].label} + ${ARCHETYPES[top2].label}`,
    tagline:           combo.tagline,
    description:       combo.description,
    primary_strength:  combo.primaryNote,
    secondary_adds:    combo.secondaryNote,
    watch_out_for:     combo.watchOut,
    suggested_careers: careerList,
    other_fields:      otherFields,
    score_breakdown:   scoreBreakdown,
    verdict:           verdictSummary,
    user_type:         intakeData.userType        || '—',
    study_field:       streamLabel,
    current_industry:  intakeData.currentIndustry || '—',
    target_industry:   intakeData.targetIndustry  || '—',
    wants_to_stay:     intakeData.wantsToStay     || '—'
  });

  fetch('https://script.google.com/macros/s/AKfycbxl2vCg5RMD8ganJIncR7CC8G4kunfvgw-1i4Opzd1UfvyhOtsGTTbxWBD8CmYsgzS9AQ/exec?' + params.toString(), {
    method: 'GET',
    mode: 'no-cors'
  });

  document.getElementById('form-fields').style.display = 'none';
  document.getElementById('form-thanks').style.display = 'block';
}

/* ════════════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════════════ */
document.getElementById('btn-start').addEventListener('click', startIntake);
document.getElementById('btn-submit').addEventListener('click', submitForm);
document.getElementById('btn-replay').addEventListener('click', startIntake);
document.getElementById('btn-back').addEventListener('click', goBack);
document.getElementById('btn-intake-back').addEventListener('click', goIntakeBack);
