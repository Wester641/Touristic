import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
const TermsAndConditions = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Terms & Conditions"} />

      {/*====== Start Events Section ======*/}
      <section className="container-fluid pt-100 pb-100">
        <h2>Terms & Conditions — Almas Travel</h2>

        <p>Last updated: September 5, 2025</p>

        <p>
          Welcome to Almas Travel. By using our website and services, you agree
          to the following Terms & Conditions. Please read them carefully.
        </p>

        <h4>1. General</h4>

        <ul>
          <li>These Terms govern your use of our website and services.</li>
          <li>
            By booking with us, you confirm that you are at least 18 years old
            and legally able to enter into agreements.
          </li>
          <li>We reserve the right to update these Terms at any time.</li>
        </ul>

        <h4>2. Services</h4>

        <ul>
          <li>
            Almas Travel provides travel-related services including tour
            packages, hotel reservations, transportation, and other travel
            arrangements.
          </li>
          <li>All services are subject to availability.</li>
        </ul>

        <h4>3. Bookings and Payments</h4>

        <ul>
          <li>A booking is confirmed only after payment is received.</li>
          <li>
            Prices are shown in the currency stated on our website or invoice.
          </li>
          <li>Payment must be made through our approved methods.</li>
        </ul>

        <h4>4. Cancellations and Refunds</h4>

        <ul>
          <li>
            Cancellation policies vary depending on the service (e.g., flights,
            hotels, tours). Specific conditions will be provided before booking.
          </li>
          <li>
            Refunds, if applicable, will be processed according to the
            supplier’s terms (airlines, hotels, etc.).
          </li>
          <li>Non-refundable services will be clearly stated.</li>
        </ul>

        <h4>5. Travel Documents and Requirements</h4>

        <ul>
          <li>
            Customers are responsible for ensuring valid travel documents
            (passport, visas, insurance, vaccination certificates).
          </li>
          <li>
            Almas Travel is not liable for any issues caused by missing or
            incorrect documents.
          </li>
        </ul>

        <h4>6. Liability</h4>

        <ul>
          <li>
            Almas Travel acts as an intermediary between customers and service
            providers (airlines, hotels, transport companies).
          </li>
          <li>
            We are not responsible for delays, cancellations, accidents, or
            losses beyond our control.
          </li>
          <li>Our liability is limited to the amount paid for the service.</li>
        </ul>

        <h4>7. Use of Website</h4>

        <ul>
          <li>
            You agree not to misuse our website, attempt unauthorized access, or
            engage in activities that may harm the service.
          </li>
          <li>
            Content on our website is for personal, non-commercial use only.
          </li>
        </ul>

        <h4>8. Governing Law</h4>

        <ul>
          <li>These Terms are governed by the laws of the Kyrgyz Republic.</li>
          <li>
            Any disputes will be resolved in the competent courts of Kyrgyzstan.
          </li>
        </ul>

        <h4>9. Contact Us</h4>

        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us:
        </p>

        <p>Almas Travel</p>
        <p>📧 Email: AlmasTravel@gmail.com</p>
        <p>📞 Phone: +996 (555) 55 13 40</p>
      </section>
    </Layout>
  );
};
export default TermsAndConditions;
