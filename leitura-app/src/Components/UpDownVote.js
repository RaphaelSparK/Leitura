import React from 'react'
import { Icon, Label } from 'semantic-ui-react'
import './UpDownVote.css'

const UpDownVote = props => {
  console.log(props)
  const upVote = () => { props.handleVote(props.id, 'upVote') }
  const downVote = () => { props.handleVote(props.id, 'downVote') }

  return (
    <div>
      <Icon size={props.size} name='thumbs up outline' flipped='horizontally' onClick={upVote} />
      <Label className='noselect' size={props.scoreSize || 'large'} horizontal color={props.voteScore > 0 ? 'green' : 'red'}>{props.voteScore - 1}</Label>
      <Icon size={props.size} name='thumbs down outline' onClick={downVote} />
    </div>
  )
}

export default UpDownVote
