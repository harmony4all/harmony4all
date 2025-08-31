"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  HandHeart,
  Gift,
  Music,
  Wrench,
  Mic,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { WelcomePopup } from "@/components/welcome-popup"
import ContactSection from "@/components/contact"
import NewsletterSection from "@/components/news-letter"
import { TestimonialsSection } from "@/components/Testimonial"
import api from "../api/api"

// Hero Carousel Component
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = [
    {
      title: "Building a World of Harmony Through Music",
      subtitle:
        "Inspiring the next generation to discover their voices, unite communities, and transform lives through the power of music.",
      image: "/1.jpeg",

    },
    {
      title: "Did you Know?",
      subtitle:
        "Schools with music programs have an estimated 90.2 percent graduation rate compared to 72.9 percent for schools without music education.",
      image: "/2.jpeg",

    },
    {
      title: "Building Communities Through Music",
      subtitle: "Together, we are opening doors for the next generation to discover their voices, expand their potential, and strengthen the bonds of community.",
      image: "/3.jpg",

    },
    {
      title: "Educational Excellence Through Music",
      subtitle:
        "Cultivating creativity, confidence, and possibility by giving every child access to the transformative power of music.",
      image: "/4.avif",

    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 6000)
      return () => clearInterval(timer)
    }
  }, [isPaused])

  return (
    <section
      className="relative min-h-[800px] sm:min-h-screen flex items-center justify-center overflow-hidden"
      role="region"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          aria-hidden={index !== currentSlide}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
            role="img"
            aria-label={`Background image for slide ${index + 1}: ${slide.title}`}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center h-full flex items-center">
            <div className="max-w-4xl mx-auto text-white">
              <h1
                className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-300 px-2 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                {slide.title}
              </h1>
              {slide.title === "THE IMPACT" ? (
                <div
                  className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-500 px-2 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                />
              ) : (
                <p
                  className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed transition-all duration-1000 delay-500 px-2 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  {slide.subtitle}
                </p>
              )}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
      </Button>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20"
        role="tablist"
        aria-label="Carousel slide indicators"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-selected={index === currentSlide}
            role="tab"
          />
        ))}
      </div>


    </section>
  )
}

// Who We Are Section Component
const WhoWeAreSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("who-we-are-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="who-we-are-section" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Who We Are</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
              <span className="font-bold  px-1 rounded">Harmony 4 All</span> is a youth-led nonprofit founded on the belief that every child deserves the opportunity to explore their fullest potential. We provide underserved K-12 students across New York City with free access to instruments, music education resources, and community concerts—nurturing creativity, confidence, and connection. Through the power of music, we strengthen schools, uplift families, and inspire generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Mission & Values Section Component
const MissionValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("mission-values-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="mission-values-section" className="py-12 sm:py-16 md:py-20 lg:py-[80px] bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
            {/* Left Column - Mission and Core Values */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Our Mission</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                At <span className="font-bold  px-1 rounded">Harmony 4 All</span>, our mission is to ensure that music is not a privilege, but a pathway open to every child. As a youth-led nonprofit, we provide underserved K-12 students across New York City with free instruments, educational resources, and community programs. Through music, we spark creativity, strengthen confidence, and weave connections that uplift families and communities. Our vision is a world where every child can discover their voice and shape a brighter future in harmony with others.
              </p>

              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Our Core Values</h4>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base md:text-lg">Excellence in Access</strong>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">We believe every child deserves the highest quality opportunities to learn, grow, and shine through music.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base md:text-lg">Harmony in Community</strong>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">We use music as a bridge to bring students, families, and neighborhoods together.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base md:text-lg">Creativity with Purpose</strong>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">We nurture imagination and artistry while fostering resilience, confidence, and leadership.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base md:text-lg">Generations in Resonance</strong>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">We honor the voices of the past, uplift the students of today, and inspire the leaders of tomorrow through the timeless power of music.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Large Image */}
            <div
              className={`relative transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
            >
              <div className="relative">
                <img
                  src="https://static.wixstatic.com/media/8e9eb3_12bc08b163d4457c8ad38ec76bcbb751~mv2.jpg/v1/fill/w_1046,h_1046,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/samuel-sianipar-4TNd3hsW3PM-unsplash.jpg"
                  alt="Orchestra performing music"
                  className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[850px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 right-0 bg-black text-white p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl shadow-xl animate-pulse">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">3+</p>
                  <p className="text-xs sm:text-sm">Years of Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Programs Section Component with staggered animations
const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("programs-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const programs = [

    {
      icon: Music,
      title: "Instrument Rental",
      description: "Affordable instrument rental program for students who want to try different instruments.",
      features: ["Monthly rentals", "Student discounts", "Maintenance included", "Easy returns"],
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Wrench,
      title: "Instrument Repair",
      description: "Professional repair services to keep instruments in perfect playing condition.",
      features: ["Expert technicians", "Quick turnaround", "Warranty included", "All instrument types"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Mic,
      title: "Musical Curriculum",
      description: "Empowering students with resources and opportunities to learn, grow, and shine through music.",
      features: ["Engaging digital and print learning resources", "Student-centered educational pathways", "Community concerts and workshops", "Performance opportunities"],
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Gift,
      title: "Instrument Donation",
      description: "Donate musical instruments to help make music education accessible to all students.",
      features: ["Accept all instruments", "Tax deductible", "Pickup service", "Quality inspection"],
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section id="programs-section" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Services</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-6xl mx-auto px-2">
            Discover how Harmony 4 All opens doors of opportunity through music. Our programs provide the tools, resources, and support that help underserved students explore their creativity, strengthen their confidence, and grow with their communities.

          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-500 border-0 rounded-2xl overflow-hidden group hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <program.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-center text-sm sm:text-base">{program.description}</CardDescription>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-2 sm:mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Get Involved Section Component
const GetInvolvedSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("get-involved-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Give the gift of music and change a child's future.",
      cta: "Change a Life",
      image: "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description:
        "Share your time and talents to uplift students and communities.",
      cta: "Lift a Voice",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
    {
      icon: Gift,
      title: "Sponsor",
      description:
        "Stand with us to expand music access and strengthen communities.",
      cta: "Fuel the Future",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section id="get-involved-section" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Get Involved</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Help every child find their voice through music. Your support puts instruments in their hands, opportunities in their path, and harmony in our communities.          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {ways.map((way, index) => (
            <Card
              key={index}
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-500 border-0 rounded-2xl overflow-hidden group hover:scale-105 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={way.image}
                  alt={way.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <way.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">{way.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {way.description}
                </CardDescription>
                <Link href={way.title === "Donate" ? "/donate" : way.title === "Volunteer" ? "/volunteer" : "/sponsor"}>
                  <Button className="bg-black text-white hover:bg-gray-800 hover:shadow-lg transition-all duration-300 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base hover:scale-105">
                    {way.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Home Blog Teaser
const HomeBlogSection = () => {
  const [posts, setPosts] = useState<any[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true)
        const response = await api.get('/blogs')
        setPosts((response.data || []).slice(0, 3))
      } catch (error) {
        console.error('Failed to load blog posts:', error)
      } finally {
        setIsLoading(false)
      }
    }
    load()
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

    const element = document.getElementById("blog-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog-section" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Latest from Our Blog</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Discover inspiring stories, educational insights, and updates from our music education community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {isLoading ? (
              // Loading state
              Array.from({ length: 3 }).map((_, index) => (
                <Card
                  key={index}
                  className={`bg-white shadow-xl border-0 rounded-3xl overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video bg-gray-200 animate-pulse"></div>
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-6 w-2/3"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                      </div>
                      <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : posts.length > 0 ? (
              // Posts content
              posts.map((post: any, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <Card
                    className={`bg-white shadow-xl border-0 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        {post.url ? (
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <img
                              src={post.image || '/placeholder.jpg'}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                            />
                          </a>
                        ) : (
                          <img
                            src={post.image || '/placeholder.jpg'}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        )}
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-black/80 text-white backdrop-blur-sm border-0">
                          Blog Post
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="mb-3 sm:mb-4">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2 group-hover:text-black transition-colors duration-300">
                        {post.title}
                      </h3>

                      {post.description && (
                        <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
                          {post.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-500">Harmony 4 All</span>
                        </div>

                        <div className="flex items-center text-black transition-colors duration-300">
                          <span className="text-xs sm:text-sm font-medium mr-1 sm:mr-2">Read More</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              // Empty state
              <div className="lg:col-span-3 text-center py-8 sm:py-12">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <BookOpen className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">No Blog Posts Yet</h3>
                <p className="text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base px-2">
                  We're working on creating amazing content for our community. Check back soon for inspiring stories and educational insights!
                </p>
                <Link href="/blog">
                  <Button className="bg-black text-white hover:bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                    Visit Our Blog
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {!isLoading && posts.length > 0 && (
            <div
              className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <Link href="/blog">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                  View All Blog Posts
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}



// Main Page Component
export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroCarousel />
      <WhoWeAreSection />
      <MissionValuesSection />
      <ProgramsSection />
      <GetInvolvedSection />
      <TestimonialsSection />
      <HomeBlogSection />
      <ContactSection />
      <NewsletterSection />
      <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}



