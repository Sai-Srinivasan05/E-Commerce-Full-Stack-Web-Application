import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
// import { animate } from 'animejs';

const ShopCategory = (props) => {

  const [allproducts, setAllProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const fetchInfo = () => { 
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
    fetch(`${apiUrl}/allproducts`) 
            .then((res) => res.json()) 
            .then((data) => {
              setAllProducts(data);
              setSortedProducts(data);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }

    const sortProducts = (products, sortType) => {
      switch(sortType) {
        case 'price-low-high':
          return [...products].sort((a, b) => a.new_price - b.new_price);
        case 'price-high-low':
          return [...products].sort((a, b) => b.new_price - a.new_price);
        case 'name-a-z':
          return [...products].sort((a, b) => a.name.localeCompare(b.name));
        case 'name-z-a':
          return [...products].sort((a, b) => b.name.localeCompare(a.name));
        case 'newest':
          return [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
        default:
          return products;
      }
    };

    const handleSortChange = (sortType) => {
      setSortBy(sortType);
      const filtered = allproducts.filter(item => props.category === item.category);
      const sorted = sortProducts(filtered, sortType);
      setSortedProducts(sorted);
      setShowSortDropdown(false);
      
      // Animation temporarily disabled
    };

    useEffect(() => {
      fetchInfo();
    }, []);

    useEffect(() => {
      if (allproducts.length > 0) {
        const filtered = allproducts.filter(item => props.category === item.category);
        const sorted = sortProducts(filtered, sortBy);
        setSortedProducts(sorted);
        
        // Animation temporarily disabled
      }
    }, [allproducts, props.category, sortBy]);
    
  const categoryProducts = sortedProducts.filter(item => props.category === item.category);
  const totalProducts = categoryProducts.length;
  const displayedProducts = Math.min(12, totalProducts);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 - {displayedProducts}</span> out of {totalProducts} Products
        </p>
        <div className="shopcategory-sort" onClick={() => setShowSortDropdown(!showSortDropdown)}>
          Sort by <img src={dropdown_icon} alt="" className={showSortDropdown ? 'rotated' : ''} />
          {showSortDropdown && (
            <div className="sort-dropdown">
              <div onClick={() => handleSortChange('default')}>Default</div>
              <div onClick={() => handleSortChange('price-low-high')}>Price: Low to High</div>
              <div onClick={() => handleSortChange('price-high-low')}>Price: High to Low</div>
              <div onClick={() => handleSortChange('name-a-z')}>Name: A to Z</div>
              <div onClick={() => handleSortChange('name-z-a')}>Name: Z to A</div>
              <div onClick={() => handleSortChange('newest')}>Newest First</div>
            </div>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {categoryProducts.slice(0, 12).map((item, i) => (
          <Item 
            id={item.id} 
            key={item.id} 
            name={item.name} 
            image={item.image}  
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>
      {totalProducts > 12 && (
        <div className="shopcategory-loadmore">
          <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
