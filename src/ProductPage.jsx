import { useParams } from 'react-router-dom'
import ProductDetail from './ProductDetail';


function ProductPage() {
    const { id } = useParams();
    return (
        <ProductDetail
            id={id} />
    );
}

export default ProductPage;