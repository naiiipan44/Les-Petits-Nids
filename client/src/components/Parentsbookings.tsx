import "./ParentsBookings.css";

function ParentsBookings() {
  return (
    <>
      <section className="button-reservation-status">
        <button className="button-all" type="button">
          Tous
        </button>
        <button className="button-waiting" type="button">
          En attente
        </button>
        <button className="button-accepted" type="button">
          Accepté
        </button>
        <button className="button-refused" type="button">
          Refusé
        </button>
        <button className="button-cancelled" type="button">
          Annulé
        </button>
      </section>
    </>
  );
}

export default ParentsBookings;
