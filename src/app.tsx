import { Link, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createSignal, Suspense } from "solid-js";
import "./app.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  const [title, setTitle] = createSignal("GOG");

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>GOG</Title>
          <Link rel="apple-touch-icon" href="./favicon.ico" />
          {/* Navbar en haut */}
          <Navbar
            title={title()}
            onTitleClick={() => setTitle("GALAXY OIL AND GAS")}
          />

          {/* Contenu des pages */}
          <main>
            <Suspense>{props.children}</Suspense>
          </main>

          {/* footer */}
          <Footer />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
