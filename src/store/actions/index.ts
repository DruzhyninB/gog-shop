import { CartActionsType } from './cart.action';
import { ProductActionsType } from './product.action';

export * from './cart.action';
export * from './product.action';

export type AppActions = CartActionsType | ProductActionsType;