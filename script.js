'use strict';

/* ═══════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════ */

const QUESTIONS = [
  {
    text: "You are given a vague project with little direction. What excites you most?",
    opts: [
      { key:"A", text:"Breaking the problem into a structured plan",   arc:"strategist" },
      { key:"B", text:"Building something quickly to test ideas",       arc:"builder"    },
      { key:"C", text:"Analyzing numbers and patterns",                 arc:"analyst"    },
      { key:"D", text:"Brainstorming creative approaches",              arc:"creator"    },
      { key:"E", text:"Talking to people to understand their needs",    arc:"connector"  }
    ]
  },
  {
    text: "Which activity sounds most satisfying to you?",
    opts: [
      { key:"A", text:"Solving a complex business problem",             arc:"strategist" },
      { key:"B", text:"Launching a new product",                        arc:"builder"    },
      { key:"C", text:"Analyzing market data",                          arc:"analyst"    },
      { key:"D", text:"Designing a creative campaign",                  arc:"creator"    },
      { key:"E", text:"Helping people improve their lives",             arc:"connector"  }
    ]
  },
  {
    text: "When working in a team, you usually…",
    opts: [
      { key:"A", text:"Create the overall strategy and direction",      arc:"strategist" },
      { key:"B", text:"Take charge and start building things",          arc:"builder"    },
      { key:"C", text:"Analyze insights and make sense of data",        arc:"analyst"    },
      { key:"D", text:"Generate ideas and concepts",                    arc:"creator"    },
      { key:"E", text:"Coordinate people and keep communication clear", arc:"connector"  }
    ]
  },
  {
    text: "What kind of work environment excites you most?",
    opts: [
      { key:"A", text:"High-stakes strategy discussions",               arc:"strategist" },
      { key:"B", text:"A fast-moving startup environment",              arc:"builder"    },
      { key:"C", text:"Data-driven decision making",                    arc:"analyst"    },
      { key:"D", text:"Creative brainstorming sessions",                arc:"creator"    },
      { key:"E", text:"A collaborative, people-first team",             arc:"connector"  }
    ]
  },
  {
    text: "What motivates you most at work?",
    opts: [
      { key:"A", text:"Solving important, complex problems",            arc:"strategist" },
      { key:"B", text:"Creating something from scratch",                arc:"builder"    },
      { key:"C", text:"Discovering hidden insights in data",            arc:"analyst"    },
      { key:"D", text:"Expressing ideas in original ways",              arc:"creator"    },
      { key:"E", text:"Helping others grow and succeed",                arc:"connector"  }
    ]
  },
  {
    text: "If you had a free weekend, you would rather…",
    opts: [
      { key:"A", text:"Read about business strategy or markets",        arc:"strategist" },
      { key:"B", text:"Build a side project or prototype",              arc:"builder"    },
      { key:"C", text:"Analyze trends or financial data",               arc:"analyst"    },
      { key:"D", text:"Work on a creative personal project",            arc:"creator"    },
      { key:"E", text:"Meet interesting new people",                    arc:"connector"  }
    ]
  },
  {
    text: "Your friends would describe you as…",
    opts: [
      { key:"A", text:"A structured, strategic thinker",                arc:"strategist" },
      { key:"B", text:"Action-oriented and driven",                     arc:"builder"    },
      { key:"C", text:"Analytical and detail-oriented",                 arc:"analyst"    },
      { key:"D", text:"Wildly creative",                                arc:"creator"    },
      { key:"E", text:"Empathetic and easy to talk to",                 arc:"connector"  }
    ]
  },
  {
    text: "Which task feels most natural to you?",
    opts: [
      { key:"A", text:"Structuring a messy, complex problem",           arc:"strategist" },
      { key:"B", text:"Turning an idea into a working product",         arc:"builder"    },
      { key:"C", text:"Studying data to find patterns",                 arc:"analyst"    },
      { key:"D", text:"Creating something that didn't exist before",    arc:"creator"    },
      { key:"E", text:"Building genuine, lasting relationships",        arc:"connector"  }
    ]
  },
  {
    text: "You are most curious about…",
    opts: [
      { key:"A", text:"How businesses grow and compete",                arc:"strategist" },
      { key:"B", text:"How products are built and scaled",              arc:"builder"    },
      { key:"C", text:"How markets and economies behave",               arc:"analyst"    },
      { key:"D", text:"How ideas spread and influence people",          arc:"creator"    },
      { key:"E", text:"How people think, feel and make decisions",      arc:"connector"  }
    ]
  },
  {
    text: "You prefer problems that require…",
    opts: [
      { key:"A", text:"Structured, systematic thinking",                arc:"strategist" },
      { key:"B", text:"Rapid experimentation and iteration",            arc:"builder"    },
      { key:"C", text:"Deep, rigorous analysis",                        arc:"analyst"    },
      { key:"D", text:"Imagination and original thinking",              arc:"creator"    },
      { key:"E", text:"Collaboration and strong people skills",         arc:"connector"  }
    ]
  },
  {
    text: "What gives you the most satisfaction?",
    opts: [
      { key:"A", text:"Cracking a difficult, high-stakes problem",      arc:"strategist" },
      { key:"B", text:"Shipping something people actually use",         arc:"builder"    },
      { key:"C", text:"Turning raw data into a clear insight",          arc:"analyst"    },
      { key:"D", text:"Creating something genuinely original",          arc:"creator"    },
      { key:"E", text:"Seeing someone you helped succeed",              arc:"connector"  }
    ]
  },
  {
    text: "If you had to choose a career path today, you would pick…",
    opts: [
      { key:"A", text:"Strategy or consulting",                         arc:"strategist" },
      { key:"B", text:"Startups or product",                            arc:"builder"    },
      { key:"C", text:"Finance or data science",                        arc:"analyst"    },
      { key:"D", text:"Marketing or design",                            arc:"creator"    },
      { key:"E", text:"HR, sales or counselling",                       arc:"connector"  }
    ]
  }
];

const ARCHETYPES = {
  strategist: { label: "Strategist" },
  builder:    { label: "Builder"    },
  analyst:    { label: "Analyst"    },
  creator:    { label: "Creator"    },
  connector:  { label: "Connector"  }
};

// Lookup order: always sort the two keys alphabetically so key is deterministic
const COMBOS = {
  "analyst+builder":     { tagline: "You build with intention. You move fast but stay grounded in data — you know when to iterate and when to commit.", careers: ["Startup Operations","Growth Manager","Product Analytics","Data Product Manager"] },
  "analyst+connector":   { tagline: "You combine deep insight with genuine people skills. You understand human behaviour at both a data and emotional level.", careers: ["People Analytics","UX Research","Behavioural Research","Counselling"] },
  "analyst+creator":     { tagline: "You see the world through data but communicate with impact. You turn complex findings into stories people actually understand.", careers: ["Data Storytelling","Marketing Analytics","Research Journalist","Insights Lead"] },
  "analyst+strategist":  { tagline: "You're rigorous and methodical. You don't just think strategically — you back every move with evidence.", careers: ["Management Consulting","Business Analytics","Corporate Strategy","VC / PE Analyst"] },
  "builder+connector":   { tagline: "You build things with people at the centre. You're energised by teams, customers, and the human side of getting things done.", careers: ["Community Builder","Sales Leader","Customer Success","People-First Founder"] },
  "builder+creator":     { tagline: "You're the rare founder who can both build and tell the story. You create products people love and know how to make them matter.", careers: ["Creative Entrepreneur","Product + Marketing","Content Startup","UX & Product Design"] },
  "builder+strategist":  { tagline: "You combine structured thinking with a bias for action — a rare and powerful mix. You see the whole picture and then go build it.", careers: ["Product Manager","Startup Founder","Strategy & Operations","Chief of Staff"] },
  "connector+creator":   { tagline: "You move people. You create content and experiences that resonate deeply, and you build genuine human connections.", careers: ["Brand Strategy","Public Relations","Marketing","Social Impact Leader"] },
  "connector+strategist":{ tagline: "You lead with clarity and empathy. You're the person who aligns people around a vision and makes it happen.", careers: ["Leadership Roles","Organisational Development","HR Strategy","Chief Operating Officer"] },
  "connector+creator":   { tagline: "You move people. You create content and experiences that resonate deeply, and you build genuine human connections.", careers: ["Brand Strategy","Public Relations","Marketing","Social Impact Leader"] },
  "creator+strategist":  { tagline: "You bring logic and creativity together. You can design a bold strategy and make it feel compelling — a rare combination.", careers: ["Brand Strategy","Marketing Strategy","Innovation Lead","Creative Director"] }
};

function getCombo(a, b) {
  const key = [a, b].sort().join('+');
  return COMBOS[key] || {
    tagline: `You blend the strengths of a ${ARCHETYPES[a].label} and a ${ARCHETYPES[b].label} — a unique combination that opens up a wide range of career paths.`,
    careers: ["Strategy Roles","Creative Leadership","Entrepreneurship","Research & Insights"]
  };
}

/* ═══════════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════════ */
let scores   = {};
let current  = 0;
let locked   = false;

/* ═══════════════════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('show'));
  document.getElementById(id).classList.add('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════════════════════════
   GAME
═══════════════════════════════════════════════════════════════════ */
function startGame() {
  scores  = { strategist:0, builder:0, analyst:0, creator:0, connector:0 };
  current = 0;
  locked  = false;
  showScreen('s-question');
  renderQuestion();
}

function renderQuestion() {
  locked = false;
  const total = QUESTIONS.length;
  const q     = QUESTIONS[current];
  const pct   = Math.round((current / total) * 100);

  document.getElementById('q-counter').textContent = `${current + 1} / ${total}`;
  document.getElementById('q-pct').textContent     = `${pct}%`;
  document.getElementById('pbar').style.width      = `${pct}%`;
  document.getElementById('q-badge').textContent   = String(current + 1).padStart(2,'0');
  document.getElementById('q-headline').textContent = q.text;

  const list = document.getElementById('opt-list');
  list.innerHTML = '';
  q.opts.forEach(opt => {
    const li  = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'opt-item';
    btn.innerHTML = `<span class="opt-key">${opt.key}</span><span class="opt-text">${opt.text}</span>`;
    btn.addEventListener('click', () => pick(btn, opt.arc));
    li.appendChild(btn);
    list.appendChild(li);
  });

  // re-trigger animation
  const card = document.getElementById('q-card');
  card.style.animation = 'none';
  void card.offsetHeight;
  card.style.animation = 'cardIn .35s cubic-bezier(.4,0,.2,1)';
}

function pick(btn, arc) {
  if (locked) return;
  locked = true;

  document.querySelectorAll('.opt-item').forEach(b => b.classList.remove('chosen'));
  btn.classList.add('chosen');
  scores[arc]++;

  setTimeout(() => {
    current++;
    if (current < QUESTIONS.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 420);
}

/* ═══════════════════════════════════════════════════════════════════
   RESULT
═══════════════════════════════════════════════════════════════════ */
function showResult() {
  const sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]);
  const top1   = sorted[0][0];
  const top2   = sorted[1][0];
  const combo  = getCombo(top1, top2);
  const total  = QUESTIONS.length;

  // headline
  document.getElementById('r-combo').textContent   = `${ARCHETYPES[top1].label} + ${ARCHETYPES[top2].label}`;
  document.getElementById('r-tagline').textContent = combo.tagline;

  // career chips
  document.getElementById('career-chips').innerHTML =
    combo.careers.map(c => `<span class="chip">${c}</span>`).join('');

  // score bars
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

  // reset form
  document.getElementById('form-fields').style.display  = 'block';
  document.getElementById('form-thanks').style.display  = 'none';
  ['f-name','f-email','f-phone'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('f-status').value = '';

  showScreen('s-result');

  // animate bars after paint
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll('.s-fill').forEach(el => {
        el.style.width = el.dataset.w;
      });
    }, 200);
  });
}

/* ═══════════════════════════════════════════════════════════════════
   FORM
═══════════════════════════════════════════════════════════════════ */
function submitForm() {
  const name   = document.getElementById('f-name').value.trim();
  const email  = document.getElementById('f-email').value.trim();
  const phone  = document.getElementById('f-phone').value.trim();
  const status = document.getElementById('f-status').value;

  if (!name || !email || !phone || !status) {
    // simple inline validation — highlight empty fields
    ['f-name','f-email','f-phone'].forEach(id => {
      const el = document.getElementById(id);
      el.style.borderColor = el.value.trim() ? '' : '#c44a24';
    });
    document.getElementById('f-status').style.borderColor =
      status ? '' : '#c44a24';
    return;
  }

  // Send to Formspree
  fetch('https://formspree.io/f/xkoqopqv', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      name:    name,
      email:   email,
      phone:   phone,
      status:  status,
      result:  document.getElementById('r-combo').textContent,
      scores:  JSON.stringify(scores)
    })
  });

  document.getElementById('form-fields').style.display = 'none';
  document.getElementById('form-thanks').style.display = 'block';
}

/* ═══════════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════════ */
document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-submit').addEventListener('click', submitForm);
document.getElementById('btn-replay').addEventListener('click', startGame);
