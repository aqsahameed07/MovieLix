import './Footer.css';

export const Footer = () => {
    return (
        <div className='footer-main-div'>
            <div className="footer">
            <div className="footer-intro">
                <h1>📌 Welcome to MovieLix.com, have ultimate experience to watch movies!</h1>
                <p>🎬</p>
                <p>📺</p>
                <p>💳</p>
                <p>🎥</p>
            </div>
            <div className="footer-sections">
                <div className="footer-section">
                    <h1>SHOPPING</h1>
                    <p>Computer Store</p>
                    <p>Laptop Store</p>
                    <p>Accessories</p>
                    <p>Sales & Discount</p>
                </div>
                <div className="footer-section">
                    <h1>EXPERIENCE</h1>
                    <p>Contact Us</p>
                    <p>Payment Method</p>
                    <p>Delivery</p>
                    <p>Return and Exchange</p>
                </div>
                <div className="footer-section">
                    <h1>NEWSLETTER</h1>
                    <p>Be the first to know about new arrivals, sales & promos!</p>
                    <input 
                        type="email" 
                        placeholder="Your Email"
                        className="newsletter-input"
                    />
                </div>
            </div>
        </div>
        
        <div className='last-section'>
           <hr/>
           <p>Designed and Code by Aqsa Hameed</p>
           </div>

        </div>
    );
}
