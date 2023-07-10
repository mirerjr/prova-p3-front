import { Pencil, Trash } from "./components/Icons"

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center p-24">
    <div className="rounded-lg bg-neutral-100 p-5">
      <div className="w-full text-center text-2xl font-semibold text-neutral-800">Títulos</div>
      <table className="text-lg border-sky-200">
        <thead>
          <tr className="bg-neutral-700 text-gray-100">
            <th className="px-10 font-light rounded-tl">Código</th>
            <th className="px-10 font-light">Descrição</th>
            <th className="px-10 font-light">Alterar</th>
            <th className="px-10 font-light rounded-tr">Excluir</th>
          </tr>
        </thead>
        <tbody className="border">
          {getTitulos().map((titulo, posicao) => (
            <tr key={titulo.codigo} className={(isPar(posicao) ? 'bg-gray-200' : '' )}>
              <td align="center">{titulo.codigo}</td>
              <td align="center">{titulo.descricao}</td>
              <td align="center">
                <Pencil
                  className="text-orange-500"
                  size={24}
                  weight="thin"
                />
              </td>
              <td align="center">
                <Trash
                  className="text-red-500"
                  size={24}
                  weight="thin"
                />
              </td>
            </tr>
          ))}          
        </tbody>
      </table>
    </div>
   </main>
  )
}

function getTitulos()  {
  return [
    {
      codigo: 143,
      descricao: 'Graduado',
    },
    {
      codigo: 144,
      descricao: 'Pós-Doutor'
    },
    {
      codigo: 4,
      descricao: 'Doutor(a)'
    },
    {
      codigo: 2,
      descricao: 'Especialista'
    }
  ]
}

function isPar(numero: number) {
  return numero % 2 == 0;
}
