import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import '../styles/contact.css'

const Contact = () => {
    return (
        <>
            <CommonSection title='Contact'/>
            <section className="contact">
                <h2>Drop a Message</h2>
                <p className="contact_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum aperiam<br/>cumque fugit suscipit animi natus nostrum voluptatem iste quam!</p>
                <div className="contact_form">
                    <form>
                        <div className="form_input">
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div className="form_input">
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div className="form_input">
                            <input type="text" placeholder='Enter subject'/>
                        </div>
                        <div className="form_input">
                            <textarea className="textarea" rows="7" placeholder='Write message'></textarea>
                        </div>
                        <button className="send_btn">Send a Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact