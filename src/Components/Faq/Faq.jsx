import React from 'react'
import { faq } from "./index.jsx"

const Faq = () => {
  return (
    <div>
      <div class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Frequently Asked Questions (FAQ)</h1>
          </div>
          {faq.map((serial, index) => (
            <div class="flex flex-wrap -m-4" key={index}>
              <div class="xl:w-1/3 md:w-1/2 p-4 mx-auto">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{serial.ques}</h2>
                  <h3 class="leading-relaxed text-base">{serial.ans}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq