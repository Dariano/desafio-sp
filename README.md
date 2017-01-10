# Projeto de gerenciamento de tarefas

Criar uma ferramenta de gerenciamento de projetos e tarefas.

A aplicação foi desenvolvida usando a stack MEAN.

###O que precisa para rodar a aplicação?

Instalar o NODEJS, usei a versão 5.5.x

Instalar o bower

> npm install bower -g

Instalar o MONGODB, usei a varsão 3.2.x
- Depois de instalado inicia o serviço do mongodb.

Depois de instalado é só executar dos comandos para baixas as dependências.

> npm install

> bower install

Para rodar a aplicação execute o comando

> npm start

Abra o navegador no endreço 

> http://localhost:3000/#/

Você pode pode configurar o nginx no aquivo `/etc/nginx/sites-enabled/default`

```
    upstream project {
        server localhost:3000;
    }

    server {
        listen 80;

        access_log /var/log/nginx/desfio-sp.log;    

        location / {
            root /home/dario/Documentos/projetos/desafio-sp/public/;
        
        expires 12h;
        }

        location /api {
            proxy_pass http://project;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        
        expires 10m;
        }

        location ~* \.(css|js|gif|jpe?gipng)$ {
        expires 100h;
        }
    }

```

Ou você pode subir a aplicação usando `docker-compose` rodando o comando

    ```sh

        docker-compose build

        docker-compose up
    ```