const marketingContent = {
    hero: {
      title: "Turn Signals Into Revenue. Instantly.",
      subheadline: "Uncover revenue signals from your competitors, customers, vendors, and market — delivered directly into your workflows.",
      ctaButton: "Join Waitlist",
      rotatingWords: [
        { text: "Competitors", color: "text-blue-600" },
        { text: "Clients", color: "text-green-600" },
        { text: "Markets", color: "text-purple-600" },
        { text: "Revenue Opportunities", color: "text-yellow-500" },
        { text: "Portfolio Companies", color: "text-pink-500" },
        { text: "Partners", color: "text-indigo-500" },
        { text: "Prospects", color: "text-rose-500" }
      ],
      emailPlaceholder: "Enter your work email",
      successMsg: "🎉 Thank you for joining our waitlist!",
      errorMsg: "Something went wrong. Please try again.",
      invalidEmailMsg: "Please enter a valid email address.",
      getEarlyAccess: "Get early access to Relam.ai — launching soon 🚀"
    },
    
    features: [
      {
        icon: (
          <svg aria-label="Integrations" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="17" width="26" height="6" rx="3" fill="#6366F1"/>
            <rect x="17" y="7" width="6" height="26" rx="3" fill="#60A5FA"/>
            <circle cx="20" cy="20" r="18" stroke="#6366F1" strokeWidth="2" fill="none"/>
          </svg>
        ),
        title: "Seamless Integrations",
        description: "Connect Relam.ai to Slack, CRMs, dashboards, and more—insights where your team works.",
      },
      {
        icon: (
          <svg aria-label="AI Personalization" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20" cy="20" rx="15" ry="12" fill="#C7D2FE"/>
            <path d="M12 20c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" stroke="#6366F1" strokeWidth="2"/>
            <circle cx="20" cy="20" r="3" fill="#6366F1"/>
          </svg>
        ),
        title: "AI-Personalized Intelligence",
        description: "AI trained on your data, delivering insights tailored to your GTM strategy.",
      },
      {
        icon: (
          <svg aria-label="Real-Time Signals" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="16" stroke="#60A5FA" strokeWidth="2" fill="#EFF6FF"/>
            <path d="M20 10v8l6 4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20" cy="20" r="2" fill="#6366F1"/>
          </svg>
        ),
        title: "Real-Time Competitive Signals",
        description: "Instant, context-aware alerts for market, competitor, and customer moves.",
      },
      {
        icon: (
          <svg aria-label="Actionable Summaries" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="12" width="20" height="16" rx="4" fill="#6366F1"/>
            <path d="M14 18h12M14 22h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="18" r="1" fill="#fff"/>
            <circle cx="16" cy="22" r="1" fill="#fff"/>
          </svg>
        ),
        title: "Actionable Summaries",
        description: "Signal noise filtered and summarized—only what drives revenue reaches you.",
      },
      {
        icon: (
          <svg aria-label="Enterprise Security" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="14" width="24" height="14" rx="7" fill="#60A5FA"/>
            <path d="M20 20v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="20" cy="20" r="2" fill="#fff"/>
            <rect x="14" y="10" width="12" height="8" rx="4" fill="#6366F1"/>
          </svg>
        ),
        title: "Enterprise-Grade Security",
        description: "Your data is encrypted, privacy-first, and protected by enterprise-grade security.",
      },
    ],
  
    howItWorks: {
      sectionTitle: "How Relam.ai Works",
      step1: {
        label: "Step 1: Data Sources",
        title: "Proprietary Data Sources Powering Insights",
        points: [
          "Internal datasets",
          "Live web signals",
          "Customer-provided target lists",
          "Internal documents and playbooks",
        ],
      },
      step2: {
        label: "Step 2: AI & Computation",
        title: "Advanced AI Turning Data into Strategic Signals",
        highlights: [
          { title: "96% Signal Accuracy", description: "Validated across proprietary datasets" },
          { title: "90% Noise Reduction", description: "Using proprietary computational frameworks" },
          { title: "Enterprise Scalability", description: "Supports Fortune 500 deployments" },
        ],
      },
      step3: {
        label: "Step 3: Insights Delivered",
        title: "Contextual Signals Delivered Where You Work",
      },
    },
  
    howRelamWorks: {
      sectionTitle: "Powerful Insights\nBuilt on Reliable Data",
      dataTrust: [
        { icon: "MapIcon", label: "Property‑level polygons" },
        { icon: "LockClosedIcon", label: "Unique & accurate panel" },
      ],
      bestInClass: {
        accuracy: "+92% accuracy",
        accuracyDesc: "High cardinality categorization",
        insightsTitle: "Powerful insights into places, chains, and markets",
        insightsDesc: "Sales estimation, demographics, business counts, planned development, psychographics, social media traffic, audience expenditures, climate data, and more.",
        learnMore: "Learn more"
      },
      integrations: [
        {
          title: "Platform",
          text: "Explore dashboards, exports and create custom reports directly on our platform.",
          learnMore: "Learn more"
        },
        {
          title: "API",
          text: "Query PAPI, Relam’s robust API to programmatically ingest our data into your own tech stack.",
          learnMore: "Learn more"
        },
        {
          title: "Feeds",
          text: "Export Relam’s proprietary data automatically.",
          learnMore: "Learn more"
        }
      ],
    },
  
    slackMockup: {
      workspaceName: "Relam.ai",
      channels: ["#sales", "#product-marketing", "#executives"],
      messages: [
        {
          sender: "GTM Signals Bot",
          text: "**CompetitorX** launched a new product targeting SMBs. Sales Enablement deck updated.",
          time: "9:31 AM",
        },
        {
          sender: "GTM Signals Bot",
          text: "Customer **ABC Corp** expanded usage by 2x last quarter. Expansion playbook triggered.",
          time: "10:15 AM",
        },
        {
          sender: "GTM Signals Bot",
          text: "Vendor **VendorY** announced a merger. Review impact on current accounts.",
          time: "11:05 AM",
        },
      ],
    },
  
    useCases: [
      {
        role: "Revenue Operations",
        points: [
          "Align GTM execution with live market shifts",
          "Detect revenue risks and expansion signals early",
          "Fuel dashboards with contextual competitive insights",
        ],
      },
      {
        role: "Sales",
        points: [
          "Surface competitive moves inside CRM & Slack",
          "Accelerate deal velocity with fresh intel",
          "Empower sellers with dynamic battlecards",
        ],
      },
      {
        role: "Customer Success",
        points: [
          "Detect churn and expansion signals in accounts",
          "Proactively address risk indicators",
          "Deliver account renewal playbooks with live data",
        ],
      },
      {
        role: "Product Marketing",
        points: [
          "Identify shifts in buyer preferences",
          "Optimize positioning based on live signals",
          "Support enablement teams with fresh context",
        ],
      },
      {
        role: "CXOs",
        points: [
          "Stay informed on market shifts in real time",
          "Align strategy based on emerging trends",
          "Drive smarter boardroom decisions with live GTM insights",
        ],
      },
    ],
  
    detailedAnalysisCTA: {
      label: "Detailed Insights",
      title: "Get a Tailored Competitive Intelligence Report",
      description: "Request a personalized Relam analysis based on your market, accounts, and targets.",
      button: "Schedule a Call",
    },
  
    header: {
      logo: "Relam.ai",
      banner: "🎉 The results are in! ",
      bannerLink: "See the winners",
      nav: ["Features", "How It Works", "Use Cases", "Blog"],
      cta: "Join Waitlist"
    },

    waitlistForm: {
      title: "Join the Relam.ai Early Access",
      subtitle: "Be the first to transform your revenue intelligence.",
      emailPlaceholder: "Your email address",
      cta: "Join Waitlist",
      errorMsg: "Something went wrong. Please try again.",
      invalidEmailMsg: "Please enter a valid email address.",
      successMsg: "Successfully joined the waitlist!"
    },

    growCTA: {
      title: "Grow Your Business With Relam.ai",
      description: "Try our platform for free — join the Early Access waitlist.",
      buttons: {
        demo: "Get a Demo",
        signup: "Sign Up Free",
      },
    },

    detailedAnalysisCTA: {
      label: "Personalized Reports",
      title: "Get a Tailored Intelligence Report for Your Market",
      description: "Unlock custom insights on your competitors, customers, and market shifts — curated specifically for your revenue goals.",
      button: "Schedule a Custom Analysis"
    },

    useCasesSection: {
      title: "Built for Revenue Teams",
      subtitle: "Relam.ai delivers contextual competitive intelligence tailored for every revenue-driving role."
    },

    slackMockup: {
      workspaceName: "Relam.ai Workspace",
      channels: ["# gtm-signals", "# sales", "# product-marketing", "# revenue-intel"],
      directMessages: ["Julia Patel", "Mark T."],
      typing: "Relam Insights is typing..."
    },

    recentInsights: [
      {
        title: "How AI Reshapes Revenue",
        date: "April 2025",
        description: "Discover how context-aware signals change GTM strategy.",
      },
      {
        title: "Modern Revenue Enablement",
        date: "March 2025",
        description: "Why actionable competitive signals matter more today.",
      },
      {
        title: "Turning Intelligence into Action",
        date: "February 2025",
        description: "From insight to impact: Relam's model explained.",
      },
    ],
  
    growCTA: {
      title: "Grow Your Business With Relam.ai",
      description: "Try our platform for free — join the Early Access waitlist.",
      buttons: {
        demo: "Get a Demo",
        signup: "Sign Up Free",
      },
    },
  
    footer: {
      companyTagline: "Contextual Revenue Intelligence. Powered by AI.",
      copyright: " 2025 Relam.ai",
      connect: ["LinkedIn", "Twitter", "Email Us"],
      madeWithLove: "Made with in Toronto",
    },
  };
  
  export default marketingContent;