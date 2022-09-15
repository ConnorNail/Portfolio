import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText, Link } from '../styles/GlobalComponents';
import { Layout } from '../layout/Layout';
import Button from '../styles/GlobalComponents/Button';

const Velos = () => (
    <Layout>
        <Section id="description">
            <SectionTitle main>VELOS</SectionTitle>
            <SectionText>
                VELOS:
                Variable Exploratory Lunar Observation System, is a
                configurable multi-probe exploratory system that will
                be launched from a lander over 100 meters into a
                Permanently Shadowed Region (PSR) of the lunar south pole.
                Each probe is equipped with a configurable
                suite of sensors designed to optimize data collection
                potential and survive the harsh lunar environment.
            </SectionText>
            <Button onClick={(e) => {
                e.preventDefault();
                window.location.href = '/files/2020-BIG-Idea-Technical-Paper_ASU.pdf';
            }}>Final Paper</Button>
        </Section>
        <Section id="other-media">
            <SectionDivider />
            <SectionText>I worked on this project while a part of the Luminosity Lab. We were selected as one of the finalists in the <Link href='https://bigidea.nianet.org/past-competition-themes/2020-competition/'>2020 NASA Big Idea Challenge</Link>. Through this we were given funding to develop the VELOS system.</SectionText>
            <SectionText>My primary contributions to this project included simulation to aid in system design and lunar environment testing.</SectionText>
            <SectionText>After completing the project, I presented my simulation work at the 2021 Simulation World Conference.</SectionText>
            <SectionText>An article was written on the official <Link href='https://www.ansys.com/blog/shedding-light-on-a-shadowy-target'>Ansys Blog</Link> to talk about how simulation was implemented to support this project.</SectionText>
            <SectionText>Additionally, I was invited on to the <Link href='https://www.padtinc.com/2021/05/17/all-things-ansys-088-taking-simulation-to-the-moon/'>All Things Ansys podcast</Link> to talk about my simulation work.</SectionText>
            <SectionText>Other articles: <Link href='https://news.asu.edu/20201130-solutions-asu-students%E2%80%99-lunar-exploration-system-finalist-nasa-competition'>ASU News</Link>, <Link href='https://spacegrant.arizona.edu/about/success/asu/asu-velos-team-finalist-nasa-big-idea-challenge'>Arizona Space Grant</Link></SectionText>
        </Section>
        <Section if="photos">
            <img src="images/ThermalSimNoWireframe.gif" alt="VELOS Thermal Simulation"/>
            <img src="images/SectionDropSimNoWireframe.gif" alt="VELOS Drop Simulation"/>
        </Section>
        <Section id="videos">
            <SectionDivider />
            <SectionText>Final presentation from the 2020 BIG Idea Forum.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/Xj1r_x-KBd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
        <Section>
            <SectionDivider />
            <SectionText>Virtual reality walk through of the VELOS mission.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/qboALFtZj1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
    </Layout>
);

export default Velos;