export const emptyOrderList = (id: string) => {
    return {
      id,
      locationCode: { value: "", valid: true },
      address: { value: "", valid: true },
      recipientName: { value: "", valid: true },
      recipientNumber: { value: "", valid: true },
      altRecipientNumber: { value: "", valid: true },
    };
  };