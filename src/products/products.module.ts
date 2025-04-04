import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from '../shared/entities/product.entity';
import { CategoryEntity } from '../shared/entities/category.entity';
import { SubcategoryEntity } from '../shared/entities/subcategory.entity';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { SubcategoriesController } from './controllers/subcategories.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { SubcategoriesService } from './services/subcategories.service';
import { ProductsUseCase } from './useCase/products.usecase';
import { CategoriesUseCase } from './useCase/categories.usecase';
import { SubcategoriesUseCase } from './useCase/subcategories.usecase';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsEntity,
      CategoryEntity,
      SubcategoryEntity,
    ]),
  ],
  controllers: [
    ProductsController,
    CategoriesController,
    SubcategoriesController,
  ],
  providers: [
    ProductsService,
    CategoriesService,
    SubcategoriesService,
    ProductsUseCase,
    CategoriesUseCase,
    SubcategoriesUseCase,
  ],
  exports: [
    ProductsService,
    CategoriesService,
    SubcategoriesService,
    ProductsUseCase,
    CategoriesUseCase,
    SubcategoriesUseCase,
  ],
})
export class ProductsModule {}
