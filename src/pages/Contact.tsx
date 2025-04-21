
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will get back to you shortly.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-warehouse-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-warehouse-lightBlue max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions or need assistance? Our team is here to help you find the perfect warehouse solution.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="max-w-7xl mx-auto px-4">
  <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {/* Office Address */}
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="bg-warehouse-blue rounded-full p-3 mr-4 text-white">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Our Office</h3>
            <p className="text-gray-600">
              DLF Cyber City, Patia<br />
              Bhubaneswar, Odisha 751024<br />
              India
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Phone */}
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="bg-warehouse-orange rounded-full p-3 mr-4 text-white">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600">
              General: +91 98765 43210<br />
              Support: +91 98765 43211<br />
              Sales: +91 98765 43212
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Email */}
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
  <CardContent className="p-6">
    <div className="flex items-start">
      <div className="bg-green-500 rounded-full p-3 mr-1 text-white">
        <Mail className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">Email</h3>
        <p className="text-gray-600 break-words">
          Info: info@warehousingadda.com<br />
          Sales: sales@warehousingadda.com
        </p>
      </div>
    </div>
  </CardContent>
</Card>

    {/* Business Hours */}
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="bg-purple-500 rounded-full p-3 mr-4 text-white">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>

  {/* Google Map */}
  <div className="rounded-lg overflow-hidden shadow-md">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.119240101697!2d85.82136237526023!3d20.294848810360336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c1e0892073%3A0x7b3fd4b164d5f61a!2sDLF%20Cybercity%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1713610613689!5m2!1sen!2sin" 
      width="100%" 
      height="300" 
      style={{ border: 0 }} 
      allowFullScreen 
      loading="lazy" 
      title="DLF Cyber City - Bhubaneswar"
    ></iframe>
  </div>
</div>

          
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <Input 
                        name="name"
                        value={formData.name} 
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <Input 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input 
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Inquiry Type *
                      </label>
                      <Select 
                        required
                        value={formData.inquiryType}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="find-warehouse">Find a Warehouse</SelectItem>
                          <SelectItem value="list-property">List Your Property</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[120px]"
                        placeholder="Tell us about your requirements or questions"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-warehouse-blue hover:bg-warehouse-darkBlue text-white py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-500">Find quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How do I list my warehouse on your platform?",
                answer: "Listing your warehouse is simple. Create an account, click on 'List Your Property' in your dashboard, and fill out the property details. Our team will verify the information before publishing it on our platform."
              },
              {
                question: "Is there a fee for finding a warehouse through your platform?",
                answer: "No, searching for and viewing warehouse listings is completely free. We only charge a commission when a successful lease or purchase agreement is made through our platform."
              },
              {
                question: "How do you verify warehouses listed on your platform?",
                answer: "Our verification process includes physical inspection of the property, checking legal documents, and confirming ownership details. This ensures all listings on our platform meet our quality standards."
              },
              {
                question: "What types of warehouses can I find on Warehousing Adda?",
                answer: "We list a wide variety of warehouses including Grade A facilities, cold storage, industrial warehouses, distribution centers, fulfillment centers, and logistics hubs across India."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-warehouse-blue">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
