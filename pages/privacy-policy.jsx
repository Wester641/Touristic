import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
const PrivacyPolicy = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Privacy Policy"} />

      {/*====== Start Events Section ======*/}
      <section className="events-section pt-100 pb-100">
        <h2>Privacy Policy</h2>
      </section>
      {/*====== End Events Section ======*/}
      {/*====== Start Gallery Section ======*/}

      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default PrivacyPolicy;
