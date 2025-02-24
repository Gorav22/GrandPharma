import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="page-header">
      <div className="oHoldSec" style={{ display: 'none' }}>
        <div className="oHold"></div>
      </div>
      <div className="page-headerSec">
        <div className="panel-wrapper">
          <div className="panel-header">
            <div className="logo">
              <a href="https://www.netmeds.com/">
                <img
                  className="logoWeb"
                  src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1704908302_1704906198_1673595841_1663609483_netmeds-new-logo.svg"
                  alt="Netmeds.com, India ki Online Pharmacy"
                />
              </a>
            </div>
            <div className="search-bar">
              <div className="block-search">
                <div className="pinCode" id="location_box">
                  <span className="delivery_section">
                    Deliver to <span id="delivery_details" className="pinNum delivery_details"></span>
                  </span>
                </div>
                <div className="delivery_popup" style={{ display: 'none' }}>
                  <div className="overlay_bg"></div>
                  <div className="pinoce_content">
                    <div id="saved_location">
                      <div className="title">Where do you want the delivery?</div>
                      <div className="clearfix"></div>
                      <span id="delivery_txt">Get access to your Addresses, Orders, and Wishlist</span>
                      <div className="clearfix"></div>
                      <button type="button" className="signin_btn">Sign in to see your location</button>
                      <div className="saved_location_swiper swiper-container">
                        <div className="swiper-wrapper" id="saved_addresses">Loading..</div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div id="delivery_details">
                      <div className="enter_pin">Or Enter Pincode</div>
                      <span>Select pincode to see product availability.</span>
                      <div className="clearfix"></div>
                      <div className="pCode_form">
                        <div id="rel_pincode_form">
                          <div className="pin_detail">
                            <input type="tel" className="inp_text" name="rel_pincode" id="rel_pincode" placeholder="Enter Pincode" autoComplete="off" maxLength={6} />
                            <div className="clearfix"></div>
                          </div>
                          <div className="clearfix"></div>
                          <div id="rel_pin_msg"></div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="detect_location">Detect my location <i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: '12px', display: 'none' }}></i></div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                <div className="auto-search">
                  <form id="search_form" action="https://www.netmeds.com/catalogsearch/result" method="GET">
                    <div className="search-section">
                      <input tabIndex={0} id="search" type="text" name="q" className="input-text algolia-search-input aa-input headerSearchBox" autoComplete="off" spellCheck="false" autoCorrect="off" autoCapitalize="off" placeholder="Search for medicine & wellness products…" />
                    </div>
                  </form>
                  <div className="recent-searches" style={{ display: 'none' }}></div>
                  <div className="recent_search_box" style={{ display: 'none' }}>
                    <div className="recent_search">
                      <div className="recent_h5">
                        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/history.svg" alt="Recent Searches" /> Recent Searches
                        <span className="clear-btn" id="clear_recent_search">Clear All</span>
                      </div>
                      <ul id="recent_search_list"></ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="upload_prescription_button" className="uPres">
                <a className="mini_banner_partercode" href="https://www.netmeds.com/upload_prescription">Upload</a>
              </div>
              <div className="new_offers">
                <a className="new_offers_icon" href="https://www.netmeds.com/offers">Offers</a>
              </div>
              <div data-block="minicart" className="mini-cart" id="minicart_btn">
                <a href="/checkout/cart">
                  <div className="text">
                    <span className="counter-number"></span> Cart
                  </div>
                </a>
                <div className="minicart_container">
                  <div className="mc_triangle"></div>
                  <div className="mc_content"></div>
                </div>
              </div>
              <div className="login">
                <div className="logged" style={{ display: 'none' }}>
                  <a href="https://www.netmeds.com/customer/account/login">Sign in / Sign up</a>
                  <a id="logged_user" href="https://www.netmeds.com/customer/account/"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
