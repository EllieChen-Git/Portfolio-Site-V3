let portfolioData = {
  name: "Ellie Chen",
  intro:
    "I'm a Full Stack Developer who enjoys the process of breaking down frontend components. I have an inquisitive mind and enjoy turning challenges into adventures. I'm passionate about coding and helping others to achieve their goals in life!",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elliettchen/",
      className: "fa fa-linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/EllieChen-Git",
      className: "fa fa-github"
    },
    {
      name: "Medium",
      url: "https://medium.com/els-coding-journey",
      className: "fa fa-medium"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/elliechen_etc",
      className: "fa fa-twitter"
    },
    {
      name: "Resume",
      url: "./Ellie_Chen_Resume_Web_Developer.pdf",
      className: "fa fa-file"
    },
    {
      name: "Email",
      url: "mailto:ellie.tt.chen@gmail.com",
      className: "fa fa-envelope"
    }
  ],
  aboutMe:
    "I am a recent graduate of Coder Academy's full-stack web development bootcamp. During my time with CA, I completed 3 projects using different tech stacks (Ruby on Rails, PostgreSQL, JavaScript, MERN stack, Bootstrap and Git collaboration). At my internship with Skychute, I gained valuable commercial production experience and successfully implemented full stack components with my newly acquired skills in TypeScript, Angular and GraphQL. I'm looking forward to starting my career as a web developer.",
  location: "Sydney, NSW, Australia",
  education: [
    {
      universityName: "Coder Academy Full-stack Web Development Bootcamp",
      degreeName: "Diploma in Information Technology",
      monthStarted: "Aug",
      yearStarted: "2019",
      monthCompleted: "Feb",
      yearCompleted: "2020",
      grade: "GPA Pending"
    },
    {
      universityName: "The Australian National University",
      degreeName: "Graduate Certificate in Migration Law and Practice",
      monthStarted: "May",
      yearStarted: "2017",
      monthCompleted: "Nov",
      yearCompleted: "2017",
      grade: "High Distinction Average"
    },
    {
      universityName: "Victoria University ",
      degreeName: "Graduate Diploma in Professional Accounting",
      monthStarted: "Jul",
      yearStarted: "2015",
      monthCompleted: "Apr",
      yearCompleted: "2016",
      grade: "High Distinction Average"
    }
  ],
  work: [
    {
      companyName: "Muses Code Js",
      positionName: "JavaScript Mentor (Volunteer)",
      monthStarted: "Mar",
      yearStarted: "2020",
      monthCompleted: "",
      yearCompleted: "Now",
      positionDescription:
        "Muses Code JS runs JavaScript and Node.js workshops for women, non-binary and trans folks around Australia. I am a mentor of their 'Introduction to JavaScript Workshop' in Sydney and remotely. It is such a great opportunity for me to meet like-minded people, catch up with familiar faces, and help participants to learn coding and JavaScript. I am very proud of being an active member of the JavaScript community to support gender diversity and encourage life-long learning.",
      link:
        "https://medium.com/els-coding-journey/meetup-first-mentoring-experience-with-muses-code-js-07-mar-2020-b0307d24b4d4"
    },
    {
      companyName: "Skychute",
      positionName: "Web Developer Intern",
      monthStarted: "Feb",
      yearStarted: "2020",
      monthCompleted: "Mar",
      yearCompleted: "2020",
      positionDescription:
        "Skychute aims at developing property-related products to enhance people's everyday experience with real estate using the latest Angular technology. During my internship, I translated business requirements to efficient frontend and backend application code in TypeScript, Angular, Material UI, GraphQL and Hasura, and ensured the technical feasibility of UI/UX design. I also actively participated in their Agile sprint planning, engineer handover/reviews and weekly demo sessions.",
      link:
        "https://medium.com/els-coding-journey/full-stack-internship-skychute-17-feb-to-13-mar-2020-1d8b683fdc79"
    },
    {
      companyName: "Chartered Accountants Australia & New Zealand",
      positionName: "Migration Executive",
      monthStarted: "Aug",
      yearStarted: "2016",
      monthCompleted: "Aug",
      yearCompleted: "2019",
      positionDescription:
        "Before switching my career to web development, I was a senior assessor at CAANZ, an accounting professional body authorised by the Australian government to conduct accounting migration assessment. I processed complex migration assessment with high attention to details and mentored junior assessors. My proven time-management skills also helped me succeed in prioritising tasks and handling high volumes of applications.",
      link:
        "https://www.charteredaccountantsanz.com/about-us/migration-assessment"
    }
  ],
  skills: [
    {
      skillsDescription: "Programming Languages",
      skillName: "Ruby, JavaScript, TypeScript"
    },
    {
      skillsDescription: "Front End Stacks",
      skillName: "HTML5, CSS3, SCSS, React, Angular, Bootstrap, Material UI"
    },
    {
      skillsDescription: "Back End Stacks",
      skillName: "Ruby on Rails,  MongoDB, Express,Node, REST API, PostgreSQL"
    },
    {
      skillsDescription: "Dependencies",
      skillName:
        "Git, GitHub, Agile Methodology, AWS S3, deployment (Heroku, Netlify), payment processing (Stripe), wireframe (Balsamiq)"
    }
  ],
  projects: [
    {
      name: "Portfolio Website - Ellie Chen",
      description: "React | Responsive Web Design",
      imgUrl: "../images/projects/portfolio-site-v3.JPG",
      source: "https://github.com/EllieChen-Git/Portfolio-Site-V3",
      site: "https://elliechen-react.netlify.app/"
    },
    {
      name: "Pricing Portal - Image Annotation Tool",
      description: "MERN Stack | Full Stack Business Solution",
      imgUrl: "../images/projects/pricing-portal.JPG",
      source: "https://github.com/EllieChen-Git/frontend-pricing-portal-ERN",
      site:
        "http://pricing-portal-prod-ern.s3-website-ap-southeast-2.amazonaws.com/"
    },
    {
      name: "Aussie Beauty Market - E-commerce App",
      description: "Ruby on Rails | Two-sided Makeup Marketplace",
      imgUrl: "../images/projects/aussie-beauty-market.png",
      source: "https://github.com/EllieChen-Git/Aussie-Beauty-Market",
      site: "https://aussie-beauty-market.herokuapp.com/"
    },
    {
      name: "COVID-19 Statistics & Data Visualisation",
      description: "React Hooks, Context, Error Boundary | API consumption",
      imgUrl: "../images/projects/covid-19-stats.png",
      source: "https://github.com/EllieChen-Git/React-COVID-19-Stats",
      site: "https://covid-19-stats-aus-tw.netlify.app/"
    }
  ]
};

export default portfolioData;
