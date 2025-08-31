import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

// Testimonials Section Component
export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [expandedTestimonials, setExpandedTestimonials] = useState<{ [key: number]: boolean }>({})

  const testimonials = [
    {
      name: "Joseph P. Addabbo, Jr.",
      role: "New York State Senator, District 15",
      content:
        `"I am pleased to express my strong support for <strong>Harmony 4 All, Inc.</strong> and its mission to provide free, high-quality music education to underserved K-12 students across New York City.<br>

Your dedication to breaking barriers in arts education through instrument rentals, repair services, digital curriculums, and community concerts is truly commendable.<br>

By ensuring that children in marginalized communities have access to the transformative power of music, you are not only fostering creativity but also strengthening our communities. The work you do aligns with my commitment to expanding opportunities for young people and supporting arts education in our city.<br>

It has been a pleasure sponsoring <strong>Harmony 4 All</strong> musical events in my district to entertain and inform my constituents of its mission. I look forward to seeing <strong>Harmony 4 All</strong> continue to grow and positively impact even more students.<br>

Please do not hesitate to reach out if my office can be of further assistance."`,
      rating: 5,
      image: "/joseph p.jpg",
    },
    {
      name: "Nick LaFleur",
      role: "Director of Partnership Programs, Education Through Music",
      content:
        `"<strong>Education Through Music (ETM)</strong> is happy to partner with <strong>Harmony 4 All</strong>, a youth-led nonprofit dedicated to advancing educational equity through access to quality music education for underserved New York City students.<br>

Earlier this year, <strong>Harmony 4 All</strong> provided critical funding that enabled ETM to repair twelve school-owned band instruments at PS 154 in Queens—an ETM partner school serving a predominantly low-income, Title I student population.<br>

These repairs supported our joint goal of expanding the school's band program from 35 to 50 students, creating more opportunities for children to engage with music.<br>

We share in <strong>Harmony 4 All</strong>'s mission to ensure no child is excluded from the joy and growth of music because of financial hardship, which aligns with ETM's own commitment to educational equity.<br>

ETM looks forward to continuing our partnership with <strong>Harmony 4 All</strong> and working together again in the future to ensure that every child has access to the power of music."`,
      rating: 5,
      image: "https://etmonline.org/wp-content/uploads/2024/08/ETM-Color-Logo-transparent-background.png",
    },
    {
      name: "Pamela Gathers-Bullard",
      role: "Principal, P.S. 154 Queens",
      content:
        `"I write this letter in support of <strong>Education Through Music (ETM)</strong>, a valued partner which has been supporting the P.S. 154 students and community for over 10 years by providing high quality music education with music instruction and musical instruments.<br>

ETM has also helped us launch and sustain our 4th & 5th grade band program. This has been a wonderful opportunity for many of our students and we would like to continue to provide this opportunity to even more students moving forward.<br>

However, the cost of purchasing new band instruments at this time is not possible. So, by providing the funds to repair these 12 school-owned instruments at P.S. 154 Queens, you will allow many more students to participate in the school band program for many years to come, further enriching their music education.<br>

I sincerely hope you can partner with ETM to make this possible."`,
      rating: 5,
      image: "/emt153.png",
    },
    {
      name: "Shahriar Hossain",
      role: "President of the Friends of Maple Grove",
      content:
        `"On behalf of the Friends of Maple Grove Cemetery, it is with great enthusiasm that I offer this letter of support for <strong>Harmony 4 All</strong>, a remarkable nonprofit dedicated to making music education accessible to underserved students in New York City.<br>

Their mission to bridge the gap in musical education resonates deeply with our values of education, preservation, and community engagement.<br>

<strong>Harmony 4 All</strong> has already left a profound impact on our own community, having brought their extraordinary talents to Maple Grove Cemetery in a concert that not only showcased their musicianship but also uplifted and inspired all who attended.<br>

Through free instrument rentals, curriculum support for teachers, and partnerships with underfunded schools, <strong>Harmony 4 All</strong> fosters an environment where young musicians can flourish.<br>

We wholeheartedly endorse <strong>Harmony 4 All</strong> and encourage any institution or funding body to invest in their invaluable work.<br>

Their impact is not only measurable. It is transformative."`,
      rating: 5,
      image: "/image.png",
    },
    {
      name: "Harvey Epstein",
      role: "New York State Assembly Member, District 74",
      content:
        `"I am pleased to write this letter in support of <strong>Harmony 4 All</strong>, a remarkable nonprofit organization dedicated to providing free access to high-quality music education and resources for underserved K-12 students across New York City.<br>

    <strong>Harmony 4 All</strong> is a 501(c)(3) nonprofit that has been instrumental in creating meaningful musical opportunities for students who would otherwise lack access to music education, instrument rentals, and essential repairs.<br>

    In 2024, my office had the privilege of partnering with <strong>Harmony 4 All</strong> to bring music to our community through engaging performances and initiatives that uplifted constituents of all ages.<br>

I fully support <strong>Harmony 4 All</strong>'s efforts to expand its programming and impact, as they not only provide free access to music education but also strengthen communities by fostering creativity, cultural engagement, and youth empowerment."`,
      rating: 5,
      image: "/harvey.jpg",
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleExpanded = (index: number) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const truncateContent = (content: string, maxLength: number = 500) => {
    // Remove HTML tags for length calculation
    const textContent = content.replace(/<[^>]*>/g, '')
    if (textContent.length <= maxLength) return content
    
    // Find a good breaking point (end of sentence or word)
    const truncated = textContent.substring(0, maxLength)
    const lastPeriod = truncated.lastIndexOf('.')
    const lastSpace = truncated.lastIndexOf(' ')
    
    const breakPoint = lastPeriod > maxLength * 0.7 ? lastPeriod : lastSpace
    const finalText = textContent.substring(0, breakPoint) + '... <span class="font-bold text-black text-[16px] cursor-pointer hover:underline">Read More</span>'
    
    // Reconstruct with basic HTML formatting
    return finalText.replace(/\n/g, '<br>')
  }

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (isPlaying) {
      timer = setInterval(nextTestimonial, 10000)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isPlaying])

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
  
  // Check if current testimonial content is long enough to need truncation
  const currentContent = testimonials[currentTestimonial].content
  const textContent = currentContent.replace(/<[^>]*>/g, '')
  const isLongContent = textContent.length > 300
  const isExpanded = expandedTestimonials[currentTestimonial] || false
  const displayContent = isExpanded ? 
    currentContent + ' <span class="font-bold text-black text-[16px] cursor-pointer hover:underline">Read Less</span>' : 
    truncateContent(currentContent)

  return (
    <section id="testimonials-section" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Voices of support. What our community says.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Card
            className={`bg-white border-0 shadow-2xl rounded-3xl overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className={`order-1 ${isImageOnLeft ? 'lg:order-1' : 'lg:order-2'} relative`}>
                <div className="h-auto min-h-[200px] sm:min-h-[300px] md:aspect-[3/4] overflow-hidden relative flex items-center justify-center">
                  {/* Check if it's a logo (contains 'logo' in URL or is from specific domains) */}
                  {testimonials[currentTestimonial].image.includes('logo') ||
                    testimonials[currentTestimonial].image.includes('etmonline.org') ||
                    testimonials[currentTestimonial].image.includes('thenewyorkinjurylawfirm.com') ||
                    testimonials[currentTestimonial].image.includes('friendsofmaplegrove.org') ||
                    testimonials[currentTestimonial].image === '/image.png' ||
                    testimonials[currentTestimonial].image === '/emt153.png' ? (
                    // Logo styling - centered with actual size
                    <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center h-full w-full">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  ) : (
                    // Media image styling - contain instead of cover
                    <>
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105"
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className={`order-2 ${isImageOnLeft ? 'lg:order-2' : 'lg:order-1'} flex items-center bg-white`}>
                <CardContent className="px-6 lg:px-8 w-full relative">

                  <div className="text-left lg:text-left">


                    {/* Quote */}
                    <blockquote 
                      className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed font-light relative"
                      onClick={() => isLongContent && toggleExpanded(currentTestimonial)}
                    >
                      <div 
                        className="text-[16px]"
                        dangerouslySetInnerHTML={{ __html: displayContent }}
                      />
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



          {/* Controls and Progress Indicator */}
          <div className="flex flex-col items-center mt-8 space-y-4">
            {/* Play/Pause Button */}
            <Button
              onClick={togglePlayPause}
              variant="outline"
              size="sm"
              className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-black hover:bg-gray-50 transition-all duration-300"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-gray-700" />
              ) : (
                <Play className="h-5 w-5 text-gray-700" />
              )}
            </Button>

            {/* Progress Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                    ? "bg-black scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}