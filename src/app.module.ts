import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JoborderModule } from './joborder/joborder.module';
import { GraphqlModule } from './graphql/graphql.module';
import { TransactionModule } from './transaction/transaction.module';
import { UnitinfoModule } from './unitinfo/unitinfo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),
    MongooseModule.forRootAsync({
      useFactory: (config:ConfigService) => (
        {
          uri: config.get<string>('MONGO_URL')
        }
      ),
      inject:[ConfigService]
    }),
    
    JoborderModule,
    GraphqlModule,
    TransactionModule,
    UnitinfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
