import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Dasshboard() {
  api.get('providers');
  return <h1>Dashboard</h1>;
}
