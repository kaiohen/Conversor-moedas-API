// Chave de acesso as taxa de câmbio da API
const apikey = '0bc06fba9f3d118aa0a4ffe8';
// URL da API com ligação a chave de acesso
const apiURL = `https://v6.exchangerate-api.com/v6/${apikey}/latest/`;

// Função assincrona para conculta à taxa de câmbio via API
async function getExchangeRate(daMoeda, paraMoeda){
    try{
        // Busca taxa de câmbio para moeda especificada  
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = response.json();
        // verifica o resultado da busca 
        if(data.result === "success"){
            // returna a taxa de câmbio para moeda designada
            return data.conversion_rates[paraMoeda];
        }else {
            // Garante que uma mensagem de erro seja exibida caso tenha um erro
            throw new Error('Erro ao buscar taxa de câmbio');
        }
        // controla erros
    }catch (error){
        console.error("Erro;", error);
        return null;
    }
}