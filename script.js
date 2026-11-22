
/* =====================================
   XANDZIORES PORTFOLIO
   Main configuration
===================================== */

const CONFIG = {
    github: "https://github.com/xandziores",
    discord: "https://discord.com/users/1201184193070248028",
    email: "palek.zenciak@gmail.com"
};


/* =====================================
   TRANSLATIONS
===================================== */

const translations = {

    pl: {
        nav_home: "Strona główna",
        nav_about: "O mnie",
        nav_skills: "Umiejętności",
        nav_projects: "Projekty",
        nav_contact: "Kontakt",
        nav_button: "Porozmawiajmy",

        availability: "PORTFOLIO DEWELOPERA",
        hero_pretitle: "CZEŚĆ, JESTEM",
        hero_title: 'Tworzę cyfrowe<br><span>doświadczenia.</span>',
        hero_description: "Developer zainteresowany tworzeniem skryptów FiveM, autorskich systemów oraz nowoczesnych interfejsów webowych. Zamieniam pomysły w działające projekty.",
        hero_button: "Zobacz projekty",
        hero_contact: "Kontakt",
        hero_socials: "ZNAJDŹ MNIE",
        scroll_text: "PRZEWIŃ, ABY ODKRYĆ",

        about_label: "POZNAJ MNIE",
        about_title: 'Kilka słów <span>o mnie.</span>',
        about_lead: "Nie ograniczam się do pisania kodu. Lubię tworzyć rzeczy, które mają swój charakter.",
        about_description: "Interesuję się programowaniem oraz projektowaniem nowoczesnych rozwiązań. Najwięcej czasu poświęcam środowisku FiveM, gdzie tworzę własne skrypty, systemy oraz interfejsy. Równocześnie rozwijam umiejętności związane z technologiami webowymi.",
        about_description_2: "Cenię przejrzysty kod, dopracowane szczegóły i rozwiązania, które faktycznie spełniają swoje zadanie.",

        info_one_title: "FiveM Development",
        info_one_desc: "Skrypty, systemy i integracje.",
        info_two_title: "Web Development",
        info_two_desc: "Strony internetowe i interfejsy.",
        info_three_title: "UI / GUI / NUI",
        info_three_desc: "Wygląd, wygoda i detale.",

        skills_label: "TECHNOLOGIE",
        skills_title: 'Moje <span>umiejętności.</span>',
        skills_description: "Technologie i narzędzia, z którymi pracuję i rozwijam swoje projekty.",

        skill_lua: "Skrypty i logika aplikacji.",
        skill_js: "Interaktywność i funkcjonalność.",
        skill_html: "Struktura stron internetowych.",
        skill_css: "Design, animacje i responsywność.",
        skill_sql: "Bazy danych i zapytania.",
        skill_ui: "Projektowanie interfejsów.",
        skills_note: "",

        projects_label: "MOJE REALIZACJE",
        projects_title: 'Wybrane <span>projekty.</span>',
        projects_description: "Kilka przykładów projektów i obszarów, nad którymi pracuję.",
        project_one_desc: "Projekt serwera FiveM z Polskim Lore, autorskie systemy i rozwiązania tworzone przeze mnie.",
        project_two_desc: "Nowoczesne interfejsy i autorskie UI.",
        project_three_desc: "Strony internetowe i rozwiązania webowe.",
        projects_note: "Prezentowane pozycje są przykładowymi kategoriami. Własne realizacje możesz dodać w kodzie HTML.",

        experience_label: "MOJA DROGA",
        experience_title: 'Rozwijam się <span>każdego dnia.</span>',
        experience_one_title: "FiveM Development",
        experience_one_desc: "Tworzenie autorskich skryptów, systemów i rozwiązań dla serwerów FiveM.",
        experience_two_title: "Web Development",
        experience_two_desc: "Rozwijanie umiejętności w tworzeniu stron i interfejsów internetowych.",
        experience_three_title: "More to come",
        experience_three_desc: "Kolejne pomysły, nowe technologie i następne projekty.",

        contact_label: "KONTAKT",
        contact_pretitle: "MASZ POMYSŁ NA WSPÓŁPRACĘ?",
        contact_title: 'Stwórzmy coś<br><span>wyjątkowego.</span>',
        contact_description: "Masz pytanie, projekt lub pomysł? Napisz do mnie. Chętnie porozmawiam o nowych możliwościach.",
        contact_button: "Napisz wiadomość",

        footer_text: "Projektuję. Tworzę. Rozwijam się."
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_button: "Let's talk",

        availability: "DEVELOPER PORTFOLIO",
        hero_pretitle: "HELLO, I'M",
        hero_title: 'Building digital<br><span>experiences.</span>',
        hero_description: "Developer interested in creating FiveM scripts, custom systems and modern web interfaces. Turning ideas into working projects.",
        hero_button: "Explore projects",
        hero_contact: "Contact",
        hero_socials: "FIND ME",
        scroll_text: "SCROLL TO DISCOVER",

        about_label: "ABOUT ME",
        about_title: 'A little <span>about me.</span>',
        about_lead: "I do more than just write code. I enjoy creating things that have their own character.",
        about_description: "I'm interested in programming and designing modern solutions. I spend most of my time working with FiveM, where I create custom scripts, systems and interfaces. At the same time, I continue developing my web technologies skills.",
        about_description_2: "I value clean code, attention to detail and solutions that actually get the job done.",

        info_one_title: "FiveM Development",
        info_one_desc: "Scripts, systems and integrations.",
        info_two_title: "Web Development",
        info_two_desc: "Websites and interfaces.",
        info_three_title: "UI / GUI / NUI",
        info_three_desc: "Visuals, usability and details.",

        skills_label: "TECHNOLOGIES",
        skills_title: 'My <span>skills.</span>',
        skills_description: "Technologies and tools I use while developing my projects.",

        skill_lua: "Scripts and application logic.",
        skill_js: "Interactivity and functionality.",
        skill_html: "Website structure.",
        skill_css: "Design, animations and responsiveness.",
        skill_sql: "Databases and queries.",
        skill_ui: "Interface design.",
        skills_note: "",

        projects_label: "MY WORK",
        projects_title: 'Selected <span>projects.</span>',
        projects_description: "A few examples of projects and areas I work on.",
        project_one_desc: "A FiveM server project featuring Polish lore, with custom systems and solutions developed by me.",
        project_two_desc: "Modern interfaces and custom UI.",
        project_three_desc: "Websites and web solutions.",
        projects_note: "Displayed entries are example categories. You can add your own projects in the HTML file.",

        experience_label: "MY JOURNEY",
        experience_title: 'Growing <span>every day.</span>',
        experience_one_title: "FiveM Development",
        experience_one_desc: "Creating custom scripts, systems and solutions for FiveM servers.",
        experience_two_title: "Web Development",
        experience_two_desc: "Developing skills in building websites and web interfaces.",
        experience_three_title: "More to come",
        experience_three_desc: "More ideas, new technologies and future projects.",

        contact_label: "CONTACT",
        contact_pretitle: "HAVE AN IDEA FOR A PROJECT?",
        contact_title: 'Let’s create something<br><span>exceptional.</span>',
        contact_description: "Have a question, project or idea? Send me a message. I'd be happy to discuss new opportunities.",
        contact_button: "Send a message",

        footer_text: "Designing. Creating. Growing."
    }

};


/* =====================================
   LANGUAGE SWITCH
===================================== */

const languageSwitch = document.getElementById("languageSwitch");

let currentLanguage = localStorage.getItem("portfolioLanguage") || "pl";

function setLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;

    localStorage.setItem("portfolioLanguage", language);

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }

    });

    languageSwitch.innerHTML = language === "pl"
        ? 'PL <span>/</span> EN'
        : 'PL <span>/</span> EN';

    languageSwitch.setAttribute(
        "aria-label",
        language === "pl" ? "Switch to English" : "Zmień na polski"
    );

}

languageSwitch.addEventListener("click", () => {

    setLanguage(currentLanguage === "pl" ? "en" : "pl");

});


/* =====================================
   SOCIAL LINKS AND EMAIL
===================================== */

document.querySelectorAll('[data-social="github"]').forEach(link => {
    link.href = CONFIG.github;
});

document.querySelectorAll('[data-social="discord"]').forEach(link => {
    link.href = CONFIG.discord;
});

document.getElementById("emailLink").href = "https://discord.gg/7pQMawc7Qv";
document.getElementById("emailLink").target = "_blank";
document.getElementById("emailLink").rel = "noopener noreferrer";

document.getElementById("emailText").href = `mailto:${CONFIG.email}`;


/* =====================================
   PAGE LOADER
===================================== */

const pageLoader = document.getElementById("pageLoader");

function hideLoader() {

    if (!pageLoader) return;

    pageLoader.classList.add("loaded");

    document.querySelectorAll("#home .reveal").forEach(element => {
        element.classList.add("visible");
    });

}

window.addEventListener("load", () => {
    setTimeout(hideLoader, 450);
});

// Fallback in case an external resource loads slowly.
setTimeout(hideLoader, 3500);


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(".reveal");

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !reducedMotion) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -55px 0px"
    });

    revealElements.forEach(element => {

        if (!element.closest("#home")) {
            revealObserver.observe(element);
        }

    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


/* =====================================
   HEADER SCROLL EFFECT
===================================== */

const header = document.getElementById("header");

function updateHeader() {

    header.classList.toggle("scrolled", window.scrollY > 30);

}

window.addEventListener("scroll", updateHeader, { passive: true });

updateHeader();


/* =====================================
   SCROLL PROGRESS
===================================== */

const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    scrollProgress.style.width = `${progress}%`;

}

window.addEventListener("scroll", updateScrollProgress, { passive: true });

updateScrollProgress();


/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const navigationLinks = navigation.querySelectorAll("a");

function closeMenu() {

    navigation.classList.remove("active");
    menuToggle.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");

}

menuToggle.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    document.body.classList.toggle("menu-open", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));

});

navigationLinks.forEach(link => {

    link.addEventListener("click", closeMenu);

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeMenu();
    }

});

window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {
        closeMenu();
    }

});


/* =====================================
   CURSOR GLOW
===================================== */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener("mousemove", event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    }, { passive: true });

    function animateGlow() {

        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;

        cursorGlow.style.transform =
            `translate(${glowX - 210}px, ${glowY - 210}px)`;

        requestAnimationFrame(animateGlow);

    }

    animateGlow();

}


/* =====================================
   PROJECT CARD INTERACTION
===================================== */

document.querySelectorAll("[data-project]").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        // Add your real project URL here.
        const project = link.dataset.project;

        console.log("Selected project:", project);

    });

});


/* =====================================
   FOOTER YEAR
===================================== */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* =====================================
   INITIALIZE
===================================== */

setLanguage(currentLanguage);
updateHeader();
updateScrollProgress();
