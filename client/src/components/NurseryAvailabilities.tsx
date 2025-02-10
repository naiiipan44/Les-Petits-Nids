import "./NurseryAvailabilities.css";

function NurseryAvailabilities() {
  return (
    <section className="nursery-availabilities-calendar">
      <p>Tarifs: 3,5€/heure</p>

      <section className="calendar-area">
        <p>Lun. 14</p>
        <p>Mar. 15</p>
        <p>Mer. 16</p>
        <p>Jeu. 17</p>
        <p>Ven. 18</p>
      </section>
      <button className="not-connected" type="button">
        Réserver
      </button>
    </section>
  );
}

export default NurseryAvailabilities;
