import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Loading from "./components/common/Loading";
import { trackPageView } from "./utils/analytics";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Speakers = lazy(() => import("./pages/Speakers"));
const Registration = lazy(() => import("./pages/Registration"));
const DelegateRegistration = lazy(() =>
  import("./pages/registration/DelegateRegistration")
);
const VendorRegistration = lazy(() =>
  import("./pages/registration/VendorRegistration")
);
const CallForPapers = lazy(() => import("./pages/registration/CallForPapers"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Venue = lazy(() => import("./pages/Venue"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const Contact = lazy(() => import("./pages/Contact"));
const KeyHighlights = lazy(() => import("./pages/KeyHighlights"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Component to track page views
function PageTracker() {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <PageTracker />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/highlights" element={<KeyHighlights />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/registration/delegate" element={<DelegateRegistration />} />
              <Route path="/registration/vendor" element={<VendorRegistration />} />
              <Route path="/registration/call-for-papers" element={<CallForPapers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Suspense>
  );
}

export default App;
