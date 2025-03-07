import { Link } from 'react-router-dom';
import Products from './Products.json';
import './styles.css';

function NavMenu() {
    return (
        <>
            <nav>
            <h2>Products</h2>
                {Products.map(product => (
                    <Link key={product.id} to={`/${product.id}`}>
                        {product.name}
                    </Link>
                ))}
            </nav>
        </>
    );
}

export default NavMenu;