import React, { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import './blogDetails.scss';
import { Link } from "react-router-dom";

const blogs = {
    "swasth-mitra-benefits": {
        title: "Is Swasth Mitra Beneficial for Me?",
        content: `<div class="header-section">
        <p>When it comes to health, most of us only think of hospitals, ambulances, or doctors when we’re already in trouble. But what if healthcare could be proactive, accessible, and supportive—right from your mobile phone? That’s exactly what Swasth Mitra promises.</p>
        <p>Still, you might be wondering—“Is this service really for me?” In this blog, let’s explore how Swasth Mitra benefits people across age groups, locations, and lifestyles—and why joining this digital healthcare movement might be one of the best decisions for your well-being.</p>

        <h2>1. Healthcare at Your Fingertips, Wherever You Are</h2>
        <p>Whether you’re in a busy city or a quiet village, emergencies don’t discriminate. But access to help can vary. Swasth Mitra bridges this gap by providing 24×7 support through a digital platform. With features like one-tap emergency alerts, real-time location sharing, and instant hospital coordination, help is now just seconds away—even in areas with limited medical infrastructure.</p>

        <h2>2. Peace of Mind for You and Your Loved Ones</h2>
        <p>Taking care of elderly parents or small children? Swasth Mitra allows you to register multiple family members under one account. That means you can manage health emergencies for your whole family from a single dashboard. Even if they don’t use smartphones, you can act on their behalf. You also get access to preventive alerts, check-up reminders, and local health camp updates—all designed to keep your family safe and informed.</p>

        <h2>3. Real Help During Real Emergencies</h2>
        <p>When you press the Emergency Alert button, it does more than just send a signal. It instantly connects to a local command center, dispatches trained volunteers, notifies partner hospitals, and shares your health records with doctors—so that by the time you reach, the team is prepared, not scrambling. This kind of coordinated response can make a life-saving difference when every second counts.</p>

        <h2>4. Preventive Care, Not Just Emergency Response</h2>
        <p>Swasth Mitra doesn’t stop at emergencies. It’s also your daily health companion. You’ll receive health tips, reminders for medical check-ups, details of vaccination drives, and guidance on nutrition and mental wellness—all tailored in your preferred language. This helps you stay informed and take small steps every day toward a healthier life.</p>

        <h2>5. Built for People, Backed by Communities</h2>
        <p>This isn’t a high-tech tool meant only for urban India. Swasth Mitra is built for inclusivity—designed with rural realities, language preferences, and local support systems in mind. From training volunteers in your district to partnering with nearby clinics, the platform strengthens community care. And for every five people you refer, a tree is planted in your name—because we believe health and sustainability go hand in hand.</p>

        <div class="highlight-box">
            <h2>Final Thoughts: A Small Step for You, A Giant Leap for Your Safety</h2>
            <p>In a world where medical emergencies can strike anytime, Swasth Mitra gives you peace of mind. It’s simple to register, easy to use, and reliable when it matters the most.</p>
        </div>

        

        <p>
            So, is Swasth Mitra beneficial for you? <br>
            <strong>Absolutely—if you value quick help, trusted care, and the well-being of your loved ones.</strong><br>
            Take the first step. <a href="/swasth-mitra/login">Register today.</a> <br>
            Because your health isn’t just important—it’s everything.
        </p>
    </div>`
    },
    "get-connected-swasth-mitra": {
        title: "Get Connected, Stay Protected: Start with Swasth Mitra Today",
        content: ` <div class="header-section">
        <h2>Get Connected, Stay Protected: Start with Swasth Mitra Today</h2>
        <p>What if your phone could connect you to a doctor, an ambulance, and the nearest hospital—all in just one tap?</p>
        <p>That’s exactly what Swasth Mitra offers. Whether you’re living in a city apartment or a small village, the platform ensures that during medical emergencies, help is never too far. It’s built for people like you and me—ordinary families who simply want quick, reliable healthcare support without the chaos.</p>
        <p>If you’ve heard about Swasth Mitra and want to know how to use it, this guide will walk you through everything—from reaching the platform to registering and accessing all its services.</p>

        <h2>To get started, open your browser and visit:</h2>
        <p><a href="/" target="_blank">Swasth Mitra</a></p>
        <p>The website is simple, fast to load, and works even if your internet connection isn’t the best. You’ll see a clear “Register Now” button—click on it to begin your journey.</p>
        <p>If you\'re using an Android phone, you can also download the app for quicker access. The iOS version is coming soon.</p>

        <h2>Registration is Quick and Easy</h2>
        <p>Once you click on “Register Now,” you’ll be asked to fill out a short form. Here’s what you’ll need to provide:</p>
        <ul>
            <li>Your name and age</li>
            <li>Your mobile number for OTP verification and emergency contact</li>
            <li>Your village, city, and pin code, so we can connect you with local support</li>
            <li>Your preferred language (like Hindi, Marathi, or English)</li>
            <li>Details about any existing medical conditions (this is optional but useful in emergencies)</li>
        </ul>
        <p>After submitting the form and entering the OTP, your Swasth Mitra Digital Health ID gets activated. From this point, you’re part of a connected healthcare network that’s ready to respond.</p>

        <h2>What Happens After Registration?</h2>
        <p>Once your profile is set up, you’ll be taken to your personalized dashboard. From here, you can do a lot more than just raise an emergency alert.</p>
        <p>You can contact verified doctors for consultations, either online or in person. You’ll also receive daily health tips in your chosen language—short, practical advice that fits easily into your day. And if your family members don’t use smartphones, you can register them under your account and manage their medical needs too.</p>

        <h2>During a Medical Emergency</h2>
        <p>If you ever need help urgently, all you need to do is tap the Emergency Alert button.</p>
        <p>This sends your location and health details to the Swasth Mitra team. Within seconds, a trained volunteer—often someone from your own area—will call you to confirm the situation. Simultaneously, the nearest hospital and ambulance service are notified.</p>
        <p>By the time you arrive, doctors already know your health history. There’s no delay, no panic, just timely care.</p>

        <h2>Staying Healthy Beyond Emergencies</h2>
        <p>Swasth Mitra isn’t just for critical moments. Once registered, you’ll receive regular check-up reminders based on your age and health history. You’ll also get notified about free health camps and vaccination drives in your area.</p>
        <p>Plus, every week you’ll get short video tips on first aid, nutrition, mental well-being, and more—all via WhatsApp. These small nudges often make a big difference in daily health.</p>

        <h2>Help Others While Helping Yourself</h2>
        <p>You can share your Swasth Mitra referral code with friends, family, and even your local clinic. The more people around you who join, the stronger your healthcare network becomes. It also means quicker volunteer responses and better coordination during emergencies.</p>
        <p>And yes—when you refer five people, Swasth Mitra plants a tree in your area. It’s a small but powerful way to combine health and sustainability.</p>

        <div class="highlight-box">
            <h2>Have Questions?</h2>
            <p>We’re here whenever you need us. You can call the 24x7 helpline (the number is visible on every page of the site), send a WhatsApp message, or meet our team at the next community camp.</p>
            <p>Many of our coordinators speak regional languages and are happy to guide you through the app or even help with registering your family members.</p>
        </div>

        <h2>Ready to Register?</h2>
        <p><strong>Swasth Mitra is not just an app—it’s your health safety net.</strong> It brings hospitals, doctors, volunteers, and your loved ones into one connected platform, built for Indian realities.</p>
        <p>Take just five minutes today to register and feel more prepared for tomorrow.</p>
        <p>Visit: <a href="/" target="_blank">Swasth Mitra</a> <br>
        Click “Register Now” and take the first step toward safer, smarter healthcare.</p>
    </div>`
    },
    "preventive-healthcare-swasth-mitra": {
        title: "Preventive Healthcare Made Easy with Swasth Mitra: Stay Healthy, Stay Prepared",
        content: `<div class="header-section">
        <h2>Preventive Healthcare Made Easy with Swasth Mitra: Stay Healthy, Stay Prepared</h2>
        <p>Let’s be honest—most of us only think about our health when something goes wrong. But what if preventive healthcare didn’t feel like a burden? What if it was simple, quick, and even comforting?</p>
        <p>That’s exactly what Swasth Mitra, India’s growing digital health platform, aims to offer—easy preventive health solutions that help you stay one step ahead of emergencies, without needing to visit a hospital every week.</p>

        <h2>Simple Daily Health Tips in Your Language</h2>
        <p>With Swasth Mitra, you get personalized health tips delivered straight to your phone—in Hindi, Marathi, English, or any preferred regional language. These are short, practical messages to help you make better choices every day—like how to stay hydrated, manage stress, or eat right during changing seasons.</p>

        <h2>Never Miss a Preventive Check-Up</h2>
        <p>It’s easy to forget regular health checkups when you feel fine. Swasth Mitra sends automatic health reminders based on your profile. Whether it\'s a blood sugar test, BP check, or routine screening, the app ensures you get timely updates—so small health issues don’t turn into major problems.</p>

        <h2>Get Notified About Free Health Camps and Vaccination Drives</h2>
        <p>Healthcare should be local and accessible. Swasth Mitra keeps you informed about free medical camps, vaccination programs, and awareness sessions happening near you. Whether you live in a city or a rural village, you’ll always know when help is close by.</p>

        <h2>Health Education Videos</h2>
        <p>Learning about health doesn’t have to be boring. Swasth Mitra shares short, easy-to-watch health videos over WhatsApp and inside the app. Topics include first aid, nutrition, home care tips, and mental wellness—everything you need to know, explained simply.</p>

        <h2>Connected Health Profile for Emergency and Prevention</h2>
        <p>Every step you take on Swasth Mitra—registering your family, updating medical history, attending camps—gets saved in your Digital Health ID. In case of emergencies, this helps doctors access your background instantly, saving time and possibly lives.</p>

        <div class="highlight-box">
            <h2>The Swasth Mitra Advantage</h2>
            <p>Swasth Mitra isn’t just for emergencies. It’s for everyday living. It’s designed for families, elderly parents, working professionals, and rural communities who want to stay healthier with less effort.</p>
        </div>

        <h2>What You Should Do</h2>
        <ul>
            <li>Download the Swasth Mitra app or visit the web platform</li>
            <li>Register yourself and your family in minutes</li>
            <li>Set your health goals and let the app guide you</li>
            <li>Follow daily tips and reminders to stay on track</li>
        </ul>

        <p>
            So why wait for a health scare?<br>
            <strong>Take the smarter route.</strong><br>
            Register on Swasth Mitra today and experience personalized, preventive healthcare that’s made for real life.<br>
            Because real care doesn’t start at the hospital—it starts at home.
        </p>
    </div>`
    }
};

const BlogDetails = () => {
    const location = useLocation();

    const blogKey = useMemo(() => {
        const params = new URLSearchParams(location.search);
        return params.get('blog');
    }, [location.search]);

    debugger

    if (!blogKey) {
        return (
            <div style={{ padding: 100, textAlign: "center", fontSize: "1.5rem" }}>
                Blog not found.
            </div>
        );
    }

    return (
        <div className="container py-5">
            {/* Blog Title */}
            <div className="row mb-4 mt-5">
                <div className="col-12">
                    <h1 className="display-4 heading-text fw-bold" style={{ color: "#0a5247" }}>
                        {blogs[blogKey].title}
                    </h1>
                </div>
            </div>

            {/* Blog Content */}
            <div className="row">
                <div className="col-lg-12">
                    <article className="border-0 shadow-sm mb-4">
                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blogs[blogKey].content }} />
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;