const data = [
  {
    id: 1,
    image: "./assets/item1.png",
    tag: "Marketing",
    title: "The Ultimate Google Ads Training Course",
    price: "$100",
    author: "Jerome Bell",
  },
  {
    id: 2,
    image: "./assets/item2.png",
    tag: "Management",
    title: "Prduct Management Fundamentals",
    price: "$480",
    author: "Marvin McKinney",
  },
  {
    id: 3,
    image: "./assets/item3.png",
    tag: "HR & Recruting",
    title: "HR  Management and Analytics",
    price: "$200",
    author: "Leslie Alexander Li",
  },
  {
    id: 4,
    image: "./assets/item4.png",
    tag: "Marketing",
    title: "Brand Management & PR Communications",
    price: "$530",
    author: "Kristin Watson",
  },
  {
    id: 5,
    image: "./assets/item5.png",
    tag: "Design",
    title: "Graphic Design Basic",
    price: "$500",
    author: "Guy Hawkins",
  },
  {
    id: 6,
    image: "./assets/item6.png",
    tag: "Management",
    title: "Business Development Management",
    price: "$400",
    author: "Dianne Russell",
  },
  {
    id: 7,
    image: "./assets/item2.png",
    tag: "Development",
    title: "Highload Software Architecture",
    price: "$600",
    author: "Brooklyn Simmons",
  },
  {
    id: 8,
    image: "./assets/item8.png",
    tag: "HR & Recruting",
    title: "Human Resources – Selection and Recruitment",
    price: "$150",
    author: "Kathryn Murphy",
  },
  {
    id: 9,
    image: "./assets/item9.png",
    tag: "Design",
    title: "User Experience. Human-centered Design",
    price: "$240",
    author: "Cody Fisher",
  },
];

const listContainer = document.querySelector(".list");

listContainer.innerHTML = data
  .map((item) => {
    let tagClass = "";
    switch (item.tag.toLowerCase()) {
      case "marketing":
        tagClass = "marketing";
        break;
      case "management":
        tagClass = "management";
        break;
      case "hr & recruting":
        tagClass = "recruting";
        break;
      case "design":
        tagClass = "design";
        break;
      case "development":
        tagClass = "development";
        break;
      default:
        tagClass = "";
    }

    return `
  <div class="listCard">
    <img class="listCardImage" src="${item.image}" alt="card-image" />
    <div class="listCardContent">
      <div class="listCardContentTag ${tagClass}">
        <p class="listCardContentTagText">${item.tag}</p>
      </div>
      <h4 class="listCardContentTitle">${item.title}</h4>
      <div class="listCardContentInfo">
        <p class="listCardContentInfoPrice">${item.price}</p>
        <div class="stick"></div>
        <p class="listCardContentInfoAuthor">by ${item.author}</p>
      </div>
    </div>
  </div>
  `;
  })
  .join("");
