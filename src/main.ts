import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  let port = "3005"
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Api rodando na porta ${port} `)
}
bootstrap();

