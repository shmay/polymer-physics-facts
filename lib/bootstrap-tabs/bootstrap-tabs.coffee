Polymer 'bootstrap-tabs',
  clickTab: (e,tab,s) ->
    if not tab.classList.contains('core-selected')
      tabs = @querySelectorAll(':host /deep/ bs-tab').array()

      @selected = tabs.indexOf tab
