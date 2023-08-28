import AboutArea from '@/components/AboutArea';
import BlogArea from '@/components/BlogArea';
import CallToAction from '@/components/CallToAction';
import ContactArea from '@/components/ContactArea';
import HeroBanner from '@/components/HeroBanner';
import Layout from '@/components/layout';
import ServiceArea from '@/components/ServiceArea';
import Testimonial from '@/components/Testimonial';
import WorkArea from '@/components/WorkArea';
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <WorkArea />
      <AboutArea />
      <ServiceArea />
      <Testimonial />
      <CallToAction />
      <BlogArea />
      <ContactArea />
    </>
  )
}

export default Home
Home.Layout = Layout;