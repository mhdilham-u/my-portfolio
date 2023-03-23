"use client";
import Image from "next/image";
import Tag from "./components/Tag";
import Link from "next/link";

export default function Home() {
  const dataProject = [
    {
      title: "Pras Mitsubishi Batam",
      paragraph: "I designed and developed a promotional website or landing page to purchase a Mitsubishi car in Batam.",
      linkStudyCase: "/",
      linkLivePreview: "https://pras-next.vercel.app",
      tag1: "#javascript",
      tag2: "#react",
      tag3: "#nextjs",
      tag4: "#tailwindcss",
      imgProject: "/project-1.webp",
    },
    {
      title: "Nstel - NFT Marketplace",
      paragraph: "Landing page for NFT Marketplace (desktop version only! min-width: 1440px)",
      linkStudyCase: "/",
      linkLivePreview: "/",
      tag1: "#figma",
      tag2: "#ui/ux",
      tag3: "#bootstrap",
      tag4: "#nft",
      imgProject: "/project-2.webp",
    },
    {
      title: "Oleo - Dashboard Design",
      paragraph: "The concept of Oleo Dashboard is based on the minimalism, clean, and neat design.",
      linkStudyCase: "/",
      linkLivePreview: "/",
      tag1: "#figma",
      tag2: "#ui/ux",
      tag3: "#dashboard",
      tag4: "#ecommerce",
      imgProject: "/project-3.webp",
    },
    {
      title: "Snaptic - Personal Portfolio",
      paragraph: "Snaptic is a Resume / CV / vCard / Personal Portfolio with a clean and unique minimal design.",
      linkStudyCase: "/",
      linkLivePreview: "https://snaptic-tailwindcss.vercel.app",
      tag1: "#figma",
      tag2: "#ui/ux",
      tag3: "#tailwindcss",
      tag4: "#portfolio",
      imgProject: "/project-4.webp",
    },
  ];

  return (
    <>
      <div className="container m-auto">
        <header>
          <nav>
            <ul className="flex gap-6 h-20 justify-end items-center font-medium text-sm text-paragraph">
              <li>
                <a className="sm:block hidden" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="sm:block hidden" href="#">
                  Project
                </a>
              </li>
              <li className="ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={() => document.body.classList.toggle("light-mode")} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </li>
            </ul>
          </nav>
        </header>

        <section>
          <div className="flex flex-col justify-center items-center text-center">
            <Image className="rounded-full" src={"/profile.webp"} width={120} height={120} alt="Profile Picture" />
            <span className="font-darker lg:text-3xl text-2xl font-bold text-title">Hi, I'm Ilham 👋 </span>
            <h1 className="font-darker sm:text-7xl text-title font-extrabold sm:leading-[66px] leading-tight mb-6 text-[40px]">
              UI/UX, Front End,
              <br /> Graphic Design Enthusiasm!
            </h1>
            <p className="text-paragraph text-base">A Full Stack Designer who helps developers build a web application.</p>
            <ul className="flex text-paragraph gap-6 mt-5">
              <li>
                <Link href="https://github.com/mhdilham-u" target="_blank" aria-label="Github">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-paragraph" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/mhd.ilham_u" target="_blank" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-paragraph" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-paragraph" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" aria-label="Linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-paragraph" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" aria-label="Dribbble">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-paragraph" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351 9.749 9.749 0 0 1-.92.87 13.157 13.157 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003a9.186 9.186 0 0 1 .11.27c1.514-.17 3.11-.108 4.657.101.206.028.4.058.584.088zm-9.385-7.45a46.164 46.164 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767a7.88 7.88 0 0 0 .796-.755A7.968 7.968 0 0 0 12 4a8.05 8.05 0 0 0-1.396.121zM4.253 9.997a29.21 29.21 0 0 0 2.04-.123 31.53 31.53 0 0 0 4.862-.822 54.365 54.365 0 0 0-2.7-4.227 8.018 8.018 0 0 0-4.202 5.172zm1.53 7.038c.388-.567.898-1.205 1.575-1.899 1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995-1.836.535-3.77.869-5.697 1.042-.94.085-1.783.122-2.403.128a7.967 7.967 0 0 0 1.784 5.032zm9.222 2.38a35.947 35.947 0 0 0-1.632-5.709c-2.002.727-3.597 1.79-4.83 3.058a9.77 9.77 0 0 0-1.317 1.655A7.964 7.964 0 0 0 12 20a7.977 7.977 0 0 0 3.005-.583zm1.873-1.075a7.998 7.998 0 0 0 2.987-4.87c-.34-.085-.771-.17-1.245-.236a12.023 12.023 0 0 0-3.18-.033 39.368 39.368 0 0 1 1.438 5.14zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </Link>
              </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-w-10 text-paragraph mt-14 mb-5 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center">
          <h1 className="font-darker sm:text-5xl text-3xl text-title font-extrabold sm:leading-[66px] mb-6">Stuff i've done</h1>
          {dataProject.map(({ title, paragraph, linkStudyCase, linkLivePreview, tag1, tag2, tag3, tag4, imgProject }) => (
            <div className="card mb-5 lg:w-[967px] w-[360px] lg:p-[30px] p-6 max-[360px]:w-[340px]" key={title}>
              <div className="flex lg:flex-row flex-col-reverse items-center">
                <div className="text-paragraph lg:pr-4 pr-0 mx-1 lg:mx-0">
                  <h2 className="text-title font-darker lg:text-3xl text-[26px] font-extrabold sm:mt-0 mt-3">{title}</h2>
                  <p className="mt-4 lg:mb-6 mb-5 text-sm text-paragraph ">{paragraph}</p>
                  <div className="flex lg:mb-10 mb-5 gap-6">
                    <Link href={linkStudyCase} className="flex lg:gap-2 gap-1 text-title items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                        />
                      </svg>
                      <span className="font-medium text-xs">View Study Case</span>
                    </Link>
                    <Link href={linkLivePreview} target="_blank" className="flex lg:gap-2 gap-1 text-title items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px]">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                      <span className="font-medium text-xs">Live Preview</span>
                    </Link>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text={tag1} />
                    <Tag text={tag2} />
                    <Tag text={tag3} />
                    <Tag text={tag4} />
                  </div>
                </div>
                <Image src={imgProject} className="rounded-xl shadow-xl" width={460} height={300} alt="Project 1" />
              </div>
            </div>
          ))}
        </section>

        <section className="flex flex-col justify-center items-center gap-10 lg:mt-20 mt-10">
          <h1 className="font-darker font-extrabold lg:text-7xl text-5xl text-title text-center">Let's talk about your project</h1>
          <Link href="/" className="flex items-center px-6 py-4 bg-primary rounded-xl text-white gap-2 text-sm">
            <span>Get in touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </Link>
        </section>

        <footer className="flex justify-center text-paragraph lg:mt-52 mt-32 mb-10 text-xs">
          <p>
            © 2023 build with <span className="line-through font-bold text-title"> bullsh*t </span> by Ilham
          </p>
        </footer>
      </div>
    </>
  );
}
