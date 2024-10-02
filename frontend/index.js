function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here

    const nav = document.createElement('nav');

    links.forEach(link => {
    const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.setAttribute('title', link.title);
      anchor.textContent = link.textContent;
      nav.appendChild(anchor);
    })

    return nav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here

    const div = document.createElement('div');
    div.classList.add('learner-card');

    const name = document.createElement('p');
    name.textContent = learner.fullName;

    const id = document.createElement('p');
    id.textContent = `Learner ID: ${learner.id}`;

    const birth = document.createElement('p');
    birth.textContent = `Date of Birth: ${learner.dateOfBirth}`;

    const language = languages.find(lang => lang.id === learner.favLanguage);
    const fav = document.createElement('p');
    fav.textContent = `Favorite Language: ${language ? language.name : 'No'}`;

    div.appendChild(name);
    div.appendChild(id);
    div.appendChild(birth);
    div.appendChild(fav);
    document.querySelector('section').appendChild(div);


    div.addEventListener('click', function() {
      const activeCard = document.querySelector('.active');
      if (activeCard) {
        activeCard.classList.remove('active');
      } 
      div.classList.add('active');
    });

    return div;
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here

    learners.forEach(ele => {
      buildLearnerCard(ele, languages);
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here

    const footer = document.createElement('footer');

    const footerDiv = document.createElement('div');
    footerDiv.classList.add('company-info');

    const compName = document.createElement('p');
    compName.classList.add('company-name');
    compName.textContent = footerData.companyName;

    const add = document.createElement('p');
    add.classList.add('address');
    add.textContent = footerData.address;

    const email = document.createElement('p');
    email.classList.add('contact-email');
    email.textContent = 'Email: ';

    const emailLink = document.createElement('a');
    emailLink.textContent = footerData.contactEmail;
    emailLink.href = `mailto:${footerData.contactEmail}`;

    const socialDiv = document.createElement('div');
    socialDiv.classList.add('social-media');

    const twitt = document.createElement('a');
    twitt.href = footerData.socialMedia.twitter;
    twitt.textContent = 'Twitter';

    const face = document.createElement('a');
    face.href = footerData.socialMedia.facebook;
    face.textContent = 'Facebook';

    const insta = document.createElement('a');
    insta.href = footerData.socialMedia.instagram;
    insta.textContent = 'Instagram';

    const bloomDiv = document.createElement('div');
    bloomDiv.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY 2024';

    footer.appendChild(footerDiv);
    footer.appendChild(socialDiv);
    footer.appendChild(bloomDiv);
    footerDiv.appendChild(compName);
    footerDiv.appendChild(add);
    footerDiv.appendChild(email);
    email.appendChild(emailLink);
    socialDiv.appendChild(twitt);
    socialDiv.appendChild(face);
    socialDiv.appendChild(insta);

    return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here

  document.querySelector('section').addEventListener('click', function(event) {
    const opened = document.querySelector('.active');
    if (opened) {
      opened.classList.remove('active');
    }

    if (event.target.closest('.learner-card')) {
      event.target.closest('.learner-card').classList.add('active');
    }
  })

}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
