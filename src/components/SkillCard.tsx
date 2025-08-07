import React from 'react';
import Card from './Card';
import { Skill } from '../types/types';


export default function SkillCard( skill : Skill) {
    return (
        <Card hoverEffect>
            <div className="text-center">
                <div className="flex justify-center mb-4 text-4xl">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{skill.name}</h3>
                <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full mb-3">
                    {skill.level}
                </span>
                <p className="text-gray-600">{skill.description}</p>
            </div>
        </Card>
    );
};

