import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Home";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";

export default function Home() {
    const [color, setColor] = useState({});
    const [screens, setScreen] = useState({ home: true });
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "light") {
        color.text = "#111827";
        color.darkText = "#374151";
        color.primary = "#f9fafb";
        color.secondary = "#9ca3af";
    }
    if (currentTheme === "dark") {
        color.text = "#f9fafb";
        color.darkText = "#9ca3af";
        color.primary = "#111827";
        color.secondary = "#374151";
    }

    useEffect(() => {
        const systemTheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (typeof window !== "undefined") {
            if (
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)")
                        .matches) ||
                localStorage.theme === "light"
            ) {
                localStorage.setItem("theme", "light");
            } else if (!("theme" in localStorage)) {
                localStorage.setItem("theme", "dark");
            } else if (
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                localStorage.setItem("theme", "light");
            }
        }
    }, [systemTheme]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Oluwatobi Ajibola Portfolio</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <main
                className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
                style={{
                    backgroundImage: `url("https://source.unsplash.com/1L71sPT5XKc")`,
                }}
            >
                <div className="absolute top-5 right-5 h-12 w-18 p-4">
                    {currentTheme === "dark" ? (
                        <button
                            onClick={() => setTheme("light")}
                            className="js-change-theme focus:outline-none"
                        >
                            ☀️
                        </button>
                    ) : (
                        <button
                            onClick={() => setTheme("dark")}
                            className="js-change-theme focus:outline-none"
                        >
                            🌙
                        </button>
                    )}
                </div>
                <div className="h-screen w-full">
                    <Nav
                        homeRef={homeRef}
                        aboutRef={aboutRef}
                        experienceRef={experienceRef}
                        servicesRef={servicesRef}
                        portfolioRef={portfolioRef}
                        contactRef={contactRef}
                        color={color}
                        onChange={(e) => setScreen({ [e]: true })}
                    />
                    {screens.home && <Hero />}
                    {screens.experience && <Experience />}
                    {screens.about && <About />}
                    {screens.portfolio && <Portfolio />}
                </div>
            </main>
        </div>
    );
}
