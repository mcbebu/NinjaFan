/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';

import Image from './NBizHome.jpg';
import CatButton from './NinjaBut2.png';

export default function NinjaBizPage() {

  function redirect() {
    window.location.href = '/products';
  }

  const styles = {
    paperContainer: {
      margin: 0,
      padding: 0,
      backgroundImage: `url(${Image})`,
      backgroundSize: "contain",
      width: "375px",
      height: "667px",
      alignSelf: "left"
    },
    container: {
      margin: 0,
      padding: 0,
      display:  "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "left"
    },
    image: {
        position: "relative",
        top: "372px",
        left: "153px"
        // border: "none"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.paperContainer}>
        <Helmet>
          <title>Ninja Biz Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        
        <img src={CatButton} width={130} height={130} style={styles.image} onClick={redirect}></img>
      </div>
    </div>
  );
}
