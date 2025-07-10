const SectionTitle = ({ children, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold relative inline-block ${light ? 'text-white' : 'text-gray-800'}`}>
        {children}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-70"></span>
      </h2>
    </div>
  )
}

export default SectionTitle