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
             
             color='green' 
             flipped="horizontally" 
             name='thumbs up outline' 
             size={this.props.size}
           /> : 
           <Icon 
            
             flipped="horizontally" 
             name='thumbs up outline' 
             size={this.props.size}
            />} 
          onChange={this.upVote} 
          checked={this.state.status === 1}
         />
         <Label size={this.props.scoreSize || 'large'} horizontal color={this.props.voteScore > 0?'green':'red'}>{this.props.voteScore - 1}</Label>         
         <Checkbox  
          label={this.state.status === -1 ?
           <Icon 
             
             color='red' 
             name='thumbs down outline' 
             size={this.props.size}
           /> : 
           <Icon 
             
             name='thumbs down outline' 
             size={this.props.size}
            />} 
          onChange={this.downVote} 
          checked={this.state.status === -1}
         />
         </div>
    )
  }
}

export default UpDownVote;