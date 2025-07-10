import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/common/SectionTitle";
import SpeakerCard from "../components/speakers/SpeakerCard";

const Speakers = () => {
  // Categories for filtering
  const categories = [
    "All",
    "Ayurvedic Physicians",
    "Academicians",
    "Practitioners",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Mock data for speakers
  const allSpeakers = [
    {
      id: 1,
      name: "Guruvarya Vaidya Shri Panchabhai Damaniya Ji",
      title: "Founder - Arogya Mandir, Una (Gujarat)",
      image: "/src/assets/speakers/Panchabhai.png",
      category: "Ayurvedic Physicians",
    },
    {
      id: 2,
      name: "Guruvarya Vaidya Shri Madan Gopal Ji",
      title: "Founder - Ayush Gram Chikitsalay, Chitrakoot",
      image: "/src/assets/speakers/Madan.png",
      category: "Practitioners",
    },
    {
      id: 3,
      name: "Guruvarya Vaidya S P Sardeshmukh Ji",
      title: "Director - Integrated Cancer Treatment and Research Center, Pune",
      image: "/src/assets/speakers/sp.png",
      category: "Practitioners",
    },
    {
      id: 4,
      name: "Guruvarya Vaidya Savitri Devi Ji",
      title: "Ayurveda Academy, Bangalore",
      image: "/src/assets/speakers/savitri.png",
      category: "Academicians",
    },
    {
      id: 5,
      name: "Guruvarya Vaidya Shri S N Gupta Ji",
      title: "Vice Chancellor - Mahagujrat University, Nadiad",
      image: "/src/assets/speakers/sngupta.png",
      category: "Academicians",
    },
    {
      id: 6,
      name: "Guruvarya Vaidya Shri Praveen Joshi Ji",
      title: "Dhanwantari Shikshan Sansthan, Dhule",
      image: "/src/assets/speakers/Pravin.png",
      category: "Academicians",
    },
    {
      id: 7,
      name: "Guruvarya Vaidya Shri Ramdas Avhad Ji",
      title: "Dhanwantari Shikshan Sansthan, Dhule - Kopargaon, Shirdi",
      image: "/src/assets/speakers/ramdas.png",
      category: "Academicians",
    },
    {
      id: 7,
      name: "Guruvarya Vaidya Shri Tapankumar Ji",
      title:
        "Known as ‘Samhita Sadguru`" +
        "Renowned Ayurveda Practitioner in Cancer & Cardiology " +
        "Director - Research (Ayurveda) SGVP Hospital Ahmedabad, " +
        "4th Generation Vaidya with 30+ years experience",
      image: "/src/assets/speakers/tapankumar.png",
      category: "Academicians",
    },
    {
      id: 8,
      name: "Guruvarya Vaidya Shri Sasikumar Nechiyil Ji",
      title:
        "Chief Physician, Nechiyil Ayurveda Vaidyasala | CEO, Sidheshwara Drugs, Palakkad, Kerala | Renowned Rasvaidya | RAV Guru (Ministry of Ayush)",
      image: "/src/assets/speakers/sashi.png",
      category: "Rasvaidyas",
    },
    {
      id: 9,
      name: "Guruvarya Vaidya Shri Yogesh Bendale Ji",
      title:
        "Founder - Rasayu Cancer Clinic | Chairman & Managing Director, Rasayu Group | Renowned Ayurveda Oncologists | RAV Guru (Ministry of Ayush)",
      image: "/src/assets/speakers/yogesh.png",
      category: "Oncologists",
    },
    {
      id: 10,
      name: "Guruvarya Vaidya Shri M Gopikrishnan Ji",
      title:
        "Chairman, IIAR | Renowned Ayurveda Expert in Cancer Care | Renowned Rasvaidya Expert | Bellary, Karnataka",
      image: "/src/assets/speakers/gopikrishnan.png",
      category: "Oncologists",
    },
    {
      id: 11,
      name: "Guruvarya Vaidya Shri Upendra Dixit Ji",
      title:
        "Founder - Dr. Dixit Ayurveda | Renowned Ayurveda Practitioner | RAV Guru (Ministry of Ayush) | Goa",
      image: "/src/assets/speakers/upendra.png",
      category: "Practitioners",
    },
    {
      id: 12,
      name: "Guruvarya Vaidya Shri Anand Chaudhary Ji",
      title:
        "Professor, Rasashashtra | Ex HOD, RSBK Faculty of Ayurveda, Banaras Hindu University | Varanasi",
      image: "/src/assets/speakers/anand.png",
      category: "Academicians",
    },
    {
      id: 13,
      name: "Guruvarya Vaidya Shri Rajesh Thakkar Ji",
      title:
        "Founder - Nisarg Ayurveda, Ahmedabad | Renowned Ayurveda Practitioner | Expert in Garbhasanskar",
      image: "/src/assets/speakers/rajesh.png",
      category: "Practitioners",
    },
    {
      id: 14,
      name: "Guruvarya Vaidya Shri Pradnya Aptikar Ji",
      title:
        "Renowned Ayurveda Gynecologist | Founder, Arya Clinic | Pune, Maharashtra",
      image: "/src/assets/speakers/pradnya.png",
      category: "Practitioners",
    },
    {
      id: 15,
      name: "Dr. Ashwath Rao Ji",
      title:
        "MBBS, MS | Allopathy practitioner who successfully implemented Ayurveda purified heavy metals in COVID-19 | Hyderabad",
      image: "/src/assets/speakers/Ashwath.png",
      category: "Integrative Medicine",
    },
    {
      id: 16,
      name: "Vaidya Shri Dattatray Pandya Ji",
      title:
        "Renowned Ayurveda consultant and Panchkarma physician also a Nadi specialist and medical astrologer, and the visionary founder of Nakshatra Ayurvedam Hospital\nFounder – Keshayurveda & Kayayurveda\nPune Maharashtra",
      image: "/src/assets/speakers/pandaya.jpg",
    },
    {
      id: 17,
      name: "Vaidya Harish Patankar",
      title:
        "Renowned Ayurvedacharya, Nadi expert\nFounder of Keshayurved & Kayayurveda\nFounder – Prachin Samhita Gurukul\nPune Maharashtra",
      image: "/src/assets/speakers/harish.png",
    },
    {
      id: 18,
      name: "Vaidya Mhendrasinh Saravaiya",
      title:
        "Founder – Ashtang Ayurveda Dham\nWell known for treating chronic diseases and promoting Ayurvedic lifestyle\nTalaja Gujarat",
      image: "/src/assets/speakers/sarvaiya.png",
    },
    {
      id: 19,
      name: "Vaidya Raj Satiate",
      title:
        "Global Ayurveda Practitioner (Reaching over 55 countries)\nDirector, Jyovis Hospital of Ayurveda\nMOH (UAE), DHA (Dubai)",
      image: "/src/assets/speakers/raj.png",
    },
  ];

  // Filter speakers based on active category
  const filteredSpeakers =
    activeCategory === "All"
      ? allSpeakers
      : allSpeakers.filter((speaker) => speaker.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Speakers & Gurus"
        breadcrumbs={[{ label: "Speakers" }]}
      />

      {/* Category Filter */}
      <section className="py-8 bg-background-dark">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>
            {activeCategory === "All" ? "All Speakers" : activeCategory}
          </SectionTitle>

          {filteredSpeakers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No speakers found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call for Speakers */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Speaking?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We are looking for knowledgeable speakers and practitioners to share
            their expertise at Ayurveda Kumbh. If you are interested in speaking
            at our event, please submit your proposal.
          </p>
          <a
            href="/registration/call-for-papers"
            className="btn bg-white text-primary hover:bg-gray-100"
          >
            Submit Your Proposal
          </a>
        </div>
      </section>
    </>
  );
};

export default Speakers;
