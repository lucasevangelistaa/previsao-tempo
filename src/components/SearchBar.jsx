import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [cidade, setCidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário - bloqueia o recarregamento da página.
        if (cidade.trim() !== '') {
            onSearch(cidade); // Envia a cidade para o App.jsx
            setCidade(''); // Limpa o campo de texto
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex gap-2 p-4'>
            <input
            type='text'
            placeholder='Digite uma Cidade'
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className='border border-gray-300 rounded-xl p-2 w-full' />
            <button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-xl'> Buscar </button>
        </form>
    )
}