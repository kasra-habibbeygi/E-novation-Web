/* eslint-disable react/no-unescaped-entities */
// Component
import LayoutProvider from '../components/layout/layout.provider';

// Assets
import { MainField } from '../assets/styles/about-us';

// Component
import HeaderTemp from '../components/template/header';

const AboutUs = () => {
    return (
        <LayoutProvider>
            <MainField>
                <HeaderTemp title='About Us' />
                <p>Backed by the founders' extensive experience in Design and Manufacturing.</p>
                <p>
                    We complement your needs with our extensive experience in Designing and Manufacturing Parts, Equipment, Tools and
                    Machinery and will provide ongoing support during all stages of the Design, Development and Manufacturing process.
                </p>
                <p>At E-Novation Engineering, we specialize in providing advanced CNC machining services to a wide range of industries. </p>
                <p>
                    You can rely on precision manufacturing delivered to the highest quality by highly experienced machinists (mostly
                    qualified Engineers), using state-of-the-art machines, a controlled environment and stringent production standards.
                </p>
                <p>
                    E-novation also offers the option of conducting engineering verification for defined applications of parts if customers
                    so require.
                </p>
                <p>
                    In everything E-Novation does, Safety comes first. There is nothing more important to us than sending our people home at
                    the end of a working day safe and healthy.
                </p>
                <p>
                    E-Novation has implemented the ISO 45001:2018 Occupational Health and Safety (OH&S) Management System to assist and
                    guide our safety management practices.
                </p>
                <p>
                    A combination of advanced and high quality CNC machine tools, top of the range CAD/CAM software, Integrated Quality
                    management system and highly experienced staff are four pillars of our business and the reason we deliver the best
                    results.
                </p>
                <p>
                    Our Design and Manufacturing system is powered by Okuma CNC machines, SolidWorks, SolidCam, and ISO 9001 quality
                    management system.
                </p>
            </MainField>
        </LayoutProvider>
    );
};

export default AboutUs;
