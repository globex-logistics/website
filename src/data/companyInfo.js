const clients = [
  "../assets/logos/Fedex logo.png",
  "../assets/logos/Maersk.png",
  "../assets/logos/MSC logo.png",
  "../assets/logos/cma cgm logo.png",
  "../assets/logos/OOCL_logo.png",
  "../assets/logos/aramex.png",
  "../assets/logos/tnt-logo.png",
  "../assets/logos/csav logo.png",
  "../assets/logos/PIL logo.png",
  "../assets/logos/NYK logo.png",
  "../assets/logos/HMM logo.png",
  "../assets/logos/apl-logo.png",
  "../assets/logos/UASC logo.png",
  "../assets/logos/BSL logo.png",
  "../assets/logos/Hanjin_Shipping_Logo.png",
];

const services = [
  {
    urlName: "air-freight",
    name: "Air Freight",
    icon: "../assets/air-freight logo.png",
    whiteicon: "../assets/service_logos/air.png",
    image: "../assets/services/air.jpg",
    description: `
    Globex Logistics specializes in fast, reliable, cost-effective air freight. Partnering with top airlines globally, they ensure a first-class service with competitive rates. Proactively managing client needs, they handle shipments of any size, seamlessly switching between express, courier, or scheduled airlines. For economical air freight, Globex Logistics AIR VALUE offers a cost-effective alternative via major gateways. Urgent air freight with Globex Logistics ensures priority service on the first available flight. Key features include quick transit time, priority handling, and economical routing. Options cover door-to-door, return services, transport insurance, and special security. Globex Logistics caters to diverse clients, organizing major and chartered planes, providing flexibility for all shipping needs.`,
    content: `
    <p>At Globex Logistics, we understand that air freight is a very expensive way for any company to move their product. We are acutely aware that when our customers need an airfreight solution, it must be fast, reliable, and cost-effective. That is why, in conjunction with our global partners, we only use the top-tier airlines. This allows us to offer our clients a first-class service while availing of extremely competitive negotiated rates. We proactively manage our clients' needs to achieve the best results and can handle any size shipments with ease. We can switch traffic between express, courier, or scheduled airlines, or we can split shipments and manage them by air, by sea-air, or by sea depending on shipment size and time constraints.</p> <br/>

<p style="margin-bottom: 20px;">Globex Logistics can organize scheduled major and chartered planes from a wide range of major carriers, as well as competitive services on our carrier, making us flexible enough to help everyone from first-time shippers to regular importers and exporters of freight.</p>

<h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Economical Air Freight</h2>

<p style="margin-bottom: 20px;">When your priority is to keep the cost of moving your goods to a minimum, but your freight must travel by air, then Globex Logistics AIR VALUE is the ideal match. It is designed for less time-sensitive cargo, when a slight increase in transit time is acceptable, and provides an economical alternative to Globex Logistics AIR PREMIUM. To achieve the most competitive price, Globex Logistics AIR VALUE ensures cargo is creatively routed via the major gateways.</p>

<h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Urgent Air Freight</h2>

<p style="margin-bottom: 20px;">When you need your goods moved in the quickest possible transit time, Globex Logistics is your best choice. As the name suggests, Globex Logistics is placed on the first flight out and receives a priority service, through to the destination airport and beyond.</p>

<div style="display: flex; justify-content: space-between;">
  <div style="flex: 1; margin-right: 20px;">
    <h3 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.4em;">Key Features</h3>
    <ul>
      <li>Quickest possible transit time for speedy service</li>
      <li>Uplift on the first available flight, ideal for priority goods</li>
      <li>Priority handling through to delivery</li>
      <li>Economically routed, for price advantage</li>
      <li>Defined transit time lets you plan ahead</li>
      <li>Standard liability</li>
      <li>Airport to airport</li>
    </ul>
  </div>
  <div style="flex: 1;">
    <h3 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.4em;">Options Include</h3>
    <ul>
      <li>Door-to-door pickup and delivery</li>
      <li>Return of non-deliverables</li>
      <li>Transport insurance</li>
      <li>Special Security</li>
    </ul>
  </div>
</div>`,
  },
  {
    urlName: "sea-freight",
    name: "Sea Freight",
    icon: "../assets/sea-freight logo.png",
    whiteicon: "../assets/service_logos/sea.png",
    image: "../assets/services/sea.jpg",
    description: `Globex Logistics, committed to optimizing sea freight services, emphasizes the benefits of meticulous control and a targeted approach in collaboration with global partners. Their expertise extends to both long-haul deep ocean shipments and specialized "short" sea solutions in the Middle East. For Full Container Loads (FCL), centralized purchasing management ensures top-tier carriers, quality, space, and competitive pricing. Leveraging Carrier supported EDDI messaging streamlines the process, fostering a paperless environment for efficient booking and shipping instructions. In Less than Container Load (LCL), Globex Logistics excels in consolidation, offering traditional LCL services and multi-vendor buyers' consolidations with a vast National Gateway network. Over 97% of LCL freight is managed in-house, backed by a Multi-National Gateway network and web-enabled IT solutions, including track-and-trace and order monitoring, ensuring transparency and event data for clients.`,
    content: `<p style="margin-bottom: 20px;">As companies improve their processes and controls, they can plan further ahead and move a lot of their raw material or manufactured goods onto sea and away from air freight. Sea freight service has been revolutionized in recent years with much better transit times and tighter controls on arrivals and departures.</p>

    <p style="margin-bottom: 20px;">At Globex Logistics, we believe that close control and a focused approach when dealing with the sea lines can yield substantial benefits for our customers. We have developed strong and global partnerships with a number of providers, and this enables us to offer an exemplary Sea freight service. Not only can we manage your long-haul deep ocean requirements, but we also specialize in offering "short" sea solutions around the Middle East.</p>
    
    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Full Container Loads</h2>
    
    <p style="margin-bottom: 20px;">Through our centralized purchasing management, we negotiate total volumes with first-class carriers to give you the highest quality, space allotment, and optimum pricing for your FCL freight. Carrier-supported EDDI messaging enables us to streamline our process with a paperless environment to provide booking and shipping instructions to the shipping lines. This simplifies the documentation process and ensures the highest degree of data accuracy and efficiency.</p>
    
    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Less than Container Load</h2>
    
    <p style="margin-bottom: 20px;">Globex Logistics dedicates substantial resources to developing and maintaining a highly effective consolidation system for the LCL market. We provide both traditional LCL services and multi-vendor buyers' consolidations for shipments sourced from single and multiple countries. We carry over 97% of all LCL freight in-house with direct consolidations through our extensive National Gateway network. We back this up with our Multi-National Gateway network by running in-house feeder services in support of our Gateways. Web-enabled IT solutions enhance our LCL services with features such as track-and-trace and order monitoring to provide you with event data and transparency.</p>
    `,
  },
  {
    urlName: "land-freight",
    name: "Land Freight",
    icon: "../assets/land-freight logo.png",
    whiteicon: "../assets/service_logos/land.png",
    image: "../assets/services/land.jpg",
    description: `
    Globex Logistics prioritizes eco-friendly ground transport to reduce carbon footprints. Collaborating with responsible providers, they offer Full Truck Load (FTL) and Loose Truck Load (LTL) Road Freight Services across the Middle East. Utilizing a hub-and-spoke system, their situated office at the UAH border ensures immediate clearance, avoiding border delays. Core services encompass FTL/LTL export/import, door-to-door, LCL/FCL, out-of-gauge, global services, packaging, and full project consultancy. Specialized offerings include customs management, food transport, trade fairs, green logistics, secure transportation for high-value goods, temperature-controlled services for life sciences, and intercontinental distribution solutions. Dedicated solutions feature an FTL network and Lead Logistics Provider (LLP).`,
    content: `<p style="margin-bottom: 20px;">In today's world, we are all conscious of the effects of global warming and of trying to reduce our carbon footprint. One way to do this is to carefully choose your ground transport provider. There are now many responsible providers who manage their routes and fleets in the most eco-friendly fashion possible. This includes providers who use double deck trailers or providers who will, where possible, use smaller vehicles. Best of all, are the companies who believe that one of the most effective methods of reducing cost and climate change is to get the job right in the first place.</p>

    <p style="margin-bottom: 20px;">At Globex Logistics, we work with a select number of providers who fall into this category. We can provide a Full Truck Load Road Freight Service (FTL) as well as Loose Truck Load Road Freight Service (LTL) all over the Middle East in both outbound and inbound using a hub and spoke system which maximizes the vehicle's capabilities while keeping costs down.</p>
    
    <div style="display: flex; justify-content: space-between;">
    <div style="flex: 1; margin-right: 80px;">
    <h3 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.4em;">Core Services</h3>
    <ul>
        <li>Full Truck Load Export/Import Services in UAE as well as to Middle East (Temperature/Non-controlled Vehicles)</li>
        <li>Less than Truck Load Export/Import Services to Middle East (based on CBM)</li>
        <li>Door-to-door Service</li>
        <li>LTL and FTL</li>
        <li>Out of Gauge Service available</li>
        <li>Services to/from all Parts of the Globe</li>
        <li>Packaging and crating services available</li>
        <li>Full Project consultancy service available</li>
        <li>Full Truck Loads (FTL)</li>
    </ul>
    </div>   
  <div style="flex: 1; margin-right: 20px;">
    <h3 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.4em;">Special Services</h3>
    <ul>
        <li>Customs Management and Brokerage</li>
        <li>Transport services for food</li>
        <li>Trade Fairs & Events</li>
        <li>Green logistics features for Road Freight</li>
        <li>Groupage, Palletized and Non-Palletized Cargo (LTL)</li>
        <li>Secure Transportation for High-Value Goods</li>
        <li>Temperature Controlled Groupage Services for the Life Sciences and Healthcare Industry</li>
        <li>Intercontinental Direct Distribution Solutions</li>
    </ul>
  </div>
  </div>
 <br>
    <h3 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.4em;">Dedicated Solutions</h3>
    <ul>
        <li>Dedicated Full Truck Load (FTL) Network</li>
        <li>Lead Logistics Provider (LLP)</li>
    </ul>`,
  },
  {
    urlName: "custom-clearance",
    name: "Custom Clearance",
    icon: "../assets/custom-clearance logo.png",
    whiteicon: "../assets/service_logos/custom.png",
    image: "../assets/services/custom.jpg",
    description: `
    Globex Logistics excels in Customs Brokerage services, ensuring swift processing through their online system linked with UAE Customs Authorities. With a highly trained team using state-of-the-art technology, they guarantee full compliance with customs requirements, minimizing inconvenience. Special services offered include online custom clearance, product listing and approvals with ministries, product inspection with customs, obtaining import/export codes, daily global services, attestation of invoice and packing list from the Chamber of Commerce, and obtaining certificates of origin.`,
    content: `<p style="margin-bottom: 20px;">Globex Logistics provides expert and competitive Customs Brokerage services for any type of commodity, and our online system helps us link with the UAE Customs Authorities to ensure high-speed processing of all shipments. Our highly trained and experienced staff uses the most up-to-date technology to ensure full compliance with all customs requirements, minimizing inconvenience.</p>

    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Special Services Include:</h2>
    <ul>
        <li>Online Custom Clearance (Passing all types of Bills of Entry/Exit)</li>
        <li>Product Listing & Approvals with various Ministries</li>
        <li>Conduct Product Inspection with Customs</li>
        <li>Obtaining Import/Export Codes</li>
        <li>Daily services to/from all Parts of the Globe</li>
        <li>Attestation of Invoice & Packing list from Chamber of Commerce</li>
        <li>Obtaining a certificate of origin</li>
    </ul>
    `,
  },
  {
    urlName: "warehousing-distribution",
    name: "Warehousing & Distribution",
    icon: "../assets/warehouse logo.png",
    whiteicon: "../assets/service_logos/warehouse.png",
    image: "../assets/services/warehouse.jpg",
    description: `Globex Logistics offers flexible and customized Warehousing and Distribution Service Solutions, enabling customers to compete effectively with reduced operating costs and adapt to a dynamic marketplace. Their warehousing services cater to short or long-term storage needs, integrating seamlessly with Logistics Management or Supply Chain products. Facilities are available in Free Zone and Non-Free Zone locations. The distribution solutions encompass nationwide transportation for various cargo sizes, complemented by strategic warehousing, inventory control, and order processing. Integration with freight forwarding and customs clearance services provides a comprehensive, one-stop logistics management solution.`,
    content: `<p style="margin-bottom: 20px;">Globex Logistics provides flexible and customized Warehousing and Distribution Service Solutions to help customers better compete through reduced operating costs and allow them to more efficiently adapt to the rapidly changing marketplace.</p>

    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Warehousing</h2>
    <p style="margin-bottom: 20px;">Whether you require short or long-term storage or a solution integrated with our Logistics Management or Supply Chain products, our warehousing services provide tailored solutions for companies looking for strategically located facilities for an optimal solution. We provide facilities in Free Zone as well as Non-Free Zone.</p>
    
    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Distribution</h2>
    <p style="margin-bottom: 20px;">Our flexible distribution solutions include comprehensive nationwide transportation, be it for small packages, pallets, or larger cargo. We can also provide strategic warehousing, inventory control, order processing, and other value-added services for efficient inventory management. Integration with our freight forwarding and customs clearance services allows customers the benefit of a single, one-stop total logistics management distribution solution.</p>
    
    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Dedicated Operations</h2>
    <p>If the scale, location, or complexity of your business requires a dedicated solution, Globex Logistics has the people and expertise you need. Starting with a thorough analysis of your specific business requirements, our teams design, implement, operate, and improve dedicated warehousing and distribution operations that deliver value to your business.</p>
    <br/>
    
    <h3 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.4em;">Our Services Include:</h3>
    <ul>
        <li>Solutions design and analysis - to help you improve your bottom line and stay flexible in the face of changing business needs.</li>
        <li>Campus locations offering labor balancing and distribution synergies across sites.</li>
        <li>A range of dedicated and multi-customer transportation solutions to meet your service needs.</li>
        <li>Best practice operational processes, controls, and management information.</li>
        <li>Project management methodology to reduce risk, cost, and time on start-ups.</li>
        <li>A strong portfolio of warehouse management systems and interface software to drive productivity and enable faster and more reliable startups.</li>
    </ul>
    `,
  },
  {
    urlName: "logistics-management",
    name: "Logistics Management",
    icon: "../assets/logistics-management logo.png",
    whiteicon: "../assets/service_logos/logistics.png",
    image: "../assets/services/logistics.jpg",
    description: `In the competitive global market, effective supply chain management is crucial, and companies are prioritizing meticulous approaches to optimize inventory control and working capital. Globex Logistics recognizes the significance of efficient Logistics Management for its customers. The experienced team focuses on tailoring solutions to enhance reliability, competitive advantage, and bottom-line results. Individually designed solutions leverage comprehensive freight forwarding, supply chain, transportation, warehousing, distribution, and customs brokerage services. Full warehousing services include storage (temperature control/non-temperature control), pick and pack, crating and packing, and vendor management.`,
    content: ` <p style="margin-bottom: 20px;">Today's competitive and dynamic global market emphasizes the importance of an effective supply chain. Companies are taking a more meticulous approach to their Supply Chain Management and looking to optimize their inventory control and working capital. Globex Logistics fully understands the importance our customers place on effective Logistics Management. Our team of experienced professionals works diligently to produce tailored, customized solutions to increase reliability, competitive advantage, and, hence, the bottom-line for our customers.</p>

    <p style="margin-bottom: 20px;">Our solutions are individually designed utilizing our comprehensive freight forwarding, supply chain, transportation, warehousing, distribution, and customs brokerage services.</p>
    
    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Full Warehousing Services</h2>
    <ul>
        <li>Storage (Temperature control/Non-Temperature Control)</li>
        <li>Pick and Pack</li>
        <li>Crating and Packing</li>
        <li>Vendor Management</li>
    </ul>`,
  },
  {
    urlName: "perishable-DGcargo",
    name: "Perishable & DG Cargo Handling",
    icon: "",
    whiteicon: "../assets/service_logos/dg-cargo.png",
    image: "../assets/services/dg-cargo.jpg",
    description: `Globex Logistics specializes in customized movement and storage services for perishable and dangerous goods, including fresh fruits, meat, flowers, and chemicals. Professional experts ensure timely movement and temperature control. The company handles shipments involving dangerous chemicals, guiding clients with proper State and Government approvals for smooth cargo movement. Special services include fast transit times, a broad service portfolio, total logistics chain visibility for enhanced transparency, proprietary tracking technology for better information, and prioritized handling and placement to ensure constant care for goods.`,
    content: `<p style="margin-bottom: 20px;">Globex Logistics provides customized movement and storage services for perishable goods and dangerous goods, including items such as fresh fruits, meat, flowers, etc. Our professional experts offer tailored solutions to ensure that the movement is met within the specified time, and the temperature is maintained as required. Additionally, we handle shipments that involve the movement of dangerous chemicals.</p>

    <p style="margin-bottom: 20px;">We ensure that the client is properly guided with proper State & Government approvals to ensure the smooth movement of such cargo.</p>
    
    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Special Services</h2>
    <ul>
        <li>Fast transit and turnaround times mean increased efficiency.</li>
        <li>A broad portfolio of services to meet every client's needs.</li>
        <li>Total visibility of the logistics chain offers improved transparency.</li>
        <li>Proprietary tracking technology means better information.</li>
        <li>Prioritized handling and placement ensure your goods are cared for at all times.</li>
    </ul>
    `,
  },
  {
    urlName: "project-cargo",
    name: "Project Cargo",
    icon: "",
    whiteicon: "../assets/service_logos/project-cargo.png",
    image: "../assets/services/project.jpg",
    description: `Globex Logistics specializes in project cargo services, catering to shipments requiring specialized shipping equipment for voluminous, weighty, large-sized, or complex components. Leveraging extensive knowledge and experience from past cargo projects, the company efficiently identifies optimal routes and services to ensure timely and cost-effective delivery. Globex Logistics offers specialized expertise in logistics, precise timing, global connections, and wide geographical knowledge to coordinate project cargo movements locally and globally. Regardless of size, origin, or client needs, they provide solutions meeting transit time requirements at competitive costs. Project handling capabilities encompass site surveys, feasibility studies, multi-modal transport options, adherence to road rules and safety requirements, supervision during loading operations, special equipment transport, freight rate negotiations, and comprehensive administration for all agencies involved (customs clearance, trade documentation, special approvals, etc.).`,
    content: `<p style="margin-bottom: 20px;">Globex Logistics also offers project cargo services for shipments that require specialized shipping equipment, including freight that is voluminous, either by weight, size, or quantity, or composed of complex components that must be disassembled, shipped, and then re-assembled.</p>

    <p style="margin-bottom: 20px;">Our extensive knowledge and experience with many previous cargo projects allow us to quickly identify the most efficient route and service, ensuring that your project cargos arrive at their destination in a timely manner and at the most competitive cost.</p>
    
    <p style="margin-bottom: 20px;">At Globex Logistics, we can provide the specialized expertise in areas such as logistics capabilities, precise timing, wide geographical knowledge, and global connections to coordinate project cargo movements locally and globally. No matter the size, the goods' origin, or the client's needs, we can always find a solution that meets your requirements for transit times at competitive costs.</p>
    
    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Our Project Handling Capabilities Include:</h2>
    <ul>
        <li>Site survey and feasibility studies</li>
        <li>Multi-modal transport options</li>
        <li>Strict attention to all road rules and safety requirements</li>
        <li>Supervising at origin location during the loading operations</li>
        <li>Special equipment transport (flat racks, open tops, platforms, etc.)</li>
        <li>Freight rate negotiations with carriers</li>
        <li>Administration for all agencies (Customs clearance, trade documentation, Special approvals, etc.)</li>
    </ul>`,
  },
  {
    urlName: "cargo-packaging",
    name: "Cargo Packaging",
    icon: "",
    whiteicon: "../assets/service_logos/packaging.png",
    image: "../assets/services/packaging.jpg",
    description: `Globex Logistics boasts an extensive cargo packing infrastructure with a specialized team dedicated to ensuring the safety of commodities. Their services encompass customized box packing, promotional packing, and wrapping cargo palletizing, showcasing a commitment to secure and efficient cargo handling.`,
    content: `<p style="margin-bottom: 20px;">Globex Logistics operates with a huge setup of cargo packing infrastructure. We have a specialized team to take care of all your cargo packing to ensure the safety of the commodities.</p>

    <h2 style="margin-bottom: 10px; color: #E64A2F; font-size: 1.6em;">Our Services Include:</h2>
    <ul>
        <li>Customized box packing</li>
        <li>Promotional packing</li>
        <li>Wrapping cargo palletizing</li>
    </ul>
    `,
  },
];

export { clients, services };
