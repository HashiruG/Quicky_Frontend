import api from "../../api/api";

export const acceptPayoutService = async (payoutId: number) => {
    const response = await api.post(`payout/payout-accept/${payoutId}`);
    return response;
}

export const rejectPayoutService = async (payoutId: number) => {
    const response = await api.post(`payout/payout-reject/${payoutId}`);
    return response;
}

export const getPayoutsService = async () => {
    const response = await api.get("payout/payout-requests");
    return response;
}