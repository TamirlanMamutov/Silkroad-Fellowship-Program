import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Fellowship.module.css";

const partners = [
  "Stanford University",
  "Harvard University",
  "McKinsey & Company",
  "Princeton University",
  "University of Sydney",
  "University of South Florida",
  "City University London",
  "San Francisco Bay University",
  "UNICEF",
  "Uzum",
  "Astana Hub",
  "Ingenium School",
  "Silkroad Innovation Hub",
];

const benefits = [
  {
    icon: "🏠",
    title: "Housing",
    description:
      "Fully furnished accommodations provided for the entire 6-week program. You arrive and focus on learning — we handle the rest.",
  },
  {
    icon: "🍽️",
    title: "Meals (Lunch)",
    description:
      "Daily lunch provided on all working days to keep you energized, connected with peers, and focused on what matters.",
  },
  {
    icon: "💰",
    title: "Stipend",
    description:
      "Receive a monthly stipend to support your experience and cover personal day-to-day expenses throughout the fellowship.",
  },
  {
    icon: "🌉",
    title: "Silicon Valley Immersion",
    description:
      "Visit Google, Meta, and Apple campuses. Attend lectures from tech leaders. Experience the epicenter of global innovation first-hand.",
  },
  {
    icon: "🎓",
    title: "Expert Mentorship",
    description:
      "Weekly 1-on-1 guidance from graduates of Stanford, Harvard, and MIT — people who have been where you want to go.",
  },
  {
    icon: "📜",
    title: "Certificate & Letter",
    description:
      "Graduate with an official certificate and a personalized recommendation letter to strengthen your university or job applications.",
  },
];

const timeline = [
  {
    date: "June 1",
    label: "Application Deadline",
    color: "#ef4444",
    desc: "Submit your application before this date",
  },
  {
    date: "June 15",
    label: "Decisions Released",
    color: "#f59e0b",
    desc: "Accepted fellows are notified",
  },
  {
    date: "July",
    label: "Program Begins",
    color: "#16a34a",
    desc: "Kick-off week in Silicon Valley",
  },
  {
    date: "August",
    label: "Program Ends",
    color: "#166534",
    desc: "6-week journey concludes",
  },
];

const mentors = [
  {
    name: "Aiya Seksenbayeva",
    role: "Program Director",
    uni: "Stanford University",
    linkedin: "https://www.linkedin.com/in/aikumis-seksenbayeva/",
  },
  {
    name: "Asset Abdualiyev",
    role: "Lead Mentor",
    uni: "Harvard University",
    linkedin: "https://www.linkedin.com/in/abdualiyev/",
  },
  {
    name: "Naza Aibar",
    role: "Research Lead",
    uni: "MIT",
    linkedin: "https://www.linkedin.com/in/feruzaieva",
  },
  {
    name: "Shokhrukh Ibragimov",
    role: "Startup Mentor",
    uni: "Princeton University",
    linkedin: "https://www.linkedin.com/in/shokhrukh-ibragimov",
  },
];

const faqs = [
  {
    q: "Who can apply to the Silkroad Fellowship Program?",
    a: "The program is open to university students and recent graduates from Central Asia and surrounding regions with a strong academic record and English proficiency. Applicants should be motivated, curious, and ready to immerse themselves in Silicon Valley culture.",
  },
  {
    q: "What does the fellowship package include?",
    a: "Fellows receive fully furnished housing, daily lunch on working days, and a monthly stipend. All program activities — including Silicon Valley site visits, expert workshops, startup immersion, and mentorship sessions — are fully covered.",
  },
  {
    q: "Do I need a U.S. visa to apply?",
    a: "A valid U.S. visa (or the ability to obtain one) is required to participate in the program. Upon acceptance, we provide an official program acceptance letter to support your visa application.",
  },
  {
    q: "What is the duration of the program?",
    a: "The program runs for 6 weeks from July through August. The first 3 weeks are dedicated to Silicon Valley immersion and the final 3 weeks to embedded startup fellowship.",
  },
  {
    q: "What will I gain at the end of the program?",
    a: "Fellows leave with a certificate of completion, a personalized recommendation letter, real-world startup experience, and a lifelong global network of innovators, mentors, and fellow alumni.",
  },
  {
    q: "Is there a cost to participate?",
    a: "Housing and daily lunch are fully covered, and a stipend is provided. Fellows are responsible for their own round-trip airfare, visa fees, and personal expenses.",
  },
];

export default function FellowshipHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <Head>
        <title>Silkroad Fellowship Program – Silicon Valley</title>
        <meta
          name="description"
          content="A 6-week immersive fellowship in Silicon Valley for Central Asian innovators. Housing, meals, and stipend included. Apply by June 1, 2026."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ── NAVBAR ─────────────────────────────── */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <a href="/" className={styles.navLogo}>
            <span className={styles.logoWave}>〜</span>
            <div>
              <div className={styles.logoMain}>Silkroad Innovation Hub</div>
              <div className={styles.logoSub}>Fellowship Program</div>
            </div>
          </a>
          <div className={styles.navLinks}>
            <a href="#program">Program</a>
            <a href="#benefits">Benefits</a>
            <a href="#timeline">Timeline</a>
            <a href="#mentors">Mentors</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="#apply" className={styles.navCta}>
            Apply Now
          </a>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroWrapper}>
          <div>
            <div className={styles.heroBadge}>
              🗓 Applications Open · Deadline June 1, 2026
            </div>
            <h1 className={styles.heroTitle}>
              Silkroad{" "}
              <span className={styles.heroAccent}>Fellowship</span>
              <br />
              Program
            </h1>
            <p className={styles.heroSubtitle}>
              A 6-week immersive experience at the heart of Silicon Valley.
              Intern at leading startups, get mentored by Stanford and Harvard
              graduates, and explore the epicenter of global technology.
            </p>
            <div className={styles.heroPills}>
              <span>🏠 Housing Included</span>
              <span>🍽️ Meals Provided</span>
              <span>💰 Stipend</span>
              <span>🌉 Silicon Valley</span>
            </div>
            <div className={styles.heroButtons}>
              <a href="#apply" className={styles.btnPrimary}>
                Apply Now
              </a>
              <a href="#program" className={styles.btnSecondary}>
                Learn More
              </a>
            </div>
            <p className={styles.heroDeadline}>
              ⏰ Application Deadline:{" "}
              <strong>June 1, 2026</strong>
            </p>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStatCard}>
              <div className={styles.heroStatNum}>6</div>
              <div className={styles.heroStatLabel}>Weeks</div>
            </div>
            <div className={`${styles.heroStatCard} ${styles.heroStatCardAlt}`}>
              <div className={styles.heroStatNum}>July</div>
              <div className={styles.heroStatLabel}>Starts</div>
            </div>
            <div
              className={`${styles.heroStatCard} ${styles.heroStatCardAlt2}`}
            >
              <div className={styles.heroStatNum}>Aug</div>
              <div className={styles.heroStatLabel}>Ends</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS MARQUEE ───────────────────── */}
      <section className={styles.partners}>
        <p className={styles.partnersLabel}>
          In partnership with world-class institutions
        </p>
        <div className={styles.partnersTrack}>
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className={styles.partnerItem}>
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ───────────────────────────── */}
      <section className={styles.section} id="benefits">
        <div className={styles.sectionInner}>
          <div className={styles.sectionBadge}>What You Get</div>
          <h2 className={styles.sectionTitle}>
            Everything You Need to Thrive
          </h2>
          <p className={styles.sectionSubtitle}>
            Fellows receive comprehensive support throughout the full 6-week
            program — so you can focus entirely on growing.
          </p>
          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <div key={i} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAM STRUCTURE ──────────────────── */}
      <section
        className={`${styles.section} ${styles.sectionGreen}`}
        id="program"
      >
        <div className={styles.sectionInner}>
          <div className={`${styles.sectionBadge} ${styles.badgeLight}`}>
            Program Structure
          </div>
          <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>
            6 Weeks. Two Transformative Experiences.
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.subtitleLight}`}>
            Each half of the fellowship is designed to push your limits and
            expand your worldview.
          </p>
          <div className={styles.programGrid}>
            <div className={styles.programCard}>
              <span className={styles.programWeeks}>Weeks 1 – 3</span>
              <span className={styles.programIcon}>🌉</span>
              <h3>Silicon Valley Immersion</h3>
              <p>
                An unforgettable journey visiting the offices of Google, Meta,
                and Apple. Attend lectures from industry experts, meet startup
                founders, and absorb the culture of innovation at its source.
              </p>
              <ul>
                <li>Campus tours: Stanford &amp; Berkeley</li>
                <li>Expert lectures from top tech companies</li>
                <li>Startup networking &amp; ecosystem exploration</li>
                <li>Workshops on entrepreneurship &amp; career growth</li>
              </ul>
            </div>
            <div className={styles.programCard}>
              <span className={styles.programWeeks}>Weeks 4 – 6</span>
              <span className={styles.programIcon}>💡</span>
              <h3>Startup Fellowship</h3>
              <p>
                Work hands-on within a U.S.-based startup team. Contribute to
                real projects, understand business operations from the inside,
                and build skills that set you apart.
              </p>
              <ul>
                <li>Embedded in a real startup team</li>
                <li>Work on live product &amp; business challenges</li>
                <li>Weekly 1-on-1 mentorship sessions</li>
                <li>Final project presentation to startup founders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────── */}
      <section className={styles.section} id="timeline">
        <div className={styles.sectionInner}>
          <div className={styles.sectionBadge}>Program Timeline</div>
          <h2 className={styles.sectionTitle}>Key Dates for 2026</h2>
          <p className={styles.sectionSubtitle}>
            Mark your calendar — spots are limited and the deadline is firm.
          </p>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={i} className={styles.timelineItem}>
                <div
                  className={styles.timelineDot}
                  style={{ background: t.color }}
                />
                <div
                  className={styles.timelineDate}
                  style={{ color: t.color }}
                >
                  {t.date}
                </div>
                <div className={styles.timelineLabel}>{t.label}</div>
                <div className={styles.timelineDesc}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTORS ────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.sectionGray}`}
        id="mentors"
      >
        <div className={styles.sectionInner}>
          <div className={styles.sectionBadge}>Our Team</div>
          <h2 className={styles.sectionTitle}>Mentors &amp; Experts</h2>
          <p className={styles.sectionSubtitle}>
            The program is developed and led by graduates of the world&apos;s
            top universities who have navigated the journey you&apos;re about
            to begin.
          </p>
          <div className={styles.mentorsGrid}>
            {mentors.map((m, i) => (
              <div key={i} className={styles.mentorCard}>
                <div className={styles.mentorAvatar}>
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className={styles.mentorName}>{m.name}</h3>
                <p className={styles.mentorRole}>{m.role}</p>
                <p className={styles.mentorUni}>{m.uni}</p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.mentorLinkedin}
                >
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY ──────────────────────────────── */}
      <section className={styles.applySection} id="apply">
        <div className={styles.sectionInner}>
          <div className={`${styles.sectionBadge} ${styles.badgeLight}`}>
            Apply Now
          </div>
          <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>
            Start Your Silicon Valley Journey
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.subtitleLight}`}>
            Applications close <strong>June 1, 2026</strong>. Limited spots
            available — don&apos;t wait.
          </p>
          <form
            className={styles.applyForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.formRow}>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.formInput}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formRow}>
              <input
                type="tel"
                placeholder="Phone / WhatsApp"
                className={styles.formInput}
              />
              <input
                type="url"
                placeholder="LinkedIn Profile URL"
                className={styles.formInput}
              />
            </div>
            <textarea
              placeholder="Tell us why you want to join the Silkroad Fellowship Program (optional)"
              className={styles.formTextarea}
              rows={4}
            />
            <button type="submit" className={styles.formSubmit}>
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────── */}
      <section className={styles.section} id="faq">
        <div className={styles.sectionInner}>
          <div className={styles.sectionBadge}>FAQ</div>
          <h2 className={styles.sectionTitle}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div key={i} className={styles.faqItem}>
                <button
                  className={`${styles.faqQ} ${openFaq === i ? styles.faqQOpen : ""}`}
                  onClick={() => toggleFaq(i)}
                >
                  <span>{f.q}</span>
                  <span
                    className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ""}`}
                  >
                    ▼
                  </span>
                </button>
                {openFaq === i && (
                  <div className={styles.faqA}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <a href="/" className={styles.footerLogo}>
              <span className={styles.logoWave}>〜</span>
              <div>
                <div className={styles.logoMain}>Silkroad Innovation Hub</div>
                <div className={styles.logoSub}>Fellowship Program</div>
              </div>
            </a>
            <p className={styles.footerTagline}>
              Connecting Central Asian talent with Silicon Valley
              opportunities. Building the next generation of innovators.
            </p>
            <p className={styles.footerEmail}>
              📧{" "}
              <a href="mailto:hello@silkroadinnovation.com">
                hello@silkroadinnovation.com
              </a>
            </p>
          </div>
          <div className={styles.footerRight}>
            <h4>Quick Links</h4>
            <a href="#program">Program</a>
            <a href="#benefits">Benefits</a>
            <a href="#timeline">Timeline</a>
            <a href="#mentors">Mentors</a>
            <a href="#faq">FAQ</a>
            <a href="#apply">Apply</a>
          </div>
          <div className={styles.footerContact}>
            <h4>Contact Us</h4>
            <a
              href="https://wa.me/77015222603"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/silkroadfellowship"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://www.linkedin.com/company/silkroad-innovation-hub"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/silkroad_innovation_hub/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 Silkroad Innovation Hub, LLC. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
