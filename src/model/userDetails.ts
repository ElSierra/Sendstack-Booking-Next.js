export class UserDetailsClass {
  address: { value: string; valid: boolean };
  locationCode: { value: string; valid: boolean };
  pickupName: { value: string; valid: boolean };
  pickupNumber: { value: string; valid: boolean };
  altPickupNumber: { value: string; valid: boolean };
  pickupDate: { value: Date | undefined; valid: boolean };
  note: { value: string; valid: boolean };
  kg: { value: string; valid: boolean };
  constructor(
    address: string,
    locationCode: string,
    pickupName: string,
    pickupNumber: string,
    altPickupNumber: string,
    pickupDate: Date | undefined,
    note: string,
    kg: string
  ) {
    this.address = {
      valid: true,
      value: address,
    };
    this.locationCode = {
      value: locationCode,
      valid: true,
    };
    this.pickupName = {
      valid: true,
      value: pickupName,
    };
    this.pickupNumber = {
      valid: true,
      value: pickupNumber,
    };
    this.altPickupNumber = {
      valid: true,
      value: altPickupNumber,
    };
    this.pickupDate = {
      valid: true,
      value: pickupDate,
    };
    this.note = {
      valid: true,
      value: note,
    };
    this.kg = {
      valid: true,
      value: kg,
    };
  }
}
