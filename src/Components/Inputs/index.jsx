// Subcomponente para o input de descrição
import './style.css'
export function DescriptionInput({
  onDescription,
  descriptionValue,
  placeDescricao
}) {
  return (
    <input
      onChange={onDescription}
      value={descriptionValue}
      className="input-description"
      type="text"
      placeholder={placeDescricao}
    />
  )
}

// Subcomponente para o input de categoria
export function SelectInput({
  onCategory,
  categoryValue,
  SelecionarOption,
  valueOption
}) {
  return (
    <select
      value={categoryValue}
      onChange={onCategory}
      className="input-category"
    >
      <option value={valueOption}>{SelecionarOption}</option>
      {/* Adicione outras opções conforme necessário */}
    </select>
  )
}

// Subcomponente para o input de arquivo
export function FileInput({ onFile }) {
  return <input onChange={onFile} className="input-file" type="file" />
}

// Subcomponente para o input de número (código de barras)
export function NumberInput({ onNumber, numberValue, placeNumber }) {
  return (
    <input
      value={numberValue}
      onChange={onNumber}
      className="input-number"
      type="text"
      placeholder={placeNumber}
    />
  )
}

// Subcomponente para o input de valor (preço)
export function ValorInput({ onValue, valorValue }) {
  return (
    <input
      value={valorValue}
      className="input-price"
      type="text"
      id="numero"
      onChange={onValue}
      placeholder="Digite o valor"
    />
  )
}
