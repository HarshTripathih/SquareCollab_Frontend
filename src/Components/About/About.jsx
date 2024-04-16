import React from 'react'
import { Bio } from './index.jsx';

const About = () => {
  return (
    <>
    <div className='m-10'>
      <h1 class="text-6xl title-font font-medium mb-1 py-16">About Us</h1>
      <section class="body-font overflow-hidden">
        <div class="container px-5 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="aboutus" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/image/researchimg.jpg" />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-3xl title-font font-medium mb-1">Our Mission</h1>
              <p class="text-justify">ResearcherHub is on a mission to streamline the process of scholarly networking by providing researchers with tailored recommendations and efficient matching capabilities. We aim to save valuable time for scholars while maximizing collaboration opportunities across various research domains. At ResearcherHub, we're pioneering a transformative approach to scholarly networking, driven by cutting-edge AI technologies. Our platform is revolutionizing the way researchers connect, collaborate, and elevate their work within the academic community. Through personalized recommendations and efficient matching, we empower scholars to discover potential collaborators and relevant research opportunities tailored to their expertise and interests. With a commitment to continuous improvement and a user-friendly interface accessible to all, ResearcherHub is shaping the future of academic collaboration, fostering innovation, and propelling academic pursuits forward. Join us in this journey to unlock the full potential of scholarly networking and drive impactful discoveries.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-3xl font-medium title-font mb-12 text-center">Thoughts</h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">Research is something that everyone can do, and everyone ought to do. It is simply collecting information and thinking systematically about it.</p>
                <a class="inline-flex items-center">
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium ">Raewyn Connell</span>
                    <span class=" text-sm">Australian sociologist</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">The power of statistics and the clean lines of quantitative research appealed to me, but I fell in love with the richness and depth of qualitative research.</p>
                <a class="inline-flex items-center">
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">Brené Brown</span>
                    <span class="text-sm">Researcher and Storyteller</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl font-medium title-font mb-4 tracking-widest">OUR TEAM</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">With over 10 years of combined experience, we've got a well seasoned team at the helm.</p>
          </div>
          <div class='flex flex-wrap'>
            {Bio.map((person) => (
              <div class="p-4 lg:w-1/2 sm:w-full">
                <div class="h-full flex flex-col sm:flex-row items-center sm:justify-start justify-center text-center sm:text-left" key={person.name}>
                  <img class="flex-shrink-0 rounded-lg w-full sm:w-48 h-auto object-cover object-center sm:mb-0 mb-4" src={person.image} alt={person.name} />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">{person.name}</h2>
                    <h3 class="mb-3">{person.roles}</h3>
                    <p class="mb-4">{person.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
export default About