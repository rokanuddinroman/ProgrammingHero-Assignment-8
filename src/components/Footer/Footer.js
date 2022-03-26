import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <h1>How React Works?
                </h1>
                <p>
                    React is Javascript Library that help us building Single page Website or Application. Most websites now adays are single paged. single paghe means we don't need to reload nevigating the Application. React uses a syntex called JSX. JSX is basically Javascript XML. That's why we can use Both HTML and Javascript in a JS File.
                </p>
            </div>
            <div>
                <h1>
                    Deference Between Props and State?
                </h1>
                <p>
                    Props and State both are Objects but there is lots of diferences. Props is basically like HTML Attributes. When we use props and state in any components, props help components to be reusable where state can't do that. So we can say Props are mutable since we can change it but we can do thta with State. We can't access State using the child Components, but we can do access using Props.
                </p>
            </div>
            <div>
                <h1>
                    How useState Works?
                </h1>
                <p>
                    There is a function in react thta called Hook. useState is a one those Hooks. The useState helps use to take a initial variable and a function. When we use useState Hook, the fuction returns us the value in that initial variable. We can use the useState to update that variable using that fuction ftom anywhere.
                </p>
            </div>
        </div>
    );
};

export default Footer;