import React from "react";
import {
  AboutSection,
  HeroSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { SocialProfiles } from "gatsby-theme-portfolio-minimal/src/components/SocialProfiles/index";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Contact/data";
import * as classes from "gatsby-theme-portfolio-minimal/src/sections/Contact/style.module.css";

export default function IndexPage() {
  return (
    <>
      <Seo title="Lokesh Raj Arora" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        {/* <ProjectsSection sectionId="features" heading="Built-in Features" /> */}
        <ContactSection sectionId="contact" heading="Contact me" />
      </Page>
    </>
  );
}

export function ContactSection(props) {
  const response = useLocalDataSource();
  const data = response.allContactJson.sections[0];

  return (
    <Animation type="fadeUp">
      <Section
        anchor={props.sectionId}
        heading={props.heading}
        additionalClasses={[classes.Contact]}
      >
        {data.socialProfiles && (
          <SocialProfiles
            from={data.socialProfiles.from}
            showIcon={data.socialProfiles.showIcons}
          />
        )}
      </Section>
    </Animation>
  );
}
