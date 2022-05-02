import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query';

const cryptoApiHeaders ={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '0c6556fa1amsh8a0b2a860c9c321p1e1776jsn2378b5d7f1e1'
}

const baseUrl ='https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url,headers: cryptoApiHeaders})

export const cryptoApi =createApi({
    reducerPath: 'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});

/*const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '0c6556fa1amsh8a0b2a860c9c321p1e1776jsn2378b5d7f1e1'
    }
  };
  */