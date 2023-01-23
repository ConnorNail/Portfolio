import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText, Link } from '../styles/GlobalComponents';
import { Layout } from '../layout/Layout';
import Button from '../styles/GlobalComponents/Button';
import Image from 'next/image'

const Weekly = () => (
    <Layout>
        <Section id="description">
            <SectionTitle main>Weekly</SectionTitle>
            <SectionText>Weekly seeks to provide users with a deep insight into their computer usage, provide feedback on productivity, and motivate establishing productive habits through online competitions.</SectionText>
        </Section>
        <Section id="Weekly-links">
            <SectionDivider />
            <SectionText>Aided <Link href='https://www.linkedin.com/company/weekly-llc/'>Weekly, LLC</Link> in the development of a website and desktop application utilizing React, Python, Electron, AWS, DynamoDB, OAuth, and RESTful APIs.</SectionText>
            <img src="/images/weeklyImage1.png" alt="Weekly Home Images"/>
        </Section>
        <Section id="Weekly-links">
            <SectionDivider />
            <SectionText>The desktop app was built using Electron and runs Python scripts to access user activity. This data is sent to the Weekly API where it is then processed and displayed on the main page.</SectionText>
            <img src="/images/weeklyImage2.png" alt="Weekly Data Images"/>
        </Section>
    </Layout>
);

export default Weekly;