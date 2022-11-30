import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop([String])
  name: string[];

  @Prop({ required: true })
  price: Types.Decimal128;
}

export const ProductSchema = SchemaFactory.createForClass(Product);