import React from 'react'
import ContentWork from './ContentWork'

const Content = () => {
    return (
      <div className="w-[90%] m-auto">
        <h1 className="text-center pt-10">How it Works?</h1>
        <div className="flex justify-center">
          <p className="text-center pt-5 text-sm w-[500px]">
            "Join our job portal today and let us help you find your dream job.
            Our simple 3-step process makes it easy to create your profile,
            search for positions, and apply with ease. We're dedicated to
            helping job seekers connect with meaningful career opportunities."
          </p>
        </div>
        <div>
          <ContentWork />
        </div>
      </div>
    );
}

export default Content
