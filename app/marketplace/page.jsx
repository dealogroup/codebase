import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Marketplace"
        title="Our Marketplace: A Strategic Hub for Networking"
      >
        <p style={{ color: "#fff" }}>
          We believe that our strength lies in our collaborative approach, which
          places our clients at the heart of everything we do.
        </p>
        <div
          className="mt-10 max-w-2xl space-y-6 text-base"
          style={{ color: "#fff" }}
        >
          <p>
            At Dealo, we originated from the insight that freelancers and job
            seekers often charge clients double the cost of an in-house team.
            Since our inception, we've been dedicated to redefining industry
            standards by providing triple the value through innovative
            technology solutions.
          </p>
          <p>
            At Dealo, we're not just colleagues; we're a community. We
            prioritize competitive compensation and a balanced work-life
            approach. We encourage our team members to bring their full
            potential to work, and in return, we respect their personal time,
            aiming to conclude work by 6:30 pm whenever possible.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Secured employees" />
          <StatListItem value="52" label="Satisfied clients" />
          <StatListItem value="$25M" label="Resources Generated" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
