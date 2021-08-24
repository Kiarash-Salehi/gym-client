import '../styles/Home.css';
import Layout from '../components/Layout';
import GymFeatures from '../components/GymFeatures';
import Courses from '../components/Courses';
import NewsLetter from '../components/NewsLetter';
import { useState } from 'react';

function Home() {
  const [bmiHeightInput, setBmiHeightInput] = useState(null);
  const [bmiWeightInput, setBmiWeightInput] = useState(null);
  const [bmiResultNum, setBmiResultNum] = useState(null);
  const [bmiResult, setBmiResult] = useState(null);
  const bmiFormHandler = e => {
    e.preventDefault();
    const bmi = bmiWeightInput / ((bmiHeightInput / 100) * (bmiHeightInput / 100));
    setBmiResultNum(bmi);
    if (bmi <= 18.5) {
      setBmiResult('دچار کمبود وزن');
    } else if (bmi > 18.5 && bmi <= 24.9) {
      setBmiResult('سالم');
    } else if (bmi > 24.9 && bmi <= 29.9) {
      setBmiResult('دارای اضافه وزن');
    } else {
      setBmiResult('چاق');
    }
  };
  return (
    <Layout headerClassNames="tr__header">
      <div className="home">
        <section className="home__hero">
          <span>
            <span>از همین امروز شروع کنید</span>
            <span><button>ثبت نام</button>به ما بپیوندید</span>
          </span>
        </section>
        <section className="home__gymFeaturesSection">
          <GymFeatures />
        </section>
        <section className="home__menCourses">
          <img className="home__menCoursesBgImg" src="bg.png" alt="background" />
          <h2 className="sectionHeaders">دوره های آقایان</h2>
          <Courses gender="men" />
        </section>
        <section className="home__womenCourses">
          <h2 className="sectionHeaders">دوره های بانوان</h2>
          <Courses gender="women" />
        </section>
        <section className="home__bmi">
          <img className="bgImgs" src="bmibg.webp" alt="bmi" />
          <div className="home__bmiInfo">
            <div>
              <h2><span>bmi</span> خود را اندازه بگیرید</h2>
              <div className="home__bmiForm">
                <form onSubmit={bmiFormHandler}>
                  <div>
                    <label>قد
                      <input type="number" value={bmiHeightInput} onChange={e => setBmiHeightInput(e.target.value)} placeholder="قد / cm" required />
                    </label>
                    <label>وزن
                      <input type="number" value={bmiWeightInput} onChange={e => setBmiWeightInput(e.target.value)} placeholder="وزن / kg" required />
                    </label>
                  </div>
                  <div>
                    <button type="submit">حساب کردن bmi</button>
                    <div className="home__bmiAnswer"></div>
                  </div>
                </form>
                {bmiResultNum && <div className="home__bmiRes">
                  <span><b>توده بدنی (BMI): </b></span><span>{bmiResultNum}</span>
                  <p><b>وضعیت: </b>{bmiResult}</p>
                </div>}
              </div>
            </div>
          </div>
        </section>
        <NewsLetter />
      </div>
    </Layout>
  );
}

export default Home;