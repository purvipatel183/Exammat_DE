import React from "react";
import Navbar from "./Componets/Navbar";
import SecondManubar from "./Componets/SecondManubar";
import Card from "./Componets/Card";
import Card_Data from "./Componets/Card_Data";
import './materialcom.css'
const MaterialComputer = () => {
  const CardD = (value, index, arr) => {
    return (
      <Card
        img_Link={value.img_Link}
        alternative={value.alternative}
        title={value.title}
        content={value.content}
        Download_Link={value.Download_Link}
      />
    );
  };
  return (
    <>
      <Navbar />
      <div className="box">
        <SecondManubar
          Sem_1_Link_Note="#com_sem_1_Notes"
          Sem_2_Link_Note="#com_sem_2_Notes"
          Sem_3_Link_Note="#com_sem_3_Notes"
          Sem_4_Link_Note="#com_sem_4_Notes"
          Sem_5_Link_Note="#com_sem_5_Notes"
          Sem_6_Link_Note="#com_sem_6_Notes"
          Sem_7_Link_Note="#com_sem_7_Notes"
          Sem_1_Name_Note="Semester 1"
          Sem_2_Name_Note="Semester 2"
          Sem_3_Name_Note="Semester 3"
          Sem_4_Name_Note="Semester 4"
          Sem_5_Name_Note="Semester 5"
          Sem_6_Name_Note="Semester 6"
          Sem_7_Name_Note="Semester 7"
          Sem_1_Link_Books="#com_sem_1_Books"
          Sem_2_Link_Books="#com_sem_2_Books"
          Sem_3_Link_Books="#com_sem_3_Books"
          Sem_4_Link_Books="#com_sem_4_Books"
          Sem_5_Link_Books="#com_sem_5_Books"
          Sem_6_Link_Books="#com_sem_6_Books"
          Sem_7_Link_Books="#com_sem_7_Books"
          Sem_1_Name_Books="Semester 1"
          Sem_2_Name_Books="Semester 2"
          Sem_3_Name_Books="Semester 3"
          Sem_4_Name_Books="Semester 4"
          Sem_5_Name_Books="Semester 5"
          Sem_6_Name_Books="Semester 6"
          Sem_7_Name_Books="Semester 7"
          Sem_1_Link_Qb="#com_sem_1_Qb"
          Sem_2_Link_Qb="#com_sem_2_Qb"
          Sem_3_Link_Qb="#com_sem_3_Qb"
          Sem_4_Link_Qb="#com_sem_4_Qb"
          Sem_5_Link_Qb="#com_sem_5_Qb"
          Sem_6_Link_Qb="#com_sem_6_Qb"
          Sem_7_Link_Qb="#com_sem_7_Qb"
          Sem_1_Name_Qb="Semester 1"
          Sem_2_Name_Qb="Semester 2"
          Sem_3_Name_Qb="Semester 3"
          Sem_4_Name_Qb="Semester 4"
          Sem_5_Name_Qb="Semester 5"
          Sem_6_Name_Qb="Semester 6"
          Sem_7_Name_Qb="Semester 7"
        />

        <div class="container">
          <h3>Notes</h3>
          <section id="com_sem_1_Notes">
            <h4>Semester 1</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_2_Notes">
            <h4>Semester 2</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_3_Notes">
            <h4>Semester 3</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_4_Notes">
            <h4>Semester 4</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_5_Notes">
            <h4>Semester 5</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_6_Notes">
            <h4>Semester 6</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_7_Notes">
            <h4>Semester 7</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
        </div>
        <div class="container">
          <h3>Books</h3>
          <section id="com_sem_1_Books">
            <h4>Semester 1</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_2_Books">
            <h4>Semester 2</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_3_Books">
            <h4>Semester 3</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_4_Books">
            <h4>Semester 4</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_5_Books">
            <h4>Semester 5</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_6_Books">
            <h4>Semester 6</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_7_Books">
            <h4>Semester 7</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
        </div>
        <div class="container">
        <h3>Question Paper</h3>
        <section id="com_sem_1_Qb">
            <h4>Semester 1</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_2_Qb">
            <h4>Semester 2</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_3_Qb">
            <h4>Semester 3</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_4_Qb">
            <h4>Semester 4</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_5_Qb">
            <h4>Semester 5</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_6_Qb">
            <h4>Semester 6</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
          <section id="com_sem_7_Qb">
            <h4>Semester 7</h4>
            <div class="card_container">{Card_Data.map(CardD)}</div>
          </section>
          <hr />
        </div>
      </div>
    </>
  );
};

export default MaterialComputer;
