// Write your code here.
import './index.css'

const WIN_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, resetGame, score} = props

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const imgUrl = isWon ? WIN_IMAGE : LOSE_IMAGE

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button type="button" className="play-again-button" onClick={resetGame}>
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imgUrl} className="win-or-lose-image" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
