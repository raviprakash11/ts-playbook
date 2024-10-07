// src/router.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import your page components
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import NotFound from "./pages/notfound/NotFound";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
// Optional, for handling 404s

const AppRouter: React.FC = () => {
  const test = `Welcome to my portfolio. It's great to see you! 
Hi, my name is Caroline Forsey. I'm currently a Principal Marketing Manager for HubSpot's Blog, a publication with over 10 million monthly readers. I've been professionally writing for HubSpot for over five years, and in 2024 alone, my bylined writing has been viewed by 19 million readers. I'm based in Boston. 

On HubSpot's Blog team, I oversee our thought leadership program, where I have the privilege of interviewing top Marketing execs in the field and turning their insights into thoughtful, actionable stories for our readers. I am also in charge of HubSpot Blog Content Series, which has brought in 1.6 million views to-date. 

I am a 2016 graduate of Elon University with a B.A. in English and a concentration in Creative Writing. I minored in Communications and Psychology.  

When I'm not writing, you can find me travelling. I love to travel and have been across North America, Europe, and Asia. My love for travel led me to teaching English in Thailand for six months after graduation. (You can read more about my travel experiences under my Writing section!). 

Besides writing for HubSpot, I am open to taking on freelance projects -- please email me if you're interested in working together. I have experience writing blog posts, landing pages, press releases, and advertisement copy. 

Thanks for visiting and come back soon. 

Caroline Forsey
`;
  const DashboardLayout = <Layout page={<Dashboard content={test} />} />;
  const NotFoundLayout = (
    <Layout
      page={<NotFound message="test" imageUri="test" notFound="test" />}
    />
  );
  return (
    <Router>
      <Routes>
        {/* Define the routes for your app */}
        <Route path="/" element={DashboardLayout} />
        {/* Catch-all for undefined routes (404) */}
        <Route path="*" element={NotFoundLayout} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
