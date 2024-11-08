// Chave de acesso as taxa de câmbio da API
const apikey = '2db0b470a9c5e69bc61b1424';
// URL da API com ligação a chave de acesso
const apiURL = `https://v6.exchangerate-api.com/v6/${apikey}/latest/`;
// Função assincrona para conculta à taxa de câmbio via API
async function getExchangeRate(daMoeda, paraMoeda){
    try{
        // Busca taxa de câmbio para moeda especificada  
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();
        // Verifica o resultado da busca 
        if(data.result === "success"){
            // Returna a taxa de câmbio para moeda designada
            return data.conversion_rates[paraMoeda];
        }else {
            // Garante que uma mensagem de erro seja exibida 
            throw new error('Erro ao buscar taxa de câmbio');
        }
        // Verifica erros
    }catch (error) {
        console.error("Erro:", error);
        return null;
    }
}
document.getElementById ("form").addEventListener("submit", async function(event){
    event.preventDefault();
    // Obter valores de entrada
    const valor = parseFloat(document.getElementById("amount").value);
    const daMoeda = document.getElementById("daMoeda").value;
    const paraMoeda = document.getElementById("paraMoeda").value;
    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);
    if(exchangeRate) {
        const convertedValue= valor * exchangeRate;
        // console.log (convertedValue);
        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`;
    } else {
        alert('Erro ao buscar a cotação. Tente novamente')
    }
});


