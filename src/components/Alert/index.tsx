import React from 'react';
import { Link } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';

import { Container, Close, Profiles } from './styles';

import logo from '../../assets/foxlogo.svg';

const Alert: React.FC = () => {
  return (
    <Container>
      <h1>Selecione seu perfil</h1>
      <Close size={24} color="#663399" />
      <div>
        <img src={logo} alt="GloboFeed" />
        <Profiles>
          <img
            src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2985742661548234958-512.png"
            alt="Boy Profile"
          />
          <img
            src="https://icons.iconarchive.com/icons/dapino/teenage-girl/256/girl-in-love-icon.png"
            alt="Girl Profile"
            className="no-registered"
          />
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/senior_citizen2.png"
            alt="Senior Profile"
            className="no-registered"
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/family-1576189-1334454.png"
            alt="Family Profile"
          />
          <img
            src="https://cdn.fidelizarmais.com/files/production/855a2c87-a11a-4380-97b3-4b6bc51a39bb/app-store/icon/417e4fc6072148b68fac0d06b20da634-31012020.png"
            alt="Kids Profile"
          />
        </Profiles>
        <span>ou</span>
        <Link className="button" to="Dashboard">
          Crie um (2 disponíveis)
        </Link>
      </div>
    </Container>
  );
};

export default Alert;
