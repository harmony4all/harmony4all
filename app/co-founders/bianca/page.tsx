"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Music, 
  Star, 
  Globe,
  BookOpen,
  Mic,
  Trophy,
  Piano,
  ArrowLeft,
  Mail,
  MapPin,
  Calendar,
  Award
} from "lucide-react"

export default function BiancaPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const achievements = {
    education: [
      "Graduated Juilliard Preparatory Division, Class of 2024",
      "Currently studying at University of Massachusetts Amherst",
      "Studied at Bronx High School of Science (BHSS)",
      "Clarinet Graduate of Juilliard Preparatory Division"
    ],
    leadership: [
      "Global Youth Ambassador to the Foundation of Support for the UN",
      "Colburn School's Fortissima Program Participant",
      "YOLA Festival Participant (2020)",
      "New York Times Summer Academy - Diverse Voices Scholar"
    ],
    journalism: [
      "Staff Reporter for The Science Survey",
      "Editor of Juilliard MAP Newsletter",
      "Public Forum Debate Team Member"
    ]
  }

  const performances = [
    "Carnegie Hall",
    "Lincoln Center", 
    "The Colburn School",
    "The Juilliard School",
    "New England Conservatory",
    "United Nations",
    "Harvard Medical School"
  ]

  const longBio = [
    "As a child of immigrants, Bianca is incredibly passionate about using her artistic voice to advocate for equity and human rights, especially in the music world. In 2021, Bianca was chosen, alongside nine young women nationally, to take part in the Colburn School's Fortissima, a program for young women of color's leadership in classical music. She also participated in the YOLA Festival in the summer of 2020.",
    "Bianca has performed at prestigious institutions across the country, including Carnegie Hall, Lincoln Center, The Colburn School, The Juilliard School, New England Conservatory, the United Nations, and Harvard Medical School.",
    "In addition to her musical background, Bianca is a zealous writer. In the summer of 2022, she participated in the New York Times Summer Academy and was awarded the Diverse Voices scholarship. Currently, she is a staff reporter for The Science Survey, the main publication of the Bronx High School of Science, and the editor of the Juilliard Music Advancement Program's newsletter. She is also a member of the Public Forum debate team at the Bronx High School of Science."
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-black hover:text-gray-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/about" className="text-black hover:text-gray-800">
              About Us
            </Link>
            
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Bianca Quddus</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: `url('https://static.wixstatic.com/media/8e9eb3_1f1fb0738c554f75b5c0145d843e7995~mv2.jpg/v1/fill/w_1920,h_1058,al_c,q_90,enc_avif,quality_auto/8e9eb3_1f1fb0738c554f75b5c0145d843e7995~mv2.jpg')`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 md:border-6 lg:border-8 border-white ring-2 md:ring-4 ring-gray-100">
                <img
                  src="/bianca.png"
                  alt="Bianca Quddus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 lg:-bottom-4 lg:-right-4 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center shadow-lg">
                <Piano className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center lg:text-left text-white">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 drop-shadow-lg">Bianca Quddus</h1>
              <Badge className="bg-white text-black text-sm md:text-base lg:text-lg px-4 md:px-6 py-1 md:py-2 mb-4 md:mb-6">
                Co-Founder
              </Badge>
              <p className="text-base md:text-lg lg:text-2xl mb-6 md:mb-8 opacity-90 max-w-3xl drop-shadow-lg">
              Juilliard Preparatory Division Graduate
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">New York City</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <Music className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Clarinet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <Link href="/about">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to About
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {/* Left Column - Biography */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                {/* Biography */}
                <Card className="shadow-lg border-0 rounded-2xl">
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center">
                      <BookOpen className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 mr-2 md:mr-3 lg:mr-4 text-black" />
                      Biography
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6">
                    {longBio.map((paragraph, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card className="shadow-lg border-0 rounded-2xl">
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center">
                      <Trophy className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 mr-2 md:mr-3 lg:mr-4 text-black" />
                      Key Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      {Object.entries(achievements).map(([category, items]) => (
                        <div key={category} className="space-y-2">
                          <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                            <Star className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 text-black" />
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </h4>
                          <div className="space-y-2">
                            {items.map((item, i) => (
                              <div key={i} className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 bg-gray-50 rounded-lg">
                                <Star className="h-4 w-4 md:h-5 md:w-5 text-gray-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-xs md:text-sm lg:text-base">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Venues */}
                <Card className="shadow-lg border-0 rounded-2xl">
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center">
                      <Mic className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 mr-2 md:mr-3 lg:mr-4 text-black" />
                      Performance Venues
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      {performances.map((venue, i) => (
                        <div key={i} className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 bg-gray-50 rounded-lg">
                          <Music className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                          <span className="text-gray-700 font-medium text-xs md:text-sm lg:text-base">{venue}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Quick Info */}
              <div className="space-y-6 md:space-y-8 sticky top-[50px] self-start">
                {/* Quick Stats */}
                <Card className="shadow-lg border-0 rounded-2xl">
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6">
                    {/* Education Section */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                        <BookOpen className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 text-black" />
                        Education
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-xs md:text-sm">Graduated Juilliard Preparatory Division, Class of 2024</span>
                        </div>
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-xs md:text-sm">Currently studying at University of Massachusetts Amherst</span>
                        </div>
                      </div>
                    </div>

                    {/* Leadership & Advocacy Section */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                        <Globe className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 text-black" />
                        Leadership & Advocacy
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-xs md:text-sm">Global Youth Ambassador</span>
                        </div>
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-xs md:text-sm">Diverse Voices Scholar</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact/Connect */}
                <Card className="shadow-lg border-0 rounded-2xl">
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Connect</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <p className="text-gray-600 text-sm md:text-base">
                      Interested in learning more about Bianca's work or supporting <span className="font-bold  px-1 rounded">Harmony 4 All</span>?
                    </p>
                    <div className="space-y-2 md:space-y-3">
                      <Link href="/contact">
                        <Button className="w-full bg-black hover:bg-gray-800 text-sm md:text-base">
                          <Mail className="mr-2 h-4 w-4" />
                          Get in Touch
                        </Button>
                      </Link>
                      <Link href="/donate">
                        <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50 text-sm md:text-base">
                          <Heart className="mr-2 h-4 w-4" />
                          Support Our Mission
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Support Bianca's Vision</h2>
          <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto">
            Join Bianca in her mission to make music education accessible to all students. 
            Your support helps us continue this important work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-full">
                <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Donate Now
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-black px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-full">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
