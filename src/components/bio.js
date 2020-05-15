/**
 * Reusable bio block
 */

import React from 'react';
import GithubButton from '../components/github-button';
import { Col, Container, Row } from "react-bootstrap";
import '../styles/bio.scss';

function Bio() {
  const yearsDev = new Date().getFullYear() - 2005;
  return (
    <Container>
      <h3>&lt;About Me&gt;</h3>
      <Container className="bio">
        <Row>
          <Col>
            <p>
              Currently a Lead Systems Engineer at Insight Enterprises Inc building rich user experiences in ServiceNow. 
              Having spent the last {yearsDev} years as a full time full stack developer I've had the chance to work on a wide selection of projects, problems, and systems. 
              From UI/UX to AI and Deep learning, I have a toolbox of skills at ready to solve any development need.
            </p>
            <p>
              I am a developer, content creator, maker, and general creative enthusiast. <span class="make-stuff">I like to make stuff.</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <GithubButton repoName="CoryHauMe-V2"></GithubButton>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Bio
