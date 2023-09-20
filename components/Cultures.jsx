import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="We use advanced algorithms to match job seekers with positions that align with their skills, experience, and preferences."
        invert
      >
        <p>
          We are a community of individuals who align with shared core values
          and pursue a common technological objective.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Secure Messaging" invert>
            Communicate directly with employers or job seekers using our secure
            messaging system to discuss job details, qualifications, and
            expectations.
          </GridListItem>
          <GridListItem title="Skills Certification" invert>
            We offer skills certification programs to validate the expertise of
            blue-collar professionals, enhancing their marketability.
          </GridListItem>
          <GridListItem title="Training and Resources:" invert>
            Access a wealth of resources, including training materials, industry
            news, and career advice, to help you stay informed and enhance your
            skills.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
