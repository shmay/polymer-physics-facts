Polymer 'facts-page',
  attached: -> @getFacts()

  getFacts: ->
    @facts = undefined

    @$.ajax.headers = {"X-Requested-With": "XMLHttpRequest"}
    @$.ajax.go()

  tapAdd: (e,d,s) -> 
    @fire('open-drawer')

  getFact: (sender) ->
    fact_id = parseInt(closestAncestor(sender,'tr').id.split('_')[1])

    fact = _.find(@facts, (f) -> f.id == fact_id)

  voteUp: (e,d,s) -> 
    if @signedin
      fact = @getFact s

      if fact.user_vote == 1
        @deleteVote(fact)
      else
        @sendVote(s,1)
    else
      @fire('open-login')

  voteDown: (e,d,s) -> 
    if @signedin
      @sendVote(s,-1)
    else
      @fire('open-login')

  deleteVote: (fact) ->
    fact.old_user_vote = fact.user_vote
    fact.votes_count -= fact.user_vote

    fact.user_vote = 0

    xhr = @$.delajax
    xhr.method = 'DELETE'
    xhr.json = JSON.stringify json
    xhr.url = "/api/votes/#{fact_id}"

    xhr.go()

  sendVote: (s, dir) ->
    fact.old_votes_count = fact.votes_count
    fact.old_user_vote = fact.user_vote

    fact.votes_count += dir
    fact.vote_dir = dir

    json =
      fact_id: fact_id
      dir: dir

    @$.voteajax.body = JSON.stringify json

    @$.voteajax.go()

  handleResponse: (e,d,s) ->
    facts = d.response.facts

    for fact in facts
      fact.from_now = moment(fact.created_at).fromNow()
      fact.tag_list = fact.tag_names.join(', ')

    @facts = facts

  voteResponse: (e,d,s) ->
    vote = d.response
    fact_id = vote.fact_id

  voteError: (e,d,s) ->
    id = d.fact.id
    fact = _.find(@acts, (f) -> f.id == id)
    alert('an error occurred while creating your vote')
