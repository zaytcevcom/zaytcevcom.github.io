import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProductList } from 'src/widgets/ProductList';
import { LoadMoreButton } from 'src/shared/LoadMoreButton';
import { useDispatch, useSelector } from 'react-redux';
import { loadMore, selectProducts } from 'src/store/slices/productsSlice';

export const ProductsPage: FC = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const handleLoadMore = () => dispatch(loadMore());

  const { ref } = useInView({
    onChange: () => handleLoadMore(),
  });

  return (
    <>
      <ProductList products={products} />
      <div ref={ref}>
        <LoadMoreButton label={'Load more'} onClick={handleLoadMore} />
      </div>
    </>
  );
};
