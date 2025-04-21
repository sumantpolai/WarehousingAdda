
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "Warehousing Adda made it incredibly easy to find a warehouse that perfectly matched our logistical needs. The platform saved us weeks of searching and negotiation.",
    author: "Rajesh Kumar",
    position: "Operations Manager, Global Logistics Ltd",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "As a warehouse owner, Warehousing Adda has helped me reach quality clients without the hassle of excessive marketing. Their platform is a game-changer for the industry.",
    author: "Priya Sharma",
    position: "Business Owner, Sharma Storage Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "We needed a cold storage facility on short notice, and through Warehousing Adda, we found the perfect space within days. Their customer service was exceptional throughout.",
    author: "Amit Patel",
    position: "Supply Chain Director, Fresh Foods Inc",
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-warehouse-orange font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear from businesses that have found their perfect warehouse solutions through our platform.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-full flex flex-col">
                  <div className="flex-grow">
                    <svg className="h-8 w-8 text-warehouse-orange mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 mb-6">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      className="h-12 w-12 rounded-full mr-4" 
                      src={testimonial.image} 
                      alt={testimonial.author}
                    />
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
