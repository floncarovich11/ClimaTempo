// Importa o módulo 'express' para criar o servidor web
const express = require('express');
// Importa o módulo 'axios' para fazer requisições HTTP
const axios = require('axios');
// Importa o módulo 'path' para lidar com caminhos de arquivos
const path = require('path');
// Importa o módulo 'cors' para habilitar o CORS (Cross-Origin Resource Sharing)
const cors = require('cors');
// Importa o arquivo de configuração que contém a chave da API
const config = require('./config.json');
// Obtém a chave da API do arquivo de configuração
const apikey = config.apikey;

// Cria uma instância do servidor Express
const app = express();
// Define a porta em que o servidor irá escutar as requisições
app.listen(3000);

// Habilita o CORS para permitir solicitações de diferentes origens
app.use(cors());
// Habilita o middleware para analisar corpos de solicitação JSON
app.use(express.json());
// Define o diretório público onde estão localizados arquivos estáticos (como HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Mapeamento dos diferentes tipos de clima para tradução
const traducaoClima= {
    'thunderstorm with light rain': 'trovoada com chuva fraca',
    'thunderstorm with rain': 'trovoada com chuva',
    'thunderstorm with heavy rain': 'trovoada com chuva forte',
    'light thunderstorm': 'trovoada leve',
    'thunderstorm': 'trovoada',
    'heavy thunderstorm': 'forte tempestade',
    'ragged thunderstorm': 'tempestade irregular',
    'thunderstorm with light drizzle': 'trovoada com leve garoa',
    'thunderstorm with drizzle': 'trovoada com garoa',
    'thunderstorm with heavy drizzle': 'trovoada com forte garoa',
    'light intensity drizzle': 'chuvisco de baixa intensidade',
    'drizzle': 'chuvisco',
    'heavy intensity drizzle': 'chuvisco de forte intensidade',
    'light intensity drizzle rain': 'chuvisco de baixa intensidade com chuva',
    'drizzle rain': 'chuvisco exponencial',
    'heavy intensity drizzle rain': 'chuva forte com garoa',
    'shower rain and drizzle': 'chuva e garoa',
    'shower drizzle': 'chuvisco forte',
    'light rain': 'chuva leve',
    'clear sky': 'ceu limpo',
    'few clouds': 'poucas nuvens',
    'scattered clouds': 'nuvens dispersas',
    'broken clouds': 'nuvens separadas',
    'overcast clouds': 'muitas nuvens',  
    'moderate rain': 'chuva moderada',
    'heavy intensity rain': 'chuva de forte intensidade',
    'very heavy rain': 'chuva muito forte',
    'extreme rain': 'chuva extrema',
    'freezing rain': 'chuva congelante',
    'light intensity shower rain': 'banho de chuva de fraca intensidade',
    'shower rain': 'banho de chuva',
    'heavy intensity shower rain': 'banho de chuva de intensidade pesada',
    'ragged shower rain': 'banho de chuva irregular',
    'light snow': 'leve neve',
    'snow': 'neve',
    'heavy snow': 'neve pesada',
    'sleet': 'granizo',
    'light shower sleet': 'neve com granizo leve',
    'shower sleet': 'neve com granizo',
    'light rain and snow': 'chuva fraca e neve',
    'rain and snow': 'chuva e chuva',
    'light shower snow': 'chuva leve de neve',
    'shower snow': 'chuva de neve',
    'heavy shower snow': 'forte chuva de neve',
    'mist': 'névoa',
    'smoke': 'fumaça',
    'haze': 'neblina',
    'sand/dust whirls': 'redemoinhos de areia/poeira',
    'fog': 'névoa',
    'sand': 'areia',
    'dust': 'poeira',
    'volcanic ash': 'cinza vulcanica',
    'squalls': 'ventania',
    'tornado': 'tornado'
}

// Rota para obter os dados do clima de uma cidade específica
app.get('/climatempo/:cidade', async (req, res) => {
    // Obtém o nome da cidade da URL da requisição
    const city = req.params.cidade;

    try {
        // Realiza uma requisição para a API de clima utilizando a biblioteca Axios
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

        // Verifica se a requisição foi bem-sucedida (status 200)
        if (response.status === 200) {
            // Obtém a descrição do clima da resposta e traduz para o idioma desejado
            const clima = traducaoClima[response.data.weather[0].description] || response.data.weather[0].description;

            // Cria um objeto contendo os dados relevantes do clima
            const weatherData = {
                Temperatura: response.data.main.temp,
                Umidade: response.data.main.humidity,
                VelocidadeDoVento: response.data.wind.speed,
                Clima: clima
            };

            // Envia os dados do clima como resposta para o cliente
            res.send(weatherData);
        } else {
            // Se a requisição não foi bem-sucedida, retorna uma mensagem de erro com o código de status
            res.status(response.status).send({ erro: 'Erro ao obter dados meteorológicos' });
        }
    } catch (error) {
        // Se ocorrer um erro durante a requisição, retorna uma mensagem de erro com o código de status 500
        res.status(500).send({ erro: 'Erro ao obter dados meteorológicos', error });
    }
});
