var React = require('react');

function ConfirmBattle(props){
  if(props.isLoading === true){
    return <p> LOADING! </p>
  } else {
    return <p> CONFIRM BATTLE! </p>
  }
}

module.exports = ConfirmBattle;