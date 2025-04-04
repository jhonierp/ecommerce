import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubcategoryEntity } from '../../shared/entities/subcategory.entity';
import { CreateOrUpdateSubcategoryDto } from '../dto/subcategory.dto';

@Injectable()
export class SubcategoriesService {
  constructor(
    @InjectRepository(SubcategoryEntity)
    private readonly subcategoryRepository: Repository<SubcategoryEntity>,
  ) {}

  async create(createSubcategoryDto: CreateOrUpdateSubcategoryDto): Promise<SubcategoryEntity> {
    const subcategory = this.subcategoryRepository.create(createSubcategoryDto);
    return await this.subcategoryRepository.save(subcategory);
  }

  async findAll(): Promise<SubcategoryEntity[]> {
    return await this.subcategoryRepository.find({
      relations: ['category', 'products'],
    });
  }

  async findOne(id: number): Promise<SubcategoryEntity> {
    const subcategory = await this.subcategoryRepository.findOne({
      where: { id },
      relations: ['category', 'products'],
    });

    if (!subcategory) {
      throw new NotFoundException(`Subcategory with ID ${id} not found`);
    }

    return subcategory;
  }

  async update(
    id: number,
    updateSubcategoryDto: CreateOrUpdateSubcategoryDto,
  ): Promise<SubcategoryEntity> {
    const subcategory = await this.findOne(id);
    Object.assign(subcategory, updateSubcategoryDto);
    return await this.subcategoryRepository.save(subcategory);
  }

  async remove(id: number): Promise<void> {
    const subcategory = await this.findOne(id);
    await this.subcategoryRepository.softDelete(id);
  }
}
