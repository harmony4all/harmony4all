"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Share2, Mail, Calendar } from "lucide-react"

export default function DonationSuccessPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const sessionId = urlParams.get('session_id')
    
    if (sessionId) {
      // You could fetch donation details here if needed
      // For now, we'll just show a success message
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-b-2 border-gray-900 mx-auto mb-3 md:mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base">Processing your donation...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs md:text-sm">
            <Link href="/" className="text-gray-900 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/donate" className="text-gray-900 hover:text-gray-700">
              Donate
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Success</span>
          </div>
        </div>
      </div>

      {/* Success Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-black text-white text-center py-8 md:py-12">
                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Thank You!</CardTitle>
                <CardDescription className="text-white text-base md:text-lg lg:text-xl">
                  Your donation has been successfully processed
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 md:p-8">
                <div className="space-y-4 md:space-y-6">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-3 md:mb-4">
                      Your generous contribution will help us continue providing music education 
                      and building stronger communities through the power of music.
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                      You will receive a confirmation email shortly with your donation receipt.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">What happens next?</h3>
                    <div className="space-y-2 md:space-y-3 text-left">
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Email Confirmation</p>
                          <p className="text-xs md:text-sm text-gray-600">Check your email for a receipt and tax information</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <Heart className="h-4 w-4 md:h-5 md:w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Impact Updates</p>
                          <p className="text-xs md:text-sm text-gray-600">We'll keep you informed about how your donation is making a difference</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <Calendar className="h-4 w-4 md:h-5 md:w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Future Events</p>
                          <p className="text-xs md:text-sm text-gray-600">Get invited to our community events and concerts</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Link href="/" className="flex-1">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base">
                        Return Home
                      </Button>
                    </Link>
                    <Link href="/media" className="flex-1">
                      <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base">
                        <Share2 className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                        Share Our Mission
                      </Button>
                    </Link>
                  </div>

                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500">
                      Questions about your donation? <Link href="/contact" className="text-gray-900 hover:underline">Contact us</Link>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Reminder */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Your Impact Matters</h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Every donation, no matter the size, helps us provide music education, repair instruments, 
            and create community events that bring people together through the universal language of music.
          </p>
          <Link href="/get-involved">
            <Button className="bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base">
              Get More Involved
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
