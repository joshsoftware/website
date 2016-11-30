PROJECTS= [

  {
    id: "get-a-limo",
    title: "Get-a-Limo",
    country: "Singapoor",
    year: "2016",
    url: "http://www.get-a-limo.com.sg",
    image: "get_a_limo.jpg",
    description: "This is a customized voice messaging application to enable communication among limousine and private hire vehicle drivers in Singapore. This application was to be a direct replacement for the conventional walkie talkie, whose built-in limitations are impacting the limo drivers business.",
    technical: {
        comments: "",
        tags: ["Ruby 2.3.0", "Rails 4.2.4", "PostgreSQL", "Sidekiq", "Datatable", "GCM", "Bootstrap for web app", "Material design for android app", "Retrofit", "Picasso android", "AWS-s3", "Native media recorder"]
    },
    case_study: "/portfolio_pdf/GetALimoCaseStudy.pdf",
    display: true
  },
  
  {
    id: "pediatric_network",
    title: "The Pediatric Network",
    country: "India",
    year: "2016",
    url: "http://www.thepediatricnetwork.com",
    image: "pediatric_network.png",
    description: "This portal helps the doctors to shorten the consultation time as well as automate the process right from registering the patient till the prescription of drugs and referring the patient to other doctors if need be.",
    technical: {
        comments: "",
        tags: ["Ruby 2.3.3", "Rails 5.0.0", "PostgreSQL 9.5.3", "Sidekiq", "Elasticsearch 2.3.3", "AngularJS 1.4.9", "Gulp", "NodeJS with NPM", "Bower", "Ionic 1.7.16", "Cordova 6.3.0"]
    },
    case_study: "/portfolio_pdf/ThePediatricNetworkCaseStudy.pdf",
    display: true
  },

  {
    id: "zenith",
    title: "Zenith",
    country: "Australia",
    flag: "au.gif",
    year: "2013",
    url: "http://www.kwikkopy.com.au/zenith-online-print",
    image: "zenith-scaled.png",
    description: "Zenith is printing solutions for kwik kopy clients. Clients can order, preview, update and print Business cards, Posters, Flyers, Files etc.",
    technical: {
        comments: "",
        tags: ["Ruby 2.1.1", "Rails 4.1.0", "PostgreSQL", "ElasticSearch", "nginx + passenger", "AWS-EC2", "Infixserver", "PDFTron"]
    },
    case_study: "/portfolio_pdf/zenith.pdf",
    display: true
  },
  
  {
    id: "we3_health",
    title: "We3Health",
    image: "we3_health.png",
    description: "The journey of We3 health started with the birth of Will to Scott Bolick and Brittany Lothe. Will was born premature in the 24 th week of Brittany’s pregnancy at only 770 grams, and he spent his first five months of life in the ICN (Intensive Care Nursery) also called the NICU (Neonatal Intensive Care Unit). They experienced first-hand the complexities and challenges parents face when they have to see their child fighting for his/her life. Such parents invest all their life into their babies - wishing only to provide good health for
them.",
    technical: {
        comments: "",
        tags: ["Rails 4.2.0", "Ruby 2.2.2", "MongoDB", "Angular 1.5", "Backbone 1.2.1", "Google Chart"]
    },
    case_study: "/portfolio_pdf/We3health_case_study.pdf",
    display: true
  },

  {
    id: "groupbuzz",
    title: "Groupbuzz",
    url: "http://groupbuzz.co.uk",
    image: "group_buzz.jpg",
    description: "GroupBuzz is dedicated to creating an optimum end user experience for group owners and members. To achieve this, the owners wanted to build a portal that meets the demands of groups of all shapes and sizes wanting a professional website to manage their members and member payments.  They also worked towards making GroupBuzz a platform open for different groups where they can plan various meet ups, activities, exchange ideas and manage payments and accounts hassle free, efficiently and fast.",
    technical: {
        comments: "",
        tags: ["Rails 4.2.0", "Ruby 2.1.1", "MySQL", "DelayedJob", "AWS S3", "GoCardless", "PayPal"]
    },
    case_study: "/portfolio_pdf/group_buzz.pdf",
    display: true
  },

  {
    id: "fundamentor",
    title: "Fundamentor",
    country: "India",
    flag: "in.gif",
    year: "2014",
    url: "http://fundamentor.com/",
    image: "fundamentor.png",
    description: "Fundamentor is an innovative web application that enhances life skills and cognitive aptitude among school students using technology, analytics and gamification.<br>Sustainable career success requires Leadership,Collaboration, Problem Solving, Effective Decision Making, Creativity, and Communication . Leadership and collaboration skills grow with experience. Other skills are based on a person’s Quantitative, Verbal, Inference and Creative thinking aptitude. Fundamentor uses a unique proprietary QVIC score model to assess and develop students' aptitude.",
    technical: {
        comments: "",
        tags: ["Rails 4.1.6", "Ruby 2.1.3","MongoDB", "PayUmoney", "Razorpay", "D3.js", "AWS S3", "JW Player"]
    },
    case_study: "/portfolio_pdf/CaseStudyFundamentor.pdf",
    display: true
  },
  {
    id: "mesitis",
    title: "Mesitis Canopy",
    country: "Singapore",
    flag: "Sing.gif",
    year: "2014",
    url: "http://mesitis.com",
    image: "mesitis.png",
    description: "Mesitis is a financial technology company focused on serving the private wealth industry. They provide product by name as Canopy.<br>Canopy is a personal financial data aggregation and visualization platform for high networth individuals.<br>Canopy aggregates and reports your financial data across all of your bank and other financial accounts. It helps you make sense of your whole wealth and aids you to manage your money better.<br>Canopy is the world’s first, and currently the only, automated account aggregation platform that works without data feed from banks. Canopy can aggregate from your PDF statements – what that means is that you have no limit on which bank to include in the aggregation, and you can get started immediately.",
    technical: {
        comments: "",
        tags: ["Rails 4.1.1", "Ruby 2.1.1","PostgreSQL", "AmCharts", "AWS RDS", "Sidekiq", "Redis"]
    },
    display: true
  
  },
  
  {
    id: "kimaya",
    title: "Kimaya NICU",
    country: "India",
    flag: "india.gif",
    year: "2014",
    url: "http://www.kimayanicu.com/",
    image: "kimaya.png",
    description: "In a joint effort with KEM Hospital and Kimaya NICU, a domain specific neonatal healthcare technology provider, neonatal ICUs now have a fully automated online platform to formulate nutritional supplements for premature infants with 100% accuracy and in a fraction of time. Launched on the occasion of World Prematurity Day, this platform has already shown impressive results in its pilot test stage.This cloud-based application allows the records of infants to be accessed easily in the future and from multiple locations. The application archives infant progress on a day-to-day basis, thus allowing doctors to plan the nutrition for each infant. The impact the application can have is huge and a further refined version of the software, based on inputs by medical experts, is ready to give NICUs across the country a cutting edge tool aimed at saving infant lives.",
    technical: {
      comments: "",
      tags: ["Rails 4.1.0", "Ruby 2.1", "MongoDB", "JsonQuery", "Highcharts"]
    },
    display: true
  },

  {
    id: "altizon",
    title: "Altizon Datonis",
    country: "India",
    flag: "india.gif",
    year: "2013",
    url: "http://altizon.com/altizon-datonis-platform/",
    image: "altizon-scaled.png",
    description: "Altizon Datonis platform has the ability for connected devices to stream extremely large amounts of sensor data, securely, in real time. The platform also has the ability to perform real-time analytics on this data and influence decision making. As an example, a supervisor in a manufacturing plant can keep track of the operational efficiency of all the Altizon-connected machines in his plant, in real time and take corrective actions if he is falling behind schedule. Analytics on data gathered directly from his machines would help production planning, execution and maintenance.",
    technical: {
        comments: "",
        tags: ["Rails 4.0.0", "MongoDB", "ElasticSearch", "AWS-EC2"]
    },
    case_study: "/portfolio_pdf/altizon_datonis_case_study.pdf",
    display: true
  },
  
  
  {
    id: "brandscope",
    title: "Brandscope",
    country: "Australia",
    flag: "au.gif",
    year: "2013",
    url: "http://brandscope.com.au",
    image: "brandscope-scaled.png",
    description: "Brandscope Pty. Ltd. is focused on providing a streamline solution and maximizes the selling process for suppliers, retailers and agents in Australian fashion and Action Sports industry. Through this platform a supplier gets immediate access to quality retailers using unique and dynamic online tools to launch their brand with speed and efficiency giving them the competitive edge as well as a retailer gets the desired brands where they can view and buy product for their stores. An agent can reach to a large number of retailers and suppliers across geographies in no time with negligible efforts.The delivered solution features high resolution photography and video, concise product descriptions, buy plans, PDF catalogue automation, live social networking and ratings systems to mimic the traditional “touch n feel” sales process and create a 24/7 on-line showing experience for the Retailer.",
    technical: {
        comments: "",
        tags: ["Ruby 2.1.0", "Rails 4.1.10", "Mongoid 4.0.0","sidekiq 3.3.0", "nginx + passenger", "AWS-EC2", "FTP server"]
    },
    case_study: "/portfolio_pdf/brandscope_case_study.pdf",
    display: true
  },

  {
    id: "educade",
    title: "Educade",
    country: "USA",
    flag: "us.gif",
    year: "2013",
    url: "http://educade.org",
    image: "educade-scaled.png",
    description: "Educade.org is a revolutionary online portal that answers the needs teachers have today and prepares students for success by providing free, ready to use lesson plans paired with engaging learning technologies. Tools include hundreds of apps, games, and hands-on activities with lessons aligned to Next Generation and Common Core standards, making it fast and easy to use. Educade is a platform for change with the mission to build a community around sharing engaging and interactive educational content.",
    technical: {
        comments: "filter.js",
        tags: ["Rails 3.2.12", "MongoDB", "ElasticSearch", "OpenStack", "filter.js"]
    },
    case_study: "/portfolio_pdf/educade_case_study.pdf",
    display: true
  },


  {
    id: "phalcomm",
    title: "Phalcomm",
    country: "India",
    flag: "india.gif",
    year: "2013",
    url: "http://erp.phalcomm.com",
    image: "phalcomm-scaled.png",
    description: "Phalcomm is an E-Commerce Platform which offers online buying of real estate, real time brokerage and generates project specific report. It is used by over 500+ distributor and agents of phalcomm. Software provides real time information of about various bookings in progress across the nation and thus avoid double booking of same property. It also tracks the workflow from booking till allotment of the unit to customer. 
    System is very rich in reports to help ground staff and management as well to take decisions based on the total sale by various distributors, enquiry to sale conversion ratio, demands in the market etc. Reports are also supported by various graphs for better visual understanding and comparison.",
    technical: {
        comments: "",
        tags: ["Ruby 2.0", "Rails 3.2.11", "MongoDB", "Sidekiq", "Redis", "WebSockets", "Control-S"]
    },
    case_study: "/portfolio_pdf/PhalcommCaseStudy.pdf",
    display: true
  },
=begin
  {
    id: "shopgodt",
    title: "Shopgodt",
    country: "USA",
    flag: "us.gif",
    year: "2013",
    url: "http://shopgodt.com",
    image: "shopgodt-scaled.png",
    description: "Shopgodt is the answer to what has been a lonely and research-intense experience to shopping. Get your friend's opinions and comments real time, find the best prices for that product, read reviews of the product, see celebrities who wore the product, read expert opinions from your favorite bloggers, all in ONE place and in REAL TIME!",
    technical: {
        comments: "Omniauth, FB and Twitter login",
        tags: ["Rails 3.2.11", "MongoDB", "AWS S3", "EngineYard", "Omniauth", "FB and Twitter login"]
    },
    display: true
  },

  { 
    id: "cleartrip",
    title: "ClearTrip",
    country: "India",
    flag: "in.gif",
    year: "2011",
    url: "http://www.cleartrip.com/hotels/india/pune/",
    image: "cleartrip-scaled.png",
    description: "This is a hotel directory listing for Cleartrip. Very heavy caching enables hotels search very fast and reliable. This page is used in A/B testing for Cleartrip. Localities are mapped and nearby hotels are cached via XML api access using Cleartrip APIs.",
    technical: {
        comments: "",
        tags: ["Rails 3.0.7", "MySQL", "Memcached", "nginx + passenger", "AWS-EC2"]
    },
    display: true
  },
=end
  {
    id: "tourconnect",
    title: "TourConnect",
    country: "Australia",
    flag: "au.gif",
    year: "2012",
    url: "http://tourconnect.com",
    image: "tourconnect.png",
    description: "TourConnect makes managing rates and contracting quick and easy! TourConnect communicates what the Supplier product is and how much it's going to cost each Contractor",
    technical: {
        comments: "",
        tags: ["Rails 3.2.21", "Mongoid 3.1.6", "Authorize.Net", "ActiveAdmin", "React", "Flux", "Backbone", "Node JS"]

    },
    case_study: "/portfolio_pdf/TourConnectCaseStudy.pdf",
    display: true
  },

  {
    id: "1factory",
    title: "1Factory",
    country: "USA",
    flag: "us.gif",
    year: "2012",
    url: "http://1factory.com",
    image: "1factory-scaled.png",
    description: "1Factory is a portal that manages the quality control process for multi-tiered supply chain. This is a multi-tenant application with a lot of impetus on security.",
    technical: {
        comments: "",
        tags: ["Rails 3.1", "PostgreSQL", "Heroku Cedar Stack"]
    },
    display: true
  },
=begin
  {
    id: "groupgyaan",
    title: "GroupGyaan",
    country: "India",
    flag: "in.gif",
    year: "2011",
    url: "http://groupgyaan.com",
    image: "groupgyaan-scaled.png",
    description: "GroupGyaan is a next generation marketplace for classroom sessions. You can book tickets for sessions on things that may be of interest to you, from a variety of different areas such as photography, cooking, parenting or negotiation skills.",
    technical: {
        comments: "",
        tags: ["Rails 3.0.6", "PostgreSQL", "GharPay", "PayU", "IndexTank", "Heroku Cedar Stack"]
    },
    display: true
  },

  {
    id: "moveme",
    title: "Move Planner",
    country: "UK",
    flag: "gb.gif",
    year: "2011",
    url: "http://planner.moveme.com",
    image: "moveme-scaled.png",
    description: "This site helps in moving house in UK. You can get instant quotes from vendors for insurance, man and van etc. The Free House Moving Checklist is an ideal planner for managing your home move.<br> This is a while-lable solution for various portals.",
    technical: {
        comments: "white-lable solution",
        tags: ["Rails 3.0.1", "MySQL", "Rabl", "white-lable solution"]
    },
    display: true
  },

  {
    id: "iPALM",
    title: "iPALM",
    country: "Australia",
    flag: "au.gif",
    year: "2012",
    url: "http://www.opusgroup.com.au/ipalm",
    image: "ipalm-scaled.png",
    description: "'Integrated Print & Logistics Management' (iPALM) is a proprietary Technology platform. It moves traditional print, warehousing, and fulfilment capabilities online, providing customers with access to storefronts, backlist catalogues, fulfillment, tracking, reporting and print on demand.",
    technical: {
        comments: "",
        tags: ["Rails 2.3.14", "MySQL", "Redis/Resque", "liquid", "Private Hosting"]
    },
    display: true
  },
  
=end
  {
    id: "acemoney",
  },

  {
    id: "samhita",
  },

  {
    id: "globalindiafund",
  },

  {
    id: "6ycollective",
  },

  {
    id: "perfect-pet-match",
  }
]
