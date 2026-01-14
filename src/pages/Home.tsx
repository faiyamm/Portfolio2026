

import { Hero } from '../components/sections/Hero';
import { WhatDrivesMe } from '../components/sections/About';
import { Work } from '../components/sections/Work';
import { Projects } from '../components/sections/Projects';
import { Education } from '../components/sections/Education';

export const Home = () => {
    return (
        <main>
            <Hero />
            <WhatDrivesMe />
            <Work />
            <Projects />
            <Education />
        </main>
    );
};
