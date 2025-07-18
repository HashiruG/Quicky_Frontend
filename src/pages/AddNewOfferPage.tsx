import Layout from "@/features/common/Layout";
import NewOfferForm from "@/features/offer management/NewOfferForm";

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
