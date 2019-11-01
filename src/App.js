import React, { useState, useEffect } from 'react';
// Styles
import './App.scss';
// Data & external methods
import { FiveGTimeline, retainTalent, shopSlider, forefront, basicSlider } from './data';
import analytics from './helpers/analytics';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Pagebody from './components/Pagebody';
import Dropcap from './components/Dropcap';
import Pullquote from './components/Pullquote';
import CTA from './components/CTA';
import Button from './components/Button';
import Timeline from './components/Timeline';
import Slider from './components/Slider';
import Related from './components/Related';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Socials from './components/Socials';
import AnimationTrigger from './components/AnimationTrigger';
import Bubbles from './components/Bubbles';
import Flipboard from './components/Flipboard';
import VerticalSlider from './components/VerticalSlider';
import BasicSlider from './components/BasicSlider';

// Assets
import ladder from './assets/titles/ladder.svg';
import globe from './assets/titles/globe.svg';
import dumbbell from './assets/titles/dumbbell.svg';
import plane from './assets/titles/plane.svg';
import trophy from './assets/titles/trophy.svg';
import Broughttyb from './components/Broughttyb';
import stars from './assets/stars.svg';
import climate from './assets/titles/climate.svg';
import risks from './assets/titles/risks.svg';
import collaborate from './assets/titles/collaborate.svg';
import success from './assets/titles/success.svg';
import change from './assets/titles/change.svg';
import innovation from './assets/titles/innovation.svg';


function App() {

  useEffect(() => {
    analytics.send('App Loaded');
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Pagebody>
        <AnimationTrigger>
          <p>
            <Dropcap>C</Dropcap>
            an you actually be future-proof in a time of rapid
            technological change? It is a question that many businesses
            are asking, as technologies such as articial intelligence (AI)
            and automation supercharge the pace of innovation worldwide.
          </p>
          <p>
            Technological innovation is coming faster than ever, with 94pc of tech
            decision-makers saying that the rate of technological advancement is
            higher now than three years ago, according to the Accenture
            Technology Vision 2019 report.
          </p>
          <p>
            Businesses need to keep abreast of technology megatrends and adapt to
            stay relevant, says Neil Bellamy, head of technology, media and
            telecoms at NatWest. “We're in the middle of a fundamental change
            from an industrial age to an increasingly digital age,” he says.
            “Innovation is more and more rapid.”
          </p>
          <p>
            Mr Bellamy says that British businesses need to “avoid obsessing on
            individual technologies or fads to look beyond the immediate horizon
            and consider megatrends and convergent technologies. These will
            shape not only their business but whole sectors and industries.”
          </p>
          <p>
            “All businesses are being framed by one macro force: complexity,” says
            Nelson Phillips, professor of strategy and innovation at Imperial
            College Business School in London. “From automotive to nancial
            services, retail to leisure and luxury, adapting to the disruption
            associated with new technologies, and complex customer and
            consumer demand, is framing everything. Digital strategy has become
            corporate strategy. It is reshaping how whole industries work.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Slider data={shopSlider} />
      <Pagebody title="How climate change and tech are shaping business" img={climate}>
        <AnimationTrigger>
          <p>
            Even small businesses are facing huge change from technologies such as artificial intelligence, along with opportunities to innovate. The two most important trends for businesses to grapple with are big data and AI, says Prof Nelson Phillips of Imperial College Business School in London.
          </p>
          <p>
            Prof Phillips says: “These are the two technologies that I hear businesses talking about the most. These technologies are fundamentally reshaping how companies think about solving problems, innovating and creating value for customers.
          </p>
          <Pullquote quote>
            <h3>
              Most businesses I work with realise that if they are going to compete with born-digital businesses they need to get busy and deal effectively with these digital technologies.
            </h3>
            <p>
              explains Nelson Phillips, professor of strategy and innovation at Imperial College Business School
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            Consumer expectation is also changing, with sustainability and recycling – the circular economy – now increasingly important. Research in 2017 by Unilever suggested that 33pc of consumers want to buy from companies they see as “doing good”.
          </p>
          <p>
            Changes driven by technology and increased consumer demand for sustainability are affecting businesses in every sector, says Jon Tipple, global chief strategy officer of branding agency Future Brand.
          </p>
          <p>
            Prof Philips says: “Beyond technology, I think climate change could more correctly be called a megatrend. It is big, on the horizon, and companies need to be doing something.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Flipboard />
      <Pagebody
        title="How to take the right risks for your business to survive"
        img={risks}
      >
        <AnimationTrigger>
          <p>
            Businesses often spend time attempting to reduce risks, but this can lead to becoming inflexible and unable to change, says Howard Kerr, chief executive at BSI.
          </p>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote quote>
            <h3>With economic, political and technological challenges, it can be tempting to seek safe harbour and ride out the storm. But future-proofing is just as important.</h3>
            <p>Howard Kerr, chief executive at BSI.</p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            Businesses face challenges not just from evolving technology but from market conditions and external factors such as Brexit, says Mr Kerr. “Our research reveals clear external challenges for business decision-makers around the globe. These are technological change, and skills shortages.
          </p>
          <p>
            “Interestingly, but perhaps unsurprisingly, British businesses were alone in ranking government policies and international politics at the top of their list of concerns. This indicates how ongoing Brexit negotiations are uniquely absorbing a lot of time and effort among organisations.”
          </p>
          <p>
            In many industries, the so-called Fourth Industrial Revolution poses both challenges and opportunities, with technologies such as smart factories projected to add $3.7trn (£2.9trn) in value to the world economy by 2025, according to McKinsey research.
          </p>
          <p>
            Companies need to take an innovative approach to keep up, says Emilie Colker, London managing director of design and innovation company IDEO. “By only following a traditional, analytical approach, there’s a huge risk that businesses will all end up at the same point, with very little to differentiate them,” she says.
          </p>
          <p>
            “The ability to innovate will be critical to the next wave of stand-out companies, and that relies on a culture of creativity, which is inherently risky and requires outside thinking.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <VerticalSlider />
      <Pagebody
        title="Why businesses need to collaborate"
        img={collaborate}
      >
        <AnimationTrigger>
          <p>
            To succeed in a business environment that is more competitive than ever, businesses need to listen to new voices, both internally and externally, says Stefan Haase, director at Whitecap Consulting.
          </p>
          <p>
            That means listening to employees, and also to clients and partners outside the company, he says – in fact, this is an essential, untapped resource that businesses ignore at their peril.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            “Almost every business will have a number of people that for one reason or another are not heard at board level,” he says. “Employees and managers at the heart of the business spot gaps as well as opportunities, but the business culture often prevents these being articulated.”
          </h3>
          <p>reveals Stefan Haase, director at Whitecap Consulting</p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            Businesses should also consult clients, partners and customers, Mr Haase believes. “Reaching out to clients and partners is equally important as external stakeholders should be consulted when it comes to innovation and future-proofing the business.
          </p>
          <p>
            “It depends on the business and the circumstance, but typically collaborations can speed up innovation projects and ensure that new products and services can be provided to customers more quickly. It’s not the only way, but increasingly a method that is growing in importance and impetus.”
          </p>
          <p>
            New business models are being created rapidly in the digital era, and collaboration is now a key way to discover new customers and markets, says Mr Bellamy, of NatWest.
          </p>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote quote>
            <h3>
              If you want to move at pace and offer your clients the very best, most of the time collaboration with an expert provider provides the answer,”
            </h3>
            <p>says Neil Bellamy, head of technology, media and telecoms at NatWest</p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            “Customers are operating in different places on new platforms that require collaboration with new providers to deliver on omni channels.
          </p>
          <p>
            “It’s essential that you create an entrepreneurial mindset and protect your innovation teams from the core business. Innovate quickly, testing and validating with customer insights – you really don’t need to spend millions on developing an idea. If it works, then invest and scale, looking for collaborators.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <BasicSlider title="How to future-proof your company" dataProp={basicSlider} columns={false} />
      <Pagebody
        title="Five of the most successful cross-sector collaborations"
        img={success}
      >
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Microsoft and Toyota
            </h3>
            <p>
              Microsoft and Toyota have collaborated on technologies designed to make cars “like giant smartphones”, using Microsoft technology to build a connected vehicle platform
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Starbucks and Spotify
            </h3>
            <p>
              The global coffee chain announced a partnership with Spotify, where employees would have access to Spotify playlists, offering music artists access to Starbucks customers
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Pepsico and Black Swan
            </h3>
            <p>
              Pepsico UK has worked with prediction marketing start-up Black Swan using online data to predict which ingredients and flavours customers will like
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Apple and Nike
            </h3>
            <p>
              Apple and Nike have collaborated on a wide variety of co-branded tech products, including a special edition of the Apple Watch
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              BMW and ParkMobile
            </h3>
            <p>
              As technology threatens to disrupt the markets of the car giants, companies such as BMW have acquired start-ups such as mobile parking experts ParkMobile
            </p>
          </Pullquote>
        </AnimationTrigger>
      </Pagebody>
      <Pagebody
        title="How different sectors are adapting to digital change"
        img={change}
        noPadding
      >
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Finance
            </h3>
            <p>
              Demand for technology remains high in an industry still recovering from the 2008 financial crash, and many fintech companies are expecting huge growth, says Chris Griffiths, chief executive of Ayoa.com. He says: “Many fintech organisations are looking to automation and AI technology in order to grow and develop, with a survey by the London Stock Exchange showing that UK-based fintech firms are expecting a huge 88pc growth over the next three years.”
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Construction
            </h3>
            <p>
              In Britain, the construction business is lagging behind, says Prof Phillips, of Imperial College Business School. “The fact that the construction and heating of buildings is such a major contributor to greenhouse emissions is an existential threat to this industry, yet little is happening. The problem is on an industry level.”

            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Manufacturing
            </h3>
            <p>
              The Fourth Industrial Revolution is changing manufacturing, but it is also creating a skills gap, says Chris Jones, chief executive of City & Guilds Group. “It’s not just the older generation who need upskilling. At this time of rapid digital transformation, even younger workers find their skill sets are becoming quickly out of date.”
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Automotive
            </h3>
            <p>
              Big car brands are rapidly buying up hi-tech start-ups to compete with companies threatening to disrupt their industry, says Jon Tipple, of Future Brand. He says: “Start-ups are threatening to radically reshape the car industry and the legacy players are not hanging around to let them do it.”
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Healthcare
            </h3>
            <p>
              The NHS and start-ups creating medical devices are adapting to the changing needs of the population, says Prof Phillips. “Healthcare in the UK is working hard to deal with the problems and challenges of an ageing population. They are business-focused on the future, making them future-proof by default.”
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Retail
            </h3>
            <p>
              Facing challenges from online shopping, many retailers are still struggling to adapt, says Mr Griffiths. “According to new research by [communications and IT service provider] KCOM, the retail sector is lagging behind others in technology innovation as they struggle to cope with the impact of e-tailing and changes in consumer spending.”
            </p>
          </Pullquote>
        </AnimationTrigger>
      </Pagebody>
      <BasicSlider title="Meet the businesses at the forefront of the digital revolution" dataProp={forefront} columns />
      <Pagebody
        title="Innovation is a team sport"
        img={innovation}
      >
        <AnimationTrigger>
          <p>
            “There is no longer a way to innovate for most mid-market firms that doesn’t require open innovation involving a whole ecosystem or supply chain,” says Prof Phillips, of Imperial College Business School.
          </p>
          <p>
            “The only way to innovate is to innovate with customers, suppliers, and others in the supply chain,” he says. “And this is getting to be more and more true as industries move on to platforms of various kinds and as digital transformation reshapes industries. The idea of one firm innovating its way to success is simply not a useful idea any longer. Innovation is a team sport in the 21st century.”
          </p>
          <p>
            Platforms such as Rightmove were formed simply by several estate agents deciding to collaborate. NatWest partnered with a payment automation company MineralTree to offer a streamlined payment system to small businesses.
          </p>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
              In this age of innovation, it is key to borrow ideas from other industries and other businesses, says Mr Thuiller, of Oppo ice cream. “Networks are crucial when you start up. We try to bring our network together to solve problems – help each other to leap over potholes. It’s amazing what ideas you can find from other industries.”
            </h3>
            <p>
              says Mr Thuiller, of Oppo ice cream
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            Mr Young, of Digital Catapult, says: “The expectation shouldn’t be that you have to build all the capabilities in-house. If you go out to the market and you speak with people who can solve your problems, you can actually work with them to solve your problems, engaging with start-ups and scale-ups, and even speak to universities.
          </p>
          <p>
            “Successful businesses that are undergoing digital transformation don’t just work with the same players they’ve always worked with. It’s about breaking free of that silo you’ve found yourself in, because you’re only going to innovate once you’ve broken free of that.”
          </p>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote>
            <h3>
              When it comes to collaboration, and taking the first steps to future-proof your company, the most important thing is to be bold, says Mr Bellamy, of NatWest.
            </h3>
            <p>
              says Neil Bellamy, head of technology, media and telecoms at NatWest
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            “When I’m speaking to the most successful scale-up businesses, most of them say to me, ‘I had a gut feeling I wanted to change my business, and I wish I’d been bolder’,” he says. “My advice is to be confident.”
          </p>
          <p>
            And if businesses embrace being future fit and its surrounding technology with confidence, they will be able to make the most of the opportunities the new digital age offers.
          </p>
        </AnimationTrigger>
      </Pagebody>
      <CTA>
        <p>To find out more about getting your business future fit, visit the NatWest Business Hub</p>
        <Button
          link="https://ad.doubleclick.net/ddm/trackclk/N8083.124621MSNUK/B22370404.240723500;dc_trk_aid=443465896;dc_trk_cid=105350124;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
        />
      </CTA>
      <Socials />
      <Broughttyb />
      <Credits />
      <Related />
      <Footer />
    </>
  );
}

export default App;
