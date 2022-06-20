import { ProductItem } from "../ProductItem";

interface Product {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
}

interface SearchResultsProps {
  totalPrice: number;
  results: Product[];
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {
  
  return (
    <div>
      <h2>{totalPrice}</h2>
       {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList}  />
        )
      })}

    </div>
  )
}