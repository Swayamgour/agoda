import React from "react";

const blogPosts = [
  {
    title: "10 European ski destinations you should visit this winter",
    date: "April 06, 2022",
    image: "/img/blog/1.png",
    link: "#",
  },
  {
    title: "Booking travel during Corona: good advice in an uncertain time",
    date: "April 06, 2022",
    image: "/img/blog/2.png",
    link: "#",
  },
  {
    title: "Where can I go? 5 amazing countries that are open right now",
    date: "April 06, 2022",
    image: "/img/blog/1.png",
    link: "#",
  },
  {
    title: "The best times & places to see the Northern Lights in Iceland",
    date: "April 06, 2022",
    image: "/img/blog/2.png",
    link: "#",
  },
];

const BlogInspirationSection = () => {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container" >
        <div className="row" >
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Get inspiration for your next trip</h2>
              <p className="sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames</p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-40">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`col-lg-3 col-sm-6`}
              // data-anim-child={`slide-up delay-${3 + index}`}
            >
              <a href={post.link} className="blogCard -type-1 d-block">
                <div className="blogCard__image">
                  <div className="ratio ratio-1:1 rounded-4 rounded-8">
                    <img
                      className="img-ratio js-lazy"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                </div>

                <div className="mt-20">
                  <h4 className="text-dark-1 text-18 fw-500">{post.title}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">{post.date}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInspirationSection;
