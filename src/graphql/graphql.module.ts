import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver,ApolloDriverConfig,ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PubSub } from 'graphql-subscriptions';




@Module({
    imports:[
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            subscriptions:{
                'graphql-ws':true
            },
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            playground: true,
            path: '/graphql'
        }),
    ],
    
})
export class GraphqlModule {}
