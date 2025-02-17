import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";

interface FormI {
  name: string;
  email: string;
  message: string;
}

const defaultValues: FormI = { name: "", email: "", message: "" };

const ContactUsSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "contact" });
  const [formData, setFormData] = useState<FormI>(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        // @ts-ignore
        formData,
        {
          publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      
      setFormData(defaultValues);
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }

      console.log("ERROR", err);
    }
  };

  return (
    <Section sectionName={"contact"} backgroundColor="blue">
      <Container>
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <SectionHeader>{t("contactUs")}</SectionHeader>
          <form onSubmit={sendEmail} id="contact-form" className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">{t("yourName")}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg border-blue-400 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg border-blue-400 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{t("message")}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg border-blue-400 focus:outline-none focus:border-blue-700 resize-none"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {t("sendMessage")}
            </button>
            <p id="status-message" className="text-center mt-4"></p>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default ContactUsSection;
