import Layout from "@/features/dashboard/common/Layout";
import NewOfferForm from "@/features/dashboard/offer management/NewOfferForm";

const AddNewofferPage = () => {
  return (
    <>
      <Layout
        title="Add New Offer"
        aboveChildren={null}
        children={<NewOfferForm></NewOfferForm>}
      ></Layout>
    </>
  );
};

export default AddNewofferPage;
