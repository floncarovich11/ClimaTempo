function neblina() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/neblina.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}
function sol() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/sun.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

function chuvaleve() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/chuvaleve.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

function banhodechuva() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/banhodechuva.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

function nublado() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/nublado.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

function nuvensseparadas() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/nuvensseparadas.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

function neveleve() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/neve.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

function tempestade() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/tempestade.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

// Define uma função chamada 'primeiraLetraMaiuscula' que recebe uma string 'str'
function primeiraLetraMaiuscula(str) {
    // Retorna a primeira letra da string em maiúscula concatenada com o restante da string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Adiciona um ouvinte de eventos de submissão ao formulário com o id 'formclima'
document.getElementById('formclima').addEventListener('submit', function (event) {
    // Previne o comportamento padrão de submissão do formulário
    event.preventDefault();

    // Obtém o valor inserido no campo de entrada com o id 'cityInput'
    const city = document.getElementById('cityInput').value;

    // Realiza uma requisição fetch para obter os dados do clima da cidade informada
    fetch(`http://localhost:3000/climatempo/${city}`)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            // Obtém a referência para o elemento com id 'climaResult'
            const tempoResult = document.getElementById('climaResult');

            // Verifica se os dados de temperatura estão presentes
            if (data.Temperatura) {
                // Atualiza os elementos HTML com os dados do clima
                document.getElementById('city').textContent = primeiraLetraMaiuscula(city);
                document.getElementById('temperatura').textContent = `${data.Temperatura}°C`;
                document.getElementById('umidade').textContent = `${data.Umidade}%`;
                document.getElementById('vento').textContent = `${data.VelocidadeDoVento}m/s`;
                document.getElementById('descricao').textContent =`${data.Clima}`

                // Exibe os elementos relevantes e oculta o formulário de pesquisa
                document.getElementById('climaResult').style.display = 'flex';
                document.getElementById('descricao1').style.display = 'flex';
                document.getElementById('lupa').style.display = 'flex';
                document.getElementById('formclima').style.display = 'none';  
                
                // Obtém referências para os elementos de ícones
                const temperaturaIcon = document.getElementById('temperaturaIcon');
                const umidadeIcon = document.getElementById('umidadeIcon');
                const ventoIcon = document.getElementById('ventoIcon');
                const descricaoIcon = document.getElementById('descricaoIcon');

                // Define os caminhos das imagens dos ícones
                cityIcon.src = "./icones/cidade.png";
                temperaturaIcon.src = "./icones/termometro.png";
                umidadeIcon.src = "./icones/umidade.png";
                ventoIcon.src = "./icones/vento2.png";
                descricaoIcon.src = "./icones/clima.png";

                // Chama funções de acordo com o tipo de clima
                // (Não fornecido no código fornecido)

            } else {
                // Exibe uma mensagem de erro se os dados de temperatura não estiverem presentes
                tempoResult.innerHTML = "Erro ao obter dados metereologicos";
            }
        })
        .catch((error) => console.error("Erro ao obter dados")); // Captura e trata erros da requisição
});
