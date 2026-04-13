// ===== DONNÉES DES PHOTOS POUR CHAQUE PROJET =====
const projectPhotos = {
    project1: ['../image/formulaire.jpeg'],
    project2: [
        'b_ecarttype.png', 'b_echellelog.png',
        'b_intervalleegalquantile.png', 'b_intervalleegal.png', 'b_jenks.png'
    ],
    project3: [
        'bb_dakar.png', 'b_diourbel.png', 'b_fatick.png',
        'b_Louga.png', 'b_kaolack.png', 'b_kedougou.png',
        'b_kolda.png', 'b_ziguinchor.png', 'b_sedhiou.png',
        'b_matam.png', 'b_TAMBACOUNDA.png', 'b_thies.png',
        '../image/b_saint_louis.png', '../image/b_kaffrine.png'
    ],
    project4: ['projet_arcgis_avant_num.jpg', 'projet_arcgis.jpg'],
    project5: ['aut 1.png', 'aut 2.png', '../image/aut 3.png', 'aut 4.png'],
    project6: ['auto 1.jpeg', 'auto 2.jpeg'],
    project7: [
        'r1.jpeg', 'R2.jpeg', 'R3.jpeg', 'R4.jpeg',
        'R5.jpeg', 'R6.jpeg', 'R7.jpeg', 'R8.jpeg'
    ],
    project8: ['../image/CV.jpeg'],
    project9: [
        'pix4_1.jpeg', 'pix4_2.jpeg', 'pix4_3.jpeg',
        'pix4_4.jpeg', 'pix4_5.jpeg', 'pix4_6.jpeg', 'pix4_resultat.jpeg'
    ]
};

// Données des projets
const projectsData = [
    { id: 'project1', title: 'Formulaire HTML/CSS', description: 'Conception et développement d\u2019un formulaire de participation au jeu de débats destiné aux étudiants de l\'Université Iba Der Thiam de Thiès. Ce formulaire permet de collecter efficacement les informations essentielles telles que le prénom, le nom, la filière, le niveau d\'études, le téléphone et l\'email. L\'interface a été pensée pour être claire, intuitive et facile à utiliser, garantissant une bonne expérience utilisateur. Le projet met l\'accent sur une navigation fluide, une validation simple des données et un design responsive, assurant une adaptation optimale à tous les types d\'écrans. Il a été réalisé en utilisant les technologies HTML5 et CSS3.', category: 'informatique', icon: '../image/CSS.jpeg', githubLink: 'https://github.com/SHASHA2005/depot_arcgis/blob/main/AMAT.css' },
    { id: 'project8', title: 'CV Professionnel Web', description: 'Réalisation d\u2019un CV moderne et structuré, conçu pour valoriser efficacement les compétences, les expériences et les projets académiques. Le design, clair et organisé en deux colonnes, repose sur une hiérarchie visuelle bien définie facilitant la lecture et l\'accès rapide aux informations. Une attention particulière a été portée à l\'esthétique et à la facilité d\'utilisation afin d\'offrir une présentation à la fois professionnelle et agréable. La mise en page responsive permet une adaptation optimale à tous les types d\'écrans. Ce projet a été réalisé à l\'aide des technologies HTML5 et CSS3.', category: 'informatique', icon: '../image/html.jpeg', githubLink: 'https://github.com/SHASHA2005/cv-web' },
    { id: 'project7', title: 'Analyse du Qualité de l\'air, du bruit et du microclimat à Thiès', description: 'Réalisation d\'une étude multidimensionnelle sur la qualité de l\'air, le bruit et le microclimat à Thiès, mobilisant des compétences en analyse spatiale et en statistique sous RStudio. Le projet a consisté à traiter et analyser des données environnementales (nettoyage, gestion des valeurs aberrantes, création d\'indicateurs) et à appliquer des tests statistiques pour identifier les relations entre occupation du sol, végétation (NDVI) et pollution (PM2.5). Cette étude met en évidence la capacité à transformer des données en informations utiles pour l\'aménagement du territoire et la gestion de l\'environnement.', category: 'informatique', icon: '../image/rstudio.jpeg', githubLink: 'https://github.com/SHASHA2005/qualite-air-thies' },
    { id: 'project2', title: 'Méthodes de discrétisation : Essor démographique de Niakhar', description: 'Analyse cartographique de la croissance démographique à Niakhar (2004-2012). Ce projet réalisé sur QGIS explore l\'impact de cinq méthodes de discrétisation (Jenks, quantiles, écart-type, etc.) sur la représentation spatiale du taux de croissance de la population. L\'étude conclut que les méthodes de l\'écart-type et de l\'échelle logarithmique offrent la lecture la plus pertinente des disparités territoriales. En alliant traitement statistique et sémiologie graphique, ce travail démontre ma capacité à sélectionner le rendu le plus efficace pour transformer une donnée brute en un véritable outil d\'aide à la décision.', category: 'cartographique', icon: '../image/qgis.jpeg' },
    { id: 'project3', title: 'Eaux temporaires et réseau routier : cartographie des régions du sénégal', description: 'Réalisation d\'un projet de cartographie à partir de couches shapefile représentant les 14 régions du Sénégal, les eaux temporaires et les routes nationales. Le travail a consisté à extraire chaque région individuellement, puis à y associer ses éléments hydrologiques et son réseau routier afin de produire, pour chacune, une carte thématique claire mettant en évidence les eaux temporaires et les routes nationales. Ce projet met en avant des compétences en manipulation de données géospatiales, en traitement sous SIG et en conception de cartes thématiques lisibles et structurées.', category: 'cartographique', icon: '../image/qgis.jpeg' },
    { id: 'project4', title: 'Numérisation des infrastructures et zones naturelles de Nioro du Rip', description: 'Réalisation d\'une cartographie détaillée de Nioro du Rip sur ArcGIS à partir d\'une couche existante, en numérisant tous les éléments présents tels que les routes, les cours d\'eau, les habitations les localités, l\'occupation du sol, la végétation et les zones de cultures. Ce projet a permis de produire une carte thématique complète et lisible, facilitant la visualisation claire des différents éléments géographiques et leur organisation spatiale ainsi que les relations entre infrastructures, espaces naturels et zones cultivées.', category: 'cartographique', icon: '../image/arcgis.jpeg' },
    { id: 'project5', title: 'Conception d\'un plan de maison et modélisation 3D sous AutoCAD', description: 'e projet articule le dessin technique et la visualisation tridimensionnelle à travers la réalisation complète d\'un bâti. Le processus débute par une conception rigoureuse en 2D, suivie d\'une modélisation 3D permettant l\'extraction de différentes vues. L\'utilisation de vues en plan (haut) et d\'isométries orientées, associée à des styles visuels comme le filaire ou le conceptuel, permet d\'adapter l\'affichage selon les besoins techniques. L\'accent est mis sur la complémentarité entre le type de vue choisi et le style visuel appliqué pour garantir une présentation claire et détaillée de l\'ensemble du projet.', category: 'topographique', icon: '../image/autocad.jpeg' },
    { id: 'project6', title: 'Conception et mise en plan architecturale sous AutoCAD', description: 'Conception architecturale et modélisation technique sous AutoCAD, portant sur la réalisation complète d\'un plan de rez-de-chaussée, de la saisie des coordonnées à la mise en page finale. Le projet met l\'accent sur la précision du dessin et l\'aménagement détaillé via l\'insertion de blocs (menuiserie, plomberie, mobilier), tout en garantissant une cotation rigoureuse de l\'espace. L\'interface de présentation a été pensée pour être professionnelle et normée, incluant un cartouche structuré avec échelle et métadonnées de vérification, assurant ainsi une conformité totale aux standards du dessin assisté par ordinateur.', category: 'topographique', icon: '../image/autocad.jpeg' },
    { id: 'project9', title: 'Traitement photogrammétrique d\'images aériennes', description: 'Réalisation d\'un traitement photogrammétrique portant sur un jeu d\'environ 200 images aériennes de l\'UFR SI, acquises par drone. Le projet a été mené à l\'aide du logiciel PIX4D, en s\'appuyant sur les principes de la stéréoscopie, où une même portion du terrain apparaît sur plusieurs clichés. Le recouvrement stéréoscopique entre les images a permis la reconstruction précise de la structure tridimensionnelle (3D) de la zone étudiée. Le processus a conduit à la production d\'une orthomosaïque géoréférencée qui correspond à une image unique issue de l\'assemblage de plusieurs clichés corrigés.', category: 'cartographique', icon: '../image/pix4D.jpeg' }
];

// Liens GitHub
const githubLinks = {
    'project1': [
        { label: 'Voir le CSS', url: 'https://github.com/SHASHA2005/depot_arcgis/blob/main/AMAT.css' },
        { label: 'Voir le HTML', url: 'https://github.com/SHASHA2005/depot_arcgis/blob/main/AMAT.html' }
    ],
    'project7': [
        { label: 'Voir sur GitHub', url: 'https://github.com/SHASHA2005/depot_arcgis/blob/main/Aicha%20Ndiaye%20%20L2%20GMT%20analyse%203.Rmd' }
    ],
    'project8': [
        { label: 'Voir le HTML', url: 'https://github.com/SHASHA2005/depot_arcgis/blob/main/Mon_cv.html' },
        { label: 'Voir le CSS', url: 'https://github.com/SHASHA2005/depot_arcgis/blob/main/mon_cv.css' }
    ]
};

// Index actuel pour les galeries
let currentPhotoIndex = {};

// ===== ZOOM GLOBAL : variables partagées =====
let zoomPhotos = [];
let zoomCurrent = 0;

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function () {
    console.log('Initialisation du portfolio...');

    generateProjects();
    setupMobileFlip(); 

    for (let projectId in projectPhotos) {
        currentPhotoIndex[projectId] = 0;
    }

    setupProjectFilters();
    setupMobileMenu();
    setupThemeToggle();
    setupSkillsAnimation();
    setupContactForm();
    setupSmoothScroll();
    setupActiveNavLink();
    initSkillsProgress();
    setupHeroStats(); // Appelle la fonction pour ajouter les stats dans le hero
});

// ===== GÉNÉRATION DES PROJETS (3 FACES) =====
function generateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const firstPhoto = projectPhotos[project.id]?.[0] || '';
        const isInformatique = project.category === 'informatique';
        const grayClass = `grad-sky`;
        const btnLabel = isInformatique ? 'Aperçu' : 'Voir le projet';

        let githubBtnHTML = '';
        if (isInformatique && githubLinks[project.id]) {
            githubLinks[project.id].forEach(link => {
                githubBtnHTML += `
                <a href="${link.url}" target="_blank" class="flip-btn github-style">
                    ${link.label} <i class="fab fa-github"></i>
                </a>`;
            });
        }

        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';
        flipCard.setAttribute('data-category', project.category);
        flipCard.setAttribute('id', project.id);

        flipCard.innerHTML = `
            <div class="flip-card-inner" id="inner-${project.id}">

                <div class="flip-card-face face-1 ${grayClass}">
                    <div class="project-content">
                        <div class="project-image">
                            <img src="${project.icon}" alt="${project.title}">
                        </div>
                        <div class="card-tag">${project.category}</div>
                        <h4>${project.title}</h4>
                        <p class="face1-desc">${project.description.substring(0, 90)}...</p>
                        <div class="hover-hint">↻ Survoler pour voir</div>
                    </div>
                </div>

                <div class="flip-card-face face-2">
                    <div class="project-content">
                        <h4>${project.title}</h4>
                        <p>${project.description}</p>
                        <div class="project-actions">
                            <button class="flip-btn" onclick="event.stopPropagation(); openDetails('${project.id}')">${btnLabel}</button>
                            ${githubBtnHTML}
                        </div>
                    </div>
                </div>

                <div class="flip-card-face face-3">
                    <div class="gallery-container">
                        <div class="gallery-main">
                            <img id="gallery-img-${project.id}" src="${firstPhoto}" class="gallery-image" onclick="toggleZoom(this, '${project.id}')">
                            <button class="gallery-nav prev" onclick="event.stopPropagation(); changePhoto('${project.id}', -1)">❮</button>
                            <button class="gallery-nav next" onclick="event.stopPropagation(); changePhoto('${project.id}', 1)">❯</button>
                            <div class="photo-counter" id="counter-${project.id}">1/${projectPhotos[project.id]?.length || 1}</div>
                        </div>
                        <div class="gallery-thumbnails" id="thumbnails-${project.id}"></div>
                        <button class="back-to-front" onclick="event.stopPropagation(); closeDetails('${project.id}')">
                            <i class="fas fa-arrow-left"></i> Retour
                        </button>
                    </div>
                </div>

            </div>

            <div class="face-dots">
                <span class="face-dot active" id="dot-${project.id}-0"></span>
                <span class="face-dot" id="dot-${project.id}-1"></span>
                <span class="face-dot" id="dot-${project.id}-2"></span>
            </div>
        `;

        projectsGrid.appendChild(flipCard);
    });
}
// ===== FLIP AU TOUCH (mobile) =====
function setupMobileFlip() {
    // Seulement sur appareils sans hover précis
    if (window.matchMedia('(hover: none)').matches) {
        document.querySelectorAll('.flip-card').forEach(card => {
            card.addEventListener('click', function (e) {
                // Ne pas interférer avec les boutons internes
                if (e.target.closest('button, a')) return;
                
                if (this.classList.contains('details-open')) return;
                
                // Toggle la face 1 → face 2
                const isFlipped = this.classList.contains('flipped');
                
                // Ferme toutes les autres cartes
                document.querySelectorAll('.flip-card.flipped').forEach(c => {
                    if (c !== this) {
                        c.classList.remove('flipped');
                        setDots(c.id, 0);
                    }
                });
                
                this.classList.toggle('flipped', !isFlipped);
                setDots(this.id, isFlipped ? 0 : 1);
            });
        });
    }
}

// ===== GESTION DES 3 FACES =====

window.openDetails = function (projectId) {
    const card = document.getElementById(projectId);
    if (!card) return;
    card.classList.add('details-open');
    setDots(projectId, 2);
    createThumbnails(projectId);
};

window.closeDetails = function (projectId) {
    const card = document.getElementById(projectId);
    if (!card) return;
    card.classList.remove('details-open');
    setDots(projectId, 0);
};

function setDots(projectId, activeIndex) {
    for (let i = 0; i < 3; i++) {
        const dot = document.getElementById(`dot-${projectId}-${i}`);
        if (dot) dot.classList.toggle('active', i === activeIndex);
    }
}

document.addEventListener('mouseover', function (e) {
    const card = e.target.closest('.flip-card');
    if (card && !card.classList.contains('details-open')) {
        const id = card.id;
        if (id) setDots(id, 1);
    }
});
document.addEventListener('mouseout', function (e) {
    const card = e.target.closest('.flip-card');
    if (card && !card.classList.contains('details-open')) {
        const id = card.id;
        if (id) setDots(id, 0);
    }
});

// ===== FONCTIONS GALERIE =====
function createThumbnails(projectId) {
    const container = document.getElementById(`thumbnails-${projectId}`);
    if (!container) return;
    const photos = projectPhotos[projectId];
    if (!photos) return;

    container.innerHTML = '';
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        img.onclick = () => selectPhoto(projectId, index);
        container.appendChild(img);
    });
}

window.changePhoto = function (projectId, direction) {
    const photos = projectPhotos[projectId];
    if (!photos) return;
    if (currentPhotoIndex[projectId] === undefined) currentPhotoIndex[projectId] = 0;
    currentPhotoIndex[projectId] += direction;
    if (currentPhotoIndex[projectId] < 0) currentPhotoIndex[projectId] = photos.length - 1;
    if (currentPhotoIndex[projectId] >= photos.length) currentPhotoIndex[projectId] = 0;
    updateMainDisplay(projectId);
};

function selectPhoto(projectId, index) {
    currentPhotoIndex[projectId] = index;
    updateMainDisplay(projectId);
}

function updateMainDisplay(projectId) {
    const img = document.getElementById(`gallery-img-${projectId}`);
    if (img && projectPhotos[projectId]) {
        img.src = projectPhotos[projectId][currentPhotoIndex[projectId]];
    }
    const thumbnails = document.querySelectorAll(`#thumbnails-${projectId} .thumbnail`);
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentPhotoIndex[projectId]);
    });
    const counter = document.getElementById(`counter-${projectId}`);
    if (counter) counter.textContent = `${currentPhotoIndex[projectId] + 1}/${projectPhotos[projectId].length}`;
}

// ===== ZOOM AVEC NAVIGATION SUIVANT / PRÉCÉDENT =====
window.toggleZoom = function (img, projectId) {
    zoomPhotos = projectPhotos[projectId] ? [...projectPhotos[projectId]] : [img.src];
    zoomCurrent = zoomPhotos.indexOf(img.src);
    if (zoomCurrent < 0) zoomCurrent = 0;
    openZoomOverlay();
};

function openZoomOverlay() {
    closeGlobalZoom();

    const overlay = document.createElement('div');
    overlay.id = 'zoom-overlay-unique';
    overlay.className = 'zoom-overlay';
    overlay.onclick = closeGlobalZoom;
    document.body.appendChild(overlay);

    const wrapper = document.createElement('div');
    wrapper.id = 'zoom-wrapper';

    const btnPrev = document.createElement('button');
    btnPrev.innerHTML = '❮';
    btnPrev.className = 'zoom-arrow-btn zoom-prev';
    btnPrev.title = 'Image précédente';
    btnPrev.onclick = (e) => {
        e.stopPropagation();
        zoomCurrent = (zoomCurrent - 1 + zoomPhotos.length) % zoomPhotos.length;
        updateZoomImage();
    };

    const zoomedImg = document.createElement('img');
    zoomedImg.id = 'zoom-img-unique';
    zoomedImg.src = zoomPhotos[zoomCurrent];
    zoomedImg.className = 'global-zoom-image';
    zoomedImg.onclick = closeGlobalZoom;

    const btnNext = document.createElement('button');
    btnNext.innerHTML = '❯';
    btnNext.className = 'zoom-arrow-btn zoom-next';
    btnNext.title = 'Image suivante';
    btnNext.onclick = (e) => {
        e.stopPropagation();
        zoomCurrent = (zoomCurrent + 1) % zoomPhotos.length;
        updateZoomImage();
    };

    const counter = document.createElement('div');
    counter.id = 'zoom-counter';
    counter.className = 'zoom-counter-global';
    counter.textContent = `${zoomCurrent + 1} / ${zoomPhotos.length}`;

    const btnClose = document.createElement('button');
    btnClose.innerHTML = '✕';
    btnClose.className = 'zoom-close-global';
    btnClose.title = 'Fermer (Échap)';
    btnClose.onclick = closeGlobalZoom;

    if (zoomPhotos.length <= 1) {
        btnPrev.style.display = 'none';
        btnNext.style.display = 'none';
        counter.style.display = 'none';
    }

    wrapper.appendChild(btnPrev);
    wrapper.appendChild(zoomedImg);
    wrapper.appendChild(btnNext);
    wrapper.appendChild(counter);
    wrapper.appendChild(btnClose);
    document.body.appendChild(wrapper);
    document.body.classList.add('no-scroll');

    document.addEventListener('keydown', zoomKeyNav);
}

function updateZoomImage() {
    const img = document.getElementById('zoom-img-unique');
    if (img) {
        img.style.opacity = '0';
        img.style.transform = 'translate(-50%, -50%) scale(0.95)';
        setTimeout(() => {
            img.src = zoomPhotos[zoomCurrent];
            img.style.opacity = '1';
            img.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 150);
    }
    const counter = document.getElementById('zoom-counter');
    if (counter) counter.textContent = `${zoomCurrent + 1} / ${zoomPhotos.length}`;
}

function zoomKeyNav(e) {
    if (e.key === 'ArrowLeft') {
        zoomCurrent = (zoomCurrent - 1 + zoomPhotos.length) % zoomPhotos.length;
        updateZoomImage();
    }
    if (e.key === 'ArrowRight') {
        zoomCurrent = (zoomCurrent + 1) % zoomPhotos.length;
        updateZoomImage();
    }
    if (e.key === 'Escape') {
        closeGlobalZoom();
    }
}

window.closeGlobalZoom = function () {
    document.getElementById('zoom-overlay-unique')?.remove();
    document.getElementById('zoom-wrapper')?.remove();
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', zoomKeyNav);
};

// ===== FILTRAGE =====
function setupProjectFilters() {
    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', function () {
            filters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.filter;
            document.querySelectorAll('.flip-card').forEach(card => {
                card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
            });
        });
    });
}

// ===== THÈME =====
function setupThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const lightning = document.getElementById('lightningEffect');
    if (!toggle) return;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggle.checked = true;
        document.body.setAttribute('data-theme', 'dark');
    }
    toggle.addEventListener('change', function () {
        const theme = this.checked ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        forceSkillsColors();
        if (lightning) {
            lightning.classList.add('active');
            setTimeout(() => lightning.classList.remove('active'), 200);
        }
    });
}

function forceSkillsColors() {
    const targets = document.querySelectorAll('.skills-category, .skill-item');
    targets.forEach(el => el.style.backgroundColor = '');
}

// ===== COMPÉTENCES : initialisation à 0% =====
function initSkillsProgress() {
    document.querySelectorAll('.skill-item').forEach(item => {
        const skillName = item.querySelector('.skill-name')?.textContent.trim();
        const progressBar = item.querySelector('.progress');
        const pctEl = item.querySelector('.skill-percent');

        const skillPercentages = {
            'ArcGIS': 80, 'QGIS': 80, 'Philcarto': 40, 'RStudio': 70,
            'VSCODE': 50, 'Pycharm': 40, 'R': 70, 'HTML / CSS / JS': 50, 'Python': 40
        };

        if (skillName && skillPercentages[skillName]) {
            const pct = skillPercentages[skillName];
            progressBar.setAttribute('data-width', pct + '%');
        }

        progressBar.style.width = '0%';
        if (pctEl) pctEl.textContent = '0%';
    });
}

// ===== COMPÉTENCES : animation au scroll =====
function setupSkillsAnimation() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.skill-item').forEach(item => {
                    const bar = item.querySelector('.progress');
                    const pctEl = item.querySelector('.skill-percent');
                    bar.style.transition = 'none';
                    bar.style.width = '0%';
                    if (pctEl) pctEl.textContent = '0%';
                });

                setTimeout(() => {
                    document.querySelectorAll('.skill-item').forEach((item, i) => {
                        setTimeout(() => {
                            const bar = item.querySelector('.progress');
                            const pctEl = item.querySelector('.skill-percent');
                            const target = parseInt(bar.getAttribute('data-width'));

                            bar.style.transition = 'width 3s cubic-bezier(0.1, 0.5, 0.2, 1)';
                            bar.style.width = target + '%';

                            let current = 0;
                            const duration = 3000;
                            const startTime = performance.now();

                            function tick(now) {
                                const elapsed = now - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                const ease = 1 - Math.pow(1 - progress, 3);
                                current = Math.round(ease * target);
                                if (pctEl) pctEl.textContent = current + '%';
                                if (progress < 1) {
                                    requestAnimationFrame(tick);
                                } else {
                                    if (pctEl) pctEl.textContent = target + '%';
                                }
                            }
                            requestAnimationFrame(tick);

                        }, i * 200);
                    });
                }, 50);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(skillsSection);
}

// ===== NAVIGATION & CONTACT =====
function setupMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    window.toggleMenu = () => navLinks.classList.toggle('active');
    window.closeMenu = () => navLinks.classList.remove('active');
}

function setupActiveNavLink() {
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            if (window.scrollY >= section.offsetTop - 150) current = section.getAttribute('id');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').substring(1) === current);
        });
    });
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const alertBox = document.getElementById('custom-alert') || document.createElement('div');
            alertBox.id = 'custom-alert';
            alertBox.className = 'custom-alert show';
            alertBox.innerHTML = '✅ Message envoyé avec succès !    Merci pour votre prise de contact, je vous répondrai dans les plus brefs délais.';
            if (!document.getElementById('custom-alert')) document.body.appendChild(alertBox);
            form.reset();
            setTimeout(() => alertBox.classList.remove('show'), 3000);
        });
    }
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
                closeMenu();
            }
        });
    });
}

// ===== BARRE NAV STICKY =====
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// ===== BARRE DE PROGRESSION SCROLL =====
function updateScrollProgress() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
    document.querySelector('nav').style.setProperty('--scroll-width', scrolled + '%');
}
window.addEventListener('scroll', updateScrollProgress);

// ===== CURSEUR PERSONNALISÉ =====
(function setupCustomCursor() {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    const ring = document.createElement('div');
    ring.id = 'custom-cursor-ring';
    document.body.appendChild(cursor);
    document.body.appendChild(ring);

    let rx = 0, ry = 0;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
        rx += (e.clientX - rx) * 0.12;
        ry += (e.clientY - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
    });

    function animateRing() {
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
        requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    document.addEventListener('mousedown', () => {
        cursor.classList.add('clicked');
        ring.classList.add('clicked');
    });
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('clicked');
        ring.classList.remove('clicked');
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        ring.style.opacity = '0.5';
    });
    cursor.style.zIndex = '99999999';
    ring.style.zIndex   = '99999998';
})();

// ===== SCROLL TO TOP =====
(function setupScrollTop() {
    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.title = 'Retour en haut';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// ===== REVEAL AU SCROLL =====
(function setupReveal() {
    const targets = [
        '.service-card',
        '.skills-category',
        '.achievement-card',
        '.contact-info',
        '.contact-form',
        '.project-overview',
        '.highlight-item',
        '.section-title'
    ];

    targets.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.classList.add('reveal');
            el.style.transitionDelay = (i * 0.08) + 's';
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// ===== TILT 3D SUR LES CARTES SERVICES =====
(function setupTilt() {
    document.querySelectorAll('.service-card').forEach(card => {
        const shine = document.createElement('div');
        shine.className = 'card-shine';
        card.style.position = 'relative';
        card.appendChild(shine);

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotX = ((y - cy) / cy) * 8;
            const rotY = ((x - cx) / cx) * -8;

            card.style.transform = `translateY(-10px) scale(1.02) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
            shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, transparent 70%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            shine.style.background = '';
        });
    });
})();

// ===== EFFET TYPING SUR LA PROFESSION =====
(function setupTyping() {
    const professionEl = document.querySelector('.profession');
    if (!professionEl) return;

    const originalText = professionEl.textContent.trim();
    const texts = [
        originalText,
        'Analyste SIG',
        'Développeuse Web',
        'Cartographe'
    ];

    professionEl.classList.add('typed-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = texts[textIndex];

        if (!isDeleting) {
            professionEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                setTimeout(() => { isDeleting = true; type(); }, 2000);
                return;
            }
        } else {
            professionEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }

        const speed = isDeleting ? 40 : 80;
        setTimeout(type, speed);
    }

    setTimeout(type, 1200);
})();

// ===== COMPTEURS ANIMÉS DANS LE HERO (MODIFIÉ) =====


// ==== SUPPRESSION DE LA FONCTION FOOTER STATS ====
// J'ai enlevé l'ancienne fonction setupFooterStats() pour nettoyer le footer.

// ===== PARTICULES EN FORME DE CŒUR SUR TOUT LE PORTFOLIO (MODIFIÉ) =====
(function setupGlobalHeartParticles() {

    // Fonction cœur — tracé paramétrique fiable
    function drawHeart(ctx, cx, cy, size, color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        // Taille réduite par 2 (0.055 -> 0.027)
        const s = size * 0.027;
        for (let i = 0; i <= 60; i++) {
            const t = (i / 60) * 2 * Math.PI;
            const x = cx + s * 16 * Math.pow(Math.sin(t), 3);
            const y = cy - s * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    const canvas = document.createElement('canvas');
    canvas.id = 'global-hearts-canvas';
    canvas.style.position  = 'fixed';
    canvas.style.top       = '0';
    canvas.style.left      = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex    = '0';
    document.body.appendChild(canvas);

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width  = window.innerWidth  + 'px';
        canvas.style.height = window.innerHeight + 'px';
    }

    const ctx = canvas.getContext('2d');
    const COUNT = 40;
    let particles = [];

    function getColors() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        return isDark
            ? ['rgba(255,107,107,ALPHA)', 'rgba(78,205,196,ALPHA)', 'rgba(139,158,255,ALPHA)', 'rgba(255,180,180,ALPHA)']
            : ['rgba(102,126,234,ALPHA)', 'rgba(118,75,162,ALPHA)', 'rgba(167,139,250,ALPHA)', 'rgba(199,100,220,ALPHA)'];
    }

    resize();
    window.addEventListener('resize', () => { resize(); initParticles(); });

    function initParticles() {
        particles = [];
        const colorTemplates = getColors();
        for (let i = 0; i < COUNT; i++) {
            // Opacité réduite par 2 pour plus de discrétion (0.09-0.27 -> 0.04-0.14)
            const alpha = (Math.random() * 0.10 + 0.04).toFixed(2);
            const template = colorTemplates[Math.floor(Math.random() * colorTemplates.length)];
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                // Taille de base déjà réduite dans drawHeart, on garde la même logique
                size: Math.random() * 14 + 8,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                color: template.replace('ALPHA', alpha),
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.008
            });
        }
    }

    function getLineColor() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        // Opacité des lignes réduite aussi pour suivre les cœurs (0.08 -> 0.04)
        return isDark ? 'rgba(139, 158, 255, 0.04)' : 'rgba(102, 126, 234, 0.04)';
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Lignes fines entre cœurs proches
        const lineColor = getLineColor();
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    ctx.beginPath();
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Dessine chaque cœur
        particles.forEach(p => {
            p.pulse += p.pulseSpeed;
            const pulsedSize = p.size * (1 + Math.sin(p.pulse) * 0.12);
            drawHeart(ctx, p.x, p.y, pulsedSize, p.color);

            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -30) p.x = canvas.width + 30;
            if (p.x > canvas.width + 30) p.x = -30;
            if (p.y < -30) p.y = canvas.height + 30;
            if (p.y > canvas.height + 30) p.y = -30;
        });

        requestAnimationFrame(draw);
    }

    initParticles();
    draw();

    document.getElementById('themeToggle')?.addEventListener('change', () => {
        const colorTemplates = getColors();
        particles.forEach(p => {
            // Opacité réduite maintenue lors du changement de thème
            const alpha = (Math.random() * 0.10 + 0.04).toFixed(2);
            const template = colorTemplates[Math.floor(Math.random() * colorTemplates.length)];
            p.color = template.replace('ALPHA', alpha);
        });
    });
})();

// ===== COMPTEURS ANIMÉS DU FOOTER =====
(function setupFooterCounters() {
    function animateCounter(el, target, suffix) {
        const duration = 4000;
        const startTime = performance.now();

        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(ease * target);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
        }
        requestAnimationFrame(tick);
    }

    let isAnimating = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isAnimating) {
                isAnimating = true;
                document.querySelectorAll('.stat-digit').forEach(el => {
                    const raw = el.getAttribute('data-target') || el.textContent.trim();
                    el.setAttribute('data-target', raw);
                    const suffix = raw.replace(/[0-9]/g, '');
                    const target = parseInt(raw);
                    if (!isNaN(target)) animateCounter(el, target, suffix);
                });
                setTimeout(() => { isAnimating = false; }, 4200);
            }
        });
    }, { threshold: 0.3 });

    const footer = document.querySelector('.main-footer');
    if (footer) observer.observe(footer);
})();
