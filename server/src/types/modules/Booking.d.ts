export interface Booking {
  id: number;
  parent_id: number;
  nurseryId: number;
  children_id: number;
  bookingDate: string;
  bookingRange: string;
  status: string;
}
