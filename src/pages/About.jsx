import { useEffect } from "react"
import "./About.css"

const About = () => {

  useEffect(() => {
    const sharktanktext = document.querySelector(".st");

    if (sharktanktext) {

      const text = sharktanktext.textContent;
      const words = text.split(' ');

      sharktanktext.innerHTML = words.map(word =>
        `<span class="word">${word}</span>`
      ).join(' ')
      }
    }, []);

  return (
    <div className='about'>
      <div className="abouthero">
        <h1>About Us</h1>
        <p>At SNITCH, we redefine the modern shopping experience, merging seamless digital convenience with engaging in-store interactions.<br /> Whether you're shopping online or visiting our immersive retail spaces, we ensure a smooth, stylish, and hassle-free journey that caters to today's fashion-forward men.</p>
      </div>
      
      <div className="whyus">
        <div className="whyusimg">
          <img src="/public/Aboutus/aboutus.avif" alt="" />
        </div>
        <div className="whyustext">
          <h1>Why Shop at SNITCH?</h1>
          <p>
            ✔ Contemporary Menswear That Keeps Up with You<br />
            ✔ Effortless Online & In-Store Shopping Experience<br />
            ✔ Premium Fabrics, Trend-Driven Designs, & Smart Tailoring<br />
            ✔ Seamless Omnichannel Flexibility – Shop Anywhere, Anytime<br />
            ✔ Fashion for Every Season, Occasion & Mood<br />
          </p>
          <p>
            Your wardrobe should work as hard as you do. SNITCH makes fashion easy, exciting, and accessible—whether you're scrolling from your couch or styling in-store.
          </p>
        </div>
      </div>
      
      <div className="sharktank">
        <div className="sttext">
          <p className="st">
            Our journey hit a major milestone when we stepped onto the stage of Shark Tank India. In one of the most iconic moments on the show,<br /> we secured an All-Shark Deal — a rare vote of confidence from all five sharks.<br /> Their belief in our vision wasn't just an investment — it was a statement.<br /> A statement that Indian fashion is ready to make noise, globally.
            From day one, we've been about more than just clothes. We're a culture. A movement. A community of creators, risk-takers, and rule-breakers. Whether it's sharp shirts, edgy streetwear, or elevated basics — we make fashion that fuels individuality.
            We're Snitch — proudly Indian, proudly fearless.
          </p>
        </div>
        <div className="stimg">
          <img src="/public/Aboutus/sharktank.webp" alt="" />
        </div>
      </div>
      
      <div className="ourhappyusers">
        <h2>What Our Customers Say</h2>
        <div className="user-reviews">
          <div className="usercard">
            <div className="userimg">
              <img src="/public/Aboutus/Aboutususer3.jpg" alt="Arjun Patel"/>
            </div>
            <div className="review">
              <p>"Absolutely love the quality and style! SNITCH has become my go-to for trendy menswear. The fit is perfect every time."</p>
            </div>
            <div className="user-name">Arjun Patel</div>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>

          <div className="usercard">
            <div className="userimg">
              <img src="/public/Aboutus/Aboutususer4.jpg" alt="Rohan Shah"/>
            </div>
            <div className="review">
              <p>"The shopping experience is seamless! From online Browse to in-store pickup, everything is so smooth and professional."</p>
            </div>
            <div className="user-name">Rohan Shah</div>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>

          <div className="usercard">
            <div className="userimg">
              <img src="/public/Aboutus/Aboutususer1.jpg" alt="Vikram Singh"/>
            </div>
            <div className="review">
              <p>"Premium fabrics and contemporary designs - exactly what I was looking for. SNITCH understands modern men's fashion."</p>
            </div>
            <div className="user-name">Vikram Singh</div>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>

          <div className="usercard">
            <div className="userimg">
              {/* Corrected path for Aboutususer2.jpg - it had 'Public' instead of 'public' */}
              <img src="/public/Aboutus/Aboutususer2.jpg" alt="Karan Mehta"/> 
            </div>
            <div className="review">
              <p>"Been shopping with SNITCH for over a year now. Consistently great quality and their customer service is top-notch!"</p>
            </div>
            <div className="user-name">Karan Mehta</div>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lastsection">
        <h1>Upgrade Your Shopping Experience – Explore SNITCH Today!</h1>
        <p>Ready to redefine your wardrobe? Shop the latest men's fashion online or visit your nearest store for a hands-on experience.<br /> From effortless joggers and co-ords to bold sunglasses and statement accessories, SNITCH has it all.</p>
        <p> 🔥 Stay ahead of trends. Elevate your style. Shop SNITCH now! 🔥</p>
      </div>
    </div>
  )
}

export default About;