import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {Products, ProductDocument} from './schemas/product.schema'
import {Model} from 'mongoose'

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products.name) private productModule:Model<ProductDocument>) {

  }
  async create(createProductDto: CreateProductDto) {
    const itemCreate = await this.productModule.create(createProductDto);
    return itemCreate;
  }

  async findAll() {
    const itemCreate = await this.productModule.find({});
    return itemCreate;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
