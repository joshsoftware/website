import React from "react";
import Tile from "./tile/tile";
import "../components/technologies/technologies-new.css";

const GroupedProjectsTiles = ({ groupedItems }) => {
  const flattenItems = groupedItems.flat();
  const getProjectIndex = (projectTitle) => {
    return flattenItems.findIndex((project) => {
      return project.title === projectTitle;
    });
  };

  return (
    <>
      {groupedItems.map((groupProjects, index) => (
        <>
          {index % 2 === 0 ? (
            <>
              <div className="tiles-row d-flex">
                <div className="vertical-tiles-row">
                  <Tile
                    tileImg={groupProjects[0].logo}
                    tileTitle={groupProjects[0].title}
                    tileDescription={groupProjects[0].description}
                    tileTags={groupProjects[0].techStack}
                    items={flattenItems}
                    projectIndex={getProjectIndex(groupProjects[0].title)}
                    className="vertical"
                    business={groupProjects[0].business}
                    domain={groupProjects[0].domain}
                    impact={groupProjects[0].impact}
                  />
                </div>
                <div className="horizontal-tiles-row d-flex">
                  {groupProjects[1] && (
                    <Tile
                      tileImg={groupProjects[1].logo}
                      tileTitle={groupProjects[1].title}
                      tileDescription={groupProjects[1].description}
                      tileTags={groupProjects[1].techStack}
                      items={flattenItems}
                      projectIndex={getProjectIndex(groupProjects[1].title)}
                      className="horizontal"
                      business={groupProjects[1].business}
                      domain={groupProjects[1].domain}
                      impact={groupProjects[1].impact}
                    />
                  )}
                  {groupProjects[2] && (
                    <Tile
                      tileImg={groupProjects[2].logo}
                      tileTitle={groupProjects[2].title}
                      tileDescription={groupProjects[2].description}
                      tileTags={groupProjects[2].techStack}
                      items={flattenItems}
                      projectIndex={getProjectIndex(groupProjects[2].title)}
                      business={groupProjects[2].business}
                      domain={groupProjects[2].domain}
                      impact={groupProjects[2].impact}
                      className="horizontal"
                    />
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="tiles-row d-flex">
                <div className="horizontal-tiles-row d-flex">
                  <Tile
                    tileImg={groupProjects[0].logo}
                    tileTitle={groupProjects[0].title}
                    tileDescription={groupProjects[0].description}
                    tileTags={groupProjects[0].techStack}
                    items={flattenItems}
                    projectIndex={getProjectIndex(groupProjects[0].title)}
                    business={groupProjects[0].business}
                    domain={groupProjects[0].domain}
                    impact={groupProjects[0].impact}
                    className="horizontal"
                  />
                  {groupProjects[1] && (
                    <Tile
                      tileImg={groupProjects[1].logo}
                      tileTitle={groupProjects[1].title}
                      tileDescription={groupProjects[1].description}
                      tileTags={groupProjects[1].techStack}
                      items={flattenItems}
                      projectIndex={getProjectIndex(groupProjects[1].title)}
                      business={groupProjects[1].business}
                      domain={groupProjects[1].domain}
                      impact={groupProjects[1].impact}
                      className="horizontal"
                    />
                  )}
                </div>
                {groupProjects[2] && (
                  <div className="vertical-tiles-row">
                    <Tile
                      tileImg={groupProjects[2].logo}
                      tileTitle={groupProjects[2].title}
                      tileDescription={groupProjects[2].description}
                      tileTags={groupProjects[2].techStack}
                      items={flattenItems}
                      projectIndex={getProjectIndex(groupProjects[2].title)}
                      business={groupProjects[2].business}
                      domain={groupProjects[2].domain}
                      impact={groupProjects[2].impact}
                      className="vertical"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </>
      ))}
    </>
  );
};

export default GroupedProjectsTiles;
