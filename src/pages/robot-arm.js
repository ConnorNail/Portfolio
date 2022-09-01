import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../styles/GlobalComponents';
import { Layout } from '../layout/Layout';
import Button from '../styles/GlobalComponents/Button';
import Link from 'next/link'

const RobotArm = () => (
    <Layout>
        <Section id="description">
            <SectionTitle main>Intuitive Human Controlled Robotic Arm</SectionTitle>
            <SectionText>Many robotic systems that utilize remote user operation have very complicated systems in place for the user to control the robot. These systems can require multiple computers and multiple human operators for the simplest actions. This system is designed to allow for a user to control a robotic arm remotely in the simplest and most intuitive way possible.</SectionText>
            <Button onClick={(e) => {
                e.preventDefault();
                window.location.href = '/files/IntuitiveHumanControlledRoboticArm.pdf';
            }}>Full Report</Button>
        </Section>
        <Section id="video1">
            <SectionDivider />
            <SectionText>Mid-project test of robot arm VR input tracking.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/BruGKP33hzU" title="VR Controlled Robotic Arm Testing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
        <Section id="video2">
            <SectionDivider />
            <SectionText>Comparison between VR user inputs and simulation tracking.</SectionText>
            <iframe width="auto" height="585" src="https://www.youtube.com/embed/1LYD18oWYUQ" title="VR Controlled Robot Simulation Tracking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
    </Layout>
);

export default RobotArm;