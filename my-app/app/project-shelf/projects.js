const projectsData = {

    "2023": [
        {
            "id": 1,
            "title": "Smart Aquaculture",
            "description": "Smart Aquaculture - based on the artificial intelligence of things (AIOT) can assist fish farmers in intelligently controlling and managing different fishpond equipment remotely and assist aquaculture operators in performing professional aquaculture, lowering the industry's entry barrier, and promoting aquaculture.",
            "students": "AADIT V BIJU, AJO THOMAS, ALVIN VARGHESE, LLOYD SIBI",
            "supervisor": "Prof.Smitha Jacob",
            "tags": ["AIOT", "Aquaculture", "Remote Management"]
        },
        {
            "id": 2,
            "title": "TechSow",
            "description": "TechSow - a Crop and Soil Monitoring System, is an innovative agricultural system that uses a smart robot to improve farming. This robot has arms to check soil moisture and nutrient levels. It moves around your farm on its own, guided by a handy app. The app helps you manage your farm, from monitoring soil health to spotting plant diseases with AI. The application also uses weather data to make better decisions and figures out the right amount of fertilizer your crops need. This system helps farmers grow more while using fewer resources, making farming eco-friendly and efficient.",
            "students": "AFNA AYSHU JAFFIN, JUNA TERES MARTIN, NIMITHA JOY, RESE RAJU",
            "supervisor": "Prof. Divya Sunny",
            "tags": ["Agriculture", "Robotics", "AI", "Soil Monitoring"]
        },
        {
            "id": 3,
            "title": "AquaRover",
            "description": "Automated flood rescue boat.",
            "students": "AKASH VIJAY, JOHNS RAJU, JOSE K JAMES, TOMIN JOY",
            "supervisor": "Prof. Sarju S",
            "tags": ["Automation", "Flood Rescue", "Robotics"]
        },
        {
            "id": 4,
            "title": "ImagineAI",
            "description": "ImagineAI empowers the visually impaired with cutting-edge technology, seamlessly integrating navigation, object recognition, facial recognition, and text-to-speech capabilities. This innovation provides real-time auditory and haptic feedback, enhancing navigation and object interaction. It also enables the reading of text from books, further promoting accessibility and independence.",
            "students": "DONA SIBY, GAUTHAM BABU, KARUN CHERY JAMES, MELISSA MANOJ THONDOLI",
            "supervisor": "Prof.Ashly Thomas",
            "tags": ["AI", "Accessibility", "Object Recognition", "Text-to-Speech"]
        },
        {
            "id": 5,
            "title": "EcoExpense",
            "description": "EcoExpense, a personal finance Manager and Analyser",
            "students": "ADWAITH M, DONY TOMY, JIBBIN JACOB DANIEL, JUSTIN JOLLY",
            "supervisor": "Prof.Jibin Philip",
            "tags": ["Finance", "Personal Management", "Analysis"]
        },
        {
            "id": 6,
            "title": "AquaTech",
            "description": "The project aims to develop a smart irrigation system that calculates the water footprint required for each plant using image processing and sensors. It utilizes image recognition, temperature sensing, weather data analysis, and machine learning algorithms to determine the water needs of individual plants. The system will then automatically control the sprinkler to provide the required amount of water for each plant.",
            "students": "BIBIN BIJU, LEON JOSE MATHEW, LISS MARIA JOHN, NIKHIL JOSE",
            "supervisor": "Prof. Divya Sunny",
            "tags": ["Smart Irrigation", "Image Processing", "Machine Learning", "Agriculture"]
        },
        {
            "id": 7,
            "title": "CookItUp",
            "description": "CookItUp – a visual search technology for recipe discovery. This is an application that enables users to find recipes effortlessly by simply snapping a photo of ingredients. CookItUp relies on advanced image recognition algorithms, making it possible to identify ingredients accurately.",
            "students": "ANN ROSA BINU, NAVYA SAJU, SARA BABU, LAKSHMI SURESH",
            "supervisor": "Prof.Gayathri R Krishna",
            "tags": ["Visual Search", "Recipe Discovery", "Image Recognition"]
        },
        {
            "id": 8,
            "title": "SmartEco",
            "description": "The research primarily focuses on studying a house's electrical data. We utilise a tool to collect data from the circuit, a cloud data server to store it, a mobile application to analyse it, and a device to view it. The integration of electronic device control with the application is also emphasised. Real-time statistics on electricity use will be provided through the application. Additionally, it offers a housing price projection as well as predictions for electricity rates.",
            "students": "ALAN MATHEW TOM, CHRISTI JOSEPH, MATHEWS P MATHEW, NAVEEN S PANANTHANAM",
            "supervisor": "Prof. Maria Yesudas",
            "tags": ["Smart Home", "Energy Management", "Data Analysis", "IoT"]
        },
        {
            "id": 9,
            "title": "TranslateHub",
            "description": "The app aims to bridge language barriers and enable effective communication in various scenarios such as travel, business meeting and social interactions by converting spoken language into text and then translate it to desired language. The translated audio can be saved and shared. We can also browse other audios from system for translation.",
            "students": "DIVYA SURESH, MEGHA RAJESH, SARANYA S NAIR, SWEETY SONNY",
            "supervisor": "Prof.Vimal Babu P",
            "tags": ["Language Translation", "Speech-to-Text", "Audio Processing"]
        },
        {
            "id": 10,
            "title": "Wander05",
            "description": "Our innovative travel application combines AI, geolocation, and user-generated content to offer personalized experiences and real-time recommendations while addressing challenges such as over-tourism, economic disparities, and environmental concerns. Users input their budget, and the app optimizes their itinerary, emphasizing local business partnerships to spread economic benefits and foster sustainability. By promoting responsible travel and cultural sensitivity, this project redefines tourism, connecting travelers with local businesses and driving economic growth, cultural exchange, and environmental preservation, all within budget constraints.",
            "students": "AJAI SANKAR HAREESH, ANU MATHEW, ASHLY ROSE ANTONY, VIVEKANAND R",
            "supervisor": "Dr Praseetha VM",
            "tags": ["AI", "Travel", "Sustainability", "Personalization"]
        },
        {
            "id": 11,
            "title": "AugmentSpace",
            "description": "Augmented Reality (AR) technology to provide a seamless and immersive experience for designing and decorating interior spaces, allowing users to visualize and modify room layouts, furniture, colors, and decor in real-time, thereby simplifying the interior design process and reducing design errors and costs.",
            "students": "ANANDUKRISHNA VR, DERINE MARY DAVID, JIMMY JOSE, KRISHNATHEERTHA TS",
            "supervisor": "Prof.Kishore Sebastian",
            "tags": ["Augmented Reality", "Interior Design", "Visualization"]
        },
        {
            "id": 12,
            "title": "SkillVault",
            "description": "SkillVault is a versatile mock interview platform that caters to various interest groups, offering a dynamic and adaptive interviewing experience. This platform will feature an extensive question bank designed to suit different user preferences, with the ability to adjust questions based on individual responses. It will incorporate multiple-choice questions, advanced audio analysis to evaluate spoken responses, and video analysis to assess non-verbal cues. Users will receive detailed feedback and total scores, providing them with valuable insights to improve their interview skills. This comprehensive tool aims to help individuals prepare effectively for interviews, whether they are pursuing career opportunities or honing their interview abilities.",
            "students": "AJAY JOHNY, BIBIN BENNY, BIBIN JOSE, JERRY SEBASTIAN",
            "supervisor": "Prof.Dyni Thomas",
            "tags": ["Interview Preparation", "AI", "Audio Analysis", "Video Analysis"]
        },
        {
            "id": 13,
            "title": "Handrehab",
            "description": "A hand rehabilitation web application using computer vision which provides assessment and rehabilitation to the patients suffering from hand motor defects.",
            "students": "ADITHIYA SURESH, AKSHARA KALATHIL, AMAL B PALACKAL, ATHUL SAJI",
            "supervisor": "Prof. Angitha George",
            "tags": ["Rehabilitation", "Computer Vision", "Healthcare"]
        },
        {
            "id": 14,
            "title": "Fulmine",
            "description": "To forecast energy consumption and optimization as well as the current load being delivered to a sector of industry. Additionally, consider the machine's schedule that exhibits optimal efficiency.",
            "students": "TANIYA THOMAS, PRAISE ELIZABETH THOMAS, PRIYA BABU, RITHIKA ANILKUMAR",
            "supervisor": "Prof.Bino Thomas",
            "tags": ["Energy Forecasting", "Optimization", "Industrial Efficiency"]
        },
        {
            "id": 15,
            "title": "AquaAlert",
            "description": "AquaAlert aims to deploy an advanced IoT-driven flood protection system that combines real-time monitoring, predictive analytics, and rapid alert mechanisms to safeguard communities against the devastating impacts of floods.",
            "students": "KEVIN TOMY, ABHISHEK CA, JOSEPH JACOB",
            "supervisor": "Prof.Athirasree Das",
            "tags": ["IoT", "Flood Protection", "Predictive Analytics"]
        },
        {
            "id": 16,
            "title": "Care Wave",
            "description": "CareWave is an application for assisting elderly individuals especially those who are alone at home. It has the features like medication reminders and continuous monitoring of vitals and sending alert signals with health information to caregivers if any abnormal rates are detected.",
            "students": "EMY JOSHY, GEORLIT GEORGE, MEENU SUSAN MONY, SWATHILEKSHMI S",
            "supervisor": "Prof. Dona Mary Cherian",
            "tags": ["Elderly Care", "Health Monitoring", "Alert Systems"]
        },
        { id: 1, title: "IOT Based plastic detector", description: "Not Available", students: "Abin K Jaimon, Aravind Binu, Arun Kumar K Jose, Treesa Joseph", supervisor: "Prof. Bino Thomas", tags: ["IoT"] },
        { id: 2, title: "Game-Dev", description: "Not Available", students: "Aimil Bij Joseph, Alen Emmanuel, Allen Alex Alaney, Pranav P", supervisor: "Prof. Mereen Thomas", tags: ["Game Development"] },
        { id: 3, title: "HazeBuster(Vehicle license plate recognition for fog-haze environments)", description: "Not Available", students: "Aishwarya Sebastian, Amrutha Prakash, Ann Maria Sabu, Mubeena S", supervisor: "Prof. Gayathri R Krishna", tags: ["Computer Vision", "Image Processing"] },
        { id: 4, title: "IoT Based Project For Blind People(Third Eye)", description: "Not Available", students: "Akhil Sanker S, Alphy George, Irene Molly Varughese, Rinta Maria Raju", supervisor: "Thushara Sukumar", tags: ["IoT", "Accessibility"] },
        { id: 5, title: "EnviroGuard", description: "Not Available", students: "Alan Joy, Allwina Anna Soy Jose, Anitta Siby, Savio Shaji", supervisor: "Prof. Kishore Sebastian", tags: ["Environmental Monitoring"] },
        { id: 6, title: "Tailored Recipes And Culinary", description: "Not Available", students: "Alenta Joseph, Juval James, Vishnu A.V", supervisor: "Prof. Syamamol T", tags: ["Food Tech"] },
        { id: 7, title: "AI-Driven Video Prompt Analysis", description: "Not Available", students: "Allen Saji, Ashik David Roy, Nithin V. James, Reenphy George", supervisor: "Prof. Smitha Jacob", tags: ["Computer Vision", "AI"] },
        { id: 8, title: "FarmSage", description: "Not Available", students: "Amala Maria Kuruvilla, Anitha P Benny, Manjusree Raveendran, Raina Raj", supervisor: "Prof. Mereen Thomas", tags: ["Agriculture", "Mobile App"] },
        { id: 9, title: "TalkSync: A real time speech translation extension", description: "Not Available", students: "Anandu Unnikrishnan, Harinand S, Jithin Jerome, Sreelakshmi S", supervisor: "Prof. Maria Yesudas", tags: ["NLP", "Accessibility"] },
        { id: 10, title: "Animal Intrusion detection", description: "Not Available", students: "Anita Augustine, Annu Rajesh, Gautham S, Ria Siby", supervisor: "Prof. Thushara Sukumar", tags: ["Computer Vision", "IoT"] },
        { id: 11, title: "D-SIGN (Speech to Sign Translator)", description: "Not Available", students: "Krishnaveni M, Anna Jose, Bincy Benny, Sandra Maria Jose", supervisor: "Prof. Vimal Babu P", tags: ["NLP", "Accessibility"] },
        { id: 12, title: "CogniCare", description: "Not Available", students: "Ashish Rajesh, Delna K Jose, Fahad Salim, Gautham Krishna N", supervisor: "Prof. Angitha George", tags: ["Healthcare", "Mobile App"] },
        { id: 13, title: "Luminous Pursuit", description: "Not Available", students: "Benjamin Joseph, George John, Krishnaprasad CP, Sonu T Shaji", supervisor: "Prof. Ashly Thomas", tags: ["Gaming"] },
        { id: 14, title: "DeepReality", description: "Not Available", students: "Harikrishnan Ashok, Mareena Roy, P S Arjun, V S Nikhil Maheswar", supervisor: "Prof. Athirasree Das", tags: ["Computer Vision", "AR/VR"] },
        { id: 15, title: "TRACE", description: "Not Available", students: "Athul Soman, Joseph George, Thomson Stanes, Vimal Suresh", supervisor: "Prof. Dyni Thomas", tags: ["Sustainability"] },
        { id: 16, title: "Smart Dustbin", description: "Not Available", students: "Nihal Vijoy, Rahul Babu, Shalon Mary Michael, Sona Joseph", supervisor: "Prof. Jibin Philip", tags: ["IoT", "Sustainability"] }
    ],
    "2024": [
        { id: 5, title: "Curently", description: "A Household electricty consumption monitoring solution", students: "Kiran Babu,Indrajith S Nair,Sidharth Manikuttan,Anit Thomas", supervisor: "Prof. Jikku Thomas", tags: ["IoT", "App Development", "FireBase", "React Native"] },
        { id: 6, title: "EduNet", description: "Professional Networking and Event Engagement App for Students and Alumni", students: "Kennith Joseph, Amiya Hidayathulla,Melby Mariam Chandy,Akshay CA", supervisor: "Prof. Smitha Jacob", tags: ["Flutter", "App Development", "REST API"] },
        { id: 7, title: "LegalEase AI", description: "LegalEase is a web application that provides users with accessible legal guidance, information on specific laws, and connections to specialized legal experts.", students: "Agnel Brigit Shaji,Akash Benny,Rohan Joshy,Sereena Mariam Saji", supervisor: "Dr.Praseetha V.M", tags: ["Dialogflow", "HTML", "CSS", "JavaScript", "Firebase"] },
        { id: 8, title: "SecureWin", description: "A blockchain-based lottery system enchancing transparency and security in Kerala.", students: "Hridya Mathew,Jebin Tom,Vinny Elz Vincent,Tini Treesa Joseph", supervisor: "Prof.Angitha George", tags: ["Blockchain", "Flutter", "Firebase", "HTML", "CSS", "JavaScript", "Twilio"] },
        { id: 9, title: "MyClinicMate", description: "A online platform for managing medical appointments,allows patients to book appointments, find doctors, and receive notifications, while doctors can manage their schedules and provide patient updates.", students: "Abhinand R,Sona Binu,Theres Boby,Theresa Shaji", supervisor: "Prof.Ashly Thomas", tags: ["Flutter", "FireBase", "Google Map API"] },
        { id: 10, title: "MeetMyHelper", description: "MeetMyHelper is a platform for easily finding, booking, and managing caregiving services.", students: "Kavya K A,Liya Tony,Maria Joe,Nayana Tony", supervisor: "Prof.Jibin Philip", tags: ["React", "Firebase"] },
        { id: 11, title: "JourneySync", description: "Not Available", students: "Melvin Devasia,Adithyan B,Alishya Elezabath Tomy,Akhil Sabu", supervisor: "Prof.Dyni Thomas", tags: ["Web", "HTML", "CSS"] },
        { id: 12, title: "Voltz", description: "Not Available", students: "Aadithyaa MD,Abel Abraham Philip,Sachin Philip,Thomas K Binu", supervisor: "Prof.Jikku Thomas", tags: ["IoT"] },
        { id: 13, title: "MathMindCare", description: "MathMindCare is a platform designed to detect the likelihood of dyscalculia in children and, if needed, offers targeted tasks and training to help them improve their mathematical skills", students: "Celcia George,Riya Mariya George,Sneha Shaji,Tesna Treesa Benny", supervisor: "Prof. Mereen Thomas", tags: ["HTML", "CSS", "JS", "SQL"] },
        { id: 14, title: "HomeConnect", description: "HomeConnect is a platform that helps users easily find and book PGs and hostels, while providing property owners with simple management tools.", students: "Shaine Thomas,Rogy Benni,Surya Saji,Linta John", supervisor: "Prof.Angitha George", tags: ["Flutter", "Firebase", "Google Map Services"] },
        { id: 15, title: "AgroGuide", description: "Web application that enables a direct marketplace connecting farmers and consumers, eliminating the need for intermediaries. Also  offers personalized crop recommendations based on soil parameters provided by users and provide educational resources based on best cultivation practices.", students: "Gopika M,Deepna Maria Jimson,Nandana Venugopal,Rose George", supervisor: "Prof.Thushara Sukumar", tags: ["JavaScript", "php", "Flask", "MySQL", "ML"] },

        { id: 17, title: "EliteArena", description: "Elite Arena is a comprehensive esports platform designed to streamline the management of tournaments, providing tools for organizing competitions, team creation, and secure payment processing for both organizers and players.", students: "Joel Varghese,Noel Roy,Mohammed Aadhil Thahir,Alan Augustine", supervisor: "Prof.Bino Thomas", tags: ["HTML", "CSS", "JavaScript", "React", "MongoDB"] },
        { id: 18, title: "SmartHire", description: "A Resume based shortlisting software for companies", students: "Shifaz Abdul Kareem,Sarun Siby,Tobin Thomas,Abin Mathew Siby", supervisor: "Prof.Thushara Sukumar", tags: ["Web", "HTML", "CSS"] },
        { id: 19, title: "WorkEase", description: "Not Available", students: "Aayush.G,Devamanas S.S,Dona Sosa Joe", supervisor: "Prof.Dona Mary Cherian", tags: ["HTML", "CSS"] },
        { id: 20, title: "On-spot Mechanic", description: "A platform to bring mechanic services to users upon emergency situations based on their gps location.", students: "Sanjid S,Edwin Rajesh,Ajay Cyriac,Jithmon P Cherian", supervisor: "Prof.Jibin Philip", tags: ["Flutter", "Google Maps services", "Firebase"] },
        { id: 21, title: "Foodie Buddy", description: "A Recipe App", students: "Niketh A,Abin Varghese,Mathew Raino", supervisor: "Prof.Smitha Jacob", tags: ["Flutter", "Firebase"] }
    ]
};

export default projectsData; 