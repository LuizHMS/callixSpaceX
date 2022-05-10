//Fica a cargo de fazer as Rotas do backend e enviar a resposta
const express  = require('express')
//Fazer requisição https para a api da SpaceX
const https = require('https');

const app = express()

app.get("/api/lancamentos", (req,res) => {
	let options = {
		  hostname: 'api.spacexdata.com',
		  port: 443,
		  path: '/v4/launches',
		  method: 'GET',
		  headers: {
		    'Content-Type': 'application/json',
		  }
		};

	var reqGet = https.request(options, function(getResponse) {
		var response = '';
   	    getResponse.on('data', function(chunk) {
   	    	//junta os pedaços da resposta a fim de ter um objeto completo
	        response += chunk;
	        
	    });
	    getResponse.on('end', ()=>{
	    	//função executada após toda a informação ser retornada da requisição
	    	res.json(response);
	    })

	});
	reqGet.end();
	reqGet.on('error', function(e) {
	    console.error(e);
	});

})

app.listen(5000, () =>{console.log("servidor iniciado na porta 5000")})