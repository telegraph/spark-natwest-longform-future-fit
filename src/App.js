import React, { useState, useEffect } from 'react';
// Styles
import './App.scss';
// Data & external methods
import { FiveGTimeline, retainTalent } from './data';
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

// Assets
import ladder from './assets/titles/ladder.svg';
import globe from './assets/titles/globe.svg';
import dumbbell from './assets/titles/dumbbell.svg';
import plane from './assets/titles/plane.svg';
import trophy from './assets/titles/trophy.svg';
import Broughttyb from './components/Broughttyb';
import stars from './assets/stars.svg';

function App() {
  const [progress, setProgress] = useState(0);

  const changeProgress = () => {
    window.requestAnimationFrame(() => {
      let progressState = progress;
      const docHeight = document.body.scrollHeight;
      const scrolled = window.scrollY + window.innerHeight;
      const difference = docHeight + scrolled;
      const percentage = difference / docHeight - 1;
      progressState = percentage;
      setProgress(progressState);
    });
  };

  useEffect(() => {
    // on update
    document.addEventListener('scroll', changeProgress);
    return function cleanup() {
      document.removeEventListener('scroll', changeProgress);
    };
  });

  useEffect(() => {
    analytics.send('App Loaded');
  }, []);

  return (
    <>
      <Header progress={progress} />
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
      <Slider />
      <Pagebody title="The rise of the 5G workforce" img={ladder}>
        <AnimationTrigger>
          <p>
            In response, people are embracing these changes and actively
            looking for non-traditional work, says Chris Gray, brand leader at
            recruitment company Manpower UK. Mr Gray says: “Over a third of UK
            workers are now looking for alternatives – including freelancing
            and gig working – over full-time jobs.”
          </p>
          <p>
            Workplaces are also facing challenges from technology, with up to
            38pc of work potentially becoming automated, according to Accenture
            research.
          </p>
          <Pullquote quote>
            <h3>
              For mid-market companies, automation will mean a change in
              mindset about recruitment and HR.
            </h3>
            <p>Dr Naeema Pasha, director of careers at Henley Business School.</p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            Dr Pasha says: “Career and human resources professionals need to do
            more to support workers as traditional HR delivery has not been
            adapted sufficiently to the future of work.”
          </p>
          <p>
            Companies will need to focus on recruiting adaptable workers who
            have the skills to keep up with technology, she says. “Companies
            will need to retrain and recruit a workforce that is able to adapt
            to change effectively. The crucial skills include agility; critical
            thought; resilience and – most importantly – human skills and
            emotional intelligence, in order to build teams, collaborate and
            enable successful growth and transformation.”
          </p>
          <p>
            Technology can already help companies find the right employees,
            says Chris Gray, brand leader, Manpower UK. He says: “Integrating
            technology into your organisation is about striking the right
            balance. Take HR for example. Attracting and retaining the right
            talent should not be a battle between human and robot.
          </p>
          <p>
            “The best approach for HR is to blend high-tech with a high-touch
            approach. HR leaders can use automation and artificial intelligence
            (AI) to reduce the administrative burden and streamline hiring
            processes, without losing the personal interaction that candidates
            have come to value in recent years.
          </p>
          <p>
            “In fact, with so much of the initial contact between candidates
            and employers becoming automated, the need for in-person
            interaction is only set to further increase in importance.”
          </p>
          <Pullquote quote>
            <h3>
              Our research shows nearly two-thirds (61%) of UK jobseekers
              favour in-person interviews as their preferred recruitment method.
            </h3>
            <p>
              Morten Petersen, of the artificial-intelligence-enabled
              recruitment company Worksome.
            </p>
          </Pullquote>
          <p>
            For employers in the UK, this trend offers an opportunity,
            according to Mr Petersen. He says: “Freelancers will come to play
            an even more pivotal role in the British economy than they already
            do. Since 2009, the freelance economy in the UK has grown by 25pc
            and generates an estimated £109bn a year, according to IPSE.
          </p>
          <p>
            “There are around two million freelance workers in the UK. They
            represent an amazing pool of talent that can help companies
            suffering from the skills shortage.”
          </p>
          <p>
            The shift in Britain’s way of working is reflected around the
            world, says Adrian Wright, principal lecturer at the University of
            Central Lancashire. Dr Wright says: “The changing workforce in the
            UK is reflective of other developed economies, as shifts to new
            emerging industries have led to more part-time work, increased
            self-employment and casual work.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Pagebody
        title="Trends in the global workforce"
        img={globe}
      >
        <AnimationTrigger>
          <p>
            These trends are mirrored across territories including America and
            Europe, says Mr Petersen. “In the next five years, 45pc of workers
            in Europe will be self-employed, either completely or in combination
            with another job, according to (market intelligence provider) IDC.
            Fifty-three million people in the US are already freelancing either
            full-time or part-time.”
          </p>
          <p>
            This means that workers across Europe are embracing new ways of
            working, and are reluctant to engage in traditional ways of applying
            for jobs, says Mr Bradley.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            The employment landscape is shifting. With a widespread skills
            shortage, employers are under constant pressure to attract and
            retain talent.
          </h3>
          <p>Richard Bradley, MD UK & Ireland of staffing company Kelly Services.</p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            One way they can do this is by being flexible. Kelly Services’
            research found that in the UK a relatively large number of workers
            aged 15-64 work full-time, with 80pc in full-time work, 14pc
            self-employed and 6pc on temporary contracts, according to Eurostat
            statistics. Around a third, 34pc of workers, have been in their role
            for 10 years.
          </p>
          <p>
            Other countries are even more reliant on temporary jobs. In the
            Netherlands, 64pc of workers are full-time, with 21pc temporary and
            15pc self-employed.
          </p>
          <p>
            In Italy, 63pc are full-time, 16pc are temporary, and 21pc
            self-employed. Italian workers tend to be more loyal to one
            employer, with 52pc having stayed in their current role for 10
            years.
          </p>
          <p>
            Ireland’s statistics are closer to the UK’s, with 77pc in full-time
            employment, 9pc in temporary employment and 14pc self-employed, and
            42pc of workers have stayed in their current role for 10 years.
          </p>
          <p>
            In France, 72pc of workers are full-time, with 17pc on temporary
            contracts and 11pc self-employed; 46pc of workers have been in their
            current role for 10 years.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            Companies actively seeking skills and experience may have to rethink
            their recruitment approach. Under 40% of our interviewees said they
            would go through the traditional job application process to find
            new or different work.
          </h3>
          <p>
            Richard Bradley, MD UK & Ireland of staffing company Kelly Services.
          </p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            This has also filtered down into the way that businesses operate
            day-to-day. Several companies now offer software such as employee
            engagement platforms, which integrate messaging with work-related
            functions such as schedules, delivered via apps.
          </p>
          <p>
            Heathrow and Exclusive Hotels use software from Beekeeper, and have
            subsequently seen increased employee satisfaction and decreased
            staff turnover.
          </p>
          <p>
            Cristian Grossmann, chief executive, Beekeeper, says: “You might
            assume it’s just millennials who want to communicate through a
            team app, but this is not the case. In fact, the baby-boomer
            generation has also embraced this tool, and they are adopting
            communications and information technology at a higher rate than
            younger generations.
          </p>
          <p>
            “In our experience, we find that all employees, regardless of age or
            role, want the ability to communicate and feel engaged in the
            workplace.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Pagebody purple anchor="challenges">
        <AnimationTrigger>
          <h2 className="title__content">Tackling the talent drain in Europe</h2>
        </AnimationTrigger>
        <AnimationTrigger>
          <img className="stars" src={stars} alt="stars" />
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            Offering part-time work is key to engaging workers in EU nations,
            with 19pc of EU workers engaged on a part-time basis, rising to 32pc
            among women, according to research by staffing company Kelly
            Services.
          </p>
          <p>
            Dealing with staff as individuals can help workers to deal with the
            pressure of balancing work and home life, says Clare Eagle, chief
            people officer at cloud telephony platform Natterbox.
          </p>
          <p>
            Ms Eagle says: “Whether it’s being late to work because of dropping
            the children off at school, or leaving early for a doctor’s
            appointment, staff feel guilty that they are having to put
            something else ahead of work. Companies should work with staff
            individually to create a workplace environment that best suits
            their needs and removes this guilt.”
          </p>
          <p>
            Research by Kelly Services shows that workers in temporary and
            part-time work are being well rewarded in European countries, with
            19pc saying that their motivation was increased reward. Kelly
            Services found that many employees are reluctant to engage with a
            traditional interview process, with just 38pc of interviewees
            having applied via an online portal without previous contact with
            the company.
          </p>
          <p>
            Alister Esam, chief executive of Process Bliss, which advises SMEs,
            says: “The conventional approach to recruitment is flawed – it’s
            too much of a one-way street and the candidate has to effectively
            sell themselves to the employer. There is lots of talent out there
            but traditional approaches to recruitment are fundamentally unsuited
            to finding and developing it.”
          </p>
          <p>
            Instead, Mr Esam invites applicants to complete a game-based
            psychometric assessment before selecting a shortlist, which he
            believes helps to find candidates who will stick.
          </p>
          <p>
            He says: “We gather several candidates for a talk on what the
            business is all about, and see how they interact. Then each person
            will go for a walk with someone to interview them. We’ll then swap
            candidates and walk again, and then make a final decision about who
            to recruit.”
          </p>
        </AnimationTrigger>
        <Bubbles leastBubbles />
      </Pagebody>
      <Pagebody
        title="The challenges of the 5G workforce..."
        img={dumbbell}
      >
        <AnimationTrigger>
          <p>
            Employers are responding to the challenges of the multigenerational
            workforce, says Andy Young, talent and organisation lead at
            Accenture UK. Mr Young says: “The multiple generations across the
            UK have more in common than they do differences. The critical need
            for businesses is to be inclusive of all types of talent.”
          </p>
          <p>
            He says that the rise of technologies such as automation and
            artificial intelligence (AI) is not a matter of robots taking jobs,
            but instead poses an opportunity for businesses. “In the age of AI,
            success will increasingly depend on the collaboration of people and
            machines. British businesses recognise this future, with 66pc of
            leaders believing AI will result in net job gains for their
            organisation in the next three years.”
          </p>
          <p>
            Mr Young points to Accenture research, which shows that 67pc of
            workers are keen to learn how to work with intelligent technology
            in the next three to five years – but only 3pc of executives are
            offering training in areas such as AI, empathy and complex reasoning
            for their staff, which he points out are skill sets in growing
            demand.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            Investing in technology is not a magic bullet for companies
          </h3>
          <p>Vincent Belliveau, chief executive EMEA, Cornerstone OnDemand</p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            He believes it is important to invest in technologies that focus on
            people, saying: “Invest in systems that will help your employees
            grow and develop, rather than transactional systems like payroll
            and time management. Put the emphasis on your people and focus on
            the technologies that will help your employees prepare for a
            digitally focused and fast-moving workplace of the future.
          </p>
          <p>
            “Identify the areas where innovative technology will make the
            biggest impact and expand the impact of that technology over time.
            By integrating technology slowly, you can ensure that it works and
            that it’s having a measurable impact on employee engagement.”
          </p>
          <p>
            Bruce Morton, talent acquisition expert and author of Redesigning
            the Way Work Works, says: “First you need to deconstruct, streamline
            and improve work processes. Survey, or have informal talks with your
            employees about how work works – and where it doesn’t work quite so
            well. Rely on them to suggest which tasks are redundant, less
            efficient or a pain in the neck.
          </p>
          <p>
            “Then huddle with leaders and workers to redefine work patterns,
            behaviours and workflows. That way, before you even automate or
            digitise anything you should see real performance shifts. If you’ve
            made the right changes, productivity will improve. If not, you’ll
            see where a new approach is necessary.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Pagebody
        title="… and the international challenges"
        img={plane}
      >
        <AnimationTrigger>
          <p>
            And there are other challenges for workforces to contend with,
            particularly on the international stage. British companies face
            pressure from global challenges, such as a shortage of digital
            skills, says Mr Gray. “The UK workforce is under pressure from
            global trends, including the need to develop tech skills. The lack
            of qualified talent could stifle the nation’s progress.”
          </p>
          <p>
            But despite this pressure and the steady uncertainty caused by
            Brexit, Britain remains an attractive labour market, says Mr Gray.
            “While some UK employers have shifted their local workforce
            investments, our recent Total Workforce Index reveals that the
            country’s candidate pool and talent performance remains steady,
            with the UK ranked the most attractive labour market in EMEA
            (Europe, the Middle East and Africa).”
          </p>
        </AnimationTrigger>
        <Pullquote>
          <h3>
            For businesses, offering flexibility can pay dividends in terms of
            improving employee engagement and retention, and cutting training
            costs – both locally and globally.
          </h3>
        </Pullquote>
        <AnimationTrigger>
          <p>
            A report by the Society for Human Resource Management (SHRM) found
            that 91pc of HR professionals found that flexible work arrangements
            positively influence employee engagement, job satisfaction and
            retention. Employees with workplace flexibility show increased
            commitment and improved performance, the report found.
            Pharmaceutical company AstraZeneca conducted a flexibility survey
            of employees based at its Delaware HQ and 96pc said flexibility
            influenced their decision to stay at the business.
          </p>
          <p>
            Neil Bellamy, head of technology, media and telecommunications,
            NatWest, says: “The ‘gig economy’ has potentially negative
            connotations: we prefer to call it the liquid workforce, to
            reflect the fact that this trend offers lasting opportunities for
            both employee and employer.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            Companies have traditionally been set up for the industrial age
            rather than a digital economy, which can potentially result in
            workers becoming deskilled and/or disengaged.
          </h3>
        </Pullquote>
        <AnimationTrigger>
          <p>
            “Liquid workforces need continuous training, aligned to their
            personal needs and aspirations. People don’t typically work
            vertically any more, but come together and share skills in project
            working groups. They need to be adaptable and ready for change,
            supported by an innovative management culture of failing fast,
            working iteratively and being empowered to succeed.”
          </p>
          <p>
            Antony Woodcock, co-founder and chief executive at GIG, says:
            “Millennials want to experience life in a different way to their
            parents and their approach to work is what differs most. Young
            workers want work built around their lifestyle, while older
            generations believe a lifestyle is built around work.
          </p>
          <p>
            “This isn’t to say that security isn’t important to young
            generations; it’s merely a reflection of how young workers view
            careers and work in general, which is that it doesn’t have to be
            9am-5pm or be contained with the confines of one employer for 40+
            years.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Timeline
        title="How businesses can attract and retain talent"
        items={retainTalent}
        anchor="talent"
      />
      <Pagebody
        title="How to keep talent"
        img={trophy}
      >
        <AnimationTrigger>
          <p>
            Retaining talent is a key challenge for modern companies, says Ross
            Tracey, managing director at Ceridian Europe.
          </p>
          <p>
            Mr Tracey says that technology can help companies to retain
            talent – for instance, by using predictive analytics to work out
            whether star performers are at risk of leaving.
          </p>
          <p>
            But he believes that a shift in the relationship with employees
            (and taking into account the needs of the 5G workforce) can help
            companies to retain that talent.
          </p>
          <p>
            He says: “Employers should create flexible strategies to accommodate
            the unique circumstances of employees’ career and life stages.
            Employees need clarity on what to expect about compensation,
            promotions and their career trajectories at the organisation.
            Regular check-ins keep everyone on the same page.
          </p>
          <p>
            “Shift from a transactional relationship with employees to one of
            mutual support. Organisations that support the complete financial,
            physical, social, and emotional well-being of employees, at any
            stage of life, inspire dedication and loyalty.
          </p>
          <p>
            “Ensure every employee knows the impact they make on company goals,
            and empower them to drive results,” he says.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            To attract and retain talent, employers will have to balance the
            needs of the multigenerational workforce.
          </h3>
          <p>
            Adrian Wright, principal lecturer at the University of Central
            Lancashire
          </p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            Dr Wright says: “According to the 2018 Deloitte Millennial Survey,
            50pc of millennials consider flexibility as ‘very important’ when
            choosing where they work. Employers that proactively cater to the
            need for flexibility are developing a clear advantage.”
          </p>
          <p>
            He says that different generations may have different needs, such
            as people with caring responsibilities requiring flexible hours,
            and that employers need to cater for this.
          </p>
          <p>
            Training is key to making employees feel valued, and technology can
            help to deliver it, says David Willett, corporate director at the
            Open University.
          </p>
          <p>
            He says: “Employers need to take a more agile approach when it comes
            to developing talent. The way in which training it is delivered will
            need to become more flexible too.”
          </p>
          <p>
            Nick Whiteley, managing director of HFX workforce management and
            author of Business Innovation: A Little Book of Big Ideas, says:
            “Treat someone like a robot or clone and they surely will not stay
            in an organisation. But the right environment and raison d’être can
            make a difference.
          </p>
          <p>
            “In my view adopting a hive approach to a company is the exact
            opposite from the autocratic hierarchy – everyone plays a role and
            can see how their contribution makes a difference. Yet many
            companies are a long way from this position.”
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            Workplace culture is the key to attracting and retaining workers of
            all generations.
          </h3>
          <p>
            Andy Young, talent and organisation lead at Accenture UK
          </p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            He says: “Inclusive cultures and teams, where people feel a sense
            of belonging and feel safe to volunteer a new idea, are
            higher-performing.”
          </p>
          <p>
            Accenture research shows that equal workplaces have six times the
            level of innovation mindset as the least equal, Mr Young says.
          </p>
          <p>
            “With real-wage rises since the financial crisis being suppressed
            in many areas of the labour market, fair pay still matters, but so
            does the quality of the work and the work environment,” he says.
            “Most of all, workers are looking for greater freedom, good team
            environments, skills and career development, and purpose at
            work – they want ‘good work’.”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <CTA>
        <p>For more information visit the NatWest Rethinking Business Hub</p>
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
