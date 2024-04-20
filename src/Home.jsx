import react from 'react'

import Boxcar from '../src/components/Boxcar';
import IconFacebook from '../src/assets/icon/IconFacebook';

import './style/home.scss';


function Home() {
  return (
    <div>
      <header>
        <div className='cabecalho'>
          <a href="">DRIVETRIBES</a>
          <a href="">JEREMY CLARKSON</a>
          <a href="">JAMES MAY</a>
          <a href="">RICHARD HAMMOND</a>
          <a href="">VIDEOS & REVIEWS</a>
          <a href="">NEWS & CAR CULTURE</a>
          <a href="">DRIVETRIBES</a>
        </div>

      </header>
      <main>
        <section className='section-1'>
          <div className='column-one'>

            <div className='conteiner-network'>
              <h1>THE SOCIAL<br />NETWORK FOR<br />PETROLHEADS</h1>
              <input type="text" placeholder='EMAIL ADDRESS'/>
              <button>JOIN DRIVETRIBE</button>
              <a href=""><img src="" alt="" /><IconFacebook></IconFacebook>OR SING UP WITH FACEBOOK</a>
            </div>

            <div className='column-tree'>
              <div className='column'>
                <Boxcar
                  imagecar={'../src/assets/img/porsche-911.webp'}
                  lettercar={'P'}
                  textcar={'PORSCHE'}
                ></Boxcar>
                <Boxcar
                  imagecar={'../src/assets/img/porsche-911.webp'}
                  lettercar={'P'}
                  textcar={'PORSCHE'}
                ></Boxcar>
              </div>
              <div className='column'>
                <Boxcar
                  imagecar={'../src/assets/img/porsche-911.webp'}
                  lettercar={'P'}
                  textcar={'PORSCHE'}
                ></Boxcar>
                <Boxcar
                  imagecar={'../src/assets/img/porsche-911.webp'}
                  lettercar={'P'}
                  textcar={'PORSCHE'}
                ></Boxcar>
              </div>
            </div>

          </div>

          <div className='column-two'>
            <div className='column column-1'>
              <h1><b>JOIN</b> OR <b>CREATE</b><br />YOUR TRIBES</h1>
              <Boxcar
                imagecar={'../src/assets/img/porsche-911.webp'}
                lettercar={'P'}
                textcar={'PORSCHE'}
              ></Boxcar>
              <Boxcar
                imagecar={'../src/assets/img/ASTON-MARTIN-VANTAGE.jpg'}
                lettercar={'A'}
                textcar={'ASTON MARTIN'}
              ></Boxcar>
              <Boxcar
                imagecar={'../src/assets/img/Mercedes-SLS-AMG.webp'}
                lettercar={'P'}
                textcar={'PORSCHE'}
              ></Boxcar>
            </div>

            <div className='column'>
              <Boxcar
                imagecar={'../src/assets/img/bugatti-chiron.webp'}
                lettercar={'B'}
                textcar={'BUGATTI'}
              ></Boxcar>
              <Boxcar
                imagecar={'../src/assets/img/red-bull-f1.webp'}
                lettercar={'F'}
                textcar={'FORMULA ONE'}
              ></Boxcar>
              <Boxcar
                imagecar={'../src/assets/img/red-bull-rally.jpg'}
                lettercar={'R'}
                textcar={'RALLY'}
              ></Boxcar>
            </div>
          </div>


        </section>
      </main>
    </div>
  )
}

export default Home
