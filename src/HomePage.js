import React from 'react';

import experiences from './experiences.json';


const HomePage = (props) => {

  const parseAndFormat = (date) => {
    const parsedDate = Date.parse(date);
    return new Intl.DateTimeFormat("fr-FR", {
          year: "2-digit",
          month: "2-digit"
        }).format(parsedDate);
  };

  return (
    <div>
     {experiences.map((experience, i) => (
        <div className="block" key={i} onClick={() => {props.updateExperienceIndex(i)}}>
          <p>{experience.titre}</p>
          <p>{experience.entreprise}</p>
          <p>{parseAndFormat(experience.dates.debut)} - {parseAndFormat(experience.dates.fin)}</p>
        </div>
        ))}
    </div>
  );
}

export default HomePage;