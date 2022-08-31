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
        </Section>
        <Section id="contribution">
            <SectionDivider />
            <SectionText>My primary contribution to this project included simulation, mechanical design, and control system/software development.</SectionText>
        </Section>
    </Layout>
);

export default Charlotte;