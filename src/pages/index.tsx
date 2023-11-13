'use client';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Name from '@/components/name';
import { pageStyles } from '@/styles/home';

export default function Home() {
  return (
    <div className={pageStyles}>
      <Name />
      <div style={{ border: 'solid 1px white' }}></div>
    </div>
  );
}
