import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import images from "../images/images";

const NotFound = () => {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
      <FadeIn className="flex flex-col items-center">
        <div>
          <Image src={images.errorImg} />
        </div>
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Page not found
        </h1>
        <p className="my-3 text-sm text-teal-300">
          Sorry, we could ont find the page you are looking for.
        </p>
        <Button href="/">
          Go to the home page{" "}
          <i className="fa-sharp fa-solid fa-arrow-right"></i>
        </Button>

        {/* <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link> */}
      </FadeIn>
    </Container>
  );
};

export default NotFound;
