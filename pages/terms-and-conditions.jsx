import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
const TermsAndConditions = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Terms & Conditions"} />

      {/*====== Start Events Section ======*/}
      <section className="events-section pt-100 pb-100">
        <h2>Terms & Conditions</h2>
      </section>
      {/*====== End Events Section ======*/}
      {/*====== Start Gallery Section ======*/}

      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default TermsAndConditions;
