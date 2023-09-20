import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p style={{ color: "#fff" }}>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p style={{ color: "#fff" }}>
            we recognize and value the hard work and skills of blue-collar
            workers who play a crucial role in various industries. Our platform
            is dedicated to bridging the gap between talented, hands-on
            professionals and businesses seeking their expertise. Whether you're
            a skilled tradesperson, a laborer, or a technician, Deallo is here
            to connect you with a world of opportunities.
          </p>
          <p style={{ color: "#fff" }}>
            Our rigorous screening and assessment process ensures that
            candidates meet or exceed the required skill and experience levels.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Overpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
