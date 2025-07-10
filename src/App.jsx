import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import Loading from "./components/common/Loading";

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
const Venue = lazy(() => import("./pages/Venue"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />

          <Route path="/registration" element={<Registration />} />
          <Route
            path="/registration/delegate"
            element={<DelegateRegistration />}
          />
          <Route path="/registration/vendor" element={<VendorRegistration />} />
          <Route
            path="/registration/call-for-papers"
            element={<CallForPapers />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
