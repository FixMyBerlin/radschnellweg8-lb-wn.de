import { getCollection } from 'astro:content'

const faqsCollection = await getCollection('faqs')
export type FaqCollection = (typeof faqsCollection)[number][]
