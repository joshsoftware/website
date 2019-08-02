import React from 'react'
import { Heading1 } from "./homeStyledComponents.js"

export const Clients = (props) => {
  const { clients } = props;

  return (
    <section id="clientsSlide"
      className="section-home section-clients bg-props skrollable skrollable-between">
      <div className="container" style={{ paddingRight: 5, paddingLeft: 5 }}>
        <Heading1>Our Top Clients</Heading1>
        <ul className="list-unstyled list-client">
          {
            clients.map(client => {
              return <li key={client.name}>
                <a href={client.website}>
                  <img src={client.logo} alt={client.name} className="img-fluid" />
                </a>
              </li>
            })
          }
        </ul>
      </div>
    </section>
  )
}

Clients.defaultProps = {
  clients: [
    {
      website: "",
      logo: "http://new.joshsoftware.com:8080/images/clogo-star.jpg",
      name: "Star India"
    },
    {
      website: "javascript:void(0);",
      logo: "http://new.joshsoftware.com:8080/images/clogo-gojek.jpg",
      name: "GO JEK"
    },
    {
      website: "http://www.dealsignal.com/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-dealsignal.jpg",
      name: "DealSignal"
    },
    {
      website: "http://brandscope.com.au/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-brandscope.jpg",
      name: "Brandscope"
    },
    {
      website: "http://www.clubbuzz.co.uk/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-clubbuzz.jpg",
      name: "ClubBuzz"
    },
    {
      website: "https://www.cubictree.com/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-cubictree.jpg",
      name: "Cubictree"
    },
    {
      website: "https://www.willswayfoundation.us/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-we3.jpg",
      name: "We3"
    },
    {
      website: "https://thepediatricnetwork.com/#/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-tpn.jpg",
      name: "The Pediatric Network"
    },
    {
      website: "http://www.freedomfromdiabetes.org/Program",
      logo: "http://new.joshsoftware.com:8080/images/clogo-ffd.jpg",
      name: "Freedom From Diabetes"
    },
    {
      website: "http://www.synergydesignsolutions.com.sg/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-synergy.jpg",
      name: "Synergy Design Solutions"
    },
    {
      website: "https://next.merchdirect.com/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-mdny.jpg",
      name: "Merch Direct"
    },
    {
      website: "https://fundamentor.com/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-fundamentor.jpg",
      name: "Fundamentor"
    },
    {
      website: "http://www.skoutdeals.com/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-skoutdeals.jpg",
      name: "Skout Deals"
    },
    {
      website: "javascript:void(0);",
      logo: "http://new.joshsoftware.com:8080/images/clogo-druva.jpg",
      name: "Druva"
    },
    {
      website: "https://quickinsure.co.in/",
      logo: "http://new.joshsoftware.com:8080/images/clogo-quickinsure.jpg",
      name: "Quickinsure"
    }]
}
