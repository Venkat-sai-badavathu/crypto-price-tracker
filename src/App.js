import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MockWebSocket } from "./services/mockWebSocket";
import { store } from "./store";
import Header from "./components/Header";
import CryptoTable from "./components/CryptoTable";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const mockWs = new MockWebSocket(store);
    mockWs.connect();

    return () => {
      mockWs.disconnect();
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CryptoTable />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
