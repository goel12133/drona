import Image from 'next/image'

const DronaLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-04%20at%2012.46.09%E2%80%AFAM-MPdmxUXlfMMeYGdyQXhUSoAsydtI59.png"
      alt="DronaLogo"
      width={48}
      height={48}
      className={`${props.className} brightness-0 invert`}
      style={{ filter: 'brightness(0) invert(27%) sepia(98%) saturate(1960%) hue-rotate(211deg) brightness(97%) contrast(95%)' }}
    />
  )
}

export default DronaLogo

