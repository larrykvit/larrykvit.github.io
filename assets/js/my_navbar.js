!function ($) {

  $(function(){
	// side bar
    $('.bs-docs-sidenav').affix({
      offset: {
        top: function () { return 290 }
      , bottom: 270
      }
    })
  })
}(window.jQuery)