import { Card, CardContent } from '@/components/ui/card'
import { ImageUploadPlaceholder } from '@/components/image-upload-placeholder'

const staffMembers = [
  {
    id: 1,
    
    name: 'Mrs. Priya Gupta',
    role: 'Senior Teacher',
    qualification: 'B.Ed., NTT',
    experience: '12 Years',
    specialty: 'Early Literacy',
    image: '/tec1.jfif',
  },
  {
    id: 2,
    name: 'Ms. Anjali Mehta',
    role: 'Class Teacher',
    qualification: 'M.A., NTT',
    experience: '8 Years',
    specialty: 'Creative Arts',
    image: '/tec2.jfif',
  },
  {
    id: 3,
    name: 'Mrs. Kavita Singh',
    role: 'Class Teacher',
    qualification: 'B.Ed.',
    experience: '10 Years',
    specialty: 'Numeracy Skills',
    image: '/tec3.jfif',
  },
  {
    id: 4,
    name: 'Ms. Neha Sharma',
    role: 'Activity Coordinator',
    qualification: 'B.A., NTT',
    experience: '6 Years',
    specialty: 'Music & Movement',
    image: '/tec4.jfif',
  },
  {
    id: 5,
    name: 'Mrs. Rekha Verma',
    role: 'Assistant Teacher',
    qualification: 'NTT Diploma',
    experience: '5 Years',
    specialty: 'Child Care',
    image: '/tes5.jfif',
  },
]

export function StaffSection() {
  return (
    <section id="staff" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-md">
            Meet Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6">
            Our Loving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Teachers</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
            Our dedicated team of experienced educators creates a nurturing environment where every child feels loved, safe, and inspired to learn.
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {staffMembers.map((staff) => (
            <Card 
              key={staff.id} 
              className="border-3 border-yellow-200 hover:border-blue-400 hover:shadow-xl transition-all rounded-2xl bg-white group text-center overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Photo - Circular Frame */}
                <div className="relative mx-auto mb-4">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-yellow-300 bg-gradient-to-br from-blue-100 to-yellow-100 group-hover:border-blue-400 transition-colors flex-shrink-0 shadow-lg">
      <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />              
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full shadow-md"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full shadow-md"></div>
                </div>

                {/* Staff Info */}
                <h3 className="text-lg font-bold text-blue-900 mb-1">{staff.name}</h3>
                <p className="text-blue-600 font-bold text-sm mb-2">{staff.role}</p>
                
                <div className="space-y-1 text-xs text-gray-700 font-semibold">
                  <p>{staff.qualification}</p>
                  <p>{staff.experience} Experience</p>
                </div>

                {/* Specialty Tag */}
                <div className="mt-4">
                  <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {staff.specialty}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-br from-blue-100 to-yellow-100 rounded-2xl p-6 md:p-8 border-3 border-yellow-300 shadow-lg">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Want to Join Our Team?</h4>
            <p className="text-gray-700 mb-4 font-semibold">
              We&apos;re always looking for passionate educators who love working with children.
            </p>
<a href="/contact" className="inline-block bg-[#243bb5] hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl mt-4">
  Contact Us
</a>
          </div>
        </div>
      </div>
    </section>
  )
}
