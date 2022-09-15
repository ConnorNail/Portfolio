import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../styles/GlobalComponents';
import { Layout } from '../layout/Layout';
import Button from '../styles/GlobalComponents/Button';
import Link from 'next/link'

const ClanBase = () => (
    <Layout>
        <Section id="description">
            <SectionTitle main>Clan Base</SectionTitle>
            <SectionText>Clan Base is a third-party website for the game Destiny 2 developed by Bungie. This website utilizes the Bungie API to provide enhancements to the Destiny 2 player experience in the form of data visualization and player social interactions.</SectionText>
        </Section>
        <Section id="video1">
            <SectionDivider />
            <SectionText>Coming Soon...</SectionText>
            <img src="/images/clanBase.png" alt="Clan Base Home Page Image"/>
        </Section>
    </Layout>
);

export default ClanBase;