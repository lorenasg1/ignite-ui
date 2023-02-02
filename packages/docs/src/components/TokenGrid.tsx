import '../styles/token-grid.css'

type TokenGridProps = {
  token: Record<string, string>
  hasRemValue?: boolean
}

export function TokenGrid({ token, hasRemValue = false }: TokenGridProps) {
  return (
    <table className="token-grid">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(token).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
