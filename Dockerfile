# Definir a imagem base
FROM node:14

# Criar e definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos do projeto para dentro do container
COPY . .

# Instalar as dependências do projeto
RUN npm install

# Expôr a porta que o app irá rodar
EXPOSE 8103

# Definir o comando para rodar a aplicação
CMD ["node", "app.js"]
