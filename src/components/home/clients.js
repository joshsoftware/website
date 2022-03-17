import React from "react";
import { Heading1 } from "./homeStyledComponents.js";
import Image from "react-image-webp";
import JoshCarousel from "./carousel.js";

export const Clients = (props) => {
  const { clients } = props;
  const settings = {
    dots: false,
    slidesToShow: 7.2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = clients.map((project) => (
    <div
      className={`client-box d-flex flex-column align-items-center justify-content-center my-4 ${project.categoryType}`}
    >
      <img
        src={require(`../../assets/images/clients/${project.logo}`)}
        alt="client logo"
        className="img-fluid"
      />
      {project.category && (
        <span className="d-block font-weight-bold mt-2">
          {project.category}
        </span>
      )}
    </div>
  ));

  return (
    // <section id="clientsSlide"
    //   className="bg-props skrollable skrollable-between section-home">
    //   <div className="container" style={{ paddingRight: 5, paddingLeft: 5 }}>
    //     <Heading1>Our Top Clients</Heading1>
    //     <ul className="list-unstyled list-client">
    //       {
    //         clients.map(client => {
    //           return <li key={client.name}>
    //             <span>
    //               <Image
    //                 src={require(`../../assets/images/clients/${client.logo}`)}
    //                 webp={require(`../../assets/images/clients/${client.logo}.webp`)}
    //                 alt={client.name} className="img-fluid" />
    //             </span>
    //           </li>
    //         })
    //       }
    //     </ul>
    //   </div>
    // </section>
    <section className="client-section">
      <h1 className="site-heading font-weight-bold text-center">
        Our Clientele
      </h1>
      <JoshCarousel items={items} settings={settings} />
    </section>
  );
};

Clients.defaultProps = {
  clients: [
    {
      categoryType: "client-category insurance-category",
      category: "Insurance",
      logo: "insurance-category.svg",
    },
    {
      website: "",
      logo: "star.png",
      name: "Star India",
    },
    {
      website: "",
      logo: "gojek.png",
      name: "GoJek",
    },
    {
      website: "",
      logo: "rakuten2.png",
      name: "Rakuten",
    },
    {
      categoryType: "client-category sports-category",
      category: "Sports",
      logo: "sports-category.svg",
    },
    {
      website: "",
      logo: "brandscope.png",
      name: "Brandscope",
    },
    {
      website: "",
      logo: "clubbuzz.png",
      name: "Clubbuzz",
    },
    {
      categoryType: "client-category video-category",
      category: "Video",
      logo: "video-category.svg",
    },
    {
      website: "",
      logo: "cubictree.png",
      name: "Cubic Tree",
    },
    {
      website: "",
      logo: "we3health.png",
      name: "We3Health",
    },
    {
      website: "",
      logo: "pediatric.png",
      name: "Docterz",
    },
    {
      website: "",
      logo: "legal-zoom.png",
      name: "legal Zoom",
    },
    {
      website: "",
      logo: "firstcircle.png",
      name: "First Circle",
    },
    {
      website: "",
      logo: "circleslife.png",
      name: "Circles Life",
    },
    {
      website: "",
      logo: "fundamentor.png",
      name: "Fundamentor",
    },
    {
      website: "",
      logo: "banyan.png",
      name: "Banyan",
    },
    {
      website: "",
      logo: "druva.png",
      name: "Druva",
    },
    {
      website: "",
      logo: "quickInsure.png",
      name: "QuickInsure",
    },
    {
      website: "",
      logo: "logo-simplysmart.png",
      name: "Simply Smart",
    },
    {
      website: "",
      logo: "cuarta1.png",
      name: "Cuarta",
    },
    {
      website: "",
      logo: "biznbound.png",
      name: "Bizunbound",
    },
    {
      website: "",
      logo: "realix.png",
      name: "Realix",
    },
    {
      website: "",
      logo: "ffd.png",
      name: "Freedom from Diabetic",
    },
  ],
};
