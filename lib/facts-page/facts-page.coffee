Polymer 'facts-page',
  staricon: 'star-outline'

  attached: -> @fetchFacts()

  getFactId: (sender) ->
    fact_id = parseInt(closestAncestor(sender,'tr').id.split('_')[1])

  fetchFacts: ->
    @facts = undefined

    @$.model.allFacts()

  stashFacts: (e,facts) -> @facts = facts

  voteUp: (e,d,s) -> @vote(@getFactId(s), 1)

  voteDown: (e,d,s) -> @vote(@getFactId(s), -1)

  vote: (id, dir) ->
    if @signedin
      @$.model.voteFact(id,dir)
    else
      @fire('open-login')

  tapAdd: (e,d,s) -> 
    @fire('open-drawer')

  clickStar: (e,d,s) ->
    if @signedin
      @$.model.starFact(@getFactId(s))
    else
      @fire('open-login')
