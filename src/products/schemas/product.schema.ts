import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Decimal128, HydratedDocument, Types } from 'mongoose';

export type ProductDocument = HydratedDocument<Products>;

@Schema()
export class Products {
  @Prop([String])
  name: string[];

  @Prop([String])
  price: Decimal128;

  @Prop({ type: Object })
  brand: {
    name: string,
    slug: string
  };

  @Prop({ type: Object })
  category: {
    name: string,
    slug: string
  };

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  status: Boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Products);