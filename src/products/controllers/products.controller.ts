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
import { ProductsUseCase } from '../useCase/products.usecase';
import { CreateOrUpdateProductDto } from '../dto/product.dto';
import { CreatedResponse } from '../dto/response/created-response.dto';
import { UpdatedResponse } from '../dto/response/updated-response.dto';
import { 
  CREATED_MESSAGE, 
  UPDATED_MESSAGE, 
  DELETED_MESSAGE 
} from '../const/messages.const';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsUseCase: ProductsUseCase) {}

  @Post('/create')
  @ApiOkResponse({ type: CreatedResponse })
  async create(
    @Body() productDto: CreateOrUpdateProductDto,
  ): Promise<CreatedResponse> {
    const productId = await this.productsUseCase.create(productDto);
    return {
      message: CREATED_MESSAGE,
      id: productId,
      statusCode: HttpStatus.CREATED,
    };
  }

  @Get()
  async findAll() {
    return await this.productsUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.productsUseCase.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOkResponse({ type: UpdatedResponse })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() productDto: CreateOrUpdateProductDto,
  ): Promise<UpdatedResponse> {
    await this.productsUseCase.update(id, productDto);
    return {
      message: UPDATED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.productsUseCase.remove(id);
    return {
      message: DELETED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }
}
