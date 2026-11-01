import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react"

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1713952160156-bb59cac789a9?auto=format&fit=crop&w=2200&q=90",
  droneField:
    "https://images.unsplash.com/photo-1697537336320-776545fbe135?auto=format&fit=crop&w=1600&q=85",
  operator:
    "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1600&q=85",
  droneSky:
    "https://images.unsplash.com/photo-1566678408000-b4ed750a936e?auto=format&fit=crop&w=1600&q=85",
  droneClose:
    "https://images.unsplash.com/photo-1541943201372-99066ec6a5c5?auto=format&fit=crop&w=1400&q=85",
  fields:
    "https://images.unsplash.com/photo-1781816928287-e71d9a6c548c?auto=format&fit=crop&w=1600&q=85",
  aerial:
    "https://images.unsplash.com/photo-1775234119600-d20a19c25d24?auto=format&fit=crop&w=1600&q=85",
  sunset:
    "https://images.unsplash.com/photo-1606657609500-286950b741ac?auto=format&fit=crop&w=1600&q=85",
  mapping:
    "https://images.unsplash.com/photo-1740936125381-063828b0e35b?auto=format&fit=crop&w=1400&q=85",
  spraying:
    "https://images.unsplash.com/photo-1713952152768-5f28b8093166?auto=format&fit=crop&w=1600&q=85",
  tractor:
    "https://images.unsplash.com/photo-1634143174678-ecd0c3c2375b?auto=format&fit=crop&w=1600&q=85",
}

const products = [
  {
    slug: "x-series",
    name: "AgriFlyer X Series",
    type: "Precision application",
    image: IMAGES.hero,
    desc: "Purpose-built aerial systems for controlled spraying and autonomous field operations.",
  },
  {
    slug: "vision",
    name: "AgriFlyer Vision",
    type: "Crop intelligence",
    image: IMAGES.droneSky,
    desc: "High-resolution field observation designed to turn aerial imagery into clearer decisions.",
  },
  {
    slug: "scout",
    name: "AgriFlyer Scout",
    type: "Mapping & surveying",
    image: IMAGES.droneClose,
    desc: "Agile surveying systems for terrain assessment, field mapping, and spatial intelligence.",
  },
  {
    slug: "payload",
    name: "Intelligent Payloads",
    type: "Modular systems",
    image: IMAGES.operator,
    desc: "Flexible payload architecture supporting precision application and sensing workflows.",
  },
]

const articles = [
  {
    slug: "drones-transforming-precision-farming",
    category: "Drone Technology",
    date: "Field note 01",
    title: "How Agricultural Drones Are Transforming Precision Farming",
    excerpt:
      "A practical look at how aerial systems are reshaping observation, application, and field planning.",
    image: IMAGES.droneField,
  },
  {
    slug: "aerial-intelligence-crop-monitoring",
    category: "AI & Innovation",
    date: "Field note 02",
    title: "The Role of Aerial Intelligence in Modern Crop Monitoring",
    excerpt:
      "Turning visual field observations into useful context for timely agricultural decisions.",
    image: IMAGES.fields,
  },
  {
    slug: "smarter-spraying",
    category: "Sustainability",
    date: "Field note 03",
    title: "Sustainable Agriculture Through Smarter Spraying Technology",
    excerpt:
      "Why application precision matters for inputs, operators, crops, and surrounding environments.",
    image: IMAGES.spraying,
  },
  {
    slug: "mapping-better-fields",
    category: "Precision Agriculture",
    date: "Field note 04",
    title: "Mapping Better Fields From a New Perspective",
    excerpt:
      "How repeatable aerial mapping helps teams understand terrain and plan operations.",
    image: IMAGES.mapping,
  },
  {
    slug: "autonomy-in-practice",
    category: "Industry Insights",
    date: "Field note 05",
    title: "Responsible Autonomy in Agricultural Operations",
    excerpt:
      "A grounded framework for introducing automated missions into real working farms.",
    image: IMAGES.tractor,
  },
  {
    slug: "data-to-decisions",
    category: "AI & Innovation",
    date: "Field note 06",
    title: "From Field Data to Actionable Decisions",
    excerpt:
      "Building workflows that keep agricultural intelligence clear, useful, and human-led.",
    image: IMAGES.aerial,
  },
]

const capabilities = [
  [
    "01",
    "Autonomous Flight Planning",
    "Mission design and route optimization for repeatable, efficient agricultural operations.",
  ],
  [
    "02",
    "Variable Rate Spraying",
    "Controlled application workflows designed to place inputs with greater precision.",
  ],
  [
    "03",
    "Real-Time Crop Monitoring",
    "Aerial field observations that help reveal crop conditions and emerging issues.",
  ],
  [
    "04",
    "Edge AI Analytics",
    "On-site image processing that supports faster interpretation of field-level information.",
  ],
  [
    "05",
    "Modular Payload System",
    "Flexible configurations that adapt sensing and application tools to the task.",
  ],
  [
    "06",
    "Operational Safety Systems",
    "Layered monitoring and safeguards for responsible deployment in working fields.",
  ],
]

const solutionItems = [
  {
    title: "Precision Spraying",
    image: IMAGES.hero,
    text: "Targeted coverage, application consistency, and variable-rate workflows designed around the realities of each field.",
    points: [
      "Field-aware mission planning",
      "Controlled coverage workflows",
      "Reduced unnecessary exposure",
    ],
  },
  {
    title: "Crop Monitoring",
    image: IMAGES.operator,
    text: "Repeatable aerial observation that helps agronomy teams see field conditions with greater context.",
    points: [
      "High-resolution capture",
      "Crop condition review",
      "Early issue identification",
    ],
  },
  {
    title: "Aerial Mapping",
    image: IMAGES.mapping,
    text: "Create useful spatial records for surveying, terrain visualization, and field-level planning.",
    points: [
      "Field boundary mapping",
      "Terrain visualization",
      "Repeatable survey missions",
    ],
  },
  {
    title: "Agricultural Analytics",
    image: IMAGES.fields,
    text: "Translate aerial imagery into practical layers of information for agronomic decision-support.",
    points: [
      "Imagery processing",
      "AI-assisted observations",
      "Clear data visualization",
    ],
  },
  {
    title: "Autonomous Operations",
    image: IMAGES.droneSky,
    text: "Plan, supervise, and review automated missions through an operator-centered workflow.",
    points: ["Route optimization", "Mission monitoring", "Operational records"],
  },
]

type LinkProps = {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
  "aria-label"?: string
  title?: string
}

function Link({ to, children, className = "", onClick, ...props }: LinkProps) {
  const navigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return
    }

    if (
      to.startsWith("http") ||
      to.startsWith("mailto:") ||
      to.startsWith("tel:")
    )
      return

    event.preventDefault()

    if (to.startsWith("#")) {
      const el = document.querySelector(to)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
      history.pushState(null, "", to)
      onClick?.()
      return
    }

    if (to.startsWith("/#")) {
      const hash = to.substring(1)
      if (window.location.pathname === "/") {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: "smooth" })
        history.pushState(null, "", hash)
        onClick?.()
        return
      }
    }

    if (window.location.pathname !== to) {
      history.pushState({}, "", to)
      window.dispatchEvent(new PopStateEvent("popstate"))
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
    onClick?.()
  }
  return (
    <a href={to} onClick={navigate} className={className} {...props}>
      {children}
    </a>
  )
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function LeafMark() {
  return (
    <svg className="leaf-mark" viewBox="0 0 46 34" aria-hidden="true">
      <path d="M22 28C9 27 3 18 3 4c13 0 22 7 22 19v6" />
      <path d="M25 28c1-11 7-18 18-19 1 11-6 18-18 19Z" />
      <path d="M9 10c7 4 12 9 16 18" />
    </svg>
  )
}

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="AgriFlyer home">
      <LeafMark />
      <span>AgriFlyer</span>
    </Link>
  )
}

function ButtonLink({
  to,
  children,
  light = false,
  ghost = false,
}: {
  to: string
  children: ReactNode
  light?: boolean
  ghost?: boolean
}) {
  return (
    <Link
      to={to}
      className={`btn ${light ? "btn-light" : ""} ${ghost ? "btn-ghost" : ""}`}
    >
      <span>{children}</span>
      <i>
        <Arrow />
      </i>
    </Link>
  )
}

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode
  light?: boolean
}) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <LeafMark /> {children}
    </div>
  )
}

function ScrollOrbit() {
  return (
    <Link
      to="#intro"
      className="scroll-orbit"
      aria-label="Scroll to discover AgriFlyer"
      onClick={() =>
        document.querySelector("#intro")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <svg
        className="orbit-type"
        viewBox="0 0 100 100"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <path id="orbit-text-path" d="M 50,7 A 43,43 0 1,1 49.99,7" />
        </defs>
        <circle className="orbit-border" cx="50" cy="50" r="47.5" />
        <text textLength="246" lengthAdjust="spacing">
          <textPath
            href="#orbit-text-path"
            startOffset="50%"
            textAnchor="middle"
          >
            SMART FARMING EXPLORE MORE ABOUT
          </textPath>
        </text>
      </svg>
      <span className="orbit-center" aria-hidden="true">
        <i />
      </span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const close = () => setOpen(false)
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Brand />
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link to="/about">About</Link>
        <Link to="/technology">Technology</Link>
        <div className="nav-group">
          <Link to="/products">Products</Link>
          <div className="dropdown">
            {products.slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`}>
                <span>{p.type}</span>
                {p.name}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/solutions">Solutions</Link>
        <Link to="/newsroom">Newsroom</Link>
      </nav>
      <div className="header-actions">
        <ButtonLink to="/contact" light>
          Contact us
        </ButtonLink>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu-top">
          <Brand />
          <button onClick={close} aria-label="Close navigation">
            Close
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {[
            ["About", "/about"],
            ["Products", "/products"],
            ["Solutions", "/solutions"],
            ["Technology", "/technology"],
            ["Newsroom", "/newsroom"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
          ].map(([label, to], i) => (
            <Link key={to} to={to} onClick={close}>
              <small>0{i + 1}</small>
              {label}
              <Arrow />
            </Link>
          ))}
        </nav>
        <p>Nature, elevated by intelligent engineering.</p>
      </div>
    </header>
  )
}

function PageHero({
  eyebrow,
  title,
  text,
  image = IMAGES.aerial,
}: {
  eyebrow: string
  title: string
  text: string
  image?: string
}) {
  return (
    <section
      className="page-hero"
      style={{ "--hero-image": `url(${image})` } as React.CSSProperties}
    >
      <div className="page-hero-content">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string
  title: string
  text?: string
  light?: boolean
}) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </div>
  )
}

function ProductCard({
  product,
  index,
}: {
  product: typeof products[number]
  index: number
}) {
  return (
    <article className={`product-card card-${index + 1}`}>
      <Link to={`/products/${product.slug}`} className="product-image">
        <img
          src={product.image}
          alt={`${product.name} agricultural drone system`}
        />
        <span>0{index + 1}</span>
      </Link>
      <div className="product-copy">
        <small>{product.type}</small>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <Link to={`/products/${product.slug}`} className="text-link">
          Explore system <Arrow />
        </Link>
      </div>
    </article>
  )
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  return (
    <footer>
      <div className="footer-top">
        <div>
          <Brand />
          <p>
            Intelligent aerial technology for more informed, precise, and
            responsible agriculture.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <small>Explore</small>
            <Link to="/about">About us</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/newsroom">Newsroom</Link>
          </div>
          <div>
            <small>Products</small>
            {products.slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`}>
                {p.name}
              </Link>
            ))}
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
        <form
          className="newsletter"
          onSubmit={(e) => {
            e.preventDefault()
            setSubscribed(true)
          }}
        >
          <small>Field notes, thoughtfully delivered</small>
          {subscribed ? (
            <p>Thank you. You’re on the illustrative mailing list.</p>
          ) : (
            <label>
              <span className="sr-only">Email address</span>
              <input type="email" required placeholder="Email address" />
              <button aria-label="Subscribe">
                <Arrow />
              </button>
            </label>
          )}
          <em>Demo interaction — no data is transmitted.</em>
        </form>
      </div>
      <div className="footer-word">AgriFlyer</div>
      <div className="footer-bottom">
        <span>© 2025 AgriFlyer. Illustrative concept.</span>
        <span>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}

function Home() {
  const [active, setActive] = useState(0)
  return (
    <>
      <section className="home-hero">
        <div className="hero-photo">
          <div className="hero-content">
            <Eyebrow light>Precision agriculture, elevated</Eyebrow>
            <h1>
              The Next Generation
              <br />
              of Farming is Here.
            </h1>
            <div className="hero-support">
              <p>
                Intelligent drone technology, precision operations, and
                real-time field intelligence—working as one.
              </p>
              <div className="hero-buttons">
                <ButtonLink to="/solutions" light>
                  Explore solutions
                </ButtonLink>
                <ButtonLink to="/about" ghost>
                  Discover AgriFlyer
                </ButtonLink>
              </div>
            </div>
          </div>
          <ScrollOrbit />
        </div>
      </section>

      <section className="trust section-shell">
        <Eyebrow>Advancing agriculture together</Eyebrow>
        <h2>Building the Future of Intelligent Agriculture</h2>
        <p>Illustrative ecosystem identities</p>
        <div className="logo-row">
          {[
            "TERRAFORM",
            "FIELD / 01",
            "VERDANT",
            "NORTHLAND",
            "CULTIVA",
            "ORBIT AGRI",
          ].map((x, i) => (
            <span key={x}>
              <i>{["✦", "◒", "⌁", "✣", "◇", "⊙"][i]}</i>
              {x}
            </span>
          ))}
        </div>
      </section>

      <section id="intro" className="intro section-shell">
        <SectionHeading
          eyebrow="Who we are"
          title="We Are Pioneers in Drone Agriculture Innovation."
          text="We bring aerial engineering, agricultural knowledge, and intelligent data together in one coherent operating approach."
        />
        <div className="intro-collage">
          <figure className="image-main">
            <img
              src={IMAGES.operator}
              alt="Field operator working with agricultural technology at sunset"
            />
          </figure>
          <figure className="image-side">
            <img
              src={IMAGES.droneSky}
              alt="Drone flying over an agricultural landscape"
            />
          </figure>
          <div className="intro-note">
            <span>Our purpose</span>
            <p>
              Help field teams see more clearly, act more precisely, and build
              resilient operations.
            </p>
            <ButtonLink to="/about">Discover our story</ButtonLink>
          </div>
        </div>
      </section>

      <section className="products section-shell">
        <SectionHeading
          eyebrow="Our products"
          title="Technology Designed to Transform Every Acre."
          text="A connected ecosystem of aircraft, sensing, and application systems—designed around the work happening on the ground."
        />
        <div className="product-grid">
          {products.slice(0, 3).map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <section className="capabilities">
        <div className="cap-image">
          <img
            src={IMAGES.droneField}
            alt="Agricultural drone in flight over a field"
          />
          <div>
            <small>FIELD SYSTEM / 01</small>
            <span>Engineered for real conditions</span>
          </div>
        </div>
        <div className="cap-content">
          <Eyebrow>Core capabilities</Eyebrow>
          <h2>Intelligence that moves with the field.</h2>
          <div className="accordion">
            {capabilities.map((item, i) => (
              <button
                key={item[1]}
                className={active === i ? "active" : ""}
                onClick={() => setActive(active === i ? -1 : i)}
                aria-expanded={active === i}
              >
                <span>{item[0]}</span>
                <div>
                  <strong>{item[1]}</strong>
                  {active === i && <p>{item[2]}</p>}
                </div>
                <i>{active === i ? "−" : "+"}</i>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="immersive-cta section-shell">
        <div className="cta-orbit">
          AF <span>°</span> 01
        </div>
        <Eyebrow light>Ready for the field</Eyebrow>
        <h2>
          Experience the Power of
          <br />
          Real-Time Drone Operations.
        </h2>
        <p>
          Bring intelligent aerial technology into your fields and discover a
          more informed approach to modern agriculture.
        </p>
        <ButtonLink to="/contact" light>
          Start a conversation
        </ButtonLink>
      </section>

      <section className="news section-shell">
        <SectionHeading
          eyebrow="Newsroom"
          title="Fresh Insights From the World of Agriculture."
          text="Field observations, practical thinking, and emerging ideas from the intersection of agriculture and aerial technology."
        />
        <div className="article-grid">
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <ButtonLink to="/newsroom">Visit the newsroom</ButtonLink>
      </section>

      <ClosingCta />
    </>
  )
}

function ArticleCard({
  article,
  featured = false,
}: {
  article: typeof articles[number]
  featured?: boolean
}) {
  return (
    <article className={`article-card ${featured ? "featured" : ""}`}>
      <Link to={`/newsroom/${article.slug}`} className="article-image">
        <img src={article.image} alt="" />
        <span>
          <Arrow />
        </span>
      </Link>
      <div className="article-meta">
        <span>{article.category}</span>
        <span>{article.date}</span>
      </div>
      <h3>
        <Link to={`/newsroom/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.excerpt}</p>
    </article>
  )
}

function ClosingCta() {
  return (
    <section className="closing-cta">
      <div>
        <Eyebrow light>Build what comes next</Eyebrow>
        <h2>Let’s Build a Smarter Future for Agriculture.</h2>
        <p>
          Explore how intelligent drone technology can support a more informed
          agricultural operation.
        </p>
      </div>
      <div>
        <ButtonLink to="/contact" light>
          Contact our team
        </ButtonLink>
        <ButtonLink to="/products" ghost>
          Explore products
        </ButtonLink>
      </div>
    </section>
  )
}

function About() {
  return (
    <>
      <PageHero
        eyebrow="About AgriFlyer"
        title="Growing a Smarter Future."
        text="We believe the future of agriculture will be shaped by better visibility, responsible automation, and technology that respects the field."
        image={IMAGES.sunset}
      />
      <section className="story section-shell">
        <SectionHeading
          eyebrow="Our story"
          title="Born from a simple idea: better perspective creates better decisions."
        />
        <div className="story-grid">
          <p className="lead">
            AgriFlyer is an illustrative agritech brand concept focused on
            bringing intelligent aerial systems closer to practical agricultural
            work.
          </p>
          <div>
            <p>
              Our approach starts with the realities of farming: variable
              terrain, narrow operating windows, changing crop conditions, and
              the need for clear information.
            </p>
            <p>
              We imagine tools that make complexity easier to understand without
              removing the knowledge and judgment of the people working the
              land.
            </p>
          </div>
        </div>
      </section>
      <section className="manifesto">
        <img
          src={IMAGES.aerial}
          alt="Expansive agricultural fields viewed from above"
        />
        <div>
          <Eyebrow light>Our philosophy</Eyebrow>
          <blockquote>
            “Technology should not distance us from the land. It should help us
            understand it with greater clarity.”
          </blockquote>
        </div>
      </section>
      <section className="values section-shell">
        {[
          [
            "01",
            "Our mission",
            "Empower agriculture through accessible, intelligent aerial technology.",
          ],
          [
            "02",
            "Our vision",
            "A future where field decisions are increasingly informed by precision data and responsible automation.",
          ],
          [
            "03",
            "Our approach",
            "Combine engineering, field knowledge, aerial intelligence, and operational expertise.",
          ],
          [
            "04",
            "Our commitment",
            "Responsible technology, operational reliability, environmental awareness, and continuous learning.",
          ],
        ].map((v) => (
          <article key={v[0]}>
            <small>{v[0]}</small>
            <h3>{v[1]}</h3>
            <p>{v[2]}</p>
          </article>
        ))}
      </section>
      <ClosingCta />
    </>
  )
}

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Field applications"
        title="Intelligent Solutions for Every Stage of Agriculture."
        text="From seeing crop conditions to planning precise operations, AgriFlyer connects aerial capability with practical field workflows."
        image={IMAGES.fields}
      />
      <section className="solution-list section-shell">
        <SectionHeading
          eyebrow="Our solutions"
          title="One aerial ecosystem. Many ways to move agriculture forward."
        />
        {solutionItems.map((s, i) => (
          <article key={s.title} className={i % 2 ? "reverse" : ""}>
            <div className="solution-image">
              <img
                src={s.image}
                alt={`${s.title} in an agricultural setting`}
              />
              <span>0{i + 1}</span>
            </div>
            <div>
              <Eyebrow>Application 0{i + 1}</Eyebrow>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <ButtonLink to="/contact">Discuss this solution</ButtonLink>
            </div>
          </article>
        ))}
      </section>
      <ClosingCta />
    </>
  )
}

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Aircraft & systems"
        title="Engineered for the Future of Agriculture."
        text="Discover an illustrative family of agricultural aircraft and intelligent payload concepts built around precision, adaptability, and clear operation."
        image={IMAGES.droneSky}
      />
      <section className="catalog section-shell">
        <SectionHeading
          eyebrow="Product ecosystem"
          title="The right platform starts with the work you need to do."
          text="Specifications shown on detail pages are intentionally illustrative placeholders pending validated product data."
        />
        <div className="catalog-grid">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
      <ClosingCta />
    </>
  )
}

function ProductDetail({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug)
  if (!product) return <NotFound />
  return (
    <>
      <section className="product-hero">
        <img src={product.image} alt={`${product.name} concept`} />
        <div>
          <Eyebrow light>{product.type}</Eyebrow>
          <h1>{product.name}</h1>
          <p>{product.desc}</p>
          <ButtonLink to="/contact" light>
            Request information
          </ButtonLink>
        </div>
      </section>
      <section className="product-overview section-shell">
        <div>
          <Eyebrow>Product overview</Eyebrow>
          <h2>Designed for clear, capable field operations.</h2>
        </div>
        <p>
          This conceptual product platform brings flight planning, aircraft
          awareness, and mission-specific tooling into a unified operating
          experience. Exact hardware details require validation against
          production specifications.
        </p>
      </section>
      <section className="spec-section">
        <div>
          <Eyebrow light>Illustrative specifications</Eyebrow>
          <h2>Technical framework</h2>
          <p>
            Values are intentionally not invented. Confirmed specifications
            would be published here following engineering validation.
          </p>
        </div>
        <dl>
          {[
            "Flight endurance",
            "Payload capacity",
            "Application width",
            "Navigation system",
            "Ingress protection",
            "Operating conditions",
          ].map((x) => (
            <div key={x}>
              <dt>{x}</dt>
              <dd>To be confirmed</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="detail-grid section-shell">
        <div>
          <h3>Key capabilities</h3>
          {capabilities.slice(0, 4).map((c) => (
            <p key={c[1]}>
              <strong>{c[1]}</strong>
              {c[2]}
            </p>
          ))}
        </div>
        <div>
          <h3>Supported applications</h3>
          {[
            "Precision application",
            "Crop observation",
            "Field mapping",
            "Mission documentation",
          ].map((x) => (
            <span key={x}>
              {x}
              <Arrow />
            </span>
          ))}
        </div>
        <div>
          <h3>Operational benefits</h3>
          {[
            "Repeatable workflows",
            "Clear operator controls",
            "Flexible system architecture",
            "Field-aware planning",
          ].map((x) => (
            <span key={x}>
              {x}
              <Arrow />
            </span>
          ))}
        </div>
      </section>
      <FaqList compact />
      <ClosingCta />
    </>
  )
}

function Technology() {
  const tech = [
    [
      "Drone Engineering",
      "Aircraft architecture, payload flexibility, and flight systems shaped around reliability in agricultural environments.",
      IMAGES.droneClose,
    ],
    [
      "Autonomous Flight",
      "Mission planning and route optimization designed to make repeatable operations easier to supervise.",
      IMAGES.droneSky,
    ],
    [
      "Precision Application",
      "Controlled delivery systems and variable-rate workflows that support more deliberate input placement.",
      IMAGES.spraying,
    ],
    [
      "Computer Vision & AI",
      "Image processing and intelligent observation tools that help surface meaningful crop conditions.",
      IMAGES.operator,
    ],
    [
      "Data Intelligence",
      "A practical information layer that translates aerial observations into clearer field context.",
      IMAGES.fields,
    ],
    [
      "Safety & Reliability",
      "Operational monitoring, maintenance awareness, and layered safeguards for responsible deployment.",
      IMAGES.tractor,
    ],
  ]
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Where Aerial Engineering Meets Agricultural Intelligence."
        text="Every layer—from aircraft design to field data—is considered as part of one connected agricultural system."
        image={IMAGES.droneClose}
      />
      <section className="tech-intro section-shell">
        <span>ENGINEERING / INTELLIGENCE / AGRICULTURE</span>
        <h2>Technology only matters when it performs in the field.</h2>
        <p>
          Our conceptual platform is built around a simple principle: advanced
          systems should make agricultural work clearer, not more complicated.
        </p>
      </section>
      <section className="tech-list">
        {tech.map((t, i) => (
          <article key={t[0]}>
            <img src={t[2]} alt="" />
            <div>
              <small>0{i + 1}</small>
              <h2>{t[0]}</h2>
              <p>{t[1]}</p>
              <div className="tech-line">
                <i />
                <i />
                <i />
              </div>
            </div>
          </article>
        ))}
      </section>
      <ClosingCta />
    </>
  )
}

function Newsroom() {
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")
  const categories = [
    "All",
    "Drone Technology",
    "Precision Agriculture",
    "AI & Innovation",
    "Sustainability",
    "Industry Insights",
  ]
  const q = query.trim().toLowerCase()
  const filtered = articles.filter((a) => {
    const matchCategory = category === "All" || a.category === category
    const matchQuery =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    return matchCategory && matchQuery
  })
  return (
    <>
      <PageHero
        eyebrow="AgriFlyer Journal"
        title="Stories Shaping the Future of Agriculture."
        text="Perspective from the field, thoughtful technology analysis, and practical ideas for a changing agricultural landscape."
        image={IMAGES.tractor}
      />
      <section className="featured-story section-shell">
        <ArticleCard article={articles[0]} featured />
      </section>
      <section className="journal section-shell">
        <div className="journal-tools">
          <div>
            {categories.map((c) => (
              <button
                className={category === c ? "active" : ""}
                key={c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <label>
            <span className="sr-only">Search articles</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories"
            />
            {query ? (
              <button
                type="button"
                className="journal-clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            ) : (
              <span>⌕</span>
            )}
          </label>
        </div>
        <div className="article-grid">
          {filtered.length ? (
            filtered.map((a) => <ArticleCard key={a.slug} article={a} />)
          ) : (
            <p className="empty">No stories match this search yet.</p>
          )}
        </div>
      </section>
    </>
  )
}

function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <NotFound />
  const [copied, setCopied] = useState(false)

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href)
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
    }
  }

  return (
    <article className="article-page">
      <header>
        <Link to="/newsroom" className="back-link">
          ← Back to newsroom
        </Link>
        <Eyebrow>{article.category}</Eyebrow>
        <h1>{article.title}</h1>
        <div>
          <span>{article.date}</span>
          <span>6 minute read</span>
          <span>AgriFlyer editorial team</span>
        </div>
      </header>
      <img className="article-cover" src={article.image} alt="" />
      <div className="article-body">
        <aside>
          Share
          <br />
          <button
            type="button"
            onClick={handleShareLinkedIn}
            aria-label="Share on LinkedIn"
            title="Share on LinkedIn"
          >
            LI
          </button>
          <button
            type="button"
            onClick={handleCopyLink}
            aria-label="Copy article link"
            title="Copy article link"
          >
            {copied ? "✓" : "↗"}
          </button>
          {copied && <div className="share-toast">Link copied!</div>}
        </aside>
        <div>
          <p className="lead">{article.excerpt}</p>
          <p>
            Agricultural operations have always depended on observation. What is
            changing is the perspective available to field teams—and the speed
            at which that perspective can become useful.
          </p>
          <h2>A clearer view of the field</h2>
          <p>
            Aerial systems can provide a consistent view across large and varied
            areas. When planned responsibly, repeated missions help teams
            compare conditions, identify areas that need closer attention, and
            document work over time.
          </p>
          <blockquote>
            Useful innovation begins by respecting field knowledge, then
            extending it with better information.
          </blockquote>
          <h2>From observation to action</h2>
          <p>
            The goal is not more data for its own sake. The goal is a reliable
            path from capture to interpretation to an informed human decision.
            That requires clear interfaces, considered workflows, and honest
            limits around what automated analysis can determine.
          </p>
          <p>
            This article is illustrative editorial content for the AgriFlyer
            concept experience and does not constitute agronomic or operational
            advice.
          </p>
        </div>
      </div>
      <section className="related section-shell">
        <SectionHeading
          eyebrow="Continue reading"
          title="Related field notes"
        />
        <div className="article-grid">
          {articles
            .filter((a) => a.slug !== article.slug)
            .slice(0, 3)
            .map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
        </div>
      </section>
    </article>
  )
}

const faqGroups = [
  {
    category: "Understanding the technology",
    items: [
      [
        "What is agricultural drone technology?",
        "Agricultural drone technology combines aerial platforms, mission planning, sensing, and application tools to support work such as crop observation, mapping, and precision spraying.",
      ],
      [
        "How does precision spraying work?",
        "A planned flight path and controlled application system work together to support consistent coverage. Actual methods and requirements vary by crop, product, location, and regulation.",
      ],
      [
        "How does aerial crop monitoring work?",
        "Drone-mounted sensors capture field imagery that can be reviewed or processed to identify patterns and areas that may warrant closer agronomic inspection.",
      ],
    ],
  },
  {
    category: "Fields & workflows",
    items: [
      [
        "What types of crops can agricultural drones support?",
        "Suitability depends on the crop, field conditions, operation type, local regulations, and aircraft configuration. A field assessment is the right starting point.",
      ],
      [
        "Can drones support agricultural mapping?",
        "Yes. Repeatable aerial capture can support field boundary mapping, terrain visualization, and spatial planning workflows.",
      ],
      [
        "Can agricultural drones integrate with existing farming workflows?",
        "Integration is possible when mission planning, data formats, staff responsibilities, and agronomic processes are considered together.",
      ],
    ],
  },
  {
    category: "Working with AgriFlyer",
    items: [
      [
        "What information is needed to request a solution?",
        "Useful context includes location, crop type, approximate field size, primary application, current process, and desired outcome.",
      ],
      [
        "Do you provide operational support?",
        "This concept site illustrates support pathways. Actual onboarding, training, and service availability would need to be confirmed with a real AgriFlyer representative.",
      ],
    ],
  },
]

function FaqList({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState("0-0")
  const groups = compact
    ? [{ category: "Product questions", items: faqGroups[2].items }]
    : faqGroups
  return (
    <section className={`faq-list section-shell ${compact ? "compact" : ""}`}>
      {!compact && (
        <SectionHeading
          eyebrow="Frequently asked"
          title="Useful answers, without the complexity."
        />
      )}
      {groups.map((group, gi) => (
        <div className="faq-group" key={group.category}>
          <h2>{group.category}</h2>
          <div>
            {group.items.map((item, ii) => {
              const id = `${gi}-${ii}`
              const isOpen = open === id
              return (
                <article key={item[0]}>
                  <button
                    onClick={() => setOpen(isOpen ? "" : id)}
                    aria-expanded={isOpen}
                  >
                    <span>{item[0]}</span>
                    <i>{isOpen ? "−" : "+"}</i>
                  </button>
                  {isOpen && <p>{item[1]}</p>}
                </article>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge base"
        title="Questions, Answered Clearly."
        text="A practical introduction to agricultural drone technology, field workflows, and working with AgriFlyer."
        image={IMAGES.mapping}
      />
      <FaqList />
      <ClosingCta />
    </>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy[field]
        return copy
      })
    }
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const required = ["name", "email", "country", "application", "message"]
    const next: Record<string, string> = {}
    required.forEach((k) => {
      if (!String(data.get(k) || "").trim())
        next[k] = "Please complete this field."
    })
    const emailVal = String(data.get("email") || "")
    if (emailVal && !/^\S+@\S+\.\S+$/.test(emailVal))
      next.email = "Enter a valid email address."
    setErrors(next)
    if (!Object.keys(next).length) {
      setSent(true)
      e.currentTarget.reset()
    }
  }
  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title="Let’s Take Your Agriculture Further."
        text="Tell us about your agricultural requirements and explore how an intelligent aerial workflow could support your operation."
        image={IMAGES.operator}
      />
      <section className="contact-layout section-shell">
        <div className="contact-aside">
          <Eyebrow>Contact</Eyebrow>
          <h2>Begin with your field.</h2>
          <p>
            Share the context of your operation. This concept form demonstrates
            the inquiry experience; no information is transmitted or stored.
          </p>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>hello@[company-domain]</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>To be confirmed</dd>
            </div>
            <div>
              <dt>Office</dt>
              <dd>Location to be confirmed</dd>
            </div>
          </dl>
        </div>
        {sent ? (
          <div className="form-success">
            <LeafMark />
            <h2>Thank you for the context.</h2>
            <p>
              Your demo inquiry has been validated locally. No message was sent
              because this concept has no backend connection.
            </p>
            <button type="button" onClick={() => setSent(false)}>
              Send another inquiry
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={submit} noValidate>
            <Field
              name="name"
              label="Full name"
              required
              error={errors.name}
              onChange={() => clearError("name")}
            />
            <Field name="organization" label="Business / organization" />
            <Field
              name="email"
              label="Email address"
              type="email"
              required
              error={errors.email}
              onChange={() => clearError("email")}
            />
            <Field name="phone" label="Phone number" type="tel" />
            <Field
              name="country"
              label="Country"
              required
              error={errors.country}
              onChange={() => clearError("country")}
            />
            <label
              htmlFor="field-application"
              className={errors.application ? "has-error" : ""}
            >
              <span>Agricultural application *</span>
              <select
                id="field-application"
                name="application"
                defaultValue=""
                aria-invalid={!!errors.application}
                onChange={() => clearError("application")}
              >
                <option value="" disabled>
                  Select an application
                </option>
                {[
                  "Precision Spraying",
                  "Crop Monitoring",
                  "Aerial Mapping",
                  "Agricultural Analytics",
                  "Drone Fleet / Equipment",
                  "Other",
                ].map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
              {errors.application && <small>{errors.application}</small>}
            </label>
            <Field name="size" label="Estimated farm size" />
            <label
              htmlFor="field-message"
              className={`wide ${errors.message ? "has-error" : ""}`}
            >
              <span>Message / requirements *</span>
              <textarea
                id="field-message"
                name="message"
                rows={5}
                aria-invalid={!!errors.message}
                onChange={() => clearError("message")}
                placeholder="Tell us about the field, crop, and outcome you are working toward."
              />
              {errors.message && <small>{errors.message}</small>}
            </label>
            <div className="form-submit">
              <p>
                By submitting, you acknowledge this is a demonstration form.
              </p>
              <button className="btn" type="submit">
                <span>Validate inquiry</span>
                <i>
                  <Arrow />
                </i>
              </button>
            </div>
          </form>
        )}
      </section>
    </>
  )
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  error,
  onChange,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  error?: string
  onChange?: () => void
}) {
  const id = `field-${name}`
  return (
    <label htmlFor={id} className={error ? "has-error" : ""}>
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        aria-invalid={!!error}
        onChange={onChange}
      />
      {error && <small>{error}</small>}
    </label>
  )
}

function Legal({ type }: { type: "privacy" | "terms" }) {
  const title = type === "privacy" ? "Privacy Notice" : "Terms of Use"
  return (
    <>
      <PageHero
        eyebrow="Information"
        title={title}
        text="Plain-language placeholder information for this illustrative AgriFlyer concept experience."
        image={IMAGES.fields}
      />
      <section className="legal section-shell">
        <h2>Concept website notice</h2>
        <p>
          This website is an illustrative design and development concept. It
          does not represent a currently operating company service, and forms do
          not transmit or store information.
        </p>
        <h2>Content and specifications</h2>
        <p>
          Product names, system descriptions, and technical frameworks are
          illustrative. Hardware specifications are intentionally left
          unconfirmed rather than fabricated.
        </p>
        <h2>Photography</h2>
        <p>
          Photography is sourced from Unsplash and used for visual
          demonstration. Images do not imply endorsement, partnership, or
          product representation.
        </p>
      </section>
    </>
  )
}

function NotFound() {
  return (
    <section className="not-found">
      <Eyebrow>404 / Off route</Eyebrow>
      <h1>This field hasn’t been mapped.</h1>
      <p>The page you’re looking for does not exist.</p>
      <ButtonLink to="/">Return home</ButtonLink>
    </section>
  )
}

function App() {
  const getNormalizedPath = () => {
    const raw = window.location.pathname
    return raw.length > 1 ? raw.replace(/\/+$/, "") : raw
  }

  const [path, setPath] = useState(getNormalizedPath)

  useEffect(() => {
    const update = () => setPath(getNormalizedPath())
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])

  useEffect(() => {
    const baseTitle = "AgriFlyer | Smart Agricultural Drone Technology"
    if (path === "/") {
      document.title = baseTitle
    } else if (path === "/about") {
      document.title = "About Us | AgriFlyer"
    } else if (path === "/solutions") {
      document.title = "Agricultural Solutions | AgriFlyer"
    } else if (path === "/products") {
      document.title = "Aircraft & Systems | AgriFlyer"
    } else if (path.startsWith("/products/")) {
      const slug = path.split("/")[2]
      const prod = products.find((p) => p.slug === slug)
      document.title = prod
        ? `${prod.name} | AgriFlyer`
        : "Product Not Found | AgriFlyer"
    } else if (path === "/technology") {
      document.title = "Technology & Systems | AgriFlyer"
    } else if (path === "/newsroom") {
      document.title = "Newsroom & Field Notes | AgriFlyer"
    } else if (path.startsWith("/newsroom/")) {
      const slug = path.split("/")[2]
      const art = articles.find((a) => a.slug === slug)
      document.title = art
        ? `${art.title} | AgriFlyer`
        : "Article Not Found | AgriFlyer"
    } else if (path === "/contact") {
      document.title = "Contact Our Team | AgriFlyer"
    } else if (path === "/faq") {
      document.title = "Frequently Asked Questions | AgriFlyer"
    } else if (path === "/privacy") {
      document.title = "Privacy Notice | AgriFlyer"
    } else if (path === "/terms") {
      document.title = "Terms of Use | AgriFlyer"
    } else {
      document.title = "Page Not Found | AgriFlyer"
    }
  }, [path])

  const page = useMemo(() => {
    if (path === "/") return <Home />
    if (path === "/about") return <About />
    if (path === "/solutions") return <Solutions />
    if (path === "/products") return <Products />
    if (path.startsWith("/products/")) {
      const slug = path.split("/")[2]
      return <ProductDetail slug={slug} />
    }
    if (path === "/technology") return <Technology />
    if (path === "/newsroom") return <Newsroom />
    if (path.startsWith("/newsroom/")) {
      const slug = path.split("/")[2]
      return <ArticlePage slug={slug} />
    }
    if (path === "/contact") return <Contact />
    if (path === "/faq") return <FAQ />
    if (path === "/privacy") return <Legal type="privacy" />
    if (path === "/terms") return <Legal type="terms" />
    return <NotFound />
  }, [path])

  return (
    <>
      <Header />
      <main id="main-content">{page}</main>
      <Footer />
    </>
  )
}

export default App
