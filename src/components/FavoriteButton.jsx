import '../styles/favorite-icon.styles.scss'
const FavoriteButton = ({children, ...otherProps}) => {
  return (
    <div className="favorite-icon" {...otherProps}>
      {children}
    </div>
  )
}

export default FavoriteButton