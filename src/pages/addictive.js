import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText, Link } from '../styles/GlobalComponents';
import { Layout } from '../layout/Layout';
import Button from '../styles/GlobalComponents/Button';
import Image from 'next/image'

const Addictive = () => (
    <Layout>
        <Section id="description">
            <SectionTitle main>ADD-ICTIVE</SectionTitle>
            <SectionText>ADD-ictive is a mobile game developed using Unity for both iOS and Android. The game is based on the game Sudoku. It requires players to use addition to fill in the missing numbers in an automatically generated 3 by 3 game board.</SectionText>
        </Section>
        <Section id="apple-links">
            <SectionDivider />
            <SectionText>The app is available on both the <Link href='https://apps.apple.com/us/app/add-ictive/id1468671771'>Apple App Store</Link> and the <Link href='https://play.google.com/store/apps/details?id=com.Crunchy.Addition'>Google Play Store</Link>.</SectionText>
            <img src="/images/addictiveImage.png" alt="ADD-ictive Images"/>
        </Section>
    </Layout>
);

export default Addictive;