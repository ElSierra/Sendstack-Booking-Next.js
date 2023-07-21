export class RequestDeliveryData {
  address: string;
  locationCode: string;
  pickupName: string;
  pickupNumber: string;
  altPickupNumber: string;
  pickupDate: string;
  note: string;
  constructor(
    address: string,
    locationCode: string,
    pickupName: string,
    pickupNumber: string,
    altPickupNumber: string,
    pickupDate: string,
    note: string
  ) {
    this.address = address;
    this.locationCode = locationCode;
    this.pickupName = pickupName;
    this.pickupNumber = pickupNumber;
    this.altPickupNumber = altPickupNumber;
    this.pickupDate = pickupDate;
    this.note = note;
  }
}
