export const CreateDeliveryDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 3); 
    return today.toISOString().split("T")[0];
};
