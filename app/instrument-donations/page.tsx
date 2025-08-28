"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Music, Guitar, Piano, CheckCircle, Mic, Radio, Headphones, Volume2, Speaker } from "lucide-react"

export default function InstrumentDonationsPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    phone: "",
    instrumentType: "",
    otherInstrumentType: "",
    instrumentCondition: "",
    brand: "",
    model: "",
    age: "",
    description: "",
    pickupLocation: "",
    pickupDate: "",
    message: ""
  })

  const instrumentTypes = [
    { value: "guitar", label: "Guitar", icon: Guitar },
    { value: "piano", label: "Piano", icon: Piano },
    { value: "violin", label: "Violin", icon: Volume2 },
    { value: "trumpet", label: "Trumpet", icon: Speaker },
    { value: "drums", label: "Drums", icon: Radio },
    { value: "saxophone", label: "Saxophone", icon: Mic },
    { value: "flute", label: "Flute", icon: Headphones },
    { value: "other", label: "Other", icon: Music }
  ]

  const conditionOptions = [
    { value: "excellent", label: "Excellent - Like new condition" },
    { value: "good", label: "Good - Minor wear, fully functional" },
    { value: "fair", label: "Fair - Some wear, needs minor repairs" },
    { value: "needs-repair", label: "Needs Repair - Requires professional attention" }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const submissionData = {
        ...formData,
        instrumentType: formData.instrumentType === 'other' ? formData.otherInstrumentType : formData.instrumentType
      }

      const response = await fetch('/api/instrument-donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit donation')
      }

      setSubmitStatus('success')
      setFormData({
        donorName: "",
        email: "",
        phone: "",
        instrumentType: "",
        otherInstrumentType: "",
        instrumentCondition: "",
        brand: "",
        model: "",
        age: "",
        description: "",
        pickupLocation: "",
        pickupDate: "",
        message: ""
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage("Failed to submit instrument donation. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Music className="h-20 w-20 mx-auto text-white animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Instrument Donations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Donate musical instruments to help students who cannot afford their own.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Your gently used instruments can provide the gift of music to underserved students in New York City. 
              Every donation helps us bridge the gap between talent and opportunity.
            </p>
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Donating
              </Button>
            </div>
          </div>
        </div>
      </section>


{/* Accepted Instruments */}
 <section className="py-16 bg-white">
         <div className="container mx-auto px-4">
           <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl font-bold text-black text-center mb-12">Instruments We Accept</h2>
             <div className="grid md:grid-cols-4 gap-6">
               {instrumentTypes.slice(0, 8).map((instrument, index) => {
                 const IconComponent = instrument.icon
                 return (
                   <div 
                     key={instrument.value} 
                     className="text-center p-6 bg-white rounded-xl hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer group"
                     style={{ transitionDelay: '100ms' }}
                   >
                     <IconComponent className="h-12 w-12 mx-auto mb-3 text-black group-hover:text-white transition-colors duration-300" />
                     <h3 className="font-semibold text-black group-hover:text-white transition-colors duration-300">{instrument.label}</h3>
                   </div>
                 )
               })}
             </div>
             <p className="text-center text-gray-600 mt-8">
               Don't see your instrument type? Contact us at info@harmony4all.org - we accept most musical instruments in good condition.
             </p>
           </div>
         </div>
       </section>



             {/* Benefits Section */}
       <section className="py-16 bg-gray-50">
         <div className="container mx-auto px-4">
           <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl font-bold text-black text-center mb-12">Why Donate Instruments?</h2>
             <div className="grid md:grid-cols-3 gap-8">
               <div className="text-center group hover:scale-105 transition-all duration-300">
                 <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                   <Heart className="h-8 w-8 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-black mb-3">Transform Lives</h3>
                 <p className="text-gray-600">
                   Your instrument donation directly impacts a student's ability to pursue their musical dreams and develop their talents.
                 </p>
               </div>
               <div className="text-center group hover:scale-105 transition-all duration-300">
                 <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                   <Music className="h-8 w-8 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-black mb-3">Reduce Waste</h3>
                 <p className="text-gray-600">
                   Give your instruments a second life while helping the environment and supporting music education.
                 </p>
               </div>
               <div className="text-center group hover:scale-105 transition-all duration-300">
                 <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                   <CheckCircle className="h-8 w-8 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-black mb-3">Tax Deductible</h3>
                 <p className="text-gray-600">
                   Receive a tax deduction for your instrument donation. We'll provide documentation for your records.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

             {/* Donation Form */}
       <section className="py-20" id="donation-form">
         <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto">
             <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
               <CardHeader className="bg-black text-white text-center py-8">
                 <CardTitle className="text-3xl font-bold mb-2">Donate Your Instrument</CardTitle>
                 <CardDescription className="text-gray-300 text-lg">
                   Share the gift of music with students in need
                 </CardDescription>
               </CardHeader>

              <CardContent className="p-8">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you for your instrument donation! We'll contact you within 2-3 business days to arrange pickup. 
                      Your generosity will help bring music to students who need it most.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">Error: {errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Instrument Information */}
                  <div className="space-y-6 mb-8">
                    <h4 className="text-xl font-semibold text-gray-900">Instrument Information</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Instrument Type *</label>
                        <Select value={formData.instrumentType} onValueChange={(value) => handleInputChange('instrumentType', value)}>
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select instrument type" />
                          </SelectTrigger>
                          <SelectContent>
                            {instrumentTypes.map((type) => {
                              const IconComponent = type.icon
                              return (
                                <SelectItem key={type.value} value={type.value}>
                                  <div className="flex items-center space-x-2">
                                    <IconComponent className="h-4 w-4" />
                                    <span>{type.label}</span>
                                  </div>
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {formData.instrumentType === 'other' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Specify Instrument Type *</label>
                          <Input
                            placeholder="e.g., Harp, Accordion, Banjo"
                            className="rounded-lg"
                            value={formData.otherInstrumentType}
                            onChange={(e) => handleInputChange('otherInstrumentType', e.target.value)}
                            required
                          />
                        </div>
                      )}
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
                        <Select value={formData.instrumentCondition} onValueChange={(value) => handleInputChange('instrumentCondition', value)}>
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            {conditionOptions.map((condition) => (
                              <SelectItem key={condition.value} value={condition.value}>
                                {condition.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                        <Input
                          placeholder="e.g., Yamaha, Fender"
                          className="rounded-lg"
                          value={formData.brand}
                          onChange={(e) => handleInputChange('brand', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                        <Input
                          placeholder="e.g., Stratocaster, P-125"
                          className="rounded-lg"
                          value={formData.model}
                          onChange={(e) => handleInputChange('model', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age (Years)</label>
                        <Input
                          type="number"
                          placeholder="e.g., 5"
                          className="rounded-lg"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <Textarea
                        placeholder="Please describe the instrument, any notable features, or special characteristics..."
                        className="rounded-lg"
                        rows={3}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Pickup Information */}
                  <div className="space-y-6 mb-8">
                    <h4 className="text-xl font-semibold text-gray-900">Pickup Information</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location *</label>
                        <Input
                          placeholder="e.g., 123 Main St, New York, NY"
                          className="rounded-lg"
                          value={formData.pickupLocation}
                          onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Pickup Date</label>
                        <Input
                          type="date"
                          className="rounded-lg"
                          value={formData.pickupDate}
                          onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-6 mb-8">
                    <h4 className="text-xl font-semibold text-gray-900">Your Information</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          placeholder="Your full name"
                          className="rounded-lg"
                          value={formData.donorName}
                          onChange={(e) => handleInputChange('donorName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="rounded-lg"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="rounded-lg"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label>
                      <Textarea
                        placeholder="Share any special instructions, instrument history, or why you're donating..."
                        className="rounded-lg"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                      />
                    </div>
                  </div>

                                     {/* Submit Button */}
                   <Button
                     type="submit"
                     size="lg"
                     className="w-full relative overflow-hidden bg-black text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group hover:bg-gray-800"
                     disabled={isSubmitting}
                   >
                     <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     {isSubmitting ? (
                       <span className="relative z-10">Processing...</span>
                     ) : (
                       <>
                         <Music className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                         <span className="relative z-10">Donate Instrument</span>
                       </>
                     )}
                   </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Your donation is tax-deductible. EIN: 93-2460195
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
    </div>
  )
}
