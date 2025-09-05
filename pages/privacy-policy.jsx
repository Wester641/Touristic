import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
const PrivacyPolicy = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Privacy Policy"} />

      {/*====== Start Events Section ======*/}
      <section className="container-fluid pt-100 pb-100">
        <h4>Privacy Policy — Almas Travel</h4>
        <p>Last updated: September 5, 2025</p>
        <p>
          At Almas Travel, we respect your privacy and are committed to
          protecting the personal data you provide when using our website and
          services.
        </p>
        <h4>1. Information We Collect</h4>
        <p>We may collect the following information:</p>
        <ul>
          <li>Full name</li>
          <li>Contact details (phone number, e-mail, address)</li>
          <li>Passport details (if required for booking)</li>
          <li>
            Payment information (processed securely through third-party
            providers)
          </li>
          <li>Travel preferences and interests</li>
        </ul>
        <h4>2. How We Use Your Information</h4>
        <p>Your personal data may be used for:</p>
        <ul>
          <li>Processing and confirming bookings</li>
          <li>Communicating with you regarding your trip</li>
          <li>Improving our services and customer support</li>
          <li>
            Sending news, promotions, and special offers (with your consent)
          </li>
          <li>Complying with legal and tax obligations</li>
        </ul>
        <h4>3. Sharing Your Information</h4>
        <p>We may share your information with:</p>
        <ul>
          <li>Hotels, airlines, and partners to arrange your trip</li>
          <li>Payment processors to handle transactions securely</li>
          <li>Government authorities (only when legally required)</li>
        </ul>
        <p>We never sell or rent your personal data to third parties.</p>
        <h4>4. Data Storage and Security</h4>
        <p>
          We use modern technical measures (SSL encryption, secure servers) to
          protect your data.
        </p>
        <p>
          Your data is stored only as long as necessary to provide services and
          as required by law.
        </p>
        <h4>5. Your Rights</h4>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Update or correct your information</li>
          <li>Request deletion of your data (unless restricted by law)</li>
        </ul>
        <h4>6. Cookies and Analytics</h4>
        <p>
          Our website may use cookies and analytics tools (e.g., Google
          Analytics) to improve website performance and user experience.
        </p>
        <h4>7. Contact Us</h4>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact us:
        </p>
        <p>Almas Travel</p>
        <p>📧 Email: AlmasTravel@gmail.com</p>
        <p>📞 Phone: +996 (555) 55 13 40</p>
      </section>
      {/*====== End Events Section ======*/}
      {/*====== Start Gallery Section ======*/}

      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default PrivacyPolicy;
