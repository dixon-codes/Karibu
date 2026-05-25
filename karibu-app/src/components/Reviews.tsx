"use client";

import { useState } from "react";

interface Review {
  name: string;
  location: string;
  date: string;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: "Teagan",
    location: "4 years on Airbnb",
    date: "May 2026",
    text: "Moshi is a small town, and this tucked away Airbnb looks exactly as listed. Doricass, a lovely staff member, was there to greet us at the door. She also showed us to local restaurants and took us to a local primary school to donate school supplies and meet the kids. The host is super responsive and even arranged to have Doricass cook us a Tanzanian breakfast in our home. Awesome place!!",
    avatar: "https://a0.muscache.com/im/pictures/user/cd349364-94c3-47d3-afc3-b565c84eb132.jpg?im_w=120",
  },
  {
    name: "Ryan",
    location: "Cape Town, South Africa",
    date: "May 2026",
    text: "We truly enjoyed our stay — it was amazing, beautiful, and incredibly peaceful. The place felt like a home away from home from the moment we arrived. We're very grateful for the hospitality and would absolutely recommend staying here to anyone visiting Moshi.",
    avatar: "https://a0.muscache.com/im/pictures/user/User/original/a511d514-32e1-4a2a-baf7-159e2bfc9796.jpeg?im_w=120",
  },
  {
    name: "Anen",
    location: "Dar es Salaam, Tanzania",
    date: "March 2026",
    text: "John was a fantastic host, even past our checkout. During our time in Moshi, John was always a phone call away, sorting out any inconvenience that occurred. A job well done by John, going above and beyond what was required.",
    avatar: "https://a0.muscache.com/im/pictures/user/User/original/bd48950d-c494-40d6-97e3-37c89025d086.jpeg?im_w=120",
  },
  {
    name: "Sukanta",
    location: "6 years on Airbnb",
    date: "2 weeks ago",
    text: "The house is well decorated and spacious. John was very welcoming and the garden is beautiful.",
    avatar: "https://a0.muscache.com/im/pictures/user/03ccdeb1-dc01-4d93-9caa-650c72354e82.jpg?im_w=120",
  },
  {
    name: "Mizan",
    location: "Dhaka, Bangladesh",
    date: "September 2025",
    text: "John is a fantastic host. His manager took great care of us. The house was well arranged — very clean and spacious with a great kitchen. John was very communicative, always in contact and always eager to help.",
    avatar: "https://a0.muscache.com/im/pictures/user/11f605c0-c384-4170-988b-74433648e876.jpg?im_w=120",
  },
  {
    name: "Moses",
    location: "Nairobi, Kenya",
    date: "August 2025",
    text: "John is a superb host! He was very prompt in communication and extremely helpful with all the relevant information needed. Karibu Cottage is home away from home; with a well-mowed garden and incredibly peaceful ambience. I highly recommend and will definitely be back soon.",
    avatar: "https://a0.muscache.com/im/pictures/user/User/original/9779a659-27b5-4e1a-98f0-ed05e02e2e1b.jpeg?im_w=120",
  },
  {
    name: "Chelewa",
    location: "Ocala, Florida",
    date: "April 2026",
    text: "Great stay as always at the Karibu Cottage. John and his team are like family to us. Love the new upgrades — it gets better every time we visit. Asante sana!",
    avatar: "https://a0.muscache.com/im/pictures/user/54785864-c424-402b-b290-d1d75890ee6e.jpg?im_w=120",
  },
  {
    name: "Regina",
    location: "2 years on Airbnb",
    date: "December 2025",
    text: "We had a great stay! The place was clean, comfortable, and exactly as described. The host was friendly and responsive. Would definitely stay again.",
    avatar: "",
  },
  {
    name: "Sean",
    location: "3 years on Airbnb",
    date: "December 2025",
    text: "John was very communicative and helpful and proactive. A good place for my family and I to rest and see Kili.",
    avatar: "",
  },
  {
    name: "Emelie",
    location: "2 years on Airbnb",
    date: "October 2025",
    text: "Our stay at John's was lovely. We felt right at home and we were welcomed warmly. John was very communicative and friendly at all times. We also went to the Materuni waterfalls with John's company and the whole experience was amazing. Big recommend!!!",
    avatar: "",
  },
  {
    name: "Marinahomestz",
    location: "2 years on Airbnb",
    date: "July 2025",
    text: "One of the most amazing cottages — fantastic experience with my family, I really felt at home. John was very kind, friendly and helpful throughout our stay. The house was super clean. Would recommend this cottage to anyone visiting Moshi.",
    avatar: "",
  },
  {
    name: "Loreen",
    location: "3 years on Airbnb",
    date: "June 2025",
    text: "The stay was amazing — the host is really good at what he does. Me and my friends all loved the place. No amount of words can comprehend the experience we had. Literally the best place; I will be planning on going back.",
    avatar: "",
  },
  {
    name: "Chelewa",
    location: "Ocala, Florida",
    date: "October 2025",
    text: "We spent 17 wonderful days at Karibu Cottage in Moshi, and it truly felt like a home away from home. John and his team were incredibly attentive, kind, and welcoming to our whole family. The cottage is comfortable, well-equipped, and surrounded by peaceful greenery. We can't wait to return!",
    avatar: "https://a0.muscache.com/im/pictures/user/54785864-c424-402b-b290-d1d75890ee6e.jpg?im_w=120",
  },
  {
    name: "Abdul",
    location: "2 years on Airbnb",
    date: "August 2025",
    text: "I loved the privacy, the furnishings and the host is super caring and supportive! A 24/7 assistance. I would love to come back again.",
    avatar: "",
  },
  {
    name: "Amenyonah",
    location: "2 years on Airbnb",
    date: "September 2025",
    text: "Clean and neat property with a vast garden. Everything was excellent and once you reach the property you will start to feel like you are at home.",
    avatar: "",
  },
  {
    name: "Ganesh Babu",
    location: "Kuwait City, Kuwait",
    date: "August 2025",
    text: "What a treat, better than expected in every way! Thank you so much for our lovely stay. We haven't felt more at home whilst travelling. Couldn't recommend enough :)",
    avatar: "",
  },
  {
    name: "Shanon",
    location: "3 years on Airbnb",
    date: "August 2025",
    text: "Quiet and private, suitable for a family road trip! Easy to park and get around!",
    avatar: "",
  },
  {
    name: "绍卿",
    location: "5 months on Airbnb",
    date: "March 2026",
    text: "Quiet and private, suitable for a family road trip! Easy to park and get around!",
    avatar: "",
  },
  {
    name: "Lea",
    location: "4 years on Airbnb",
    date: "March 2025",
    text: "Very nice host and a lovely house! The location was beautiful and you could get to the centre easily by tuktuk or even by foot. You can walk to the Njoro forest to see some animals like monkeys, even though you also see these around the house :)",
    avatar: "https://a0.muscache.com/im/pictures/user/User/original/fda9f5c6-6457-4d5e-ac5c-ac498b2e0889.jpeg?im_w=120",
  },
  {
    name: "Nifty",
    location: "5 years on Airbnb",
    date: "April 2025",
    text: "Staying at Karibu Cottage was such a peaceful and memorable experience — John made it even better! He was incredibly kind and helpful from booking until check-out. The airport pick-up was a thoughtful touch. I loved spending time in the garden with the friendly rabbit and tortoise. John truly goes above and beyond.",
    avatar: "",
  },
];

/* Avatar colour palette */
const AVATAR_COLORS = [
  "#ff841a", "#10b981", "#3b82f6", "#8b5cf6",
  "#ef4444", "#f59e0b", "#06b6d4", "#ec4899",
];

function Avatar({ name, src }: { name: string; src: string }) {
  const [err, setErr] = useState(false);
  const initials = name.split(" ").map((w) => w[0] ?? "").join("").toUpperCase().slice(0, 2);
  const bg = AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];

  if (src && !err) {
    return (
      <img
        src={src}
        alt={name}
        width={48}
        height={48}
        onError={() => setErr(true)}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
    );
  }
  return (
    <div
      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
      style={{ background: bg }}
    >
      {initials}
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5 text-[#ff841a]">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(9);

  return (
    <section
      id="reviews"
      className="section-padding bg-[#FAF8F3]"
      aria-labelledby="reviews-heading"
    >
      <div className="section-container">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">Guest Experiences</p>
          <h2 id="reviews-heading" className="section-title">
            What Our Guests Say
          </h2>
          <div className="section-divider" />
          <div className="flex items-center justify-center gap-2 mt-6">
            <StarRating />
            <span className="font-bold text-[#1A1A1A] text-xl ml-1">5.0</span>
            <span className="text-[#6B7280] text-sm">
              · 20 verified reviews from Airbnb, Booking.com & Agoda
            </span>
          </div>
        </div>

        {/* ── Masonry Grid of Reviews ── */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.slice(0, visibleCount).map((review, i) => (
            <div
              key={i}
              className="break-inside-avoid bg-white border border-[#E8E0D0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar name={review.name} src={review.avatar} />
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] text-sm leading-tight">{review.name}</h3>
                    <p className="text-[#6B7280] text-xs mt-0.5">{review.date}</p>
                  </div>
                </div>
                <StarRating />
              </div>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* ── Load More CTA ── */}
        {visibleCount < reviews.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 11, reviews.length))}
              className="btn-outline"
            >
              Load More Reviews
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
