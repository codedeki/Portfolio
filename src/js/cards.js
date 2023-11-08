/* 
  To future-proof our code and keep the html clean, 
  all project cards are injected into the html via this file AFTER the DOM has loaded.
*/

const productionCards = [
  {
    title: "Node JS Web App",
    skills: "NodeJS, JavaScript, CSS, SQL",
    description: `Built by myself in 2023 for my startup company, I created everything from the initial site
    designs using wireframes, the html markup and css, graphic designs, backend APIs and SQL database and Linux server
    configurations. In this role as a full-stack developer, I demonstrated virtually every skill a developer
    could possess on the font-end and back-end. &#128079; Nevertheless, since I worked alone there was no
    team collaboration. However, I've always been easy to work with and I expect to learn team collaboration with
    git within a matter of hours, so I don't sweat it. &#129488;`,
    link: "https://www.dekiedits.com/",
    linkText: "www.dekiedits.com",},
  {
    title: "iOS Language App",
    skills: "Swift, Xcode, iOS, SQLite",
    description: `Built by myself in 2022 as I enjoy learning languages in my spare time, this app is comparable
    to Duolingo or Busuu. The app is fully functional and can be published any time, but I need to add lessons. Turns out it takes a long time to intelligently design large lesson plans for foreign language teaching. This was my first dive into development by myself and I admittedly made some errors in the project execution that I won't let happen again. I learned it's much easier to build a user-generated-content type of app as educational apps are double or even triple the work, especially when attempting to build them alone. I'll come back to this app soon to finish up the lesson plans. &#129335;<button id="ios-app-btn" class="overlay-btn">View App Demo</button>`,
    noLinkCustomText: "Release date TBD",
  },
]

const experienceCards = [
  {
    title: "Mastering NodeJS App",
    skills: "NodeJS, Express, MongoDB",
    description: `By coding along to a structured online course to create a complete web app, I practiced my skills in Node JS, Express, REST APIs, JSON Web Tokens, Git and Github, MongoDB, Mongoose, PUG Templates, Prettier, ESLint, sending transaction emails, payments with Stripe and more using MVC (Model-View-Controller) architecture.`,
    link: "https://github.com/codedeki/Adventure-Tours-App-Back-End",
    linkText: "View Code",
    extraTitle: "Course Length: 42 hours"
  },
  {
    title: "Social Network App",
    skills: "NodeJS, Express, MongoDB",
    description: `By following an online tutorial for full-stack development, I practiced my understanding of Node JS,
    Express, MongoDB, EJS Templates, JSON Web Tokens, Cookies, Webpack, Axios, MVC architecture, CRUD (Create, Read, Update, Delete) architecture for API development, socket.io messaging to create a live public chatroom and more!.`,
    link: "https://github.com/codedeki/social-network-app",
    linkText: "View Code",
    extraTitle: "Course Length: 28.5 hours"
  },
  {
    title: "CSS Mastery Course",
    skills: "CSS, SASS, HTML",
    description: `By completing a CSS course dedicated to creating web pages for the front-end, I practiced flexbox, CSS, Grid, responsive design and more. I utilized SASS (Syntactically Awesome Style Sheets - CSS Compiler) with new CSS features: Keyframes & Animations, Mixins, Responsive Media Queries, Variables, Browser Supports/Prefixes and Pop-ups using CSS alone!`,
    link: "https://github.com/codedeki/Adventure-Tours-App-Front-End",
    linkText: "View Code",
    extraTitle: "Course Length: 28 hours"
  },
  {
    title: "React Social Network App",
    skills: "React, JavaScript, CSS",
    description: `I followed a tutorial to build a practice React app using Hooks and Context with social network functionality including messaging, adding friends, deleting friends and following users.`,
    link: "https://github.com/codedeki/React-social-network-app",
    linkText: "View Code",
    extraTitle: "Course Length: 13 hours"
  },
  {
    title: "React AirBnB Clone",
    skills: "React, JavaScript, CSS",
    description: `I followed a tutorial to build a practice AirBnB app using Redux, Suspense and Stripe payments. `,
    link: "https://github.com/codedeki/Airbnb-Clone",
    linkText: "View Code",
    extraTitle: "Course Length: 13 hours"
  },
  {
    title: "Travel Website",
    skills: "JavaScript, Github, HTML",
    description: `I practiced Git and Github by following a tutorial to build a travel website with JavaScript. `,
    link: "https://github.com/codedeki/travel-site",
    linkText: "View Code",
    extraTitle: "Course Length: 16 hours"
  },
  {
    title: "Facebook Clone",
    skills: "PHP, MySQL, JavaScript",
    description: `I followed a tutoral to build a generic clone of the social media website, Facebook. I used MySQL and PHP for the back-end so I am quite familiar with PHP although I rarely use it these days, except on the web server on occasion.`,
    link: "https://github.com/codedeki/Facebook-clone",
    linkText: "View Code",
    extraTitle: "Course Length: 17 hours"
  },
  {
    title: "Spotify Clone",
    skills: "PHP, CSS, JavaScript",
    description: `I followed a tutoral to build a mini clone of the music website, Spotify. I used MySQL and PHP.  I am quite familiar with PHP although I rarely use it these days, except on the web server on occasion.`,
    link: "https://github.com/codedeki/Spotify-clone",
    linkText: "View Code",
    extraTitle: "Course Length: 15 hours"
  },
  {
    title: "YouTube Clone",
    skills: "PHP, CSS, JavaScript",
    description: `I followed a tutoral to build a mini clone of the file sharing website, YouTube. I used MySQL and PHP.  I am quite familiar with PHP although I rarely use it these days, except on the web server on occasion.`,
    link: "https://github.com/codedeki/YouTube-clone",
    linkText: "View Code",
    extraTitle: "Course Length: 18.5 hours"
  },
  {
    title: "Netflix Clone",
    skills: "PHP, CSS, JavaScript",
    description: `I followed a tutoral to build a mini clone of the video streaming website, Netflix. I used MySQL and PHP.  I am quite familiar with PHP although I rarely use it these days, except on the web server on occasion.`,
    link: "https://github.com/codedeki/Netflix-clone",
    linkText: "View Code",
    extraTitle: "Course Length: 11.5 hours"
  },
];

function createCardHtml(
  title,
  skills,
  description,
  linkPath = null,
  linkText = null,
  noLinkCustomText = null,
  extraTitle = null
) {
  return `
  <div class="card">
    <div class="card-overview">
      <p>${title}</p>
      <p>Top Skills: <span class="skills">${skills}</span></p>
      <button class="card-details-btn">Show Details</button>
    </div>
    <div class="card-details">
      <p ${noLinkCustomText ? `class="underline"` : ""}>
      ${
        linkPath
          ? `<a target="_blank" href="${linkPath}">${linkText}</a>`
          : noLinkCustomText
          ? noLinkCustomText
          : ""
      }
      </p>
      ${extraTitle ? `<p class="extra-title">${extraTitle}</p>` : ""}
      <p>
        ${description}
      </p>
    </div>
  </div>`;
}

function createProjectCards() {
  const productionSection = document.getElementById("production");
  const experienceSection = document.getElementById("experience");

  if (productionSection) {
    for (const card of productionCards) {
      productionSection.insertAdjacentHTML(
        "beforeend",
        createCardHtml(
          card.title,
          card.skills,
          card.description,
          card.link,
          card.linkText,
          card.noLinkCustomText,
          card.extraTitle
        )
      );
    }
  }

  if (experienceSection) {
    for (const card of experienceCards) {
      experienceSection.insertAdjacentHTML(
        "beforeend",
        createCardHtml(
          card.title,
          card.skills,
          card.description,
          card.link,
          card.linkText,
          card.noLinkCustomText,
          card.extraTitle
        )
      );
    }
  }
}

function toggleProjectCards() {
  const cardBtns = document.querySelectorAll(".card-details-btn");

  if (cardBtns) {
    cardBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        const cardDetails = document.querySelectorAll(".card-details");
        if (cardDetails) {
          cardDetails[index].classList.toggle("card-details-active");

          const isDetailsActive = cardDetails[index].classList.contains(
            "card-details-active"
          );
          isDetailsActive
            ? (btn.textContent = "Hide Details")
            : (btn.textContent = "Show Details");
        }
      });
    });
  }
}

function addVideoTagOnOverlay(path, comment = null) {
  const overlayContent = document.getElementById("overlay-content");
  const videoMarkup = `<video id="video" class="video" controls autoplay muted controlsList="nodownload"><source src="${path}" type="video/mp4"></video>`;
  const videoTag = document.getElementById("video");

  if (!videoTag) {
    if (overlayContent) {
      overlayContent.insertAdjacentHTML("beforeend", videoMarkup);
      if (comment) {
        let commentMarkup = `<p class="video-comment">${comment}</p>`;
        overlayContent.insertAdjacentHTML("beforeend", commentMarkup);
      }

      const videoTags = document.querySelectorAll(".video");
      
      if (videoTags) {
        videoTags.forEach(tag => {
          preventVideoDownload(tag);
        })
      }
    }
  }
}

function preventVideoDownload(element) {
  element.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    return false;
  }) 
  element.addEventListener("focus", () => {
    element.setAttribute("controlsList", "nodownload");
  })
}

function configureVideoTags() {
  //add more buttons to add more videos
  const iosAppBtn = document.getElementById("ios-app-btn");

  if (iosAppBtn) {
    iosAppBtn.addEventListener("click", () => {
      addVideoTagOnOverlay(
        "src/assets/video/ios_app.mp4",
        "Note: There's more to this app than meets the eye. I'm only showing the bare minimum that is common to most language apps on the market as I don't want to give away trade secrets before the release date. There are far more features, which is why the app took a long time to code. Also, I was less skilled in 2021 so coding took longer. On a side note, Swift is the most elegant programming language I've ever used, and I've dabbled in C, Kotlin, PHP, Python and a few others. Python is probably more beginner friendly though, but not by a huge margin. JavaScript is the versatile Honda; Swift is the luxury Rolls Royce. &#128526 "
      );
    });
  }
}

function configureOverlayButtons() {
  const overlay = document.getElementById("overlay");
  const overlayContent = document.getElementById("overlay-content");
  const overlayBtns = document.querySelectorAll(".overlay-btn");

  if (overlay) {
    const closeBtn = document.getElementById("close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        overlay.classList.remove("overlay-active");
        const currentVideo = document.getElementById("video");
        if (overlayContent && currentVideo) {
          overlayContent.innerHTML = "";
        }
      });
    }
    if (overlayBtns) {
      overlayBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          overlay.classList.toggle("overlay-active");
        });
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createProjectCards();
  toggleProjectCards();
  configureVideoTags();
  configureOverlayButtons();
});
