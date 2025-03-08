import courierAdmin from "../assets/steadfast_admin.png";
import algorithm from "../assets/algorithm.png";
import bangladrop from "../assets/bangladrop.png";
import biggapon from "../assets/biggapon.png";
import fashionable from "../assets/fashionable.png";
import fastpower from "../assets/fastpower.png";
import inonic_style from "../assets/inonic_style.png";
import inventory from "../assets/inventory.png";
import maynooth from "../assets/maynooth.png";
import steadfast_merchant from "../assets/steadfast_merchant.png";
import c_admin_dashboard from "../assets/courier-admin/dashboadr.png";
import chat from "../assets/courier-admin/chat-application.png";
import c_admin_profile from "../assets/courier-admin/merchant-profile.png";
import c_admin_parcel from "../assets/courier-admin/parcel-details.png";

const projects = [

    {
        "id": 1,
        "contribution": 100,
        "name": "Courier Management System (Admin panel)",
        "short_description": "Designed a responsive and user-friendly Courier Management System using HTML, CSS, Bootstrap, and JavaScript to streamline parcel booking, tracking, and delivery management. Created an intuitive UI for easy navigation. Optimized performance with CSS animations, JavaScript validations, and responsive design techniques, ensuring compatibility across all devices.",
        "technology": {
            "web_technology": ["JavaScript", "Jquery", "etc."],
            "design_technology": ["HTML", "Bootstrap CSS", "Animation"],
            "backend_technology": ["PHP (laravel)"],
            "others": [""],
            "others_tools": ["ClickUp", "GitHub", "Figma"],
        },
        "database": "MySQL",
        "thumbnail": courierAdmin,
        "key_features": [
            "User Authentication & Authorization – Secure login and role-based access (Admin, Delivery Personnel, Customer).",
            "Parcel Booking System – Users can book shipments by entering sender/receiver details and parcel weight.",
            "Real-time Tracking – Customers can track parcel status using a unique tracking ID.",
            "Dashboard for Admin & Users – Admins can manage bookings, delivery agents, and system analytics.",
            "Automated Status Updates – Status changes from Booked → In Transit → Delivered with real-time updates.",
            "Delivery Route Optimization – System suggests the best routes for delivery efficiency.",
            "Notifications & Alerts – Email/SMS notifications for shipment status updates.",
            "Invoice & Payment Integration – Automated invoice generation and payment gateway support.",
            "Responsive & Mobile-Friendly UI – Ensures smooth experience on all devices.",
            "Reports & Analytics – Track performance metrics, revenue, and delivery efficiency.",
        ],
        "images": [
            c_admin_dashboard,
            chat,
            c_admin_profile,
            c_admin_parcel,
        ],
        "contribute": [
            "Frontend Development: Designed and developed the entire UI using HTML, CSS, Bootstrap, and JavaScript.",
            "User Experience (UX) Optimization: Ensured smooth navigation, clear layouts, and responsive design.",
            "Form Validations: Implemented JavaScript validations for secure and error-free data input.",
            "Parcel Tracking System: Designed the tracking interface to allow users to check parcel status in real-time.",
            "CSS Animations & Enhancements: Improved UI interactivity with CSS animations and smooth transitions.",
            "Performance Optimization: Minimized CSS and JavaScript for better page speed and responsiveness.",
            "Cross-Browser Compatibility: Ensured the system works seamlessly across different browsers."
        ],
        "liveLink": "https://steadfast.com.bd/",
        "githubLink": "",
        "Notes": "This is a commercial project, so the live and GitHub links cannot be shared.",

    },
    {
        "id": 2,
        "contribution": 70,
        "name": "Inventory Management System",
        "short_description": "The Inventory Management System is a scalable web application built with React.js & Redux to streamline product management, stock tracking, order processing, account management, and supplier coordination. It features role-based authentication, real-time analytics, advanced search, and real-time notifications, ensuring efficiency and seamless user experience.",
        "technology": {
            "web_technology": ["React.js", "Redux Toolkit", "RTK Query", "etc."],
            "design_technology": ["HTML", "Bootstrap CSS"],
            "backend_technology": ["PHP (laravel)"],
            "others": ["REST API", "JWT Authentication", "Axios/Fetch", "Postman", "Chart.js"],
            "others_tools": ["ClickUp", "GitHub", "Figma"],
        },
        "database": "MySQL",
        "thumbnail": inventory,
        "key_features": [
            "Role-Based Authentication – Secure login with different roles (Admin, Manager, Staff).",
            "Product Management – Add, edit, delete, and categorize products with stock levels.",
            "Stock Tracking & Alerts – Real-time stock updates with low-stock and out-of-stock notifications.",
            "Order Processing System – Create, manage, and track customer orders with invoice generation.",
            "Supplier & Vendor Management – Maintain supplier details and purchase history.",
            "Advanced Search & Filters – Quickly find products, orders, or suppliers using search and filters.",
            "Real-Time Analytics & Reports – Dashboard with sales trends, stock movement, and revenue insights.",
            "Multi-User Access with Permissions – Control access to different features based on user roles.",
            "Barcode & QR Code Integration – Scan barcodes/QR codes for quick product identification.",
            "Mobile-Responsive UI – Fully optimized for desktops, tablets, and mobile devices."

        ],
        "images": [
            c_admin_dashboard,
            chat,
            c_admin_profile,
            "https://placehold.co/603",
            "https://placehold.co/604",
        ],
        "contribute": [
            "Frontend Development – Developed the entire UI using React.js, Redux, and Tailwind CSS.",
            "State Management – Used Redux to manage inventory state efficiently across components.",
            "Authentication & Authorization – Implemented secure login with role-based access.",
            "Dynamic Product Management – Built an intuitive UI for adding, editing, and deleting products.",
            "Real-Time Stock Updates – Integrated real-time stock level tracking with alerts.",
            "Order & Invoice System – Designed the order processing and invoice generation modules.",
            "Search & Filtering – Implemented an optimized search feature for quick product lookup.",
            "Responsive UI Design – Ensured mobile-friendly and cross-browser compatibility.",
            "Performance Optimization – Minimized bundle size and optimized API calls for faster performance.",
            "Testing & Debugging – Conducted thorough UI testing and fixed performance issues."
        ],
        "liveLink": "",
        "githubLink": "",
        "Notes": "This is a commercial project, so the live and GitHub links cannot be shared.",

    },
    {
        "id": 3,
        "contribution": 60,
        "name": "E-Commerce Web Application",
        "short_description": "Developed a scalable eCommerce platform using React.js & Next.js with multi-role access (Admin, Manager, Dealer, Customer). The system includes product management, order processing, stock tracking, returns, refunds, and a POS system for dealers. Integrated secure authentication, real-time updates, ensuring efficiency and seamless user experience.",
        "technology": {
            "web_technology": ["React.js", "Next.js", "Redux Toolkit", "RTK Query", "etc."],
            "design_technology": ["HTML", "Bootstrap CSS"],
            "backend_technology": ["PHP (laravel)"],
            "others": ["REST API", "JWT Authentication", "Axios/Fetch", "Postman", "Chart.js"],
            "others_tools": ["ClickUp", "GitHub", "Figma"],
        },
        "database": "MySQL",
        "thumbnail": fastpower,
        "key_features": [
            "Multi-Role Authentication – Role-based access for Admins, Managers, Dealers, and Customers.",
            "Product Management – Add, update, delete, and categorize products with images and descriptions.",
            "Order Processing System – Customers can place orders, track status, and receive updates.",
            "Stock & Inventory Tracking – Real-time stock updates and low-stock alerts for seamless inventory management.",
            "Returns & Refunds Handling – Customers can request returns, and admins can process refunds.",
            "POS System for Dealers – Dealers can manage in-store sales using a built-in Point of Sale system.",
            "Secure Payment Gateway – Integrated multiple payment methods like Stripe, PayPal, and COD.",
            "Wishlist & Cart System – Customers can add products to their wishlist or shopping cart for easy checkout.",
            "Real-Time Notifications – Order confirmations, shipping updates, and promotional notifications.",
            "Search & Filtering System – Advanced search with filters for categories, price, ratings, and availability.",
            "Customer Reviews & Ratings – Customers can leave reviews and ratings for purchased products.",
            "Mobile-Optimized UI – Fully responsive design ensuring smooth experience across all devices."
        ],
        "images": [
            "https://placehold.co/600",
            "https://placehold.co/601",
            "https://placehold.co/602",
            "https://placehold.co/603",
            "https://placehold.co/604",
        ],
        "contribute": [
            "Frontend Development – Built the UI using React.js, Next.js, Tailwind CSS, and optimized for performance.",
            "Authentication & Authorization – Implemented role-based authentication with secure access controls.",
            "Product Management UI – Designed and developed dynamic product pages, including CRUD operations.",
            "Cart & Checkout System – Built an intuitive shopping cart with seamless checkout functionality.",
            "Order Tracking Interface – Designed the order tracking system, displaying real-time status updates.",
            "POS System for Dealers – Developed the frontend of the POS system, enabling in-store sales.",
            "Wishlist & Filtering Features – Added wishlist functionality and optimized product search with filters.",
            "Performance Optimization – Improved Next.js SSR (Server-Side Rendering) and lazy loading for better speed.",
            "Mobile-Friendly & Responsive UI – Ensured cross-browser compatibility and a smooth mobile experience.",
            "Collaboration & Code Review – Worked closely with the team, reviewing and optimizing the frontend code."
        ],
        "liveLink": "https://fastpowertech.com/",
        "githubLink": "",
        "Notes": "N/A",

    },
    {
        "id": 4,
        "contribution": 80,
        "name": "Courier Management System (Merchant panel)",
        "short_description": "Designed a responsive and user-friendly Courier Management System using HTML, CSS, Bootstrap, and JavaScript to streamline parcel booking, tracking, and delivery management. Created an intuitive UI for easy navigation. Optimized performance with CSS animations, JavaScript validations, and responsive design techniques, ensuring compatibility across all devices.",
        "technology": {
            "web_technology": ["JavaScript", "Jquery", "etc."],
            "design_technology": ["HTML", "Bootstrap CSS", "Animation"],
            "backend_technology": ["PHP (laravel)"],
            "others": [""],
            "others_tools": ["ClickUp", "GitHub", "Figma"],
        },
        "database": "MySQL",
        "thumbnail": steadfast_merchant,
        "key_features": [
            "User Authentication & Authorization – Secure login and role-based access (Admin, Delivery Personnel, Customer).",
            "Parcel Booking System – Users can book shipments by entering sender/receiver details and parcel weight.",
            "Real-time Tracking – Customers can track parcel status using a unique tracking ID.",
            "Dashboard for Admin & Users – Admins can manage bookings, delivery agents, and system analytics.",
            "Automated Status Updates – Status changes from Booked → In Transit → Delivered with real-time updates.",
            "Delivery Route Optimization – System suggests the best routes for delivery efficiency.",
            "Notifications & Alerts – Email/SMS notifications for shipment status updates.",
            "Invoice & Payment Integration – Automated invoice generation and payment gateway support.",
            "Responsive & Mobile-Friendly UI – Ensures smooth experience on all devices.",
            "Reports & Analytics – Track performance metrics, revenue, and delivery efficiency.",
        ],
        "images": [
            "https://placehold.co/600",
            "https://placehold.co/601",
            "https://placehold.co/602",
            "https://placehold.co/603",
            "https://placehold.co/604",
        ],
        "contribute": [
            "Frontend Development: Designed and developed the entire UI using HTML, CSS, Bootstrap, and JavaScript.",
            "User Experience (UX) Optimization: Ensured smooth navigation, clear layouts, and responsive design.",
            "Form Validations: Implemented JavaScript validations for secure and error-free data input.",
            "Parcel Tracking System: Designed the tracking interface to allow users to check parcel status in real-time.",
            "CSS Animations & Enhancements: Improved UI interactivity with CSS animations and smooth transitions.",
            "Performance Optimization: Minimized CSS and JavaScript for better page speed and responsiveness.",
            "Cross-Browser Compatibility: Ensured the system works seamlessly across different browsers."
        ],
        "liveLink": "https://steadfast.com.bd/",
        "githubLink": "",
        "Notes": "This is a commercial project, so the live and GitHub links cannot be shared.",

    },
    {
        "id": 5,
        "contribution": 80,
        "name": "Company Profile Website",
        "short_description": "Developed a modern, responsive company profile website showcasing the company's services, portfolio, team, and contact information. Designed an interactive and visually appealing UI with Bootstrap for a seamless user experience.",
        "technology": {
            "web_technology": ["JavaScript", "Jquery", "etc."],
            "design_technology": ["HTML", "Bootstrap CSS", "Animations"],
            "backend_technology": [""],
            "others": [""],
            "others_tools": ["ClickUp", "GitHub", "Figma"],
        },
        "database": "",
        "thumbnail": algorithm,
        "key_features": [
            "Modern & Responsive Design – Built with HTML, CSS, Bootstrap, ensuring a seamless experience on all devices.",
            "Homepage with Hero Section – Engaging introduction with a visually appealing banner and call-to-action.",
            "Services Section – Showcasing the company's services with descriptions, icons, and animations.",
            "Portfolio/Gallery – Displaying past projects with interactive sliders and filters.",
            "Meet the Team Section – Featuring team members with names, roles, and social media links.",
            "Contact Form with API Integration – Functional contact form sending messages directly to the company.",
            "Google Maps Integration – Embedded Google Maps for easy location access.",
            "SEO Optimization – Meta tags, schema markup, and keyword optimization for better search rankings.",
            "Lazy Loading & Code Splitting – Improved performance by loading components only when needed.",
            "Fast Loading & Optimized Performance – Minimized CSS, JavaScript, and images for quick load times.",
            "Testimonials & Client Feedback – Displaying customer reviews in a dynamic, auto-scrolling section.",
            "Blog/News Section – Optional blog section for company updates and industry insights."
        ],
        "images": [
            "https://placehold.co/600",
            "https://placehold.co/601",
            "https://placehold.co/602",
            "https://placehold.co/603",
            "https://placehold.co/604",
        ],
        "contribute": [
            "Frontend Development – Built the UI using HTML, CSS, Bootstrap, ensuring a smooth user experience.",
            "Homepage & Navigation Design – Designed a modern, visually appealing homepage with an interactive layout.",
            "Portfolio & Services Sections – Developed dynamic sections to showcase projects and services effectively.",
            "Contact Form Integration – Implemented a working contact form connected to an API or email service.",
            "SEO Optimization – Improved SEO structure with meta tags, alt attributes, and schema markup.",
            "Performance Enhancements – Used lazy loading and code splitting for faster page load times.",
            "Mobile-Friendly & Responsive UI – Ensured cross-browser compatibility and a seamless mobile experience.",
            "Animations & Visual Effects – Enhanced UX with animations, hover effects, and smooth transitions.",
            "Google Maps & Social Media Links – Integrated Google Maps and social media icons for better engagement.",
            "Testing & Debugging – Conducted thorough UI testing to fix any issues before deployment."
        ],
        "liveLink": "https://algorithm-two.vercel.app/",
        "githubLink": "https://github.com/mannan608/algorithm",
        "Notes": "",

    },
    {
        "id": 6,
        "contribution": 80,
        "name": "DropShiping E-Commerce Web Application",
        "short_description": "The DropShipping E-Commerce Web Application is a user-friendly and responsive platform designed to facilitate online product sales without maintaining inventory. Built with HTML, CSS, Bootstrap, and JavaScript, the application provides seamless product browsing, automated order processing, and secure checkout. It ensures an intuitive user experience with optimized performance, CSS animations, and JavaScript validations, making it accessible across all devices.",
        "technology": {
            "web_technology": ["JavaScript", "Jquery", "etc."],
            "design_technology": ["HTML", "Bootstrap CSS", "Animations"],
            "backend_technology": ["PHP (Laravel)"],
            "others": [""],
            "others_tools": ["ClickUp", "GitHub", "Figma"],
        },
        "database": "MySQL",
        "thumbnail": bangladrop,
        "key_features": [
            "User-Friendly UI – Clean and responsive design for seamless navigation.",
            "Product Listing & Categories – Displaying products dynamically with search and filtering options.",
            "Automated Order Processing – Orders are forwarded directly to suppliers for fulfillment.",
            "Secure Checkout System – Integrated payment gateways for smooth transactions.",
            "Real-Time Inventory Management – Stock updates directly from suppliers.",
            "Wishlist & Cart System – Users can add products to wishlist or shopping cart for easy purchase.",
            "Customer Accounts & Order Tracking – Users can track their order status in real-time.",
            "Mobile-Responsive Design – Ensures seamless experience on desktops, tablets, and mobile devices.",
            "CSS Animations & UI Enhancements – Smooth transitions and interactive elements for better UX.",
            "SEO & Performance Optimization – Faster load times with optimized code and structured meta tags."
        ],
        "images": [
            "https://placehold.co/600",
            "https://placehold.co/601",
            "https://placehold.co/602",
            "https://placehold.co/603",
            "https://placehold.co/604",
        ],
        "contribute": [
            "Frontend Development – Designed and developed the entire UI using HTML, CSS, Bootstrap, and JavaScript.",
            "Navigation & Layout Design – Created an intuitive layout with a seamless shopping experience.",
            "Product Page & Filtering System – Implemented product display with sorting and category filtering.",
            "Form Validations & Security – Used JavaScript validation for secure checkout and registration.",
            "CSS Animations & UI Enhancements – Added smooth animations, hover effects, and transitions for better interactivity.",
            "Responsive Design – Ensured cross-browser compatibility and mobile responsiveness.",
            "Optimization & Performance – Minimized CSS & JavaScript files for faster load times.",
            "Cart & Wishlist Functionality – Built shopping cart and wishlist features to enhance user experience.",
            "Testing & Debugging – Fixed layout issues and optimized JavaScript performance for smooth functionality."
        ],
        "liveLink": "https://bangladrop.com/",
        "githubLink": "",
        "Notes": "N/A",

    },
];

export default projects;
