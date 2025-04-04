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
import { SubcategoriesUseCase } from '../useCase/subcategories.usecase';
import { CreateOrUpdateSubcategoryDto } from '../dto/subcategory.dto';
import { CreatedResponse } from '../dto/response/created-response.dto';
import { UpdatedResponse } from '../dto/response/updated-response.dto';
import {
  SUBCATEGORY_CREATED_MESSAGE,
  SUBCATEGORY_UPDATED_MESSAGE,
  SUBCATEGORY_DELETED_MESSAGE,
} from '../const/subcategory-messages.const';

@ApiTags('Subcategories')
@Controller('subcategories')
export class SubcategoriesController {
  constructor(private readonly subcategoriesUseCase: SubcategoriesUseCase) {}

  @Post('/create')
  @ApiOkResponse({ type: CreatedResponse })
  async create(
    @Body() createSubcategoryDto: CreateOrUpdateSubcategoryDto,
  ): Promise<CreatedResponse> {
    const subcategoryId = await this.subcategoriesUseCase.createSubcategory(createSubcategoryDto);
    return {
      message: SUBCATEGORY_CREATED_MESSAGE,
      id: subcategoryId,
      statusCode: HttpStatus.CREATED,
    };
  }

  @Get()
  async findAll() {
    return await this.subcategoriesUseCase.getAllSubcategories();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.subcategoriesUseCase.getSubcategoryById(id);
  }

  @Patch('/update/:id')
  @ApiOkResponse({ type: UpdatedResponse })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSubcategoryDto: CreateOrUpdateSubcategoryDto,
  ): Promise<UpdatedResponse> {
    await this.subcategoriesUseCase.updateSubcategory(id, updateSubcategoryDto);
    return {
      message: SUBCATEGORY_UPDATED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.subcategoriesUseCase.deleteSubcategory(id);
    return {
      message: SUBCATEGORY_DELETED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }
}
