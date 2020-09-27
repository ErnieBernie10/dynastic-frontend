import React, { FC } from 'react';
import { Container, Content } from 'rsuite';
import { Header } from './Header';

type Props = { 
  children: React.ReactNode,
  fullPage?: boolean 
};

export const Layout: FC<Props> = ({ children, fullPage }) => {
  return (
    <Container>
      <Header />
      <Content>
        { children }
      </Content>
    </Container>
    );
}