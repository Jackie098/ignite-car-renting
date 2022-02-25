import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database_ignite"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  });
});

/**
 * Certo! Entendi. Mas por que criamos a interface IOptions ? 
Boa pergunta! A propriedade host por padrão é uma propriedade somente de leitura. 
Se tentarmos sobrescrever o valor dela, o typescript recusa. Por esse motivo criamos 
uma interface, somente com a propriedade host e forçamos que o tipo nas nossas options 
seja da interface. Quando fazemos  const newOptions = options as IOptions o nosso atributo 
newOptions e options se comportam como se fossem o mesmo objeto e aí com isso conseguimos 
sobrescrever o valor do host
 */
