import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { API_BASE_URL } from "../../globalConstants";

const CommunityEvents = (props) => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  // helper function to fetch community events
  const fetchEvents = () => {
    setLoading(true);
    return fetch(`${API_BASE_URL}community_events`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  // useEffect to fetch and store the events data
  useEffect(() => {
    const promise = fetchEvents();
    promise
      .then((responseData) => {
        setEvents(responseData.community_events);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="section-content">
      <div className="container">
        <p className="section-heading text-center mb-5">
          Organising Community Events
        </p>
        {loading && (
          <div className="row d-flex justify-content-center">
            <Spinner style={{ width: "3rem", height: "3rem" }} />
          </div>
        )}
        {loading === false && (
          <div className="row justify-content-center">
            {events.map((event, index) => {
              return (
                <div
                  className="col-xs-12 col-md-6 col-lg-4 mb-4 justify-content-center"
                  key={index}
                >
                  <div className="card card-community-event">
                    <iframe
                      className="card-video"
                      src={event.video}
                      width="100%"
                      height="100%"
                      title={index}
                      frameBorder="0"
                      allowFullScreen
                    />
                    <div className="card-body">
                      <p className="card-title text-danger text-center">
                        {event.name}
                      </p>
                      <p className="card-text community-event-description">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunityEvents;
