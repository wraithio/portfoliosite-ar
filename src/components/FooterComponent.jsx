
import { Footer, FooterCopyright, FooterDivider } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container className="bg-transparent">
      <div className="w-full text-center">
        <div className="w-full flex justify-center">
          <img
            href="#"
            src="/insigoutline.png"
            alt="Website Logo"
            className="w-16 cursor-pointer"
          />
        </div>
        <FooterDivider />
        <FooterCopyright className="text-white" href="https://linktr.ee/aaronrobinsondev" by="Aaron Robinson" year={2025} />
      </div>
    </Footer>
  );
}
       //   <a href="https://github.com/wraithio">
// <i className="devicon-github-original text-white"></i>
// </a>
// <a href="https://www.linkedin.com/in/aaron-robinson-dev/">
// <i className="devicon-linkedin-plain text-white"></i>
// </a>
// <a href="mailto:aarmon5@gmail.com"><img src="/mail.svg" alt="mail icon" className="w-16"/></a>