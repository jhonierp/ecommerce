import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from '../../shared/entities/product.entity';
import { CreateOrUpdateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>,
  ) {}

  async create(createProductDto: CreateOrUpdateProductDto): Promise<ProductsEntity> {
    const product = this.productsRepository.create(createProductDto);
    return await this.productsRepository.save(product);
  }

  async findAll(): Promise<ProductsEntity[]> {
    return await this.productsRepository.find({
      relations: ['subcategory', 'reviews'],
    });
  }

  async findOne(id: number): Promise<ProductsEntity> {
    const product = await this.productsRepository.findOne({
      where: { id },
      relations: ['subcategory', 'reviews'],
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async update(
    id: number,
    updateProductDto: CreateOrUpdateProductDto,
  ): Promise<ProductsEntity> {
    const product = await this.findOne(id);
    Object.assign(product, updateProductDto);
    return await this.productsRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.productsRepository.softDelete(id);
  }
}
