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
    Lightbulb
} from "lucide-react"

export default function FundersPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [currentSpotlight, setCurrentSpotlight] = useState(0)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSpotlight((prev) => (prev + 1) % spotlightStories.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])



    const funders = {
        major: [
            { name: "Education Through Music", logo: "https://etmonline.org/wp-content/uploads/2024/08/ETM-Color-Logo-transparent-background.png", website: "https://etmonline.org/" },
            { name: "THE NEWYORK INJURY LAW FIRM", logo: "https://thenewyorkinjurylawfirm.com/wp-content/uploads/2024/11/New-York-Injury-Firm.png.webp", website: "https://thenewyorkinjurylawfirm.com/" },
            { name: "Maple Grove Cemetery", logo: "https://static.wixstatic.com/media/3e1dd4_d14e438abb2a4f91ae021d74a2f190d2~mv2_d_4500_1669_s_2.png/v1/fill/w_536,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FMG%20Logo.png", website: "https://www.friendsofmaplegrove.org/" },
        ],
        community: [
            { name: "Education Through Music", logo: "https://etmonline.org/wp-content/uploads/2024/08/ETM-Color-Logo-transparent-background.png", website: "https://etmonline.org/" },
            { name: "Maspeth Elementary School", logo: "/emt153.png", website: "https://www.psl53online.org/" },
            { name: "Maple Grove Cemetery", logo: "https://static.wixstatic.com/media/3e1dd4_d14e438abb2a4f91ae021d74a2f190d2~mv2_d_4500_1669_s_2.png/v1/fill/w_536,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FMG%20Logo.png", website: "https://www.friendsofmaplegrove.org/" },
            { name: "THE NEWYORK INJURY LAW FIRM", logo: "https://thenewyorkinjurylawfirm.com/wp-content/uploads/2024/11/New-York-Injury-Firm.png.webp", website: "https://thenewyorkinjurylawfirm.com/" },
            { name: "THE ASSEMBLY STATE OF NEW YORK ALBANY ", logo: "/albany.png", website: "https://www.assembly.state.ny.us/members/assemblymember-jose-p.serrano" },
        ]
    }

    const spotlightStories = [
        {
            name: "The Harmony Foundation",
            logo: "/placeholder-logo.svg",
            description: "Their generous $50,000 grant enabled us to provide instruments to 200 students across five schools, creating lasting opportunities for musical growth.",
            impact: "200+ instruments donated",
            website: "https://example.com"
        },
        {
            name: "Community Arts Initiative",
            logo: "/placeholder-logo.svg",
            description: "Through their partnership, we've been able to expand our curriculum to include digital music production, reaching students who prefer modern music technology.",
            impact: "Digital music program launched",
            website: "https://example.com"
        }
    ]
    const services = [
        {
            number: "01",
            title: "Free Community Concerts",
            description: "Live music for underserved neighborhoods, fostering unity and cultural appreciation.",
            icon: Music
        },
        {
            number: "02",
            title: "Free Music Workshops",
            description: "Hands-on learning and mentorship to help students unlock their musical potential.",
            icon: Users
        },
        {
            number: "03",
            title: "School Partnerships",
            description: "Bringing free music programs to underfunded NYC public schools for consistent education.",
            icon: Shield
        },
        {
            number: "04",
            title: "Music for Wellness",
            description: "Music education in community centers, hospitals, and senior homes to promote emotional well-being.",
            icon: Heart
        },
        {
            number: "05",
            title: "Collaborative Performances",
            description: "Partnering with local artists and ensembles to give students confidence-building stage experience.",
            icon: Star
        }
    ]


    return (
        <div className="min-h-screen bg-white">

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-3 md:py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-2 text-xs md:text-sm">
                        <Link href="/" className="text-black hover:text-gray-800">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">Funders</span>
                    </div>
                </div>
            </div>

            {/* Hero Section - Inspired by charity demo */}
            <section className="relative py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        >
                            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8">
                                <Heart className="h-4 w-4 md:h-5 md:w-5 text-red-500" />
                                <span className="font-semibold text-gray-700 text-sm md:text-base">Because Only Together We Can</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                                Powering the Future through Music
                            </h1>
                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-md">
                                With the support of our funders, we bring music and joy to underserved students across New York City.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section - Inspired by charity demo */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Who We Are</h2>
                                <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                    Partnering to build a world where all children have access to music education, regardless of their circumstances.
                                </p>
                                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                    <span className="font-bold  px-1 rounded">Harmony 4 All</span> is a 501(c)(3) nonprofit organization dedicated to providing free access to high-quality music education and resources to underserved K-12 students. Our mission is to help students from low-income families, underfunded schools, and marginalized communities discover their musical potential.
                                </p>
                                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                    We offer free musical instrument rentals, repairs, and access to musical curriculums, ensuring that every child has the opportunity to experience the transformative power of music.
                                </p>
                                <Link href="/about">
                                    <Button className="bg-black text-white hover:bg-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base">
                                        Read More
                                        <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                                    </Button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                <div className="space-y-3 md:space-y-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Students with instruments"
                                        className="w-full h-48 md:h-64 object-cover rounded-xl md:rounded-2xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Music education"
                                        className="w-full h-36 md:h-48 object-cover rounded-xl md:rounded-2xl"
                                    />
                                </div>
                                <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                                    <img
                                        src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Community music"
                                        className="w-full h-36 md:h-48 object-cover rounded-xl md:rounded-2xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                                        alt="Youth music program"
                                        className="w-full h-48 md:h-64 object-cover rounded-xl md:rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section - Redesigned */}
            <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-16 md:mb-20 lg:mb-24">
                            <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-black to-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full mb-6 md:mb-8 shadow-2xl">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Music className="h-3 w-3 md:h-4 md:w-4" />
                                </div>
                                <span className="font-bold text-sm md:text-lg">Our Mission</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 md:mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                                What We Do
                            </h2>
                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12">
                                Our comprehensive approach to making music education accessible to all students, 
                                creating opportunities that transform lives through the power of music.
                            </p>
                            <div className="w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto rounded-full"></div>
                        </div>

                        {/* Services Grid - Dynamic Layout */}
                        <div className="relative mb-12 md:mb-16 lg:mb-20">
                            {/* Background decorative elements */}
                            <div className="absolute inset-0 bg-white rounded-3xl"></div>
                            
                            <div className="relative z-10">
                                {/* Alternating Layout */}
                                {services.map((service, index) => (
                                                                            <div
                                            key={index}
                                            className={`mb-8 md:mb-12 last:mb-0 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                            style={{ transitionDelay: `${index * 300}ms` }}
                                        >
                                            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-12 transition-all duration-700 hover:scale-105 group`}>
                                            
                                            {/* Content Side */}
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-black to-gray-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-lg">
                                                    <div className="w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center">
                                                        <service.icon className="h-2 w-2 md:h-3 md:w-3" />
                                                    </div>
                                                    <span className="font-bold text-xs md:text-sm">{service.number}</span>
                                                </div>
                                                
                                                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 group-hover:text-black transition-colors duration-300 leading-tight">
                                                    {service.title}
                                                </h3>
                                                
                                                <p className="text-sm md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 group-hover:text-gray-700 transition-colors duration-300 max-w-2xl mx-auto lg:mx-0">
                                                    {service.description}
                                                </p>
                                                
                                                <div className="flex items-center justify-center lg:justify-start space-x-3 md:space-x-4">
                                                    <div className="flex items-center text-xs md:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                                                        <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                                                        <span className="font-semibold">Active Program</span>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                            
                                            {/* Visual Side */}
                                            <div className="flex-1 relative">
                                                <div className="relative">
                                                    {/* Main Card */}
                                                    <div className="bg-white/90 backdrop-blur-sm shadow-2xl border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 transform group-hover:rotate-2 group-hover:scale-105 transition-all duration-700">
                                                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-black via-gray-800 to-black rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                                                            <service.icon className="h-12 w-12 md:h-16 md:w-16 text-white" />
                                                        </div>
                                                        <div className="text-center">
                                                            <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{service.title}</h4>
                                                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Floating Elements */}
                                                    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-white-400 to-black-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                                                        <Music className="h-6 w-6 md:h-8 md:w-8 text-black" />
                                                    </div>
                                                    <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-white-400 to-black-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                                        <Star className="h-5 w-5 md:h-6 md:w-6 text-black" />
                                                    </div>
                                                </div>
                                                
                                                {/* Background decorative circles */}
                                                <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-white to-black rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-white to-black rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                            </div>
                                        </div>
                                        
                                        {/* Divider */}
                                        {index < services.length - 1 && (
                                            <div className="flex justify-center mt-8 md:mt-12">
                                                <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA Section */}
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Make a Difference?</h3>
                                    <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                                        Discover how our comprehensive services are transforming music education 
                                        and creating opportunities for students across New York City.
                                    </p>
                                    <Link href="/services">
                                        <Button className="bg-white text-black hover:bg-gray-100 px-8 md:px-12 py-4 md:py-6 text-sm md:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group font-bold">
                                            Explore Our Services
                                            <ArrowRight className="ml-2 md:ml-4 h-4 w-4 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom CSS for animations */}
                <style jsx>{`
                    @keyframes blob {
                        0% { transform: translate(0px, 0px) scale(1); }
                        33% { transform: translate(30px, -50px) scale(1.1); }
                        66% { transform: translate(-20px, 20px) scale(0.9); }
                        100% { transform: translate(0px, 0px) scale(1); }
                    }
                    .animate-blob {
                        animation: blob 7s infinite;
                    }
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                    .animation-delay-4000 {
                        animation-delay: 4s;
                    }
                `}</style>
            </section>

            {/* Partners Section - Black & White Theme */}
            <section className="py-12 md:py-16 lg:py-32 bg-gray-100 relative overflow-hidden">
                {/* Minimal background pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23f3f4f6%22 fill-opacity=%220.5%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-8 md:mb-12 lg:mb-24">
                            <div className="inline-flex items-center space-x-2 md:space-x-3 bg-black text-white px-3 md:px-4 lg:px-8 py-2 md:py-4 rounded-full mb-3 md:mb-4 lg:mb-8 shadow-lg">
                                <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <HandHeart className="h-2 w-2 md:h-3 md:w-3 lg:h-4 lg:w-4" />
                                </div>
                                <span className="font-bold text-xs md:text-sm lg:text-lg">Partnership</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-black mb-3 md:mb-4 lg:mb-8">
                                Our Valued Partners
                            </h2>
                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 lg:mb-12">
                                Together with our partners, we're building a world where every child has access to music education, 
                                creating a symphony of opportunities that resonate across communities.
                            </p>
                            <div className="w-12 md:w-16 lg:w-32 h-1 bg-black mx-auto rounded-full"></div>
                        </div>

                        {/* Major Partners - Timeline Style */}
                        <div className="mb-16 md:mb-32">
                            <div className="text-center mb-8 md:mb-16">
                                <h3 className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-6">Major Partners</h3>
                                <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                                    Strategic partnerships that drive our mission forward
                                </p>
                            </div>
                            
                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black"></div>
                                
                                <div className="space-y-12 md:space-y-20">
                                    {funders.major.map((funder, index) => (
                                        <div
                                            key={index}
                                            className={`relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700`}
                                            style={{ transitionDelay: `${index * 300}ms` }}
                                        >
                                            {/* Timeline Dot */}
                                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-black rounded-full border-2 md:border-4 border-white shadow-lg z-10"></div>
                                            
                                            {/* Content Container */}
                                            <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-16`}>
                                                {/* Logo Side */}
                                                <div className="flex-1">
                                                    <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-500 group">
                                                        <div className={`w-32 h-32 md:w-48 md:h-48 mx-auto rounded-xl md:rounded-2xl shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-500 ${funder.name === "Maple Grove Cemetery" ? "bg-[rgb(53,77,3)]" : "bg-white border border-gray-200"}`}>
                                                            <img
                                                                src={funder.logo}
                                                                alt={`${funder.name} logo`}
                                                                className="p-3 md:p-6 w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Content Side */}
                                                <div className="flex-1 text-center">
                                                    <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg border border-gray-200">
                                                        <div className="inline-flex items-center space-x-2 bg-black text-white px-3 md:px-4 py-1 md:py-2 rounded-full mb-3 md:mb-4">
                                                            <Star className="h-3 w-3 md:h-4 md:w-4" />
                                                            <span className="font-semibold text-xs md:text-sm">Strategic Partner</span>
                                                        </div>
                                                        
                                                        <h4 className="text-xl md:text-3xl font-bold text-black mb-3 md:mb-4">
                                                            {funder.name}
                                                        </h4>
                                                        
                                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                                                            A key partner in our mission to bring music education to underserved communities.
                                                        </p>
                                                        
                                                        <Link href={funder.website} target="_blank" rel="noopener noreferrer">
                                                            <Button 
                                                                className="bg-black text-white hover:bg-gray-800 px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-sm md:text-base"
                                                            >
                                                                Visit Website
                                                                <ExternalLink className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Supporting Partners - Grid Layout */}
                        <div className="mb-12 md:mb-20">
                            <div className="text-center mb-8 md:mb-16">
                                <h3 className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-6">Supporting Partners</h3>
                                <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                                    Community organizations that amplify our impact
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                                {funders.community.map((funder, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 group hover:-translate-y-2 border border-gray-100 overflow-hidden"
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <div className="w-full h-16 md:h-20 flex items-center justify-center mb-3 md:mb-4">
                                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-all duration-500 group-hover:scale-110 ${funder.name === "Maple Grove Cemetery" ? "bg-[rgb(53,77,3)]" : "bg-gray-50 border border-gray-200"}`}>
                                                <img
                                                    src={funder.logo}
                                                    alt={`${funder.name} logo`}
                                                    className="p-1 md:p-2 w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                        
                                        <h4 className="text-xs md:text-sm font-semibold text-black text-center mb-2 md:mb-3 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                                            {funder.name}
                                        </h4>
                                        
                                        <div className="text-center">
                                            <Link href={funder.website} target="_blank" rel="noopener noreferrer">
                                                <Button 
                                                    variant="ghost" 
                                                    size="sm" 
                                                    className="text-gray-600 hover:bg-gray-100 hover:text-black transition-all duration-300 font-medium text-xs md:text-sm"
                                                >
                                                    Learn More
                                                    <ArrowRight className="ml-1 h-2 w-2 md:h-3 md:w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Partnership CTA - Clean Design */}
                        <div className="text-center">
                            <div className="bg-black rounded-2xl md:rounded-3xl p-6 md:p-12 text-white shadow-2xl">
                                <div className="w-12 h-12 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                    <HandHeart className="h-6 w-6 md:h-10 md:w-10 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Become a Partner</h3>
                                <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                                    Join us in making music education accessible to every child. Together, we can create lasting change.
                                </p>
                                <Link href="/contact">
                                    <Button className="bg-white text-black hover:bg-gray-100 px-6 md:px-10 py-3 md:py-4 text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group font-bold">
                                        Partner With Us
                                        <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Impact Stories Section - Music Education Focus */}
            <section className="py-16 md:py-32 bg-white relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f3f4f6%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-20">
                            <div className="inline-flex items-center space-x-2 md:space-x-3 bg-black text-white px-4 md:px-8 py-2 md:py-4 rounded-full mb-4 md:mb-8 shadow-lg">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Heart className="h-3 w-3 md:h-4 md:w-4" />
                                </div>
                                <span className="font-bold text-sm md:text-lg">Transformation</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-8">
                                Impact Stories
                            </h2>
                            <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12">
                                Real stories of transformation through music education - from students discovering their voice 
                                to communities coming together through the power of music.
                            </p>
                            <div className="w-16 md:w-32 h-1 bg-black mx-auto rounded-full"></div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                            {/* Story 1: Student Success */}
                            <Card className="bg-white shadow-xl border-0 rounded-2xl md:rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Young student learning violin"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Badge className="bg-white/90 text-black border-0 px-2 md:px-3 py-1 text-xs md:text-sm font-semibold">
                                            Student Success
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-4 md:p-8">
                                    <div className="flex items-center space-x-2 mb-3 md:mb-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                                            <Music className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900">Maria's Journey</h3>
                                            <p className="text-xs md:text-sm text-gray-500">Brooklyn, NY</p>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                                        "When I first picked up the violin through Harmony 4 All's program, I was shy and unsure. 
                                        Now I'm the concertmaster of my school orchestra and teaching younger students. 
                                        Music gave me confidence I never knew I had."
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3 md:space-x-4">
                                            <div className="text-center">
                                                <div className="text-lg md:text-2xl font-bold text-green-600">3</div>
                                                <div className="text-xs text-gray-500">Years</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg md:text-2xl font-bold text-blue-600">50+</div>
                                                <div className="text-xs text-gray-500">Performances</div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Story 2: Community Impact */}
                            <Card className="bg-white shadow-xl border-0 rounded-2xl md:rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Community music workshop"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Badge className="bg-white/90 text-black border-0 px-2 md:px-3 py-1 text-xs md:text-sm font-semibold">
                                            Community Impact
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-4 md:p-8">
                                    <div className="flex items-center space-x-2 mb-3 md:mb-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900">Bronx Community Center</h3>
                                            <p className="text-xs md:text-sm text-gray-500">Bronx, NY</p>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                                        "Harmony 4 All transformed our community center. What started as a small music program 
                                        has grown into a vibrant hub where families gather, children learn, and music brings 
                                        our diverse neighborhood together."
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3 md:space-x-4">
                                            <div className="text-center">
                                                <div className="text-lg md:text-2xl font-bold text-blue-600">200+</div>
                                                <div className="text-xs text-gray-500">Students</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg md:text-2xl font-bold text-purple-600">15</div>
                                                <div className="text-xs text-gray-500">Instruments</div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Story 3: School Partnership */}
                            <Card className="bg-white shadow-xl border-0 rounded-2xl md:rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
                                        alt="School music classroom"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Badge className="bg-white/90 text-black border-0 px-2 md:px-3 py-1 text-xs md:text-sm font-semibold">
                                            School Partnership
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-4 md:p-8">
                                    <div className="flex items-center space-x-2 mb-3 md:mb-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                            <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900">PS 156 Music Program</h3>
                                            <p className="text-xs md:text-sm text-gray-500">Queens, NY</p>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                                        "Thanks to Harmony 4 All's instrument donations and curriculum support, 
                                        our school now has a thriving music program. Students who struggled academically 
                                        are now excelling through music."
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3 md:space-x-4">
                                            <div className="text-center">
                                                <div className="text-lg md:text-2xl font-bold text-purple-600">85%</div>
                                                <div className="text-xs text-gray-500">Improvement</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg md:text-2xl font-bold text-green-600">25</div>
                                                <div className="text-xs text-gray-500">Instruments</div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>


            {/* Donate Section - Inspired by charity demo */}
            <section className="py-12 md:py-20 bg-black text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Support Us and Change the Course of a Child's Life Today!</h2>
                        <p className="text-base md:text-xl opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">
                            Your donation directly supports students in need, providing them with instruments, education, and opportunities to discover their musical potential.
                        </p>
                        <Link href="/donate">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-full">
                                Donate
                                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

