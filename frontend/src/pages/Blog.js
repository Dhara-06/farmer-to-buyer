import React from "react";

function Blog() {
  return (
    <div className="container mt-5">
      <h1 className="text-success fw-bold text-center">Our Blogs</h1>
      <p className="text-center">
        Stay updated with the latest trends in agriculture and farming.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card shadow mb-4">
            <img src="/images/blog1.jpg" className="card-img-top" alt="Blog 1" />
            <div className="card-body">
              <h4 className="card-title">Organic Farming Trends</h4>
              <p className="card-text">
                Organic farming is on the rise with increasing demand for
                chemical-free produce. Farmers are adapting sustainable
                methods to meet consumer needs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow mb-4">
            <img src="/images/blog2.jpg" className="card-img-top" alt="Blog 2" />
            <div className="card-body">
              <h4 className="card-title">Farm to Table</h4>
              <p className="card-text">
                The farm-to-table movement connects farmers directly with
                buyers, ensuring freshness, fair prices, and stronger
                communities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow mb-4">
            <img src="/images/blog3.jpg" className="card-img-top" alt="Blog 3" />
            <div className="card-body">
              <h4 className="card-title">Smart Agriculture Tools</h4>
              <p className="card-text">
                From AI-driven crop monitoring to IoT devices, smart tools
                are transforming agriculture and making farming more
                efficient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
