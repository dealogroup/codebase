import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We build long-term relationships understanding your culture, values, and goals to find the perfect match for your organization."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="text-white">
          Our mission is to bridge the gap between talented, skilled
          professionals and forward-thinking companies, facilitating mutually
          beneficial employment relationships that drive success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Job Placement">
              We identify, screen, and connect skilled professionals with job
              opportunities across various industries. Our extensive network
              allows us to source candidates with diverse backgrounds and
              expertise.
            </ListItem>
            <ListItem title="Network Expansion">
              We're equally passionate about network expansion. Our vision
              extends beyond individual growth, as we aim to foster a thriving
              community of learners and professionals. Through our network
              expansion efforts, we connect individuals with opportunities,
              mentors, and peers, creating a dynamic ecosystem for collaboration
              and knowledge sharing.
            </ListItem>
            <ListItem title="Education">
              Our primary focus revolves around empowering individuals through
              education and skill development on our platform. We are dedicated
              to facilitating personal growth and professional advancement by
              providing the resources and knowledge needed to add value to one's
              skill set.
            </ListItem>
            <ListItem title="Expertise">
              At Deallo Our team of experienced HR professionals understands the
              unique hiring challenges across industries. We leverage our
              expertise to find the right talent for your organization.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
