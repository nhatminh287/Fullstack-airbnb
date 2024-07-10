import primsa from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';


export const GET = async (request: Request) => {

  const listing = await primsa.listing.findMany();

  return NextResponse.json(listing);
};