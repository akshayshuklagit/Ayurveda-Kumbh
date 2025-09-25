import React from "react";
import {
  FaLeaf,
  FaUsers,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaAward,
  FaGlobe,
  FaMicroscope,
  FaFilePowerpoint,
  FaHeart,
  FaFire,
  FaPray,
  FaWalking,
  FaEye,
} from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/common/SectionTitle";

const KeyHighlights = () => {
  const highlights = [
    {
      id: "rasachikitsa-conference",
      icon: FaMicroscope,
      title: "World's Biggest Conference on Rasachikitsa",
      description:
        "The largest global gathering focused on Rasachikitsa - the ancient science of mineral and metallic medicines in Ayurveda.",
      details: [
        "International experts on Rasashastra and Bhaishajya Kalpana",
        "Latest research in mineral-based Ayurvedic medicines",
        "Traditional preparation methods and modern clinical applications",
        "Case studies of Rasachikitsa in chronic and lifestyle diseases",
        "Discussions on standardization and safety of metallic preparations",
        "Hands-on training in classical Rasashastra techniques",
        "Exploration of nanotechnology parallels in Ayurveda",
        "Panel discussions on global acceptance of Rasachikitsa",
      ],
    },
    {
      id: "cancer-conference",
      icon: FaHeart,
      title: "Ayurveda's Biggest Conference on Cancer",
      description:
        "Comprehensive discussions on Ayurvedic approaches to cancer prevention, treatment, and management.",
      details: [
        "Ayurvedic oncology protocols for prevention and treatment",
        "Integrative cancer care approaches combining Ayurveda & modern science",
        "Role of Rasayana therapy in cancer recovery",
        "Herbal formulations and polyherbal compounds in oncology",
        "Dietary interventions and lifestyle regimens for cancer management",
        "Patient success stories and long-term case reports",
        "Workshops on palliative and supportive care in Ayurveda",
        "Networking with global oncology experts and practitioners",
      ],
    },
    {
      id: "paper-presentation",
      icon: FaFilePowerpoint,
      title: "Paper & Poster Presentation",
      description:
        "Platform for researchers and practitioners to present their innovative work and findings.",
      details: [
        "Research paper presentations by scholars and practitioners",
        "Scientific poster sessions on diverse Ayurvedic themes",
        "Peer-reviewed discussions with panel experts",
        "Best paper and poster awards with global recognition",
        "Workshops on academic publishing and research methodologies",
        "Opportunities to collaborate with international researchers",
        "Exhibition of innovative projects and prototypes",
        "Student participation and mentorship opportunities",
      ],
    },
    {
      id: "youth-sanmvad",
      icon: FaUsers,
      title: "YouthVaidya Sanmvad",
      description:
        "Special dialogue sessions designed for young Ayurveda practitioners and students.",
      details: [
        "Interactive sessions with senior and young practitioners",
        "Career guidance and mentorship programs",
        "Ayurveda entrepreneurship and start-up opportunities",
        "Innovation challenges for young minds",
        "Networking with students from across India and abroad",
        "Workshops on research methodologies for students",
        "Leadership and soft skill development for Vaidyas",
        "Special scholarships and recognition for youth achievers",
      ],
    },
    {
      id: "awards-ceremony",
      icon: FaAward,
      title: "Awards Ceremony",
      description:
        "Recognition and celebration of outstanding contributions to the field of Ayurveda.",
      details: [
        "Lifetime achievement awards to eminent scholars",
        "Best research paper and clinical case awards",
        "Recognition of excellence in Ayurvedic practice",
        "Young researcher and innovator awards",
        "Awards for contributions to Ayurveda education",
        "Special honors for community health service",
        "International Ayurveda ambassador awards",
        "Cultural performances during the ceremony",
      ],
    },
    {
      id: "health-camp",
      icon: FaHandHoldingHeart,
      title: "Mega Health Camp",
      description:
        "Free health consultations and treatments for the public by expert Ayurvedic physicians.",
      details: [
        "Free Ayurvedic consultations for the general public",
        "Pulse diagnosis (Nadi Pariksha) demonstrations",
        "Free distribution of Ayurvedic medicines",
        "Herbal remedies and lifestyle counseling",
        "Yoga and meditation sessions for visitors",
        "Workshops on preventive healthcare",
        "Nutrition and diet guidance by experts",
        "Special screenings for lifestyle diseases",
      ],
    },
    {
      id: "ashwino-yagya",
      icon: FaFire,
      title: "Shri Ashwino Yagya",
      description:
        "Sacred fire ceremony dedicated to the Ashwini Kumaras, the divine physicians in Hindu tradition.",
      details: [
        "Traditional Vedic fire ceremony for healing and health",
        "Prayers dedicated to Ashwini Kumaras, divine physicians",
        "Spiritual purification through sacred chants",
        "Collective participation of global Ayurveda community",
        "Rituals for universal well-being and harmony",
        "Ceremonial offerings symbolizing health and vitality",
        "Special blessings for patients and healers",
        "Cultural and devotional performances",
      ],
    },
    {
      id: "ashwino-mahaarti",
      icon: FaPray,
      title: "Shri Ashwino Mahaarti",
      description:
        "Grand evening prayer ceremony honoring the divine healers and seeking blessings for wellness.",
      details: [
        "Evening grand prayer ceremony with Vedic chants",
        "Devotional bhajans and spiritual music",
        "Collective worship and meditation for healing",
        "Sacred atmosphere with thousands of participants",
        "Light and lamp offerings to divine healers",
        "Integration of spirituality and Ayurveda traditions",
        "Blessings for health professionals and seekers",
        "Community bonding in a spiritual environment",
      ],
    },
    {
      id: "shobha-yatra",
      icon: FaWalking,
      title: "Ayurveda Samhita Dham Shobha Yatra",
      description:
        "Ceremonial procession celebrating Ayurvedic texts and the establishment of Ayurveda Samhita Dham.",
      details: [
        "Procession with symbolic representation of Ayurvedic texts",
        "Cultural and traditional performances during the march",
        "Community participation with global Ayurveda delegates",
        "Dedication ceremony of the Ayurveda Samhita Dham",
        "Display of traditional healing tools and manuscripts",
        "Floats representing different branches of Ayurveda",
        "Spiritual chants and devotional songs during procession",
        "Historical reenactments celebrating Ayurveda’s heritage",
      ],
    },
    {
      id: "arogya-expo",
      icon: FaLeaf,
      title: "Arogya Expo",
      description:
        "Comprehensive exhibition showcasing Ayurvedic products, services, and innovations.",
      details: [
        "Display of Ayurvedic medicines and classical formulations",
        "Exhibition of traditional therapy tools and instruments",
        "Showcase of herbal cosmetics and wellness products",
        "Ayurvedic food and nutrition stalls",
        "Technology-driven Ayurveda innovations",
        "International participation of Ayurveda companies",
        "Interactive sessions with product developers",
        "Networking opportunities for entrepreneurs",
      ],
    },
    {
      id: "rasashastra-showcase",
      icon: FaMicroscope,
      title: "Showcase of Rasashastra",
      description:
        "Special exhibition dedicated to the ancient science of Rasashastra and its modern applications.",
      details: [
        "Live demonstrations of traditional mineral processing",
        "Exhibition of classical Rasashastra formulations",
        "Research posters on metallic medicine applications",
        "Workshops on purification and safety protocols",
        "Hands-on training for students and practitioners",
        "Comparative analysis of ancient vs modern techniques",
        "Panel talks on global relevance of Rasashastra",
        "Case reports demonstrating clinical efficacy",
      ],
    },
    {
      id: "samhita-gallery",
      icon: FaEye,
      title: "Ayurveda Samhita Dham Gallery",
      description:
        "Permanent gallery showcasing the rich heritage and knowledge of Ayurvedic classical texts.",
      details: [
        "Permanent display of ancient Ayurveda manuscripts",
        "Interactive digital exhibits on classical texts",
        "Historical timeline tracing Ayurveda’s journey",
        "Educational guided tours for students and visitors",
        "Life-size replicas of traditional Ayurvedic practices",
        "Audio-visual installations for immersive learning",
        "Special exhibitions on Ayurveda pioneers",
        "Workshops and seminars conducted in the gallery space",
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="Key Highlights"
        breadcrumbs={[{ label: "Key Highlights" }]}
      />

      <section className="section bg-white">
        <div className="container">
          <SectionTitle>Key Highlights of Ayurveda Kumbh 2025</SectionTitle>

          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-16">
            Experience the grandest celebration of Ayurveda with world-class
            conferences, spiritual ceremonies, and comprehensive exhibitions.
            Join us for this historic gathering of healing traditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="bg-background p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{highlight.description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary mb-3">
                    What to Expect:
                  </h4>
                  <ul className="space-y-2">
                    {highlight.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience These Highlights?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't miss out on this incredible opportunity to be part of the
            largest Ayurveda gathering. Register now and secure your spot!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/registration/delegate" className="btn btn-secondary">
              Register as Delegate
            </a>
            <a
              href="/contact"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyHighlights;
