import React from 'react'
import Header from '../domainExpertise/domainHeader.js';
import { TECHNOLOGIES_USED } from "../../globalConstants";
import * as routes from "../../routeConstants.js";
import { Route, Redirect } from 'react-router-dom';
import ProjectWork from './projectsWork.js';
import { ProjectData } from './projectsData.js';

const Technologies = (props) => {
  return (
    <>
      <Route path={`${routes.TECHNOLOGIES_URL}/:domain`} component={TechnologiesLayout} />
      {
        props.location.pathname === routes.TECHNOLOGIES_URL
        && <Redirect to={`${routes.TECHNOLOGIES_URL}/${TECHNOLOGIES_USED.ror.toLowerCase()}`} from={routes.TECHNOLOGIES_URL} />
      }
    </>
  )
}

const TechnologiesLayout = ({ match }) => {
  const selectedDomain = match.params.domain ? match.params.domain : `${TECHNOLOGIES_USED.ror.toLowerCase()}`;

  const filterDataForSelectDomain = () => {
    const techData = domainsData.filter(tech => tech.title.toLowerCase() === selectedDomain)
    if(techData.length > 0) {
      const keywordsToSearch = techData[0].keywords;
      return ProjectData.filter(project => project.techStack.find(e => keywordsToSearch.filter((l) => e.toLowerCase().includes(l.toLowerCase())).length > 0))
    }
    return [];
  }

  return (
    <section className="w-100 section-home">
      <Header
        domains={domainsData}
        imagesPath={'technologies'}
        baseRoute={routes.TECHNOLOGIES_URL}
        changeImageOnSelect={false}
        selectedDomain={selectedDomain}
        imageSize="30px" />
      <ProjectWork domainExpertiseData={filterDataForSelectDomain()} />
    </section>
  )
}

const domainsData = [
    {
      title: TECHNOLOGIES_USED.ror,
      logo: 'ruby',
      fileType: "png",
      keywords: ['ruby', 'rails', 'rubyonrails']
    },
    {
      title: TECHNOLOGIES_USED.go,
      logo: 'gopher',
      fileType: "png",
      keywords: ['go ', 'golang']
    },
    {
      title: TECHNOLOGIES_USED.react,
      logo: 'react',
      fileType: "png",
      keywords: ['react', 'reactjs']
    },
    {
      title: TECHNOLOGIES_USED.ios,
      logo: 'apple',
      fileType: "png",
      keywords: ['ios', 'flux']
    },
    {
      title: TECHNOLOGIES_USED.android,
      logo: 'android',
      fileType: "png",
      keywords: ['android', 'flux']
    },
    // {
    //   title: 'Other',
    //   logo: 'other',
    //   fileType: "png",
    //   keywords: ['java']
    // },
  ];

export default Technologies;
