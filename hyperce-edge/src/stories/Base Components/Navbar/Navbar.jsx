import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { Dropdown } from '../Svg/Svg';


const hyperce =(
      <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5391 19.7891C19.5391 19.6012 19.6417 19.4283 19.8066 19.3382L24.4297 16.8143C24.772 16.6275 25.1895 16.8752 25.1895 17.2652V27.7354C25.1895 27.9233 25.0869 28.0962 24.922 28.1862L20.2989 30.7101C19.9566 30.897 19.5391 30.6493 19.5391 30.2593V19.7891Z" fill="#357D8A"/>
<path d="M25.2558 7.57753C25.2558 7.16685 24.7977 6.92223 24.4564 7.15062L19.8288 10.2474C19.6539 10.3644 19.4253 10.3629 19.2519 10.2436L14.7861 7.16974C14.4453 6.93516 13.9812 7.17914 13.9812 7.59287V13.1595C13.9812 13.3286 14.0644 13.4868 14.2036 13.5827L19.2519 17.0575C19.4253 17.1768 19.6539 17.1783 19.8288 17.0612L25.0278 13.5821C25.1703 13.4868 25.2558 13.3267 25.2558 13.1552V7.57753Z" fill="#357D8A"/>
<path d="M5.56491 4.96262C5.56491 4.79192 5.64971 4.63238 5.79118 4.53688L10.4142 1.41593C10.7554 1.18562 11.2153 1.43005 11.2153 1.84167L11.2153 11.513C11.2153 11.6837 11.1305 11.8433 10.989 11.9388L6.36597 15.0597C6.02481 15.29 5.56488 15.0456 5.56488 14.634L5.56491 4.96262Z" fill="#357D8A"/>
<path d="M5.56488 24.4276C5.56488 24.8383 6.02293 25.0829 6.36424 24.8545L10.9918 21.7577C11.1668 21.6407 11.3954 21.6422 11.5688 21.7615L16.0346 24.8354C16.3754 25.07 16.8395 24.826 16.8395 24.4123L16.8395 18.8456C16.8395 18.6766 16.7563 18.5183 16.6171 18.4225L11.5688 14.9477C11.3954 14.8283 11.1668 14.8268 10.9918 14.9439L5.79288 18.423C5.6504 18.5183 5.56488 18.6785 5.56488 18.8499L5.56488 24.4276Z" fill="#357D8A"/>
</svg>
  )




export const Navbar = ({logo, items, companyName, backgroundColor, buttonLabel, ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null); 
  };

  const toggleDropdown = (itemId) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  return (
    <header className="flex z-50 w-full p-4" style={backgroundColor && { backgroundColor }} {...props}>
      <nav className="w-full sm:flex sm:items-center sm:justify-between" aria-label="Global">


        {/* Company Name and Menu Button*/}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <a className="flex  text-lg lg:text-2xl font-semibold whitespace-nowrap" href="#" aria-label="Brand">
          {logo && logo}{companyName}
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-end items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white  transition-all text-sm"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            > 
              <svg viewBox="0 0 100 80" width="20" height="20">
                <rect width="100" height="20" rx="10"></rect>
                <rect y="30" width="100" height="20" rx="10"></rect>
                <rect y="60" width="100" height="20" rx="10"></rect>
              </svg>
            </button>
          </div>
        </div>


        {/* Navigation Links for secondary */}
        {buttonLabel && (
          <div className={`hs-collapse-toggle ${isMenuOpen ? '' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:flex sm:items-center sm:justify-center`}>
          <div >
            
          <ul className="flex flex-col sm:flex-row gap-y-2 gap-x-0 text-lg xl:text-xl  sm:gap-y-0 sm:gap-x-7 mb-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                className={`hover:text-teal-700 duration-900 hover:font-bold flex ${item.dropdownItems ? 'cursor-pointer' : ''}`}
                href={item.link}
                onClick={() => item.dropdownItems && toggleDropdown(item.id)}
              >
                <span className='flex items-center justify-center whitespace-nowrap'>
                {item.label} {item.dropdownItems && <Dropdown />}
                </span>
              </a>
              {item.dropdownItems && activeDropdown === item.id && (
                <ul className="absolute p-2 mt-2 space-y-2 bg-gray-700 text-white" id="dropdown-menu">
                  {item.dropdownItems.map((dropdownItem) => (
                    <li key={dropdownItem.id}>
                      <a href={dropdownItem.link} >{dropdownItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
            </div>
          </div>
        )}

                {/*For Primary*/}
      {!buttonLabel && (
        <div className={`hs-collapse-toggle ${isMenuOpen ? '' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:flex sm:items-center sm:justify-end`}>
        <div className="flex  justify-start">
        <ul className="flex flex-col sm:flex-row gap-y-2 gap-x-0 text-lg xl:text-xl  sm:gap-y-0 sm:gap-x-7 mb-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                className={`hover:text-teal-700 duration-900 hover:font-bold flex ${item.dropdownItems ? 'cursor-pointer' : ''}`}
                href={item.link}
                onClick={() => item.dropdownItems && toggleDropdown(item.id)}
              >
                <span className='flex items-center justify-center whitespace-nowrap'>
                {item.label} {item.dropdownItems && <Dropdown />}
                </span>
              </a>
              {item.dropdownItems && activeDropdown === item.id && (
                <ul className="absolute p-2 mt-2 space-y-2 bg-gray-700 text-white" id="dropdown-menu">
                  {item.dropdownItems.map((dropdownItem) => (
                    <li key={dropdownItem.id}>
                      <a href={dropdownItem.link} >{dropdownItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        </div>
        </div>
      )}

        {/* For Button */}
        {buttonLabel && (
          <div>
           <Button
              backgroundColor="#343030"
              label={buttonLabel}
              onClick={() => {}}
              primary
            />
          </div>
        )}
      </nav>
    </header>
  );
};




// defining its prop types
Navbar.propTypes = {
  logo: PropTypes.element, 
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      dropdownItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          link: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  companyName: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonLabel: PropTypes.string,
};

Navbar.defaultProps = {
    logo: hyperce,
    backgroundColor: 'white',
  };

  