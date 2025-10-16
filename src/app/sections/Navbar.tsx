"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { FiDownload } from "react-icons/fi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "/dokumen/CV_T.Rifal Aulia.pdf";
        link.download = "Teuku-Rifal-Aulia-CV.pdf";
        link.click();
    };

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="bg-blue-600 text-white p-2 rounded mr-2">TR</span>
                    <span>Teuku Rifal</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {["About", "Skills", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={downloadCV}
                        className="flex items-center gap-2"
                    >
                        <FiDownload /> Download CV
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3">
                    {["About", "Skills", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                            downloadCV();
                            setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-center gap-2 mt-2"
                    >
                        <FiDownload /> Download CV
                    </Button>
                </div>
            )}
        </nav>
    );
}
