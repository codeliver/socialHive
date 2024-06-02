import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProgressBar from '../src/components/layouts/progress-bar';
import LoginPage from './components/pages/account/login';
import SignupPage from './components/pages/account/signup';
import HomePage from './components/pages/home/home';

const App = () => {
    return (
        <Router>
            <ProgressBar />
            <RouteChangeListener />
            <Routes>
            <Route path="/" element={<HomePage />} />
                <Route path="account">
                    <Route path="login" element={<LoginPage />}>
                    </Route>
                    <Route path="signup" element={<SignupPage />}>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

const RouteChangeListener = () => {
    const location = useLocation();
  
    useEffect(() => {
      const body = document.body;
      const loginPageClasses = ["auth-bg", "bgi-size-cover", "bgi-attachment-fixed", "bgi-position-center", "bgi-no-repeat"];
      const homePageClasses = ["header-fixed", "header-tablet-and-mobile-fixed", "aside-enabled", "sidebar-enabled"];
      
      const loginBackgroundImage = "url('https://i.ibb.co/1R64k3S/bg1-dark.jpg')";
      const loginBackgroundImageDark = "url('https://i.ibb.co/3z1s3wT/bg4-dark.jpg')";

      //Function to apply styles
      const applyStyles = (element, styles) => {
        for (let property in styles) {
          if (styles.hasOwnProperty(property)) {
            element.style[property] = styles[property];
          }
        }
      };

      //Function to clear all styles
      const clearStyles = (element) => {
        element.style = '';
      };
  
      // Function to add multiple classes
      const addClasses = (element, classes) => {
        classes.forEach(cls => element.classList.add(cls));
      };
  
      // Function to remove multiple classes
      const removeClasses = (element, classes) => {
        classes.forEach(cls => element.classList.remove(cls));
      };
  
      // Clear all previous classes before adding new ones
      body.className = '';
      body.style = '';
  
      if (location.pathname === "/account/login" ||location.pathname === "/account/signup") {
        addClasses(body, loginPageClasses);

        const loginPageStyles = {
            backgroundImage: loginBackgroundImage
        };
    
        const darkMode = body.getAttribute('data-bs-theme') === 'dark';
          if (darkMode) {
            loginPageStyles.backgroundImage = loginBackgroundImageDark;
        }
    
          applyStyles(body, loginPageStyles);
      } else {
        addClasses(body, homePageClasses);
        clearStyles(body);
      }
      
    }, [location]);
  
    return null;
  };

export default App;