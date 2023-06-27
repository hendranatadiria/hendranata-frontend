import React from 'react'
import axios, { AxiosResponse } from 'axios';
import { api } from '@/api/client';
import { redirect } from 'next/navigation';
import ComingSoonPage from './ComingSoon';

export default async function UnderConstructionGate({children}: {children: React.ReactNode}) {
    
  // check for under construction
  let data:null| AxiosResponse = null;
    try {
        console.log(api.defaults.baseURL)
        data = await api.get(api.defaults.baseURL + "/under-construction");
    } 
    catch (e) {
        console.log(e);
    }

  return (
    <div>{data?.data?.data?.attributes?.status === true? <ComingSoonPage /> : children}</div>
  )
}
