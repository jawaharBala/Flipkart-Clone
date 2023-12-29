import "./CategoriesPopover.css"
const CategoriesPopover = () => {

  const subCategories = [
    {
      name: "Men'S Top Wear",
      additionalCatgories: [
        "More in Men'S Top",
        "All",
        "Men's T-shirts",
        "Men's Casual Shirts",
        "Men's Formal Shirts",
        "Men's Kurtas",
        "Men's Ethnic Sets",
        "Men's Blazers",
        "Men's Raincoat",
        "Men's Windcheaters",
      ],
    },
    {
      name: "Men's Bottom Wear",
      additionalCatgories: [
        "All",
        "Men's Jeans",
        "Men's Trousers",
        "Men's Trackpants",
        "Men's Shorts",
        "Men's Cargos",
        "Men's ThreefourthS",
        "Men's Pyjamas & Loungepants",
        "Men•s Dhoti",
      ],
    },
    {
      name: "Women Ethnic",
      additionalCatgories: [
        "More in Women Ethnic",
        "All",
        "Women Sarees",
        "Women Kurtas & Kurtis",
        "Women Kurta Sets & Salwar Suits",
        "Ethnic Dresses",
        "Women Dress Materials",
        "Women Gowns",
        "Women Lehenga Cholis",
      ],
    },
    {
      name: "Women Western",
      additionalCatgories: [
        "More in Women Western",
        "All",
        "Women Tops",
        "Women Dresses",
        "Women T-shirts & Polo T-shirts",
        " Women Jeans",
        "Women Nighties & Night Dresses",
        " Women Nightsuit",
        "Women Track Pants",
        "Women Trouser",
      ],
    },
    {
      name: "Men Footwear",
      additionalCatgories: [
        "More in Men",
        "All",
        "Men's Sports Shoes",
        "Casual Shoes",
        "Sandals & Floaters",
        "Men's Slippers & Flip Flops",
        "Men's Formal Shoes",
        "Men's Ethnic Shoes",
        "care",
      ],
    },
    {
      name: "Women Footwear",
      additionalCatgories: [
        "More in Women Footwear",
        "All",
        "Women Flats",
        "Women Heels",
        "Women Wedges",
        "Women Slipper Flip Flops",
        "Women Casual Shoes",
        "Women Sports Shoes",
        "Women Ballerinas",
        "Women Ethnic Shoes",
      ],
    },
    {
      name: "Watches and Accessories",
      additionalCatgories: [
        "More in Watches and Accessories",
        "Men & Women Watches",
        "Men & Women Sunglasses",
        "Wallets",
        "Men & Women Belts",
        "Men Fashion Jewellery",
        "Precious Articles",
        "Kids Accessories",
      ],
    },
    {
      name: "Bags, Suitcases & Luggage",
      additionalCatgories: [
        "More in Bags, Suitcases & Luggage",
        "All",
        "Bags & Backpacks",
        "Suitcases & Trolleys",
        "Dufflebags",
        "Rucksacks",
        "Handbags",
        "Slingbags",
        "Women's Clutches & Wallets",
      ],
    },
    {
      name: "Kids",
      additionalCatgories: [
        "All",
        "Girls Dresses",
        "Boys & Girls Tshirts",
        "Boys & Girls Combosets",
        "Boys & Girls Ethnic Wear",
        "Boys & Girls Jeans",
        "Boys & Girls Shorts",
        "Boys & Girls Trackpants",
        "Boys & Girls Innerwear",
      ],
    },
    {
      name: "Essentials",
      additionalCatgories: [
        "More in Essentials",
        "Men's Briefs & Trunks",
        "M Vests",
        "Men's Boxers",
        "Women Lingerie Sets",
        "Women Bra",
        "Women Panty",
        "Women",
        "Women Kurtas",
      ],
    },
    { name: "Winter", additionalCatgories: [] },
  ];
  return (
    <div className="categoriesLayout">
      <div className="categoriesLeft">{subCategories.map((cat)=>{
        return <span className="catText" key={cat.name}>{cat.name}</span>
      })}</div>
      <div className="categoryRight"></div>
    </div>
  );
};

export default CategoriesPopover;
