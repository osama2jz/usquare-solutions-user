import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Projects from "../home/Projects";
import s1 from "../../assets/s1.svg";
import s2 from "../../assets/s2.svg";
import s3 from "../../assets/s3.svg";
import s4 from "../../assets/s4.svg";
import s5 from "../../assets/s5.svg";
import ar1 from "../../assets/ar1.png";
import ar2 from "../../assets/ar2.png";
import { useStyles } from "./styles";
import Content from "./Content";
import { useParams } from "react-router-dom";

const Services = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { type } = useParams();
  let arvrData = {
    title: "AR / VR GAMES",
    subTitle: "Augmented reality app Development",
    title2: "Augmented reality app Development Company",
    subTitle2:
      "USquare solutions is a leading platform with extensive augmented reality app development experience. We, as the best augmented reality app development company, helps you to take your business to another level. We provide a huge variety of AR/VR development services to cater to your businesses globally. Our vast experience and up-to-date knowledge transform your idea into a gaming reality.",
    description:
      "We being the top augmented reality app Development Company, with proven AR app development expertise create augmented reality apps with eye-popping layouts to delight, engage, and grow their user bases.  We provide the top augmented reality technology and VR consultancy, to understand and support your virtual reality game and application ideas.",
    img: ar1,
    bottomCards: false,
    specialization: [
      {
        title: "AR/VR GAMES DEVELOPMENT",
        description:
          "Our highly experienced developers provide you the best AR/VR games development services. With VR & AR, the gaming experience becomes more exciting because of the movements of the player, especially dodging, walking, shooting, etc. As a best augmented reality app Development Company, we develop games that are not just interactive but also make your user more engaged. Our best augmented reality games development services will make you forget the real world & experience the fiction.",
        img: ar2,
      },
      {
        title: "3D Model Designing",
        description:
          "Augmented reality app development is exclusively dependent on 3D model designing and application of the algorithms, which provides the overlaying of a scene in the device's camera lens with virtual content.",
        img: ar2,
      },
      {
        title: "Augmented Reality Healthcare",
        description:
          "By combining the most advanced mobile virtual reality (VR) technology with cutting-edge medical research, USquare Solutions develop augmented reality applications that help both new and experienced medical care experts with performing different sorts of methodology, from basic infusions or blood draws to minor or complex medical procedures. ",
        img: ar2,
      },
      {
        title: "Augmented Reality e-Commerce",
        description:
          "With our augmented reality apps for business, you can boost every type of sale regardless of the type of products you sell. As the best augmented reality app Development Company, we deliver competitive AR software with extensive e-Commerce strategies for all your business needs with high and fast user adoption. We provide you the in-store experience by providing virtual fitting rooms to help customers decide on the size or color of a product giving them the ability to place 3D objects into their real-world surroundings.",
        img: ar2,
      },
      {
        title: "Augmented Reality Real Estate",
        description:
          "As technology is progressing, the Internet has become the main spot where purchasers and renters search for new homes, Augmented Reality in business has a lot to offer for real estate. We as a top augmented reality app Development Company, develop AR-assisted apps that can assist clients while choosing homes.",
        img: ar2,
      },
      {
        title: "Augmented Reality Tourism & Navigation",
        description:
          "We, as a leading augmented reality app Development Company, bring your sightseeing tours or museum/gallery rounds to the next level by developing the augmented reality-based tourism & navigation apps. We at USquare Solutions, bring the AR apps for you which provides you a complete tourist guide through specified locations, showing directions, historical info, and even use local ads.",
        img: ar2,
      },
      {
        title: "Augmented Reality Training & Education",
        description:
          "Our top-notch AR-based Augmented Reality education technology can make your educational experience more engaging and interactive. We, as the best augmented reality app development company, build apps using innovative technology to make your learning easier.",
        img: ar2,
      },
      {
        title: "Virtual Reality (VR) Software Development",
        description:
          "With our extensive experience in software development, we also provide virtual reality app development. Our virtual reality (VR) development services exclusively focus on the implementation of VR-based tools. Augmented Reality (AR) and Virtual Reality (VR) are introduced through the same 3D high definition video and audio platform. Both these technologies refer to immersing users into the digital world. However, while considering augmented reality vs virtual reality, VR is immersive and AR just incompletely overlays virtual items over these real surroundings.",
        img: ar2,
      },
    ],
  };
  let webData = {
    title: "web Application Development",
    subTitle: "Custom web application development services",
    title2: "Our Web Application Development Services",
    subTitle2:
      "High-performing web solutions to support your business and serve users globally.USquare Solutions is one of the best web development companies, offering its custom web development services around the globe.  We aim to help our customers with high-end custom web applications using multiple programming languages like NET, Java, Node.js, PHP, and Python on Windows or .NET Core, Node.js, PHP, or Ruby on Linux. We are the web application development service providers, which offer innovative website designs and development services including WordPress web development, PHP and MySQL web development, Custom Design, PSD to HTML, Angular, and much more. We provide web app services that allow you to deploy, scale, adjust, and monitor applications in an easy, secure, and efficient manner.",
    description:
      "Our custom web application development services are tailored to your exact business needs. So, if you’re looking for a long-term, reliable web development company, building advanced websites, software, and mobile apps using the latest technologies to provide the ultimate support to your business in a highly competitive environment, then USquare Solutions with the years of experience will provide you the full-stack web application development services with excellent usability, scalability, and universal compatibility.",
    img: ar1,
    bottomCards: false,
    specialization: [
      {
        title: "Custom Web Application Development Services",
        description:
          "Our experience as one of the top web development companies globally is unmatched in terms of web development technologies. We excel in developing and delivering products that will meet your requirements and function better to have extensive commercial product development for small to large companies across the globe. Website is a key feature for a business or an organization. It is the online presence of your business. We are a team of IT professionals, who help clients achieve their business goals effectively and create an impact in the market. Our web application development best practices include all major robust web solutions. A custom build web application for your business can efficiently increase the productivity of your company. We offer innovative & reliable software solutions to complement your specific business needs.",
        img: ar2,
      },
      {
        title: "Technology Consulting",
        description:
          "Being a top-notch web-based Application Company, our primary concern during a web development process is to be the most trusted partner of our clients helping them to easily track and analyze their product sales, orders, and payments as well as domain expertise to gain favorable ROI from your web development project. We at USquare solutions believe that we are here to serve our customers with mutual respect and care. Get your custom web application development services consulting with us. ",
        img: ar2,
      },
      {
        title: "WordPress Web Development Services",
        description:
          "WordPress is used to develop new sites, company business sites, informative websites, as well as in e-commerce web development. WordPress development services by USquare solutions are one of the leading and best development services being provided to create powerful, highly optimized, quick, and successful, and profitable websites for clients. We are always available to fulfill your requirements with our Custom web application development services, knowledge and a team of expert WordPress developers and programmers. USquare solutions provide WordPress solutions along with development services. So, if you’re having a slow pace website, hire our extremely professional and skilled web programmers to solve your all development problems.",
        img: ar2,
      },
      {
        title: "PSD to HTML Development Services",
        description:
          "USquare solutions are the best web design and development company, providing PSD to HTML conversion services. Our team of expert Graphic Designers creates PSD templates via Photoshop and converts them to HTML templates to make elegant and professional website designs for your business with a modern and minimal designed layout. PSD TO HTML conversion is the most important step in the designing process and our web designer's team brings out effective solutions for your websites to make them more responsive, fast to load, error-free, dynamic and providing good performance. One of the major reasons makes us the best custom web application development services.",
        img: ar2,
      },
      {
        title: "Client-centric Development Team",
        description:
          " Hire a web programmer from our full-stack web developers to develop cost-effective and high-quality websites and give your business a digital transformation through our advanced web app software development services. Our web developers offer custom web application development services as per your business need. As one of the best web development companies, our dedicated client-centric development team uses an innovative recruiting business model to bridge the gap between demand and supply.",
        img: ar2,
      },
      {
        title: "Web Portal Development",
        description:
          "As the best web development company, we build a portal where you can easily communicate with your customers to cater to all the needs and objectives of online businesses. Our custom web application development services include Business portals, Shopping portals, jobs, matrimony & mailing portals, and a lot more. Our developers hold in-depth expertise in the latest web technologies and utilize the know-how to performance-oriented web solutions that take your business to a new pinnacle.",
        img: ar2,
      },
      {
        title: "SEO Optimized Website Development",
        description:
          "Ranking your site on Google is important to get more traffic and sales of your product. We, at USquare Solutions, develop websites that are SEO optimized so, you don't need to stress over your site rankings. You can also avail the option of our SEO services to ensure that your site stays #1 on Google. Get our website SEO services to mark yourself in the digital world.",
        img: ar2,
      },
    ],
  };
  let mobileData = {
    title: "Mobile Application Development",
    subTitle: "Multi platform mobile app development",
    title2: "Multi platform mobile app development Company",
    subTitle2:
      "USquare Solutions is a leading platform with extensive multi platform mobile app development experience. We as the best mobile app development company, build memorable mobile experiences by using technologies like Swift, React, Unity3dC#, and JavaScript. We develop mobile applications with a single code for all the Platforms.",
    description:
      " Designing technology for today’s mobile generation. We deliver scalable and interactive multi platform mobile app development services that set trends for others in your industry and provides unforgettable user experiences. We offer high quality, cross-platform native and web app experiences.",
    img: ar1,
    bottomCards: false,
    specialization: [
      {
        title: "Native Mobile app development",
        description:
          "Our mobile app developers with extensive experience and in-depth domain knowledge build solutions that meet market needs, empower companies' brand identity and encourage business growth and expansion. We offer quality-oriented native apps for both Android/IOS platforms keeping in mind your business requirements.",
        img: ar2,
      },
      {
        title: "Hybrid Mobile app development",
        description:
          "With a unique blend of native and web app technologies, we provide cross-platform apps that can work in different environments and can be deployed on both Android and IOS. As a custom mobile app development company, we deliver the best hybrid applications using a single cross-platform mobile app development tool.",
        img: ar2,
      },
      {
        title: "Mobile Web app Development",
        description:
          "Our team of mobile web app developers includes skilled UX designers, graphic designers, and software developers with deep expertise in mobile web app development technologies. We offer highly impactful and digitally transformative experiences with high-quality web apps. We provide native-like capabilities and installability using a single code base.",
        img: ar2,
      },
      {
        title: "IOS mobile app development",
        description:
          "We are the one-stop solution for all your IOS development needs having the expertise you need to produce efficient, stable, and scalable mobile applications for Apple hardware, including iPhone, iPad, and iPod Touch. Our comprehensive IOS app development services offer enterprise mobile app development solutions, high-performance delivery, and deployment of our IOS applications to ensure the highest ROI.",
        img: ar2,
      },
      {
        title: "Android App Development",
        description:
          "Our professional and dedicated developers know every corner of the Android platform, down to its core. We at USquare Solutions bring you the development services for every Android device type, brand, and custom ecosystem. As an android mobile app development company, we are devoted to providing the most reliable solution to all your development needs that can work on every device regardless of brand and your industry of operation.",
        img: ar2,
      },
    ],
    technologyStack: {
      desc: "There are multiple mobile app development languages that are used for developing cross-platform-based mobile applications. We, as one of the best mobile app development platforms and also the enterprise mobile app development company, use some of the technologies mentioned below for multi-platform mobile app design and development.",
      data: [
        {
          title: "React Native",
          desc: "We provide end-to-end React Native apps compatible with IOS and Android.   We provide development services with user-centered native mobile apps. Our skilled team deals with every kind of React Native application and offers development, design, testing, and maintenance services for them. To develop applications for multiple platforms, a single codebase is used and mobile applications built using React Native are cost-effective as it saves time and money. We create mobile applications using Swift for iOS or Java for Android.",
        },
        {
          title: "Swift",
          desc: "We use Swift ( powerful and intuitive programming language) as a cross-platform language for IOS, iPadOS, macOS, and IOS watches with a Reactive Programming approach to build a unique architecture solution, user-friendly app, and the best UX. Swift supports all Apple platforms and Linux, providing a fast and powerful experience. Swift code is a safe design, also produces software that runs ultra-fast. ",
        },
        {
          title: "JavaScript Development",
          desc: "Our proficient JavaScript development team provides the best java mobile app development services with deep expertise that allows delivering unique, user-friendly, and interactive applications. We at USquare Solutions, utilize JavaScript language to provide our clients with feature-packed, efficient, and scalable applications. Our JavaScript developers generate high-quality code and ensure fast completion of the project providing Front-end UI Development, Backend Development, and also Enterprise Development services.",
        },
        {
          title: "Unity 3D for multi-platforms",
          desc: "Unity 3D supports multiple platform execution, almost to 17 different platforms with the engine support language like C# and support intense real-time graphics rendering, meant for creating the best graphics and visuals during mobile phone app development. Our company, with extensive gaming development experience and in-depth knowledge in the development of games, mobile and cross-platform apps, utilizing all the advanced tools and technologies of unity 3d game engine to meet the client’s requirements.",
        },
      ],
    },
  };
  let designData = {
    title: "Graphic Designing",
    subTitle: "Online Graphics Design Services",
    title2: "Best web designing company to develop the Visual Communication",
    subTitle2:
      "Usquare Solutions brings you creative and unique online graphics design services, providing Visual Identity and Branding Solutions with wireframes to give reliable UI/UX design for Systems and Applications. As a top website designing company, we provide digital strategies with unique website designing plans to ensure the best user experience.",
    description:
      "Our top-notch website design & development services, translate your ideas into visuals by directing your product from beginning to end, making it user-friendly, eye-catching and high in quality along with the custom website design services. Our graphic design services price list showcases the different yet affordable graphic design pricing with high-quality services. Usquare Solutions develop creative designs and advertising to make your brand get noticed. We bring you fresh ideas and thoughtful design, helping your brand to be more visible. Our best web design services turn your imagination into reality by developing high-impact design mainly focusing on the best user experience. As a leading custom website design company our highly skilled team of the best web designers can design quality-oriented graphic designs, and custom website design services appealing enough to seize the attention of your audience.",
    img: ar1,
    bottomCards: false,
    specialization: [
      {
        title: "UI/UX Designing",
        description:
          "We provide high-quality UI/UX designing, as it is the key ingredient to the commercial success of any digital endeavour. Our top UX designers create competitive and tailored designs that help you get a head start over your competitors. We deliver high-end UI/UX solutions which are visually appealing, brand strengthening digital interfaces that attract and retain users. Our web designing consultants having expertise in UX research and usability testing, builds smooth interaction flows between users and software using the User experience (UX) design services. We offer E-commerce UX design for improved online store experience and develop the Web/mobile app UX design. Being the best website graphic design company, we ensure good graphic design services with fast onboarding and a high subscription renewal rate.",
        img: ar2,
      },
      {
        title: "Logo Design Services",
        description:
          "Our logo designing services, serve as a tool to attract the right audience towards your business and boost brand loyalty resulting in the enhanced identity of your brand. As the best logo designing company, we offer logo designing services that help you in building a lasting impression at the very first glance. We deliver cost-effective design solutions with budget-friendly logo designing packages. Our custom logo design services can bring you high-resolution designs with 100% client satisfaction. As we know that a great logo is the crux of every business, our creative logo designing experts blend the aesthetics and functionality, creating wonders. Our professional logo designers know with the prior experience bring a perfect blend of aesthetic graphical elements like fonts, colours, shapes, and others to create logo designs with the most interactive graphics that leave an impression.Being a top-notch web-based Application Company, our primary concern during a web development process is to be the most trusted partner of our clients helping them to easily track and analyze their product sales, orders, and payments as well as domain expertise to gain favorable ROI from your web development project. We at USquare solutions believe that we are here to serve our customers with mutual respect and care. Get your custom web application development services consulting with us. ",
        img: ar2,
      },
      {
        title: "Corporate Branding",
        description:
          "Cultivate the high-impact business image through a well-designed logo and influential branding services of your products, to capture your target market and the significant number of clients with our corporate branding services. We build the visual presence of your brand or product. Our branding services enables your brand to capture the public imagination and we propel a hidden message with our unique logo design. Corporate branding is particularly important for small and growing businesses, Usquare Solutions as one of the best website design companies for small businesses brings you up-to-date corporate branding that not only reflects the culture of the organization but also spread its purpose, objectives, values, and aspirations of its clients.",
        img: ar2,
      },
      {
        title: "Web Designing",
        description:
          "As a leading website design company, we creatively offer graphic web design to bring an extraordinary way of marketing via the best eCommerce website design. We bring you the digital graphics for website designing to make it more eye-catching. We use the latest technology, intelligence, and the best tools to boost your sales and win more customers for your company by developing high-end web designs with a focus on the best user experience. Our cheap website designing and cost-effective website designing with the word press website design services bring real results to your business. We bring you professionally styled, responsive, and interactive web designing services that capture your brand, improve your conversion rates and maximize your revenue. These graphic design services online can help grow your business and achieve your goals. Our experienced team tailors our web design services as per your company and its unique needs.",
        img: ar2,
      },
    ],
  };
  let digitalData = {
    title: "Digital Marketing",
    subTitle: "Best digital marketing agency services",
    title2: "Our Best digital marketing agency services",
    subTitle2:
      "As the best digital marketing agency services provider, we at USquare Solutions provide you the dynamic, versatile and complete digital marketing services with a custom strategy and data-driven insights to help you achieve your business goals including the website traffic to revenue.",
    description:
      "An active and notable online presence proves to be the key to growing your businesses digitally. USquare Solutions being the best digital marketing agency services with accelerated marketing experts are specialized in giving excellent digital exposure to your brand. We are the best digital marketing agency that effectively expands your business with top-notch online marketing services. We provide the accelerated marketing that helps you in driving profits to your door. Whether you're searching for digital and social media marketing services, the best SEO Services Company to improve your ranking in search results, or online marketing services company to redesign your website for a marketing overhaul or revamp your content marketing strategy, our dedicated team and customized solutions can bring your imagination to real life.",
    img: ar1,
    bottomCards: false,
    specialization: [
      {
        title: "Digital Marketing",
        description:
          " Be where the world is going in this digital era with one of the best digital marketing firms, our dedicated team experts work with you to produce customized digital marketing services that align with your unique business needs, offering multiple digital marketing cost-effective services to assist any size company in any industry. We support business startups to medium-sized enterprises to multiple-location companies. Our digital marketing services help you expand your business market reach to offer goods and services to your target customers, irrespective of time differences or location.",
        img: ar2,
      },
      {
        title: "Social Media Marketing (SMM) ",
        description:
          "USquare Solutions as a top social media marketing company, is a leading social media management platform, offering a custom social media marketing service plan. SMM is one of the most powerful ways to digitally advertise any business to make it reach the maximum number of the client base. Our social media marketing specialist first analyzes the data and characteristics of your audience to bring the best digital exposure for your businesses. We help your businesses by building brand awareness, providing local social media marketing via Facebook, Instagram, Linked In, YouTube, and other social media platforms while generating revenue. We help you to get more engaged and more website traffic within the affordable social media marketing services. Social media marketing agency pricing is one of the most important concerns of the majority of people. So, if you're wondering about how much does social media marketing cost? Or social media marketing pricing packages? Learn Now. Our digital agency transforms users into brand lovers.",
        img: ar2,
      },
      {
        title: "SEO Services",
        description:
          "Grow your business using our Search Engine Optimization services. USquare Solutions as one of the best SEO Companies in the world offers the top SEO services that get your audience and targeted traffic. As a top SEO company, we are not only optimizing your website for driving maximum traffic but also help you in establishing a brand name by enabling your website to be ranked in the number 1 position of search engines. To let more people know about your brand we offer the best SEO services with the best SEO packages that create your social presence more visible. Being the best SEO service provider, we cover all your SEO needs ranging from the best SEO services for small businesses, mobile SEO best practices, International SEO best practices, and best enterprise SEO as well as the best local SEO services and a lot more to increase your insights. We bring you the cost-effective, best SEO service for your dream venture to maximize your revenues.",
        img: ar2,
      },
      {
        title: "SEM Services",
        description:
          "We offer both approaches of advertising, SEO, and SEM via Paid or unpaid referencing. SEO is more about acquiring, monitoring, and analyzing organic (unpaid) traffic patterns while SEM is all about getting traffics through paid ads. It is for targeted ads that you pay for. Our SEM services will get you to the top of the rankings by designing your ads so that they are targeted well. SEM-based advertising activities also include Social Advertising Campaigns.",
        img: ar2,
      },
      {
        title: "Social Advertising Campaigns",
        description:
          "Advertising Campaigns While making a purchasing decision, the majority of people use social media. We bring you effective marketing on social media via social media campaigns to intimate your business with social media marketing. Launch your social media campaign with our white label social media marketing services for enhanced robust online presence.These services can be a content creator for a company's social media pages or even managing posts and branding to make it look like the business is handling it all.",
        img: ar2,
      },
      {
        title: "Email Marketing",
        description:
          "One of the cheap social media marketing techniques involves Email marketing that keeps you connected with your potential customers and the existing customers. Providing the best digital marketing agency services, USquare Solutions crafts attractive and professional newsletters to capture the attention of the targeted customers. Through our Email Marketing services, we help you to monitor your campaign and allows you to measure your results accurately. Last but not the least, it’s an easy and user-friendly service that can instantly send updates to customers.",
        img: ar2,
      },
    ],
  };
  return (
    <Box>
      <Content
        data={
          type === "ar-vr-games"
            ? arvrData
            : type === "web-app-development"
            ? webData
            : type === "mobile-app-development"
            ? mobileData
            : type === "graphic-designing"
            ? designData
            : type === "digital-marketing-solutions"
            ? digitalData
            : digitalData
        }
      />
      <Projects />
      <Title order={2} align="center" color={theme.colors.blue} fw={400}>
        WE BUILD CUSTOMER TRUST
      </Title>
      <Title order={4} align="center" fw={100}>
        Our Customer Trust us Because we are Providing
      </Title>
      <Flex gap="lg" justify={"center"} p="xl" wrap={"wrap"}>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s1} className={classes.s} width={"50px"} />
          <Text align="center">Customized Development</Text>
        </Stack>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s2} className={classes.s} width={"50px"} />
          <Text align="center">Unique Attractive Design</Text>
        </Stack>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s3} className={classes.s} width={"50px"} />
          <Text align="center">True Responsiveness</Text>
        </Stack>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s4} className={classes.s} width={"50px"} />
          <Text align="center">Testing for Perfection</Text>
        </Stack>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s5} className={classes.s} width={"50px"} />
          <Text align="center">Time to Market</Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Services;
