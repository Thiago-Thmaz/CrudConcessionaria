const { buscarUm } = require('../controllers/CarroController');
const db = require ('../db');


module.exports = {
    //BUSCAR TODOS OS CARROS
buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM carros', (error, results)=>{
                if(error) {
                    rejeitado(error);
                     return; 
                }
                aceito(results);
            });
        });
    },
    //BUSCAR UM CARRO
    buscarUm: (codigo) => {
return new Promise((aceito, rejeitado)=>{

    db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results)=>{
        if(error) {rejeitado(error); return; }
        if(results.length > 0){
            aceito(results[0]);
        }else{
            aceito(false);
                    }
                 });
             });
         },

         
         //INSERIR CARRO NOVO
         inserir: (modelo, placa) => {
            return new Promise((aceito, rejeitado)=>{
            
                db.query('INSERT INTO carros (modelo, placa) VALUES (?,?) ', 
                    [modelo, placa], 
                    (error, results)=>{
                        if(error) {rejeitado(error); return; }
                        aceito(results.insertCodigo);
              
                            }
                        );
                 });
            },

            //ALTERAR DADOS DO CARRO
            alterar: (codigo, modelo, placa) => {
                return new Promise((aceito, rejeitado)=>{
                
                    db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?', 
                        [modelo, placa, codigo], 
                        (error, results)=>{
                            if(error) {rejeitado(error); return; }
                            aceito(results);
                  
                                }
                            );
                     });
                },

                //EXCLUIR CARRO
                excluir: (codigo) => {
                    return new Promise((aceito, rejeitado)=>{
            
                        db.query('DELETE FROM carros WHERE codigo = ?',[codigo], (error, results)=>{
                            if(error) {rejeitado(error); return; }
                            aceito(results);
                        });
                    });
                }
        };
