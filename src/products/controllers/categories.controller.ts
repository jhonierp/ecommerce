import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CategoriesUseCase } from '../useCase/categories.usecase';
import { CreateOrUpdateCategoryDto } from '../dto/category.dto';
import { CreatedResponse } from '../dto/response/created-response.dto';
import { UpdatedResponse } from '../dto/response/updated-response.dto';
import {
  CATEGORY_CREATED_MESSAGE,
  CATEGORY_UPDATED_MESSAGE,
  CATEGORY_DELETED_MESSAGE,
} from '../const/category-messages.const';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesUseCase: CategoriesUseCase) {}

  @Post('/create')
  @ApiOkResponse({ type: CreatedResponse })
  async create(
    @Body() categoryDto: CreateOrUpdateCategoryDto,
  ): Promise<CreatedResponse> {
    const categoryId = await this.categoriesUseCase.createCategory(categoryDto);
    return {
      message: CATEGORY_CREATED_MESSAGE,
      id: categoryId,
      statusCode: HttpStatus.CREATED,
    };
  }

  @Get()
  async findAll() {
    return await this.categoriesUseCase.getAllCategories();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.categoriesUseCase.getCategoryById(id);
  }

  @Patch('/update/:id')
  @ApiOkResponse({ type: UpdatedResponse })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryDto: CreateOrUpdateCategoryDto,
  ): Promise<UpdatedResponse> {
    await this.categoriesUseCase.updateCategory(id, categoryDto);
    return {
      message: CATEGORY_UPDATED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.categoriesUseCase.deleteCategory(id);
    return {
      message: CATEGORY_DELETED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }
}
