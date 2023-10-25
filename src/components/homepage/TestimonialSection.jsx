import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Project Manager',
      text: 'Your task manager helped me stay organized and on top of my tasks. It\'s a game-changer!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Freelancer',
      text: 'I\'ve tried many task management tools, but yours stands out. Simple, yet powerful!',
    },
    {
      id: 3,
      name: 'Sam Brown',
      title: 'Productivity Enthusiast',
      text: 'I love the clean and intuitive interface of your task manager. It\'s perfect for anyone!',
    },
    {
      id: 4,
      name: 'Emily Johnson',
      title: 'Business Owner',
      text: 'Your task manager has boosted my team\'s productivity. We couldn\'t be happier!',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold mb-8">What Our Users Say</h2>
        <div className="w-4/5 mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center px-4">
                <p className="text-lg mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
