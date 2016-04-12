var React = require('react');
var PropTypes = React.PropTypes;

function puke(obj){
  return <pre>{JSON.stringify(obj, null, '')}</pre>
}

function ConfirmBattle(props){
  if(props.isLoading === true){
    return <p> LOADING! </p>
  } else {
    return <div> CONFIRM BATTLE!: {puke(props)}</div>
  }
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
  // playersInfo: [players[0], players[1]]
}

module.exports = ConfirmBattle;