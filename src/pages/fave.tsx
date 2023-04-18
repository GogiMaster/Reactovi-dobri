import icon from '../assets/Images/teorem2.png';
import arrow from '../assets/Images/arrow.png';
import poster from '../assets/Images/Rectangle 176.png';

const Fave = () => {
  return (
    <>
    <div className="fave">
        <div className="fave__left">
            <h1>FAVE</h1>
            <div className="fave__left__profile">
                <div className="fave__logo">
                    <img src={icon} />
                </div>
                <div className="fave__profil">
                    <h3>jesus_navas</h3>
                    <span>View Profile</span>
                </div>
            </div>
            <div className='fave__left__nav'>
                <h2>Dashboard</h2> <img src={arrow} />
            </div>
            <div className='fave__left__nav'>
                <h2>Leaderboard</h2> <img src={arrow} />
            </div>
            <div className='fave__left__nav'>
                <h2>Prizes</h2> <img src={arrow} />
            </div>
            <div className='fave__left__nav'>
                <h2>Live scores</h2> <img src={arrow} />
            </div>
            <div className='fave__left__nav'>
                <h2>Game rules</h2> <img src={arrow} />
            </div>

        </div>
        <div className="fave__mid">
            <div className='fave__mid__top'>
                <span>Prizes overview</span>
                <h3>Redeem prize</h3>
            </div>

            <div className='fave__mid__title'>
                <h2>Redeem prize</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor <br />
                    sollicitudin blandit. Duis quis sem a odio euismod maximus. </p>
            </div>

            <div className='fave__mid__cards'>
                <div className='fave__card'>
                    <h1>Signed Jersey</h1>
                    <p>GAMEWEEK 17</p>
                    <h4>Premier League</h4>
                    <hr />
                    <div className='fave__card__bot'>
                        <span>Redeem prize</span> <img src={arrow} />
                    </div>
                </div>
                <div className='fave__card'>
                    <h1>Signed Jersey but longer <br /> text in second row</h1>
                    <p>GAMEWEEK 17</p>
                    <h4>Premier League</h4>
                    <hr />
                    <div className='fave__card__bot'>
                        <span>Prize redeemed</span>
                    </div>
                </div>
                <div className='fave__card'>
                    <h1>Signed Jersey</h1>
                    <p>GAMEWEEK 17</p>
                    <h4>Premier League</h4>
                    <hr />
                    <div className='fave__card__bot'>
                        <span>Redeem prize</span> <img src={arrow} />
                    </div>
                </div>
            </div>
        </div>

        <div className='fave__right'>
            <img src={poster} />
            <img src={poster} />
        </div>
    </div>
    </>
  )
}

export default Fave