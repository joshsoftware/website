import React from 'react'
import { Heading1 } from "./homeStyledComponents.js"
import Image from 'react-image-webp';

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
              return <li key={client.name}>
                <span>
                  <Image
                    src={require(`../../assets/images/clients/${client.logo}`)}
                    webp={require(`../../assets/images/clients/${client.logo}.webp`)}
                    alt={client.name} className="img-fluid" />
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
      website: '',
      logo: 'rakuten2.png',
      name: 'Rakuten'
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
      website: '',
      logo: 'legal-zoom.png',
      name: 'legal Zoom'
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
    },
    {
      website: '',
      logo: 'logo-simplysmart.png',
      name: 'Simply Smart'
    },
    {
      website: '',
      logo: 'cuarta1.png',
      name: 'Cuarta'
    },
    {
      website: "",
      logo: "biznbound.png",
      name: "Bizunbound"
    },
    {
      website: '',
      logo: 'realix.png',
      name: 'Realix'
    },
    {
      website: "",
      logo: "ffd.png",
      name: "Freedom from Diabetic"
    },
  ]
}
