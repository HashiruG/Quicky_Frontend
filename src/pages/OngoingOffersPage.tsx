import Offer from "@/features/offer management/Offer";
import Layout from "@/features/common/Layout";
import { useEffect, useState } from "react";
import {
  getOffersService,
  deleteOfferService,
} from "@/services/offerManangement/api";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Driver = {
  driverId: number;
  driverName: string;
  gender: string;
  city: string;
};

type OfferType = {
  offerId: number;
  offerTitle: string;
  offerDescription: string;
  discountPercentage: number;
  offerType: "General" | "Custom";
  startDate: string;
  endDate: string;
  offeredDrivers?: Driver[];
};

const OngoingOffersPage = () => {
  const [offers, setOffers] = useState<OfferType[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDrivers, setSelectedDrivers] = useState<Driver[]>([]);

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
      setOffers((prevOffers) =>
        prevOffers.filter((offer) => offer.offerId !== id)
      );
    } catch (error) {
      console.error("Error deleting offer:", error);
    }
  };

  const handleViewDrivers = (drivers: Driver[] = []) => {
    setSelectedDrivers(drivers);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Layout title="Ongoing Offers" aboveChildren={null}>
        <div className="flex flex-col justify-center md:flex-row flex-wrap md:justify-start gap-10 mx-5">
          {offers.map((offer) => (
            <Offer
              key={offer.offerId}
              title={offer.offerTitle}
              description={offer.offerDescription}
              discountPercentage={offer.discountPercentage}
              startDate={offer.startDate}
              endDate={offer.endDate}
              deactivate={() => handleDelete(offer.offerId)}
              offerType={offer.offerType}
            >
              {offer.offerType === "Custom" && (
                <Button
                  onClick={() => handleViewDrivers(offer.offeredDrivers)}
                  variant="outline"
                  className="w-full"
                >
                  View Drivers
                </Button>
              )}
            </Offer>
          ))}
        </div>
      </Layout>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">
              Drivers Assigned to this Offer
            </h3>
            <div className="overflow-y-auto max-h-80">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Driver ID</TableHead>
                    <TableHead >Name</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>City</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedDrivers.map((driver) => (
                    <TableRow key={driver.driverId}>
                      <TableCell className="font-medium">
                        {driver.driverId}
                      </TableCell>
                      <TableCell>{driver.driverName}</TableCell>
                      <TableCell>{driver.gender}</TableCell>
                      <TableCell>{driver.city}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <Button onClick={closeModal} className="w-full mt-6">
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default OngoingOffersPage;
