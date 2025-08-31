"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Heart,
    Users,
    Music,
    Award,
    Star,
    Gift,
    HandHeart,
    Target,
    ArrowRight,
    CheckCircle,
    Phone,
    Mail,
    MapPin,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Play,
    Globe,
    BookOpen,
    Shield,
    Lightbulb,
    Sparkles,
    Trophy,
    Crown,
    Diamond
} from "lucide-react"

export default function SupportersPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [currentSpotlight, setCurrentSpotlight] = useState(0)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSpotlight((prev) => (prev + 1) % spotlightStories.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const supporters = {
        major: [
            { 
                name: "Education Through Music", 
                logo: "https://etmonline.org/wp-content/uploads/2024/08/ETM-Color-Logo-transparent-background.png", 
                website: "https://etmonline.org/",
                category: "Major Partner",
                impact: "Core Program Support",
                description: "Empowering music education across NYC schools"
            },
            { 
                name: "THE NEWYORK INJURY LAW FIRM", 
                logo: "https://thenewyorkinjurylawfirm.com/wp-content/uploads/2024/11/New-York-Injury-Firm.png.webp", 
                website: "https://thenewyorkinjurylawfirm.com/",
                category: "Legal Partner",
                impact: "Pro Bono Services",
                description: "Supporting our mission through legal expertise"
            },
            { 
                name: "Maple Grove Cemetery", 
                logo: "https://static.wixstatic.com/media/3e1dd4_d14e438abb2a4f91ae021d74a2f190d2~mv2_d_4500_1669_s_2.png/v1/fill/w_536,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FMG%20Logo.png", 
                website: "https://www.friendsofmaplegrove.org/",
                category: "Community Partner",
                impact: "Venue & Event Support",
                description: "Providing beautiful spaces for our community events"
            },
        ],
        community: [
            { 
                name: "Maspeth Elementary School", 
                logo: "/emt153.png", 
                website: "https://www.psl53online.org/",
                category: "School Partner",
                impact: "Program Implementation",
                description: "Bringing music education to students daily"
            },
            { 
                name: "THE ASSEMBLY STATE OF NEW YORK ALBANY", 
                logo: "/albany.png", 
                website: "https://www.assembly.state.ny.us/members/assemblymember-jose-p.serrano",
                category: "Government Partner",
                impact: "Policy & Advocacy",
                description: "Advocating for arts education in New York"
            },
        ]
    }

    const spotlightStories = [
        {
            name: "Education Through Music",
            logo: "https://etmonline.org/wp-content/uploads/2024/08/ETM-Color-Logo-transparent-background.png",
            description: "Their partnership has enabled us to provide comprehensive music education to over 500 students across multiple NYC schools, creating lasting opportunities for musical growth and development.",
            impact: "500+ students reached",
            website: "https://etmonline.org/",
            category: "Featured Partner"
        },
        {
            name: "Maple Grove Cemetery",
            logo: "https://static.wixstatic.com/media/3e1dd4_d14e438abb2a4f91ae021d74a2f190d2~mv2_d_4500_1669_s_2.png/v1/fill/w_536,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FMG%20Logo.png",
            description: "Through their generous venue support, we've been able to host community concerts and events that bring music to thousands of Queens residents each year.",
            impact: "Community events hosted",
            website: "https://www.friendsofmaplegrove.org/",
            category: "Community Champion"
        }
    ]

    const impactStats = [
        { number: "500+", label: "Students Reached", icon: Users },
        { number: "15+", label: "School Partners", icon: BookOpen },
        { number: "50+", label: "Community Events", icon: Music },
        { number: "1000+", label: "Lives Impacted", icon: Heart }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative py-12 md:py-16 lg:py-20 bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute top-32 right-20 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-6 md:mb-8">
                            <Crown className="h-16 w-16 md:h-20 md:w-20 mx-auto text-white animate-pulse" />
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Our Supporters
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                            Meet the incredible partners who make our mission possible
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
                            Together with our supporters, we're building a more harmonious world through music education, 
                            community engagement, and artistic expression.
                        </p>
                        <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
                            <Badge className="bg-white/20 text-white border-white/30 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                Partners
                            </Badge>
                            <Badge className="bg-white/20 text-white border-white/30 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                                <Trophy className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                Champions
                            </Badge>
                            <Badge className="bg-white/20 text-white border-white/30 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                                <Diamond className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                Supporters
                            </Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8 md:mb-12">Our Impact Together</h2>
                        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
                            {impactStats.map((stat, index) => {
                                const IconComponent = stat.icon
                                return (
                                    <div 
                                        key={index}
                                        className="text-center group hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                                            <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-black mb-1 md:mb-2">{stat.number}</div>
                                        <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Spotlight Stories */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8 md:mb-12">Featured Partnerships</h2>
                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl">
                                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSpotlight * 100}%)` }}>
                                    {spotlightStories.map((story, index) => (
                                        <div key={index} className="w-full flex-shrink-0">
                                            <Card className="border-0 shadow-2xl bg-white">
                                                <CardContent className="p-6 md:p-8">
                                                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                                                        <div>
                                                            <Badge className="mb-3 md:mb-4 bg-black text-white text-xs md:text-sm">
                                                                {story.category}
                                                            </Badge>
                                                            <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">{story.name}</h3>
                                                            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{story.description}</p>
                                                            <div className="flex items-center mb-4 md:mb-6">
                                                                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2" />
                                                                <span className="text-green-600 font-medium text-sm md:text-base">{story.impact}</span>
                                                            </div>
                                                            <Button asChild className="bg-black hover:bg-gray-800 text-sm md:text-base">
                                                                <Link href={story.website} target="_blank" rel="noopener noreferrer">
                                                                    Visit Website
                                                                    <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                                                                </Link>
                                                            </Button>
                                                        </div>
                                                        <div className="flex justify-center">
                                                            <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 rounded-2xl flex items-center justify-center p-3 md:p-4">
                                                                <img 
                                                                    src={story.logo} 
                                                                    alt={story.name}
                                                                    className="max-w-full max-h-full object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                                onClick={() => setCurrentSpotlight((prev) => (prev - 1 + spotlightStories.length) % spotlightStories.length)}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                                onClick={() => setCurrentSpotlight((prev) => (prev + 1) % spotlightStories.length)}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Major Supporters */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8 md:mb-12">Major Partners</h2>
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {supporters.major.map((supporter, index) => (
                                <Card 
                                    key={index}
                                    className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <CardContent className="p-4 md:p-6">
                                        <div className="text-center">
                                            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 bg-gray-100 rounded-xl flex items-center justify-center p-3 md:p-4 group-hover:bg-gray-200 transition-colors duration-300">
                                                <img 
                                                    src={supporter.logo} 
                                                    alt={supporter.name}
                                                    className="max-w-full max-h-full object-contain"
                                                />
                                            </div>
                                            <Badge className="mb-2 md:mb-3 bg-black text-white text-xs">
                                                {supporter.category}
                                            </Badge>
                                            <h3 className="text-base md:text-lg font-semibold text-black mb-1 md:mb-2">{supporter.name}</h3>
                                            <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">{supporter.description}</p>
                                            <div className="text-xs text-green-600 font-medium mb-3 md:mb-4">
                                                {supporter.impact}
                                            </div>
                                            <Button asChild size="sm" variant="outline" className="w-full text-xs md:text-sm">
                                                <Link href={supporter.website} target="_blank" rel="noopener noreferrer">
                                                    Learn More
                                                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Partners */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8 md:mb-12">Community Partners</h2>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {supporters.community.map((supporter, index) => (
                                <Card 
                                    key={index}
                                    className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                                >
                                    <CardContent className="p-4 md:p-6">
                                        <div className="flex items-center space-x-3 md:space-x-4">
                                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-xl flex items-center justify-center p-2 md:p-3 group-hover:bg-gray-200 transition-colors duration-300">
                                                <img 
                                                    src={supporter.logo} 
                                                    alt={supporter.name}
                                                    className="max-w-full max-h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <Badge className="mb-1 md:mb-2 bg-black text-white text-xs">
                                                    {supporter.category}
                                                </Badge>
                                                <h3 className="text-base md:text-lg font-semibold text-black mb-1">{supporter.name}</h3>
                                                <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">{supporter.description}</p>
                                                <div className="text-xs text-green-600 font-medium mb-2 md:mb-3">
                                                    {supporter.impact}
                                                </div>
                                                <Button asChild size="sm" variant="outline" className="text-xs md:text-sm">
                                                    <Link href={supporter.website} target="_blank" rel="noopener noreferrer">
                                                        Visit Website
                                                        <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 md:py-16 lg:py-20 bg-black text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Join Our Network of Supporters</h2>
                        <p className="text-sm md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed">
                            Whether you're an individual, organization, or business, there are many ways to support our mission 
                            and help bring music education to underserved communities.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                                <Link href="/donate">
                                    <Gift className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                                    Make a Donation
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                                <Link href="/contact">
                                    <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                                    Partner With Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
