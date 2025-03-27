const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
	// Ensures Tailwind includes Flowbite styles
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      
			animation: {
				fade: 'fadeIn 1s ease-in-out',
				fade2: 'fadeIn 2s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				}
			},
		},
  },
  // Enables Flowbite’s custom UI components
  plugins: [flowbite.plugin()],
}