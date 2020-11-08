import React from "react";
import CommunityEvents from "./communityEvents";
import SectionFragment from "./sectionFragment";

const OpenSource = (props) => {
  return (
    <div>
      <section className="section-opensource">
        {props.sectionsData.map((section, index) => {
          return (
            <SectionFragment
              sectionHeading={section.title}
              textInfo={section.description}
              sectionId={section.section_id}
              carouselType={section.carousel_type}
              index={index}
              key={section.title}
            />
          );
        })}
        <CommunityEvents />
      </section>
    </div>
  );
};

OpenSource.defaultProps = {
  sectionsData: [
    {
      title: "Driving Open Source",
      section_id: "open_source_contributions",
      carousel_type: "image",
      description:
        "We take pride in working with our community on various events, platforms and collaborations. True to our name, we are passionate about helping the progress of technology disruption in all forms.",
    },
    {
      title: "Trainings at Josh",
      section_id: "trainings",
      carousel_type: "video",
      description:
        "We take pride in working with our community on various events, platforms and collaborations. True to our name, we are passionate about helping the progress of technology disruption in all forms.",
    },
    {
      title: "Talks at Josh",
      section_id: "community_events",
      carousel_type: "video",
      description:
        "We take pride in working with our community on various events, platforms and collaborations. True to our name, we are passionate about helping the progress of technology disruption in all forms.",
    },
    {
      title: "Josh Hackathon",
      section_id: "hackathons",
      carousel_type: "image",
      description:
        "We take pride in working with our community on various events, platforms and collaborations. True to our name, we are passionate about helping the progress of technology disruption in all forms.",
    },
  ],
};

export default OpenSource;
