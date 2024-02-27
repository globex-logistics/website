import { Flex, ToastProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import QuoteScreen from "./screens/QuoteScreen";
import AboutScreen from "./screens/AboutScreen";
import ServiceScreen from "./screens/ServiceScreen";
import AllServiceScreen from "./screens/AllServiceScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Flex direction="column" as="main" mt="72px" pt={{ base: "6", md: "10" }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/get-quote" element={<QuoteScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/service/:urlName" element={<ServiceScreen />} />
          <Route path="/services" element={<AllServiceScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
