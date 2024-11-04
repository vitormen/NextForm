import Footer from './components/footer/Footer';
import FormComponent from './components/formComponent/FormComponent';
import HomePageImg from './components/homePage/HomePageImg';
import NavBar from './components/navbar/NavBar';

export default function HomePage() {
  return (
    <main >
      <NavBar />
      <div className="content">
        <HomePageImg /> 
        <FormComponent /> 
      </div>
      <Footer />
    </main>
  );
}
