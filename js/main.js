$(document).ready(function () {

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
  const defaultTabHeader = document.getElementById('problem-lg');
  const defaultTab = document.getElementById('tab-content-problem-lg');
  defaultTabHeader.className += ' selected';
  defaultTab.style.display = 'block';

  // On tab click, reset the tab styles and then set the clicked tab to be active ('selected'), and display the 
  // corresponding content div.
  function selectTabHandler(e) {
    e.stopPropagation();
    resetTabStyles();
    const itemToSelect = e.target.id ? e.target : e.target.parentElement;
    itemToSelect.className += ' selected';
    const tabToRender = document.getElementById(`tab-content-${itemToSelect.id}`)
    tabToRender.style.display = 'block';
  
  }

  // Helper function to reset the styles on tab headers/content.
  function resetTabStyles() {
    for(let i = 0; i < headerTabsArr.length; i++) {
      headerTabsArr[i].className = 'tab-header';
      tabContentArr[i].style.display = 'none';
    }
  }

  $('#hamburger').on('click', () => {
    $('.side-nav-links-wrapper').toggle('slide')
    $('#hamburger').toggleClass('open');
  })


  // Handle scrolling from hamburger
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      $('.side-nav-links-wrapper').hide('slide')
      if($('#hamburger').hasClass('open')) {
        $('#hamburger').toggleClass('open');
      }
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        $('.active').removeClass('active')
        $(this).addClass('active')
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          
          if (target.attr('id') === 'top') {
            var offset = target.offset().top
          } else {
            var offset = target.offset().top - 120
          }

          $('html, body').animate({
            scrollTop: offset
          }, 1000);
        }
      }
    });

    if (($(window).scrollTop() > 90) && $(window).innerWidth() < 850) {
      $('.header').css('background-color', '#2E3A3F')
    }
  
    $(window).bind('scroll', () => {
      if ($(window).innerWidth() < 850) {
        const opacity = $(window).scrollTop() / 100
        if (opacity > 1) {
          $('.header').css('background-color', '#2E3A3F')
        } else {
          $('.header').css('background-color', '#243238')
        }
      }
    })

    window.onresize = () => {
      if ($(window).innerWidth() < 850) {
        $('html, body').animate({
          scrollTop: 0
        }, 0);
        $('.active').removeClass('active')
      } else {
        $('.header').css('background-color', '#243238')
        $('.active').removeClass('active')
      }
    }
});
