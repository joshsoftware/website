PROJECTS= [
  { 
    id: "the-deal-pages",
    title: "TheDealPages",
    url: "http://www.thedealpages.com",
    image: "images/porfolio/joshsoftware_deal-pages.png",
    description: "Is your one-stop directory for all the best daily deals in your city. Browse hundreds of limited time offers to purchase great deals from local business for 40-90% off!",
    technical: {
        stack: "Rails 3.0.8, thini, aaahhh",
        deployment: "Heroku",
        comments: ""
    },
    display: true
  },

  { 
    id: "cleartrip",
    title: "ClearTrip",
    url: "http://hotel.cleartrip.com",
    image: "images/porfolio/joshsoftware_clear-trip.png",
    description: "This is a hotel directory listing for Cleartrip. Very heavy caching enables hotels search very fast and reliable. This page is used in A/B testing for Cleartrip. Localities are mapped and nearby hotels are cached via XML api access using Cleartrip APIs. Hosting this directly on an EC2 instance provides flexibility to cache it entirely.",
    technical: {
        stack: "Rails 3.0.7, Memcached, nginx + passgenger",
        deployments: "Amazon EC2",
        comments: ""
    },
    display: true
  },
]
