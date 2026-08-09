/**
 * A.S.M. ABDULLAH - PORTFOLIO INTERACTIVE JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. TYPEWRITER EFFECT IN HERO SECTION
    // ----------------------------------------------------------------------
    const typewriterElement = document.getElementById('typewriter');
    const phrases = [
        "Senior Full-Stack Web Developer",
        "Creator of 40+ Live Commercial Sites",
        "Laravel, PHP & Vue.js Architect",
        "Docker, GitHub & cPanel Deployment Expert",
        "Enterprise HRMS & POS System Engineer"
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

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
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

    // Form submit email handler
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
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
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Dispatched to Email...';

            setTimeout(() => {
                showToast('Message submitted! Opening mail app...');
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Email';

                // Direct email dispatch to abuhmdabdullah72@gmail.com
                window.location.href = `mailto:abuhmdabdullah72@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Client Name: " + name + "\nClient Email: " + email + "\n\nProject Requirements:\n" + message)}`;
            }, 1000);
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
});
