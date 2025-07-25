import { RiArrowDownLongFill, RiArrowRightLongLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { productcontext } from "../context/Productcontext";
import './Products.css';


const Products = () => {
  const navigate = useNavigate();
  const [products] = useContext(productcontext);

  return (
    <div className="products">
      <div className="productsbanner">
        <h1>Explore Our New Products Range</h1>
        <button className="heredownbtn">
          <span className="text">Start now</span>
          <span className="arrow"><RiArrowDownLongFill size={30} /></span>
        </button>
      </div>

      {/* Shirts */}
      <div className="shirts">
        <h1>Shirts</h1>
        <div className="shirtgrid">
          {products.shirts.map((item) => (
            <div className="shirtcard" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="productinfo">
                <h3>{item.name}</h3>
                <button className="seedetailsbtn" onClick={() => navigate(`/Products/Productdetails/${item.id}`)}>
                  <span className="text">See details</span>
                  <span className="arrow"><RiArrowRightLongLine size={25} /></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* T-Shirts */}
      <div className="Tshirts">
        <h1>T-Shirts</h1>
        <div className="Tshirtgrid">
          {products.tshirts.map((item) => (
            <div className="Tshirtcard" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="productinfo">
                <h3>{item.name}</h3>
                <button className="seedetailsbtn" onClick={() => navigate(`/Products/Productdetails/${item.id}`)}>
                  <span className="text">See details</span>
                  <span className="arrow"><RiArrowRightLongLine size={25} /></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jeans */}
      <div className="Jeans">
        <h1>Jeans</h1>
        <div className="Jeansgrid">
          {products.jeans.map((item) => (
            <div className="Jeanscard" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="productinfo">
                <h3>{item.name}</h3>
                <button className="seedetailsbtn" onClick={() => navigate(`/Products/Productdetails/${item.id}`)}>
                  <span className="text">See details</span>
                  <span className="arrow"><RiArrowRightLongLine size={25} /></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trousers */}
      <div className="trousers">
        <h1>Trousers</h1>
        <div className="trousersgrid">
          {products.trousers.map((item) => (
            <div className="trouserscard" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="productinfo">
                <h3>{item.name}</h3>
                <button className="seedetailsbtn" onClick={() => navigate(`/Products/Productdetails/${item.id}`)}>
                  <span className="text">See details</span>
                  <span className="arrow"><RiArrowRightLongLine size={25} /></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shorts */}
      <div className="shorts">
        <h1>Shorts</h1>
        <div className="shortsgrid">
          {products.shorts.map((item) => (
            <div className="shortscard" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="productinfo">
                <h3>{item.name}</h3>
                <button className="seedetailsbtn" onClick={() => navigate(`/Products/Productdetails/${item.id}`)}>
                  <span className="text">See details</span>
                  <span className="arrow"><RiArrowRightLongLine size={25} /></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Hoodies  */}
      <div className="hoodies">
        <h1>Hoodies</h1>
        <div className="hoodiesgrid">
          {products.hoodies.map((item) => (
            <div className="hoodiescard" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="productinfo">
                <h3>{item.name}</h3>
                <button className="seedetailsbtn" onClick={() => navigate(`/Products/Productdetails/${item.id}`)}>
                  <span className="text">See details</span>
                  <span className="arrow"><RiArrowRightLongLine size={25} /></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* KURTAS  */}
      <div className="kurtas">
        <h1>kurtas</h1>
        <div className="kurtasgrid">
          {products.kurtas.map((item) => (
            <div className="kurtascard" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="productinfo">
                <h3>{item.name}</h3>
                <button className="seedetailsbtn" onClick={() => navigate(`/Products/Productdetails/${item.id}`)}>
                  <span className="text">See details</span>
                  <span className="arrow"><RiArrowRightLongLine size={25} /></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
