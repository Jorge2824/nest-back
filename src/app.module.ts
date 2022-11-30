import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:96V8jJJeCV12DMmP@cluster0.nfig7vw.mongodb.net/test'),
    EmployeesModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
