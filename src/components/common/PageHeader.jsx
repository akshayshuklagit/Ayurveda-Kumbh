import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const PageHeader = ({ title, breadcrumbs = [] }) => {
  return (
    <div className="bg-primary text-white py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm md:text-base">
          <Link to="/" className="flex items-center hover:text-white/80">
            <FaHome className="mr-2" />
            Home
          </Link>
          
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {crumb.link ? (
                <Link to={crumb.link} className="hover:text-white/80">
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </div>
          ))}
          
          {breadcrumbs.length === 0 && (
            <>
              <span className="mx-2">/</span>
              <span>{title}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHeader