import { useState } from "react";
import FormCompletion from "../FormCompletion";
import "./ContactMePage.css";

const ContactMePage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [isFormComplete, setIsFormComplete] = useState(false);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        fetch("https://hook.us1.make.com/ndli3ruxww9wxprlo93dr4qcmlvaubrg", {
            method: "POST",
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                message: message,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        console.log("Form submitted");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setIsFormComplete(true);
    };

    const formCompletionButtonHandler = () => {
        setIsFormComplete(false);
    };

    return (
        <div>
            {isFormComplete ? (
                <FormCompletion
                    formCompletionButtonHandler={formCompletionButtonHandler}
                />
            ) : (
                <div className="contact-me">
                    <div className="contact-me-content">
                        <div className="contact-me-intro">
                            <h2 className="contact-me-intro-heading">
                                Have an idea? Great, let's discuss it together!
                            </h2>
                            <h3 className="contact-me-intro-subheading">
                                Please fill out the form to reach out to me. I
                                typically respond within 24 hours.
                            </h3>
                            <p>
                                <span className="semibold-text">
                                    Having difficulties?
                                </span>
                                <a
                                    href="mailto:deshpande.nishant12@gmail.com"
                                    className="contact-me-email-link"
                                >
                                    Send me an email.
                                </a>
                            </p>
                        </div>
                        <div className="form">
                            <form onSubmit={formSubmitHandler}>
                                <div className="name">
                                    <div className="formFirstName">
                                        <label
                                            className="contact-me-label"
                                            htmlFor="firstName"
                                        >
                                            First Name<sup>*</sup>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            className="contact-me-input"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(event) => {
                                                setFirstName(
                                                    event.target.value
                                                );
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="formLastName">
                                        <label
                                            className="contact-me-label"
                                            htmlFor="lastName"
                                        >
                                            Last Name<sup>*</sup>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            className="contact-me-input"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(event) => {
                                                setLastName(event.target.value);
                                            }}
                                            required
                                        />
                                    </div>
                                </div>
                                <label
                                    className="contact-me-label"
                                    htmlFor="emailID"
                                >
                                    Email<sup>*</sup>
                                </label>
                                <input
                                    type="email"
                                    name="emailID"
                                    id="emailID"
                                    className="contact-me-input"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                    required
                                />
                                <label
                                    className="contact-me-label"
                                    htmlFor="message"
                                >
                                    Message<sup>*</sup>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="contact-me-input"
                                    placeholder="Please type your message here"
                                    value={message}
                                    onChange={(event) => {
                                        setMessage(event.target.value);
                                    }}
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="primary-button"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactMePage;
