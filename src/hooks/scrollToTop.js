import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Component that attaches scroll to top hanler on router change
// renders nothing, just attaches side effects
const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);
