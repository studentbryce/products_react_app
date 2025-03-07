import Products from './Products.json';
import './styles.css';

function ProductDetail({ id }) {
    const product = Products.find((product) => product.id === Number(id));

    if (!product) {
        return <p>Product not found</p>;
    }

    // If images are inside `src/images/`, resolve path dynamically
    const getImagePath = (imageName) => {
        return new URL(`./images/${imageName}`, import.meta.url).href;
    };

    return (
        <div className="product-container">
            <h1>{product.name}</h1>
            <img 
                src={getImagePath(product.image)} // ✅ Fix 1: Dynamic import
                alt={product.name} 
                className="product-image" 
            />
            <p><strong>Price: </strong>${product.price}</p>
            <p><strong>Description: </strong>{product.description}</p>
        </div>
    );
}

export default ProductDetail;


