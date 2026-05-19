import { BookOpen, Users, Heart, Award, Palette, Music } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { ImageUploadPlaceholder } from '@/components/image-upload-placeholder'

const features = [
  {
    icon: BookOpen,
    title: 'Play-Based Learning',
    description: 'We believe children learn best through play. Our curriculum integrates fun activities with foundational skills.',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Individual attention for every child with our small student-to-teacher ratio ensures personalized care.',
  },
  {
    icon: Heart,
    title: 'Nurturing Environment',
    description: 'A warm, safe, and loving atmosphere where children feel secure to explore and grow.',
  },
  {
    icon: Award,
    title: 'Qualified Teachers',
    description: 'Our experienced educators are passionate about early childhood development.',
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    description: 'Art, craft, and creative expression are central to developing imagination and fine motor skills.',
  },
  {
    icon: Music,
    title: 'Music & Movement',
    description: 'Singing, dancing, and rhythmic activities help develop coordination and self-expression.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-md">
            🎨 Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            <span className="text-balance">Building a </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Strong Foundation</span>
            <span className="text-balance"> for Tomorrow</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Cecil Convent School Junior Playway, we are dedicated to providing quality early childhood education in Ambala Cantt. Our mission is to nurture curious minds, kind hearts, and creative spirits in a safe and stimulating environment.
          </p>
        </div>

        {/* Features Grid - Primary Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 border-yellow-200 hover:border-blue-400 hover:shadow-lg transition-all rounded-2xl bg-white group"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-200 flex items-center justify-center mb-4 group-hover:shadow-lg transition-all">
                  <feature.icon className="w-7 h-7 text-blue-900 font-bold" />
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content - Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 border-4 border-yellow-300 shadow-xl">
          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-lg bg-blue-50 aspect-[4/3] border-4 border-blue-200">
              <ImageUploadPlaceholder
                id="about-class-activity"
                alt="Classroom Activities - Children Learning"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-300/20 rounded-full -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Where Every Child&apos;s Journey Begins with Joy
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded with a vision to create a nurturing space for young learners, Cecil Convent School Junior Playway has been a trusted name in early childhood education in Ambala Cantt for over 15 years.
              </p>
              <p>
                We understand that the early years are crucial for a child&apos;s development. Our carefully designed programs focus on building cognitive, social, emotional, and physical skills through engaging activities and play-based learning.
              </p>
              <p>
                Our dedicated team of teachers creates a warm and welcoming environment where children feel safe to explore, question, and discover the world around them.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-4 text-center border-2 border-blue-200">
                <div className="text-2xl font-extrabold text-blue-900">Age 2-6</div>
                <div className="text-sm text-blue-700 font-semibold">Years Old</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-4 text-center border-2 border-yellow-200">
                <div className="text-2xl font-extrabold text-blue-900">1:10</div>
                <div className="text-sm text-blue-700 font-semibold">Teacher Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
