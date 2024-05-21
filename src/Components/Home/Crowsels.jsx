import React from 'react'
import img1 from '../Images/1.jpg'
import img2 from '../Images/image2.webp'
import img3 from '../Images/image1.webp'

const Crowsels = () => {
    return (
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mt-20 mb-7"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div class="carousel-caption">
              <h5 className="text-xl font-bold " style={{ color: "yellow" }}>
                Why Square Collab?
              </h5>
              <span>
                Empowering researchers and supervisors to achieve groundbreaking
                discoveries through seamless collaboration by connecting minds
                and fostering innovation. Our platform bridges the gap between
                researchers and their mentors
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div class="carousel-caption">
              <h5 className="text-xl text-blue-900 font-bold">
                Find Your Best Research Partner
              </h5>
              <span className='text-black'>
                The best research is done when we challenge each other's ideas
                and build on them together
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div class="carousel-caption ">
              <h5 className="text-xl text-purple-800 font-bold">
                Square Collab's Motto
              </h5>
              <span className="text-gray-600">
                Research is creating new knowledge. Collaboration is amplifying
                that knowledge.
              </span>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default Crowsels


