import knex from 'knex';
import path from 'path';

const connection = knex({
    client : 'sqlite3',
    connection: {
        //__dirname -> variável Global, retorna caminho para o diretório atual
        filename: path.resolve(__dirname,'database.sqlite')
    },
    useNullAsDefault: true,
});

export default connection;