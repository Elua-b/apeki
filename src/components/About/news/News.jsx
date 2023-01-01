import React from "react";
import "./News.css";
function News() {
  const data = [
    {
      id: 1,
      title: "Our Mission",
      text: "We want to provide a secure and caring environment where every aspect of learning is valued and is seen an exciting, vibrant experience which is part of a life long journey and where each member of a school community is able to reach his/her full potential .All our young people:are highly valued and expected to achieve their full potential, no matter what their socio-economic background;•	are supported and encouraged to lead healthy and active lives making sensible choices, whilst respecting the views and attitudes of others.	benefit from an inclusive ethos, excellent teaching and a broad and balanced curriculum underpinned by strong leadership, in a local school",
    },
    {
      id: 2,
      title: "Our Vision",
      text: "“Our Vision is ambitious and wide ranging for the whole community. It is characterised by our commitment to providing a rounded educational experience so that:All our young people will enjoy their learning, understand that we all continue to learn throughout our lives, attain high outcomes and be helped to become confident individuals and responsible citizens, whilst making excellent progress.”",
    },
    {
      id: 3,
      title: "Our Goals",
      text: "•	Our unconditional positive regard ensures that every young person is highly valued and expected to achieve their potential:every young person has the right to be successful and has ability toachieve, no matter what their socio-economic background;there is no limit to achievement intelligence can be developed	each student must know what to do in order to improve and how to ”",
    },
  ];
  return (
    <div className="about">
      <h1 style={{ textAlign: "center" }}>
        ABOUT <span style={{ color: "green" }}>APEKI-AMIZERO</span>{" "}
      </h1>
      {data.map((value, id) => {
        return (
          <div key={id}>
            <div className="title">
              <h3>{value.title}</h3>
            </div>
            <div className="text2">{value.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default News;
