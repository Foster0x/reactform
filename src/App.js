import ContactForm from './ContactForm';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='text-center'>Contact Us!</h1>
        <ContactForm />
        <br />

    <div class="row">
      <div class="col-6">
        <h1 className='text-center'>Give us a call at: <a href="tel:5555555555">304-529-5485</a></h1>
        <br />
        <h1 className='text-center'>- Hours of Operation -</h1>
        <br />
        <h1 className='text-center'>Tuesday - Thursday: 4:00pm - 10:00pm</h1>
        <h1 className='text-center'>Friday - Saturday: 4:00am - 11:00pm</h1>
        <h1 className='text-center'>Sunday - Monday: Closed</h1>
      </div>

      <div class="col-6">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.7717602835323!2d-82.43552618434924!3d38.42363918233419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884609cc9618753f%3A0xe7b1bede79954438!2s1513%203rd%20Ave%2C%20Huntington%2C%20WV%2025701!5e0!3m2!1sen!2sus!4v1664462677292!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          style= {{ border: "0" }}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>

      </div>
    </div>
  );
};

export default App;