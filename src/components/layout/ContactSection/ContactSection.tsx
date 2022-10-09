import { Formik } from "formik";
import { SectionHeader } from "../../elements";
import "./ContactSection.scss";

interface IFormValues {
  email?: string;
  name?: string;
  message?: string;
}

const ContactSection = () => {
  const validateForm = (values: IFormValues) => {
    const errors: IFormValues = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
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
    <section id="contact" className="services-section">
      <div className="services-section__wrapper container-xl">
        <SectionHeader title="Contact Me" subtitle="Get in touch with me" />

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={validateForm}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            // TODO: Send form data to backend
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <textarea
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && errors.message}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSection;
