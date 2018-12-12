document.addEventListener("DOMContentLoaded", function(event) {

  /*
  * Initialize tab styles by getting an array of headers and content divs and manipulating styles. 
  * Add event listeners to the tab headers too.
  */
  let headerTabsArr = document.getElementsByClassName("tab-header");
  let tabContentArr = document.getElementsByClassName("tab-content-wrapper");

  // Add event listeners on click to tab headers and hide all the tab contents.
  for(let i = 0; i < headerTabsArr.length; i++) {
    headerTabsArr[i].addEventListener("click", selectTabHandler);
    tabContentArr[i].style.display = 'none';
  }

  // On load, initialize the first tab header and content to be shown. Rest are hidden/inactive.
  const defaultTabHeader = document.getElementById('problem');
  const defaultTab = document.getElementById('tab-content-problem');
  defaultTabHeader.className += ' selected';
  defaultTab.style.display = 'block';

  // On tab click, reset the tab styles and then set the clicked tab to be active ('selected'), and display the 
  // corresponding content div.
  function selectTabHandler(e) {
    e.stopPropagation();
    resetTabStyles();
    e.target.className += ' selected';
    const tabToRender = document.getElementById(`tab-content-${e.target.id}`)
    tabToRender.style.display = 'block';
  }

  // Helper function to reset the styles on tab headers/content.
  function resetTabStyles() {
    for(let i = 0; i < headerTabsArr.length; i++) {
      headerTabsArr[i].className = 'tab-header';
      tabContentArr[i].style.display = 'none';
    }
  }
});