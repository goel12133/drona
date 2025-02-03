'use client'

import { useState } from 'react'
import { CreditCard, PenToolIcon as Tool, Database } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const services = [
  {
    id: "subscriptions",
    title: "Subscriptions",
    description: "We charge an initial per unit cost for the purchase of the drones, and a further monthly per unit surcharge for the right to use the drones, and for our team to help deploy/maintain the drones, with a minimum subscription of 3 months. For specific price quoting (which depends on bulk of purchase and length of collaboration) please reach out to us via email at dronasuppteam@gmail.com.",
    icon: CreditCard,
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Comprehensive care for your Drona fleet. Our expert technicians ensure your drones are always in peak condition, maximizing uptime and efficiency. Regular maintenance checks, software updates, and rapid repair services are all part of our commitment to keeping your water purification operations running smoothly. With our maintenance service, you can trust that your drones will perform optimally in even the most challenging environments.",
    icon: Tool,
  },
  {
    id: "dronadata",
    title: "DronaData",
    description: "Thanks to our drones and exclusive access to multiple water catchment sites, we have amassed a large amount of data surrounded with PFAS that is crucial to research and development. We are now offering this data for sale, for specific price quoting please reach out to us via email at dronasuppteam@gmail.com.",
    icon: Database,
  },
]

export default function Services() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  return (
    <section 
      id="services" 
      className="w-full py-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2563EB] text-center mb-12 shadow-text">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                id={service.id}
                className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Icon className="w-16 h-16 mb-6 text-[#2563EB] mx-auto" />
                <h2 className="text-2xl font-semibold text-[#2563EB] mb-4 text-center">{service.title}</h2>
                <Dialog open={openModal === service.id} onOpenChange={(open) => setOpenModal(open ? service.id : null)}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-[#2563EB] text-white hover:bg-[#1E40AF]">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] bg-white rounded-lg p-6">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[#2563EB] mb-4">{service.title}</DialogTitle>
                      <DialogDescription className="text-gray-700 text-lg">
                        {service.description}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

