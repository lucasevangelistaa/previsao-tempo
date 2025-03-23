const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; // Variavel de ambiente
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; // URL base da API

export async function getWeatherData(cidade) {
    try {
        const response = await fetch(`${BASE_URL}?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`); // Faz a requisição para a API
        const data = await response.json(); // Converte a resposta em JSON para JS
        if (!response.ok) {
            throw new Error("Cidade não encontrada!");
        } return data; // Retorna os dados em JS - App.jsx
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error;
    }
}