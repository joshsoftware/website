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
        && <Redirect to={`${routes.TECHNOLOGIES_URL}/ruby-on-rails`} from={routes.TECHNOLOGIES_URL} />
      }
    </>
  )
}

const TechnologiesLayout = ({ match }) => {
  const selectedDomain = match.params.domain ? match.params.domain : 'ruby-on-rails';

  const filterDataForSelectDomain = () => {
    const techData = domainsData.filter(tech => tech.urlParameter === selectedDomain)
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
      <ProjectWork domainExpertiseData={filterDataForSelectDomain()} selectedDomain={selectedDomain} />
    </section>
  )
}

const domainsData = [
    {
      title: TECHNOLOGIES_USED.ror,
      logo: 'ruby',
      fileType: "png",
      keywords: ['ruby', 'rails', 'rubyonrails'],
      urlParameter: 'ruby-on-rails',
    },
    {
      title: TECHNOLOGIES_USED.go,
      logo: 'gopher',
      fileType: "png",
      keywords: ['go ', 'golang'],
      urlParameter: 'go'
    },
    {
      title: TECHNOLOGIES_USED.react,
      logo: 'react',
      fileType: "png",
      keywords: ['react', 'reactjs'],
      urlParameter: 'react'
    },
    {
      title: TECHNOLOGIES_USED.ios,
      logo: 'apple',
      fileType: "png",
      keywords: ['ios', 'flux'],
      urlParameter: 'ios'
    },
    {
      title: TECHNOLOGIES_USED.android,
      logo: 'android',
      fileType: "png",
      keywords: ['android', 'flux'],
      urlParameter: 'android'
    },
    // {
    //   title: 'Other',
    //   logo: 'other',
    //   fileType: "png",
    //   keywords: ['java']
    //   urlParameter: 'other'
    // },
  ];

export default Technologies;
