matchesMethod =
  if bowser.msie
    'msMatchesSelector'
  else if bowser.firefox
    'mozMatchesSelector'
  else if bowser.webkit
    'webkitMatchesSelector'
  else
    'matches'

@closestAncestor = (node, selector) ->
  while node
    if node[matchesMethod] and node[matchesMethod](selector)
      break
    else
      node = node.parentNode

  node
