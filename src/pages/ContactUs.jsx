
import { useState, useEffect } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [notification]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    const validationErrors = validateForm();
    setErrors(validationErrors);
    setNotification("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
      setNotification("Message submitted successfully!");
    } catch {
      setNotification("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="contact-page">
      {notification && (
        <div
          className={`contact-notification ${
            notification.startsWith("Message submitted")
              ? "notification-success"
              : "notification-error"
          }`}
          role="status"
          aria-live="polite"
        >
          <span className="notification-icon">
            {notification.startsWith("Message submitted") ? "✓" : "!"}
          </span>

          <span>{notification}</span>

          <button
            type="button"
            className="notification-close"
            onClick={() => setNotification("")}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have a question or need help? We are here to help you!
        </p>
      </div>

      <div className="contact-container">
        {/* Contact information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            We would love to hear from you. Send us your questions,
            feedback, or suggestions.
          </p>

          <div className="contact-detail">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>support@shopnest.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 7814400003</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>🕒</span>
            <div>
              <h3>Support Hours</h3>
              <p>Monday - Saturday, 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2>Send Us a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              disabled={loading}
            />

            {errors.name && (
              <p className="error-message" id="name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              disabled={loading}
            />

            {errors.email && (
              <p className="error-message" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="What is your query about?"
              value={formData.subject}
              onChange={handleChange}
              aria-invalid={!!errors.subject}
              aria-describedby={
                errors.subject ? "subject-error" : undefined
              }
              disabled={loading}
            />

            {errors.subject && (
              <p className="error-message" id="subject-error">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? "message-error" : undefined
              }
              disabled={loading}
            />

            {errors.message && (
              <p className="error-message" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
