"use client"; // Add this directive at the top of your file

import { useEffect, useState } from "react";
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoFamilyFund from "../images/clients/family-fund/logo-dark.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import images from "@/images/images";

export default function Home() {
  const words = [
    "Abandon the outdated guidelines. You can assemble a team of excellence. At this very moment. In this very place.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const typeSpeed = 100; // Typing speed in milliseconds

    const typeText = () => {
      const currentWord = words[currentIndex];
      const currentTextLength = currentText.length;

      if (currentTextLength < currentWord.length) {
        setCurrentText(currentWord.substring(0, currentTextLength + 1));
      } else {
        setIsTypingComplete(true);
      }
    };

    if (!isTypingComplete) {
      const typingInterval = setInterval(typeText, typeSpeed);

      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [currentText, currentIndex, isTypingComplete]);
  return (
    <main className="text-white bg-green-700">
      <Container className="mt-24 sm:mt-32 ">
        <FadeIn className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center">
            <div className="sm:w-1/2">
              <h1 className="font-display text-4xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-6xl">
                Make Deals,
                <br />
                Save Cost!
              </h1>
            </div>
            <div className="sm:w-1/2 mt-6 sm:mt-0">
              <Image
                src={images.heroImage}
                width={411}
                height={380}
                alt="hero image"
              />
            </div>
          </div>
          <p className="mt-6 text-xl text-white">
            {currentText}
            {!isTypingComplete && <Cursor />}
          </p>
          <p className="mt-6 text-xl text-black">
            Whether you're seeking local job opportunities or considering
            relocation, Deallo provides listings from diverse geographic
            locations to suit your preferences.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Family Fund", logo: logoFamilyFund }}
      >
        Deallo is an online marketplace that focuses on both white-collar and
        blue-collar job placement of skilled individuals. platform that
        simplifies the hiring process, making it efficient, convenient, and
        rewarding for everyone involved.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
