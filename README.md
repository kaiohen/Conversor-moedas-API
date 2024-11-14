
<h1 align="center">Conversor de Moedas</h1>

![image](https://github.com/user-attachments/assets/0a47f245-9a83-4f94-81c3-e4f9f02383f0)


<br>


<p align="center">
  <a href="#descricao">Sobre</a> &#xa0; | &#xa0; 
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#explicacao">Explicação</a> &#xa0; | &#xa0;
  <a href="https://github.com/kaiohen" target="_blank">Criador</a>
</p>

<br>

<h2 id="descricao">Descrição</h2>
<p>
 Este projeto é uma versão melhorada desta aplicação: 
  
- [conversor de moedas simples](https://github.com/kaiohen/Conversor-Moedas).
  
 ferramenta prática para realizar conversões rápidas e precisas. Com uma interface intuitiva, é ideal para quem precisa verificar valores em diferentes moedas de forma ágil.
 Aprimoramento de conversão, uso de consumo de API [exchangerate](https://www.exchangerate-api.com/), para as taxas de câmbios precisas e atualizadas em tempo real.
</p>

<h2 id="tecnologias">Tecnologias</h2>
<p>Tecnologias utilizadas para a criação do projeto:</p>
<ul>
  <li><img src="https://img.shields.io/badge/Bootstrap-purple?logo=bootstrap&logoColor=white&style=for-the-badge" alt="Bootstrap"></li>
  <li><img src="https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=CSS3" alt="CSS3"></li>
  <li><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" alt="JavaScript"></li>
  <li><img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5"></li>
</ul>

<h2 id="atencao">🚨Atenção🚨</h2>

Chave de acesso a API [exchangerate](https://www.exchangerate-api.com/) tem duração limitada de aproximadamente 2 meses. 
Inserira uma nova chave aqui:

~~~ JavaScript
const apikey = 'Exemple key access';
~~~

<h2 id="explicacao">Explicação</h2>

~~~ JavaScript
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
~~~
- _async_ = torna uma função assincrona.
- _try...catch_ = "captura" erros sem que a aplicação pare de ser executada.
- _const_ = declara uma variavel que o valor não pode ser mudado.
- _await_ = pausa a execução do codigo até a promise seja resolvida.
- _fetch()_ = faz uma solicitação http para o url e retorna uma Promise.
-  _Promise_ = representa uma tarefa assíncrona que será concluída no futuro, retornando um resultado de sucesso ou erro.
-  _.json()_ = transforma dados em um abjeto JavaScript utilizavel.
-  _data.result_ = verifica se a resposta da API foi bem-sucedida.
-  _throw new error_ = lançar um erro manualmente, interrompendo a execução do código.
-  _return null_ =  retornar um valor nulo, geralmente indicando que algo não foi encontrado ou que houve um erro na execução da função.

Esta função assíncrona busca na API as taxas de câmbio entre os tipos de moedas informadas. Caso ocorra algum erro, uma mensagem informativa é exibida.


~~~ JavaScript
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
~~~
- _document.getElementById_ = Seleciona elemento especifico do HTML pelo ID.
- _.addEventListener_ = adiciona um escutador a um elemento do HTML.
- _event.preventDefault()_ = evita que o formulário seja enviado e a página seja recarregada automaticamente.
- _ parseFloat_ =  converte strings em números decimais.
- _.value_ = pega o valor daquele elemento designado.
  
O código pega os valores do formulário, converte o valor informado de uma moeda para outra com base nas taxas de câmbio fornecidas pela API e exibe o resultado imediatamente após a conversão.

<br>

<a href="#top">Voltar ao topo</a>
