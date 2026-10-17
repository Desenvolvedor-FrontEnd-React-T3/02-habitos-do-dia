import { useState } from "react"
import "./habit-form.css"

export function HabitForm({onAdd}) {
  const [name, setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onAdd(name.trim())
    setName("")
  }

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <label htmlFor="habit-name">Novo Hábito</label>
      <input
        id="habit-name"
        type="text"
        maxLength={40}
        placeholder="Ex.: Alongar por 5 minutos"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="char-count">{name.length}/40</p>
      <button disabled={name.trim() == ""}>Adicionar</button>
    </form>
  )
}