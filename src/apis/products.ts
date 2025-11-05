import { Product } from '@/types/product';
import api from './api';

const END_POINT = '/products/';

interface ProductsResponse {
  list: Product[];
  totalCount: number;
}

export const getProductsList = (option = {}):Promise<ProductsResponse> => {
  return api.get(END_POINT, {
    params: option
  });
}

export const getTargetProduct = (productId:number)=>{
  return api.get(`${END_POINT}${productId}/`);
}