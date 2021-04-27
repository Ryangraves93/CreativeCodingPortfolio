const objects = [
    {
      name: "Color Wheel",
      desc: "A color wheel in p5 using circle segments.",
      path: "./ProjectPages/ColorWheel.html",
      imgSrc: "images/Ex2.png",
    },
    {
        name: "Circle Mapping",
        desc: "Circle mapping using p5 canvas variables.",
        path: "./ProjectPages/ObjectMapping.html",
        imgSrc: "images/Ex3.png",
      },
      {
        name: "Rotation using Atan2",
        desc: "Using Atan2 rotation to follow the mouse position.",
        path: "./ProjectPages/AtanRotation.html",
        imgSrc: "images/Ex4.png",
      },
      {
        name: "Vertex Painter",
        desc: "A vertex painter using P5 vertex library.",
        path: "./ProjectPages/VertexPainter.html",
        imgSrc: "images/Ex5.png",
      },
      {
        name: "Color lerping",
        desc: "Color lerping using P5.",
        path: "./ProjectPages/TrigFunctions.html",
        imgSrc: "images/Ex6.png",
      },
      {
        name: "Generative vertices",
        desc: "Randomly generated vertices.",
        path: "./ProjectPages/RandomVertex.html",
        imgSrc: "images/Ex7.png",
      },
      {
        name: "Verenoi Triangles",
        desc: "CA1 final submission using verenoi triangles.",
        path: "./ProjectPages/Triangle.html",
        imgSrc: "images/Ex8.png",
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
  