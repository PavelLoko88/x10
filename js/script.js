const data = [
  {
    id: 1,
    image: "./assets/listItem/item1.png",
    tag: "Marketing",
    title: "The Ultimate Google Ads Training Course",
    price: "$100",
    author: "Jerome Bell",
  },
  {
    id: 2,
    image: "./assets/listItem/item2.png",
    tag: "Management",
    title: "Prduct Management Fundamentals",
    price: "$480",
    author: "Marvin McKinney",
  },
  {
    id: 3,
    image: "./assets/listItem/item3.png",
    tag: "HR & Recruting",
    title: "HR  Management and Analytics",
    price: "$200",
    author: "Leslie Alexander Li",
  },
  {
    id: 4,
    image: "./assets/listItem/item4.png",
    tag: "Marketing",
    title: "Brand Management & PR Communications",
    price: "$530",
    author: "Kristin Watson",
  },
  {
    id: 5,
    image: "./assets/listItem/item5.png",
    tag: "Design",
    title: "Graphic Design Basic",
    price: "$500",
    author: "Guy Hawkins",
  },
  {
    id: 6,
    image: "./assets/listItem/item6.png",
    tag: "Management",
    title: "Business Development Management",
    price: "$400",
    author: "Dianne Russell",
  },
  {
    id: 7,
    image: "./assets/listItem/item7.png",
    tag: "Development",
    title: "Highload Software Architecture",
    price: "$600",
    author: "Brooklyn Simmons",
  },
  {
    id: 8,
    image: "./assets/listItem/item8.png",
    tag: "HR & Recruting",
    title: "Human Resources – Selection and Recruitment",
    price: "$150",
    author: "Kathryn Murphy",
  },
  {
    id: 9,
    image: "./assets/listItem/item9.png",
    tag: "Design",
    title: "User Experience. Human-centered Design",
    price: "$240",
    author: "Cody Fisher",
  },
  {
    id: 10,
    image: "./assets/listItem/item1.png",
    tag: "Marketing",
    title: "The Ultimate Google Ads Training Course",
    price: "$100",
    author: "Jerome Bell",
  },
  {
    id: 11,
    image: "./assets/listItem/item2.png",
    tag: "Management",
    title: "Prduct Management Fundamentals",
    price: "$480",
    author: "Marvin McKinney",
  },
  {
    id: 12,
    image: "./assets/listItem/item3.png",
    tag: "HR & Recruting",
    title: "HR  Management and Analytics",
    price: "$200",
    author: "Leslie Alexander Li",
  },
  {
    id: 13,
    image: "./assets/listItem/item4.png",
    tag: "Marketing",
    title: "Brand Management & PR Communications",
    price: "$530",
    author: "Kristin Watson",
  },
  {
    id: 14,
    image: "./assets/listItem/item5.png",
    tag: "Design",
    title: "Graphic Design Basic",
    price: "$500",
    author: "Guy Hawkins",
  },
  {
    id: 15,
    image: "./assets/listItem/item6.png",
    tag: "Management",
    title: "Business Development Management",
    price: "$400",
    author: "Dianne Russell",
  },
  {
    id: 16,
    image: "./assets/listItem/item7.png",
    tag: "Development",
    title: "Highload Software Architecture",
    price: "$600",
    author: "Brooklyn Simmons",
  },
  {
    id: 17,
    image: "./assets/listItem/item8.png",
    tag: "HR & Recruting",
    title: "Human Resources – Selection and Recruitment",
    price: "$150",
    author: "Kathryn Murphy",
  },
  {
    id: 18,
    image: "./assets/listItem/item9.png",
    tag: "Design",
    title: "User Experience. Human-centered Design",
    price: "$240",
    author: "Cody Fisher",
  },
];

let dataFilter = data;

// ВЫВОД СПИСКА + ТАБУЛЯЦИЯ
const listContainer = document.querySelector(".list");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let currentIndex = 0;
const itemsPerPage = 9;

function createItemHTML(item) {
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
}

function loadMoreItems() {
  const start = currentIndex;
  const end = currentIndex + itemsPerPage;
  const itemsToAdd = dataFilter.slice(start, end);
  itemsToAdd.forEach((item) => {
    listContainer.innerHTML += createItemHTML(item);
  });

  currentIndex += itemsPerPage;

  if (currentIndex >= dataFilter.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "flex";
  }
}

loadMoreItems();
loadMoreBtn.addEventListener("click", loadMoreItems);

// ВЫВОД ФИЛЬТРОВ
let activeFilter = "All";

let countAll = data;
let countMarketing = 0;
let countManagement = 0;
let countRecruting = 0;
let countDesign = 0;
let countDevelopment = 0;

function countsFilter() {
  countMarketing = 0;
  countAll.forEach((item) => {
    if (item.tag === "Marketing") {
      countMarketing++;
    } else if (item.tag === "Management") {
      countManagement++;
    } else if (item.tag === "HR & Recruting") {
      countRecruting++;
    } else if (item.tag === "Design") {
      countDesign++;
    } else if (item.tag === "Development") {
      countDevelopment++;
    }
  });
}
countsFilter();

const dataFilterItem = [
  { id: 1, text: "All", count: countAll.length },
  { id: 2, text: "Marketing", count: countMarketing },
  { id: 3, text: "Management", count: countManagement },
  { id: 4, text: "HR & Recruting", count: countRecruting },
  { id: 5, text: "Design", count: countDesign },
  { id: 6, text: "Development", count: countDevelopment },
];

const filterList = document.querySelector(".filterItems");

// активный фильтр
function checkActiveFilter(e) {
  const item = e.target.closest(".filterItem");
  if (!item) return;

  document
    .querySelectorAll(".filterItem")
    .forEach((el) => el.classList.remove("filterItemActive"));

  item.classList.add("filterItemActive");

  const filterText = item.querySelector(".filterItemText").textContent;
  activeFilter = filterText;

  if (activeFilter === "All") {
    dataFilter = data;
  } else {
    dataFilter = data.filter((item) => item.tag === activeFilter);
  }
  currentIndex = 0;

  listContainer.innerHTML = "";
  searchInput.value = "";
  loadMoreItems();
}
filterList.addEventListener("click", checkActiveFilter);

function createFilterHTML(item) {
  return `
   <div class="filterItem ${
     item.text === activeFilter && "filterItemActive"
   }" id="btnFilter " }">
          <p class="filterItemText">${item.text}</p>
          <p class="filterItemIndex">${item.count}</p>
        </div>
  `;
}

function renderFilter() {
  filterList.innerHTML = "";
  dataFilterItem.forEach((item) => {
    filterList.innerHTML += createFilterHTML(item);
  });
}
renderFilter();

// ПОИСК
const searchInput = document.getElementById("searchInput");

function searchItems(query) {
  const lowerCaseQuery = query.toLowerCase();
  activeFilter = "All";
  renderFilter();
  const filteredData = data.filter((item) => {
    return (
      (item.title && item.title.toLowerCase().includes(lowerCaseQuery)) ||
      (item.tag && item.tag.toLowerCase().includes(lowerCaseQuery)) ||
      (item.author && item.author.toLowerCase().includes(lowerCaseQuery))
    );
  });

  dataFilter = filteredData;
  currentIndex = 0;
  listContainer.innerHTML = "";
  loadMoreItems();
}

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value;
    searchItems(query);
  }
});
