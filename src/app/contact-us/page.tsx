import Header from "@/components/header";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="h-screen">
      <section className="contact">
        <form>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              className="field"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
