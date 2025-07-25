import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiArrowRightLongLine } from '@remixicon/react';
import './Home.css' // Remember to check Home.css for image paths too!

const Home = () => {
  const navigate = useNavigate();

  const [cards, setcards] = useState([
    {
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4099-01_1_0627dc13-1eaa-4985-893b-ffdcd77f7104.jpg?v=1752399457&quality=20",
      title: "Aesthetic Shirts",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2657-03_3_d1536dff-b519-4959-99c2-7fa3b772337c.jpg?v=1751971769&quality=20",
      title: "Aesthetic T-shirts",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSD4086-02_1_e0cfd7fe-a0fb-4f34-bfd4-2e38bd35352b.jpg?v=1752660610&quality=20",
      title: "Relaxed Fit Jeans",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msr5382-06_1_e8d6d53b-6292-45ac-a0de-819fa0b5c0e4.jpg?v=1751362737&quality=20",
      title: "Relaxed Fit Trousers",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4284-04_1_f90ab4ce-0110-4398-b019-789c9b4311a6.jpg?v=1752601727&quality=20",
      title: "Cotton Kurta",
    }
  ]);

  useEffect(() => {
    const hoodietext = document.querySelector(".content p");

    if (hoodietext) {

      const text = hoodietext.textContent;
      const words = text.split(' ');

      hoodietext.innerHTML = words.map(word =>
        `<span class="word">${word}</span>`
      ).join(' ')
      }
    }, []);


  return (
    <div className='home'>
      <div className='herosection'>
        <h1 className='herotext'>Everyday Fashion, Redefined.</h1>
        <button onClick={() => navigate('/Products')} className='shopnowbtn'>Shop now</button>
      </div>
      <div className='featuredproducts'>
        <h1>Featured Products: Stand Out, <br /> Stay Ahead</h1>
        <div className='product-cards'>
          {cards.map((card, index) => {
            return <div key={index} className='card'>
              <img src={card.img} />
              <div className='mask'></div>
              <h4>{card.title}</h4>
            </div>
          })}
        </div>
        <button className="gotoshopbtn" onClick={() => navigate('/Products')}>
          <span className="text">Go to Shop</span>
          <span className="arrow"><RiArrowRightLongLine size={30} /></span>
        </button>
      </div>
      <div className='newproducts'>
        <div className='content'>
          <h1>Nightfall<br />Oversized<br />Hoodie</h1>
          <p>Discover the perfect blend of comfort, style, and versatility with our latest collection of men's hoodies. Whether you're layering up for the gym, stepping out for coffee, or just chilling at home,<br /> our hoodies deliver effortless streetwear vibes with premium fabrics that move with you.</p>
          <button className='hoodiebtn' onClick={() => { navigate("/Products") }}>
            <span className='hoodie'>Get Hoodie</span>
            <span className='hoodiearrow'><RiArrowRightLongLine size={30} /></span>
          </button>
        </div>
        <div className="newproductimg">
          {/* Removed public/ from these paths */}
          <div className="img img-a"><img src="/Home/Hoodiemain.jpg" alt="hoodiemain" /></div>
          <div className="img img-b"><img src="/Home/Hoodie1.jpg" alt="hoodie1" /></div>
          <div className="img img-c"><img src="/Home/Hoodie2.jpg" alt="hoodie2" /></div>
          <div className="img img-d"><img src="/Home/Hoodie3.jpg" alt="hoodie3" /></div>
          <div className="img img-e"><img src="/Home/Hoodie4.jpg" alt="hoodie4" /></div>
        </div>
      </div>
      <div className='smallabout'>
        <h1>We Are Snitch</h1>
        <button className="smallaboutbtn" onClick={() => navigate('/About')}>
          <span className="text">Learn More About Us</span>
          <span className="arrow"><RiArrowRightLongLine size={30} /></span>
        </button>
      </div>
    </div>
  )
}

export default Home