import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText, Link } from '../styles/GlobalComponents';
import { Layout } from '../layout/Layout';
import Button from '../styles/GlobalComponents/Button';

const Charlotte = () => (
    <Layout>
        <Section id="description">
            <SectionTitle main>CHARLOTTE</SectionTitle>
            <SectionText>CHARLOTTE is an extreme mobility lunar rover tasked with exploring the permanently shadowed craters of the Lunar south pole. The system provides a stable platform that can traverse inclines of up to 60 degrees.</SectionText>
            <Button onClick={(e) => {
                e.preventDefault();
                window.location.href = '/files/IntuitiveHumanControlledRoboticArm.pdf';
            }}>Proposal</Button>
        </Section>
        <Section id="big-idea-challenge">
            <SectionDivider />
            <SectionText>I worked on this project while a part of the Luminosity Lab. We were selected as one of the finalists in the <Link href='https://bigidea.nianet.org/2022-finalists/'>2022 NASA Big Idea Challenge</Link>. Through this we were given funding to develop the CHARLOTTE system.</SectionText>
            <SectionText>My primary contributions to this project have been in CAD design, simulation analysis for design validation, locomotion control system structuring, and thermal control system design.</SectionText>
        </Section>
        <Section id="video1">
            <SectionDivider />
            <SectionText>Full body dynamic simulation.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/j06ebP9Uz8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
        <Section id="video2">
            <SectionDivider />
            <SectionText>Full body structural simulation.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/9bbGttYNcGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
        <Section id="video3">
            <SectionDivider />
            <SectionText>Foot thermal simulation.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/pNDc40FauTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
    </Layout>
);

export default Charlotte;