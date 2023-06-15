import '../styles/favorite-icon.styles.scss'
const FavoriteButton = ({...otherProps}) => {
  return (
    <button className="favorite-icon" {...otherProps}>
      <span>&#10084;</span>
    </button>
  )
}

export default FavoriteButton