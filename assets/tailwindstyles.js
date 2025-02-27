const styleTag = document.createElement("style");
styleTag.setAttribute("type", "text/tailwindcss");
styleTag.innerHTML = `
   @theme {
        --color-darklise: #004d4a;
        --color-lise: #d6ee00;
      }
      body {
        background: #004d4a;
        color:#fff;
      }
      #app {
        @apply container sm:max-w-lg md:max-w-3xl lg:max-w-4xl relative mx-auto mt-32 px-4 sm:px-8 md:px-16;
      }
      a {
        @apply underline hover:text-white;
      }
      .w3c {
        @apply h-4 italic  text-lise text-xs;
      }
      .infobox {
        @apply flex flex-wrap items-center;
      }
      .understanding {
        @apply bg-emerald-950 opacity-90 hover:opacity-100 pb-1 px-4  rounded-md my-2;
      }

      .understanding a {
        @apply underline text-xs text-lise;
      }
      .conformance {
        @apply -ml-14 top-0 rounded-xs absolute text-base w-10 inline-block text-center bg-emerald-950 text-lise py-1.5 mr-4 leading-none;
      }
      .tag {
        @apply rounded-full px-4 mr-2 mt-1 text-[11px] bg-lise text-darklise py-[2px] leading-none font-normal inline-block;
      }
      p {
        font-family: "Source Sans", source-sans, system-ui, non-serif;
        font-size: 16px;
        font-weight: 200;
        line-height: 1.6;
      }
      main h1 {
        @apply text-5xl mt-16 font-light text-teal-100
      }
      main h2 {
        @apply text-3xl mt-8 font-bold text-teal-100;
      }
      main h3 {
        @apply text-2xl mb-0 mt-16 font-bold text-teal-100;
      }
      main h4 {
        @apply text-xl mb-2 mt-8 font-bold text-teal-100;
      }
      main ul {
        @apply space-y-1 text-teal-500 list-disc list-outside my-8 pl-4;      
      }
      main ul li{
        @apply text-white list-disc  my-2 text-base pl-4 font-light;      
      }
      .toggle {
        @apply inline-block w-4 h-4 rounded-full  transition transform;
      }
      .navButton {
        @apply py-3 px-4 block flex text-center font-bold items-center no-underline hover:underline cursor-pointer rounded-md text-xs bg-teal-700 hover:bg-lise transform transition-all hover:-translate-y-0.5 text-lise hover:text-darklise text-xs shadow-[0_4px_4px_rgba(0,0,0,0.25)];
      }
`;
document.head.appendChild(styleTag);
