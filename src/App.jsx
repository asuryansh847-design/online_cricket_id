import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Clock3,
  Headphones,
  KeyRound,
  Menu,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wallet,
  X,
} from "lucide-react";
import "./App.css";

const whatsappUrl =
  "https://wa.me/15550001234?text=Hi%20BetIDWorld%2C%20I%20want%20to%20get%20a%20Betting%20ID.";
const stats = [
  [Users, "2,00,000+", "Active Users Across India"],
  [Clock3, "5-Minute", "Fast ID Activation"],
  [QrCode, "500+", "Supported Gaming Platforms"],
  [Headphones, "24/7", "Live Support During Matches"],
];
const trustPoints = [
  [
    "7+ Years of Experience",
    "Dedicated provider serving 2,00,000+ verified accounts since 2018.",
    Trophy,
  ],
  [
    "100% Sole Ownership & Security",
    "Private registration, zero shared credentials, and encrypted communications.",
    ShieldCheck,
  ],
  [
    "Genuine 24/7 WhatsApp Support",
    "Human assistance active through IPL, ICC, and live match hours.",
    Headphones,
  ],
  [
    "Transparent Pricing",
    "Zero hidden maintenance or surprise renewal fees.",
    Wallet,
  ],
  [
    "Responsible Gaming Commitment",
    "Self-awareness controls, deposit limits, and player safety standards.",
    BadgeCheck,
  ],
];
const idTypes = [
  [
    "Dedicated Cricket Betting ID",
    "Full market access across IPL, T20s, ODIs, Test matches, and session/fancy odds with fast settlements.",
    Trophy,
    "green",
  ],
  [
    "Self Deposit Betting ID",
    "Direct UPI/IMPS deposit and withdrawal directly to the platform gateway without middlemen.",
    Wallet,
    "gold",
  ],
  [
    "Sports Exchange ID (Back & Lay Trading)",
    "Peer-to-peer wagering with higher liquidity, in-play trading, and better odds.",
    ArrowRight,
    "green",
  ],
  [
    "Online Casino ID",
    "Direct access to live dealer tables, Teen Patti, Andar Bahar, Roulette, Baccarat, and slots.",
    Sparkles,
    "gold",
  ],
];
const steps = [
  [
    "Contact Support on WhatsApp",
    "Send a message with your preferred platform or game type.",
    MessageCircle,
  ],
  [
    "Select Platform & ID Type",
    "Choose from 500+ sports exchange or casino platforms.",
    Check,
  ],
  [
    "Complete Secure Payment",
    "Submit payment via verified UPI or bank transfer.",
    Banknote,
  ],
  [
    "Account Verification",
    "Fast setup completed within 3 to 5 minutes.",
    BadgeCheck,
  ],
  [
    "Receive Credentials & Play",
    "Get login details securely via WhatsApp and start playing.",
    KeyRound,
  ],
];
const faqs = [
  [
    "What is an Online Cricket ID and how does it work?",
    "A verified user account on digital sports platforms giving access to live match odds and session markets.",
  ],
  [
    "How quickly can I activate my Betting ID?",
    "Verified and active within 3 to 5 minutes after payment confirmation.",
  ],
  [
    "Is a Self Deposit Betting ID safe?",
    "Yes, direct transactions eliminate middleman and broker risks.",
  ],
  [
    "What is the difference between a Bookie ID and an Exchange ID?",
    "Bookie IDs use fixed house odds; Exchange IDs enable peer-to-peer back and lay trading.",
  ],
];
const tournamentSchedules = {
  "IPL 2027": {
    note: "Selected planning fixtures · March – May 2027",
    matches: [
      ["Season opener", "RCB vs SRH", "Bengaluru"],
      ["Matchweek 1", "MI vs KKR", "Mumbai"],
      ["Matchweek 1", "RR vs CSK", "Guwahati"],
      ["Matchweek 2", "PBKS vs GT", "Mullanpur"],
      ["Matchweek 2", "LSG vs DC", "Lucknow"],
      ["Matchweek 3", "SRH vs KKR", "Hyderabad"],
    ],
  },
  "BBL 2026–27": {
    note: "Selected fixtures · December 2026 – January 2027",
    matches: [
      ["14 Dec", "Sydney Sixers vs Melbourne Stars", "Sydney"],
      ["16 Dec", "Brisbane Heat vs Perth Scorchers", "Brisbane"],
      ["20 Dec", "Melbourne Renegades vs Hobart Hurricanes", "Melbourne"],
      ["2 Jan", "Sydney Thunder vs Adelaide Strikers", "Sydney"],
      ["10 Jan", "Perth Scorchers vs Brisbane Heat", "Perth"],
      ["25 Jan", "BBL 2026–27 Final", "TBC"],
    ],
  },
  "ICC Men’s World Cup 2027": {
    note: "World Cup schedule · October – November 2027",
    matches: [
      ["Opening week", "South Africa vs New Zealand", "South Africa"],
      ["Opening week", "India vs Australia", "South Africa"],
      ["Week 2", "England vs Pakistan", "Zimbabwe"],
      ["Week 3", "Sri Lanka vs Bangladesh", "South Africa"],
      ["Semi-final", "Top 4 qualifier vs Top 4 qualifier", "TBC"],
      ["Final", "World Cup Final", "TBC"],
    ],
  },
};
const keywordPhrases = [
  "Online cricket id",
  "Online betting id",
  "Cricket id",
  "Betting id",
  "Cricket betting id",
  "Online cricket betting id",
  "Online cricket id WhatsApp number",
  "IPL",
  "BBL",
  "ICC Men’s World Cup 2027",
];
const policies = [
  {
    id: "terms",
    label: "Terms & Conditions",
    kicker: "LEGAL / 01",
    intro:
      "The rules for using BetIDWorld services responsibly and transparently.",
    items: [
      [
        "Eligibility",
        "You must be at least 18 years old and legally permitted to use online gaming services in your location.",
      ],
      [
        "Account access",
        "Keep credentials private, provide accurate information, and contact support immediately if you notice unauthorized access.",
      ],
      [
        "Payments and withdrawals",
        "Payment details, processing times, platform rules, and any applicable fees should be confirmed before completing a transaction.",
      ],
      [
        "Responsible use",
        "BetIDWorld does not guarantee winnings. You are responsible for setting limits and following applicable laws.",
      ],
    ],
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    kicker: "LEGAL / 02",
    intro:
      "How we handle information shared when you request an ID or contact support.",
    items: [
      [
        "Information we collect",
        "We may receive your name, WhatsApp number, preferred platform, payment reference, and support messages.",
      ],
      [
        "How we use it",
        "Information is used to activate accounts, answer support requests, verify transactions, prevent fraud, and improve service quality.",
      ],
      [
        "Data protection",
        "Access to support records is limited to authorized personnel and retained only as reasonably necessary for service, security, and legal obligations.",
      ],
      [
        "Your choices",
        "Ask us to review, correct, or delete personal information where applicable by contacting support through WhatsApp.",
      ],
    ],
  },
  {
    id: "fraud",
    label: "Anti-Fraud Policy",
    kicker: "LEGAL / 03",
    intro:
      "Security checks that help protect users, payments, and platform access.",
    items: [
      [
        "Verification checks",
        "We may verify identity, payment ownership, unusual activity, or repeated account requests before activation or withdrawal support.",
      ],
      [
        "Red flags",
        "Requests for OTPs, passwords, remote access, or payments to an unverified number should be treated as suspicious.",
      ],
      [
        "Reporting",
        "Send suspicious messages, fake profiles, or payment requests to support with screenshots and transaction details.",
      ],
      [
        "Action we may take",
        "We may pause a transaction, restrict an account, or request additional information when activity appears fraudulent or unsafe.",
      ],
    ],
  },
  {
    id: "responsible",
    label: "Responsible Gaming",
    kicker: "PLAYER SAFETY",
    intro:
      "Betting should stay entertainment, never a way to solve financial problems.",
    items: [
      [
        "Set a budget",
        "Decide your time and money limits before you play. Never use rent, essential expenses, or borrowed money.",
      ],
      [
        "Know the signs",
        "Chasing losses, hiding activity, borrowing to play, or feeling unable to stop are signs to take a break and seek support.",
      ],
      [
        "Use controls",
        "Ask platforms about deposit limits, session reminders, cooling-off periods, and self-exclusion tools.",
      ],
      [
        "Get help",
        "Pause immediately if betting feels difficult to control and speak with a trusted person or a qualified local support service.",
      ],
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTournament, setActiveTournament] = useState("IPL 2027");
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="logo" href="#top" onClick={closeMenu}>
          <span className="logo-shield">
            <ShieldCheck size={20} />
          </span>
          <span>
            Bet<span>ID</span>World
          </span>
        </a>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Primary navigation"
        >
          <a href="#cricket-guide" onClick={closeMenu}>
            Cricket Guide
          </a>
          <a href="#features" onClick={closeMenu}>
            Features
          </a>
          <a href="#id-types" onClick={closeMenu}>
            ID Types
          </a>
          <a href="#schedules" onClick={closeMenu}>
            Schedules
          </a>
          <a href="#how-it-works" onClick={closeMenu}>
            How It Works
          </a>
          <a href="#faqs" onClick={closeMenu}>
            FAQs
          </a>
        </nav>
        <div className="header-actions">
          <a className="whatsapp-button small" href={whatsappUrl}>
            <MessageCircle size={18} /> Get ID on WhatsApp
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
      <main id="top">
        <section className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-badge">
              <Sparkles size={15} /> 5-Minute Instant Account Setup
            </div>
            <h1>
              India's <strong>#1 Trusted</strong> Online Cricket ID &amp;
              Betting ID Provider
            </h1>
            <div className="hero-copy">
              <p>
                BetIDWorld provides information and access guidance for online
                cricket ID, cricket betting ID, sports exchange accounts, and
                related platform services.
              </p>
              <p>
                Explore cricket markets, tournament schedules, account features,
                payment information, and responsible participation guidance
                before making any decision.
              </p>
            </div>
            <div className="hero-actions">
              <a className="whatsapp-button" href={whatsappUrl}>
                <MessageCircle size={20} /> Get Your Cricket ID on WhatsApp{" "}
                <ArrowRight size={18} />
              </a>
              <a className="outline-button" href="#cricket-guide">
                Read the Cricket Guide <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
          <div className="stats-grid">
            {stats.map(([Icon, value, label], index) => (
              <motion.div
                className="stat-card"
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.07 }}
              >
                <Icon className="accent-icon" size={21} />
                <strong>{value}</strong>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="editorial-section" id="cricket-guide">
          <article className="editorial-article">
            <p className="editorial-kicker">CRICKET INFORMATION HUB</p>
            <h2>Cricket Betting Information &amp; Platform Guide</h2>
            <p className="editorial-lead">
              Follow cricket. Understand the markets. Stay informed.
            </p>
            <p>
              Cricket brings together millions of fans across international
              tournaments, domestic leagues and franchise competitions. This
              guide explains cricket betting platforms, match markets, account
              features and responsible participation in plain language.
            </p>
            <p>
              Whether you follow Test cricket, ODIs, T20 competitions or major
              leagues such as the IPL, you can use this information to
              understand how different platforms work before making any
              decision.
            </p>
            <div className="editorial-notice">
              <strong>Important:</strong> Availability, eligibility and legality
              of online money gaming vary by jurisdiction. Verify current
              official laws and regulations in your location before accessing
              any money-based gaming service. Participation should always be
              age-appropriate and within applicable legal requirements.
            </div>
            <h3>What Is a Cricket Betting ID?</h3>
            <p>
              A cricket betting ID generally refers to the account credentials
              used to access an online platform that offers cricket-related
              markets. Depending on the operator, an account may allow users to
              view upcoming fixtures, check available markets and odds, follow
              live match information, manage balances, review transaction
              history and access account settings.
            </p>
            <p>
              The exact functionality depends on the individual operator and the
              jurisdiction in which the service is available. A legitimate
              account should be associated with clear terms, privacy
              information, responsible-gaming policies and appropriate
              regulatory disclosures.
            </p>
            <h3>Explore Cricket Across Every Major Format</h3>
            <div className="editorial-columns">
              <div>
                <h4>T20 Cricket</h4>
                <p>
                  T20 matches are short, high-intensity games where individual
                  moments can significantly influence the result. Readers
                  commonly follow team combinations, recent form, playing XI
                  announcements, venue conditions, powerplay performance,
                  middle-over scoring and death-over execution.
                </p>
              </div>
              <div>
                <h4>IPL &amp; Franchise Cricket</h4>
                <p>
                  Franchise cricket combines international players, domestic
                  talent and fast-changing team strategies. Useful information
                  includes team schedules, match previews, player updates, venue
                  details, statistics and tournament developments.
                </p>
              </div>
              <div>
                <h4>ODI Cricket</h4>
                <p>
                  One-day cricket has a different strategic environment from T20
                  matches. Opening partnerships, middle-over scoring, bowling
                  rotations, pitch conditions, required run rates and death-over
                  performance all shape the match.
                </p>
              </div>
              <div>
                <h4>Test Cricket</h4>
                <p>
                  Test matches require a longer analytical view: pitch
                  deterioration, session performance, batting partnerships,
                  bowling spells, weather, selection and fourth-innings
                  scenarios can all matter.
                </p>
              </div>
            </div>
            <h3>Understand Cricket Markets</h3>
            <p>
              Different platforms may provide different markets depending on the
              sport, competition and jurisdiction. Common categories include
              match markets, player markets, runs and wickets, live markets and
              tournament markets. Live prices and availability can move rapidly
              during play, so always read the specific market rules before
              participating.
            </p>
            <h3>A Better Way to Evaluate an Online Cricket Platform</h3>
            <ol className="editorial-checklist">
              <li>
                <strong>Clear ownership:</strong> Look for identifiable
                information about the company or operator.
              </li>
              <li>
                <strong>Terms and conditions:</strong> Review account rules,
                deposits, withdrawals, restrictions and dispute procedures.
              </li>
              <li>
                <strong>Privacy information:</strong> Understand how personal
                information is collected, stored and processed.
              </li>
              <li>
                <strong>Responsible-gaming information:</strong> Look for
                spending limits, self-exclusion and support resources.
              </li>
              <li>
                <strong>Regulatory information:</strong> Check the jurisdiction,
                licence or regulatory framework that applies.
              </li>
              <li>
                <strong>Transparent payments:</strong> Understand methods,
                limits, processing conditions and fees before transferring
                money.
              </li>
            </ol>
            <h3>Security Comes First</h3>
            <p>
              When evaluating a website, check for an HTTPS-secured connection,
              account-security controls, strong authentication options,
              transparent transaction records, clearly identified support
              channels, proper terms and responsible-gaming information. Avoid
              unrealistic promises such as guaranteed winnings, fixed profits or
              “sure-shot” results. No strategy can eliminate financial risk.
            </p>
            <h3>How Cricket Betting Platforms Typically Work</h3>
            <p className="editorial-flow">
              Create Account <span>→</span> Verify Details <span>→</span> Review
              Terms <span>→</span> Access Markets <span>→</span> Review Rules{" "}
              <span>→</span> Participate Where Legally Permitted <span>→</span>{" "}
              Track Activity
            </p>
            <h3>Why Responsible Participation Matters</h3>
            <p>
              Cricket should remain entertainment, not a guaranteed source of
              income. Set a personal spending limit, never use money needed for
              essentials, avoid chasing losses, take breaks when participation
              stops being enjoyable, never borrow money to gamble and stop if
              gambling becomes difficult to control.
            </p>
            <div className="editorial-notice responsible-notice">
              <strong>Legal and safety reminder:</strong> The legal position for
              online money gaming can change. Users should rely on current
              official legal information applicable to their circumstances.
              Gambling involves financial risk and there are no guaranteed wins
              or returns.
            </div>
          </article>
        </section>
        <section className="content-section trust-section" id="features">
          <div className="section-intro">
            <p className="section-kicker">WHY CHOOSE US</p>
            <h2>
              Why BetIDWorld is India's <em>Most Reliable</em>
              <br className="desktop-break" /> Betting ID Provider
            </h2>
          </div>
          <div className="info-list trust-list">
            {trustPoints.map(([title, body, Icon]) => (
              <motion.article
                className="info-row trust-row"
                key={title}
              >
                <span className="info-icon">
                  <Icon size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="trust-banner">
            <strong>Trusted Since 2018</strong>
            <span>
              2,00,000+ verified players. One promise: fast, fair, and secure —
              every single ID.
            </span>
          </div>
        </section>
        <section className="content-section id-section" id="id-types">
          <div className="section-intro">
            <p className="section-kicker">ID TYPES</p>
            <h2>
              Choose the Right <em>Betting ID</em> for Your
              <br className="desktop-break" /> Needs
            </h2>
          </div>
          <div className="info-list id-list">
            {idTypes.map(([title, body, Icon, tone]) => (
              <motion.article
                className={`info-row id-row ${tone}`}
                key={title}
              >
                <span className="info-icon"><Icon size={21} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <a href={whatsappUrl}>Get this ID <ArrowRight size={15} /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        <section className="content-section steps-section" id="how-it-works">
          <div className="section-intro">
            <p className="section-kicker">HOW IT WORKS</p>
            <h2>
              How to Get Your Betting ID in <em>5 Minutes</em>
            </h2>
          </div>
          <div className="steps-list">
            {steps.map(([title, body, Icon], index) => (
              <motion.article
                className="step-row"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                key={title}
              >
                <div className="step-icon">
                  <Icon size={21} />
                </div>
                <div className="step-copy">
                  <b>STEP {index + 1}</b>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <a className="whatsapp-button centered-cta" href={whatsappUrl}>
            <MessageCircle size={19} /> Start on WhatsApp — It's Free to Ask
          </a>
        </section>
        <section className="content-section payments-section" id="payments">
          <div className="section-intro">
            <p className="section-kicker">PAYMENTS</p>
            <h2>
              Instant UPI Deposits &amp; <em>Fast Cash Withdrawals</em>
            </h2>
            <p>100% direct transactions with zero hidden deductions.</p>
          </div>
          <div className="payment-grid">
            {[
              ["Google Pay", Wallet],
              ["PhonePe", Wallet],
              ["Paytm", Wallet],
              ["BHIM UPI", QrCode],
              ["Net Banking", Banknote],
              ["IMPS Transfer", Banknote],
            ].map(([name, Icon]) => (
              <div className="payment-item" key={name}>
                <span>
                  <Icon size={19} />
                </span>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
          <div className="info-list payment-notes">
            <div>
              <span className="info-icon"><Sparkles size={18} /></span>
              <div>
                <strong>Deposits in Under 60 Seconds</strong>
                <p>UPI and IMPS deposits reflect instantly, so you never miss the start of a match.</p>
              </div>
            </div>
            <div>
              <span className="info-icon"><ShieldCheck size={18} /></span>
              <div>
                <strong>Withdrawals Without Middlemen</strong>
                <p>Cash out directly to your bank — no brokers, no deductions, no waiting games.</p>
              </div>
            </div>
          </div>
          <a className="whatsapp-button centered-cta" href={whatsappUrl}>
            <Banknote size={18} /> Get an Instant Deposit ID
          </a>
        </section>
        <section className="content-section schedule-section" id="schedules">
          <div className="section-intro">
            <p className="section-kicker">MATCH SCHEDULES</p>
            <h2>
              IPL 2027, BBL &amp; ICC Men’s World Cup <em>2027</em> Schedules
            </h2>
            <p>
              Follow the biggest cricket tournaments with a quick fixture board
              for online cricket betting ID planning.
            </p>
          </div>
          <div className="schedule-tabs">
            {Object.keys(tournamentSchedules).map((tournament) => (
              <button
                className={activeTournament === tournament ? "active" : ""}
                onClick={() => setActiveTournament(tournament)}
                key={tournament}
              >
                <CalendarDays size={16} /> {tournament}
              </button>
            ))}
          </div>
          <div className="schedule-board">
            <div className="schedule-board-heading">
              <div>
                <Trophy size={22} />
                <h3>{activeTournament}</h3>
              </div>
              <span>{tournamentSchedules[activeTournament].note}</span>
            </div>
            <div className="fixture-list">
              {tournamentSchedules[activeTournament].matches.map(
                ([date, match, venue]) => (
                  <div className="fixture-row" key={`${date}-${match}`}>
                    <strong>{date}</strong>
                    <span>{match}</span>
                    <small>{venue}</small>
                  </div>
                ),
              )}
            </div>
            <p className="schedule-note">
              IPL 2027 fixtures are planning placeholders until the official
              schedule is released. Confirm dates and venues before placing any
              wager.
            </p>
          </div>
        </section>
        <section className="content-section coverage-section">
          <div className="section-intro">
            <p className="section-kicker">CRICKET COVERAGE</p>
            <h2>
              Everything you need before the <em>first ball</em>
            </h2>
            <p>
              From cricket ID activation to live match support, BetIDWorld keeps
              the important details in one place.
            </p>
          </div>
          <div className="info-list coverage-list">
            <article>
              <CalendarDays size={22} />
              <h3>Season calendars</h3>
              <p>
                Track IPL, BBL, ICC Men’s World Cup 2027 and major T20, ODI and
                Test match windows.
              </p>
            </article>
            <article>
              <MessageCircle size={22} />
              <h3>Live match assistance</h3>
              <p>
                Get help with your online cricket betting ID and platform
                questions on WhatsApp throughout match hours.
              </p>
            </article>
            <article>
              <ShieldCheck size={22} />
              <h3>Clear, responsible access</h3>
              <p>
                Read the terms, verify the platform, set personal limits and
                play only where local rules allow.
              </p>
            </article>
          </div>
          <div
            className="keyword-cloud"
            aria-label="Popular BetIDWorld searches"
          >
            {keywordPhrases.map((phrase) => (
              <span key={phrase}>{phrase}</span>
            ))}
          </div>
        </section>
        <section className="content-section faq-section" id="faqs">
          <div className="section-intro">
            <p className="section-kicker">FAQS</p>
            <h2>
              Frequently Asked Questions About <em>Betting IDs</em>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div
                className={openFaq === index ? "faq-item open" : "faq-item"}
                key={question}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3>{question}</h3>
                  <span>
                    {openFaq === index ? (
                      <ChevronUp size={19} />
                    ) : (
                      <ChevronDown size={19} />
                    )}
                  </span>
                </button>
                {openFaq === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </section>
        <section className="policy-section" aria-label="Policies">
          {policies.map((policy) => (
            <article className="policy-screen" id={policy.id} key={policy.id}>
              <div className="policy-heading">
                <p className="section-kicker">{policy.kicker}</p>
                <h2>{policy.label}</h2>
                <p>{policy.intro}</p>
              </div>
              <div className="policy-grid">
                {policy.items.map(([title, body], index) => (
                  <div className="policy-item" key={title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="policy-updated">
                Last reviewed: September 2026. This information is general
                guidance and does not replace legal advice.
              </p>
            </article>
          ))}
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <a className="logo" href="#top">
              <span className="logo-shield">
                <ShieldCheck size={20} />
              </span>
              <span>
                Bet<span>ID</span>World
              </span>
            </a>
            <p>
              India's trusted provider of verified online cricket ID, online
              betting ID, cricket ID, betting ID, and cricket betting ID
              accounts — with 5-minute activation and 24/7 WhatsApp support
              since 2018.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#features">About Us</a>
            <a href="#id-types">Betting ID Types</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#payments">Payment Methods</a>
          </div>
          <div>
            <h3>Legal &amp; Policies</h3>
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#fraud">Anti-Fraud Policy</a>
            <a href="#responsible">Responsible Gaming</a>
          </div>
        </div>
        <div className="disclaimer">
          <strong>18+ &nbsp; Disclaimer — Play Responsibly</strong>
          <p>
            Online betting involves financial risk. Please play responsibly and
            within personal financial limits. Users must be 18 years or older.
            Check local and state laws regarding online gaming in your
            jurisdiction before participating.
          </p>
        </div>
        <div className="footer-bottom">
          © 2024 BetIDWorld. All rights reserved.
          <span>Built for responsible players.</span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={27} />
        <i />
      </a>
    </div>
  );
}

export default App;
