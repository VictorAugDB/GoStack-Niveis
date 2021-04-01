# Todos os níveis do bootcamp GoStack da Rocketseat

## Os projetos em sua versão final para desenvolvimento estão nas respectivas pastas:

### Nivel-04: Finalizando-backend-do-app (final backend);

### Nível-05: Finalizando-frontend-web-do-app (final frontend web);

### Nível-05: Finalizando-frontend-mobile-do-app (final frontend mobile);

## Endereço do Deploy da aplicação:
www.reactdeploy.celularsr.com.br

para instalar as dependências

yarn.

ou

npm install.

para rodar o projeto

yarn start

O projeto tem como objetivo criar um site para barbearias,
onde haverá os cabeleireiros que são os prestadores de serviço,
que estarão disponíveis para agendamento, em determinados horários
e o aplicativo visa facilitar esses agendamentos, por meio de uma interface
intuitiva e fácil de navegar, o aplicativo envia emails por meio do
amazon-ses, armazena a foto de perfil do usuário com o amazon s3.

Foi utilizado postgres para armazenamento das informaçoes dos usuários e prestadores,
assim como para agendamentos, dias disponíveis, horários disponíveis.

Foi utilizado mongodb para guardar as notificações e redis para armazenar o nome dos avatares.

Aplicação desenvolvida no frontend como ReactJS para a parte web da aplicação, React-Native para o mobile,
e NodeJS para o backend.

Obs: para que o amazon-ses e amazon-s3 funcione em sua máquina será necessário criar um arquivo .env baseado no arquivo .env.example.json
que está na pasta do projeto, para realizar login deverá colocar o secret.
