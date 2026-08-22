const projects = [
  { number: '01', title: 'Pixelnode', type: 'Digital Platform', description: 'A modern digital platform designed around simplicity, performance and user experience.', details: ['Brand concept', 'Website structure', 'User experience', 'Visual design'], tags: ['Design', 'Technology', 'UX'] },
  { number: '02', title: 'Nexa Automation', type: 'Business Automation', description: 'A fictional automation concept designed to help small businesses reduce repetitive administrative work.', details: ['Product concept', 'User flow', 'Dashboard structure', 'Feature planning'], tags: ['Automation', 'Product', 'Business'] },
  { number: '03', title: 'Urbancore', type: 'Property Management', description: 'A digital property-management concept designed to make maintenance requests and building communication easier.', details: ['Maintenance requests', 'Resident communication', 'Contractor management', 'Issue tracking'], tags: ['Property', 'Operations', 'Digital'] },
  { number: '04', title: 'Personal Finance Dashboard', type: 'Web Application', description: 'A clean financial dashboard designed to help users understand their spending and monthly goals.', details: ['Expense tracking', 'Monthly budgets', 'Spending analytics', 'Financial goals'], tags: ['Finance', 'UI/UX', 'Data'] }
];

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8"/><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>'
};

const projectMarkup = (project) => `
  <article class="project-card reveal" data-category="${project.tags.join(' ')}">
    <div class="project-card__top"><span>${project.number} / ${project.type}</span>${icons.external}</div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-card__bottom">
      <ul>${project.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>
      <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
    </div>
  </article>`;

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="logo" href="#top" aria-label="Raymond Mandongwe home"><span>RM</span><strong>Raymond<br>Mandongwe</strong></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">${icons.menu}<span>Menu</span></button>
    <nav id="main-nav" class="main-nav" aria-label="Main navigation">
      <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
      <a class="nav-status" href="#contact"><i></i> Available for opportunities</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-pad">
      <div class="hero__copy reveal">
        <p class="eyebrow"><span class="eyebrow-dot"></span> Digital creative / Tech / Problem solver</p>
        <h1>I build things<br><em>that actually work.</em></h1>
        <p class="hero__intro">I'm Raymond Mandongwe — a multidisciplinary creator focused on technology, digital experiences and practical problem solving.</p>
        <div class="hero__actions"><a class="button button--lime" href="#projects">Explore my work ${icons.arrow}</a><a class="text-link" href="#contact">Contact me ${icons.arrow}</a></div>
      </div>
      <div class="hero__visual reveal">
        <div class="portrait-frame"><div class="portrait-glow"></div><div class="portrait-monogram">RM</div><span class="portrait-label">Cape Town<br>South Africa</span><span class="portrait-index">01 — 05</span></div>
        <p class="visual-note">From concept<br>to execution <span>↘</span></p>
      </div>
      <div class="scroll-cue"><span>Scroll to explore</span><i></i></div>
    </section>

    <section id="about" class="about section-pad section-rule">
      <div class="section-heading reveal"><span class="section-number">01</span><p class="eyebrow">A little about me</p><h2>More than<br><em>just a CV.</em></h2></div>
      <div class="about__content"><p class="large-copy reveal">I'm a hands-on, curious person who enjoys learning how things work and figuring out how to make them better.</p><p class="body-copy reveal">My experience spans technology, digital projects, customer-facing work and practical problem solving. I enjoy environments where I can take responsibility, learn quickly and work with different people.</p><div class="stats reveal"><div><strong>04<span>+</span></strong><small>Years of experience</small></div><div><strong>12<span>+</span></strong><small>Projects completed</small></div><div><strong>08<span>+</span></strong><small>Skills developed</small></div><div><strong>100<span>%</span></strong><small>Always learning</small></div></div></div>
    </section>

    <section id="skills" class="expertise section-pad section-rule">
      <div class="section-heading reveal"><span class="section-number">02</span><p class="eyebrow">Capabilities</p><h2>What I<br><em>do best.</em></h2></div>
      <div class="expertise-grid">${[['01','Digital & Technology','Creating websites, digital experiences and experimenting with modern technology.'],['02','Problem Solving','Breaking complicated problems into simple, practical solutions.'],['03','Project Execution','Taking an idea from the initial concept through to a finished product.'],['04','Communication','Working effectively with clients, teams and different types of people.'],['05','Business Thinking','Understanding how products and services can create real value.'],['06','Adaptability','Learning new tools and skills quickly when a project requires them.']].map(([number,title,copy]) => `<article class="expertise-item reveal"><span>${number}</span><h3>${title}</h3><p>${copy}</p>${icons.arrow}</article>`).join('')}</div>
    </section>

    <section id="experience" class="experience section-pad section-rule">
      <div class="section-heading reveal"><span class="section-number">03</span><p class="eyebrow">Work history</p><h2>My<br><em>journey.</em></h2></div>
      <div class="timeline">${[['2025 — Present','Digital Operations Assistant','NovaCore Solutions',['Assisted with website and digital projects','Worked with clients and internal teams','Helped identify and solve operational problems']],['2024 — 2025','Project Assistant','UrbanWorks Group',['Assisted project managers','Coordinated with suppliers and contractors','Helped track project progress']],['2023 — 2024','Retail & Customer Experience Assistant','Northpoint Retail',['Customer service','Stock management','Sales support']]].map(([date,title,company,items]) => `<article class="timeline-item reveal"><div class="timeline-date">${date}</div><div class="timeline-line"><i></i></div><div class="timeline-content"><h3>${title}</h3><p class="company">${company}</p><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></div></article>`).join('')}</div>
    </section>

    <section id="projects" class="projects section-pad section-rule">
      <div class="projects-head"><div class="section-heading reveal"><span class="section-number">04</span><p class="eyebrow">Selected work</p><h2>Built with<br><em>purpose.</em></h2></div><div class="filters reveal"><button class="filter is-active" data-filter="all">All work</button><button class="filter" data-filter="Design">Design</button><button class="filter" data-filter="Business">Business</button><button class="filter" data-filter="Digital">Digital</button></div></div>
      <div class="project-grid">${projects.map(projectMarkup).join('')}</div>
    </section>

    <section class="process section-pad section-rule"><div class="section-heading reveal"><span class="section-number">05</span><p class="eyebrow">The approach</p><h2>How I<br><em>work.</em></h2></div><div class="process-list">${[['01','Discover','Understand the problem, the goal and what needs to be achieved.'],['02','Plan','Break the idea into manageable parts and create a clear direction.'],['03','Build','Turn the concept into something functional and usable.'],['04','Refine','Test, improve and remove anything that does not add value.'],['05','Deliver','Create a finished result that is practical, professional and easy to use.']].map(([number,title,copy]) => `<div class="process-step reveal"><span>${number}</span><h3>${title}</h3><p>${copy}</p></div>`).join('')}</div></section>

    <section class="toolkit section-pad section-rule"><div class="toolkit__intro reveal"><p class="eyebrow">The toolkit</p><h2>Always<br><em>in progress.</em></h2></div><div class="tool-columns reveal"><div><h3>Frontend</h3><p>HTML <b>·</b> CSS <b>·</b> JavaScript <b>·</b> React</p></div><div><h3>Design</h3><p>Figma <b>·</b> Canva <b>·</b> Adobe Creative Cloud</p></div><div><h3>Tools</h3><p>Git <b>·</b> GitHub <b>·</b> Notion <b>·</b> VS Code</p></div><div><h3>Currently learning</h3><p>Python <b>·</b> UI/UX Design <b>·</b> AI Tools <b>·</b> Automation</p></div></div></section>

    <section id="contact" class="contact section-pad"><div class="contact__copy reveal"><p class="eyebrow"><span class="eyebrow-dot"></span> Have an idea?</p><h2>Let's build<br><em>something.</em></h2><p>Whether you're interested in working together, discussing a project or simply connecting, I'd love to hear from you.</p><a class="button button--lime" href="mailto:alexmason@email.com">Get in touch ${icons.arrow}</a></div><div class="contact__details reveal"><a href="mailto:alexmason@email.com">alexmason@email.com</a><p>Cape Town, South Africa</p><div class="socials"><a href="#contact">LinkedIn ${icons.external}</a><a href="#contact">GitHub ${icons.external}</a><a href="#contact">Instagram ${icons.external}</a></div></div></section>
  </main>
  <footer class="site-footer section-pad"><a class="logo" href="#top"><span>RM</span><strong>Raymond<br>Mandongwe</strong></a><p>Digital creative <b>·</b> Technology <b>·</b> Problem solving</p><small>© 2026 Raymond Mandongwe<br>Built with curiosity.</small></footer>
`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menuToggle.setAttribute('aria-expanded', open); menuToggle.innerHTML = `${open ? icons.close : icons.menu}<span>${open ? 'Close' : 'Menu'}</span>`; });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.innerHTML = `${icons.menu}<span>Menu</span>`; }));

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(item => item.classList.remove('is-active')); button.classList.add('is-active'); const filter = button.dataset.filter; document.querySelectorAll('.project-card').forEach(card => { card.hidden = filter !== 'all' && !card.dataset.category.includes(filter); }); }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
