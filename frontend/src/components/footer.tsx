import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-btm">
        <div className="offline-stores">
          <div className="stores-content">
            <img className="store-img" src="/assets/icons/store.png" alt="Offline Stores" />
            <div className="offline-content">
              <div className="ft-txt">
                <div className="number">1000+</div>
                <div>Offline Stores</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pincode">
          <div className="stores-content">
            <img className="pin-img" src="/assets/icons/location.png" alt="PAN India delivery" />
            <div className="offline-content">
              <div className="ft-txt">
                <div className="number">20000+</div>
                <div>Pincodes Served</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hp-customer">
          <div className="stores-content">
            <img className="user-img" src="/assets/icons/user.png" alt="Happy Customers" />
            <div className="offline-content">
              <div className="ft-txt">
                <div className="number">9M+</div>
                <div>Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="footer-logo">
          <img src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg" alt="Netmeds.com, India ki Online Pharmacy" />
        </div>
        <div className="footer-txt">Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 9 million happy customers – PAN India.</div>
      </div>
      <div className="footer-container">
        <ul>
          <li>
            <div className="footer_title">Company</div>
          </li>
          <li><a href="https://www.netmeds.com/about-us">About Netmeds</a></li>
          <li><a href="https://www.netmeds.com/testimonial">Customers Speak</a></li>
          <li><a href="https://www.netmeds.com/news">In the News</a></li>
          <li id="netmeds_career"><a href="https://rcareers.ril.com/sap%28bD1lbiZjPTQ0OQ==%29/bc/bsp/sap/zerec_home_page/home_page.do" target="_blank">Career</a></li>
          <li><a className="contact-link" href="https://www.netmeds.com/contact-us">Contact</a></li>
        </ul>
        <ul>
          <li>
            <div className="footer_title">Our policies</div>
          </li>
          <li><a href="https://www.netmeds.com/terms-and-conditions">Terms and Conditions</a></li>
          <li><a href="https://www.netmeds.com/privacy-policy">Privacy Policy</a></li>
          <li><a href="https://www.netmeds.com/fees-and-payments-policy">Fees and Payments Policy</a></li>
          <li><a href="https://www.netmeds.com/shipping-and-delivery-policy">Shipping and Delivery Policy</a></li>
          <li><a href="https://www.netmeds.com/return-refund-and-cancellation-policy">Return, Refund and Cancellation Policy</a></li>
          <li><a href="https://www.netmeds.com/editorial-policy">Editorial Policy</a></li>
        </ul>
        <ul>
          <li>
            <div className="footer_title">Shopping</div>
          </li>
          <li><a href="https://www.netmeds.com/prescriptions">Browse by A-Z</a></li>
          <li><a href="https://www.netmeds.com/medicine/manufacturers">Browse by Manufacturers</a></li>
          <li><a href="https://www.netmeds.com/health-library">Health Articles</a></li>
          <li className="sbilabhide"><a href="https://www.netmeds.com/offers">Offers / Coupons</a></li>
          <li><a href="https://www.netmeds.com/faqs">FAQs</a></li>
        </ul>
        <ul>
          <li>
            <div className="footer_title">Popular Categories</div>
          </li>
          <li><a href="https://www.netmeds.com/explore-fitness">Fitness</a></li>
          <li><a href="https://www.netmeds.com/explore-devices">Devices</a></li>
          <li><a href="https://www.netmeds.com/explore-personal-care">Personal Care</a></li>
          <li className="sbilabhide"><a href="https://www.netmeds.com/non-prescriptions/ayush/ayurvedic">Ayurveda</a></li>
          <li><a href="https://www.netmeds.com/non-prescriptions/ayush/homeopathy">Homeopathy</a></li>
          <li><a href="https://www.netmeds.com/explore-treatments">Treatments</a></li>
          <li><a href="https://www.netmeds.com/explore-sexual-wellness">Sexual Wellness</a></li>
          <li><a href="https://www.netmeds.com/non-prescriptions/surgical">Surgicals</a></li>
        </ul>
        <ul>
          <li>
            <div className="footer_title">Social</div>
          </li>
          <li><a href="https://www.netmeds.com/patientsalike" target="_blank">Patients Alike</a></li>
          <li><a href="https://www.facebook.com/NetMeds/" target="_blank">Facebook</a></li>
          <li><a href="https://twitter.com/NetMeds" target="_blank">Twitter</a></li>
          <li><a href="https://in.linkedin.com/company/netmeds-marketplace-limited" target="_blank">LinkedIn</a></li>
          <li><a href="https://www.youtube.com/channel/UCNuPx810akEPrbwAUpdNPyw" target="_blank">YouTube</a></li>
          <li><a href="https://www.instagram.com/netmedsofficial" target="_blank">Instagram</a></li>
          <li><a href="https://www.netmeds.com/refer-earn">Refer & Earn</a></li>
        </ul>
        <div className="subscribe">
          <div className="footer_title">SUBSCRIBE TO OUR NEWSLETTER</div>
          Get a free subscription to our health and fitness tips and stay tuned to our latest offers
          <form id="newsletter-validate-detail" name="" method="post">
            <div className="control">
              <input name="newsletter_email" type="email" maxLength={50} className="Required-newsletter-email validate-newsletter-emailid" id="newsletter_email" placeholder="Enter your email address" />
              <button className="go-btn" title="Go" type="submit">
                <img src="/assets/icons/send.png" alt="Send" />
              </button>
            </div>
            <div className="newsletter_error"></div>
            <div className="loaded"></div>
            <div className="load-out" style={{ display: 'none' }}></div>
          </form>
          <div className="clearfix"></div>
          <div className="app-store">
            <a className="store-icon" href="https://play.google.com/store/apps/details?id=com.NetmedsMarketplace.Netmeds&hl=en" rel="noopener" title="Download Netmeds App for Android from Google Play" target="_blank">
              <img src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png" alt="Google Play" title="Download Netmeds App for Android from Google Play" />
            </a>
            <a className="store-icon" href="https://itunes.apple.com/in/app/netmeds-india-ki-pharmacy/id1011070011?mt=8" title="Download Netmeds App for iOS from App Store" rel="noopener" target="_blank">
              <img src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png" alt="Download Netmeds App for iOS from App Store" title="Download Netmeds App for iOS from App Store" />
            </a>
          </div>
          <div className="clearfix"></div>
          <div className="app-div">
            <a href="https://www.netmeds.com/mobile-apps">Download App</a>
          </div>
        </div>
      </div>
      <div className="payment-partner1">
        <div className="ft-head">
          <h2>our payment partners</h2>
        </div>
        <div className="our-partners">
          <img className="g-img" src="/assets/global/images/footer-payment-icon/google-pay.svg" alt="Google Pay" />
          <img className="p-img" src="/assets/global/images/footer-payment-icon/phonepe.svg" alt="PhonePe" />
          <img className="pt-img" src="/assets/global/images/footer-payment-icon/paytm.svg" alt="Paytm" />
          <img className="s-img" src="/assets/global/images/footer-payment-icon/simpl.svg" alt="Simpl" />
          <img className="r-img" src="/assets/global/images/footer-payment-icon/rupay.svg" alt="Rupay" />
          <img className="v-img" src="/assets/global/images/footer-payment-icon/visa.svg" alt="Visa Card Network" />
          <img className="vs-img" src="/assets/global/images/footer-payment-icon/mastercard.svg" alt="MasterCard" />
        </div>
      </div>
      <div className="copyblock">
        <div className="footer_link"><a href="/prescriptions">Medicine</a></div>
        <div className="footer_link"><a href="/wellness">Wellness</a></div>
        <div className="footer_link sbilabhide"><a href="/health-packages">Lab Tests</a></div>
        <div className="footer_link"><a href="/beauty">Beauty</a></div>
        <div className="copy-txt">Copyright&copy; 2023. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
