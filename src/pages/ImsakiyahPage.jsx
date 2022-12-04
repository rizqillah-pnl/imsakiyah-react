import React, { Fragment } from "react";
import LandingImsakiyah from "../Layout/LandingImsakiyah";
import MainImsakiyah from '../Layout/MainImsakiyah';
import MainLayout from "../Layout/MainLayout";

export default function ImsakiyahPage() {
  document.title = 'Imsakiyah | RZQ x YEEDEV STUDIO';

  return (
    <Fragment>
      <MainLayout active='imsakiyah'>
        <LandingImsakiyah></LandingImsakiyah>
        <MainImsakiyah></MainImsakiyah>
      </MainLayout>
    </Fragment>
  );
}

