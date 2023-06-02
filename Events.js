import React from 'react'
import Navbar from './Componets/Navbar'
import './event.css'
const Events = () => {
  return (
    <>
      <Navbar />
      <div class="container_event">
        <section>
          <h3>Gtu Events</h3>
            <li><a href='https://www.gtu.ac.in/GTU_100PointActivities/'>Gtu 100 points Activity Portel is Available for sem 4 and 6 students</a></li>
          <hr/>
        </section>
        <section>
          <h3>College Events</h3>
          <hr/>
        </section>
        <section>
          <h3>External Events</h3>
          <hr/>
        </section>
        
      </div>

    </>
  )
}

export default Events
