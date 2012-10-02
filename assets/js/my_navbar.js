!function ($) {

  $(function(){
	// side bar
    $('.bs-docs-sidenav').affix({
      offset: {
        top: function () { return 120 }
      , bottom: 470
      }
    })
  })
}(window.jQuery)