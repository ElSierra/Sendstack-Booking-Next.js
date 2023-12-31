export class deliveryDetails {
  locationCode: string;
  address: string;
  recipientName: string;
  recipientNumber: string;
  altRecipientNumber: string;
  price: number;
  note: string;
  constructor(
    id: string,
    locationCode: { value: string; valid: boolean },
    address: { value: string; valid: boolean },
    recipientName: { value: string; valid: boolean },
    recipientNumber: { value: string; valid: boolean },
    altRecipientNumber: { value: string; valid: boolean },
    price: number,
    note: {value:string, valid:boolean}
  ) {
    this.locationCode = locationCode.value;
    this.address = address.value;
    this.recipientName = recipientName.value;
    this.recipientNumber = recipientNumber.value;
    this.altRecipientNumber = altRecipientNumber.value;
    this.price = price;
    this.note = note.value;
  }
}
