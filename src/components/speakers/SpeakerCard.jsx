import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300">
      {/* Speaker Image */}
      <div>
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-auto max-h-96 object-contain"
        />
      </div>

      {/* Speaker Info */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
        <p className="text-sm text-gray-600">{speaker.title}</p>

        {/* Social links */}
        {(speaker.linkedin || speaker.twitter || speaker.website) && (
          <div className="flex justify-center space-x-4 mt-4">
            {speaker.linkedin && (
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
                aria-label={`${speaker.name}'s LinkedIn profile`}
              >
                <FaLinkedin size={18} />
              </a>
            )}
            {speaker.twitter && (
              <a
                href={speaker.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
                aria-label={`${speaker.name}'s Twitter profile`}
              >
                <FaTwitter size={18} />
              </a>
            )}
            {speaker.website && (
              <a
                href={speaker.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
                aria-label={`${speaker.name}'s website`}
              >
                <FaGlobe size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeakerCard;
