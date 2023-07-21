export class RequestDropData {
  locationCode: string;
  address: string;
  recipientName: string;
  recipientNumber: string;
  altRecipientNumber: string;
  note: string;
  constructor(
    locationCode: string,
    address: string,
    recipientName: string,
    recipientNumber: string,
    altRecipientNumber: string,
    note: string
  ) {
    this.address = address;
    this.locationCode = locationCode;
    this.recipientName = recipientName;
    this.note = note;
    this.altRecipientNumber = altRecipientNumber;
    this.recipientNumber = recipientNumber;
  }
}
