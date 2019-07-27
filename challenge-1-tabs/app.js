const tabs = document.querySelector(".tabs-component__tabs");
const positiveTab = document.querySelector(".item-positive");
const negativeTab = document.querySelector(".item-negative");
const neutralTab = document.querySelector(".item-neutral");

const changeTabButton = document.querySelector(".tabs-component__button");
const tabInput = document.querySelector(".tabs-component__input");

const allTabs = [positiveTab, negativeTab, neutralTab];

tabs.addEventListener("click", e => {
  switch (e.target.innerHTML) {
    case "Positive":
      showTabContent(positiveTab, e.target);
      break;
    case "Negative":
      showTabContent(negativeTab, e.target);
      break;
    case "Neutral":
      showTabContent(neutralTab, e.target);
      break;
  }
});

changeTabButton.addEventListener("click", () => {
  const tabButton = tabs.children[tabInput.value];
  const tabContent = allTabs[tabInput.value];
  tabInput.value === ""
    ? alert("please enter a valid value to change the tab")
    : showTabContent(tabContent, tabButton);
});

function showTabContent(tabContent, tabButton) {
  let tabsCopy = [...allTabs];
  tabsCopy.forEach(tab => {
    tab.classList.remove("content-active");
  });
  changeCurrentTab(tabButton);
  tabContent.classList.add("content-active");
}

function changeCurrentTab(tabButton) {
  const allTabButtons = tabs.children;
  for (const item of allTabButtons) {
    item.classList.remove("active");
  }
  tabButton.classList.add("active");
}

// function gets invoced on render
(function start() {
  allTabs[0].classList.add("content-active");
  tabInput.max = allTabs.length - 1;
})();
