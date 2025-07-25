import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { productcontext } from '../context/Productcontext';
import { RiArrowLeftLongLine, RiStarFill, RiStarLine, RiHeart3Line, RiShoppingCart2Line } from '@remixicon/react';
import "./Productdetails.css";

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductDetails = () => {
  const [products] = useContext(productcontext);
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const navigate = useNavigate();

  // Mock data for sizes and reviews (you can move this to your context later)
  const mockSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const mockReviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      comment: "Excellent quality shirt! The fabric is premium and fits perfectly. Highly recommended!",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Prit Singh",
      rating: 4,
      comment: "Good quality and comfortable to wear. The color is exactly as shown in the picture.",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Amit Kumar",
      rating: 5,
      comment: "Amazing product! The material is soft and the stitching is perfect. Worth every penny.",
      date: "2024-01-05"
    }
  ];

  // Find product by ID across all categories
  const findProductById = (productId) => {
    if (!products) return null;
    
    const allProducts = [
      ...(products.shirts || []),
      ...(products.tshirts || []),
      ...(products.trousers || []),
      ...(products.jeans || []),
      ...(products.shorts || []),
      ...(products.kurtas || []),
      ...(products.hoodies || [])
    ];
    
    return allProducts.find(item => item.id === parseInt(productId));
  };

  const product = findProductById(id);

  // Calculate average rating
  const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length;

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? 
        <RiStarFill key={i} size={16} className="star-filled" /> : 
        <RiStarLine key={i} size={16} className="star-empty" />
      );
    }
    return stars;
  };

  if (!products) {
    return (
      <div className="product-details-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-details-container">
        <div className="not-found">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // No images available
  if (!product.images || product.images.length === 0) {
    return (
      <div className="product-details-container">
        <div className="no-images">
          <h2>{product.name}</h2>
          <p>No images available for this product.</p>
          <div className="product-info">
            <p className="price">{product.price}</p>
            <p className="description">
              High quality, durable, and styled for comfort and everyday wear.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <button className='goback' onClick={() => navigate(-1)}>
        <RiArrowLeftLongLine size={30} />
      </button>
      
      <div className="slider-container">
        {/* Main Image Slider */}
        <Swiper
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="main-swiper"
        >
          {product.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img 
                src={img} 
                alt={`${product.name} view ${index + 1}`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        {product.images.length > 1 && (
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-swiper"
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
            }}
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={img} 
                  alt={`${product.name} thumbnail ${index + 1}`}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className='productinfo'>
        <div className="product-header">
          <h1>{product.name}</h1>
          <div className="rating-section">
            <div className="stars">
              {renderStars(Math.floor(averageRating))}
            </div>
            <span className="rating-text">({averageRating.toFixed(1)}) • {mockReviews.length} reviews</span>
          </div>
          <p className="price">{product.price}</p>
        </div>

        {/* Size Selection */}
        <div className='size-section'>
          <h3>Size</h3>
          <div className='sizes'>
            {mockSizes.map(size => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          {!selectedSize && <p className="size-hint">Please select a size</p>}
        </div>

        {/* Quantity Selection */}
        <div className="quantity-section">
          <h3>Quantity</h3>
          <div className="quantity-controls">
            <button 
              className="qty-btn" 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button 
              className="qty-btn" 
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='action-buttons'>
          <button 
            className={`cart-btn ${!selectedSize ? 'disabled' : ''}`}
            disabled={!selectedSize}
          >
            <RiShoppingCart2Line size={20} />
            Add to Cart
          </button>
          <button className='wishlist-btn'>
            <RiHeart3Line size={20} />
            Wishlist
          </button>
        </div>

        {/* Product Details Tabs */}
        <div className="product-tabs">
          <div className="tab-headers">
            <button 
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({mockReviews.length})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-content">
                <p>
                  These are premium quality clothes is crafted from the finest materials to ensure comfort and durability. 
                  Perfect for both formal and casual occasions, featuring a modern fit that complements your style.
                </p>
                <ul>
                  <li>Premium 100% cotton fabric</li>
                  <li>Machine washable</li>
                  <li>Available in multiple sizes</li>
                  <li>Modern slim fit design</li>
                  <li>Easy care instructions</li>
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="specifications-content">
                <table>
                  <tr>
                    <td>Material</td>
                    <td>100% Cotton</td>
                  </tr>
                  <tr>
                    <td>Fit</td>
                    <td>Slim Fit</td>
                  </tr>
                  <tr>
                    <td>Care Instructions</td>
                    <td>Machine wash cold</td>
                  </tr>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-content">
                <div className="reviews-summary">
                  <div className="rating-overview">
                    <div className="average-rating">
                      <span className="rating-number">{averageRating.toFixed(1)}</span>
                      <div className="stars">
                        {renderStars(Math.floor(averageRating))}
                      </div>
                      <p>Based on {mockReviews.length} reviews</p>
                    </div>
                  </div>
                </div>
                
                <div className="reviews-list">
                  {mockReviews.map(review => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <h4>{review.name}</h4>
                        <div className="review-rating">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="review-comment">{review.comment}</p>
                      <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;