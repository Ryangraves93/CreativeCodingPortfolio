const objects = [
    {
      name: "Line Agency",
      desc: "Line agency using radian angle calculation.",
      path: "./ProjectPages/LineaAngle.html",
      imgSrc: "images/Ex9.png",
    },
    {
      name: "Sine wave using curve",
      desc: "Curve vertex agency using a sine wave.",
      path: "./ProjectPages/LineVertex.html",
      imgSrc: "images/Ex10.png",
    },
    {
      name: "Circle Packing",
      desc: "Circle packing algorithm.",
      path: "./ProjectPages/CirclePacking.html",
      imgSrc: "images/Ex11.png",
    },
    {
      name: "Font type in P5",
      desc: "Font type library functionality.",
      path: "./ProjectPages/Font.html",
      imgSrc: "images/Ex12.png",
    },
    {
      name: "CA2 Submission",
      desc: "WebGL sketch using an audio library for final submission.",
      path: "./ProjectPages/CA2Project.html",
      imgSrc: "images/CA2.png",
    },
  ];
  
  document.addEventListener("DOMContentLoaded", function (event) {
    const wrapper = document.getElementById("wrapper");
    const row = document.createElement("div");
  
    row.className =
      "row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3";
  
    objects.forEach((obj) => {
      const div = document.createElement("div");
      const card = document.createElement("div");
      const cardBodyDiv = document.createElement("div");
      const title = document.createElement("h3");
      const desc = document.createElement("p");
      const img = document.createElement("img");
      const a = document.createElement("a");
  
      title.innerHTML = obj.name;
      desc.innerHTML = obj.desc;
      a.innerHTML = "View Sketch";
      a.href = obj.path;
      a.setAttribute("target", "_blank");
      img.src = obj.imgSrc;
  
      div.className = "col";
      card.className = "card bg-dark";
      img.className = "card-img-top img-thumbnail ";
      cardBodyDiv.className = "card-body dark";
      title.className = "card-title dark";
      desc.className = "card-text dark";
      a.className = "btn btn-primary";
  
      card.appendChild(img);
  
      cardBodyDiv.appendChild(title);
      cardBodyDiv.appendChild(desc);
      cardBodyDiv.appendChild(a);
  
      card.appendChild(cardBodyDiv);
      div.appendChild(card);
  
      row.appendChild(div);
    });
  
    wrapper.appendChild(row);
  });
  