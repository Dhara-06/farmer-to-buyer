import React from "react";

function Blog() {
  const blogs = [
    {
      img: require("../assets/blog11.jpg"),
      title: "Organic Farming Trends",
      text: "Organic farming is on the rise with increasing demand for chemical-free produce. Farmers are adapting sustainable methods to meet consumer needs."
    },
    {
      img: require("../assets/blog22.jpg"),
      title: "Farm to Table",
      text: "The farm-to-table movement connects farmers directly with buyers, ensuring freshness, fair prices, and stronger communities."
    },
    {
      img: require("../assets/blog33.jpg"),
      title: "Smart Agriculture Tools",
      text: "From AI-driven crop monitoring to IoT devices, smart tools are transforming agriculture and making farming more efficient."
    }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-success fw-bold text-center mb-3">Our Blogs</h1>
      <p className="text-center mb-4">
        Stay updated with the latest trends in agriculture and farming.
      </p>

      <div className="row">
        {blogs.map((blog, index) => (
          <div key={index} className="col-12 col-md-6">
            <div className="card shadow mb-4">
              <img
                src={blog.img}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "350px", objectFit: "cover", width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">{blog.title}</h4>
                <p className="card-text">{blog.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
