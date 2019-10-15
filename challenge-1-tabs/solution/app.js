const tabs = document.querySelector(".tabs-component__tabs");
const positiveTab = document.querySelector(".item-positive");
const negativeTab = document.querySelector(".item-negative");
const neutralTab = document.querySelector(".item-neutral");
const tabSwitch = document.querySelector(".tabs-component__input");
const currentTabIndex = document.querySelector(".tabs-component__index");

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

tabSwitch.addEventListener("input", e => {
  currentTabIndex.innerHTML = e.target.value;
});
// need to toggle the aria-hidden attributes
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

// function gets invoked on render
// sets the first tab to show its content
(function start() {
  allTabs[0].classList.add("content-active");
})();
