import { unWrap, getErrorResponse } from '~/utils/fetchUtils'

export default function ({}, inject) {
  inject('dataApi', {
    getWorks,
    getWork,
  })
}
async function getWorks(locale) {
  try {
    return (await unWrap(await fetch(`http://localhost:1337/works/?_locale=${locale}`))).json
  } catch (error) {
    return getErrorResponse(error)
  }
}

async function getWork(slug) {
  try {
    return (await unWrap(await fetch(`http://localhost:1337/works/${slug}`))).json
  } catch (error) {
    return getErrorResponse(error)
  }
}
