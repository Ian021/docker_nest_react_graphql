### Instruções para executar o backend

É necessário ter o docker e docker-compose instalados

abra o terminal na pasta "server", dentro da pasta do projeto "waproject"
execute o comando:

`docker-compose up`

### Banco de Dados

Para popular o banco de dados com valores de exemplo, rode o comando no terminal:

`docker exec -i mysql_db mysql -uroot -pian123 <./query.sql`
