import React from 'react';
import api from '~/services/api';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

export default function Dasshboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>06 de Setembro</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>
    </Container>
  );
}
