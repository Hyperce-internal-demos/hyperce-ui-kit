import { Navbar } from './Navbar';


export default {
  title: 'Base Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    items : {control: 'object'},
    backgroundColor: { control: 'color' },
    dropdownBgcolor: {control: 'color'},
    buttonColor: {control: 'color'},
    textColor: {control: 'color'},
    Brand: {control:'text'},
    isLogin: { control: 'boolean' },
    isSignup: { control: 'boolean' }, 
    onClickLogin: {action: 'clickedLogin' }, 
    onClickSignup: { action: 'clickedSignup' },
    textHoverColor: {control: 'color'}
  },
};



export const Primary = {
    args: {
  items: [
    { id: 1, label: 'Home', link: '#' },
    { id: 2, label: 'About', link: '#' },
    { id: 3, label: 'Services', link: '#' },
    { id: 4, label: 'Contact us', link: '#' },
    {
      id: 5,
      label: 'Features',
      dropdownItems: [
        { id: 1, label: 'Feature 1' },
        { id: 2, label: 'Feature 2' },
      ],
    },
  ],
  Brand: 'Hyperce',
  isLogin: false, // Set the login boolean as needed
  isSignup: false, // Set the signup boolean as needed
  onClickLogin: () => alert('Login button clicked'),
  onClickSignup: () => alert('Sign Up button clicked'),
}
}

export const Secondary = {
args : {
  items: [
    { id: 1, label: 'Overview', link: '#' },
    { id: 2, label: 'Student Account', link: '#' },
    { id: 3, label: 'About', link: '#' },
    {
      id: 4,
      label: 'Features',
      dropdownItems: [
        { id: 1, label: 'Feature 1' },
        { id: 2, label: 'Feature 2' },
      ],
    },
  ],
  Brand: 'Course X.',
  backgroundColor: 'white',
  isLogin: true, 
  isSignup: true,
}
}
