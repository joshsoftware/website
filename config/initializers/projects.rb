PROJECTS= [
  {
    id: "altizon",
    title: "Altizon Datonis",
    country: "India",
    flag: "india.gif",
    year: "2013",
    url: "http://altizon.com/altizon-datonis-platform/",
    image: "altizon.png",
    description: "Altizon Datonis platform has the ability for connected devices to stream extremely large amounts of sensor data, securely, in real time. The platform also has the ability to perform real-time analytics on this data and influence decision making. As an example, a supervisor in a manufacturing plant can keep track of the operational efficiency of all the Altizon-connected machines in his plant, in real time and take corrective actions if he is falling behind schedule. Analytics on data gathered directly from his machines would help production planning, execution and maintenance.",
    technical: {
        stack: "Rails 4.0.0, MongoDB, ElasticSearch",
        deployment: "AWS-EC2",
        comments: "",
        tags: ["Rails 4.0.0", "MongoDB", "ElasticSearch", "AWS-EC2"]
    },
    display: true
  },

  {
    id: "educade",
    title: "Educade",
    country: "USA",
    flag: "us.gif",
    year: "2013",
    url: "http://educade.org",
    image: "educade.png",
    description: "Educade.org is a revolutionary online portal that answers the needs teachers have today and prepares students for success by providing free, ready to use lesson plans paired with engaging learning technologies. Tools include hundreds of apps, games, and hands-on activities with lessons aligned to Next Generation and Common Core standards, making it fast and easy to use. Educade is a platform for change with the mission to build a community around sharing engaging and interactive educational content.",
    technical: {
        stack: "Rails 3.2.12, MongoDB, ElasticSearch",
        deployment: "OpenStack",
        comments: "filter.js",
        tags: ["Rails 3.2.12", "MongoDB", "ElasticSearch", "OpenStack", "filter.js"]
    },
    display: true
  },

  {
    id: "phalcomm",
    title: "Phalcomm",
    country: "India",
    flag: "india.gif",
    year: "2013",
    url: "http://erp.phalcomm.com",
    image: "phalcomm.png",
    description: "Phalcomm is an E-Commerce Platform which offers online buying of real estate, real time brokerage and generates project specific report. It is used by over 500+ distributor and agents of phalcomm. Software provides real time information of about various bookings in progress across the nation and thus avoid double booking of same property. It also tracks the workflow from booking till allotment of the unit to customer. 
    System is very rich in reports to help ground staff and management as well to take decisions based on the total sale by various distributors, enquiry to sale conversion ratio, demands in the market etc. Reports are also supported by various graphs for better visual understanding and comparison.",
    technical: {
        stack: "Ruby 2.0, Rails 3.2.11, MongoDB, WebSockets, Sidekiq, Redis",
        deployment: "Control-S",
        comments: "",
        tags: ["Ruby 2.0", "Rails 3.2.11", "MongoDB", "Sidekiq", "Redis", "WebSockets", "Control-S"]
    },
    display: true
  },
  
  {
    id: "shopgodt",
    title: "Shopgodt",
    country: "USA",
    flag: "us.gif",
    year: "2013",
    url: "http://shopgodt.com",
    image: "shopgodt.png",
    description: "Shopgodt is the answer to what has been a lonely and research-intense experience to shopping. Get your friend's opinions and comments real time, find the best prices for that product, read reviews of the product, see celebrities who wore the product, read expert opinions from your favorite bloggers, all in ONE place and in REAL TIME!",
    technical: {
        stack: "Rails 3.2.11, MongoDB, AWS S3",
        deployment: "EngineYard",
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
    image: "cleartrip.png",
    description: "This is a hotel directory listing for Cleartrip. Very heavy caching enables hotels search very fast and reliable. This page is used in A/B testing for Cleartrip. Localities are mapped and nearby hotels are cached via XML api access using Cleartrip APIs.",
    technical: {
        stack: "Rails 3.0.7, MySQL, Memcached, nginx + passenger",
        deployment: "AWS-EC2",
        comments: "",
        tags: ["Rails 3.0.7", "MySQL", "Memcached", "nginx + passenger", "AWS-EC2"]
    },
    display: true
  },

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
        stack: "Rails 3.1.3, MongoDB, Authorize.Net, ActiveAdmin",
        deployment: "Heroku Cedar Stack",
        comments: "",
        tags: ["Rails 3.1.3", "MongoDB", "Authorize.Net", "ActiveAdmin", "Heroku Cedar Stack"]

    },
    display: true
  },

  {
    id: "1factory",
    title: "1Factory",
    country: "USA",
    flag: "us.gif",
    year: "2012",
    url: "http://1factory.com",
    image: "1factory.png",
    description: "1Factory is a portal that manages the quality control process for multi-tiered supply chain. This is a multi-tenant application with a lot of impetus on security.",
    technical: {
        stack: "Rails 3.1, PostgreSQL",
        deployment: "Heroku Cedar Stack",
        comments: "",
        tags: ["Rails 3.1", "PostgreSQL", "Heroku Cedar Stack"]
    },
    display: true
  },

  {
    id: "groupgyaan",
    title: "GroupGyaan",
    country: "India",
    flag: "in.gif",
    year: "2011",
    url: "http://groupgyaan.com",
    image: "groupgyaan.png",
    description: "GroupGyaan is a next generation marketplace for classroom sessions. You can book tickets for sessions on things that may be of interest to you, from a variety of different areas such as photography, cooking, parenting or negotiation skills.",
    technical: {
        stack: "Rails 3.0.6, PostgreSQL, GharPay, PayU, IndexTank",
        deployment: "Heroku Cedar Stack",
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
    image: "moveme.png",
    description: "This site helps in moving house in UK. You can get instant quotes from vendors for insurance, man and van etc. The Free House Moving Checklist is an ideal planner for managing your home move.<br> This is a while-lable solution for various portals.",
    technical: {
        stack: "Rails 3.0.1, MySQL, Rabl",
        deployment: "Private Hosting",
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
    image: "ipalm.png",
    description: "'Integrated Print & Logistics Management' (iPALM) is a proprietary Technology platform. It moves traditional print, warehousing, and fulfilment capabilities online, providing customers with access to storefronts, backlist catalogues, fulfillment, tracking, reporting and print on demand.",
    technical: {
        stack: "Rails 2.3.14, MySQL, Redis/Resque, liquid",
        deployment: "Private Hosting",
        comments: "",
        tags: ["Rails 2.3.14", "MySQL", "Redis/Resque", "liquid", "Private Hosting"]
    },
    display: true
  },

  {
    id: "zenith",
    title: "Zenith",
    country: "Australia",
    flag: "au.gif",
    year: "2013",
    url: "https://zenithhub.com",
    image: "zenith.png",
    description: "Zenith is printing solutions for kwik kopy clients. Clients can preview, update and print Business cards, Posters, Flyers, Files etc.",
    technical: {
        stack: "Ruby 2.0, Rails 3.2.13, PostgreSQL, ElasticSearch, Rackspace",
        deployment: "Private Hosting",
        comments: "",
        tags: ["Ruby 2.0", "Rails 3.2.13", "PostgreSQL", "ElasticSearch", "Rackspace"]
    },
    display: true
  },

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
