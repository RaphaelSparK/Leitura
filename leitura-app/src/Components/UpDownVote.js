import React, {Component} from 'react'
import { Checkbox, Icon, Label } from 'semantic-ui-react'
import './UpDownVote.css'

class UpDownVote extends Component {
  state = { 
    status: 0,
    voted: false
   }

   componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.status !== prevState.status) {
      this.state.status > prevState.status ? this.props.handleVote(this.props.id, 'upVote'):this.props.handleVote(this.props.id, 'downVote')
    }
  }

   upVote = () => {this.state.status === 1?this.setState({status: 0},() => {}):this.setState({status: 1},() => {})}
   downVote = () => {this.state.status === -1?this.setState({status: 0},() => {}):this.setState({status: -1},() => {})}

  render() {
    return (
      <div>
        <Checkbox  
          label={this.state.status === 1 ?
           <Icon 
             style={{ position:'relative',top: '-5px' }} 
             color='green' 
             flipped="horizontally" 
             name='thumbs up outline' 
             size='big'
           /> : 
           <Icon 
             style={{ position:'relative',top: '-5px' }} 
             flipped="horizontally" 
             name='thumbs up outline' 
             size='big'
            />} 
          onChange={this.upVote} 
          checked={this.state.status === 1}
         />
         <Label circular color={this.props.voteScore > 0?'green':'red'}>{this.props.voteScore}</Label>
         <Checkbox  
          label={this.state.status === -1 ?
           <Icon 
             style={{ position:'relative',top: '5px' }} 
             color='red' 
             name='thumbs down outline' 
             size='big'
           /> : 
           <Icon 
             style={{ position:'relative',top: '5px' }} 
             name='thumbs down outline' 
             size='big'
            />} 
          onChange={this.downVote} 
          checked={this.state.status === -1}
         />
         </div>
    )
  }
}

export default UpDownVote;