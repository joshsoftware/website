import React from 'react'
import { Heading1 } from "./homeStyledComponents.js"

export const Clients = (props) => {
  const { clients } = props;

  return (
    <section id="clientsSlide"
      className="bg-props skrollable skrollable-between">
      <div className="container" style={{ paddingRight: 5, paddingLeft: 5 }}>
        <Heading1>Our Top Clients</Heading1>
        <ul className="list-unstyled list-client">
          {
            clients.map(client => {
              return <li key={client.name} style={{ border: '1px solid #f5f5f5', margin: '0' }}>
                <span>
                  <img src={require(`../../assets/images/clients/${client.logo}`)} alt={client.name} className="img-fluid" />
                </span>
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
      logo: "star.png",
      name: "Star India"
    },
    {
      website: "",
      logo: "gojek.png",
      name: "GoJek"
    },
    {
      website: "",
      logo: "biznbound.png",
      name: "Bizunbound"
    },
    {
      website: "",
      logo: "brandscope.png",
      name: "Brandscope"
    },
    {
      website: "",
      logo: "clubbuzz.png",
      name: "Clubbuzz"
    },
    {
      website: "",
      logo: "cubictree.png",
      name: "Cubic Tree"
    },
    {
      website: "",
      logo: "we3health.png",
      name: "We3Health"
    },
    {
      website: "",
      logo: "pediatric.png",
      name: "Docterz"
    },
    {
      website: "",
      logo: "ffd.png",
      name: "Freedom from Diabetic"
    },
    {
      website: "",
      logo: "firstcircle.png",
      name: "First Circle"
    },
    {
      website: "",
      logo: "circleslife.png",
      name: "Circles Life"
    },
    {
      website: "",
      logo: "fundamentor.png",
      name: "Fundamentor"
    },
    {
      website: "",
      logo: "banyan.png",
      name: "Banyan"
    },
    {
      website: "",
      logo: "druva.png",
      name: "Druva"
    },
    {
      website: "",
      logo: "quickInsure.png",
      name: "QuickInsure"
    }
  ]
}
