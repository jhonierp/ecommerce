import { Injectable, NotFoundException } from '@nestjs/common';
import { SubcategoriesService } from '../services/subcategories.service';
import { CreateOrUpdateSubcategoryDto } from '../dto/subcategory.dto';
import { SubcategoryEntity } from '../../shared/entities/subcategory.entity';

@Injectable()
export class SubcategoriesUseCase {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  async createSubcategory(createSubcategoryDto: CreateOrUpdateSubcategoryDto): Promise<number> {
    const subcategory = await this.subcategoriesService.create(createSubcategoryDto);
    if (!subcategory.id) {
      throw new NotFoundException('Error creating subcategory');
    }
    return subcategory.id;
  }

  async getAllSubcategories(): Promise<SubcategoryEntity[]> {
    return await this.subcategoriesService.findAll();
  }

  async getSubcategoryById(id: number): Promise<SubcategoryEntity> {
    return await this.subcategoriesService.findOne(id);
  }

  async updateSubcategory(
    id: number,
    updateSubcategoryDto: CreateOrUpdateSubcategoryDto,
  ): Promise<void> {
    await this.subcategoriesService.update(id, updateSubcategoryDto);
  }

  async deleteSubcategory(id: number): Promise<void> {
    await this.subcategoriesService.remove(id);
  }
}
