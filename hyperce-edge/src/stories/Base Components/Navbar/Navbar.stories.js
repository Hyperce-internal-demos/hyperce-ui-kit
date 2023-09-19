import { Navbar } from "./Navbar";


export default {
    title: 'Base Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],

    argTypes: {
        backgroundColor: {control: 'color'},
        companyName: {control:'text'},
        buttonLabel: {control: "text"},
        logo: {control: 'text'}
    }   
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
                label: 'Features ',
                dropdownItems: [
                  { id: 1, label: 'Feature 1'},
                  { id: 2, label: 'Feature 2' },
                ],
              },
          ],
          companyName: 'Hyperce',
    }
}

export const Secondary = {
    args: {
         items: [
            { id: 1, label: 'Overview', link: '#' },
            { id: 2, label: 'Student Account', link: '#' },
            { id: 3, label: 'About', link: '#' },
            {
                id: 4,
                label: 'Features ',
                dropdownItems: [
                  { id: 1, label: 'Feature 1'},
                  { id: 2, label: 'Feature 2' },
                ],
              },
          ],
        logo: null,
        companyName: 'Course X.',
        backgroundColor: 'white',
        buttonLabel: 'Sign Up',
    },
}


