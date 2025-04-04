import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateOrUpdateProductDto } from '../dto/product.dto';
import { ProductsEntity } from '../../shared/entities/product.entity';

@Injectable()
export class ProductsUseCase {
  constructor(private readonly productsService: ProductsService) {}

  async create(createProductDto: CreateOrUpdateProductDto): Promise<number> {
    const product = await this.productsService.create(createProductDto);
    if (!product.id) {
      throw new NotFoundException('Error creating product');
    }
    return product.id;
  }

  async findAll(): Promise<ProductsEntity[]> {
    return await this.productsService.findAll();
  }

  async findOne(id: number): Promise<ProductsEntity> {
    return await this.productsService.findOne(id);
  }

  async update(id: number, updateProductDto: CreateOrUpdateProductDto): Promise<void> {
    await this.productsService.update(id, updateProductDto);
  }

  async remove(id: number): Promise<void> {
    await this.productsService.remove(id);
  }
}
