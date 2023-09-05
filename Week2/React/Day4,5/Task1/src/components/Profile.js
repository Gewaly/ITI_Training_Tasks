

import React from "react";

export default function Profile(props) {
  console.log(props.person);
  const { name, img } = props.person;
  
  console.log(props.img);
  return (
    <div className="container">
      <div className="row">
      <div className="col-6">

      <h1>{name} Todos</h1>
      <img src={img} alt="Hedy Lamarr" className="photo" />
      <ul style={{ backgroundColor: "black", color: "white" }}>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
    <div className="col-6">

<h1>{name} Todos</h1>
<img src={img} alt="Hedy Lamarr" className="photo" />
<ul style={{ backgroundColor: "black", color: "white" }}>
  <li>Invent new traffic lights</li>
  <li>Rehearse a movie scene</li>
  <li>Improve the spectrum technology</li>
</ul>
</div>
    </div>
    </div>
  );
}
