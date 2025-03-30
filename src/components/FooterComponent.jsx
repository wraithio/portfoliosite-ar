
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container className="bg-transparent">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <img
            href="#"
            src="/insigoutline.png"
            alt="Website Logo"
            className="w-16"
          />
          <FooterLinkGroup className="gap-3">
            <a href="https://github.com/wraithio">
            <i className="devicon-github-original text-white"></i>
          </a>
            <a href="https://www.linkedin.com/in/aaron-robinson-dev/">
            <i className="devicon-linkedin-plain text-white"></i>
          </a>
            <a href="mailto:aarmon5@gmail.com"><img src="/mail.svg" alt="mail icon" className="w-16"/></a>
            {/* <FooterLink href="#">Contact</FooterLink> */}
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright className="text-white" href="https://linktr.ee/aaronrobinsondev" by="Aaron Robinson" year={2025} />
      </div>
    </Footer>
  );
}