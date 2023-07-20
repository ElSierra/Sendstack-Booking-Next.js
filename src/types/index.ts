export interface Balance {
  status: boolean;
  message: string;
  data: {
    balance: number;
  };
}

export interface Location {
  name: string;
  locationCode: string;
  isAvailable: boolean;
}
export type UserDetails = {
  address: { value: string; valid: boolean };
  kg: { value: string; valid: boolean };
  locationCode: { value: string; valid: boolean };
  pickupName: { value: string; valid: boolean };
  pickupNumber: { value: string; valid: boolean };
  altPickupNumber: { value: string; valid: boolean };
  pickupDate: { value: Date | undefined; valid: boolean };
  note: { value: string; valid: boolean };
};

export type PickUp = {
  address: string;
  locationCode: string;
  pickupName: string;
  kg: string;
  pickupNumber: string;
  altPickupNumber: string;
  pickupDate: Date | undefined;
  note: string;
};

export const emptyUserDetails = {
  address: { value: "", valid: true },
  locationCode: { value: "", valid: true },
  kg: { value: "", valid: true },
  pickupName: { value: "", valid: true },
  pickupNumber: { value: "", valid: true },
  altPickupNumber: { value: "", valid: true },
  pickupDate: { value: new Date(), valid: true },
  note: { value: "", valid: true },
};

export type DeliveryDetails = {
  id: string;
  locationCode: { value: string; valid: boolean };
  address: { value: string; valid: boolean };
  recipientName: { value: string; valid: boolean };
  recipientNumber: { value: string; valid: boolean };
  altRecipientNumber: { value: string; valid: boolean };
};

export type Drops = {
  locationCode: string;
  address: string;
  recipientName: string;
  recipientNumber: string;
  altRecipientNumber: string;
};
export const emptyDeliveryDetails = {
  id: "0",
  locationCode: { value: "", valid: true },
  address: { value: "", valid: true },
  recipientName: { value: "", valid: true },
  recipientNumber: { value: "", valid: true },
  altRecipientNumber: { value: "", valid: true },
};


