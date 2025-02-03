import { MapPin, TrendingUp, Zap } from 'lucide-react'

const benefits = [
  {
    title: 'Real-time mapping and detection',
    description: 'Our drones provide immediate results, enabling faster responses to contamination hotspots. This is a significant improvement over conventional laboratory-based methods that are time-consuming and labor-intensive.',
    icon: MapPin,
  },
  {
    title: 'Scalability and cost-effectiveness',
    description: 'Drona drones are inexpensive to procure and can be easily deployed in urban settings. This allows for large-scale and continuous monitoring of water sources, unlike centralized treatment facilities that are costly and not easily scalable.',
    icon: TrendingUp,
  },
  {
    title: 'Environmental and operational efficiency',
    description: 'Our drones are powered by solar panels, making them environmentally friendly. Their decentralized nature eliminates the need for transportation, reducing both operational costs and delays associated with traditional detection methods.',
    icon: Zap,
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get to know Drona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <benefit.icon className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

