import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

ConfigModule.forRoot({
  envFilePath: '.env',
});

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_MONGO_URL),
    ProductsModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
