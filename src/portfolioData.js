let portfolioData = {
  name: 'Ellie Chen',
  intro:
    "I am a Full Stack Developer who enjoy the process of breaking down frontend compoments! I have an inquisitive mind and enjoy turning challenges into adventures! I'm passionate about coding and helping others to achieve their goals in life!",
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/elliettchen/',
      className: 'fa fa-linkedin'
    },
    {
      name: 'github',
      url: 'https://github.com/EllieChen-Git',
      className: 'fa fa-github'
    },
    {
      name: 'resume',
      url: './Ellie Chen - Resume.pdf',
      className: 'fa fa-file'
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/elliechen_etc',
      className: 'fa fa-twitter'
    },
    {
      name: 'medium',
      url: 'https://medium.com/@elliechen.etc',
      className: 'fa fa-medium'
    }
  ],
  aboutme:
    "I am a recent graduate from Coder Academy (CA) Bootcamp. During my time with CA, I completed 3 projects using different tech stacks (Ruby on Rails, Postgres SQL, JavaScript, MERN stack, Bootstrap and Git collaboration). At my internship with Skychute, I gained valuable commercial production experience and  successfully implemented full stack components with my newly acquired skills in TypeScript, Angular, GraphQL and Material UI. I'm looking forward to starting my career as a web developer.",
  location: 'Sydney, NSW, AUSTRALIA',
  education: [
    {
      universityName: 'Coder Academy Full Stack Bootcamp  (Web Development)',
      degreeName: 'Diploma in Information Technology',
      monthOfStarted: 'Aug',
      yearOfStarted: '2019',
      monthOfCompleted: 'Feb',
      yearOfCompleted: '2020',
      GPA: 'GPA Pending'
    },
    {
      universityName: 'The Australian National University',
      degreeName: 'Graduate Certificate in Migration Law and Practice',
      monthOfStarted: 'May',
      yearOfStarted: '2017',
      monthOfCompleted: 'Nov',
      yearOfCompleted: '2017',
      GPA: 'High Distinction Average'
    },
    {
      universityName: 'Victoria University ',
      degreeName: 'Graduate Diploma in Professional Accounting',
      monthOfStarted: 'Jul',
      yearOfStarted: '2015',
      monthOfCompleted: 'Apr',
      yearOfCompleted: '2016',
      GPA: 'High Distinction Average'
    }
  ],
  work: [
    {
      companyName: 'Skychute',
      postionName: 'Web Developer',
      monthOfStarted: 'Feb',
      yearOfStarted: '2020',
      monthOfCompleted: 'Mar',
      yearOfCompleted: '2020',
      positionDescription: `
      1. Developing property-related products to enhance people's everyday experience with real estate.
      2. Implementing full-stack components using TypeScript, Angular, Material UI, GraphQL and Hasura.
      3. Participating in Agile sprint planning, weekly demo sessions and tech meetups.
      `
    },
    {
      companyName: 'Chartered Accountants Australia & New Zealand',
      postionName: 'Migration Executive',
      monthOfStarted: 'Aug',
      yearOfStarted: '2016',
      monthOfCompleted: 'Aug',
      yearOfCompleted: '2019',
      positionDescription: `
      1.	Conducting migration assessment with high attention to details and producing training materials.
      2.	Interpreting the latest legislation changes and advising on difficult migration assessment issues.
      3.	Proven time-management skills in handling high volumes of applications, prioritising tasks and working autonomously and cooperatively in a high-performing professional team.
      `
    }
  ],
  skills: [
    {
      skillsDescription: 'Programming Languages',
      skillname: 'Ruby, JavaScript, TypeScript'
    },
    {
      skillsDescription: 'Front End',
      skillname: 'HTML5, CSS3, SCSS, React, Angular, Bootstrap, Material UI'
    },
    {
      skillsDescription: 'Back End',
      skillname:
        'Ruby on Rails, Express.js, MongoDB, Node.js, REST API, Postgres SQL, Hasura'
    },
    {
      skillsDescription: 'Dependencies',
      skillname:
        'Git, GitHub, AWS (S3, IAM), deployment (Heroku, Netlify), payment processing (Stripe), wireframe (Balsamiq)'
    }
  ],
  projects: [
    {
      name: 'Portfolio Site Ver 3.0',
      description: 'Portfolio built on React',
      imgurl: '../images/projects/portfolio-site-v3.JPG',
      source: 'https://github.com/EllieChen-Git/Portfolio-Site-V3',
      site: '#'
    },
    {
      name: 'Pricing Portal',
      description: 'Full MERN stack business solution',
      imgurl: '../images/projects/pricing-portal.JPG',
      source: 'https://github.com/EllieChen-Git/frontend-pricing-portal-ERN',
      site:
        'http://pricing-portal-prod-ern.s3-website-ap-southeast-2.amazonaws.com/'
    },
    {
      name: 'Aussie Beauty Market',
      description: 'Two-sided makeup marketplace on Ruby on Rails',
      imgurl: '../images/projects/aussie-beauty-market.png',
      source: 'https://github.com/EllieChen-Git/Aussie-Beauty-Market',
      site: 'https://aussie-beauty-market.herokuapp.com/'
    },

    {
      name: 'Portfolio Site Ver 1.0',
      description: 'Portfolio built on HTML5 & CSS3',
      imgurl: '../images/projects/portfolio-site-v1.JPG',
      source: 'https://github.com/EllieChen-Git/Portfolio-Site_Ellie-Chen',
      site: 'https://elliechen.netlify.com/'
    }
  ]
};

export default portfolioData;
