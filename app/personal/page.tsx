import IMAGES from '@/assets/images';
import CTA from '@/components/sections/cta/default';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nguyen An Phu',
};

export default function Personal() {
  return (
    <main className="">
        <CTA/>
        <img src={IMAGES.avatar} className=' aspect-square w-full' alt="" />
    </main>
  );
}