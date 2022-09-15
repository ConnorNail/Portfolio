import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText, Link } from '../styles/GlobalComponents';
import { Layout } from '../layout/Layout';
import Button from '../styles/GlobalComponents/Button';
import Image from 'next/image'

const ChessRobot = () => (
    <Layout>
        <Section id="description">
            <SectionTitle main>Chess Robot</SectionTitle>
            <SectionText>A pick and place robotic arm designed for playing chess. A computed torque control system was designed for this system and simulated using Simulink and MATLAB. The performance of both a PD and PID controllers were compared in simulation for the arm.</SectionText>
            <Button onClick={(e) => {
                e.preventDefault();
                window.location.href = '/files/ChessRobot.pdf';
            }}>Paper</Button>
        </Section>
        <Section id="image-one">
            <SectionDivider />
            <SectionText>Computed torque and PD controller.</SectionText>
            <img src="/images/chessRobot1.png" alt="ADD-ictive Images"/>
        </Section>
        <Section id="image-two">
            <SectionDivider />
            <SectionText>Computed torque and PID controller.</SectionText>
            <img src="/images/chessRobot2.png" alt="ADD-ictive Images"/>
        </Section>
    </Layout>
);

export default ChessRobot;