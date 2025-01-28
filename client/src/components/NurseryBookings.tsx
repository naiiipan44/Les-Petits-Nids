import "./NurseryBookings.css";

function NurseryBookings() {
  return (
    <section className="button-reservation-status-nursery">
      <button className="button-all" type="button">
        Tous
      </button>
      <button className="button-waiting-nursery" type="button">
        En attente
      </button>
      <button className="button-accepted-nursery" type="button">
        Accepté
      </button>
      <button className="button-refused-nursery" type="button">
        Refusé
      </button>
      <button className="button-cancelled-nursery" type="button">
        Annulé
      </button>
    </section>
  );
}

export default NurseryBookings;
