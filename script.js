/**
 * A.S.M. ABDULLAH - PORTFOLIO INTERACTIVE JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. TYPEWRITER EFFECT IN HERO SECTION
    // ----------------------------------------------------------------------
    const typewriterElement = document.getElementById('typewriter');
    const phrases = [
        "Senior Full-Stack Web Developer in Dhaka",
        "Laravel & PHP Specialist in Bangladesh",
        "Vue.js, React.js & Next.js Architect",
        "Creator of 40+ Live Commercial Projects",
        "Enterprise HRMS, POS & AdTech Engineer",
        "Docker, GitHub & cPanel Deployment Expert"
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const delayBetween = 2000;

    function typeEffect() {
        if (!typewriterElement) return;
        const currentPhrase = phrases[phraseIdx];

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
            phraseIdx = (phraseIdx + 1) % phrases.length;
            currentSpeed = 500;
        }

        setTimeout(typeEffect, currentSpeed);
    }
    typeEffect();

    // ----------------------------------------------------------------------
    // 2. THEME SWITCHER (DARK / LIGHT MODE)
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        showToast(`Switched to ${newTheme.toUpperCase()} mode`);
    });

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

    document.querySelectorAll('.btn-detail-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-project');
            const data = projectData[key];
            if (!data) return;

            modalTitle.textContent = data.title;
            modalBody.innerHTML = `
                <div class="modal-detail-wrap">
                    <p class="modal-cat"><strong>Category:</strong> ${data.category}</p>
                    <p class="modal-desc">${data.description}</p>
                    
                    <h4 style="margin: 1rem 0 0.5rem;">Tech Architecture Stack:</h4>
                    <div class="badge-cloud" style="margin-bottom: 1.5rem;">
                        ${data.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                    </div>

                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        ${data.url ? `<a href="${data.url}" target="_blank" class="btn btn-primary btn-sm"><i class="fa-solid fa-up-right-from-square"></i> Visit Live Web App</a>` : ''}
                        ${data.github ? `<a href="${data.github}" target="_blank" class="btn btn-outline btn-sm"><i class="fa-brands fa-github"></i> View Repository</a>` : ''}
                    </div>
                </div>
            `;
            projectModal.showModal();
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => projectModal.close());
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            const rect = projectModal.getBoundingClientRect();
            if (
                e.clientX < rect.left ||
                e.clientX > rect.right ||
                e.clientY < rect.top ||
                e.clientY > rect.bottom
            ) {
                projectModal.close();
            }
        });
    }

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
    // 22. ON-PAGE FAQ ACCORDION DATA
    // ----------------------------------------------------------------------
    const faqData = [
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
            a: "Yes — he's currently available for hiring, freelance contracts, and remote roles. The fastest way to check availability is to message him directly via WhatsApp or the contact form below."
        },
        {
            q: "What kind of projects has he built?",
            a: "Highlights include the Boost RAVA programmatic ad network (SSP/DSP/RTB), enterprise HRMS & payroll systems, pharmacy and wholesale POS platforms, the LinkLine BD ISP portal, Rangpur Police & Rangpur News portals, and a payment gateway integration engine. Scroll to the Projects section to see all 40+."
        },
        {
            q: "How can I contact Abdullah?",
            a: "You can reach him on WhatsApp at +880 1639008885, by email at abuhmdabdullah72@gmail.com, or by filling out the contact form at the bottom of this page — it can dispatch straight to email or WhatsApp."
        },
        {
            q: "Does he build enterprise software like HRMS, POS, or ERP systems?",
            a: "Yes — he has deep experience building enterprise systems: HRMS & payroll, pharmacy/wholesale POS, clinical lab ERP, automotive garage ERP, garments export management, and courier logistics tracking, most built with Laravel, Vue.js, and MySQL."
        }
    ];

    // Render FAQ accordion
    const faqListEl = document.getElementById('faq-list');
    if (faqListEl) {
        faqData.forEach((item) => {
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

        window.addEventListener('resize', () => {
            faqListEl.querySelectorAll('.faq-item.open').forEach(openItem => {
                const ans = openItem.querySelector('.faq-answer');
                if (ans) ans.style.maxHeight = `${ans.scrollHeight}px`;
            });
        });
    }

    // ----------------------------------------------------------------------
    // 23. COMPREHENSIVE AI AUTOMATION KNOWLEDGE BASE & ASSISTANT
    // ----------------------------------------------------------------------
    const aiKnowledgeBase = [
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
            topic: "SEO Automation & SERP Ranking",
            keywords: ["seo", "google", "ranking", "serp", "meta", "schema", "json-ld", "sitemap", "structured data"],
            a: "Abdullah builds websites with built-in search engine dominance:\n• Dynamic JSON-LD structured data (Schema.org) for Google rich results\n• Open Graph & Twitter meta tags for social media previews\n• Automated XML sitemaps, semantic HTML5, and Core Web Vitals performance tuning."
        },
        {
            topic: "Custom SaaS & Web Portals",
            keywords: ["custom", "saas", "portal", "scratch", "new", "platform", "mvp", "dashboard", "startup", "web application"],
            a: "Abdullah can take your custom idea from wireframe to a live, production-ready SaaS platform:\n• Responsive dashboard interfaces with Vue.js / React / Next.js\n• Robust REST API backends with Laravel and MySQL\n• Role-based user permissions, multi-tenant databases, and automated billing."
        },
        {
            topic: "Next Steps to Start a Project",
            keywords: ["start", "hire now", "begin", "consultation", "steps", "meeting", "discuss", "hire"],
            a: "Starting a project with Abdullah is straightforward:\n1. Message him on WhatsApp (+880 1639008885) or submit the contact form.\n2. He will analyze your requirements and provide a free architectural consultation and timeline roadmap.\n3. Milestones are finalized, and development kicks off!"
        }
    ];

    const aiFab = document.getElementById('ai-fab');
    const aiPanel = document.getElementById('ai-panel');
    const aiClose = document.getElementById('ai-close');
    const aiMessages = document.getElementById('ai-messages');
    const aiForm = document.getElementById('ai-form');
    const aiInput = document.getElementById('ai-input');

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

        if (text.includes('01639008885') || text.includes('WhatsApp') || text.includes('abuhmdabdullah72@gmail.com')) {
            formatted += `<div class="ai-action-pills"><a href="https://wa.me/8801639008885" target="_blank" class="ai-action-btn wa"><i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a><a href="mailto:abuhmdabdullah72@gmail.com" class="ai-action-btn mail"><i class="fa-solid fa-envelope"></i> Send Email</a></div>`;
        }

        // Add 2-3 interactive follow-up chips below each response
        const qLower = (question || '').toLowerCase();
        let followups = [];
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
        let bestMatch = null;
        let bestScore = 0;

        aiKnowledgeBase.forEach(item => {
            let score = 0;
            item.keywords.forEach(kw => {
                if (q.includes(kw)) {
                    score += kw.length > 4 ? 2 : 1;
                }
            });
            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }
        });

        if (bestMatch && bestScore > 0) return bestMatch.a;

        return "I'd be glad to help with that! You can ask me about Abdullah's:\n• Tech stack (Laravel, Vue, React, Next.js, MySQL)\n• 40+ Commercial Projects & Systems (Boost RAVA, HRMS, POS, Portals)\n• Hiring Availability, Pricing & Rates\n• Payment Gateway Integrations\n• Or message him directly on WhatsApp (+880 1639008885) for an immediate response!";
    }

    async function askBackend(question) {
        const response = await fetch('/.netlify/functions/ask-ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
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
    // 24. SPOTLIGHT CURSOR-GLOW ON GLASS CARDS (modern lighting micro-interaction)
    // ----------------------------------------------------------------------
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
                card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
            });
        });
    }
});

