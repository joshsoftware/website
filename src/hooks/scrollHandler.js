import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location }) => {
  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));
    setTimeout(() => {
      if (element) {
        element.scrollIntoView();
      }
    }, 0);
  }, [location]);

  return null;
};

ScrollHandler.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string
  }).isRequired
};

export default withRouter(ScrollHandler);
