
# Projeto de Consulta do Clima

## Frontend (HTML, CSS, JavaScript):

- **HTML**: Cria a estrutura da página web, incluindo um formulário para inserir o nome da cidade.
- **CSS**: Estiliza a página para uma melhor apresentação visual.
- **JavaScript**: Responsável pela interação com o usuário. Ele lida com o envio do formulário, fazendo solicitações para a API de clima e exibindo os resultados na página.

## Backend (Node.js):

- **Express**: Cria um servidor web para fornecer dados de clima.
- **Axios**: Faz requisições HTTP para uma API de clima externa.
- **API de Clima Externa**: Fornece dados de clima com base no nome da cidade fornecido.
- **Tradução de Clima**: Traduz os tipos de clima da resposta da API para o idioma desejado.
- **Rota da API**: Define uma rota para receber requisições de consulta do clima para uma cidade específica.

## Funcionamento Geral:

1. O usuário insere o nome da cidade no formulário e envia.
2. O frontend JavaScript envia uma requisição para o servidor backend.
3. O servidor backend utiliza o Axios para fazer uma requisição para a API de clima externa.
4. A API de clima retorna dados como temperatura, umidade e descrição do clima para a cidade fornecida.
5. Os dados são traduzidos conforme necessário e enviados de volta para o frontend.
6. O frontend exibe os dados de clima na página para o usuário.

---
