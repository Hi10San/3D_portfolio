import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_due9xxe",
        "template_2hoj47k",
        {
          from_name: formData.name,
          to_name: "Hiten",
          from_email: formData.email,
          to_email: "hiten.prajapati0707@gmail.com",
          message: formData.message,
        },
        "PLZ8nPXeNznbvD_Vv"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <motion.div
        className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary"
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-10% 0px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex flex-col items-start w-full gap-5 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help
          </p>
        </motion.div>

        <form className="w-full" onSubmit={handleSubmit}>
          {["name", "email", "message"].map((field, i) => (
            <motion.div
              key={field}
              className="mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-5% 0px" }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <label htmlFor={field} className="feild-label">
                {field === "name" ? "Full Name" : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  name={field}
                  rows="4"
                  className="field-input field-input-focus"
                  placeholder="Share your thoughts..."
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              ) : (
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  className="field-input field-input-focus"
                  placeholder={field === "email" ? "example@email.com" : "Your Name"}
                  autoComplete={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-5% 0px" }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {!isLoading ? "Send" : "Sending..."}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;