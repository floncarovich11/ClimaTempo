
# Projeto de Consulta do Clima

*(HTML, CSS, JavaScript):*

- **HTML**: Cria a estrutura da página, incluindo um formulário para inserir o nome da cidade.
- **CSS**: Estiliza a página para uma melhor apresentação visual.
- **JavaScript**: Responsável pela interação com o usuário. Ele lida com o envio do formulário, fazendo solicitações para a API de clima e exibindo os resultados na página.

- **Express**: Cria um servidor web para fornecer dados de clima.
- **Axios**: Faz requisições HTTP para uma API de clima externa.
- **API de Clima Externa**: Fornece dados de clima com base no nome da cidade fornecido.
- **Tradução de Clima**: Traduz os tipos de clima da resposta da API para o idioma desejado.
- **Rota da API**: Define uma rota para receber requisições de consulta do clima para uma cidade específica.

## Funcionamento Geral:

1. O usuário insere o nome da cidade no formulário e envia.
2. O JavaScript envia uma requisição para o servidor.
3. O servidor utiliza o Axios para fazer uma requisição para a API de clima externa.
4. A API de clima retorna dados como temperatura, umidade e descrição do clima da cidade que foi fornecida.
5. Os dados são traduzidos conforme necessário e enviados de volta.
6. Por fina exibe os dados de clima na página para o usuário.

