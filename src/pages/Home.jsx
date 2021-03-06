import React from "react"
import ShoeCover from "../images/banner_img.png"
import { Link } from "react-router-dom"
function Home() {
  return (
    <>
      <div className="h-100vh">
        <div className="row row-sm-unreverse h-100pr">
          <div className="col-4 banner d-flex p-5 justify-content-center align-items-center">
            <div>
              <h1 class="banner-heading">This is a shoe store</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                architecto nostrum esse quia ab natus ad corporis aperiam
                exercitationem. Consequatur in voluptates sunt omnis porro
                repellat exercitationem nam illo velit autem quo tempora odio
                mollitia, iste accusantium officiis, distinctio tempore totam
                numquam nisi? Consequuntur beatae repellat dicta labore
                repudiandae possimus.
              </p>
              <Link to="/store">
                <button className="button mt-1">Browse Products</button>
              </Link>
            </div>
          </div>
          <div
            className="col-6 h-100pr banner d-sm-none"
            style={{ backgroundImage: `url(${ShoeCover})` }}
          />
        </div>
      </div>
    </>
  )
}

export default Home
