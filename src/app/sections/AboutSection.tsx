'use client';
import Image from 'next/image';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { FiDownload } from 'react-icons/fi';

interface AboutSectionProps {
    downloadCV: () => void;
}

export default function AboutSection({ downloadCV }: AboutSectionProps) {
    return (
        <Section id="about" title="About Me" subtitle="My Journey">
            <Card className="p-8  shadow-md hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                        <Image src="/rifal_pp.png" alt="Rifal Profile" width={250} height={250} className="rounded-xl object-cover" />
                    </div>
                    <div>
                        {/* <h3 className="text-2xl font-bold mb-3">My Professional Journey</h3> */}
                        <p className="text-gray-700 mb-3">
                            A highly motivated software developer with a strong passion for backend and web development. Experienced in designing and developing web applications using frameworks such as Laravel, Express.js, and Node.js. Known for being detail-oriented, responsible, and eager to continuously learn new technologies. Seeking to enhance backend development expertise, contribute to impactful projects, and grow within a collaborative and innovative team environment.
                        </p>
                        <Button variant="primary" onClick={downloadCV} className="flex items-center gap-2">
                            <FiDownload /> Download CV
                        </Button>
                    </div>
                </div>
            </Card>
        </Section>
    );
}


