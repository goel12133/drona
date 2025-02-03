'use client'

import Image from 'next/image'

interface TeamMember {
  name: string;
  description: string;
  imageUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex",
    description: "Alex is a 17-year-old high school student passionate about leveraging real-world data to address environmental challenges. While working on a school project to reduce food waste, he was approached by Jacob to join the Conrad team to explore PFAS contamination and its impact. This reignited his commitment to combating water pollution, leading him to take on the technical development of autonomous drones and their supporting software. His role is to create accurate drone simulations and develop proprietary software, e.g. a central web server, hardware code for drones, etc.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20at%2011.46.53%E2%80%AFPM-8m8GkggE7hxeLHQM5U4RZdmdfYqZGJ.png"
  },
  {
    name: "Belle",
    description: "Belle is a 16 year old high school student whose passion for water research began over 2 years ago. She has experience with water research, especially within the realm of PFAS. Beyond her published research regarding water contaminants, she has served as intern for both the NUS Civil and Environmental Department and the Public Utility Board Singapore's National Water Agency. She leverages her expertise on PFAS to guide the team in its project development and helps establish our projects connections to drive its impact beyond the scope of a regular high school project. Alongside Jacob, she conceived the proposal of the plan and found team members Alex and Vikram to help turn this proposal into a reality.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20at%2011.47.01%E2%80%AFPM-yOys4H7zHWAJZVSxJUXLbDufU4MtE9.png"
  },
  {
    name: "Jacob",
    description: "Jacob is a 16 year old high school student, who's passion for water research began over the 2024 summer. As he read more on the topic, he felt compelled to take action to help resolve this issue, particularly in the area of PFAS. He returned to school ambitiously conceptualising a swarm of solar-powered drones to autonomously detect, map, and treat PFAS levels in water bodies, after which he joined forces with Alex, Belle, and Vikram to achieve this goal. His role on the team is around website development, outreach, sourcing funds, and later on helping to physically assemble the drone.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-09%20at%209.33.27%E2%80%AFPM-SHqeNolZWbd63yscgfJc2FVAfS2O2Z.png"
  },
  {
    name: "Vikram",
    description: "Vikram is a 17-year-old high school student driven by a passion for leveraging technology to solve pressing global issues. After collaborating with Jacob on a particle physics project, he was invited to join the Conrad team to tackle PFAS contamination and its far-reaching effects. This new challenge deepened his commitment to environmental innovation, where his contributions include developing the team's website, securing funding, designing the drone, and assisting with its physical assembly.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-09%20at%208.53.43%E2%80%AFPM-ZQLw7KDXv523vr3eNcBITIKmXAxuZG.png"
  }
];

const endorsements = [
  { name: "National University of Singapore", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20at%202.56.37%E2%80%AFPM-32CStX5PhnHUFCanUDSsJ3GSsQFRmg.png" },
  { name: "Agency for Science, Technology and Research Singapore", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20at%202.56.58%E2%80%AFPM-NTTeDaD4GK2iTz43ajxt2aYUKmmuWu.png" },
  { name: "PUB Singapore's National Water Agency", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20at%202.57.09%E2%80%AFPM-l1nq0OhVjJA9njowfnKnIKZ6RrTJpI.png" },
  { name: "Nanyang Technological University", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20at%202.56.30%E2%80%AFPM-3fWTeqG9gNgf82hhtokoW9nz3ZXrWf.png" },
];

export default function AboutUs() {
  return (
    <div className="w-full bg-white">
      <section id="about" className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2563EB] text-center mb-8 shadow-text">About Us</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <div className="clearfix">
              <div className="float-right ml-6 mb-4 w-full sm:w-3/4 md:w-3/5 lg:w-1/2">
                <div className="relative aspect-[2/1.6] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-06%20at%2010.51.35%E2%80%AFPM-tL5dxjzxYXndJkWHMpa9U4cdoG1u1j.png"
                    alt="Global map of PFAS concentration in water showing the distribution of PFAS contamination across different regions"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 italic mt-2">
                  Figure 1: Ackerman Grunfeld, D. (n.d.). Global map of PFAS concentration in water. ResearchGate.
                </p>
              </div>
              <p>
                We are a team of High School juniors from United World College of South East Asia Dover Campus united by a shared passion for sustainable solutions for environmental issues.
              </p>
              <p>
                Our project aims to tackle per- and polyfluoroalkyl substances (PFAS) contaminants, known as "forever chemicals," a major global hazard to water quality and public health. Often present due to the production of industrial goods, PFAS can build up in the environment without biodegrading, resulting in serious health hazards like cancer, hormone disruption, and other illnesses.
              </p>
              <p>
                Recognizing the need for onsite real-time detection and cause-based mitigation of such pollutants, we decided to form a team and take action. Each member brought unique strengths and expertise to team discussion, united by a shared passion and commitment to environmental sustainability. Together, we formed a multidisciplinary team to create innovative solutions that aim to lead to tangible impact on water quality management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2563EB] text-center mb-8 shadow-text">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-6 relative w-72 h-72 mx-auto">
                  <Image
                    src={member.imageUrl || "/placeholder.svg?height=300&width=300"}
                    alt={`${member.name}'s photo`}
                    fill
                    className="rounded-lg object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[#2563EB] mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2563EB] text-center mb-8 shadow-text">Our Story and Vision</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <div className="clearfix">
              <div className="float-left mr-6 mb-4 w-full sm:w-1/2 md:w-2/5 lg:w-1/3">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-06%20at%2010.55.50%E2%80%AFPM-hjCNF38H3wwg0d5Aanvf5KQLipgBlQ.png"
                    alt="Photo with National Water Agency's Previous Deputy Chief Executive"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 italic mt-2">
                  Photo with National Water Agency's Previous Deputy Chief Executive, current Senior Consultant to Chief Executive (Right), Mr. Harry Seah.
                </p>
              </div>
              <p>
                Our journey began with Singapore's National Water Agency, where we saw the critical role of clean water and the challenges of addressing contaminants like PFAS—harmful "forever chemicals" linked to severe health issues. Despite the urgency, financial constraints hinder Singapore's ability to address this problem effectively.
              </p>
              <p>
                We've made significant progress, from conceiving the idea and securing funding to forming partnerships with Metrohm for sensor customization and PUB Singapore, whose Deputy Chief Executive, Harry Seah, supports patent applications and scaling the technology. We've also created simulations to optimize drone operations and are finalizing the purchase of biofuel cells for PFAS detection.
              </p>
              <p>
                Recognized by academic and government bodies, we are refining our design through lab experiments and aim to test drones in restricted water catchments. Once validated, we plan to patent the design, offer services to governments and companies worldwide, and tackle global water quality issues.
              </p>
              <p>
                As 16-year-olds, we recognize the scale of our ambition but believe partnerships with established organizations can drive meaningful change for critical water challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="endorsements" className="w-full py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2563EB] text-center mb-6 shadow-text">Endorsements</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {endorsements.map((endorsement, index) => (
              <div key={index} className="w-40 h-20 relative">
                <Image
                  src={endorsement.logo}
                  alt={`${endorsement.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

