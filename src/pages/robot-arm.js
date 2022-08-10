import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../styles/GlobalComponents';
import { Layout } from '../layout/Layout';
import Button from '../styles/GlobalComponents/Button';
import Link from 'next/link'

const Projects = () => (
    <Layout>
        <Section id="projects">
            <SectionTitle main>Intuitive Human Controlled Robotic Arm</SectionTitle>
            <SectionText>This is a test</SectionText>
            <Button onClick={(e) => {
                e.preventDefault();
                window.location.href = '/files/IntuitiveHumanControlledRoboticArm.pdf';
            }}>Report</Button>
        </Section>
        <Section id="video1">
            <SectionDivider />
            <SectionText>Mid-project test of robot arm VR input tracking.</SectionText>
            <iframe width="1040" height="585" src="https://www.youtube.com/embed/BruGKP33hzU" title="VR Controlled Robotic Arm Testing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
        <Section id="video2">
            <SectionDivider />
            <SectionText>Comparison between VR user inputs and simulation tracking.</SectionText>
            <iframe width="1040" height="585" src="https://www.youtube.com/embed/1LYD18oWYUQ" title="VR Controlled Robot Simulation Tracking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
    </Layout>
);

export default Projects;