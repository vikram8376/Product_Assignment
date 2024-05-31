import React, { useState, useEffect } from "react";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = async () => {
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      if (resp) {
        setProduct(resp.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-dark">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          T A N N T R I M
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-toggle="collapse"
          data-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a className="nav-link" href="/">
                <i className="bi bi-search text-white fs-5"></i>
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="/">
                <i className="bi bi-person text-white fs-5"></i>
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="/">
                <svg
                  aria-label="Saved"
                  className="x1lliihq x1n2onr6 x5n08af mx-2 my-2"
                  fill="currentColor"
                  height="20"
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <title>Saved</title>
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="bi bi-bag text-white fs-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg">
        <div
          className="collapse navbar-collapse justify-content-center "
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item me-5">
              <a className="nav-link text-white" href="/">
                Bags
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-white" href="/">
                Travel
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-white" href="/">
                Accessories
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-white" href="/">
                Gifting
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-white" href="/">
                Jewelry
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container category-icons text-center my-4">
        <div className="row">
          <div className="col">
            <i className="bi bi-luggage text-white "></i>
            <p className="text-white">All bags</p>
          </div>
          <div className="col">
            <i className="bi bi-backpack2 text-white"></i>
            <p className="text-white">All bags</p>
          </div>
          <div className="col">
            <i className="bi bi-bag-dash-fill text-white"></i>
            <p className="text-white">All bags</p>
          </div>
          <div className="col">
            <i className="bi bi-bag-heart text-white"></i>
            <p className="text-white">Laptop Sleeve</p>
          </div>
          <div className="col">
            <i className="bi bi-laptop-fill text-white"></i>
            <p className="text-white">vanity Pouch</p>
          </div>
          <div className="col">
            <i className="bi bi-duffle text-white"></i>
            <p className="text-white">Tote bags</p>
          </div>
          <div className="col">
            <i className="bi bi-suitcase-lg text-white"></i>
            <p className="text-white">Duffle bags</p>
          </div>
          <div className="col">
            <i className="bi bi-suitcase2 text-white"></i>
            <p className="text-white">Messenger Bags</p>
          </div>
        </div>
      </div>

      <div className="container product-grid mt-5">
        <div className="row">
          {product.map((item) => (
            <div className="col-md-3 product-card" key={item.id}>
              <div className="card bg-light ">
                <div>
                  <svg
                    aria-label="Saved"
                    style={{ float: "right" }}
                    class="x1lliihq x1n2onr6 x5n08af mx-2 my-2 "
                    fill="currentColor"
                    height="20"
                    role="img"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <title>Saved</title>
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                  <img
                    src={item.image}
                    className="card-img-top p-3"
                    alt={item.title}
                  />
              
                </div>
                <div className="card-body p-0 pt-3 pb-1 bg-dark text-center">
                  <h5 className="card-title text-white">{item.title}</h5>
                  <p className="card-text d-flex justify-content-between">
                    <div className="price">
                      <span className="text-white fs-6">₹{item.price}</span>
                      <span className="original-price small">₹8999</span>
                      <span className="discount-price price small">
                        50% off
                      </span>
                    </div>
                    <div className="text-white me-2">
                      <i class="bi bi-bag-plus fs-4"></i>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
