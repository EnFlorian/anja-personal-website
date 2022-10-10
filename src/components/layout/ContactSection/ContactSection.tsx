import "./ContactSection.scss";
import { Formik } from "formik";
import { NotificationModal, SectionHeader } from "../../elements";
import { useState } from "react";

interface IFormValues {
  email?: string;
  name?: string;
  message?: string;
}

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = (values: IFormValues) => {
    const errors: IFormValues = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };

  return (
    <section id="contact" className="contact-section container-lg">
      <SectionHeader title="Contact Me" subtitle="Get in touch with me" />

      <Formik
        initialValues={{
          name: "Mr. Demo",
          email: "demo@user.com",
          message: "Hello World!",
        }}
        validate={validateForm}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setIsModalOpen(true);
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="contact-section__form" onSubmit={handleSubmit}>
            <div className="contact-section__form-details">
              <div className="contact-section__input-group">
                {errors.name && touched.name && errors.name}

                <input
                  className="contact-section__input"
                  type="text"
                  name="name"
                  placeholder="Name..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              <div className="contact-section__input-group">
                {errors.email && touched.email && errors.email}

                <input
                  className="contact-section__input"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email..."
                />
              </div>
            </div>
            <div className="contact-section__input-group">
              <textarea
                className="contact-section__textarea"
                name="message"
                rows={6}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                placeholder="Enter your message here..."
              />
              {errors.message && touched.message && errors.message}
            </div>

            <button className="contact-section__button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      {isModalOpen && (
        <NotificationModal
          title="Success"
          description="You have successfully subscribed to our newsletter"
          closeModalFunc={setIsModalOpen}
          isOpen={isModalOpen}
        />
      )}
    </section>
  );
};

export default ContactSection;
