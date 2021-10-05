import React, { Component } from 'react';
import item from ".././images/quote_contact_page.png"


class Contact extends Component {
    render() {
        return (
            <div>
                <h1><b>Contact Us</b></h1>
                <img src={item} alt="" />
                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                <ul><li>By email: info@ssdevelopment.us</li></ul>
            </div>
        );
    }
}

export default Contact;


