# Title : Portfolio Website
by: Aaron Robinson

Requirements

    Built in React
    About Me Section
    Projects Section
    Skills Section
    Phone Number
    Email
    Links to LinkedIn, GitHub, and Resume

vercel: [here](https://aaronrobinsondev.vercel.app/)
github: [here](https://github.com/wraithio/portfoliosite-ar)

Peer Review: Juan Heredia: "Really pretty looking, the feel of the website is really slick, my only real complain is that the projects cards look too squished on tablet, and also mix with the background on mobile"



    <motion.div
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
             duration: 0.4,
             scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
         }}
        ></motion.div>