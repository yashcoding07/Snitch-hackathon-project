import Cursor from "./components/Cursor"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'


const App = () => {

    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return (
        <>
            <Cursor />
            <Nav />
            <Mainroutes />
            <Footer />
        </>
    )
}

export default App