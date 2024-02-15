import React, { useState } from "react";
import Ratings from "../components/Ratings";

const reviewtitle = "Add a Review";
let ReviewList = [
  {
    imgUrl: "/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews 4
        </li>
      </ul>

      {/* desc & review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">{review.desc}</div>
                </div>
              </li>
            ))}
          </ul>

          {/* add review field */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewtitle}</h5>
              </div>

              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                  />
                </div>

                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email *"
                  />
                </div>

                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating</span>
                    <Ratings />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type Here Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            suscipit doloribus explicabo tempora maiores eos aliquid, ex ipsum
            iure sapiente distinctio ipsam nulla vero tenetur. Cum praesentium
            ducimus nesciunt quod ? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus nihil dolorem delectus perspiciatis
            expedita excepturi minima? Ab optio possimus cupiditate. Ipsa, odio
            quae fugiat distinctio facere assumenda autem labore. Facere!
          </p>

          <div className="post-item">
            <div className="post-thumb">
              <img src="/images/shop/01.png" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
                  itaque!
                </li>
                <li>
                  rem ipsum dolor, sit amet consectetur adipisicing elit. At,
                  itaque!
                </li>
                <li>
                  orem ipsum dolor, sit amet consectetur adipisicing elit. At,
                  itaque!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
                  itaque!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
                  itaque!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
                  itaque!
                </li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              inventore porro vel dignissimos, ut unde eaque eligendi explicabo
              in amet incidunt provident voluptas. Possimus numquam deserunt
              nulla debitis, asperiores earum? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Animi reiciendis necessitatibus,
              excepturi, aliquam dolores ab ratione quas illum fugiat doloremque
              distinctio, nam dolore voluptas quibusdam debitis quam molestias
              beatae eveniet!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
