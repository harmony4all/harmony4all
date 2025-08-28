import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Testimonials Section Component
export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = [
    {
      name: "Senator Joseph Addabbo Jr.",
      role: "NY State Senator",
      content:
        `“I am proud to support Harmony4All and their incredible efforts to bring communities together through the power of music and the arts. By fostering creativity and inclusivity, this organization provides opportunities for individuals of all ages and backgrounds to connect and share in the joy of music. Investing in groups like Harmony4All is what helps add to the cultural and social fabric of our community, and I am committed to helping their mission thrive.”`,
      rating: 5,
      image: "https://static.wixstatic.com/media/30dc3d_bd367139bbb64b3b8d1729423a6b99f7~mv2.jpeg?dn=With Senator Joseph Addabbo.JPEG",
    },
    {
      name: "Education Through Music",
      role: "Major Funder & Partner",
      content:
        `“Education Through Music (ETM) has been a valued partner to P.S. 154 for over a decade, providing quality music education, instruments, and helping us launch a 4th & 5th grade band program. Repairing our 12 school-owned instruments would allow even more students to participate in band for years to come, enriching their music education. We are grateful for ETM’s support and hope to continue this partnership.”`,
      rating: 5,
      image: "https://etmonline.org/wp-content/uploads/2024/08/ETM-Color-Logo-transparent-background.png",
    },
    {
      name: "Maple Grove Cemetery",
      role: "Community Partner",
      content:
        `“Friends of Maple Grove Cemetery is proud to support Harmony 4 All, a nonprofit making music education accessible to underserved students in NYC. Their instrument rentals, teacher support, and school partnerships help young musicians thrive, and we’ve seen their impact firsthand through a concert that uplifted our community. We wholeheartedly endorse Harmony 4 All and their transformative mission.”`,
      rating: 5,
      image: "/image.png",
    },
    {
      name: "The New York Injury Law Firm",
      role: "Corporate Supporter",
      content:
        `“The New York Injury Law Firm proudly supports Harmony 4 All and their mission to promote inclusion, healing, and opportunity through arts, education, and outreach. Their work embodies compassion, creativity, and advocacy, and we look forward to seeing them continue to grow and inspire the community.”`,
      rating: 5,
      image: "https://thenewyorkinjurylawfirm.com/wp-content/uploads/2024/11/New-York-Injury-Firm.png.webp",
    },
    {
      name: "Maspeth Elementary School",
      role: "Educational Partner",
      content:
        `“As the music teacher at PS 153 in Queens, my dream is to build a band program that inspires lifelong musicians. While we have over 100 instruments, most are in disrepair, limiting my 30 eager students each week. With proper repairs, these instruments could serve students for years, giving them the chance to succeed and truly experience the joy of music. Harmony 4 All’s support would make a lasting impact at our Title 1 school.”`,
      rating: 5,
      image: "/emt153.png",
    },
    {
      name: "New York State Assembly",
      role: "Government Partner",
      content:
        `“Harmony 4 All is a remarkable nonprofit providing free, high-quality music education and resources to underserved K-12 students in NYC. I had the privilege of partnering with them in 2024 and witnessed their positive impact through performances and community initiatives. Their work fosters creativity, cultural engagement, and youth empowerment, ensuring every child has access to enriching music opportunities. I fully support their mission and look forward to their continued impact across the city.”`,
      rating: 5,
      image: "https://static.wixstatic.com/media/d717d4_05b13ab329714f6bb79c12184de08986~mv2.png",
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 10000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Determine if current slide should have image on left or right
  const isImageOnLeft = currentTestimonial % 2 === 0

  return (
    <section id="testimonials-section" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the families, therapists, and volunteers who make our community special.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Card
            className={`bg-white border-0 shadow-2xl rounded-3xl overflow-hidden transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
0            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className={`order-1 ${isImageOnLeft ? 'lg:order-1' : 'lg:order-2'} relative`}>
                <div className="aspect-[3/4] overflow-hidden relative bg-gray-50 flex items-center justify-center">
                  {/* Check if it's a logo (contains 'logo' in URL or is from specific domains) */}
                  {testimonials[currentTestimonial].image.includes('logo') || 
                   testimonials[currentTestimonial].image.includes('etmonline.org') ||
                   testimonials[currentTestimonial].image.includes('thenewyorkinjurylawfirm.com') ||
                   testimonials[currentTestimonial].image.includes('friendsofmaplegrove.org') ||
                   testimonials[currentTestimonial].image === '/image.png' ||
                   testimonials[currentTestimonial].image === '/emt153.png' ? (
                    // Logo styling - centered with actual size
                    <div className="p-8 flex items-center justify-center h-full">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-700 hover:scale-110"
                        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                      />
                    </div>
                  ) : (
                    // Media image styling - full cover
                    <>
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                      {/* Gradient overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className={`order-2 ${isImageOnLeft ? 'lg:order-2' : 'lg:order-1'} flex items-center bg-white`}>
                                <CardContent className="p-6 lg:p-8 w-full relative">
                
                  <div className="text-center lg:text-left">
                  

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed font-light relative">
                      <div className="pl-4 pr-4">
                        {testimonials[currentTestimonial].content}
                      </div>
                    </blockquote>
                     {/* Decorative element */}

                    {/* Author Info */}
                    <div className="border-t border-gray-100 pt-8">
                      <div className="font-bold text-xl text-gray-900 mb-2">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 font-medium text-lg">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

         

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? "bg-black scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}