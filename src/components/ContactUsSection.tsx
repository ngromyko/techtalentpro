import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";

const ContactUsSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "contact" });

  return (
    <Section sectionName={"contact"} backgroundColor="blue">
      <Container>
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <SectionHeader>{t("contactUs")}</SectionHeader>
          <form id="contact-form" className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">{t("yourName")}</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{t("message")}</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
