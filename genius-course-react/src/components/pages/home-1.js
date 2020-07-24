import React from 'react';

import Header from '../layouts/header';
import Slider from '../layouts/slider';
import SearchCourse from '../layouts/search_course';
import PopularCourse from '../layouts/popular_course';
import AboutUs from '../layouts/about_us';
import WhyChooseUs from '../layouts/why_choose_us';
import LatestNews from '../layouts/latest_news';
import Sponsor from '../layouts/sponsor';
import BestCourse from '../layouts/best_course';
import CourseTeacher from '../layouts/course_teacher';
import BestProduct from '../layouts/best_product';
import FAQ from '../layouts/faq';
import CourseCategory from '../layouts/course_category';
import ContactArea from '../layouts/contact_area';
import Footer from '../layouts/footer';



class HomeOne extends React.Component {
    render() {
        return (
            <div className="Genius-Course">
                <Header />
                <Slider />
                <SearchCourse />
                <AboutUs />
                <WhyChooseUs />
                
                
                
                <BestCourse GrayBg={true} />
                <CourseTeacher />
                <BestProduct />
                <FAQ />
                <CourseCategory />
                <ContactArea />
                <Footer />
            </div>
        )
    }
};


export default HomeOne;

