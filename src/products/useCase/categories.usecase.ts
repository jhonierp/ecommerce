import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CreateOrUpdateCategoryDto } from '../dto/category.dto';
import { CategoryEntity } from '../../shared/entities/category.entity';

@Injectable()
export class CategoriesUseCase {
  constructor(private readonly categoriesService: CategoriesService) {}

  async createCategory(createCategoryDto: CreateOrUpdateCategoryDto): Promise<number> {
    const category = await this.categoriesService.create(createCategoryDto);
    if (!category.id) {
      throw new NotFoundException('Error creating category');
    }
    return category.id;
  }

  async getAllCategories(): Promise<CategoryEntity[]> {
    return await this.categoriesService.findAll();
  }

  async getCategoryById(id: number): Promise<CategoryEntity> {
    return await this.categoriesService.findOne(id);
  }

  async updateCategory(
    id: number,
    updateCategoryDto: CreateOrUpdateCategoryDto,
  ): Promise<void> {
    await this.categoriesService.update(id, updateCategoryDto);
  }

  async deleteCategory(id: number): Promise<void> {
    await this.categoriesService.remove(id);
  }
}
