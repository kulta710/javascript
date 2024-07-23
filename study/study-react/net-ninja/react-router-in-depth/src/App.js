import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/help/FAQ';
import Contact, { contactAction } from './pages/help/Contact';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
import NotFound from './pages/NotFound';
import CareersError from './pages/careers/CareersError'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          // errorElement={<CareersError />}
        />
      </Route>

      <Route path="*" element={<NotFound />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;