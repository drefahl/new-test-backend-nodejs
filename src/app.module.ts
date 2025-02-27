import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env.local', '.env'] }),
    MongooseModule.forRoot(
      process.env.MONGO_URI ?? 'mongodb://localhost:27017',
      {
        dbName: process.env.MONGO_DB ?? 'mydatabase',
        auth: {
          username: process.env.MONGO_USER ?? 'root',
          password: process.env.MONGO_PASSWORD ?? 'example',
        },
      },
    ),
    CategoriesModule,
    ProductsModule,
  ],
})
export class AppModule {}
