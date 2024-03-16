'use client'
export default function myImageLoader({src,width,quality}) {
    if(src.startswith('https'))return src;
    return `https://https://js-react-next-portfolio.vercel.app/${src}?${width}?${quality || 75}`;

}