let portfolioData = {
  name: 'Ellie Chen',
  intro:
    "I'm a Full Stack Developer who enjoys the process of breaking down frontend components! I have an inquisitive mind and enjoy turning challenges into adventures! I'm passionate about coding and helping others to achieve their goals in life!",
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/elliettchen/',
      className: 'fa fa-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/EllieChen-Git',
      className: 'fa fa-github'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@elliechen.etc',
      className: 'fa fa-medium'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/elliechen_etc',
      className: 'fa fa-twitter'
    },
    {
      name: 'Resume',
      url: './Ellie Chen - Resume.pdf',
      className: 'fa fa-file'
    },
    {
      name: 'Email',
      url: 'mailto:ellie.tt.chen@gmail.com',
      className: 'fa fa-envelope'
    }
  ],
  aboutMe:
    "I'm a recent graduate from Coder Academy's web development bootcamp. During my time with CA, I completed 3 projects using different tech stacks (Ruby on Rails, PostgreSQL, JavaScript, MERN stack, Bootstrap and Git collaboration). At my internship with Skychute, I gained valuable commercial production experience and  successfully implemented full stack components with my newly acquired skills in TypeScript, Angular and GraphQL. I'm looking forward to starting my career as a web developer.",
  location: 'Sydney, NSW, AUSTRALIA',
  education: [
    {
      universityName: 'Coder Academy Full Stack Bootcamp  (Web Development)',
      degreeName: 'Diploma in Information Technology',
      monthStarted: 'Aug',
      yearStarted: '2019',
      monthCompleted: 'Feb',
      yearCompleted: '2020',
      grade: 'GPA Pending'
    },
    {
      universityName: 'The Australian National University',
      degreeName: 'Graduate Certificate in Migration Law and Practice',
      monthStarted: 'May',
      yearStarted: '2017',
      monthCompleted: 'Nov',
      yearCompleted: '2017',
      grade: 'High Distinction Average'
    },
    {
      universityName: 'Victoria University ',
      degreeName: 'Graduate Diploma in Professional Accounting',
      monthStarted: 'Jul',
      yearStarted: '2015',
      monthCompleted: 'Apr',
      yearCompleted: '2016',
      grade: 'High Distinction Average'
    }
  ],
  work: [
    {
      companyName: 'Skychute',
      positionName: 'Web Developer',
      monthStarted: 'Feb',
      yearStarted: '2020',
      monthCompleted: 'Mar',
      yearCompleted: '2020',
      positionDescription:
        "Skychute aims at developing property-related products to enhance people's everyday experience with real estate using the latest technology. During my internship, I successfully implemented several full-stack components using TypeScript, Angular, Material UI, GraphQL and Hasura. I also actively participated in Agile sprint planning, weekly demo sessions and tech meetups."
    },
    {
      companyName: 'Chartered Accountants Australia & New Zealand',
      positionName: 'Migration Executive',
      monthStarted: 'Aug',
      yearStarted: '2016',
      monthCompleted: 'Aug',
      yearCompleted: '2019',
      positionDescription:
        'Before switching my career to web development, I was a senior assessor at CAANZ, authorised by the Australian government to conduct accounting migration assessment. I processed complex migration assessment with high attention to details and mentored junior assessors. My proven time-management skills also helped me succeed in handling high volumes of applications.'
    }
  ],
  skills: [
    {
      skillsDescription: 'Programming Languages',
      skillName: 'Ruby, JavaScript, TypeScript'
    },
    {
      skillsDescription: 'Front End',
      skillName: 'HTML5, CSS3, SCSS, React, Angular, Bootstrap, Material UI'
    },
    {
      skillsDescription: 'Back End',
      skillName:
        'Ruby on Rails, Express.js, MongoDB, Node.js, REST API, PostgreSQL, Hasura'
    },
    {
      skillsDescription: 'Dependencies',
      skillName:
        'Git, GitHub, AWS (S3, IAM), deployment (Heroku, Netlify), payment processing (Stripe), wireframe (Balsamiq)'
    }
  ],
  projects: [
    {
      name: 'Portfolio Site Ver 3.0',
      description: `React|Responsive Web Design`,
      imgUrl: '../images/projects/portfolio-site-v3.JPG',
      source: 'https://github.com/EllieChen-Git/Portfolio-Site-V3',
      site: 'https://elliechen-react.netlify.com/'
    },
    {
      name: 'Pricing Portal',
      description: 'MERN Stack|Full Stack Business Solution',
      imgUrl: '../images/projects/pricing-portal.JPG',
      source: 'https://github.com/EllieChen-Git/frontend-pricing-portal-ERN',
      site:
        'http://pricing-portal-prod-ern.s3-website-ap-southeast-2.amazonaws.com/'
    },
    {
      name: 'Aussie Beauty Market',
      description: 'Ruby on Rails|Two-sided Makeup Marketplace',
      imgUrl: '../images/projects/aussie-beauty-market.png',
      source: 'https://github.com/EllieChen-Git/Aussie-Beauty-Market',
      site: 'https://aussie-beauty-market.herokuapp.com/'
    },
    {
      name: 'Portfolio Site Ver 1.0',
      description: 'HTML5|CSS3',
      imgUrl: '../images/projects/portfolio-site-v1.JPG',
      source: 'https://github.com/EllieChen-Git/Portfolio-Site_Ellie-Chen',
      site: 'https://elliechen.netlify.com/'
    }
  ]
};

export default portfolioData;
