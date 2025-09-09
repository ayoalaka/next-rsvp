"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Check } from "lucide-react"

export default function RSVPPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "1",
    guestNames: "",
    mealPreference: "",
    dietaryRestrictions: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("RSVP Data:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary p-3">
                <Check className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your RSVP has been received. We're so excited to celebrate with you!
            </p>
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">
                Back to Invitation
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Invitation
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">RSVP</h1>
          <p className="text-muted-foreground">Please let us know if you'll be joining us for our special day</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>Tell us who you are</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Attendance */}
          <Card>
            <CardHeader>
              <CardTitle>Will you be attending?</CardTitle>
              <CardDescription>Please let us know your attendance status</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(value) => handleInputChange("attendance", value)}
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes, I'll be there!</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">Sorry, I can't make it</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Guest Details - Only show if attending */}
          {formData.attendance === "yes" && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Guest Details</CardTitle>
                  <CardDescription>How many guests will you bring?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="guests">Number of Guests (including yourself)</Label>
                    <RadioGroup
                      value={formData.guests}
                      onValueChange={(value) => handleInputChange("guests", value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="guest-1" />
                        <Label htmlFor="guest-1">Just me</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="guest-2" />
                        <Label htmlFor="guest-2">2 people</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {formData.guests === "2" && (
                    <div>
                      <Label htmlFor="guestNames">Guest Name</Label>
                      <Input
                        id="guestNames"
                        value={formData.guestNames}
                        onChange={(e) => handleInputChange("guestNames", e.target.value)}
                        placeholder="Name of your guest"
                        className="mt-1"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Meal Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle>Meal Preference</CardTitle>
                  <CardDescription>Help us plan the perfect menu</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Main Course Preference</Label>
                    <RadioGroup
                      value={formData.mealPreference}
                      onValueChange={(value) => handleInputChange("mealPreference", value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="chicken" id="chicken" />
                        <Label htmlFor="chicken">Herb-Crusted Chicken</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="salmon" id="salmon" />
                        <Label htmlFor="salmon">Grilled Salmon</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vegetarian" id="vegetarian" />
                        <Label htmlFor="vegetarian">Vegetarian Option</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="dietary">Dietary Restrictions or Allergies</Label>
                    <Textarea
                      id="dietary"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                      placeholder="Please let us know about any dietary restrictions or allergies"
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Message */}
          <Card>
            <CardHeader>
              <CardTitle>Special Message</CardTitle>
              <CardDescription>Share your excitement or well wishes (optional)</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="We'd love to hear from you..."
                rows={4}
              />
            </CardContent>
          </Card>

          <Button type="submit" size="lg" className="w-full">
            Submit RSVP
          </Button>
        </form>
      </div>
    </div>
  )
}
