import React from 'react'

const Testimonial = (props) => {
  const { description, clientName, designation, projectName, seqNumber } = props;
  let alignmentRight = seqNumber % 2 === 0

  const DescriptionContent = (
    <div className="testimonial-info">
      <p className="card-text">{description}</p>
      <div className="clients-info">
        <h6>{clientName}</h6>
        <p>{designation}</p>
        <p className="font-weight-normal">{projectName}</p>
      </div>
    </div>
  )

  const TestimonialImage = (
    <div className="testimonial-image">
      <img src="http://new.joshsoftware.com:8080/images/client-face.svg" alt="Client" className="img-fluid img-thumbnail rounded-circle" />
    </div>
  )

  return (
    <>
      <div className="card card-client-testimonial">
        <div className="card-body">
          {
            alignmentRight ? <>{TestimonialImage}{DescriptionContent}</>
              : <>{DescriptionContent}{TestimonialImage}</>
          }


        </div>
      </div>
    </>
  )
}

export default Testimonial;
