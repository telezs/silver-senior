import React from "react";
import { motion } from "framer-motion";

const profileOne = [
  {
    id: 0,
    title: "Jenny Ho",
    subtitle: "Founder",
    text: "Caring for the elderly reflects our community's values, demonstrating compassion, empathy, and inclusivity. This support not only enhances their quality of life but also fosters a sense of value and connection, encouraging them to feel valued within our community.",
    img: "src/assets/teamphotos/jenny.JPG",
  },
  {
    id: 1,
    title: "Lan Anh Khuc",
    subtitle: "Founder",
    text: "This is all about connecting generations and empowering the hope in the hearts of our elders. Each act of kindness reassures them that they are always seen and loved.",
    img: "src/assets/teamphotos/lananh.JPG",
  },
  {
    id: 2,
    title: "Momone Kawaguchi",
    subtitle: "Event manager",
    text: "We, the younger generation, were able to live on what our older generation have built. It is one of the reasons why we are able to create our own happiness in our life. Now, it is time for us to show our gratitude and give back.",
    img: "src/assets/teamphotos/momo.JPG",
  },
];
const profileTwo = [
  {
    id: 3,
    title: "Sally Do",
    subtitle: "Media Manager",
    text: "Helping and supporting the elderly is an act of gratitude, repaying the love and care they once gave us. It is a way to honor and celebrate their wisdom through generations.",
    img: "src/assets/teamphotos/sally.JPG",
  },
  {
    id: 4,
    title: "Kim Tran",
    subtitle: "Treasurer",
    text: "Helping elders is not just a duty but a profound privilege. By offering our support and kindness, we honor their lifetime full of knowledge and experiences, ensuring they feel valued and cherished in their golden years.",
    img: "src/assets/teamphotos/kim.JPG",
  },
  {
    id: 5,
    title: "Eden Nguyen",
    subtitle: "Web Designer",
    text: "To honor the elderly is to honor the past, present, and future. Their stories connect generations, their needs reflect our humanity, and their well-being is a reflection of our society.",
    img: "src/assets/teamphotos/eden.JPG",
  },
];

export default function About() {
  const cardItemsOne = profileOne.map((profile) => (
    <div className="col-md-4">
      <motion.div
        whileHover={{scale: 1.1}}
        whileTap={{
          scale: 0.8,
          borderRadius: "100%",
        }}
      >
        <div className="card" key={profile.id}>
          <img src={profile.img} alt={profile.title} className="card-img-top" />
          <div className="card-body team-card">
            <h3 className="card-title">{profile.title}</h3>
            <h6 className="card-subtitle">{profile.subtitle}</h6>
            <p className="card-text">{profile.text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  ));
  const cardItemsTwo = profileTwo.map((profile) => (
    <div className="col-md-4">
      <motion.div
        whileHover={{scale: 1.1}}
        whileTap={{
          scale: 0.8,
          borderRadius: "100%",
        }}
      >
        <div className="card" key={profile.id}>
          <img src={profile.img} alt={profile.title} className="card-img-top" />
          <div className="card-body team-card">
            <h3 className="card-title">{profile.title}</h3>
            <h6 className="card-subtitle">{profile.subtitle}</h6>
            <p className="card-text">{profile.text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  ));
  return (
    <body>
      <div>
      <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 2, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
        <div className="container-fluid" id="about-us">
          <div className="row">
            <h1 className="about-us">
              Meet The Team
              <hr className="hr-about mx-auto" />
            </h1>
          </div>
          <div className="row about-us-card mx-auto">{cardItemsOne}</div>
          <div className="row about-us-card mx-auto">{cardItemsTwo}</div>
        </div>
        <div id="donate-section" className="p-5 text-center bg-image rounded-3">
          <div className=" ms-md-auto">
            <div className="d-flex justify-content-center align-items-center h-200">
              <div className="text-donate-link">
                <h1 className="mb-3">Join Us!</h1>
                <h4 className="mb-3">
                  Together, we can show our senior citizens our dearest
                  appreciation. "Donating to the elderly is a promise that their
                  twilight years will be filled with warmth, connection, and the
                  love theyve always given."
                </h4>
                <a
                  data-mdb-ripple-init
                  class="btn btn-donate btn-lg"
                  href="/donate"
                  role="button"
                >
                  Donate now
                </a>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </body>
  );
}
