import "./NurseryBookings.css";

function NurseryBookings() {
  return (
    <section className="button-reservation-status-nursery">
      <button type="button">Tous</button>
      <button type="button">En attente</button>
      <button type="button">Accepté</button>
      <button type="button">Refusé</button>
      <button type="button">Annulé</button>
    </section>
  );
}

export default NurseryBookings;
