import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/home-sections/FeaturedSection'
import TestimonieSection from '@/components/TestimonieSection'
import LatestTractionsSection from '@/components/LatestTractionsSection'
import ChooseSection from '@/components/home-sections/ChooseSection'
import Footer from '@/components/Footer'
import Head from 'next/head'
import MissionSection from '@/components/home-sections/MissionSection'
import Banner from '@/components/home-sections/Banner'
import CTASection from '@/components/home-sections/CTASection'
import CallToAction from '@/components/home-sections/CallToAction'
import OfferSection from '@/components/home-sections/OfferSection'
import ProcessSection from '@/components/home-sections/ProcessSection'

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <CallToAction />
        <OfferSection />
        <ProcessSection />
        <CTASection />
        <ChooseSection />
        <MissionSection />
        <FeatureSection />
        <Banner />
        <CTASection />
        <Footer />
      </Layout>
    </>
  )
}
