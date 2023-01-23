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
            <SectionText>
            ClanBase is built using React with Next.js. It utilizes OAuth for authentication with Bungie, Patreon, and Discord. It uses a Mongo database to store user information and collect general Destiny 2 statistics.
            <br/>
            <br/>
            Alongside the website, a Discord bot has been developed to track user activity in specified Discord servers. This data is used to provide an overview on the website of a player's seasonal activity both in Desinty 2 and their clan's Discord server.
            </SectionText>
        </Section>
        <Section id="video1">
            <SectionDivider />
            <SectionText>ClanBase will be release on 2/21/23</SectionText>
            <img src="/images/clanBase.png" alt="Clan Base Home Page Image"/>
        </Section>
    </Layout>
);

export default ClanBase;