import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Custom configuration
NProgress.configure({ 
  showSpinner: false,  // Disable the loading spinner
  speed: 500,          // Adjust the speed of the progress bar
  minimum: 0.2         // Minimum percentage displayed before it starts
});

// Optional: Custom styling for the progress bar (you can adjust this as needed)
const customStyle = `
#nprogress .bar {
  background: #0069e6;      /* Change the color of the progress bar */
}
#nprogress .peg {
  box-shadow: 0 0 10px #0069e6, 0 0 5px #0069e6;  /* Add shadow for a nicer effect */
}
#nprogress .spinner-icon {
  border-top-color: #0069e6; /* Change the spinner color */
  border-left-color: #0069e6;
}
`;

const ProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = customStyle;
    document.head.append(style);

    NProgress.start();

    return () => {
      NProgress.done();
      document.head.removeChild(style);
    };
  }, [location]);

  useEffect(() => {
    NProgress.done();
  }, [location]);

  return null;
};

export default ProgressBar;
