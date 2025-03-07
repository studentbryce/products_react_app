import Products from './Products.json';
import './styles.css';

function ProductDetail({ id }) {
    const product = Products.find((product) => product.id === Number(id));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div class="product-container">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} className="product-image" />
            <p><strong>Price: </strong>${product.price}</p>
            <p><strong>Description: </strong>{product.description}</p>
        </div>
    );
}

export default ProductDetail;

