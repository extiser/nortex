$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#fp-nav',
    lockAnchors: false,
    anchors:['top', 'about', 'services' , 'partners', 'contacts'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['НОРТЕХ', 'О компании', 'Услуги', 'Партнеры', 'Контакты'],
    showActiveTooltip: false,
    slidesNavigation: false,
    // slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '',
    scrollOverflow: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : ['#ccc', '#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '',
    responsiveWidth: 0,
    responsiveHeight: 0,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    //events
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      if (index == '4' && direction == 'down') {
        $('.jsHeaderLogo, .jsHeaderMenu').removeClass('_white').addClass('_purple');
        $('.phone').addClass('_hide');
      } else if (index == '5' && direction == 'up') {
        $('.jsHeaderLogo, .jsHeaderMenu').removeClass('_purple').addClass('_white');
        $('.phone').removeClass('_hide');
      }

      if ($('.jsMenuList').hasClass('_active') && $('.jsHeaderMenu').hasClass('_active')) {
        $('.jsMenuList, .jsHeaderMenu').removeClass('_active');
      }
    },
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      if(index == 5){
        $('.jsHeaderLogo, .jsHeaderMenu').removeClass('_white').addClass('_purple');
        $('.phone').addClass('_hide');
      } else {
        $('.jsHeaderLogo, .jsHeaderMenu').removeClass('_purple').addClass('_white');
        $('.phone').removeClass('_hide');
        
      }
    },
    afterRender: function(){},
    afterResize: function(){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
        
    }
  });
});