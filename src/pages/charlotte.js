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
            <SectionText>My primary contributions to this project was in CAD design, simulation analysis for design validation, locomotion control system structuring, and thermal control system design.</SectionText>
            <SectionText><Link href='https://livestream.com/viewnow/bigideachallenge/videos/233781015'>NASA Big Idea Challenge 2022 Forum Presentation at 5:51:20</Link></SectionText>
            <SectionText><Link href='https://bigidea.nianet.org/wp-content/uploads/Arizona-State-University-2022-Big-Idea-Poster.pdf'>NASA Big Idea Challenge 2022 Poster</Link></SectionText>
        </Section>
        <Section id="video2">
            <SectionDivider />
            <SectionText>CHARLOTTE Test at Colton Crator.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/4ZdTZlxNE2w" title="CHARLOTTE at Colton Crater" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Section>
        <Section id="video3">
            <SectionDivider />
            <SectionText>Full body dynamic simulation.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/j06ebP9Uz8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
        <Section id="video4">
            <SectionDivider />
            <SectionText>Full body structural simulation.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/9bbGttYNcGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
        <Section id="video5">
            <SectionDivider />
            <SectionText>Foot thermal simulation.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/pNDc40FauTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
    </Layout>
);

export default Charlotte;