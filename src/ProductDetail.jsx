import Products from './Products.json';
import './styles.css';

function ProductDetail({ id }) {
    const product = Products.find((product) => product.id === Number(id));

    if (!product) {
        return <p>Product not found</p>;
    }

    // ✅ Fix 1: Directly use path from `public/images/`
    const getImagePath = (imageName) => {
        return `/products_react_app/images/${imageName}`;  // Direct path from `public/images/`
    };

    return (
        <div className="product-container">
            <h1>{product.name}</h1>
            <img 
                src={getImagePath(product.image)}  // ✅ Now this should resolve to public/images/
                alt={product.name} 
                className="product-image" 
            />
            <p><strong>Price: </strong>${product.price}</p>
            <p><strong>Description: </strong>{product.description}</p>
        </div>
    );
}

export default ProductDetail;



