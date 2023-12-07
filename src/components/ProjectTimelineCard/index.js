import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardContainer,
  ImgContainer,
  SecondContainer,
  ProjectTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './p'

const ProjectTimelineCard = props => {
  const {projectDetails} = props

  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <ProjectCardContainer>
      <ImgContainer src={imageUrl} alt="project" />
      <SecondContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <DurationContainer>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </SecondContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <VisitLink href={projectUrl}>visit</VisitLink>
    </ProjectCardContainer>
  )
}

export default ProjectTimelineCard
