import Offer from "@/features/dashboard/offer management/Offer";
import Layout from "@/features/dashboard/common/Layout";
import { useEffect, useState } from "react";
import {
  getOffersService,
  deleteOfferService,
} from "@/services/offerManangement/api";

const OngoingOffersPage = () => {
  const [offers, setOffers] = useState([{}]);
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await getOffersService();
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteOfferService(id);
    } catch (error) {
      console.error("Error deleting offer:", error);
    }
  };

  return (
    <>
      <Layout
        title="Ongoing Offers"
        aboveChildren={null}
        children={
          <div className="flex flex-col justify-center md:flex-row flex-wrap md:justify-start gap-10 mx-5">
            {offers.map((offer: any) => (
              <Offer
                key={offer.offerId}
                title={offer.offerTitle}
                description={offer.offerDescription}
                discountPercentage={offer.discountPercentage}
                startDate={offer.startDate}
                endDate={offer.endDate}
                deactivate={() => handleDelete(offer.offerId)}
              />
            ))}
          </div>
        }
      ></Layout>
    </>
  );
};

export default OngoingOffersPage;
