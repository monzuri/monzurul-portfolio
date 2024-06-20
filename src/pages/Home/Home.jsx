import Contact from '../../Components/Contact/Contact';
import Experience from '../../Components/Experience/Experience';
import ExperienceWith from '../../Components/ExperienceWith';
import Hero from '../../Components/Hero/Hero'
import Projects from '../../Components/Projects/Projects';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ExperienceWith></ExperienceWith>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
        </div>
    );
}

export default Home;