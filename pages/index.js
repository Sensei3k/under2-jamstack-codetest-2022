import Head from 'next/head'
import { useState, useRef } from 'react'
import Axios from 'axios';

import { FeaturedBenefits } from '../components/sections/FeaturedBenefits'
import { FeaturedPartners } from '../components/sections/FeaturedPartners/FeaturedPartners'
import { GlobalFooter } from '../components/sections/GlobalFooter'
import { GlobalNavigation } from '../components/sections/GlobalNavigation'
import { HomeHero } from '../components/sections/HomeHero'
import { LatestArticles } from '../components/sections/LatestArticles/LatestArticles'
import { Newsletter } from '../components/sections/Newsletter/Newsletter'

import featuredPartnersJSON from '../content/featured-partners.json'
import latestArticlesJSON from '../content/latest-articles.json'

import toast from 'react-hot-toast';

export default function Home() {
  const inputRef = useRef();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  })

  const clearForm = () => {
    inputRef.current.reset();
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log('current', inputRef.current)
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post('https://under2.free.beeceptor.com/submit', values);
      clearForm();
      toast.success('Successfully submitted the details');
    } catch (error) {
      toast.error('Error with form submission');
    }
  }

  return (
    <>
      <Head>
        <title>
          Mula | The reporting tools taking the fintech world by storm
        </title>
        <meta
          name='description'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <GlobalNavigation />
      <div className='grow'>
        <HomeHero />
        <FeaturedBenefits padding='mdTopOnly' />
        <FeaturedPartners partners={featuredPartnersJSON} />
        <LatestArticles articles={latestArticlesJSON} />
        <Newsletter onChange={handleChange} onSubmit={handleSubmit} inputRef={inputRef} />
      </div>
      <GlobalFooter />
    </>
  )
}
