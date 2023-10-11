import React from 'react'


import paris from '../../assets/paris.jpg'
import london from '../../assets/london.jpg'
import dubai from '../../assets/dubai.webp'
import traverler1 from '../../assets/user1.webp'
import traverler2 from '../../assets/user2.jpg'
import traverler3 from '../../assets/user3.jpg'


const traverlers = [
  {
    id: 1,
    destinationImage: paris,
    traverlerImage: traverler1,
    traverlerName: 'Chu Giang Coi',
    socialLink: '@giangcoi'
  },
  {
    id: 2,
    destinationImage: london,
    traverlerImage: traverler2,
    traverlerName: 'anh nguoi nhen',
    socialLink: '@tobey'
  },
  {
    id: 3,
    destinationImage: dubai,
    traverlerImage: traverler3,
    traverlerName: 'anh ten cho',
    socialLink: '@snopniggaa'
  },
]


function Travelers() {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>
          Top FeedBack of Travelers in month
        </h2>

        <div className="traverlersContainer grid">

          {
            traverlers.map(({ id, destinationImage, traverlerImage, traverlerName, socialLink }) => {
              return (
                <div key={id} className="singleTraverler">
                  <img src={destinationImage} className='destinationImage' />
                  <div className="traverlerDetails">
                    <div className="traverlerPicture">
                      <img src={traverlerImage} className='traverlerImage' />
                    </div>

                    <div className="traverlerName">
                      <span>{traverlerName}</span>
                      <p>{socialLink} </p>
                    </div>
                  </div>
                </div>
              )

            })
          }


        </div>
      </div>
    </div>
  )
}

export default Travelers