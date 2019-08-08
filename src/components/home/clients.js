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
                  <img src={require(`../../assetes/images/${client.logo}`)} alt={client.name} className="img-fluid" />
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
      logo: "startv.png",
      name: "Star India"
    },
    {
      website: "javascript:void(0);",
      logo: "clogo-gojek.jpg",
      name: "GO JEK"
    },
    {
      website: "http://www.dealsignal.com/",
      logo: "clogo-dealsignal.jpg",
      name: "DealSignal"
    },
    {
      website: "http://brandscope.com.au/",
      logo: "clogo-brandscope.jpg",
      name: "Brandscope"
    },
    {
      website: "http://www.clubbuzz.co.uk/",
      logo: "clogo-clubbuzz.jpg",
      name: "ClubBuzz"
    },
    {
      website: "https://www.cubictree.com/",
      logo: "clogo-cubictree.jpg",
      name: "Cubictree"
    },
    {
      website: "https://www.willswayfoundation.us/",
      logo: "clogo-we3.jpg",
      name: "We3"
    },
    {
      website: "https://thepediatricnetwork.com/#/",
      logo: "clogo-tpn.jpg",
      name: "The Pediatric Network"
    },
    {
      website: "http://www.freedomfromdiabetes.org/Program",
      logo: "clogo-ffd.jpg",
      name: "Freedom From Diabetes"
    },
    {
      website: "http://www.synergydesignsolutions.com.sg/",
      logo: "clogo-synergy.jpg",
      name: "Synergy Design Solutions"
    },
    {
      website: "https://next.merchdirect.com/",
      logo: "clogo-mdny.jpg",
      name: "Merch Direct"
    },
    {
      website: "https://fundamentor.com/",
      logo: "clogo-fundamentor.jpg",
      name: "Fundamentor"
    },
    {
      website: "http://www.skoutdeals.com/",
      logo: "clogo-skoutdeals.jpg",
      name: "Skout Deals"
    },
    {
      website: "javascript:void(0);",
      logo: "clogo-druva.jpg",
      name: "Druva"
    },
    {
      website: "https://quickinsure.co.in/",
      logo: "clogo-quickinsure.jpg",
      name: "Quickinsure"
    }]
}
