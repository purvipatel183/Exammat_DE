import React from 'react'

const SecondManubar = (props) => {
  return (
    <>
         <nav Class="navbar navbar-expand-lg bg-body-tertiary">
  <div Class="container-fluid">
    <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span Class="navbar-toggler-icon"></span>
    </button>
    <div Class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul Class="navbar-nav me-auto mb-2 mb-lg-0">
        <li Class="nav-item dropdown">
          <a Class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notes
          </a>
          <ul Class="dropdown-menu">
          <li><a Class="dropdown-item" href={props.Sem_1_Link_Note}>{props.Sem_1_Name_Note}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_2_Link_Note}>{props.Sem_2_Name_Note}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_3_Link_Note}>{props.Sem_3_Name_Note}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_4_Link_Note}>{props.Sem_4_Name_Note}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_5_Link_Note}>{props.Sem_5_Name_Note}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_6_Link_Note}>{props.Sem_6_Name_Note}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_7_Link_Note}>{props.Sem_7_Name_Note}</a></li>
          </ul>
        </li>
        <li Class="nav-item dropdown">
          <a Class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Books
          </a>
          <ul Class="dropdown-menu">
            <li><a Class="dropdown-item" href={props.Sem_1_Link_Books}>{props.Sem_1_Name_Books}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_2_Link_Books}>{props.Sem_2_Name_Books}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_3_Link_Books}>{props.Sem_3_Name_Books}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_4_Link_Books}>{props.Sem_4_Name_Books}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_5_Link_Books}>{props.Sem_5_Name_Books}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_6_Link_Books}>{props.Sem_6_Name_Books}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_7_Link_Books}>{props.Sem_7_Name_Books}</a></li>
          </ul>
        </li>
        <li Class="nav-item dropdown">
          <a Class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Question Paper
          </a>
          <ul Class="dropdown-menu">
            
          <li><a Class="dropdown-item" href={props.Sem_1_Link_Qb}>{props.Sem_1_Name_Qb}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_2_Link_Qb}>{props.Sem_2_Name_Qb}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_3_Link_Qb}>{props.Sem_3_Name_Qb}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_4_Link_Qb}>{props.Sem_4_Name_Qb}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_5_Link_Qb}>{props.Sem_5_Name_Qb}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_6_Link_Qb}>{props.Sem_6_Name_Qb}</a></li>
            <li><a Class="dropdown-item" href={props.Sem_7_Link_Qb}>{props.Sem_7_Name_Qb}</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </>
  )
}

export default SecondManubar;
