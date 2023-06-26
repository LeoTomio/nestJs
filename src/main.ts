import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  let port = "3005"
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Só aceita os dados que estão em cada entidade, se for passado algum que nao exista, simplesmente ignora
    forbidNonWhitelisted:true, //Não permite que sejam enviados dados que nao estão na entidade, dando erro e dizendo quais são
    transform:true //transformar o objeto que é enviado, tipando ele com o que estiver na entidade
  }))

  await app.listen(port);
  console.log(`Api rodando na porta ${port} `)
}
bootstrap();

