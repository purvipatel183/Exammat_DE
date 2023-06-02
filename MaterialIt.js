import React from 'react'
import Navbar from './Componets/Navbar'
import SecondManubar from './Componets/SecondManubar'

const MaterialIt = () => {
  return (
    <>
      <Navbar />
      <div className='box'>
        
     <SecondManubar Sub_1_Link = "#It_Subject-1"
                      Sub_2_Link ="#It_Subject-2"
                      Sub_3_Link  ="#It_Subject-3"
                      Sub_1_Name ="It_1"
                      Sub_2_Name ="It_2"
                      Sub_3_Name ="It_3"
                      BookSection_Link="#It_Books"
                      QbSection_Link ="It_Question_paper"/>
      
      <section id="It_Subject-1" >
          <h3>
            
          </h3>
        </section>
      <section id="It_Subject-2" >
        Subject-2
      </section>
      <section id="It_Subject-3" >
        Subject-3 
      </section>
      <section id="It_Books">
        Books
      </section>
      <section id="It_Question_paper">
        Quesion paper
      </section>
     </div>
    </>
  )
}

export default MaterialIt
