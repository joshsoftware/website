import React from 'react';

const stories = {
  "ffd": {
    title: 'ENABLING STORIES OF FREEDOM',
    contentKeys: ['summary', 'challenge', 'insight', 'joshEdge', 'impact'],
    summary: {
      subHeading: 'SUMMARY',
      image: 'summary',
      text: <><p><strong>The International Diabetes Federation projects that the number of diabetes patients in the South East Asian region will double by 2045. Currently, 8.8% of the Indian adult population suffers from diabetes. This is cause for extreme concern.</strong></p><p>Traditionally incurable, diabetes is a deeply rooted health concern making millions miserable. But when the best of tech and medicine come together, there&#39;s hope for radical improvement. Freedom From Diabetes (FFD), launched in 2013 by Dr. Pramod Tripathi has a singular aim: not just cure diabetes, but eliminate it completely. The program has 18,000 diabetes-free success stories to its credit and this number is only growing with each passing year. With a steadily increasing number of medical practitioners on board, FFD, headquartered in Pune, now has a network in more than 10 Indian cities. </p> </>
    },

    challenge: {
      subHeading: 'CHALLENGE',
      image: 'challenge',
      text: <p>The number of patients grew incrementally in the first two years of the program, and by 2015 there were a few thousand knocking on FFD’s door. The biggest challenge was maintaining patient records offline, and the need for digitisation meant only one thing: tech intervention. The first version of the CRM and mobile application was built, but it failed at scale. Both doctors and patients were using this app, at the cost of a high turnaround time, major performance lags and extremely poor customer experience.</p>
    },
    insight: {
      subHeading: 'INSIGHT',
      image: 'insight',
      text: <p>Revamping the initial applications was not possible, since it had been built on a legacy tech stack that was not connected to FFD’s other digital systems. A new version of the app backed by new age tech was the need of the hour. </p>
    },

    joshEdge: {
      subHeading: 'THE JOSH EDGE',
      image: 'joshEdge',
      text: <p>Keeping the rescue mission philosophy in mind, the Josh team started building the app from scratch. We built the CRM system on the backs of Trailblazer, Ruby on Rails, Mongo and ElasticSearch, along with Android and iOS compatibility. The foundation of the application was implemented one step at a time. A centrally accessible database was also created to enable seamless integration of patient records with the existing website & marketing systems. The team also introduced a call tracker for the in house marketing teams to stay updated in real time. A chat module was also rolled out to enable round the clock communication between doctors and patients. The app ensured that patients could upload blood test reports every 3 to 4 hours. The doctors were also notified about patient behaviour in real time, ensuring a transparent, efficient treatment program. Designed to scale up with the program, the app is a huge success with all stakeholders, new and old! </p>
    },

    impact: {
      subHeading: 'IMPACT',
      image: 'impact',
      text: <><p>Reduced turnaround time. Doctor-patient interactions in seconds, not hours. </p> <p>No wait time for patients, with a provision to share reports and readings digitally.</p> <p>More than 18,000 active users.</p><p>Real time mapping of blood sugar and insulin levels.</p><p>Improved end customer experience with maximum operational efficiency and no performance lags.</p></>
    }
  },
  "star": {
    title: 'Star Network',
    contentKeys: ['summary', 'challenge', 'insight', 'joshEdge', 'impact'],
    summary: {
      subHeading: 'SUMMARY',
      image: 'summary',
      text: <>
        <p> With more than 60 channels in 8 different languages, the Star Network is a media conglomerate that reaches almost every Indian in the country. With more than 790 million viewers in more than 100 countries, the Star channels are the go to place for content distribution both, from a producer’s, and a consumer’s perspective.</p>
        <p>However, most of their revenue generation is driven by advertising, and optimising these ads is an imperative that they need to follow. Managing the menu cards for advertisers, keeping track of inventory and staying on top of changing ad rates is necessary. For Star, the most important bit is mapping target audiences with show ratings, and then deciding ad slots based on these ratings. </p>
      </>
    },

    challenge: {
      subHeading: 'CHALLENGE',
      image: 'challenge',
      text: <p>As per the regulations by TRAI, Star needed to maintain a 13 minute inventory for ads, along with a fixed number of minutes per day to sell these ads. The sales team were using excel sheets to keep track of inventory, which meant the process was cumbersome, time consuming and outdated. While there was already an ad aggregator system in place, it was not designed well and aligned with the internal systems and processes. There was also a massive lag in terms of performance and deadline delivery. </p>
    },
    insight: {
      subHeading: 'INSIGHT',
      image: 'insight',
      text: <p>
        The earlier aggregator had been built on a legacy tech stack that could not handle multiple requests at the same time, thus leading to performance lags. Adding more features to that was recipe for disaster. The entire architectural framework of the existing aggregator platform would need a revamp, making Star an entire rescue mission for the Josh team.
      </p>
    },

    joshEdge: {
      subHeading: 'THE JOSH EDGE',
      image: 'joshEdge',
      text: <p>
        Soon after the Josh team started working on the pre-created architecture, the need for a new, all integrated platform was felt. What started off as a rescue mission thus turned into an entirely new framework that was built from scratch. Focused on selling less inventory for maximum price, the target audience, ad space, ad requirements and show ratings were aligned with each other. With an on premise team responsible for documentation and delivery, the first version of the solution was delivered in five months. Backed by deft technology including Ruby on Rails at the backend, React on front end and a Postgres mastered database, it was nothing short of an automated proposal creator that could be used for media buying and selling! It was an all integrated platform that took care of sponsorship and competition as well.
      </p>
    },

    impact: {
      subHeading: 'IMPACT',
      image: 'impact',
      text: <><p>Turnaround time for media buying reduced from 2 days to 10 minutes</p>
        <p>Multiple proposals and requests handled through one platform</p>
        <p>All data from advertisers and producers stored in a single database</p>
        <p>Real time view of sold inventory and ad revenue</p>
      </>
    }
  },
  "brandscope": {
    title: 'Brandscope',
    contentKeys: ['summary', 'challenge', 'insight', 'joshEdge', 'impact'],
    summary: {
      subHeading: 'SUMMARY',
      image: 'summary',
      text: <>
        <p>In a digitally evolving world, convenience matters most to the customer, especially in the case of buying behaviour.</p>
        <p>Brandscope was started in 2011 with an aim to simplify the selling process for suppliers and agents in the Australian surf industry. The goal was to create an omnichannel delivery platform for brands through webstores and brick and mortar retail outlets. The main purpose of this platform was to reduce logistical barriers between brands, suppliers and retailers.
        </p>
      </>
    },

    challenge: {
      subHeading: 'CHALLENGE',
      image: 'challenge',
      text: <p>Australian brands follow a release years’ concept, where new designs are introduced to the retailers every six months. Catalogues are distributed to the retailer community, who then place orders according to their clients’ needs. The need of the hour was a dynamic platform for retailers, distributors and consumers to provide them with a holistic, real time view of inventory and aid cost management.</p>
    },
    insight: {
      subHeading: 'INSIGHT',
      image: 'insight',
      text: <p>The traditional distribution system consisted of catalogues that were disseminated to retailers six months in advance, after which client orders were taken. This entire process was extremely time consuming, and a new age solution for efficient stock management was required. A poor choice of platform had impacted delivery rates as well.
      </p>
    },

    joshEdge: {
      subHeading: 'THE JOSH EDGE',
      image: 'joshEdge',
      text: <p>The pre-created platform was rebuilt from scratch and the entire framework was revamped by the Josh team. Within five months, the entire code was reengineered using Ruby 2.1 with MongoDb as the data store. An all integrated high performance solution for the Australian apparel industry was created. Despite such a challenging time frame, the project was completed in time, and the platform went live with more than 10000 catalogue items online. An all integrated high performance solution for the Australian apparel industry was created! The internet portal supported high resolution product photographs, videos, catalogues and social network ratings, mimicking the traditional retail experience. What started out as a project specific to the surf industry slowly evolved into a solution that the entire apparel industry embraced!</p>
    },

    impact: {
      subHeading: 'IMPACT',
      image: 'impact',
      text:
        <>
          <p>Time to market for salespeople reduced to 15 days from 3 months</p>
          <p>Scalable omnichannel e-Commerce platform for the Australian apparel industry, available across Europe and USA as well</p>
          <p>Reduced overhead costs and enhanced environmental sustainability </p>
          <p>Real time view of inventory and digital stock management</p>
        </>
    }
  }
}

export default stories;