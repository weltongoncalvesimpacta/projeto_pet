import Link from 'next/link';

function VacinasForm() {
  return (
    <form>
      <label>
        Nome da vacina:
        <input type=  "text" name=  "vacina" />
      </label>
      <label>
        Data da última vacinação:
        <input type= "date" name= "data" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

