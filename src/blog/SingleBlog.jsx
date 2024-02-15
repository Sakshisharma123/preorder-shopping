import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PopularPost from "../shop/PopularPost";
import Tags from "../shop/Tags";
const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];
const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  console.log(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));
  console.log(result);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                        
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h2>{item.title}</h2>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Harum atque est perferendis
                                  rerum, at alias magni ad suscipit
                                  necessitatibus adipisci sunt dolorem
                                  consequuntur eos voluptas rem molestias nemo.
                                  Itaque, perspiciatis? Lorem ipsum dolor, sit
                                  amet consectetur adipisicing elit. Aut atque,
                                  hic natus amet sequi neque, quis voluptatem
                                  sint blanditiis quasi ipsam et libero earum
                                  aliquid? Necessitatibus, magnam quidem!
                                  Deleniti, impedit?
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Provident impedit
                                    similique iste sed esse officiis tempora
                                    mollitia, molestiae iusto, ea ullam cumque
                                    error quia accusantium praesentium
                                    reiciendis! Sapiente, possimus tenetur.
                                  </p>
                                  <cite>
                                    <a href="#">.. Harman Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Provident impedit similique
                                  iste sed esse officiis tempora mollitia,
                                  molestiae iusto, ea ullam cumque error quia
                                  accusantium praesentium reiciendis! Sapiente,
                                  possimus tenetur.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.png"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Harum atque est perferendis
                                  rerum, at alias magni ad suscipit
                                  necessitatibus adipisci sunt dolorem
                                  consequuntur eos voluptas rem molestias nemo.
                                  Itaque, perspiciatis? Lorem ipsum dolor, sit
                                  amet consectetur adipisicing elit. Aut atque,
                                  hic natus amet sequi neque, quis voluptatem
                                  sint blanditiis quasi ipsam et libero earum
                                  aliquid? Necessitatibus, magnam quidem!
                                  Deleniti, impedit?
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://www.youtube.com/watch?v=bMknfKXIFA8"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Sit explicabo distinctio
                                  laudantium exercitationem beatae neque
                                  eligendi culpa nam itaque odio dicta tenetur
                                  perspiciatis dignissimos quisquam doloremque,
                                  quaerat adipisci. Totam, officia! Lorem ipsum
                                  dolor sit amet, consectetur adipisicing elit.
                                  Reprehenderit, ab ad, illo praesentium
                                  temporibus exercitationem, suscipit alias
                                  perspiciatis similique sunt possimus error
                                  voluptatibus incidunt est molestias odio iusto
                                  aliquid ducimus?
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev">
                                <i className="icofont-double-left"></i>
                                Previous Blog
                            </a>
                            <a href="#" className="title">
                                Evisculate Parallel Processes via Technica Sound Modes Authoritative
                            </a>
                        </div>
                        <div className="right">
                            <a href="#" className="prev">
                                <i className="icofont-double-right"></i>
                                Previous Blog
                            </a>
                            <a href="#" className="title">
                                Evisculate Parallel Processes via Technica Sound Modes Authoritative
                            </a>
                        </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-12">
                <aside>
                    <Tags/>
                    <PopularPost/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
