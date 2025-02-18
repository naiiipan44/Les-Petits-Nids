export interface Booking {
  id: number;
  parentId: number;
  nurseryId: number;
  childrenId: number;
  bookingDate: string;
  bookingRange: string;
  status: string;
}
