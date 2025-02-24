import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main id="maincontent" className="main-section full-width">
      <div className="content-section drug-list-page">
        <div className="left-block">
          <div className="white-bg">
            <div className="filter">
              <h1 className="filter-title">Filters</h1>
              <div id="algolia_filter">
                <div className="filter-option-title">
                  <h2>Brands</h2>
                </div>
                <div className="layer-scroll" id="brand_filter"></div>
                <div className="filter-option-title">
                  <h2>Manufacturers</h2>
                </div>
                <div className="layer-scroll" id="manufacturer_filter"></div>
                <div className="filter-option-title">
                  <h2>Categories</h2>
                </div>
                <div className="layer-scroll" id="category_filter"></div>
                <div className="filter-option-title algolia_facet_benefits">
                  <h2>Benefits</h2>
                </div>
                <div className="layer-scroll" id="algolia_facet_benefits"></div>
                <div className="filter-option-title algolia_facet_product_characteristic">
                  <h2>Product Characteristic</h2>
                </div>
                <div className="layer-scroll" id="algolia_facet_product_characteristic"></div>
                <div className="filter-option-title algolia_facet_skin_concern">
                  <h2>Skin Concern</h2>
                </div>
                <div className="layer-scroll" id="algolia_facet_skin_concern"></div>
                <div className="filter-option-title algolia_facet_skin_type">
                  <h2>Skin Type</h2>
                </div>
                <div className="layer-scroll" id="algolia_facet_skin_type"></div>
                <div className="filter-option-title">
                  <h2>Price</h2>
                </div>
                <div className="layer-scroll" id="alg_price_filter"></div>
                <div className="filter-option-title">
                  <h2>Discount</h2>
                </div>
                <div className="layer-scroll" id="alg_discount_filter"></div>
                <div className="filter-option-title">
                  <h2>Availability</h2>
                </div>
                <div className="layer-scroll" id="stock_filter"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-block">
          <div className="white_bg prodcut-incart" id="product_page_cart_count" style={{ display: 'none' }}>
            <h5 className="gray-txt">IN CART</h5>
            <span className="items"></span>
            <hr />
            <a href="https://www.netmeds.com/checkout/cart" className="btn_link">Proceed to checkout</a>
          </div>
          <div className="clearfix"></div>
          <div id="search_upload_prescription" className="white_bg search_upload_pres" style={{ display: 'block' }}>
            <h2>Don't have time? <span>Quick Order</span></h2>
            <span className="txt">Upload doctor's prescription and we will add the medicines for you!</span>
            <div className="clearfix"></div>
            <div className="f-msg">Order within 2 minutes</div>
            <div id="upload_prescription_button" className="uBtn">
              <a href="/upload_prescription">UPLOAD</a>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="toolbar">
            <div className="search-title">Showing all results for <span className="sear-name" id="search_kwrd"></span></div>
            <div className="sort-option">Sort by: <div id="sort-by"></div></div>
            <div className="clearfix"></div>
          </div>
          <div className="white-bg" id="algolia_box">
            <div className="all-product">
              <div className="product-list">
                <div id="algolia_hits"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
