
import "./index.css";



import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";

export function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex flex-1">
                <Home />
            </main>
            <Footer />
        </div>
    );
}

