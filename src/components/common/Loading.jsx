const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* SVG Spinner */}
        <svg className="animate-spin h-16 w-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary opacity-20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary font-sanskrit text-xl">
          आ
        </div>
      </div>
      <p className="ml-4 text-lg font-medium text-gray-600">Loading...</p>
    </div>
  )
}

export default Loading