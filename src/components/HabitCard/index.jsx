import "./habit-card.css";

export function HabitCard({ icon, name, done, onToggle, onDelete }) {
  return (
    <article className={done ? "habit-card done" : "habit-card"}>
      <span className="habit-icon">{icon}</span>

      <div className="habit-info">
        <h3>{name}</h3>

        <div className="habit-actions">
          <button onClick={onToggle}>{done ? "✓ Feito" : "Marcar"}</button>
          <button onClick={onDelete} className="delete-button">Excluir</button>
        </div>
      </div>
    </article>
  );
}
