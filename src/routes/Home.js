import '../styles/Home.css';
import Header from '../components/Header';
import GymFeatures from '../components/GymFeatures';
import Courses from '../components/Courses';
// import { createRef, useRef } from 'react';

function Home() {
  const bmiFormHandler = e => {
    e.preventDefault();
  };
  return (
    <div className="home">
      <Header className="home__header" />
      <section className="home__hero">
        <span>
          <span>از همین امروز شروع کنید</span>
          <span><button>ثبت نام</button>به ما بپیوندید</span>
        </span>
      </section>
      <GymFeatures />
      <section className="home__menCourses">
        <img className="home__menCoursesBgImg" src="bg.png" alt="background" />
        <h2>دوره های آقایان</h2>
        <Courses gender="men" />
      </section>
      <section className="home__womenCourses">
        <h2>دوره های بانوان</h2>
        <Courses gender="women" />
      </section>
      <section className="home__bmi">
        <img src="bmibg.webp" alt="bmi" />
        <div className="home__bmiInfo">
          <div>
            <h2>خود را اندازه بگیرید <span>bmi</span></h2>
            <div className="home__bmiForm">
              <form onSubmit={bmiFormHandler}>
                <div>
                  <label>قد
                    <input type="number" placeholder="قد / cm" />
                  </label>
                  <label>وزن
                    <input type="number" placeholder="وزن / cm" />
                  </label>
                </div>
                <div>
                  <label>سن
                    <input type="number" placeholder="سن" />
                  </label>
                  <label>
                    <span>مرد</span>
                    <input type="radio" name="radio-groupe" checked />
                  </label>
                  <label>
                    <span>زن</span>
                    <input type="radio" name="radio-groupe" />
                  </label>
                </div>
                <div>
                  <button type="submit">bmi حساب کردن</button>
                  <div className="home__bmiAnswer"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="home__newsletter">
        <img src="bg.png" alt="bg" />
        <h2>عضویت در خبرنامه</h2>
        <div>
          <input type="email" name="emailAddress" placeholder="آدرس ایمیل" />
          <button className="home__newsletterBtn">عضویت</button>
        </div>
      </section>
    </div>
  );
}

export default Home;