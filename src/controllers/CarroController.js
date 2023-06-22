const CarroServices = require('../services/CarroServices');
const CarroService = require('../services/CarroServices');

module.exports = {

    //BUSCAR TODOS OS CARROS
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]};

        let carros = await CarroServices.buscarTodos();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    },

    //BUSCAR UM CARRO
     buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let carro = await  CarroServices.buscarUm(codigo);

        if(carro){
            json.result = carro;
        }

        res.json(json);
    },


    //INSERIR UM CARRO
    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;
        
        if(modelo && placa){
            let carroCodigo = await  CarroServices.inserir(modelo, placa);
            json.result = {
                codigo: carroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    //ALTERAR DADOS DO CARRO
    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;
        
        if(codigo && modelo && placa){
            await  CarroServices.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    //EXCLUIR UM CARRO
    excluir: async(req, res) =>{
        let json = {error:'', result:{}};

        await CarroServices.excluir(req.params.codigo);

        res.json(json);
    }

    
}