'use client'
import Swal from 'sweetalert2';
import { Pencil, Plus, Trash } from "./components/icons";

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="rounded-lg bg-neutral-100 p-5 shadow-md">
        <div className="group text-neutral-800">
          <div className="w-full text-center text-2xl font-semibold">
            Títulos
          </div>
          <button onClick={adicionar} className="text-emerald-500 flex flex-row rounded border border-emerald-500 group-hover:text-neutral-100 hover:bg-emerald-500 pr-1 py-1">
            <Plus className="text-emerald-500 group-hover:text-neutral-100 pt-1" size={18} weight="bold"/>
            Adicionar
          </button>
        </div>
        <table className="text-lg my-4">
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
              <tr
                key={titulo.codigo}
                className={isPar(posicao) ? "bg-gray-200" : ""}
              >
                <td align="center">{titulo.codigo}</td>
                <td align="center">{titulo.descricao}</td>
                <td align="center">
                  <Pencil className="text-orange-500" size={24} weight="thin" />
                </td>
                <td align="center">
                  <Trash className="text-red-500" size={24} weight="thin" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row justify-between">
          <select className="bg-gray-100 border rounded px-2 py-1">
            <option value="5">05</option>
            <option value="5">10</option>
            <option value="5">15</option>
            <option value="5">20</option>
          </select>
          <div>
            <button className="border rounded py-1 px-2 ml-1 border-blue-500 text-blue-500 hover:text-neutral-50 hover:bg-blue-500">Primeiro</button>
            <button className="border rounded py-1 px-2 ml-1 border-blue-500 text-blue-500 hover:text-neutral-50 hover:bg-blue-500">Anterior</button>
            <button className="border rounded py-1 px-2 ml-1 border-blue-500 text-blue-500 hover:text-neutral-50 hover:bg-blue-500">0</button>
            <button className="border rounded py-1 px-2 ml-1 border-blue-500 text-blue-500 hover:text-neutral-50 hover:bg-blue-500">1</button>
            <button className="border rounded py-1 px-2 ml-1 border-blue-500 text-blue-500 hover:text-neutral-50 hover:bg-blue-500">Próximo</button>
            <button className="border rounded py-1 px-2 ml-1 border-blue-500 text-blue-500 hover:text-neutral-50 hover:bg-blue-500">Último</button>
          </div>
        </div>
      </div>
    </main>
  );
}

function adicionar() {
  Swal.fire({
    title: 'Confirmação de exclusão',
    text: "Você tem certeza que deseja excluir o item selecionado?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'excluir',
    cancelButtonText: 'cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Removido!',
      )
    }
  })  
};

function getTitulos() {
  return [
    {
      codigo: 143,
      descricao: "Graduado",
    },
    {
      codigo: 144,
      descricao: "Pós-Doutor",
    },
    {
      codigo: 4,
      descricao: "Doutor(a)",
    },
    {
      codigo: 2,
      descricao: "Especialista",
    },
  ];
}

function isPar(numero: number) {
  return numero % 2 == 0;
}
