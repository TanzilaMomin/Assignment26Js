const data = [
    {
      title: "Iphone 14pro Max",
      caterogry: "Mobile",
      price: 115000,
      desc: "mic Island a truly Apple",
    },
    {
      title: "Iphone Tab SE",
      caterogry: "Tablet",
      price: 128000,
      desc: "Tablet Island a truly Apple",
    },
    {
      title: "Samsung watch",
      caterogry: "Watch",
      price: 15800,
      desc: "Watch Island a truly samsung",
    },
    {
      title: "Samsung LED",
      caterogry: "LED TV",
      price: 18790,
      desc: "Tv Island a truly LED",
    },
    {
      title: "Dell i7",
      caterogry: "Laptop",
      price: 187900,
      desc: "Dell i7 Island a truly Laptop",
    },
  ];
    const mainDiv=document.getElementById("main");
    const showDiv=document.getElementById("show");
    
    const h1=document.createElement("h1");
    h1.innerText="E-commerce";
    showDiv.appendChild(h1);

    const generateComponent=(curr)=>{ 
    const divComp=document.createElement("div");
    divComp.setAttribute("class","comp");

    const title=document.createElement("h3");
    title.innerText=curr.title;

    const category=document.createElement("h4");
    category.innerText=  "category-   " +  curr.caterogry;

    const price=document.createElement("h3");
    price.innerText=  "RS-"+ curr.price
    
    const desc=document.createElement("h4");
    desc.innerText=curr.desc;

    divComp.appendChild(title);
    divComp.appendChild(category);
    divComp.appendChild(price);
    divComp.appendChild(desc);

    showDiv.appendChild(divComp);
}
data .forEach((item)=>{
    generateComponent(item)
})
