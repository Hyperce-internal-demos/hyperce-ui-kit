import React from 'react';
import PropTypes from 'prop-types';
import { Home, Services, FAQs, Contact, SignUp } from '../Svg/Svg';

const iconComponents = {
  Home: <Home />,
  Services: <Services />,
  FAQs: <FAQs />,
  Contact: <Contact />,
  SignUp: <SignUp />
  // Add other icons as needed
};

export const Sidebar = ({ items, textColor, backgroundColor }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-justify-left " viewBox="0 0 16 16"> <path  d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/> </svg></span>
        </span>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        
        {/* Sidebar content */}
        <div
          className={`h-full px-3 py-4 overflow-y-auto ${backgroundColor} dark:bg-gray-800`}
        >
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            onClick={toggleSidebar}
            className={`inline-flex items-center p-2 mt-2 ml-3 text-sm ${textColor} rounded-lg hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
          >
            <svg
          className="w-10 h-10"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>        </svg>
          </button>
          <ul className="space-y-2 font-medium">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className={`flex items-center p-2 rounded-lg ${backgroundColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group`}
                >
                  {iconComponents[item.icon]}
                  <span className="ml-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

// Default props for text and background colors
Sidebar.defaultProps = {
  textColor: 'text-gray-200',
  backgroundColor: 'bg-gray-900',
};

export default Sidebar;
