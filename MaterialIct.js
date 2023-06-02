import React from 'react'
import Navbar from './Componets/Navbar'
import SecondManubar from './Componets/SecondManubar'

const MaterialIct = () => {
  return (
    <>
     <Navbar/>
     <div className='box'>
      
     <SecondManubar Sub_1_Link = "#Ict_Subject-1"
                      Sub_2_Link ="#Ict_Subject-2"
                      Sub_3_Link  ="#Ict_Subject-3"
                      Sub_1_Name ="Ict_1"
                      Sub_2_Name ="Ict_2"
                      Sub_3_Name ="Ict_3"
                      BookSection_Link="#Ict_Books"
                      QbSection_Link ="Ict_Question_paper"/>
      
      <section id="Ict_Subject-1" >
          <h2>
            Subject-1
          </h2>
        </section>
      <section id="Ict_Subject-2" >
        Subject-2
      </section>
      <section id="Ict_Subject-3" >
        Subject-3 
      </section>
      <section id="Ict_Books">
        Books
      </section>
      <section id="Ict_Question_paper">
        Quesion paper
      </section>
     </div>
    </>
  )
}

export default MaterialIct
