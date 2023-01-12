import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import About from "../components_/About";
import Contact from "../components_/Contact";
import Experience from "../components_/Experience";
import Footer from "../components_/Footer";
import Hero from "../components_/Hero";
import Nav from "../components_/Nav";
import Portfolio from "../components_/Portfolio";
import Services from "../components_/Services";
import Testimonial from "../components_/Testimonial";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";

export default function Home() {
    const [color, setColor] = useState({});
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
                <title>Samuel Ajibola Portfolio</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main>
                <Nav
                    homeRef={homeRef}
                    aboutRef={aboutRef}
                    experienceRef={experienceRef}
                    servicesRef={servicesRef}
                    portfolioRef={portfolioRef}
                    contactRef={contactRef}
                    color={color}
                />
                <Hero homeRef={homeRef} color={color} />
                <About
                    aboutRef={aboutRef}
                    contactRef={contactRef}
                    color={color}
                />
                <Experience experienceRef={experienceRef} color={color} />
                <Services
                    servicesRef={servicesRef}
                    contactRef={contactRef}
                    color={color}
                />
                <Portfolio portfolioRef={portfolioRef} color={color} />
                <Testimonial color={color} />
                <Contact contactRef={contactRef} color={color} />
                <Footer color={color} />
            </main>
        </div>
    );
}
