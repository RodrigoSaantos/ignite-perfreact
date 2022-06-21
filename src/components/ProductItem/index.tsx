import { memo, useState } from "react";
import { AddProductToWishListProps } from "../AddProductToWishList";
import dynamic from 'next/dynamic';

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('../AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
  loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingWishList, setIsAddingWishList] = useState(false)
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingWishList(true)}>Adicionar aos favoritos</button>
      {isAddingWishList && (
        <AddProductToWishList
        onAddToWishList={() => onAddToWishList(product.id)}
        onRequestClose={() => setIsAddingWishList(false)}
      />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});