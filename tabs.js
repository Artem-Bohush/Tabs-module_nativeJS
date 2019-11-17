function tabs(allTabsClass, tabClass, tabContentClass) {
  const info = document.querySelector(`.${allTabsClass}`),
    tabs = document.querySelectorAll(`.${tabClass}`),
    tabContent = document.querySelectorAll(`.${tabContentClass}`);

  function showTabContent(b) {
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  info.addEventListener('click', event => {
    if (event.target.classList.contains(tabClass)) {
      for (let i = 0; i < tabs.length; i++) {
        if (event.target === tabs[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

// after importing the module - call function with passing corresponding classes to it
// tabs('info-header', 'info-header-tab', 'info-tabcontent');
