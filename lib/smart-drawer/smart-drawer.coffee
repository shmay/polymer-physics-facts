Polymer 'smart-drawer',
  setFact: (fact) ->
    @querySelector('#factform').fact = _.clone(fact)
