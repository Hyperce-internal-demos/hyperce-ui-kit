import { Sidebar } from "./Sidebar";
export default {
    title: "Base Components/ Sidebar",
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
        textColor: {control: 'text'}
    }
}

export const Primary = {
    args: {
        items: [
            { id: 1, label: 'Home', link: '#', icon: 'Home'  },
            { id: 2, label: 'Services', link: '#', icon: 'Services' },
            { id: 3, label: 'FAQs', link: '#', icon:'FAQs' },
            { id: 4, label: 'Contact us', link: '#', icon:'Contact' },
            { id: 5, label: 'Sign Up', link: '#', icon: 'SignUp' }
        ],
        textColor: 'text-gray-200'
    }
}

export const Secondary = {
    args: {
        items: [
           { id: 1, label: 'Overview', link: '#' },
           { id: 2, label: 'Student Account', link: '#' },
           { id: 3, label: 'About', link: '#' },
           { id: 4, label: 'Features', link: '#' },
           { id: 5, label: 'Sign Up', link: '#' }

         ]
}
}