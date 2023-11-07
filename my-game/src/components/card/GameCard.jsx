/* eslint-disable react/prop-types */
import './category.scss'

const GameCard = ({ category }) => {

  return (
    <>
      <div className="nft">
        <div className='main'>
          <img className='tokenImage' src={`${category.thumbnail}`} alt="NFT" />
          <h2 className='fs-5'>{category.title}</h2>
          <h4 className='fs-6'>{category.genre}</h4>
          <div className='tokenInfo'>
            <div className="price">
              <ins>◘</ins>
              <p>#{category.id}</p>
            </div>
            <div className="duration">
              <ins>◷</ins>
              <p>{category.release_date}</p>
            </div>
          </div>
          <hr />
          <div className='creator d-flex justify-content-between'>
            <div className='wrapper'>
              <a className='button-64' target='_blanc' href={`${category.game_url}`}>Play</a>
            </div>
            <p><ins>{category.platform}</ins></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameCard