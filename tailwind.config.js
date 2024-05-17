/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'footerimage':"url('/src/images/Footerimg (2).png')"
      },
    
      backgroundPosition:{
        "bg-custom":"-390px -65px"
      }
      
    },
  },
  plugins: [],
}