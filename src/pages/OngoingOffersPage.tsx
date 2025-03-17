import Offer from "@/features/dashboard/offer management/Offer";
import Layout from "@/features/dashboard/common/Layout";

const OngoingOffersPage = () => {
  return (
    <>
      <Layout
        title="Ongoing Offers"
        aboveChildren={null}
        children={
          <div className="flex flex-col justify-center md:flex-row flex-wrap md:justify-start gap-10 mx-5">
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
          </div>
        }
      ></Layout>
    </>
  );
};

export default OngoingOffersPage;
