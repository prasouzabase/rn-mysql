// index.js
(async () => {
    const db = require("./bd");
    console.log('Começou!');
    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.consultarClientes();
    /*  console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({ nome: "Zé", idade: 18, uf: "SP" });
    console.log(result);
    console.log(clientes);
    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(6, { nome: "Zé Mané", idade: 19, uf: "SP" });
    console.log(result2);*/
    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(4);
    console.log(result3);

})();
