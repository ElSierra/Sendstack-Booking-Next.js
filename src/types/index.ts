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
  locationCode: { value: string; valid: boolean };
  pickupName: { value: string; valid: boolean };
  pickupNumber: { value: string; valid: boolean };
  altPickupNumber: { value: string; valid: boolean };
  pickupDate: { value: Date | undefined; valid: boolean };
  note: { value: string; valid: boolean };
};

export const emptyUserDetails = {
  address: { value: "", valid: true },
  locationCode: { value: "", valid: true },
  pickupName: { value: "", valid: true },
  pickupNumber: { value: "", valid: true },
  altPickupNumber: { value: "", valid: true },
  pickupDate: { value: new Date(), valid: true },
  note: { value: "", valid: true },
};

export type Drops = {
  locationCode: string;
  address: string;
  recipientName: string;
  recipientNumber: string;
  altRecipientNumber: string;
};
