import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Snitch</h2>
        <p>Redefining everyday fashion for the bold and modern man.</p>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Shop</h4>
          <ul>
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Bottomwear</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Returns & Exchanges</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <Link to={"https://www.instagram.com/snitch.co.in/"}>Instagram</Link>
            <Link to={"https://x.com/snitchindia"}>Twitter</Link>
            <Link to={"https://www.facebook.com/snitch.co.in"}>Facebook</Link>
            <Link to={"https://www.linkedin.com/company/snitch-co-in/"}>LinkedIn</Link>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Snitch. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer