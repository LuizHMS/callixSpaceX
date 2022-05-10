# callixSpaceX
teste para a empresa callix consultando a base de dados da SpaceX


Os códigos tiveram como base esse tutorial: https://www.youtube.com/watch?v=w3vs4a03y3I

Para funcionar foi realizado os seguintes passos:
* Na pasta `server` foi executado o comando `npm run dev` (dessa forma é iniciado pelo nodemon e após salvar os arquivos do server o serviço e reiniciado automaticamente).
* Na pasta `client` foi executado o comando `npm start` para subir a aplicação react.

Pastas:
* server: contem o backend da aplicação onde no momento a única função é consultar a api da SpaceX e retornar todos os lançamentos.
* client: contém o frontend da aplicação contendo o código em react que apenas faz a consulta no backend e jogar no resultado na tela.

Foi realizado apenas um produto mínimo para consumir e enviar para a tela os dados da API.

Caso fosse uma tarefa a ser feita como um programador contratado esses seriam os seguintes passos:
* No frontend seria criado um arquivo para cada uma das informações solicitadas, possívelmente um botão para chamar cada uma delas.
* No backend seria utilizado a estrutura SOLIDS para separar controller/model/service e criado uma rota para cada controller representando a informação solicitada.

Considerações finais:
* Não foi um descaso, foi apenas um programador cansado de ter que fazer "desafios técnicos" que em 99% dos caso não condizem com o trabalho que será executado.
* Se fosse pra testar a lógica de programação, é bem melhor um teste via HackerRank ou similares.
* Acredito que o ideal mesmo é através de uma conversa verificar qual ou quais abordagem a pessoa utilizaria para resolver uma determinada situação, hipotética ou não.
