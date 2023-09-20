import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { Dropdown } from '../Svg/Svg';



export const Navbar = ({items, Brand, textColor, backgroundColor, isLogin, isSignup, onClickLogin, onClickSignup,dropdownBgcolor,buttonColor,textHoverColor, ...props }) => {
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
    <header className="flex z-50 w-full p-4" style={{
      backgroundColor: backgroundColor,
      color: textColor,
      
    }} {...props}>
      <nav className="w-full sm:flex sm:items-center sm:justify-between" aria-label="Global">


        {/* Company Name and Menu Button*/}
        <div className="flex items-center justify-between w-full sm:w-auto">
        
    <a className="flex text-lg lg:text-2xl font-semibold whitespace-nowrap" href="#" aria-label="Brand">
      {Brand} {/* Render the string as-is */}
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
        {(isLogin || isSignup) && (
          <div className={`hs-collapse-toggle ${isMenuOpen ? '' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:flex sm:items-center sm:justify-center`}>
          <div>
            
          <ul 
          className="flex flex-col sm:flex-row gap-y-2 gap-x-0 text-lg xl:text-xl  sm:gap-y-0 sm:gap-x-7">
          {items.map((item) => (
            <li key={item.id}>
              <a
              style={{color: textColor}}
              onMouseEnter={(e) => (e.target.style.color = textHoverColor)}
              onMouseLeave={(e) => (e.target.style.color = textColor)}
                className={` hover:font-bold flex ${item.dropdownItems ? 'cursor-pointer' : ''}`}
                href={item.link}
                onClick={() => item.dropdownItems && toggleDropdown(item.id)}
              >
                <span className='flex items-center justify-center whitespace-nowrap'>
                {item.label} {item.dropdownItems && <Dropdown />}
                </span>
              </a>
              {item.dropdownItems && activeDropdown === item.id && (
                <ul className="absolute p-2 mt-2 space-y-2 rounded-lg" id="dropdown-menu" style={{backgroundColor: dropdownBgcolor}}>
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
      {!(isLogin || isSignup) && (
        <div className={`hs-collapse-toggle ${isMenuOpen ? '' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:flex sm:items-center sm:justify-end`}>
        <div className="flex  justify-start">
        <ul className="flex flex-col sm:flex-row gap-y-2 gap-x-0 text-lg xl:text-xl  sm:gap-y-0 sm:gap-x-7  ">
          {items.map((item) => (
            <li key={item.id}>
              <a
              style={{color: textColor}}
                onMouseEnter={(e) => (e.target.style.color = textHoverColor || 'green')}
                onMouseLeave={(e) => (e.target.style.color = textColor)}
                className={` duration-900 hover:font-bold flex ${item.dropdownItems ? 'cursor-pointer' : ''}`}
                href={item.link}
                onClick={() => item.dropdownItems && toggleDropdown(item.id)}
              >
                <span className='flex items-center justify-center whitespace-nowrap'>
                {item.label} {item.dropdownItems && <Dropdown />}
                </span>
              </a>
              {item.dropdownItems && activeDropdown === item.id && (
                <ul className="absolute p-2 mt-2 space-y-2 text-base bg-gray-100 rounded-lg" id="dropdown-menu" style={{backgroundColor: dropdownBgcolor}}>
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
        {isLogin && (
  <div className='flex mx-0 sm:mx-2'>
    <Button
      backgroundColor={buttonColor}
      label="Log in" // You can customize the label as needed
      onClick={onClickLogin} // Attach the onClickLogin prop here
      primary
    />
  </div>
)}

{isSignup && (
  <div className='flex mx-0 sm:mx-2 my-2'>
    <Button
      backgroundColor={buttonColor}
      label="Sign Up" // You can customize the label as needed
      onClick={onClickSignup} // Attach the onClickSignup prop here
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
  Brand: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  isLogin: PropTypes.bool,
  isSignup: PropTypes.bool,
  onClickLogin: PropTypes.func,
  onClickSignup: PropTypes.func,
  dropdownBgcolor: PropTypes.string,
  buttonColor: PropTypes.string,
  textHoverColor: PropTypes.string
};

Navbar.defaultProps = {
    backgroundColor: 'white',
    dropdownBgcolor: 'gray',
    textColor: 'black',
    onClickLogin: () => alert('Login button clicked'),
  onClickSignup: () => alert('Sign Up button clicked'),
  };

  