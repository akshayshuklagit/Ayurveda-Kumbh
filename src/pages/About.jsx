import {
  FaLeaf,
  FaHandHoldingHeart,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/common/SectionTitle";
import { useState } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const About = () => {
  const toggleBio = (index) => {
    const updated = [...expandedStates];
    updated[index] = !updated[index];
    setExpandedStates(updated);
  };
  const coreValues = [
    {
      icon: <FaLeaf className="text-4xl text-primary" />,
      title: "Authenticity",
      description:
        "Preserving and promoting the authentic principles and practices of traditional Ayurveda.",
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl text-primary" />,
      title: "Holistic Wellness",
      description:
        "Embracing the complete approach to health that addresses body, mind, and spirit.",
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Community",
      description:
        "Building a global community of practitioners, scholars, and enthusiasts dedicated to Ayurvedic wisdom.",
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-primary" />,
      title: "Global Integration",
      description:
        "Integrating Ayurvedic principles with modern healthcare systems for global wellbeing.",
    },
  ];

  return (
    <>
      <PageHeader title="About Ayurveda Kumbh" />

      {/* Vision & Mission Section */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg mb-8">
                Ayurveda Kumbh stands as the most significant global
                congregation devoted to the ancient science of Ayurveda. More
                than a conference, it's a vibrant celebration of life, health,
                and ancient wisdom passed down through the revered Guru–Shishya
                tradition.
              </p>

              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    To unite over 10,000 Vaidyas (Ayurveda scholars and
                    practitioners) globally for collective wisdom sharing.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    To promote the authenticity and continuity of Ayurveda
                    through revered traditions and immersive experiences.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    To foster research and dialogue between traditional
                    practices and modern scientific frameworks.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    To create a spiritually enriching environment with sacred
                    rituals like Ayurveda Yajna, Shobha Yatra, and Maha Aarti.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    To honor the contributions of Ayurvedic Gurus and uphold the
                    sacred Guru–Shishya parampara for future generations.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/src/assets/images/mission.png"
                alt="Ayurvedic gathering"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle>Our Core Values</SectionTitle>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
            The guiding pillars of Ayurveda Kumbh are rooted in purity, purpose,
            and global relevance of the ancient Ayurvedic system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="card hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Body Section */}
      <section className="section bg-background-dark">
        <div className="container">
          <SectionTitle>Organizing Body</SectionTitle>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1">
                <img
                  src="/src/assets/images/JivanAmritlogo.png"
                  alt="Jivan Amrit Ayurveda"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4">
                  Jivan Amrit Ayurveda, Vaidyagaon Wazirganj Gonda, India
                </h3>
                <p className="text-lg mb-4">
                  Established in 1968, Jivan Amrit Ayurveda has been a
                  cornerstone of holistic healing in the region, rooted in the
                  ancient traditions of Ayurvedic science. With decades of
                  trusted practice, we remain committed to promoting natural
                  wellness for every individual.
                </p>
                <p className="text-lg mb-4">
                  Our approach integrates the principles of AYUSH — Ayurveda,
                  Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa, and Homeopathy —
                  to provide comprehensive care using time-tested methods of
                  treatment and prevention.
                </p>
                <p className="text-lg">
                  At Jivan Amrit, we aim to revive and advance the legacy of
                  traditional Indian medicine through authentic practice,
                  awareness, education, and community wellness programs,
                  benefiting generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <SectionTitle>Global Recognition & Legacy</SectionTitle>

          {/* Description */}
          <div className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto text-center mb-10">
            <p className="mb-4">
              <strong>Ayurveda Kumbh</strong> proudly holds{" "}
              <span className="text-primary font-semibold">
                three world records
              </span>{" "}
              for Samhita recitation —{" "}
              <strong>Charak Samhita, Sushrut Samhita,</strong> and{" "}
              <strong>Ashtang Hridayam</strong> — honored by the{" "}
              <strong>World Book of Records, London</strong>.
            </p>
            <p>
              These recognitions symbolize our commitment to preserving ancient
              Ayurvedic wisdom and sharing it through spiritual, scholarly, and
              cultural platforms with the world.
            </p>
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center text-center mb-10">
            <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg border hover:shadow-xl transition">
              <img
                src="/src/assets/images/charaksamhita.jpg"
                alt="Charak Samhita"
                className="w-30 h-40 mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">Charak Samhita</h3>
              <p className="text-sm text-gray-600">
                World Record for Recitation
              </p>
            </div>

            <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg border hover:shadow-xl transition">
              <img
                src="/src/assets/images/SusurutSamhita.jpg"
                alt="Sushrut Samhita"
                className="w-30 h-40 mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">Sushrut Samhita</h3>
              <p className="text-sm text-gray-600">
                World Record for Recitation
              </p>
            </div>

            <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg border hover:shadow-xl transition">
              <img
                src="/src/assets/images/AshtangHridyam.jpg"
                alt="Ashtang Hridayam"
                className="w-30 h-40 mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">Ashtang Hridayam</h3>
              <p className="text-sm text-gray-600">
                World Record for Recitation
              </p>
            </div>
          </div>

          {/* Recognition Badge */}
          <div className="text-center">
            <img
              src="/src/assets/images/worldBook.jpg"
              alt="World Book of Records"
              className="mx-auto w-64 mb-4"
            />
            <p className="text-sm text-gray-600">
              Recognized by <strong>World Book of Records, London</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Become Our Partner</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join us in our mission to promote Ayurveda globally. We welcome
            partnerships with organizations that share our vision of advancing
            Ayurvedic wisdom and practices.
          </p>
          <a
            href="mailto:ayurvedakumbh@gmail.com"
            className="btn bg-white text-primary hover:bg-gray-100"
          >
            Contact for Partnership
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
