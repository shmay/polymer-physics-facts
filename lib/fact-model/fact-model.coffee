Polymer 'fact-model',
  allFacts: ->
    @$.ajax.go()

  findFact: (id) ->
    @$.find.url = "/api/facts/#{id}"
    @$.find.go()

  findResponse: (e,d,s) -> @fire('fact-found', d.response.fact)

  getFact: (fact_id) ->
    _.find(@facts, (f) -> f.id == fact_id)

  starFact: (fact_id) ->
    fact = @getFact(fact_id)

    fact.starred = !fact.starred

    aj = @$.starajax
    aj.url= "/api/facts/#{fact_id}/star"
    aj.go()

  starError: (e,d,s)->
    fact = @getFact d.response.star.id

    fact.starred = !fact.starred
    alert('an error occurred while trying to star that crap')

  deleteVote: (id) ->
    fact = @getFact id

    fact.old_user_vote = fact.user_vote
    fact.votes_count -= fact.user_vote

    fact.user_vote = 0

    xhr = @$.delajax
    xhr.method = 'DELETE'
    xhr.url = "/api/votes/#{fact.id}"

    xhr.go()

  sendVote: (id, dir) ->
    fact = @getFact id

    fact.old_votes_count = fact.votes_count
    fact.old_user_vote = fact.user_vote

    fact.votes_count += (dir - fact.user_vote)
    fact.user_vote = dir

    json =
      fact_id: fact.id
      dir: dir

    @$.voteajax.body = JSON.stringify json

    @$.voteajax.go()

  voteFact: (id,dir) ->
    fact = @getFact id

    if fact.user_vote == dir
      @deleteVote(fact.id)
    else
      @sendVote(fact.id,dir)

  handleResponse: (e,d,s) ->
    facts = d.response.facts

    for fact in facts
      fact.from_now = moment(fact.created_at).fromNow()
      fact.tag_list = fact.tag_names.join(', ')

    @fire('all-facts',facts)

  voteError: (e,d,s) ->
    id = d.fact.id
    fact = _.find(@acts, (f) -> f.id == id)

    fact.votes_count = fact.old_votes_count
    fact.user_vote = fact.old_user_vote

    alert('an error occurred while creating your vote')
