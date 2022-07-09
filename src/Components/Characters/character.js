import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import EpisodesModal from '../Episodes/modal';

const Character = (props) => {
  const {name, image, species, gender, created, location, episode} = props.character
  return (
    <div style={{width:"350px"}}>
      <Card>
        <CardImg top width="100%" height="300px" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle 
                tag="h6" 
                className="mb-2 text-muted">
                  Creado en: {created}
                  </CardSubtitle>
          <CardText>
                  Genero: {gender} <br/>
                  Especie: {species} <br/>
                  Ubicación: {location.name}
                  </CardText>

          <EpisodesModal episodes={episode} 
                          buttonLabel="Ver Episodios"/>
        </CardBody>
      </Card>
    </div>
  );
};

export default Character;