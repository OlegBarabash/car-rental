import React from 'react';
import { Body, Header, Section, WhyList } from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <>
      <Body>
        <Header>
          <h1>Welcome to Car Rental Company </h1>
        </Header>

        <main>
          <Section>
            <h2>Why Choose Us?</h2>
            <WhyList>
              <li>
                <strong>Diverse Fleet:</strong> Explore our wide range of
                vehicles, from sleek sedans to spacious SUVs, tailored to meet
                your unique needs.
              </li>
              <li>
                <strong>Simple Booking Process:</strong> Our user-friendly
                platform ensures a hassle-free reservation process. In just a
                few clicks, you'll be ready to hit the road.
              </li>
              <li>
                <strong>Transparent Pricing:</strong> Enjoy clear and
                transparent pricing with no hidden fees. What you see is what
                you pay.
              </li>
              <li>
                <strong>Flexible Rental Options:</strong> Choose the rental
                duration that suits your schedule, whether it's a few hours,
                days, or more.
              </li>
              <li>
                <strong>Secure and Convenient:</strong> Rest easy knowing your
                transactions are secure, and pick up your chosen vehicle
                conveniently at our designated locations.
              </li>
            </WhyList>
          </Section>

          <section>
            <h2>How It Works</h2>
            <ol>
              <li>
                <strong>Explore:</strong> Browse our diverse fleet and find the
                perfect vehicle for your journey.
              </li>
              <li>
                <strong>Book:</strong> Reserve your car with our easy and
                straightforward booking process.
              </li>
              <li>
                <strong>Pick Up:</strong> Collect your vehicle hassle-free at
                the scheduled time and location.
              </li>
              <li>
                <strong>Drive:</strong> Enjoy the freedom of the open road and
                make your trip unforgettable.
              </li>
            </ol>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              Have questions or need assistance? Contact our friendly customer
              support team at{' '}
              <a href="mailto:support@carrentalcompany.com">
                support@carrentalcompany.com
              </a>
              .
            </p>
          </section>
        </main>
      </Body>
    </>
  );
};
