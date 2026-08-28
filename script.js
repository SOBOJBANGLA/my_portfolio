/**
 * A.S.M. ABDULLAH - PORTFOLIO INTERACTIVE JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 0. NATIVE MULTI-LANGUAGE TRANSLATION SYSTEM (ENGLISH & BENGALI)
    // ----------------------------------------------------------------------
    const translations = {
        en: {
            nav: {
                status: "Available for Hire",
                home: "Home",
                about: "About",
                skills: "Skills",
                projects: "Projects",
                faq: "FAQ",
                contact: "Contact",
                talk: "Let's Talk",
                systems: "Systems"
            },
            hero: {
                badge: "Available for Hiring & 40+ Live Commercial Projects",
                greeting: "Hi, I'm",
                role_lead: "I am a",
                description: "Senior Full Stack Web Developer with 3+ years of experience engineering <strong>40+ high-quality client projects</strong>, enterprise HRMS, pharmacy POS systems, software platforms (TeaSoft), government portals (Rangpur Police), ISP portals (LinkLine BD), programmatic ad networks (<strong>Boostrava</strong>), news media, and dynamic web applications using <strong>Laravel, PHP, Vue.js, React, Next.js, and MySQL</strong>.",
                btn_projects: "View 40+ Projects",
                btn_contact: "Contact Me",
                btn_cv: "Download CV",
                social_label: "Connect with me:",
                card_role: "Full Stack & Laravel Architect",
                card_status: "Available for Hiring",
                card_location: "Dhaka, Bangladesh"
            },
            stats: {
                projects_label: "High-Quality Projects",
                exp_label: "Years Experience",
                clients_label: "Featured Live Portals",
                commits_label: "Client Satisfaction"
            },
            about: {
                subtitle: "Biography & Mindset",
                title_prefix: "About",
                title_highlight: "Me",
                card_title: "Architecting Web Solutions",
                bio_p1: "I am a results-driven Full Stack Web Developer with over 3 years of hands-on technical experience having built <strong>over 40+ high-quality live projects</strong> for diverse commercial clients. My expertise spans robust backend architecture (<strong>Laravel, PHP, REST APIs, MySQL</strong>) and modern dynamic frontend & full-stack development (<strong>Vue.js, React.js, Next.js</strong>, JavaScript ES6+, HTML5, CSS3/Tailwind).",
                bio_p2: "From enterprise software platforms like <strong>TeaSoft</strong> and public service portals like <strong>Rangpur Police</strong>, to large-scale HRMS, POS software, ISP broadband platforms, digital news portals, and programmatic ad networks like <strong>Boostrava</strong>, I deliver clean, robust, and scalable code.",
                highlight1_title: "40+ Delivered Client Projects",
                highlight1_desc: "Proven track record delivering reliable, production-ready web apps for clients.",
                highlight2_title: "Complex Business Systems",
                highlight2_desc: "Deep expertise building Laravel/Vue HRMS, POS, ISP Portals, E-Commerce, and Next.js Ad Networks.",
                quick_info_title: "Personal Info & Quick Details",
                info_name: "Full Name",
                info_emp: "Role",
                info_emp_val: "Senior Full Stack Web Developer",
                info_loc: "Location",
                info_loc_val: "Khilgaon, Dhaka-1219, Bangladesh",
                info_email: "Email",
                info_phone: "WhatsApp",
                info_resume: "Resume CV",
                skills_header: "Primary Stack Focus & DevOps:"
            },
            skills: {
                subtitle: "Technical Competencies",
                title_prefix: "Skills &",
                title_highlight: "Technologies",
                cat_backend: "Backend & Database",
                cat_frontend: "Frontend & Full-Stack",
                cat_devops: "DevOps & Deployment",
                spec1_title: "Enterprise ERP & POS",
                spec1_desc: "Automated inventory, accounting ledgers, barcode billing, and multi-branch synchronization.",
                spec2_title: "Programmatic AdTech",
                spec2_desc: "Real-time bidding (RTB), SSP/DSP engines, anti-fraud filters, and sub-50ms banner serving.",
                spec3_title: "FinTech & Gateways",
                spec3_desc: "Seamless integration with bKash, Nagad, SSLCommerz, Aamarpay, Stripe, and PayPal.",
                spec4_title: "Speed & Optimization",
                spec4_desc: "Database indexing, Redis multi-level caching, eager loading, and sub-100ms API response times."
            },
            projects: {
                subtitle: "40+ Client Applications Built",
                title_prefix: "Featured",
                title_highlight: "Live Projects",
                filter_all: "All Projects",
                filter_live: "Live Web Portals",
                filter_enterprise: "Enterprise & POS",
                filter_ecommerce: "E-Commerce",
                filter_ngo: "NGO & Education",
                modal_title: "Project Details"
            },
            timeline: {
                subtitle: "Track Record Across 40+ Projects",
                title_prefix: "Enterprise",
                title_highlight: "Systems Built",
                sys1_date: "AdTech & Next.js Architecture",
                sys1_title: "Boost RAVA Programmatic SSP, DSP & RTB Network",
                sys1_desc: "Full-scale programmatic ad exchange platform engineered with Next.js and React. Integrates Supply-Side Platform (SSP), Demand-Side Platform (DSP), Real-Time Bidding (RTB) engine, and DOOH media delivery with live publisher monetization and advertiser campaign analytics.",
                sys2_date: "ISP Architecture",
                sys2_title: "LinkLine BD ISP Broadband Platform",
                sys2_desc: "Web infrastructure for broadband internet service provider with package plan displays, coverage region locator, bill inquiry module, and direct line request routing.",
                sys3_date: "Enterprise Core",
                sys3_title: "Human Resource Management System (HRMS)",
                sys3_desc: "Full-featured HRM system managing employee master records, salary structure, attendance tracking, leave requests, department hierarchies, performance evaluation, and multi-format reporting.",
                sys4_date: "POS Module",
                sys4_title: "Pharmacy Store Management & Billing POS",
                sys4_desc: "Complete pharmacy software managing medicine stock inventories, purchase orders, expiry alerts, barcode reader checkout, instant thermal invoice printouts, and daily profit analytics.",
                sys5_date: "Accounting & HR",
                sys5_title: "Wholesale Accounts & HR Integrated Solution",
                sys5_desc: "Unified enterprise portal linking wholesale inventory accounts, supplier/customer ledgers, automated invoice generation, payment receipts, and automated staff salary disbursement.",
                sys6_date: "Media Publishing",
                sys6_title: "Online Digital Newspaper System",
                sys6_desc: "High-speed news publishing framework with article categorization, media uploads, breaking news ticker, banner ad manager, and SEO metadata automation.",
                sys7_date: "Diagnostic & Healthcare ERP",
                sys7_title: "OLMS Clinical Laboratory & Pathology ERP",
                sys7_desc: "Automated clinical laboratory software with patient specimen barcode management, pathology test report generation, doctor referral commission tracking, and billing ledger.",
                sys8_date: "Logistics & Supply Chain",
                sys8_title: "Pigeon Express International Courier System",
                sys8_desc: "Enterprise parcel delivery network with live Airway Bill (AWB) status tracking, automated consignment dispatching, delivery agent routing, and branch collection reconciliation."
            },
            faq: {
                subtitle: "Quick Answers",
                title_prefix: "Frequently Asked",
                title_highlight: "Questions"
            },
            contact: {
                subtitle: "Direct Client Access",
                title_prefix: "Contact",
                title_highlight: "Me",
                card_phone_title: "WhatsApp (Instant Chat)",
                btn_wa_chat: "Open WhatsApp Chat",
                copy: "Copy",
                card_email_title: "Direct Gmail / Inbox",
                btn_compose: "Compose Direct Mail",
                card_phone_label: "Phone / Direct Call",
                btn_call: "Call Now",
                card_location_title: "Location & Work Base",
                card_location_desc: "338/17/C, Khilgaon, Dhaka - 1219, Bangladesh",
                card_avail: "Available for Remote & On-Site Contracts",
                form_title: "Send a Message & Contact Directly",
                form_desc: "When you submit below, the form dispatches your message directly to email <strong>abuhmdabdullah72@gmail.com</strong> and WhatsApp (<strong>01639008885</strong>)!",
                label_name: "Your Name",
                placeholder_name: "Client Name",
                label_email: "Your Email / Contact No.",
                placeholder_email: "client@example.com",
                label_subject: "Project Subject",
                placeholder_subject: "New Web Development / Hiring Inquiry",
                label_message: "Project Requirements",
                placeholder_message: "Hello Abdullah, I would like to discuss a web project...",
                btn_submit: "Send Email",
                btn_whatsapp: "Send via WhatsApp",
                toast_success: "Message sent successfully!"
            },
            ai: {
                header_title: "Ask AI about Abdullah",
                header_status: "Instant answers, 24/7",
                welcome_msg: "Hi, I'm Abdullah's AI Assistant 👋 Ask me anything or select a topic below:",
                card1_title: "Tech Stack",
                card1_sub: "Laravel, Vue, Next, MySQL",
                card1_q: "What is Abdullah's full tech stack?",
                card2_title: "Available for Hire",
                card2_sub: "Full-time, Contract & Remote",
                card2_q: "Is Abdullah available for hire or freelance?",
                card3_title: "40+ Projects",
                card3_sub: "Boostrava, ERP, POS, Portals",
                card3_q: "Tell me about his 40+ projects and best work",
                card4_title: "Rates & Pricing",
                card4_sub: "Milestone & Custom Packages",
                card4_q: "What are his hiring rates and pricing?",
                input_placeholder: "Type your question..."
            },
            footer: {
                desc: "Empowering businesses with custom Web Architecture, Enterprise Systems, and High-Performance Web Applications. Dedicated to turning complex client ideas into reliable, production-ready digital solutions.",
                quick_links: "Quick Navigation",
                connect: "Connect Online",
                rights: "All Rights Reserved."
            }
        },
        bn: {
            nav: {
                status: "কাজের জন্য উন্মুক্ত",
                home: "হোম",
                about: "সম্পর্কে",
                skills: "দক্ষতা",
                projects: "প্রজেক্টসমূহ",
                faq: "সাধারণ জিজ্ঞাসা",
                contact: "যোগাযোগ",
                talk: "কথা বলুন",
                systems: "সিস্টেমস"
            },
            hero: {
                badge: "হায়ারিংয়ের জন্য উন্মুক্ত ও ৪০+ সফল লাইভ প্রজেক্ট",
                greeting: "আসসালামু আলাইকুম, আমি",
                role_lead: "আমি একজন",
                description: "৩+ বছরের প্রফেশনাল অভিজ্ঞতাসম্পন্ন সিনিয়র ফুল-স্ট্যাক ওয়েব ডেভেলপার। <strong>৪০টিরও বেশি সফল কমার্শিয়াল প্রজেক্ট</strong>, এন্টারপ্রাইজ HRMS, ফার্মেসি POS, সফটওয়্যার প্ল্যাটফর্ম (TeaSoft), সরকারি পোর্টাল (রংপুর পুলিশ), ISP পোর্টাল (LinkLine BD), প্রোগ্রামেটিক অ্যাড নেটওয়ার্ক (<strong>Boostrava</strong>) এবং ডায়নামিক ওয়েব অ্যাপ্লিকেশন তৈরিতে <strong>Laravel, PHP, Vue.js, React, Next.js ও MySQL</strong> ব্যবহারে বিশেষভাবে দক্ষ।",
                btn_projects: "৪০+ প্রজেক্ট দেখুন",
                btn_contact: "যোগাযোগ করুন",
                btn_cv: "সিভি ডাউনলোড",
                social_label: "সোশ্যাল প্রোফাইল:",
                card_role: "ফুল স্ট্যাক ও লারাভেল আর্কিটেক্ট",
                card_status: "কাজের জন্য প্রস্তুত",
                card_location: "ঢাকা, বাংলাদেশ"
            },
            stats: {
                projects_label: "উন্নতমানের প্রজেক্ট",
                exp_label: "বছরের অভিজ্ঞতা",
                clients_label: "লাইভ পোর্টাল",
                commits_label: "ক্লায়েন্ট সন্তুষ্টি"
            },
            about: {
                subtitle: "পরিচিতি ও দৃষ্টিভঙ্গি",
                title_prefix: "আমার",
                title_highlight: "সম্পর্কে",
                card_title: "আধুনিক ওয়েব সল্যুশন আর্কিটেকচার",
                bio_p1: "আমি একজন অভিজ্ঞ ফুল-স্ট্যাক ওয়েব ডেভেলপার, যার ৩ বছরেরও বেশি বাস্তব কাজের অভিজ্ঞতা রয়েছে এবং বিভিন্ন বাণিজ্যিক ক্লায়েন্টের জন্য <strong>৪০টিরও বেশি উন্নত মানের লাইভ প্রজেক্ট</strong> তৈরি করেছি। আমার মূল দক্ষতা শক্তিশালী ব্যাকএন্ড আর্কিটেকচার (<strong>Laravel, PHP, REST APIs, MySQL</strong>) এবং আধুনিক ফ্রন্টএন্ড/ফুল-স্ট্যাক (<strong>Vue.js, React.js, Next.js</strong>, JavaScript, Tailwind) ডেভেলপমেন্টে।",
                bio_p2: "<strong>TeaSoft</strong> এর মতো এন্টারপ্রাইজ প্ল্যাটফর্ম, <strong>রংপুর পুলিশ</strong>-এর মতো সরকারি সেবা পোর্টাল, বৃহৎ HRMS ও POS সফটওয়্যার, ISP প্ল্যাটফর্ম, ডিজিটাল নিউজ পোর্টাল এবং <strong>Boostrava</strong> অ্যাড এক্সচেঞ্জের মতো জটিল সিস্টেমে আমি ক্লিন ও স্কেলেবল কোড নিশ্চিত করি।",
                highlight1_title: "৪০+ সফল ক্লায়েন্ট প্রজেক্ট",
                highlight1_desc: "ক্লায়েন্টদের জন্য সময়মতো নির্ভুল ও নির্ভরযোগ্য ওয়েব অ্যাপ্লিকেশন ডেলিভারির প্রমাণিত রেকর্ড।",
                highlight2_title: "জটিল বিজনেস সিস্টেমস",
                highlight2_desc: "Laravel ও Vue ভিত্তিক HRMS, POS, ISP পোর্টাল, ই-কমার্স ও Next.js অ্যাড নেটওয়ার্ক তৈরিতে গভীর অভিজ্ঞতা।",
                quick_info_title: "ব্যক্তিগত তথ্য ও যোগাযোগের মাধ্যম",
                info_name: "পূর্ণ নাম",
                info_emp: "পদবী",
                info_emp_val: "সিনিয়র ফুল-স্ট্যাক ওয়েব ডেভেলপার",
                info_loc: "ঠিকানা",
                info_loc_val: "খিলগাঁও, ঢাকা-১২১৯, বাংলাদেশ",
                info_email: "ইমেইল",
                info_phone: "হোয়াটসঅ্যাপ",
                info_resume: "জীবনবৃত্তান্ত (CV)",
                skills_header: "প্রধান টেকনোলজি ও ডেভঅপ্স:"
            },
            skills: {
                subtitle: "কারিগরি দক্ষতা",
                title_prefix: "দক্ষতা ও",
                title_highlight: "টেকনোলজি",
                cat_backend: "ব্যাকএন্ড ও ডাটাবেস",
                cat_frontend: "ফ্রন্টএন্ড ও ফুল-স্ট্যাক",
                cat_devops: "ডেভঅপ্স ও ক্লাউড ডেপ্লয়মেন্ট",
                spec1_title: "এন্টারপ্রাইজ ERP ও POS",
                spec1_desc: "স্বয়ংক্রিয় স্টক ইনভেন্টরি, একাউন্টিং লেজার, বারকোড বিলিং ও মাল্টি-ব্রাঞ্চ সিঙ্ক্রোনাইজেশন।",
                spec2_title: "প্রোগ্রামেটিক অ্যাডটেক",
                spec2_desc: "রিয়েল-টাইম বিডিং (RTB), SSP/DSP ইঞ্জিন, ফ্রড ট্রাফিক ফিল্টার ও দ্রুতগতির ব্যানার সার্ভিং।",
                spec3_title: "ফিনটেক ও পেমেন্ট গেটওয়ে",
                spec3_desc: "বিকাশ, নগদ, SSLCommerz, Aamarpay, Stripe ও PayPal-এর সাথে নিরাপদ ইন্টিগ্রেশন।",
                spec4_title: "স্পিড ও ডাটাবেস অপ্টিমাইজেশন",
                spec4_desc: "ডাটাবেস ইনডেক্সিং, Redis ক্যাশিং, Eager Loading ও সাব-১০০ms API রেসপন্স টাইম নিশ্চিতকরণ।"
            },
            projects: {
                subtitle: "৪০+ সফল ক্লায়েন্ট অ্যাপ্লিকেশন",
                title_prefix: "নির্বাচিত",
                title_highlight: "লাইভ প্রজেক্টসমূহ",
                filter_all: "সকল প্রজেক্ট",
                filter_live: "লাইভ পোর্টাল",
                filter_enterprise: "এন্টারপ্রাইজ ও POS",
                filter_ecommerce: "ই-কমার্স",
                filter_ngo: "এনজিও ও শিক্ষা",
                modal_title: "প্রজেক্টের বিস্তারিত"
            },
            timeline: {
                subtitle: "৪০+ প্রজেক্টে বাস্তব কাজের অভিজ্ঞতা",
                title_prefix: "এন্টারপ্রাইজ",
                title_highlight: "সিস্টেম আর্কিটেকচার",
                sys1_date: "অ্যাডটেক ও Next.js আর্কিটেকচার",
                sys1_title: "Boost RAVA প্রোগ্রামেটিক SSP, DSP ও RTB নেটওয়ার্ক",
                sys1_desc: "Next.js ও React দিয়ে তৈরি পূর্ণাঙ্গ প্রোগ্রামেটিক অ্যাড এক্সচেঞ্জ। এতে Supply-Side (SSP), Demand-Side (DSP), Real-Time Bidding (RTB) ইঞ্জিন এবং রিয়েল-টাইম পাবলিশার মনিটাইজেশন ও ক্যাম্পেইন অ্যানালিটিক্স যুক্ত রয়েছে।",
                sys2_date: "ISP ব্রডব্যান্ড প্ল্যাটফর্ম",
                sys2_title: "LinkLine BD ইন্টারনেট সার্ভিস প্রোভাইডার পোর্টাল",
                sys2_desc: "ব্রডব্যান্ড আইএসপির জন্য আধুনিক ওয়েব প্ল্যাটফর্ম যাতে ইন্টারনেট প্যাকেজ, কভারেজ এরিয়া ম্যাপ, বিল চেক ও নতুন সংযোগের স্বয়ংক্রিয় ব্যবস্থা রয়েছে।",
                sys3_date: "এন্টারপ্রাইজ কোর সিস্টেম",
                sys3_title: "হিউম্যান রিসোর্স ম্যানেজমেন্ট সিস্টেম (HRMS)",
                sys3_desc: "কর্মীদের পূর্ণাঙ্গ ডাটাবেস, বেতন কাঠামো (Payroll), স্বয়ংক্রিয় বায়োমেট্রিক উপস্থিতি, ছুটি অনুমোদন ও মাল্টি-লেভেল পারফরম্যান্স রিপোর্টিং সিস্টেম।",
                sys4_date: "ফার্মেসি POS মডিউল",
                sys4_title: "ফার্মেসি স্টোর ইনভেন্টরি ও বিলিং POS",
                sys4_desc: "ওষুধের স্টক, মেয়াদোত্তীর্ণ এলার্ট, বারকোড স্ক্যানার দিয়ে তাৎক্ষণিক বিক্রি, থার্মাল প্রিন্ট রসিদ ও দৈনিক লাভ-ক্ষতির পূর্ণাঙ্গ সফটওয়্যার।",
                sys5_date: "হোলসেল ও একাউন্টিং",
                sys5_title: "হোলসেল একাউন্টস ও ইন্টিগ্রেটেড HR সল্যুশন",
                sys5_desc: "পাইকারি ব্যবসার স্টক একাউন্ট, সাপ্লায়ার ও কাস্টমার লেজার, স্বয়ংক্রিয় চালান ও কর্মীদের বেতন সমন্বয়ের সমন্বিত সফটওয়্যার।",
                sys6_date: "অনলাইন মিডিয়া প্রকাশনা",
                sys6_title: "অনলাইন ডিজিটাল নিউজপেপার প্ল্যাটফর্ম",
                sys6_desc: "উচ্চগতির সংবাদ প্রকাশনা ফ্রেমওয়ার্ক যাতে ক্যাটাগরি ব্যবস্থাপনা, মাল্টিমিডিয়া আপলোড, ব্রেকিং নিউজ স্ক্রলার এবং স্বয়ংক্রিয় এসইও মেটাডাটা রয়েছে।",
                sys7_date: "ক্লিনিক্যাল ল্যাব ERP",
                sys7_title: "OLMS প্যাথলজি ও ক্লিনিক্যাল ডায়াগনস্টিক ERP",
                sys7_desc: "রোগীর নমুনা বারকোড ট্র্যাকিং, নির্ভুল প্যাথলজি টেস্ট রিপোর্ট তৈরি, ডাক্তার রেফারেল কমিশন হিসাব ও বিলিং লেজার ম্যানেজমেন্ট।",
                sys8_date: "লজিস্টিকস ও কুরিয়ার",
                sys8_title: "Pigeon Express ইন্টারন্যাশনাল কুরিয়ার ট্র্যাকিং",
                sys8_desc: "লাইভ Airway Bill (AWB) ট্র্যাকিং, পার্সেল রাউটিং, ডেলিভারি এজেন্ট ট্র্যাকিং এবং ব্রাঞ্চ কালেকশন রিকনসিলিয়েশন ব্যবস্থা।"
            },
            faq: {
                subtitle: "সাধারণ জিজ্ঞাসা",
                title_prefix: "প্রায়শই জিজ্ঞাসিত",
                title_highlight: "প্রশ্নাবলী"
            },
            contact: {
                subtitle: "সরাসরি যোগাযোগের ঠিকানা",
                title_prefix: "যোগাযোগ",
                title_highlight: "করুন",
                card_phone_title: "হোয়াটসঅ্যাপ (তাৎক্ষণিক চ্যাট)",
                btn_wa_chat: "হোয়াটসঅ্যাপে চ্যাট করুন",
                copy: "কপি",
                card_email_title: "ডাইরেক্ট জিমেইল / ইনবক্স",
                btn_compose: "ইমেইল পাঠান",
                card_phone_label: "সরাসরি ফোন কল",
                btn_call: "কল করুন",
                card_location_title: "অফিস ও কাজের ঠিকানা",
                card_location_desc: "৩৩৮/১৭/সি, খিলগাঁও, ঢাকা - ১২১৯, বাংলাদেশ",
                card_avail: "রিমোট ও ফুল-টাইম কাজের জন্য প্রস্তুত",
                form_title: "সরাসরি মেসেজ বা প্রজেক্ট প্রস্তাব পাঠান",
                form_desc: "নিচের ফর্মে মেসেজ সাবমিট করলে তা সরাসরি <strong>abuhmdabdullah72@gmail.com</strong> ইমেইল এবং হোয়াটসঅ্যাপে (<strong>01639008885</strong>) পৌঁছে যাবে!",
                label_name: "আপনার নাম",
                placeholder_name: "ক্লায়েন্ট / আপনার নাম",
                label_email: "ইমেইল বা ফোন নম্বর",
                placeholder_email: "client@example.com",
                label_subject: "প্রজেক্টের বিষয়",
                placeholder_subject: "নতুন ওয়েব ডেভেলপমেন্ট / হায়ার প্রস্তাব",
                label_message: "কাজের প্রয়োজনীয় বিবরণ",
                placeholder_message: "আসসালামু আলাইকুম আব্দুল্লাহ ভাই, আমি একটি ওয়েব প্রজেক্ট নিয়ে আলোচনা করতে চাই...",
                btn_submit: "ইমেইল পাঠান",
                btn_whatsapp: "হোয়াটসঅ্যাপে পাঠান",
                toast_success: "মেসেজটি সফলভাবে পাঠানো হয়েছে!"
            },
            ai: {
                header_title: "আব্দুল্লাহর AI অ্যাসিস্ট্যান্ট",
                header_status: "তাৎক্ষণিক উত্তর, ২৪/৭ সক্রিয়",
                welcome_msg: "আসসালামু আলাইকুম! আমি আব্দুল্লাহর এআই অ্যাসিস্ট্যান্ট 👋 যেকোনো প্রশ্ন করুন বা নিচের টপিক নির্বাচন করুন:",
                card1_title: "টেক স্ট্যাক",
                card1_sub: "Laravel, Vue, Next, MySQL",
                card1_q: "আব্দুল্লাহর টেক স্ট্যাক ও দক্ষতা কী কী?",
                card2_title: "হায়ারিং স্ট্যাটাস",
                card2_sub: "ফুল-টাইম, কন্ট্রাক্ট ও রিমোট",
                card2_q: "আব্দুল্লাহ কি নতুন প্রজেক্ট বা হায়ার করার জন্য উপলব্ধ?",
                card3_title: "৪০+ প্রজেক্ট",
                card3_sub: "Boostrava, ERP, POS, পোর্টাল",
                card3_q: "তার ৪০+ প্রজেক্ট ও সেরা কাজগুলো সম্পর্কে বলুন",
                card4_title: "রেট ও চার্জ",
                card4_sub: "প্রজেক্ট ও মাইলস্টোন প্যাকেজ",
                card4_q: "তার কাজের রেট ও প্রজেক্ট প্যাকেজ কেমন?",
                input_placeholder: "আপনার প্রশ্নটি লিখুন..."
            },
            footer: {
                desc: "আধুনিক ওয়েব আর্কিটেকচার, এন্টারপ্রাইজ সিস্টেম ও দ্রুতগতির ওয়েব অ্যাপ্লিকেশন তৈরিতে বিশ্বস্ত ডেভেলপার। ক্লায়েন্টের জটিল ধারণাকে নির্ভরযোগ্য ও প্রোডাকশন-রেডি ডিজিটাল সমাধানে রূপান্তর করতে নিবেদিত।",
                quick_links: "গুরুত্বপূর্ণ লিংক",
                connect: "সোশ্যাল প্রোফাইল",
                rights: "সর্বস্বত্ব সংরক্ষিত।"
            }
        }
    };

    // ----------------------------------------------------------------------
    // 1. TYPEWRITER EFFECT IN HERO SECTION WITH BILINGUAL SUPPORT
    // ----------------------------------------------------------------------
    const typewriterElement = document.getElementById('typewriter');
    const phrases_en = [
        "Senior Full-Stack Web Developer",
        "Laravel & PHP Specialist",
        "Vue.js, React.js & Next.js Architect",
        "Creator of 40+ Live Commercial Projects",
        "Enterprise HRMS, POS & AdTech Engineer",
        "Docker, GitHub & cPanel Deployment Expert"
    ];
    const phrases_bn = [
        "সিনিয়র ফুল-স্ট্যাক ওয়েব ডেভেলপার",
        "লারাভেল ও পিএইচপি স্পেশালিস্ট",
        "Vue.js, React.js ও Next.js আর্কিটেক্ট",
        "৪০টিরও বেশি লাইভ কমার্শিয়াল প্রজেক্টের নির্মাতা",
        "এন্টারপ্রাইজ HRMS, POS ও AdTech ইঞ্জিনিয়ার",
        "ডকার, গিটহাব ও সিপ্যানেল ডেপ্লয়মেন্ট এক্সপার্ট"
    ];

    let currentPhrases = phrases_en;
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const delayBetween = 2000;

    function typeEffect() {
        if (!typewriterElement) return;
        const currentPhrase = currentPhrases[phraseIdx] || currentPhrases[0];

        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIdx === currentPhrase.length) {
            currentSpeed = delayBetween;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % currentPhrases.length;
            currentSpeed = 500;
        }

        setTimeout(typeEffect, currentSpeed);
    }
    typeEffect();

    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    // 2. LANGUAGE ENGINE & BILINGUAL FAQ ACCORDION
    // ----------------------------------------------------------------------
    const faqData = {
        en: [
            {
                q: "What technologies does Abdullah specialize in?",
                a: "A.S.M. Abdullah specializes in Laravel, PHP, Vue.js, React.js and Next.js on the frontend/backend, MySQL for databases, REST API development, and deployment with Docker, GitHub and cPanel."
            },
            {
                q: "How much experience does he have?",
                a: "He has 3+ years of professional full-stack development experience and has delivered 40+ live commercial projects, currently working as a Software Engineer at Ontech ICT Ltd."
            },
            {
                q: "Is Abdullah available for hire or freelance work?",
                a: "Yes — he's currently available for hiring, freelance contracts, and remote roles. The fastest way to check availability is to message him directly via WhatsApp (+880 1639008885) or the contact form below."
            },
            {
                q: "What kind of projects has he built?",
                a: "Highlights include the Boost RAVA programmatic ad network (SSP/DSP/RTB), enterprise HRMS & payroll systems, pharmacy and wholesale POS platforms, the LinkLine BD ISP portal, Rangpur Police & Rangpur News portals, and payment gateway integration. Scroll to the Projects section to explore 40+ cases."
            },
            {
                q: "How can I contact Abdullah?",
                a: "You can reach him on WhatsApp at +880 1639008885, by email at abuhmdabdullah72@gmail.com, or by filling out the contact form at the bottom of this page."
            },
            {
                q: "Does he build enterprise software like HRMS, POS, or ERP systems?",
                a: "Yes — he has deep experience building enterprise systems: HRMS & payroll, pharmacy/wholesale POS, clinical lab ERP, automotive garage ERP, garments export management, and courier logistics tracking, built with Laravel, Vue.js, and MySQL."
            }
        ],
        bn: [
            {
                q: "আব্দুল্লাহ কোন কোন টেকনোলজিতে দক্ষ?",
                a: "এ.এস.এম. আব্দুল্লাহর মূল দক্ষতা লারাভেল (Laravel), পিএইচপি (PHP), Vue.js, React.js ও Next.js, ডাটাবেসের জন্য MySQL, REST API এবং Docker, GitHub ও cPanel ডেপ্লয়মেন্টে।"
            },
            {
                q: "তার কাজের অভিজ্ঞতা কতটুকু?",
                a: "তার ৩+ বছরের প্রফেশনাল ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্টের অভিজ্ঞতা রয়েছে এবং তিনি ৪০টিরও বেশি সফল লাইভ কমার্শিয়াল প্রজেক্ট ডেলিভারি করেছেন। বর্তমানে অনটেক আইসিটি লিমিটেডে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে কর্মরত।"
            },
            {
                q: "আব্দুল্লাহ কি রিমোট বা ফ্রিল্যান্স কাজের জন্য উন্মুক্ত?",
                a: "হ্যাঁ — তিনি ফুল-টাইম, পার্ট-টাইম কন্ট্রাক্ট ও ফ্রিল্যান্স প্রজেক্টের জন্য উন্মুক্ত। কাজের জন্য সরাসরি হোয়াটসঅ্যাপে (+880 1639008885) বা নিচের ফর্মের মাধ্যমে মেসেজ পাঠাতে পারেন।"
            },
            {
                q: "তিনি কী ধরনের প্রজেক্ট তৈরি করেছেন?",
                a: "তিনি বুস্ট্রাভা (Boost RAVA) অ্যাডটেক এক্সচেঞ্জ, এন্টারপ্রাইজ HRMS ও পেরোল, ফার্মেসি ও হোলসেল POS, লিংকলাইন বিডি আইএসপি পোর্টাল, রংপুর নিউজ ও পুলিশ পোর্টালসহ অসংখ্য বাস্তবধর্মী সিস্টেম তৈরি করেছেন।"
            },
            {
                q: "আব্দুল্লাহর সাথে কীভাবে যোগাযোগ করবেন?",
                a: "সরাসরি হোয়াটসঅ্যাপ (+880 1639008885), ইমেইল (abuhmdabdullah72@gmail.com) অথবা ওয়েবসাইটের কন্টাক্ট ফর্মের মাধ্যমে যেকোনো সময় মেসেজ পাঠাতে পারেন।"
            },
            {
                q: "তিনি কি এন্টারপ্রাইজ সফটওয়্যার (ERP, POS, HRMS) তৈরি করেন?",
                a: "হ্যাঁ — তিনি এন্টারপ্রাইজ HRMS ও পেরোল, ফার্মেসি/হোলসেল POS, ক্লিনিক্যাল ল্যাব ERP, অটোমোটিভ গ্যারেজ ERP এবং কুরিয়ার লজিস্টিকস ট্র্যাকিং সিস্টেম তৈরিতে বিশেষভাবে অভিজ্ঞ।"
            }
        ]
    };

    function renderFaqAccordion(lang = 'en') {
        const faqListEl = document.getElementById('faq-list');
        if (!faqListEl) return;
        faqListEl.innerHTML = '';
        const items = faqData[lang] || faqData.en;
        items.forEach((item) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item glass-card';
            faqItem.innerHTML = `
                <button class="faq-question" aria-expanded="false">
                    <span>${item.q}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">${item.a}</div>
            `;
            faqListEl.appendChild(faqItem);

            const questionBtn = faqItem.querySelector('.faq-question');
            const answerEl = faqItem.querySelector('.faq-answer');
            questionBtn.addEventListener('click', () => {
                const isOpen = faqItem.classList.contains('open');
                faqListEl.querySelectorAll('.faq-item.open').forEach(openItem => {
                    if (openItem !== faqItem) {
                        openItem.classList.remove('open');
                        openItem.querySelector('.faq-answer').style.maxHeight = null;
                        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    }
                });
                faqItem.classList.toggle('open', !isOpen);
                questionBtn.setAttribute('aria-expanded', String(!isOpen));
                answerEl.style.maxHeight = !isOpen ? `${answerEl.scrollHeight}px` : null;
            });
        });
    }

    let currentLang = localStorage.getItem('portfolio_lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        document.documentElement.lang = lang;

        // Update toggle button text: shows the OTHER language to switch to
        const langIndicators = document.querySelectorAll('#lang-indicator, #mobile-lang-indicator');
        langIndicators.forEach(el => {
            el.textContent = lang === 'en' ? 'বাং' : 'EN';
        });

        // Apply translations to all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keyPath = el.getAttribute('data-i18n');
            const keys = keyPath.split('.');
            let val = translations[lang];
            for (let k of keys) {
                if (val) val = val[k];
            }
            if (val !== undefined && val !== null) {
                if (el.getAttribute('data-i18n-html') === 'true') {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            }
        });

        // Apply data-i18n-q attributes (for prompt cards)
        document.querySelectorAll('[data-i18n-q]').forEach(el => {
            const keyPath = el.getAttribute('data-i18n-q');
            const keys = keyPath.split('.');
            let val = translations[lang];
            for (let k of keys) {
                if (val) val = val[k];
            }
            if (val) el.setAttribute('data-q', val);
        });

        // Apply placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const keyPath = el.getAttribute('data-i18n-placeholder');
            const keys = keyPath.split('.');
            let val = translations[lang];
            for (let k of keys) {
                if (val) val = val[k];
            }
            if (val) el.placeholder = val;
        });

        // Update typewriter phrases
        currentPhrases = lang === 'bn' ? phrases_bn : phrases_en;
        phraseIdx = 0;
        charIdx = 0;
        isDeleting = false;
        if (typewriterElement) typewriterElement.textContent = '';

        // Re-render FAQ Accordion in chosen language immediately!
        renderFaqAccordion(lang);

        // Re-render AI Chat Welcome in the chosen language immediately
        if (typeof renderAiWelcomeMessage === 'function') {
            renderAiWelcomeMessage(lang);
        }
    }

    // Attach click listeners to language toggle buttons
    const langToggleBtn = document.getElementById('lang-toggle');
    const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle');

    function toggleLanguage() {
        const nextLang = currentLang === 'en' ? 'bn' : 'en';
        setLanguage(nextLang);
        showToast(nextLang === 'bn' ? 'বাংলা ভাষা সক্রিয় করা হয়েছে' : 'Language switched to English');
    }

    if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
    if (mobileLangToggleBtn) mobileLangToggleBtn.addEventListener('click', toggleLanguage);

    // ----------------------------------------------------------------------
    // 3. THEME SWITCHER (DARK / LIGHT MODE)
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            showToast(`Switched to ${newTheme.toUpperCase()} mode`);
        });
    }

    // ----------------------------------------------------------------------
    // 3. NAVBAR STICKY & MOBILE HAMBURGER MENU
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    function closeMobileMenu() {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        });
    }

    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });

    // ----------------------------------------------------------------------
    // 4. SCROLLSPY (ACTIVE NAV LINK ON SCROLL)
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    
    function scrollSpy() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollSpy);

    // ----------------------------------------------------------------------
    // 5. ANIMATED NUMERICAL STATS COUNTER
    // ----------------------------------------------------------------------
    const statNumbers = document.querySelectorAll('.stat-number');
    let animatedStats = false;

    function countUpStats() {
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;

        if (sectionPos < screenPos && !animatedStats) {
            animatedStats = true;
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                let count = 0;
                const speed = 2000 / target;

                const counter = setInterval(() => {
                    count++;
                    stat.textContent = count;
                    if (count >= target) {
                        stat.textContent = target;
                        clearInterval(counter);
                    }
                }, speed);
            });
        }
    }
    window.addEventListener('scroll', countUpStats);

    // ----------------------------------------------------------------------
    // 6. PORTFOLIO FILTER CONTROLS
    // ----------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategories.includes(filterValue)) {
                    card.classList.remove('hide');
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 7. PROJECT DETAILS MODAL DIALOG
    // ----------------------------------------------------------------------
    const projectModal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    const projectData = {
        boostrava: {
            title: "Boost RAVA Programmatic SSP, DSP, RTB & DOOH Ad Network",
            category: "Programmatic AdTech & SaaS Platform",
            url: "https://boostrava.com/",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Next.js", "React", "Tailwind CSS", "RTB Engine", "SSP / DSP Architecture", "REST API", "Analytics"],
            description: "Full-stack programmatic ad network offering Supply-Side Platform (SSP), Demand-Side Platform (DSP), Real-Time Bidding (RTB) solutions, and DOOH advertising. Built with Next.js for high performance and scale, featuring automated media buying/selling, publisher monetization, advertiser campaigns, and cross-platform ad serving."
        },
        teasoft: {
            title: "TeaSoft Systems Enterprise Platform",
            category: "Software Solutions & Enterprise",
            url: "https://teasoft.com.bd/",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "Vue.js", "PHP", "MySQL", "REST API"],
            description: "Official web platform for TeaSoft Software Solutions, highlighting enterprise ERP modules, HR management tools, business accounting integrations, and custom software product suites."
        },
        police: {
            title: "Rangpur Police Web Portal",
            category: "Public Service & Government",
            url: "https://police.rangpur.news/",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
            description: "Official digital public service portal for Rangpur Police Department. Designed to publish public safety announcements, officer directory, citizen emergency contacts, press releases, and crime reporting forms."
        },
        linkline: {
            title: "LinkLine BD ISP Broadband Platform",
            category: "ISP & Telecom Portal",
            url: "https://linklinebd.com/",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "PHP MVC", "MySQL", "REST API", "Bootstrap"],
            description: "Official web application for LinkLine BD Internet Service Provider. Features interactive internet bandwidth package cards, coverage availability checker, customer bill pay module, and online line connection booking."
        },
        mirza: {
            title: "Mirza School Portal & Management System",
            category: "Education Portal",
            url: "https://mirzaschool.edu.bd/",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "PHP MVC", "Blade Engine", "MySQL", "Bootstrap"],
            description: "A comprehensive academic portal engineered for Mirza School. Features dynamic notice publishing, online admission inquiries, student registration directory, dynamic photo gallery, and teacher administration dashboard."
        },
        rangpur: {
            title: "Rangpur News Digital Media Portal",
            category: "Online Newspaper Platform",
            url: "https://rangpur.news/",
            github: "https://github.com/SOBOJBANGLA/rangpur_news",
            tech: ["Laravel", "Vue.js", "MySQL", "SEO Automation", "Bootstrap"],
            description: "High-throughput online newspaper platform designed for rapid news delivery. Features include category filtering, breaking news alert banner, multi-role editor permissions, and dynamic ad slot manager."
        },
        partspro: {
            title: "PartsPro BD E-Commerce Automobile Platform",
            category: "E-Commerce",
            url: "https://www.partsprobd.com/",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "MySQL", "jQuery AJAX", "Shopping Cart API"],
            description: "A modern auto parts e-commerce web application. Includes categorized product catalog, search filters, dynamic cart management, order status tracking, and merchant dashboard."
        },
        sbda: {
            title: "SBDA Blood Donor Community Platform",
            category: "NGO & Emergency Health",
            url: "https://sbda.org.bd/",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "Blade", "MySQL", "Geo-Search Filters"],
            description: "Social impact platform connecting critical blood seekers with registered voluntary blood donors. Features location-based donor search, emergency blood request posting, and SMS alerts."
        },
        mahir: {
            title: "Mahir Developers Real Estate Web App",
            category: "Real Estate Showcase",
            url: "https://mahirdevelopers.com/",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "Vue.js", "Bootstrap", "Responsive Layout"],
            description: "Corporate digital showcase for Mahir Developers, highlighting luxury apartment projects, floor layouts, property inquiry forms, and interactive location maps."
        },
        wsdms: {
            title: "WSDMS Wholesale POS & Sales System",
            category: "Enterprise POS Management",
            url: "https://wsdms.ontechict.com.bd/auth-login",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "Vue.js", "MySQL", "Role Permissions", "Invoice Engine"],
            description: "Enterprise point-of-sale solution for wholesale inventory distribution. Features real-time stock tracking, customer debt ledgers, barcode checkout, and multi-user authentication."
        },
        pharmahisab: {
            title: "Pharmacy Store Management & Medicine ERP Platform",
            category: "Healthcare & Pharmacy SaaS",
            url: "",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "PHP", "Vue.js", "MySQL", "20k+ Medicine Dataset", "Barcode Scanner", "Thermal POS"],
            description: "Enterprise pharmacy ERP featuring 20,000+ national medicine database with generic auto-suggest, batch expiry tracking, shortage alerts, instant barcode scanning, purchase orders, and profit/loss financial statements."
        },
        olms: {
            title: "Clinical Laboratory & Pathology Diagnostic ERP",
            category: "Medical & Diagnostic ERP",
            url: "",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "Vue.js", "MySQL", "Specimen Barcode", "Doctor Commission Engine", "Pathology Reporting"],
            description: "Clinical laboratory management software handling diagnostic test categories, patient specimen barcodes, automated PDF pathology test report generation, doctor referral commission ledgers, and multi-branch accounting."
        },
        garage: {
            title: "Automotive Garage & Auto Parts Inventory ERP",
            category: "Automotive & Workshop ERP",
            url: "",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "PHP", "MySQL", "Digital Job-Cards", "Auto Parts Inventory", "Invoice Engine"],
            description: "Automobile repair and service shop ERP with digital intake inspection, vehicle job-card lifecycle, mechanic task assignments, spare parts inventory control, and multi-tier customer billing."
        },
        clothix: {
            title: "Apparel Buying House & Textile Export Management Portal",
            category: "Garments & Buying House",
            url: "",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "Vue.js", "Bootstrap", "Export Workflow", "Buyer Inquiry CRM"],
            description: "International buying house digital portal for apparel exporters. Features fabric sample catalogs, buyer quotation (RFQ) pipelines, sampling approval milestones, and export shipment status tracking."
        },
        pigeon: {
            title: "International Logistics & Courier Tracking System",
            category: "Logistics & Courier Tracking",
            url: "",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel", "REST API", "MySQL", "Airway Bill (AWB)", "Live Tracking", "Branch Dispatch"],
            description: "Full-scale courier and parcel logistics management system. Generates barcode Airway Bills (AWB), provides real-time public parcel tracking, delivery agent route dispatching, and branch collection reconciliation."
        },
        sslcommerz: {
            title: "Payment Gateway Integration Engine",
            category: "Payment Gateways & FinTech",
            url: "",
            github: "https://github.com/SOBOJBANGLA",
            tech: ["Laravel 11/12", "PHP", "Payment Gateway API", "IPN Webhooks", "Ledger Reconciliation"],
            description: "Production payment processing engine for Laravel supporting multi-channel transactions (Cards, Mobile Financial Services, Internet Banking). Handles automated checkout sessions, Instant Payment Notification (IPN) webhooks, transaction validation, and ledger balance reconciliation."
        }
    };

    function openProjectModal(key) {
        if (!projectModal || !key) return;
        const data = projectData[key];
        if (!data) return;

        modalTitle.textContent = data.title;
        const catLabel = currentLang === 'bn' ? 'ক্যাটাগরি:' : 'Category:';
        const techLabel = currentLang === 'bn' ? 'টেক আর্কিটেকচার স্ট্যাক:' : 'Tech Architecture Stack:';
        const liveBtnLabel = currentLang === 'bn' ? 'লাইভ ওয়েব অ্যাপ দেখুন' : 'Visit Live Web App';
        const repoBtnLabel = currentLang === 'bn' ? 'গিটহাব রিপোজিটরি' : 'View Repository';

        modalBody.innerHTML = `
            <div class="modal-detail-wrap">
                <p class="modal-cat"><strong>${catLabel}</strong> ${data.category}</p>
                <p class="modal-desc">${data.description}</p>
                
                <h4 style="margin: 1rem 0 0.5rem;">${techLabel}</h4>
                <div class="badge-cloud" style="margin-bottom: 1.5rem;">
                    ${data.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>

                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    ${data.url ? `<a href="${data.url}" target="_blank" class="btn btn-primary btn-sm"><i class="fa-solid fa-up-right-from-square"></i> ${liveBtnLabel}</a>` : ''}
                    ${data.github ? `<a href="${data.github}" target="_blank" class="btn btn-outline btn-sm"><i class="fa-brands fa-github"></i> ${repoBtnLabel}</a>` : ''}
                </div>
            </div>
        `;

        projectModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Global event delegation for all project modal detail buttons
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-detail-modal');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            const projectKey = btn.getAttribute('data-project');
            openProjectModal(projectKey);
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeProjectModal();
        });
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
            closeProjectModal();
        }
    });

    // ----------------------------------------------------------------------
    // 8. INTERACTIVE DYNAMIC SEO MANAGER MODAL
    // ----------------------------------------------------------------------
    const seoToggleBtn = document.getElementById('seo-toggle');
    const seoModal = document.getElementById('seo-modal');
    const seoModalClose = document.getElementById('seo-modal-close');
    const seoTitleInput = document.getElementById('seo-title-input');
    const seoDescInput = document.getElementById('seo-desc-input');
    const seoKeywordsInput = document.getElementById('seo-keywords-input');
    const serpTitlePreview = document.getElementById('serp-title-preview');
    const serpDescPreview = document.getElementById('serp-desc-preview');
    const applySeoBtn = document.getElementById('apply-seo-btn');

    if (seoToggleBtn && seoModal) {
        seoToggleBtn.addEventListener('click', () => {
            seoModal.showModal();
        });
    }

    if (seoModalClose && seoModal) {
        seoModalClose.addEventListener('click', () => seoModal.close());
    }

    // Live SERP Preview updates
    if (seoTitleInput && serpTitlePreview) {
        seoTitleInput.addEventListener('input', () => {
            serpTitlePreview.textContent = seoTitleInput.value || "Dynamic Title Preview";
        });
    }

    if (seoDescInput && serpDescPreview) {
        seoDescInput.addEventListener('input', () => {
            serpDescPreview.textContent = seoDescInput.value || "Dynamic Description Preview";
        });
    }

    if (applySeoBtn) {
        applySeoBtn.addEventListener('click', () => {
            const newTitle = seoTitleInput.value.trim();
            const newDesc = seoDescInput.value.trim();
            const newKeywords = seoKeywordsInput.value.trim();

            if (newTitle) {
                document.title = newTitle;
                const metaTitle = document.getElementById('meta-title-tag');
                if (metaTitle) metaTitle.textContent = newTitle;
            }

            if (newDesc) {
                const metaDesc = document.getElementById('meta-desc-tag');
                if (metaDesc) metaDesc.setAttribute('content', newDesc);
            }

            if (newKeywords) {
                const metaKeywords = document.getElementById('meta-keywords-tag');
                if (metaKeywords) metaKeywords.setAttribute('content', newKeywords);
            }

            showToast('Live SEO Metadata & Keywords Updated!');
            seoModal.close();
        });
    }

    // ----------------------------------------------------------------------
    // 9. INTERACTIVE CODE TERMINAL TABS
    // ----------------------------------------------------------------------
    const tTabs = document.querySelectorAll('.t-tab');
    const tCodes = document.querySelectorAll('.terminal-code');

    tTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            tTabs.forEach(t => t.classList.remove('active'));
            tCodes.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const activeCode = document.getElementById(`tab-${targetTab}`);
            if (activeCode) activeCode.classList.add('active');
        });
    });

    // ----------------------------------------------------------------------
    // 10. COPY TO CLIPBOARD UTILITY
    // ----------------------------------------------------------------------
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Copied to clipboard: ${textToCopy}`);
            }).catch(() => {
                showToast('Failed to copy text.');
            });
        });
    });

    // ----------------------------------------------------------------------
    // 11. CONTACT FORM HANDLING & WHATSAPP / EMAIL DISPATCH
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const whatsappSendBtn = document.getElementById('whatsapp-send-btn');

    // Send via WhatsApp directly
    if (whatsappSendBtn) {
        whatsappSendBtn.addEventListener('click', () => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !message) {
                showToast('Please enter your Name and Message to send via WhatsApp.', true);
                return;
            }

            const waText = `*New Portfolio Project Inquiry*\n\n*Name:* ${name}\n*Email:* ${email || 'N/A'}\n*Subject:* ${subject || 'General Inquiry'}\n\n*Message:* ${message}`;
            const waUrl = `https://wa.me/8801639008885?text=${encodeURIComponent(waText)}`;
            
            window.open(waUrl, '_blank');
            showToast('Opening WhatsApp chat with A.S.M. Abdullah...');
        });
    }

    // Form submit email handler (Direct delivery to abuhmdabdullah72@gmail.com)
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                showToast('Please fill out all required fields.', true);
                return;
            }

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending to Gmail...';

            try {
                // Post directly via FormSubmit AJAX service straight to abuhmdabdullah72@gmail.com
                const payload = {
                    name: name,
                    email: email,
                    _replyto: email,
                    subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
                    _subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
                    message: message,
                    _template: 'table',
                    _captcha: 'false'
                };

                const response = await fetch('https://formsubmit.co/ajax/abuhmdabdullah72@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const data = await response.json().catch(() => ({}));

                if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
                    showToast('🎉 Message sent successfully to abuhmdabdullah72@gmail.com! Abdullah will reply soon.');
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sent to Gmail!';
                    setTimeout(() => {
                        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Email';
                    }, 3500);
                } else {
                    throw new Error(data.message || 'Submission failed');
                }
            } catch (err) {
                console.warn('Direct API submission error, opening webmail composer fallback:', err);
                showToast('Launching direct Gmail composer...', false);
                
                // Fallback: Open Gmail Web Composer with pre-filled subject and body
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=abuhmdabdullah72@gmail.com&su=${encodeURIComponent("[Portfolio Inquiry] " + subject)}&body=${encodeURIComponent("Client Name: " + name + "\nClient Email: " + email + "\n\nProject Requirements:\n" + message)}`;
                window.open(gmailUrl, '_blank');

                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Email';
            }
        });
    }

    // Toast Utility Function
    function showToast(message, isError = false) {
        const toast = document.getElementById('toast');
        const toastMsg = document.getElementById('toast-message');
        if (!toast || !toastMsg) return;

        toastMsg.textContent = message;
        if (isError) {
            toast.style.borderColor = '#ef4444';
            toast.querySelector('.toast-icon').className = 'fa-solid fa-triangle-exclamation toast-icon';
            toast.querySelector('.toast-icon').style.color = '#ef4444';
        } else {
            toast.style.borderColor = 'var(--accent-emerald)';
            toast.querySelector('.toast-icon').className = 'fa-solid fa-circle-check toast-icon';
            toast.querySelector('.toast-icon').style.color = 'var(--accent-emerald)';
        }

        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    // ----------------------------------------------------------------------
    // 12. SCROLL TO TOP BUTTON
    // ----------------------------------------------------------------------
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ----------------------------------------------------------------------
    // 13. FUTURISTIC HEADER-LOGO PRELOADER WITH PROGRESS COUNTER
    // ----------------------------------------------------------------------
    const preloader = document.getElementById('preloader');
    const preloaderFill = document.getElementById('preloader-fill');
    const preloaderCounter = document.getElementById('preloader-counter');
    const preloaderStatus = document.getElementById('preloader-status');

    let loadProgress = 0;
    const progressStatuses = [
        { at: 10, text: "Initializing environment..." },
        { at: 35, text: "Mounting Laravel & Web components..." },
        { at: 65, text: "Loading 40+ production cases..." },
        { at: 85, text: "Optimizing UI components & performance..." },
        { at: 100, text: "Welcome to A.S.M. Abdullah's Portfolio!" }
    ];

    function setPreloaderProgress(val) {
        loadProgress = Math.min(100, Math.max(0, val));
        if (preloaderFill) preloaderFill.style.width = `${loadProgress}%`;
        if (preloaderCounter) preloaderCounter.textContent = `${Math.round(loadProgress)}%`;
        
        if (preloaderStatus) {
            for (let i = progressStatuses.length - 1; i >= 0; i--) {
                if (loadProgress >= progressStatuses[i].at) {
                    preloaderStatus.textContent = progressStatuses[i].text;
                    break;
                }
            }
        }
    }

    const progressInterval = setInterval(() => {
        if (loadProgress < 85) {
            setPreloaderProgress(loadProgress + Math.random() * 14 + 6);
        }
    }, 90);

    function finishPreloader() {
        clearInterval(progressInterval);
        setPreloaderProgress(100);
        setTimeout(() => {
            if (preloader) preloader.classList.add('loaded');
        }, 400);
    }

    if (document.readyState === 'complete') {
        finishPreloader();
    } else {
        window.addEventListener('load', finishPreloader);
    }
    // Safety fallback in case 'load' fires late
    setTimeout(finishPreloader, 2200);

    // ----------------------------------------------------------------------
    // 14. SCROLL PROGRESS BAR
    // ----------------------------------------------------------------------
    const progressFill = document.getElementById('scroll-progress-fill');
    function updateScrollProgress() {
        if (!progressFill) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressFill.style.width = `${pct}%`;
    }
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    // ----------------------------------------------------------------------
    // 15. CUSTOM CURSOR (dot + lagging ring, with hover states)
    // ----------------------------------------------------------------------
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (cursorDot && cursorRing && isFinePointer) {
        document.body.classList.add('cursor-ready');
        let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
        let ringX = mouseX, ringY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        function animateRing() {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
            requestAnimationFrame(animateRing);
        }
        animateRing();

        const hoverTargets = 'a, button, .btn, .filter-btn, .t-tab, .project-card, .stat-card, .specialty-card, input, textarea, .copy-btn, .theme-toggle-btn, .hamburger';
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(hoverTargets)) cursorRing.classList.add('cursor-hover');
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(hoverTargets)) cursorRing.classList.remove('cursor-hover');
        });
    }

    // ----------------------------------------------------------------------
    // 16. PARTICLE NETWORK BACKGROUND (signature ambient animation)
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('particle-canvas');
    if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let width, height;
        const isMobileView = window.innerWidth < 768;
        const particleCount = isMobileView ? 28 : 60;
        const maxLinkDist = isMobileView ? 100 : 140;

        function resizeCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = Array.from({ length: particleCount }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.6 + 0.8
            }));
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            const dotColor = isLight ? 'rgba(59, 130, 246, 0.55)' : 'rgba(147, 197, 253, 0.7)';
            const lineColorBase = isLight ? '59, 130, 246' : '96, 165, 250';

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = dotColor;
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxLinkDist) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${lineColorBase}, ${1 - dist / maxLinkDist})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawParticles);
        }

        resizeCanvas();
        createParticles();
        drawParticles();

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                resizeCanvas();
                createParticles();
            }, 250);
        });
    }

    // ----------------------------------------------------------------------
    // 17. SCROLL-REVEAL ANIMATIONS (IntersectionObserver)
    // ----------------------------------------------------------------------
    const revealSelectors = [
        '.section-title-wrapper',
        '.about-card', '.about-details',
        '.skills-category',
        '.specialty-card',
        '.project-card',
        '.stat-card',
        '.timeline-item',
        '.contact-card',
        '.contact-form-wrapper',
        '.terminal-window'
    ];

    revealSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, idx) => {
            if (!el.hasAttribute('data-reveal')) {
                if (el.classList.contains('timeline-item')) {
                    el.setAttribute('data-reveal', el.classList.contains('left') ? 'left' : 'right');
                } else if (el.classList.contains('specialty-card') || el.classList.contains('stat-card')) {
                    el.setAttribute('data-reveal', 'zoom');
                } else {
                    el.setAttribute('data-reveal', 'up');
                }
                el.style.transitionDelay = `${(idx % 4) * 0.08}s`;
            }
        });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

    // ----------------------------------------------------------------------
    // 18. SLIDING NAV ACTIVE INDICATOR
    // ----------------------------------------------------------------------
    const navIndicator = document.getElementById('nav-indicator');
    const navListEl = document.getElementById('nav-list');

    function moveNavIndicator() {
        if (!navIndicator || !navListEl) return;
        const activeLink = navListEl.querySelector('.nav-link.active');
        if (!activeLink) {
            navIndicator.style.opacity = '0';
            return;
        }
        const listRect = navListEl.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        navIndicator.style.left = `${linkRect.left - listRect.left}px`;
        navIndicator.style.width = `${linkRect.width}px`;
        navIndicator.style.opacity = '1';
    }

    window.addEventListener('scroll', moveNavIndicator, { passive: true });
    window.addEventListener('resize', moveNavIndicator);
    navLinks.forEach(link => link.addEventListener('click', () => setTimeout(moveNavIndicator, 50)));
    setTimeout(moveNavIndicator, 300);

    // ----------------------------------------------------------------------
    // 19. TILT EFFECT ON CARDS (profile card & project cards)
    // ----------------------------------------------------------------------
    function applyTilt(el, intensity = 10) {
        el.classList.add('tilt-card');
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = ((y / rect.height) - 0.5) * -intensity;
            const rotateY = ((x / rect.width) - 0.5) * intensity;
            el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
        });
    }

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const profileCardEl = document.querySelector('.profile-card');
        if (profileCardEl) applyTilt(profileCardEl, 6);
        document.querySelectorAll('.project-card').forEach(card => applyTilt(card, 4));
    }

    // ----------------------------------------------------------------------
    // 20. MAGNETIC BUTTON EFFECT
    // ----------------------------------------------------------------------
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
            btn.classList.add('magnetic-btn');
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }

    // ----------------------------------------------------------------------
    // 21. RIPPLE EFFECT ON BUTTON CLICK
    // ----------------------------------------------------------------------
    document.querySelectorAll('.btn, .filter-btn, .t-tab').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 650);
        });
    });

    // ----------------------------------------------------------------------
    // 23. COMPREHENSIVE BILINGUAL AI AUTOMATION KNOWLEDGE BASE & ASSISTANT
    // ----------------------------------------------------------------------
    const aiKnowledgeBase = {
        en: [
            {
                topic: "Tech Stack & Architecture",
                keywords: ["tech", "stack", "skill", "language", "framework", "php", "laravel", "vue", "react", "next", "mysql", "redis", "docker", "cpanel", "tailwind", "rest api", "backend", "frontend", "technolog"],
                a: "A.S.M. Abdullah is a Full-Stack Software Engineer with deep expertise across modern web technologies:\n• Backend: Laravel 10/11, PHP 8+, RESTful API Architecture, Microservices, Authentication (Sanctum/Passport)\n• Frontend: Vue.js 3 (Composition API, Pinia), React.js, Next.js (SSR/SSG), TypeScript, Tailwind CSS\n• Database & Cache: MySQL (Advanced Query Optimization, Indexing, Schema Design), Redis In-Memory Caching\n• DevOps: Docker, Git & GitHub CI/CD, cPanel, Nginx/Apache, Postman API testing."
            },
            {
                topic: "Work Experience & Background",
                keywords: ["experience", "years", "current", "company", "work", "job", "ontech", "background", "career", "role", "senior"],
                a: "Abdullah brings 3+ years of commercial software engineering experience with 40+ delivered live projects. He currently serves as Software Engineer at Ontech ICT Ltd in Dhaka, leading backend architecture, database modeling, and enterprise ERP solutions."
            },
            {
                topic: "Availability, Hiring & Freelance",
                keywords: ["hire", "available", "freelance", "contract", "full-time", "part-time", "opportunity", "recruit", "remote", "job", "vacancy", "hire now"],
                a: "Yes! Abdullah is actively available for hire for full-time positions, long-term contracts, and freelance projects worldwide.\n• Timezone Flexibility: Seamless collaboration across USA, UK, Europe, Australia, and Middle East timezones.\n• Fast Start: Available to onboard and begin development immediately.\n• Direct Connect: Reach out on WhatsApp (+880 1639008885) for instant availability confirmation."
            },
            {
                topic: "40+ Projects & Featured Systems",
                keywords: ["project", "projects", "portfolio", "built", "work", "showcase", "boostrava", "teasoft", "linkline", "rangpur", "best", "examples", "demos", "live"],
                a: "Abdullah has built 40+ high-quality client applications, including:\n• Boost RAVA: High-throughput programmatic AdTech network (SSP/DSP/RTB) with real-time bidding.\n• Multi-Branch Enterprise HRMS & Payroll: Attendance sync, tax calculation, and salary ledger.\n• Pharmacy & Wholesale POS: High-speed barcode checkout, inventory batches, and profit analytics.\n• LinkLine BD ISP Portal: Customer broadband account management, radius sync, and bKash integration.\n• Rangpur Police & Rangpur News Portals: Official law enforcement directory and high-traffic news engine.\n• TeaSoft Platform: SaaS cloud application for modern enterprise digital workflows."
            },
            {
                topic: "Enterprise ERP & POS Systems",
                keywords: ["erp", "pos", "hrms", "payroll", "inventory", "pharmacy", "wholesale", "lab", "pathology", "garage", "logistics", "courier", "enterprise", "software"],
                a: "Abdullah specializes in custom mission-critical enterprise systems:\n• HRMS & Payroll: Multi-branch organization tree, biometric sync, leave approval workflows, and payroll ledger.\n• Pharmacy POS: Barcode scanning, medicine batch tracking, expiry date alerts, and supplier accounts.\n• Clinical Lab ERP: Specimen barcode tracking, doctor referral commission ledger, and pathology report PDFs.\n• Automotive Garage ERP: Job card tracker, spare parts stock, technician timesheet, and invoice billing.\n• Pigeon Express Courier: Automated Airway Bill (AWB) routing, parcel manifest, and delivery app APIs."
            },
            {
                topic: "Boost RAVA Programmatic AdTech Network",
                keywords: ["boostrava", "adtech", "rtb", "ssp", "dsp", "ad network", "bidding", "impression", "advertiser", "publisher", "ad server"],
                a: "Boost RAVA is a cutting-edge programmatic advertising platform engineered by Abdullah:\n• Supply-Side Platform (SSP): Real-time ad code generation, revenue share calculator, and anti-fraud filters.\n• Demand-Side Platform (DSP): Precise geo/device targeting, daily campaign budget limits, and live impression telemetry.\n• Performance: Built with Next.js, Node.js, and Redis caching for sub-50ms ad serving to millions of users."
            },
            {
                topic: "Rates & Project Pricing",
                keywords: ["rate", "rates", "price", "pricing", "cost", "budget", "quote", "charge", "hourly", "fixed", "payment", "salary", "quotation"],
                a: "Abdullah offers flexible and competitive pricing structures customized for your project:\n• Milestone-Based Projects: Transparent pricing with clear deliverables, wireframing, sprint releases, and QA testing.\n• Hourly & Dedicated Contracts: Flexible arrangements tailored to ongoing development, maintenance, or feature builds.\n• Full-Time & Remote Roles: Open to discussion based on company requirements and scope.\n• Free Consultation & Quote: Reach out on WhatsApp (+880 1639008885) or submit the contact form with your project details for an immediate quote!"
            },
            {
                topic: "Payment Gateways & FinTech Integrations",
                keywords: ["payment", "gateway", "bkash", "nagad", "sslcommerz", "stripe", "paypal", "aamarpay", "rocket", "checkout", "fintech", "transaction"],
                a: "Abdullah has integrated numerous secure local and global payment gateways:\n• Bangladesh Gateways: bKash (Tokenized & Direct Checkout), Nagad, SSLCommerz, Aamarpay, Rocket, Upay.\n• International Gateways: Stripe (Cards, Subscriptions, Apple/Google Pay), PayPal Checkout, Razorpay.\n• Security: Automated IPN webhook verification, cryptographic signature checks, and transaction auditing."
            },
            {
                topic: "Database & Query Optimization",
                keywords: ["speed", "performance", "optimization", "query", "database", "mysql", "redis", "indexing", "fast", "cache", "slow", "scale"],
                a: "Abdullah implements proven high-performance optimization techniques:\n• Database: Composite B-tree indexing, eliminating N+1 query traps with eager loading, and query chunking.\n• Caching: Redis multi-layer caching for heavy queries, session state, and API payload caching.\n• Speed: Sub-100ms API latency and 95+ Google PageSpeed Core Web Vitals score."
            },
            {
                topic: "Contact & Instant Channels",
                keywords: ["contact", "reach", "email", "whatsapp", "phone", "call", "message", "inbox", "gmail", "how to contact", "touch"],
                a: "You can reach Abdullah directly through multiple instant channels:\n• WhatsApp (Instant Chat): +880 1639008885 (Direct chat: wa.me/8801639008885)\n• Email: abuhmdabdullah72@gmail.com\n• Direct Phone: +880 1639008885\n• Contact Form: Located at the bottom of this page — dispatches directly to his Gmail inbox!"
            },
            {
                topic: "Location & International Collaboration",
                keywords: ["location", "based", "where", "dhaka", "bangladesh", "khilgaon", "international", "usa", "uk", "remote", "onsite", "country"],
                a: "Abdullah is based in Khilgaon, Dhaka, Bangladesh, and routinely works with clients across Bangladesh, USA, UK, Canada, UAE, and Europe using Slack, GitHub, Jira, and Zoom."
            },
            {
                topic: "Software Architecture & Code Quality",
                keywords: ["process", "methodology", "quality", "clean code", "git", "github", "testing", "security", "agile", "delivery", "sprint", "solid"],
                a: "Abdullah strictly follows modern engineering best practices:\n• Architecture: Clean MVC, Service-Repository pattern, SOLID principles, and DRY modular code.\n• Version Control: Git branching workflows, detailed commit notes, and pull request reviews.\n• Security: XSS protection, CSRF verification, prepared SQL statements, and strict input validation."
            },
            {
                topic: "Custom SaaS & Web Portals",
                keywords: ["custom", "saas", "portal", "scratch", "new", "platform", "mvp", "dashboard", "startup", "web application"],
                a: "Abdullah can take your custom idea from wireframe to a live, production-ready SaaS platform:\n• Responsive dashboard interfaces with Vue.js / React / Next.js\n• Robust REST API backends with Laravel and MySQL\n• Role-based user permissions, multi-tenant databases, and automated billing."
            }
        ],
        bn: [
            {
                topic: "টেক স্ট্যাক ও প্রযুক্তিগত দক্ষতা",
                keywords: ["tech", "stack", "skill", "টেক", "স্ট্যাক", "দক্ষতা", "লারাভেল", "laravel", "php", "vue", "react", "next", "mysql", "redis", "docker", "cpanel", "tailwind", "api", "ব্যাকএন্ড", "ফ্রন্টএন্ড"],
                a: "এ.এস.এম. আব্দুল্লাহ আধুনিক ফুল-স্ট্যাক ওয়েব প্রযুক্তিতে বিশেষভাবে অভিজ্ঞ ও পারদর্শী:\n• ব্যাকএন্ড: Laravel 10/11, PHP 8+, RESTful API Architecture, Microservices, Authentication (Sanctum/Passport)\n• ফ্রন্টএন্ড: Vue.js 3 (Composition API, Pinia), React.js, Next.js (SSR/SSG), TypeScript, Tailwind CSS\n• ডাটাবেস ও ক্যাশিং: MySQL (B-Tree Indexing, Advanced Query Optimization), Redis In-Memory Caching\n• ডেভঅপ্স ও ক্লাউড: Docker, Git & GitHub CI/CD, cPanel, Nginx/Apache, Postman API Testing।"
            },
            {
                topic: "কাজের অভিজ্ঞতা ও ব্যাকগ্রাউন্ড",
                keywords: ["অভিজ্ঞতা", "বছর", "কোম্পানি", "চাকরি", "কাজ", "experience", "ontech", "job", "career", "বর্তমান"],
                a: "আব্দুল্লাহর ৩+ বছরের প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ারিং অভিজ্ঞতা রয়েছে এবং তিনি ৪০টিরও বেশি সফল লাইভ বাণিজ্যিক প্রজেক্ট ডেলিভারি করেছেন। বর্তমানে তিনি ঢাকার অনটেক আইসিটি লিমিটেডে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে কর্মরত।"
            },
            {
                topic: "হায়ারিং ও কাজের প্রাপ্যতা",
                keywords: ["হায়ার", "হায়ার", "উপলব্ধ", "ফ্রিল্যান্স", "কন্ট্রাক্ট", "রিমোট", "hire", "available", "freelance", "contract", "remote", "নিয়োগ", "কাজে নিতে"],
                a: "হ্যাঁ! আব্দুল্লাহ ফুল-টাইম পদ, পার্ট-টাইম কন্ট্রাক্ট এবং ফ্রিল্যান্স প্রজেক্টের জন্য সম্পূর্ণ উন্মুক্ত।\n• বিশ্বব্যাপী কাজ: বাংলাদেশ, আমেরিকা, যুক্তরাজ্য ও মধ্যপ্রাচ্যের টাইমজোনে কাজ করতে সক্ষম।\n• দ্রুত শুরু: যেকোনো প্রোডাকশন প্রজেক্টে তাৎক্ষণিকভাবে কাজ শুরু করতে প্রস্তুত।\n• সরাসরি যোগাযোগ: সরাসরি কাজের প্রস্তাব জানাতে হোয়াটসঅ্যাপে (+880 1639008885) মেসেজ দিন।"
            },
            {
                topic: "৪০+ সফল লাইভ প্রজেক্ট",
                keywords: ["প্রজেক্ট", "কাজগুলো", "পোর্টফোলিও", "প্রজেক্টসমূহ", "project", "projects", "boostrava", "teasoft", "linkline", "rangpur", "সেরা", "তৈরি"],
                a: "আব্দুল্লাহ ৪০টিরও বেশি সফল কমার্শিয়াল অ্যাপ্লিকেশন তৈরি করেছেন, যার মধ্যে রয়েছে:\n• Boost RAVA: উচ্চ ক্ষমতাসম্পন্ন প্রোগ্রামেটিক AdTech নেটওয়ার্ক (SSP/DSP/RTB)।\n• এন্টারপ্রাইজ HRMS ও পেরোল: বায়োমেট্রিক উপস্থিতি, ট্যাক্স হিসাব ও বেতন কাঠামো।\n• ফার্মেসি ও হোলসেল POS: বারকোড স্ক্যানার দিয়ে তাৎক্ষণিক বিক্রি ও স্টক ইনভেন্টরি।\n• LinkLine BD ISP পোর্টাল: ইন্টারনেট প্যাকেজ ম্যানেজমেন্ট ও বিকাশ বিলিং ইন্টিগ্রেশন।\n• রংপুর পুলিশ ও রংপুর নিউজ: সরকারি সেবা পোর্টাল ও উচ্চগতির ডিজিটাল নিউজ প্ল্যাটফর্ম।"
            },
            {
                topic: "এন্টারপ্রাইজ ERP ও POS সিস্টেম",
                keywords: ["erp", "pos", "hrms", "পেরোল", "ইনভেন্টরি", "ফার্মেসি", "হোলসেল", "ল্যাব", "প্যাথলজি", "গ্যারেজ", "কুরিয়ার", "সফটওয়্যার", "বিলিং"],
                a: "আব্দুল্লাহ কাস্টম এন্টারপ্রাইজ সফটওয়্যার তৈরিতে বিশেষভাবে অভিজ্ঞ:\n• HRMS ও পেরোল: মাল্টি-ব্রাঞ্চ অর্গানাইজেশন, স্বয়ংক্রিয় ছুটি ও বেতন ব্যবস্থাপনা।\n• ফার্মেসি POS: ২০,০০০+ ওষুধের ডাটাবেস, মেয়াদোত্তীর্ণ এলার্ট ও থার্মাল প্রিন্ট বিলিং।\n• ক্লিনিক্যাল ল্যাব ERP: বারকোড স্যাম্পল ট্র্যাকিং ও প্যাথলজি রিপোর্ট জেনারেটর।\n• অটোমোটিভ গ্যারেজ ERP: ডিজিটাল জব কার্ড, পার্টস স্টক ও মেকানিক ট্র্যাকিং।\n• কুরিয়ার লজিস্টিকস: লাইভ Airway Bill (AWB) ট্র্যাকিং ও পার্সেল ডেলিভারি রুট।"
            },
            {
                topic: "Boost RAVA প্রোগ্রামেটিক অ্যাড নেটওয়ার্ক",
                keywords: ["boostrava", "adtech", "rtb", "ssp", "dsp", "অ্যাড", "বিজ্ঞাপন", "বুস্ট্রাভা"],
                a: "Boost RAVA হলো আব্দুল্লাহর তৈরি একটি আধুনিক প্রোগ্রামেটিক অ্যাড প্ল্যাটফর্ম:\n• Supply-Side Platform (SSP): তাৎক্ষণিক অ্যাড কোড জেনারেশন ও ট্রাফিক মনিটাইজেশন।\n• Demand-Side Platform (DSP): নিখুঁত জিও ও ডিভাইস টার্গেটিং এবং লাইভ অ্যানালিটিক্স।\n• হাই পারফরম্যান্স: Next.js, Node.js ও Redis ক্যাশিংয়ের মাধ্যমে সাব-৫০ms অ্যাড সার্ভিং।"
            },
            {
                topic: "কাজের রেট ও প্রজেক্ট প্যাকেজ",
                keywords: ["রেট", "চার্জ", "খরচ", "টাকা", "বাজেট", "দাম", "প্যাকেজ", "rate", "price", "cost", "budget", "pricing", "বেতন", "ফি"],
                a: "আব্দুল্লাহ প্রজেক্টের পরিধি অনুযায়ী অত্যন্ত সাশ্রয়ী ও স্পষ্ট মূল্যে কাজ করেন:\n• মাইলস্টোন ভিত্তিক প্রজেক্ট: প্রতিটি ধাপের স্পষ্ট কাজের বিবরণ ও টেস্টিং নিশ্চিতকরণ।\n• মান্থলি/আওয়ারলি কন্ট্রাক্ট: দীর্ঘমেয়াদী ডেভেলপমেন্ট ও মেইনটেন্যান্স সাপোর্ট।\n• ফুল-টাইম রিমোট রোল: কোম্পানির প্রয়োজনীয়তা অনুযায়ী আলোচনা সাপেক্ষে।\n• ফ্রি কনসাল্টেশন: আপনার প্রজেক্টের বিস্তারিত জানিয়ে হোয়াটসঅ্যাপে (+880 1639008885) সরাসরি কোটেশন নিতে পারেন!"
            },
            {
                topic: "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন",
                keywords: ["পেমেন্ট", "গেটওয়ে", "বিকাশ", "নগদ", "bkash", "nagad", "sslcommerz", "stripe", "paypal", "aamarpay", "রকেট"],
                a: "আব্দুল্লাহ দেশি ও আন্তর্জাতিক সকল প্রধান পেমেন্ট গেটওয়ে নিরাপদে ইন্টিগ্রেট করেন:\n• বাংলাদেশি গেটওয়ে: বিকাশ (টোকেনাইজড ও সরাসরি চেকআউট), নগদ, SSLCommerz, Aamarpay, রকেট, উপায়।\n• আন্তর্জাতিক গেটওয়ে: Stripe (Cards, Apple Pay, Google Pay), PayPal, Razorpay।\n• নিরাপত্তা: অটোমেটেড IPN ওয়েবহুক ভেরিফিকেশন ও ট্রানজেকশন অডিটিং।"
            },
            {
                topic: "স্পিড ও ডাটাবেস অপ্টিমাইজেশন",
                keywords: ["স্পিড", "গতি", "ডাটাবেস", "ক্যাশিং", "redis", "mysql", "ধীরগতি", "স্লো", "অপ্টিমাইজ"],
                a: "আব্দুল্লাহর অপ্টিমাইজেশন পদ্ধতি:\n• ডাটাবেস: Composite B-tree ইন্ডেক্সিং, Eager Loading-এর মাধ্যমে N+1 কুয়েরি সমস্যার স্থায়ী সমাধান।\n• ক্যাশিং: জটিল কুয়েরি ও সেশনের জন্য Redis মাল্টি-লেয়ার ক্যাশিং।\n• স্পিড: সাব-১০০ms এপিআই রেসপন্স ও ৯৫+ গুগল পেজস্পিড স্কোর।"
            },
            {
                topic: "যোগাযোগের মাধ্যম",
                keywords: ["যোগাযোগ", "ফোন", "নাম্বার", "ইমেইল", "হোয়াটসঅ্যাপ", "contact", "email", "whatsapp", "phone", "call", "মেইল"],
                a: "আব্দুল্লাহর সাথে সরাসরি যোগাযোগের ঠিকানা:\n• হোয়াটসঅ্যাপ (তাৎক্ষণিক চ্যাট): +880 1639008885 (Direct: wa.me/8801639008885)\n• ইমেইল: abuhmdabdullah72@gmail.com\n• ফোন কল: +880 1639008885\n• কন্টাক্ট ফর্ম: পেজের নিচের ফর্ম পূরণ করে সরাসরি বার্তা পাঠাতে পারেন!"
            }
        ]
    };

    const aiFab = document.getElementById('ai-fab');
    const aiPanel = document.getElementById('ai-panel');
    const aiClose = document.getElementById('ai-close');
    const aiMessages = document.getElementById('ai-messages');
    const aiForm = document.getElementById('ai-form');
    const aiInput = document.getElementById('ai-input');

    function renderAiWelcomeMessage(lang = currentLang) {
        if (!aiMessages) return;
        const isBn = lang === 'bn';
        const welcomeText = isBn
            ? "আসসালামু আলাইকুম! আমি আব্দুল্লাহর এআই অ্যাসিস্ট্যান্ট 👋 যেকোনো প্রশ্ন করুন বা নিচের টপিক নির্বাচন করুন:"
            : "Hi, I'm Abdullah's AI Assistant 👋 Ask me anything or select a topic below:";

        const card1Text = isBn ? "টেক স্ট্যাক" : "Tech Stack";
        const card1Sub = isBn ? "Laravel, Vue, Next, MySQL" : "Laravel, Vue, Next, MySQL";
        const card1Q = isBn ? "আব্দুল্লাহর টেক স্ট্যাক ও দক্ষতা কী কী?" : "What is Abdullah's full tech stack?";

        const card2Text = isBn ? "হায়ারিং স্ট্যাটাস" : "Available for Hire";
        const card2Sub = isBn ? "ফুল-টাইম, কন্ট্রাক্ট ও রিমোট" : "Full-time, Contract & Remote";
        const card2Q = isBn ? "আব্দুল্লাহ কি নতুন প্রজেক্ট বা হায়ার করার জন্য উপলব্ধ?" : "Is Abdullah available for hire or freelance?";

        const card3Text = isBn ? "৪০+ প্রজেক্ট" : "40+ Projects";
        const card3Sub = isBn ? "Boostrava, ERP, POS, পোর্টাল" : "Boostrava, ERP, POS, Portals";
        const card3Q = isBn ? "তার ৪০+ প্রজেক্ট ও সেরা কাজগুলো সম্পর্কে বলুন" : "Tell me about his 40+ projects and best work";

        const card4Text = isBn ? "রেট ও চার্জ" : "Rates & Pricing";
        const card4Sub = isBn ? "প্রজেক্ট ও মাইলস্টোন প্যাকেজ" : "Milestone & Custom Packages";
        const card4Q = isBn ? "তার কাজের রেট ও প্রজেক্ট প্যাকেজ কেমন?" : "What are his hiring rates and pricing?";

        aiMessages.innerHTML = `
            <div class="ai-msg ai-msg-bot">
                <div>${welcomeText}</div>
                <div class="ai-welcome-grid">
                    <button type="button" class="ai-welcome-card" data-q="${card1Q}">
                        <span class="ai-wc-icon">⚡</span>
                        <span class="ai-wc-text">${card1Text}</span>
                        <span class="ai-wc-sub">${card1Sub}</span>
                    </button>
                    <button type="button" class="ai-welcome-card" data-q="${card2Q}">
                        <span class="ai-wc-icon">💼</span>
                        <span class="ai-wc-text">${card2Text}</span>
                        <span class="ai-wc-sub">${card2Sub}</span>
                    </button>
                    <button type="button" class="ai-welcome-card" data-q="${card3Q}">
                        <span class="ai-wc-icon">🚀</span>
                        <span class="ai-wc-text">${card3Text}</span>
                        <span class="ai-wc-sub">${card3Sub}</span>
                    </button>
                    <button type="button" class="ai-welcome-card" data-q="${card4Q}">
                        <span class="ai-wc-icon">💰</span>
                        <span class="ai-wc-text">${card4Text}</span>
                        <span class="ai-wc-sub">${card4Sub}</span>
                    </button>
                </div>
            </div>
        `;

        if (aiInput) {
            aiInput.placeholder = isBn ? "আপনার প্রশ্নটি লিখুন..." : "Type your question...";
        }
    }

    // Initial render
    renderAiWelcomeMessage(currentLang);

    let aiBackendAvailable = true;

    function toggleAiPanel(forceOpen) {
        const shouldOpen = forceOpen !== undefined ? forceOpen : !aiPanel.classList.contains('open');
        aiPanel.classList.toggle('open', shouldOpen);
        if (shouldOpen) setTimeout(() => aiInput.focus(), 300);
    }

    if (aiFab) aiFab.addEventListener('click', () => toggleAiPanel());
    if (aiClose) aiClose.addEventListener('click', () => toggleAiPanel(false));

    function formatBotMessage(text, question = '') {
        let formatted = text
            .replace(/\n/g, '<br>')
            .replace(/• (.*?)(?=(<br>|$))/g, '<span class="ai-bullet">✦ $1</span>');

        const isBn = (currentLang === 'bn') || /[\u0980-\u09FF]/.test(text) || /[\u0980-\u09FF]/.test(question);

        if (text.includes('01639008885') || text.includes('WhatsApp') || text.includes('abuhmdabdullah72@gmail.com')) {
            const waLabel = isBn ? '<i class="fa-brands fa-whatsapp"></i> হোয়াটসঅ্যাপে চ্যাট' : '<i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp';
            const mailLabel = isBn ? '<i class="fa-solid fa-envelope"></i> ইমেইল পাঠান' : '<i class="fa-solid fa-envelope"></i> Send Email';
            formatted += `<div class="ai-action-pills"><a href="https://wa.me/8801639008885" target="_blank" class="ai-action-btn wa">${waLabel}</a><a href="mailto:abuhmdabdullah72@gmail.com" class="ai-action-btn mail">${mailLabel}</a></div>`;
        }

        // Add 2-3 interactive follow-up chips below each response
        const qLower = (question || '').toLowerCase();
        let followups = [];

        if (isBn) {
            if (qLower.includes('tech') || qLower.includes('টেক') || qLower.includes('দক্ষতা') || qLower.includes('stack')) {
                followups = [
                    { text: '🚀 ৪০+ প্রজেক্ট', q: 'তার ৪০+ প্রজেক্ট ও সেরা কাজগুলো সম্পর্কে বলুন' },
                    { text: '💰 রেট ও প্যাকেজ', q: 'তার কাজের রেট ও প্রজেক্ট প্যাকেজ কেমন?' },
                    { text: '📱 হোয়াটসঅ্যাপে মেসেজ', q: 'আব্দুল্লাহর সাথে কীভাবে সরাসরি হোয়াটসঅ্যাপ বা ফোনে যোগাযোগ করব?' }
                ];
            } else if (qLower.includes('প্রজেক্ট') || qLower.includes('project') || qLower.includes('boostrava')) {
                followups = [
                    { text: '🏢 এন্টারপ্রাইজ ERP', q: 'তিনি কী কী এন্টারপ্রাইজ ERP ও POS সিস্টেম তৈরি করেছেন?' },
                    { text: '⚡ টেক স্ট্যাক', q: 'আব্দুল্লাহর টেক স্ট্যাক ও দক্ষতা কী কী?' },
                    { text: '💰 হায়ার ও রেট', q: 'তার কাজের রেট ও প্রজেক্ট প্যাকেজ কেমন?' }
                ];
            } else if (qLower.includes('রেট') || qLower.includes('হায়ার') || qLower.includes('rate') || qLower.includes('hire')) {
                followups = [
                    { text: '📱 হোয়াটসঅ্যাপ চ্যাট', q: 'আব্দুল্লাহর সাথে কীভাবে সরাসরি হোয়াটসঅ্যাপ বা ফোনে যোগাযোগ করব?' },
                    { text: '💳 পেমেন্ট গেটওয়ে', q: 'তিনি কোন কোন পেমেন্ট গেটওয়ে ইন্টিগ্রেট করতে পারেন?' },
                    { text: '🚀 ৪০+ প্রজেক্ট', q: 'তার ৪০+ প্রজেক্ট ও সেরা কাজগুলো সম্পর্কে বলুন' }
                ];
            } else {
                followups = [
                    { text: '⚡ টেক স্ট্যাক', q: 'আব্দুল্লাহর টেক স্ট্যাক ও দক্ষতা কী কী?' },
                    { text: '🚀 ৪০+ প্রজেক্ট', q: 'তার ৪০+ প্রজেক্ট ও সেরা কাজগুলো সম্পর্কে বলুন' },
                    { text: '💼 কাজের রেট', q: 'তার কাজের রেট ও প্রজেক্ট প্যাকেজ কেমন?' }
                ];
            }
        } else {
            if (qLower.includes('tech') || qLower.includes('stack') || qLower.includes('skill')) {
                followups = [
                    { text: '🚀 40+ Projects', q: 'Tell me about his 40+ projects and best work' },
                    { text: '💰 Rates & Pricing', q: 'What are his hiring rates and pricing?' },
                    { text: '📱 Chat on WhatsApp', q: 'How can I contact Abdullah directly on WhatsApp or Email?' }
                ];
            } else if (qLower.includes('project') || qLower.includes('boostrava') || qLower.includes('pos')) {
                followups = [
                    { text: '🏢 Enterprise ERP', q: 'What enterprise ERP and POS systems has he built?' },
                    { text: '⚡ Tech Stack', q: 'What is Abdullah\'s full tech stack?' },
                    { text: '💰 Hire & Rates', q: 'What are his hiring rates and pricing?' }
                ];
            } else if (qLower.includes('rate') || qLower.includes('hire') || qLower.includes('price')) {
                followups = [
                    { text: '📱 Message on WhatsApp', q: 'How can I contact Abdullah directly on WhatsApp or Email?' },
                    { text: '💳 Payment Gateways', q: 'What payment gateways can he integrate?' },
                    { text: '🚀 View 40+ Projects', q: 'Tell me about his 40+ projects and best work' }
                ];
            } else {
                followups = [
                    { text: '⚡ Tech Stack', q: 'What is Abdullah\'s full tech stack?' },
                    { text: '🚀 40+ Projects', q: 'Tell me about his 40+ projects and best work' },
                    { text: '💼 Hire / Rates', q: 'What are his hiring rates and pricing?' }
                ];
            }
        }

        if (followups.length > 0) {
            formatted += `<div class="ai-followup-wrap">${followups.map(f => `<button type="button" class="ai-followup-btn" data-q="${f.q}">${f.text}</button>`).join('')}</div>`;
        }

        return formatted;
    }

    function appendMessage(text, sender, question = '') {
        const msg = document.createElement('div');
        msg.className = `ai-msg ai-msg-${sender}`;
        if (sender === 'bot') {
            msg.innerHTML = formatBotMessage(text, question);
        } else {
            msg.textContent = text;
        }
        aiMessages.appendChild(msg);
        return msg;
    }

    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'ai-msg ai-msg-bot ai-msg-typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        aiMessages.appendChild(typing);
        return typing;
    }

    function localAnswer(question) {
        const q = question.toLowerCase().trim();
        const isBn = (currentLang === 'bn') || /[\u0980-\u09FF]/.test(question);
        const kb = isBn ? aiKnowledgeBase.bn : aiKnowledgeBase.en;

        let bestMatch = null;
        let bestScore = 0;

        kb.forEach(item => {
            let score = 0;
            item.keywords.forEach(kw => {
                if (q.includes(kw.toLowerCase())) {
                    score += kw.length > 4 ? 2 : 1;
                }
            });
            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }
        });

        if (bestMatch && bestScore > 0) return bestMatch.a;

        if (isBn) {
            return "আমি সানন্দে আপনাকে সাহায্য করতে পারি! আপনি আব্দুল্লাহর সম্পর্কে জানতে পারেন:\n• টেক স্ট্যাক (Laravel, Vue, React, Next.js, MySQL)\n• ৪০+ লাইভ প্রজেক্ট ও সিস্টেম (Boost RAVA, HRMS, POS, পোর্টাল)\n• কাজের প্রাপ্যতা ও রেট/প্যাকেজ\n• পেমেন্ট গেটওয়ে ইন্টিগ্রেশন\n• অথবা সরাসরি হোয়াটসঅ্যাপে (+880 1639008885) মেসেজ পাঠাতে পারেন!";
        }

        return "I'd be glad to help with that! You can ask me about Abdullah's:\n• Tech stack (Laravel, Vue, React, Next.js, MySQL)\n• 40+ Commercial Projects & Systems (Boost RAVA, HRMS, POS, Portals)\n• Hiring Availability, Pricing & Rates\n• Payment Gateway Integrations\n• Or message him directly on WhatsApp (+880 1639008885) for an immediate response!";
    }

    async function askBackend(question) {
        const response = await fetch('/.netlify/functions/ask-ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question, lang: currentLang })
        });
        if (!response.ok) throw new Error('Backend unavailable');
        const data = await response.json();
        if (!data || !data.answer) throw new Error('Malformed response');
        return data.answer;
    }

    async function handleAiQuestion(question) {
        const userMsg = appendMessage(question, 'user');
        aiInput.value = '';
        const typingEl = showTyping();

        // Scroll to the user message immediately
        setTimeout(() => {
            aiMessages.scrollTo({
                top: Math.max(0, userMsg.offsetTop - 15),
                behavior: 'smooth'
            });
        }, 20);

        let answer;
        if (aiBackendAvailable) {
            try {
                answer = await askBackend(question);
            } catch (err) {
                aiBackendAvailable = false;
                answer = localAnswer(question);
            }
        } else {
            answer = localAnswer(question);
        }

        typingEl.remove();
        const botMsg = appendMessage(answer, 'bot', question);

        // Scroll smoothly to show the answer from the first line at the top of the viewport
        setTimeout(() => {
            if (userMsg && userMsg.offsetTop !== undefined) {
                aiMessages.scrollTo({
                    top: Math.max(0, userMsg.offsetTop - 12),
                    behavior: 'smooth'
                });
            } else if (botMsg) {
                aiMessages.scrollTo({
                    top: Math.max(0, botMsg.offsetTop - 12),
                    behavior: 'smooth'
                });
            }
        }, 40);
    }

    if (aiForm) {
        aiForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const question = aiInput.value.trim();
            if (!question) return;
            handleAiQuestion(question);
        });
    }

    // Unified click handler for all prompt triggers (welcome cards, quick topic pills, follow-up buttons)
    if (aiPanel) {
        aiPanel.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-q]');
            if (btn && btn.getAttribute('data-q')) {
                e.preventDefault();
                handleAiQuestion(btn.getAttribute('data-q'));
            }
        });
    }

    // ----------------------------------------------------------------------
    // 24. SPOTLIGHT CURSOR-GLOW & HERO AVATAR 3D TILT INTERACTION
    // ----------------------------------------------------------------------
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
                card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
            });
        });

        const heroAvatar = document.getElementById('hero-avatar-frame');
        if (heroAvatar) {
            heroAvatar.addEventListener('mousemove', (e) => {
                const rect = heroAvatar.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                heroAvatar.style.transform = `perspective(600px) rotateX(${-y * 0.16}deg) rotateY(${x * 0.16}deg) translateY(-4px) scale(1.05)`;
            });
            heroAvatar.addEventListener('mouseleave', () => {
                heroAvatar.style.transform = '';
            });
        }
    }

    // ----------------------------------------------------------------------
    // 25. HERO PORTRAIT FULL-VIEW MODAL (f.jpg)
    // ----------------------------------------------------------------------
    const portraitModal = document.getElementById('portrait-modal');
    const portraitCloseBtn = document.getElementById('portrait-modal-close');
    const heroAvatarFrame = document.getElementById('hero-avatar-frame');

    function openPortraitModal() {
        if (!portraitModal) return;
        portraitModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closePortraitModal() {
        if (!portraitModal) return;
        portraitModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (heroAvatarFrame) {
        heroAvatarFrame.addEventListener('click', (e) => {
            e.preventDefault();
            openPortraitModal();
        });
        heroAvatarFrame.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openPortraitModal();
            }
        });
    }

    if (portraitCloseBtn) {
        portraitCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closePortraitModal();
        });
    }

    if (portraitModal) {
        portraitModal.addEventListener('click', (e) => {
            if (e.target === portraitModal) {
                closePortraitModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && portraitModal && portraitModal.classList.contains('open')) {
            closePortraitModal();
        }
    });

    // Initialize FAQ and Language across whole page after all elements & handlers are ready
    if (typeof renderFaqAccordion === 'function') {
        renderFaqAccordion(currentLang);
    }
    if (typeof setLanguage === 'function') {
        setLanguage(currentLang);
    }
});

